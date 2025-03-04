import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import Toast, { defaultDuration } from '../Toast';
import { View, ViewStyle } from 'react-native';
import { Theme, ToastContextType, ToastProps, ToastProviderProps } from '../types';
import styles from './styles';

interface Props {
  children: React.ReactNode;
  theme?: Theme;
  toast?: ToastProps['children'];
  offset?: number;
  providerContainerStyle?: ViewStyle;
}

const noop = () => undefined;

const defaultValue: ToastContextType = {
  show: noop,
  showError: noop,
  showWarning: noop,
  showInfo: noop,
  clear: noop
};

export let ToastService = defaultValue;

export const ToastContext = createContext<ToastContextType>(defaultValue);

const ToastProvider = ({ children, theme, ...props }: Props & ToastProviderProps) => {
  const [routeName, setRouteName] = useState(null);
  const [toast, setToast] = useState<ToastProps | null>(null);
  const [toastTimeOutId, setToastTimeOutId] = useState<NodeJS.Timeout>();
  const onClose = useCallback(() => { toast?.onClose?.(); setToast(null) }, [toast]);

  const clearToastTimeOut = useCallback(() => {
    if (toastTimeOutId) {
      clearTimeout(toastTimeOutId);
    }
  }, [toastTimeOutId]);

  const setToastTimeOut = useCallback(() => {
    const timeOutId = setTimeout(() => {
      onClose();
    }, defaultDuration);

    setToastTimeOutId(timeOutId);
  }, [setToastTimeOutId]);

  const setToastData = (type: ToastProps['type'], params: Partial<ToastProps | null>) => {
    clearToastTimeOut();
    setToast({ type, ...params });
    setToastTimeOut();
  }

  const value = useMemo<ToastContextType>(() => {
    return {
      show: (params) => {
        setToastData('success', params);
      },
      showError: (params) => {
        setToastData('danger', params);
      },
      showWarning: (params) => {
        setToastData('warning', params);
      },
      showInfo: (params) => {
        setToastData('info', params);
      },
      clear: () => {
        clearToastTimeOut();
        setToastTimeOut();
        setToast(null);
      },
      routeName,
      toast,
      setRouteName
    };
  }, [routeName, toast, clearToastTimeOut, setToastTimeOut]);

  useEffect(() => {
    ToastService = value;

    return () => {
      ToastService = defaultValue;
      clearToastTimeOut();
    };
  }, [value]);

  return (
    <View style={[styles.styles.container, props.providerContainerStyle].flat()}>
      <ToastContext.Provider value={value}>
        {children}
        <Toast
          message=""
          {...toast}
          open={Boolean(toast)}
          onClose={onClose}
          theme={theme}
          children={props.toast || toast?.children}
          offset={props.offset}
          {...props}
        />
      </ToastContext.Provider>
    </View>
  );
};


export default ToastProvider;

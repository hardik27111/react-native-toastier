import React, { useEffect, useMemo } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import theme from '../theme';
import styled from './styles';
import { Theme, ToastProps } from '../types';
import useToastState from '../hooks/useToastState';

export const defaultDuration = 15000;

interface Props {
  open?: boolean;
  onClose?: () => void;
  theme?: Theme
}

const Toast = ({
  message,
  children,
  duration: timing,
  theme: toastTheme,
  type = 'default',
  open,
  onClose,
  left,
  right,
  contentContainerStyle,
  textContainerStyle,
  textStyle,
  animation = 'zoomIn',
  position = 'bottom'
}: ToastProps & Props) => {
  const { state, action } = useToastState({ position, animation })
  const { showToast, animation: Animation } = state;
  const { startAnimations, finishAnimations } = action;
  const Theme = useMemo(() => (toastTheme ? { toast: toastTheme } : theme), [theme, toastTheme])
  const duration = timing || defaultDuration;

  const onDismiss = () => {
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      startAnimations()

      const timeout = setTimeout(() => {
        hideToast();
        onDismiss();
      }, duration);

      return () => clearTimeout(timeout);
    } else {
      hideToast();
    }
  }, [open, duration, onDismiss, showToast]);

  const hideToast = () => {
    onDismiss();
    finishAnimations();
  };

  const getPositionStyle = () => {
    switch (position) {
      case 'top':
        return { top: 0 };
      case 'bottom':
        return { bottom: 0 };
      case 'left':
        return { left: 0 };
      case 'right':
        return { right: 0 };
      default:
        return { bottom: 0 };
    }
  };


  if (!open) {
    return null;
  }

  return (
    <Animated.View
      style={[styled.styles.container, getPositionStyle(), { opacity: showToast }, Animation]}>
      <View style={[styled.styles.toastContainer, theme?.toast?.[type], Theme?.toast?.[type], contentContainerStyle]}>
        {left ?? null}
        {children ?? (
          <>
            <View style={[styled.styles.textContainer, textContainerStyle]}>
              <Text
                style={[styled.styles.text, { color: Theme?.toast?.[type]?.color || theme?.toast?.[type]?.color }, textStyle]}>
                {message}
              </Text>
            </View>
          </>
        )}
        {right ?? <TouchableOpacity style={{ padding: 20 }} onPress={hideToast}>
          <Text style={[styled.styles.iconStyle, { color: Theme?.toast?.[type]?.color || theme?.toast?.[type].color }, textStyle]}>x</Text>
        </TouchableOpacity>}
      </View>
    </Animated.View>
  );
};

export default Toast;

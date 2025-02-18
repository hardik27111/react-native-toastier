import { StyleProp, TextStyle, ViewStyle } from "react-native";

export const enum ToastTypeEnum {
    Success = 'success',
    Danger = 'danger',
    Waring = 'orange',
    Info = 'info'
}

type ContainerStyle = {
    /**
    * Toast message color.
    */
    color: string;
    /**
    * Toast container background color.
    */
    backgroundColor: string;
    /**
    * Toast container border color.
    */
    borderColor?: string;
}

export type ToastProviderProps = Pick<ToastProps, 'animation' | 'position' | 'duration' | 'contentContainerStyle' | 'textContainerStyle' | 'titleStyle' | 'messageStyle'>

export interface Theme {
    /**
    * Succes Toast styles.
    */
    success?: ContainerStyle;
    /**
    * Info Toast styles.
    */
    info?: ContainerStyle;
    /**
    * Warning Toast styles.
    */
    warning?: ContainerStyle;
    /**
    * Error or Danger Toast styles.
    */
    danger?: ContainerStyle;
    /**
    * Default Gray Toast styles.
    */
    default?: ContainerStyle;
}

export interface ToastProps {
    /**
    * Short message on action completion.
    */
    message?: string;
    /**
    * How long toast will stay before it go away, In ms
    */
    duration?: number;
    /**
    * You can implement your custom toast with JSX using childern prop.
    */
    children?: React.ReactNode;
    /**
    * Toast left component, like icons.
    */
    left?: React.ReactNode;
    /**
    * Toast right component, like icons, button.
    */
    right?: React.ReactNode;
    /**
    * Toast types, You can implement your custom types with JSX using renderType method on ToastContainer.
    */
    type?: 'success' | 'danger' | 'info' | 'warning' | 'default';
    /**
    * Toast position on screen 
    */
    position?: 'top' | 'bottom';
    /**
    * Toast animation type when appear.
    */
    animation?: 'zoomIn' | 'slide' | 'slideLeft' | 'slideRight';
    /**
    * Toast container style.
    */
    contentContainerStyle?: StyleProp<ViewStyle>;
    /**
    * Toast message container style.
    */
    textContainerStyle?: StyleProp<ViewStyle>;
    /**
    * Toast message title style.
    */
    titleStyle?: StyleProp<TextStyle>;
    /**
    * Toast message message style.
    */
    messageStyle?: StyleProp<TextStyle>;
    /**
    * Execute event after toast is appear.
    */
    onOpen?: () => void;
    /**
    * Execute event after toast is closed.
    */
    onClose?: () => void;
}

export interface ToastContextType {
    /**
    * To show a success toast.
    */
    show: (props: ToastProps) => void;
    /**
    * To show an error toast.
    */
    showError: (props: ToastProps) => void;
    /**
    * To show a warning toast.
    */
    showWarning: (props: ToastProps) => void;
    /**
    * To show an info toast.
    */
    showInfo: (props: ToastProps) => void;
    /**
    * To show an clear toast.
    */
    clear: () => void;
}
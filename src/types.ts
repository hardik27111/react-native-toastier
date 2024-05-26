import { StyleProp, TextStyle, ViewStyle } from "react-native";

export const enum ToastTypeEnum {
    Success = 'success',
    Danger = 'danger',
    Waring = 'orange',
    Info = 'info'
}

type ContainerStyle = {
    color: string;
    backgroundColor: string;
    borderColor?: string;
}

export type ToastProviderProps = Pick<ToastProps, 'animation' | 'position' | 'contentContainerStyle' | 'textContainerStyle' | 'textStyle'>

export interface Theme {
    success?: ContainerStyle;
    info?: ContainerStyle;
    warning?: ContainerStyle;
    danger?: ContainerStyle;
    default?: ContainerStyle;
}

export interface ToastProps {
    message?: string;
    children?: React.ReactNode;
    left?: React.ReactNode;
    right?: React.ReactNode;
    type?: 'success' | 'danger' | 'info' | 'warning' | 'default';
    position?: 'top' | 'bottom' | 'left' | 'right';
    animation?: 'zoomIn' | 'slide' | 'slideLeft' | 'slideRight';
    contentContainerStyle?: StyleProp<ViewStyle>;
    textContainerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

export interface ToastContextType {
    show: (props: ToastProps) => void;
    showError: (props: ToastProps) => void;
    showWarning: (props: ToastProps) => void;
    showInfo: (props: ToastProps) => void;
    clear: () => void;
}
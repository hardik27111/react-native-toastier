import { useMemo, useRef } from "react";
import { Animated, Dimensions } from "react-native";
import { ToastProps } from "../types";

const width = Dimensions.get('window').width;

interface Props {
    position: ToastProps['position'];
    animation: ToastProps['animation'];
    onClose: ToastProps['onClose'];
    offset?: number;
}

const useToastState = ({ position, offset, animation = 'zoomIn', onClose }: Props) => {
    const showToast = useRef(new Animated.Value(0)).current;
    const zoomAnimation = useRef(new Animated.Value(0)).current;
    const animatedValue = useMemo(() => {

        if (animation === 'slide' && position === 'bottom') {
            return offset || 100;
        }
        if (animation === 'slideLeft') {
            return offset || -width;
        }
        if (animation === 'slideRight') {
            return offset || width
        }
        return offset || -100
    }, [animation, position, offset]);

    const slideAnimation = new Animated.Value(animatedValue);

    const _animations = [Animated.timing(showToast, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
    })];

    const startAnimations = () => {
        if (animation === 'zoomIn') {
            _animations.push(
                Animated.spring(zoomAnimation, {
                    toValue: 1,
                    friction: 6,
                    tension: 20,
                    useNativeDriver: true
                })
            )
        }
        if (['slide', 'slideLeft', 'slideRight'].includes(animation)) {
            _animations.push(Animated.spring(slideAnimation, {
                toValue: 0,
                friction: 6,
                tension: 20,
                useNativeDriver: true
            }))
        }
        Animated.parallel(_animations).start();
    }

    const finishAnimations = () => {
        if (animation === 'zoomIn') {
            _animations.push(
                Animated.timing(zoomAnimation, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                })
            )
        }
        if (['slide', 'slideLeft', 'slideRight'].includes(animation)) {
            _animations.push(Animated.timing(slideAnimation, {
                toValue: animatedValue,
                duration: 300,
                useNativeDriver: true
            }))
        }
        Animated.parallel(_animations).start(() => onClose?.());
    }

    const _animation = useMemo(() => {
        if (animation === 'slide') {
            return { transform: [{ translateY: slideAnimation }] }
        }
        if (['slideLeft', 'slideRight']?.includes(animation)) {
            return { transform: [{ translateX: slideAnimation }] }
        }
        return {
            transform: [
                {
                    scale: zoomAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1]
                    })
                }
            ]
        }
    }, [slideAnimation, zoomAnimation, animation, offset])

    return {
        state: {
            showToast,
            animation: _animation
        },
        action: {
            startAnimations,
            finishAnimations
        }
    }
}

export default useToastState;
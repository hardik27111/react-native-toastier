import { View } from 'react-native';
import { ToastService } from 'react-native-toastier';
import styles from './styles';
import ToastButton from './ToastButton';

const ToastView = () => {
	return (
		<View style={styles.container}>
			<ToastButton label='Show Success' onPress={() => ToastService.show({ message: 'This is a success message' })} />
			<ToastButton label='Show Error' onPress={() => ToastService.showError({ message: 'This is a error message' })} />
			<ToastButton label='Show Info' onPress={() => ToastService.showInfo({ message: 'This is a info message' })} />
			<ToastButton label='Show Warn' onPress={() => ToastService.showWarning({ message: 'This is a warn message' })} />
			<ToastButton label='Show Top Toast' onPress={() => ToastService.show({ message: 'This is a success message', position: 'top' })} />
			<ToastButton label='Show Slide Left' onPress={() => ToastService.show({ message: 'This is a slide left message', animation: 'slideLeft' })} />
			<ToastButton label='Show Slide Right' onPress={() => ToastService.show({ message: 'This is a slide right message', animation: 'slideRight' })} />
			<ToastButton label='Show Slide' onPress={() => ToastService.show({ message: 'This is a slide message', animation: 'slide' })} />
		</View>
	)
}

export default ToastView;

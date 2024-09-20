import { Text, TouchableOpacity, View } from 'react-native';
import { ToastProps, ToastService } from 'react-native-toastier';
import styles from './styles';

interface Props {
	label: string;
	onPress: () => void;
}

const ToastButton = ({ label, onPress }: Props) => {
	return (
		<>
			<TouchableOpacity style={styles.button} onPress={onPress} >
				<Text style={{ color: '#000' }} >{label}</Text>
			</TouchableOpacity>
		</>
	)
}

export default ToastButton;

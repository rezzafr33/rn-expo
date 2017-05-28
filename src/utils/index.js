import { Platform, Dimensions } from 'react-native';

export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 30;
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;


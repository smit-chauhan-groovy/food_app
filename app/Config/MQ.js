import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen').width;

const isTab = width <= 2736 && width >= 600;
const isTabLandScape = width <= 2736 && width >= 600;
const isTabPortrait = width >= 600 && width <= 600;

export {isTab, isTabLandScape, isTabPortrait};

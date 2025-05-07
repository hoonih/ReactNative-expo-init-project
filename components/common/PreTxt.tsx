import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';
import { useFonts } from 'expo-font';

type PretxtProps = {
  weight?: 'Thin' | 'ExtraLight' | 'Light' | 'Regular' | 'Medium' | 'SemiBold' | 'Bold' | 'ExtraBold' | 'Black';
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
} & TextProps;

const Pretxt: React.FC<PretxtProps> = ({ weight = 'Regular', style, children, ...rest }) => {
  const [loaded] = useFonts({
    'Pretendard-Thin': require('../../assets/fonts/pretendard/Pretendard-Thin.otf'),
    'Pretendard-ExtraLight': require('../../assets/fonts/pretendard/Pretendard-ExtraLight.otf'),
    'Pretendard-Light': require('../../assets/fonts/pretendard/Pretendard-Light.otf'),
    'Pretendard-Regular': require('../../assets/fonts/pretendard/Pretendard-Regular.otf'),
    'Pretendard-Medium': require('../../assets/fonts/pretendard/Pretendard-Medium.otf'),
    'Pretendard-SemiBold': require('../../assets/fonts/pretendard/Pretendard-SemiBold.otf'),
    'Pretendard-Bold': require('../../assets/fonts/pretendard/Pretendard-Bold.otf'),
    'Pretendard-ExtraBold': require('../../assets/fonts/pretendard/Pretendard-ExtraBold.otf'),
    'Pretendard-Black': require('../../assets/fonts/pretendard/Pretendard-Black.otf'),
  });

  if (!loaded) return null;

  const fontFamily = `Pretendard-${weight}`;

  return (
    <Text style={[{ fontFamily }, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Pretxt;

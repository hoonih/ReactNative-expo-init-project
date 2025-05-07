import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TabTriggerSlotProps } from 'expo-router/ui';
import { ComponentProps, ReactNode, Ref, forwardRef } from 'react';
import { Text, Pressable, View } from 'react-native';

export type TabButtonProps = TabTriggerSlotProps & {
  ref?: Ref<View>;
  activeicon: ReactNode; // ✅ selected를 넘겨주기 위한 함수형 아이콘
  inactiveicon: ReactNode; // ✅ selected를 넘겨주기 위한 함수형 아이콘
};

export function TabButton({ activeicon, inactiveicon, children, isFocused, ...props }: TabButtonProps) {
  return (
    <Pressable
      {...props}
      style={[
        {
          display: 'flex',
          flex: 1,
          paddingVertical: 4,
          alignItems: 'center',
          flexDirection: 'column',
          gap: 2,
        }
      ]}>
        {isFocused ? activeicon : inactiveicon}
      <Text style={[{ fontSize: 14, fontFamily: 'Pretendard' }, isFocused ? { color: 'black' } : {color : '#B7B7B7'}]}>{children}</Text>
    </Pressable>
  );
}

import AnalyzeIcon from '@/assets/images/icons/AnalyzeIcon';
import HomeIcon from '@/assets/images/icons/HomeIcon';
import ProfileIcon from '@/assets/images/icons/ProfileIcon';
import { TabButton } from '@/components/common/TabButton';
import { useFonts } from 'expo-font';
import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { View, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { SafeAreaInsetsContext, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets(); // ✅ 안전 영역 정보 가져오기
  return (
    <Tabs>
      <TabSlot /> 
      <View style={{ borderTopWidth: 1, borderColor: '#EFEFEF', backgroundColor: 'white', display: 'flex', paddingVertical: 4, flexDirection: 'row', justifyContent: 'space-around', paddingBottom: insets.bottom }}>
        <TabTrigger name="home" asChild>
          <TabButton activeicon={<HomeIcon selected/>} inactiveicon={<HomeIcon selected={false}/>}>홈</TabButton>
        </TabTrigger>
        <TabTrigger name="analyze" asChild>
          <TabButton activeicon={<AnalyzeIcon selected/>} inactiveicon={<AnalyzeIcon selected={false}/>}>소비분석</TabButton>
        </TabTrigger>
        <TabTrigger name="profile" asChild>
          <TabButton activeicon={<ProfileIcon selected/>} inactiveicon={<ProfileIcon selected={false}/>}>마이페이지</TabButton>
        </TabTrigger>
      </View>

      {/* 👇 숨김 처리된 TabList (필수) */}
      <TabList style={{ display: 'none' }}>
        <TabTrigger name="home" href="/" />
        <TabTrigger name="analyze" href="/analyze" />
        <TabTrigger name="profile" href="/profile" />
      </TabList>
    </Tabs>
  );
}

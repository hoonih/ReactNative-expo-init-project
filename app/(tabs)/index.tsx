import Pretxt from "@/components/common/PreTxt";
import { useFonts } from "expo-font";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <SafeAreaView>
        <Pretxt weight='SemiBold' style={styles.title}>홈</Pretxt>
      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
});

import { SafeAreaView, View, StatusBar, StyleSheet } from "react-native";


const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

export default MyStatusBar;

const styles = StyleSheet.create({
    statusBar: {
      height: StatusBar.currentHeight
    },
});
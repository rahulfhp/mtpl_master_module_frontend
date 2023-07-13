import {StyleSheet, View, useWindowDimensions} from 'react-native';

import RoundedButton from './RoundedButton';

const Footer = ({
pageNumber,
  backgroundColor,
  leftButtonLabel = false,
  leftButtonPress = false,
  rightButtonLabel = false,
  rightButtonPress = false,
}) => {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.21;
  const FOOTER_PADDING = windowWidth * 0.1;
console.log('------- key --------', pageNumber);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: leftButtonLabel ? 'space-between' : 'flex-end',
        height: HEIGHT,
        backgroundColor,
        opacity: 1,
        alignItems: 'center',
        paddingHorizontal: FOOTER_PADDING,
      }}>
      {leftButtonLabel && (
        <RoundedButton label={leftButtonLabel} onPress={leftButtonPress} />
      )}
      <View style={styles.dotContainer}>
        <View style={pageNumber === 0 ? styles.activeDot : styles.inActiveDot} />
        <View style={pageNumber === 1 ? styles.activeDot : styles.inActiveDot} />
        <View style={pageNumber === 2 ? styles.activeDot : styles.inActiveDot} />
      </View>
      <RoundedButton label={rightButtonLabel} onPress={rightButtonPress} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'black',
  },
  inActiveDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});

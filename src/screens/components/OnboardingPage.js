import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OnboardingPage = ({backgroundColor, iconName, title, currentPage}) => {
  console.log('---current page----', currentPage)
  return (
    <View style={[styles.outerContainer, {backgroundColor}]}>
      <Icon name='star' size={172} color="white" />
      <View style={{marginTop: 16}}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </View>
  );
};

export default OnboardingPage;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

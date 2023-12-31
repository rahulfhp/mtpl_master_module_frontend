import { Text, TouchableOpacity } from 'react-native';

const RoundedButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
    //   style={{ alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
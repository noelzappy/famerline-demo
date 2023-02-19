import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../Styles/Common';

const Button = ({onPress, title}) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          onPress();
        }}
        activeOpacity={0.8}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

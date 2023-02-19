import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import Button from '../Components/Button';
import styles from '../Styles/Common';

export default function Home({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../Assets/cert.png')} style={styles.image} />

        <Button
          title="Form One"
          onPress={() => {
            navigation.navigate('FormOne');
          }}
        />
        <Button
          title="Form Two"
          onPress={() => {
            navigation.navigate('FormTwo');
          }}
        />
      </View>
    </ScrollView>
  );
}

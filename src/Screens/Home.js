import React from 'react';
import {View, Button, StyleSheet, ScrollView} from 'react-native';

export default function Home({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Button
          title="Form One"
          onPress={() => {
            navigation.navigate('FormOne');
          }}
          color="#841584"
        />
        <View style={styles.space} />
        <Button
          title="Form Two"
          onPress={() => {
            navigation.navigate('FormTwo');
          }}
          color="#841584"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space: {
    marginVertical: 10,
  },
});

import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
import {useGetDataOneQuery} from '../Services/api';

export default function FormOne() {
  const {data, isLoading, error, isFetching, refetch} = useGetDataOneQuery();

  useEffect(() => {
    if (error) {
      Alert.alert('Error', "Can't fetch data");
    }
  }, [error]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={isFetching || isLoading}
          onRefresh={refetch}
        />
      }>
      {data && data.questions
        ? data.questions.map((item, index) => {
            return (
              <View>
                <Text>{item.title}</Text>
              </View>
            );
          })
        : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

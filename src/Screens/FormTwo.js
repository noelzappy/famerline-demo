import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  Alert,
  TextInput,
} from 'react-native';
import DropdownPicker from '../Components/Picker';
import {useGetDataTwoQuery} from '../Services/api';
import styles from '../Styles/Common';
import Button from '../Components/Button';

export default function FormTwo() {
  const {data, isLoading, error, isFetching, refetch} = useGetDataTwoQuery();

  const [response, setResponse] = useState({});

  useEffect(() => {
    if (error) {
      Alert.alert('Error', "Can't fetch data");
    }
  }, [error]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isFetching || isLoading}
          onRefresh={refetch}
        />
      }>
      <View style={styles.container}>
        {data && data.questions
          ? data.questions.map((item, index) => {
              return (
                <View key={index} style={styles.formField}>
                  <Text style={styles.label}>{item.title}</Text>
                  {item.form_type === 'EDIT_TEXT' && (
                    <View style={styles.fieldContainer}>
                      <TextInput
                        style={styles.textInput}
                        placeholder={`Enter ${item.title}`}
                        placeholderTextColor="gray"
                        onChangeText={value => {
                          setResponse({...response, [item.id]: value});
                        }}
                      />
                    </View>
                  )}

                  {item.form_type === 'RADIO_BUTTONS' && (
                    <View>
                      <DropdownPicker
                        items={item.radio_button_option}
                        label={item.title}
                        defaultValue={item.defaultAnswer}
                        onValueChange={value => {
                          setResponse({...response, [item.id]: value});
                        }}
                      />
                    </View>
                  )}
                </View>
              );
            })
          : null}

        {data && (
          <Button title="Submit" onPress={() => console.log(response)} />
        )}
      </View>
    </ScrollView>
  );
}

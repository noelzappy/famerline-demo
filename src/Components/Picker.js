import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import styles from '../Styles/Common';

export default function DropdownPicker({items, label, placeholder, ...props}) {
  const [selectedValue, setSelectedValue] = useState(
    props.defaultValue || placeholder || 'Choose...',
  );
  const [modalVisible, setModalVisible] = useState(false);

  const onValueChange = itemValue => {
    setSelectedValue(itemValue.name);
    if (props.onValueChange) {
      props.onValueChange(itemValue);
    }
    setModalVisible(false);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => onValueChange(item)}>
      <Text style={styles.itemLabel}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.pickerContainer}>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.inputText}>{selectedValue}</Text>
        <View style={styles.carret} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modal}>
          <View style={styles.contentContainer}>
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

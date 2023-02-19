import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  formField: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    minHeight: 100,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    color: 'black',
    fontSize: 16,
  },

  text: {
    fontSize: 16,
    color: 'black',
  },

  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '80%',
  },

  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  btn: {
    backgroundColor: '#e63946',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  pickerContainer: {
    marginVertical: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 16,
    color: 'black',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '100%',
    alignItems: 'center',
  },
  itemLabel: {
    fontSize: 16,
    color: 'black',
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: 20,
    minWidth: 300,
    height: 300,
    maxHeight: 500,
    borderRadius: 10,
  },
  carret: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'black',
    position: 'absolute',
    right: 10,
    top: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    marginVertical: 20,
  },
});

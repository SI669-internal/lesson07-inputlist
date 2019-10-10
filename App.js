import React from 'react';
import { StyleSheet, TextInput, View, SafeAreaView,
  FlatList, TouchableOpacity, Text } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      theList: [
        {text: 'Item 1', key: '1'},
        {text: 'Item 2', key: '2'}
      ]
    }
  }

  handleChangeText = (text) =>  {
    console.log(text);
  }

  handleButtonPress = () => {
    console.log("button pressed");
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
        <FlatList
          data={this.state.theList}
          renderItem={({item})=>{
              return  (<Text>{item.text}</Text>)
            }
          }
          />
        </View>
        <TextInput
          placeholder='Enter Item'
          onChangeText={this.handleChangeText}/>
        <TouchableOpacity
          onPress={this.handleButtonPress}>
          <Text>Add Item</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 0.3
  }
});

import React, { Component } from 'react';
import {
  ListView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './DaftarTodo.style';

class DaftarTodo extends Component {
  constructor() {
    super();

    this.state = {
      textEdit: ""
    };

    this.showData = this.showData.bind(this);
    this.ubahTextEdit = this.ubahTextEdit.bind(this);
  }

  ubahTextEdit(text) {
    this.setState({
      textEdit: text
    });
  }

  showData(rowData){
    if (rowData.isEditing) {
      return(
        <TextInput
          style={styles.editing}
          onSubmitEditing={() => this.props.doEditText(rowData.id, this.state.textEdit)}
          onChangeText={this.ubahTextEdit}
          value={this.state.textEdit}
        />
      );
    }
    return (
      <View style={styles.row}>
        <Text
          onPress={() => this.props.isEdit(rowData.id)}
        >{rowData.text}</Text>
        <TouchableOpacity
          onPress={() => this.props.onDeleteTodo(rowData.id)}>
          <Text>{'\u2716'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return(
      <ListView
        dataSource={this.props.dataSource}
        renderRow={this.showData} />
    );
  }
}

export default DaftarTodo;

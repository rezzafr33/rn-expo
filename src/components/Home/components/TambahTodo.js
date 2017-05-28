import React , { Component } from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './TambahTodo.styles';

class TambahTodo extends Component {
  render() {
    return (
      <View>
        <TextInput
          value={this.props.inputanValue}
          onChangeText={this.props.ubahInputValue}
          onSubmitEditing={this.props.onSubmitEditing}
          style={styles.inputan} />
      </View>
    );
  }
}

export default TambahTodo;

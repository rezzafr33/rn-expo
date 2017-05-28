import React, { Component } from 'react';
import {
  ListView,
  View,
} from 'react-native';
import uuid from 'uuid';
import TambahTodo from './components/TambahTodo';
import DaftarTodo from './components/DaftarTodo';

class Home extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.data = [
      {id: 0, text: 'Hello', isEditing: false},
      {id: 1, text: 'World', isEditing: false},
    ];

    this.state = {
      inputanValue: "",
      dataSource: ds.cloneWithRows(this.data),
    };

    this.ubahInputValue = this.ubahInputValue.bind(this);
    this.handleOnSubmitEditing = this.handleOnSubmitEditing.bind(this);
    this.handleOnDeleteTodo = this.handleOnDeleteTodo.bind(this);
    this.toEdit = this.toEdit.bind(this);
    this.doEditText = this.doEditText.bind(this);
  }

  toEdit(id) {
    this.data = this.data.map(todo => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });

    this.setTodo();
  }

  doEditText(id, text) {
    this.data = this.data.map(todo => {
      if (todo.id === id) {
        todo.isEditing = false;
        todo.text = text;
      }
      return todo;
    });

    this.setTodo();
  }

  handleOnSubmitEditing() {
    this.data.push({
      id: uuid.v4(),
      text: this.state.inputanValue
    });
    this.setTodo();
  }

  ubahInputValue(text) {
    this.setState({
      inputanValue: text,
    });
  }

  setTodo() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({dataSource: ds.cloneWithRows(this.data)})
  }

  handleOnDeleteTodo(id) {
    this.data = this.data.filter((obj) => obj.id !== id);

    this.setTodo();
  }


  render() {
    return (
      <View>
        <TambahTodo
          ubahInputValue={this.ubahInputValue}
          inputanValue={this.state.inputanValue}
          onSubmitEditing={this.handleOnSubmitEditing}
        />
        <DaftarTodo
          isEditing = {this.state.isEditing}
          onDeleteTodo={this.handleOnDeleteTodo}
          isEdit={this.toEdit}
          doEditText={this.doEditText}
          dataSource={this.state.dataSource}/>
      </View>
    );
  }
}

export default Home;

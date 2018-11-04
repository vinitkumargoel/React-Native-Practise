import React from 'react';
import { ScrollView, StyleSheet,AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Input,Textarea,Text , Button} from 'native-base';

import  { setItem } from '../services/storage.service';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Notice',
  };

  constructor(props){
    super(props);
    this.state = {
      title:null,
      description:null
    }
  }
  handleChange(name, value) {
    this.setState(() => ({ [name]: value  }));
  }
  onSubmit = async() => {
    if(this.state.title && this.state.description){
      await setItem(this.state.title,this.state.description);
    }else{
      alert("Please enter details!!")
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
          <Content padder>
            <Form>
              <Item style={styles.item}>
                <Input name="title" onChangeText={(value)=> this.handleChange('title',value)} placeholder="Title" />
              </Item>
              <Item style={styles.item}>
                <Textarea rowSpan={10} onChangeText={(value)=> this.handleChange('description',value)} placeholder="Description"/>
              </Item>
                <Button onPress={this.onSubmit.bind(this)} style={styles.button} block rounded primary>
                  <Text> 
                    Primary 
                  </Text>
                </Button>
            </Form>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  item: {
    marginTop: 15,
  },
  button: {
    marginTop: 15,
  }
});

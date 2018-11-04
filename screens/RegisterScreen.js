import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input,Textarea,Text , Button} from 'native-base';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title:"Register"
  };

  constructor(props){
    super(props);
    this.state = {
      username:null,
      password:null
    }
  }
  handleChange(name, value) {
    this.setState(() => ({ [name]: value  }));
  }
  onSubmit = async () => {
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
          <Content padder>
            <Form>
              <Item style={styles.item}>
                <Input  onChangeText={(value)=> this.handleChange('username',value)} placeholder="Username" />
              </Item>
              <Item style={styles.item}>
                <Input  onChangeText={(value)=> this.handleChange('password',value)} placeholder="Password" />
              </Item>
              <Item style={styles.item}>
                <Input  onChangeText={(value)=> this.handleChange('password',value)} placeholder="Mobile Number" />
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

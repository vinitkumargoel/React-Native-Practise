import React from 'react';
import {
    TouchableOpacity
} from 'react-native';

import {
    Card,
    CardItem,
    Text,
    Body
} from 'native-base';

export default class HomeCard extends React.Component {
  render(){
    return (<Card>
      <CardItem header>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna enim, pharetra nec diam sed, tristique tristique diam. Ut quis ornare enim, in pellentesque lorem. Donec vitae ultricies neque. Suspendisse accumsan felis pulvinar
          </Text>
        </Body>
      </CardItem>
      <CardItem footer>
        <TouchableOpacity>
          <Text>Read More...</Text>
        </TouchableOpacity>
      </CardItem>
  </Card>)
  }
}
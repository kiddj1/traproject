import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';


export default class DetailScreen extends Component {
    state = { 
        isHungry: true 
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => this.props.navigation.navigate('Details')}
            />
        </View>
      );
    }
}

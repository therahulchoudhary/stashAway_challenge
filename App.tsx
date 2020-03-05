import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/home';
import {Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  StyleSheet,
} from 'react-native';


const Stack = createStackNavigator();

interface props{

}

interface state{

}

class App extends Component<props,state> {
  render(){
    return(
      <>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTitleStyle:{fontFamily:'AbrilFatface-Regular'},
                headerStyle:styles.headerStyle,
                headerTitle:'Home',
                headerTitleAlign:'center',
                headerRight: () => (
                  <Icon name="filter" size={20} style={{marginHorizontal:20}}/>
                ),
                headerLeft: () => (
                  <Icon name="menufold" size={20} style={{marginHorizontal:20}}/>
                )
              }}
            />
        </Stack.Navigator>
      </NavigationContainer>
      </>
    );
  }
};

const styles = StyleSheet.create({
  headerStyle : {
    elevation:0,
    borderBottomColor:'grey',
    borderBottomWidth:0.5
  }
});

export default App;

import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/home';
import SplashScreen from './src/screens/splash'
import {Text, StatusBar,StyleSheet} from 'react-native';


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
                headerTitleStyle:{fontFamily:'AbrilFatface-Regular',fontSize:28,paddingLeft:20},
                headerStyle:styles.headerStyle,
                headerTitle:'Stash Away',
                headerTitleAlign:'left',
                // headerRight: () => (
                //   <Icon name="filter" size={20} style={{marginHorizontal:20}}/>
                // ),
                headerLeft: () => (
                  null
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
  }
});

export default App;

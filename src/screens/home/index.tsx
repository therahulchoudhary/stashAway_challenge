import React,{Component} from 'react';
import {Text,View, StyleSheet} from 'react-native';
import styles from './styles';
import Heading from '../../components/HeadingComponent';
import TextInputComponent from '../../components/TextInput'
import ItemList from '../../components/ItemListComponent'
interface props{

}

interface state{

}

class Home extends Component<props,state>{
    render(){
        return(
            <View style={styles.container}>
                <TextInputComponent placeholder="Search"/>
                <Heading textValue="Read Me" fontSize={32} fontWeight="200" fontFamily="DidactGothic-Regular"/>
                <Text style={styles.basicText}>This App is just a white app template to customize to work faster as compare to a scratch project. This App contains some basic components like input components with list items and all.To use all components according to our requirement.</Text>
                <ItemList/>
            </View>
        );
    }
}

export default Home;
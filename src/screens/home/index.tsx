import React,{Component, useEffect} from 'react';
import {Text,View, StyleSheet, ScrollView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputComponent from '../../components/TextInput';
import ItemList from '../../components/ItemListComponent';
interface props{

}

interface state{
    restaurentsData:any;
}



class Home extends Component<props,state>{
    constructor(props: Readonly<props>){
        super(props);
        this.state ={
            restaurentsData:[],
        }
    }
    componentDidMount(){
        this._loadData();
    }
    _loadData = () => {
        fetch('http://starlord.hackerearth.com/TopRamen', {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((responseJson) => {
            responseJson.forEach((element:any) => {
            });
            this.setState({restaurentsData:responseJson});
        })
        .catch((error) => {
            console.error(error);
        });
    }
    
    render(){
        return(
            <>
            <ScrollView>
            <View style={styles.container}>
                <TextInputComponent placeholder="Search"/>
                <ItemList data={this.state.restaurentsData}/>
            </View>
            </ScrollView>
            <View style={styles.filterButton}>
              <Icon name="filter" size={30}/>
            </View>
            </>
        );
    }
}

export default Home;
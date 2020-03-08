import React,{Component, useEffect} from 'react';
import {Text,View, StyleSheet, ScrollView, TouchableOpacity, Picker} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import OctIcon from 'react-native-vector-icons/Octicons';
import TextInputComponent from '../../components/TextInput';
import ItemList from '../../components/ItemListComponent';
interface props{

}

interface state{
    restaurentsData:any;
    splashVisible:boolean;
    filteredData:any,
    location:any,
    countries:any
}

class Home extends Component<props,state>{
    constructor(props: Readonly<props>){
        super(props);
        this.state ={
            restaurentsData:[],
            splashVisible:true,
            filteredData:[],
            location:null,
            countries:[]
        }
    }
    componentDidMount(){
        this._loadData();
    }
    _loadData = () => {
        let countries : any[] = [];

        fetch('http://starlord.hackerearth.com/TopRamen', {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((responseJson) => {
            responseJson.forEach((element:any) => {
              element.id = makeid(10);
              countries.push(element.Country);
            });
     
             this.setState({filteredData:responseJson, restaurentsData:responseJson});
             this.setState({countries:getUnique(countries)})
          })
        .catch((error) => {
            console.error(error);
        });
    }
    createOptions = () =>{
        let optionsTsx = [];
        optionsTsx.push(<Picker.Item label={'none'} value={'none'} />)
        for(let i=0; i <this.state.countries.length ; i++){      
            optionsTsx.push(<Picker.Item label={this.state.countries[i]} value={this.state.countries[i]} />)
        }
        return optionsTsx; 
      }
      handleChangeOption = (val:string) => {      
        if(this.state.location!=val){        
          this.setState({location:val})
        }else{        
          this.setState({location:null})
        }
      }
      _picker = () => {
          return(
            <Picker
            prompt="Select country"
            style={{width: 60,padding:0,opacity:0}}
            onValueChange={(itemValue, itemIndex) =>
                this.handleChangeOption(itemValue)
            }>
            {this.createOptions()}
            </Picker>
          )
      }
    _filterText = (value:string) => {
        let filtered = this.state.restaurentsData.filter(
            (element:any) => {
              if(this.state.location!=null){
               if(element.Brand.toLowerCase().includes(value.toLowerCase()) && element.Country.toLowerCase() == this.state.location.toLowerCase()){ 
                  return element;
                }else if(value.length==0){
                  return element;
                }
              }else if(element.Brand.toLowerCase().includes(value.toLowerCase())){
                return element;
              }
            }
          );
          this.setState({filteredData:filtered})
    }
    render(){
        return(
            <>
            <ScrollView>
            <View style={styles.container}>
                <TextInputComponent placeholder="Search" updateState={this._filterText}/>
                <ItemList data={this.state.filteredData}/>
            </View>
            </ScrollView>
            <View style={styles.filterButton}>
                <TouchableOpacity activeOpacity={1} style={{position:"absolute",backgroundColor:'white'}}>
                    <Icon name="filter" size={40}/>
                </TouchableOpacity>
            {this._picker()}
            </View>
            <View style={styles.locationBar}>
                <Text style={{fontFamily:'Montserrat-Regular'}}>{this.state.location!=null?this.state.location:'Not Selected'}</Text>
                <OctIcon name="location" size={15} style={{paddingLeft:6}}/>
            </View>
            </>
        );
    }
}

const getUnique = (array:any) =>{
    let uniqueArray = [];
    
    for(let i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
  }
  const makeid = (length:number) : string =>{
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    }
  
  
export default Home;
import React,{Component} from 'react';
import { Text,StyleSheet,TouchableOpacity,LayoutAnimation, UIManager, Platform,View,SafeAreaView,FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import AppConstants from '../utils/appConstants';
import UtilsFunction from '../utils/utilsFunction';

interface props{
  data:any;
}
interface state{
  expand:boolean;
  expandedItem: any;
}
class ItemListComponent extends Component<props,state>{
  constructor(props: Readonly<props>){
        super(props);
        if( Platform.OS === 'android' ){
          UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        this.state = { 
           expand: false,
           expandedItem:null
        }

    }
    Item(item:any,index:number){
    return (
      <TouchableOpacity activeOpacity={1} onPress={()=>this._expand(index)}>
        <ImageBackground source={{uri:""}} style={{backgroundColor:AppConstants.colors[new UtilsFunction()._setColor(index==this.props.data.length-1?index:index+1)] }}>
          <View style={[styles.item,{backgroundColor: AppConstants.colors[new UtilsFunction()._setColor(index)]}]}>
              <Text numberOfLines={2} style={styles.title}>{item.Variety}</Text>
              <Text style={styles.varietyText}>{item.Brand}</Text>
              <View style={styles.locationBar}>
                <SimpleIcon color="white" name="location-pin" size={18}/>
                <Text style={{color:'white',fontFamily:'Montserrat-Regular',paddingHorizontal:5,fontSize:16}}>{item.Country}</Text>
              </View>
              <View style={{position:'absolute',bottom:35,right:35,flexDirection:'row',borderRadius:50,padding:4,alignItems:'center',backgroundColor:AppConstants.secondaryColor[new UtilsFunction()._setColor(index)]}}>
                <Icon name="star" color="white" size={15} style={{paddingHorizontal:5}}/>
                <Text style={{color:'white',paddingRight:10}}>{item.Stars}</Text>
              </View>
              {(this.state.expandedItem == index && this.state.expand) && <Text style={{color:'white'}}>{'dgujhdf'}</Text>}
          </View>
        </ImageBackground>
      </TouchableOpacity>
      );
      
    }
    _expand = (index:number) => {
      LayoutAnimation.configureNext( LayoutAnimation.Presets.spring );
      let exp = this.state.expand?false:true;
      this.setState({expand:exp,expandedItem:index})
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.data}
                renderItem={({ item,index }) => this.Item(item,index)}
                keyExtractor={(item:any) => item.id}
            />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width:'100%',
    },
    item: {
      borderBottomLeftRadius:70,
      paddingHorizontal:40,
      paddingVertical:35
    },
    title: {
      color:'white',
      fontSize:22,
      fontFamily:'Montserrat-Bold',
    },
    rating: {
      flexDirection:'row',
      position:'absolute',
      right:35,
      bottom:30,
      padding:3,
      paddingHorizontal:8,
      borderRadius:50,
      alignItems:'center'
    },
    locationBar: {
      flexDirection:'row',
      marginVertical:5,
      alignItems:'center'
    },
    varietyText: {
      color:'white',
      fontSize:16,
      fontFamily:'Montserrat-Medium',
      paddingVertical:5
    }
});
export default ItemListComponent;
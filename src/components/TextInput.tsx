import React,{Component} from 'react';
import {View, TouchableOpacity,LayoutAnimation, UIManager,TextInput, StyleSheet,ImageBackground, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import AppConstants from '../utils/appConstants';

interface props {
    placeholder:string;
    updateState : (value : string) => void,

}
interface state {
    expand:boolean;
    input: string, 

}

class TextInputComponent extends Component<props,state>{
    constructor(props: Readonly<props>){
        super(props);
        this.state={
            expand:false,
            input:''
        }
        if( Platform.OS === 'android' ){
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    _expand = () => {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.linear );
        let exp = this.state.expand?false:true;
        this.setState({expand:exp});
    }
    handleChangeInput = (text : string) => {
        this.setState({ input: text })
        this.props.updateState(text);
    }
   
    render(){
        return(
                <ImageBackground source={{uri:""}} style={{backgroundColor:AppConstants.colors[0]}}>
                    {/* <View style={{flexDirection:'row',backgroundColor:'white',justifyContent:'center',paddingVertical:20,alignContent:'center'}}>
                        <TouchableOpacity activeOpacity={0.7} onPress={()=>this._expand()}>
                            <Icon name="search" size={30} style={styles.topIconStyle}/>
                        </TouchableOpacity>

                            <Icon name="info-outline" size={30} style={styles.topIconStyle}/>
                            <Icon name="favorite-border" size={30} style={styles.topIconStyle}/>
                    </View> */}
                    <View style={{backgroundColor:'white',borderBottomLeftRadius:100,paddingHorizontal:60,paddingVertical:20,flexDirection:'row',alignItems:'center'}}>
                         <TextInput placeholder={this.props.placeholder} style={styles.inputField}
                         value={this.state.input}
                         onChangeText={this.handleChangeInput}
                         ></TextInput>

                    </View>
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    inputField : {
        backgroundColor:'#ccc8',
        paddingHorizontal:25,
        width:'100%',
        alignSelf:'center',
        borderRadius:50,
    },
    topIconStyle: {
        marginHorizontal:25,
        textAlign:'center',
        textAlignVertical:'center',
        width:60,
        height:60,
        padding:10,
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:50
    },
})

export default TextInputComponent;
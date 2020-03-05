import React,{Component} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

interface props {
    placeholder:string
}
interface state {

}

class TextInputComponent extends Component<props,state>{
    render(){
        return(
            <TextInput placeholder={this.props.placeholder} style={styles.inputField}></TextInput>
        );
    }
}

const styles = StyleSheet.create({
    inputField : {
        backgroundColor:'#ccc6',
        borderRadius:50,
        paddingHorizontal:25,
        marginVertical:10,
        width:'100%',
        alignSelf:'center'
    }
})

export default TextInputComponent;
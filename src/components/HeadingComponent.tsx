import React,{Component} from 'react';
import {Text, StyleSheet} from 'react-native';

interface props {
    textValue:string,
    fontSize:number,
    fontWeight:any,
    fontFamily:string,
}
interface state {

}

class Heading extends Component<props,state>{
    render(){
        return(
            <Text style={{fontSize:this.props.fontSize,fontFamily:this.props.fontFamily,fontWeight:this.props.fontWeight}}>{this.props.textValue}</Text>
        );
    }
}

const style = StyleSheet.create({
    
});
export default Heading;
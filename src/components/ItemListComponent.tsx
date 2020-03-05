import React,{Component} from 'react';
import { Text,StyleSheet,View,SafeAreaView,FlatList } from 'react-native';

interface props{

}
interface state{

}

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    },
    {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    },
    {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    },
];

class ItemListComponent extends Component<props,state>{
    Item(item:any){
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        );
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={({ item }) => this.Item(item)}
                keyExtractor={item => item.id}
            />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width:'100%',
      paddingVertical:10,
    },
    item: {
      backgroundColor: '#ccc9',
      padding: 10,
      marginVertical: 8,
      borderRadius:5,
    },
    title: {
      fontSize:24,
      fontFamily:'DidactGothic-Regular',
    }
});
export default ItemListComponent;
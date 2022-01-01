import React from 'react';
import {SafeAreaView,StatusBar, View, FlatList, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import ItemComponent from "./ItemComponent";

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    type: 'TIMELINE',
                    text: 'timeline'
                },
                {
                    type: 'HONEYCOMB',
                    text: 'Tile Map'
                },
                {
                    type: '3D-COLUMN',
                    text: '3d-column'
                },
                {
                    type: 'PACKED_BUBBLE',
                    text: 'Packed Bubble'
                },
                {
                    type: 'PIE',
                    text: 'Pie'
                },
                 {
                    type: 'ORGANIZATION',
                    text: 'Org'
                },

                {
                    type: 'LINE',
                    text: 'Line'
                },
                {
                    type: 'FUNNEL',
                    text: 'Funnel'
                },

                {
                    type: 'HEAT_MAP',
                    text: 'Heat Map'
                },
                {
                    type: 'DONUT',
                    text: 'Donut'
                },

                {
                    type: 'BAR',
                    text: 'Bar'
                },
                {
                    type: 'AREA',
                    text: 'Area'
                },
                {
                    type: 'COLUMN',
                    text: 'Column'
                }
            ]
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
            <FlatList
                    style={{ marginTop: StatusBar.currentHeight || 0, marginHorizontal:10}}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    numColumns={1}
                />
            </SafeAreaView>

        );
    }

    keyExtractor = (item) => item.type;

    renderItem = ({ item }) => {
       return (
           <View style={styles.card}>
           <TouchableOpacity activeOpacity={0.9} style={{ flex:1}}>
               <ItemComponent type={item.type} />
           </TouchableOpacity>
           </View>
       )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    list: {
       flex:1,
    },
    column: {
        flexShrink: 1,
    },
    card: {
        borderRadius: 6, overflow:"hidden", flex:1, marginHorizontal:5, marginVertical:5, borderWidth:1, borderColor:"#6495ED", height: 200
    },

});

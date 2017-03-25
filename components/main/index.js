
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { KittyPic } from '../kitty-pic';

export class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <KittyPic />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

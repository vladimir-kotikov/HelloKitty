
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { KittyPic } from '../kitty-pic';

export class Main extends Component {
    state = {
        bg: 'default'
    }

    codePushStatusDidChange(status) {
        if (status == codePush.SyncStatus.UPDATE_INSTALLED) {
            this.setState({ bg: 'updated' });
            setTimeout(() => this.setState({ bg: 'default' }), 300);
        }
    }

    render() {
        return (
            <View style={styles[this.state.bg]}>
                <KittyPic />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    updated: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'deepskyblue',
    }
});

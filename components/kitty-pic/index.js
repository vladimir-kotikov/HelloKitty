
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Sound from 'react-native-sound';

export class KittyPic extends Component {

    sound = null;
    pic = require('./kitty.jpg');
    mp3 = require('./meow.mp3');

    meow() {
        if (this.sound && this.sound.isLoaded) {
            this.sound.play();
        }
    }

    componentDidMount() {
        this.sound = new Sound(this.mp3);
    }

    render() {
        return (
            <View onTouchEnd={() => this.meow()}>
                <Image source={this.pic}/>
            </View>
        );
    }
}

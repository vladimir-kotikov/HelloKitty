
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Sound from 'react-native-sound';

const picture = require('./kitty.jpg');
const meow1 = new Sound('meow1.mp3');
const meow2 = new Sound('meow2.mp3');

export class KittyPic extends Component {

    counter = 0;
    sounds = [ meow1, meow2 ];

    meow() {
        this.sounds[this.counter++].play();
    }

    render() {
        return (
            <View onTouchEnd={() => this.meow()}>
                <Image source={picture}/>
            </View>
        );
    }
}

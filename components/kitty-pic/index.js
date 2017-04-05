
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Sound from 'react-native-sound';

export class KittyPic extends Component {

    counter = 0;
    picture = require('./kitty.jpg');
    sounds = [
        new Sound(require('./meow1.mp3')),
        new Sound(require('./meow2.mp3'))
    ];

    meow() {
        this.sounds[this.counter++].play();
    }

    render() {
        return (
            <View onTouchEnd={() => this.meow()}>
                <Image source={this.picture}/>
            </View>
        );
    }
}

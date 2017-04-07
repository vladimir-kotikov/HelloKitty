
import React from 'react';
import { AppRegistry } from 'react-native';
import Analytics from "mobile-center-analytics";
import Crashes from "mobile-center-crashes";
import codePush from "react-native-code-push";

import { Main } from './components/main';

let Main = codePush({
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.IMMEDIATE,
    updateDialog: true
})(Main);

AppRegistry.registerComponent('HelloKitty', () => Main);

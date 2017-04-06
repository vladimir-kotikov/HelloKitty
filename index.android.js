
import React from 'react';
import { AppRegistry } from 'react-native';
import Analytics from "mobile-center-analytics";
import Crashes from "mobile-center-crashes";
import codePush from "react-native-code-push";

import { Main } from './components/main'

AppRegistry.registerComponent('HelloKitty', () => codePush(Main));

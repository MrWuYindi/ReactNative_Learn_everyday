/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class GitHubPopular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={require('./res/images/ic_polular.png')} />}
                        renderSelectedIcon={() => <Image source={require('./res/images/ic_polular.png')} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <View></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        renderIcon={() => <Image source={require('./res/images/ic_trending.png')} />}
                        renderSelectedIcon={() => <Image source={require('./res/images/ic_trending.png')} />}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        <View></View>
                    </TabNavigator.Item>
                </TabNavigator>
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
  },
  page1: {
    flex: 1,
    backgroundColor: 'red',
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow',
  }
});

AppRegistry.registerComponent('GitHubPopular', () => GitHubPopular);

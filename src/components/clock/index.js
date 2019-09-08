/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';

import styles from './styles';

class Clock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.setState({date: new Date()}), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const date = this.state.date;
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();
    const secAngle = sec * 6;
    const minAngle = min * 6 + sec * 0.1;
    const hourAngle = hour * 30 + min * 0.5;
    return (
      <View style={styles.container}>
        <View style={styles.outerClock} />
        <View
          style={{
            ...styles.clock,
            ...styles.hourClock,
            transform: [{rotate: `${hourAngle}deg`}],
          }}>
          <View style={styles.hourHand} />
        </View>
        <View
          style={{
            ...styles.clock,
            ...styles.minuteClock,
            transform: [{rotate: `${minAngle}deg`}],
          }}>
          <View style={styles.minHand} />
        </View>
        <View
          style={{
            ...styles.clock,
            ...styles.secClock,
            transform: [{rotate: `${secAngle}deg`}],
          }}>
          <View style={styles.secHand} />
        </View>
      </View>
    );
  }
}

export default Clock;

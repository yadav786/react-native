import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Header = (props) => {
   
    return(
    <View style={styles.header}>
    <Text style={styles.headerTitle}>{props.title}</Text>
    </View>)

}

const styles = StyleSheet.create({
    header: {
      paddingTop: 36,
      backgroundColor: Colors.primary,
      width: '100%',
      alignItems: 'center',
      height: 90
    },
    headerTitle: {
      fontSize: 18
    }
  });

export default Header;
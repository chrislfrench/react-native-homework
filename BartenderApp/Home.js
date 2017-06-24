import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image, Dimensions, Platform } from 'react-native';

import drinkImg from './drink.png';

export default class Home extends Component {

  // The press function takes in an argument (movie name) and pushes to the navigator the individual movie page
  // It also passes along the name of the movie which will be used fetch information from the OMDB API
  press(movie) {
    this.props.navigator.push({ 
      id: 2,
      // We can pass any information we want to the next scene as props
      passProps: {
        name: movie
      }
    });
  }

  SearchPress() {
    this.props.navigator.push({
      id: 4
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.footer} />
        <Image source={drinkImg} style={styles.icon} />
        

     
        {/*Each button will call the press function with a different movie name*/}
        <TouchableHighlight onPress={() => this.press('The Grand Budapest Hotel')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>The Grand Budapest Hotel</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press("Adios MF")} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Adios MF</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Sazerac')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Sazerac</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Long Island Iced Tea')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Long Island Iced Tea</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Margarita')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Margarita</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('White Russian')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>White Russian</Text>
          </View>
        </TouchableHighlight>
         <TouchableHighlight onPress={() => this.SearchPress()} style={styles.outerButton}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search Button</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4c232'
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#fff6d1'
  },
  movieText: {
    fontSize: 20,
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  outerButton: {
    paddingVertical: 3,
    paddingHorizontal: 30
  },
  innerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#c9f3e7',
    borderLeftWidth: 5,
    borderColor: '#ff4981'
  },
  searchButton: {
    paddingVertical: 15,
    paddingHorizontal:20,
    backgroundColor: '#c9f3e7'
  },
   searchButtonText: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#ff4981'
  },
   footer: {
    // position: 'absolute',
    // bottom: 100,
    // height: 50,
    // textAlign: 'center',
    width: screenWidth,
    backgroundColor: '#e4c232',
    marginTop: 20,
    marginBottom: 50
  },
  icon: {
    width: 90,
    height: 90,
    // position: 'absolute',
    left: (screenWidth / 2 - 45),
    bottom: 0
  }
});
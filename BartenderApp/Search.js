import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  Dimensions
} from 'react-native';

import SearchResults from './SearchResults.js';
import drinkImg from './drink.png';

export default class Search extends Component {
  // We are setting the initial state of this.state.movie to ''.
  constructor(props) {
    super(props);
    this.state = {
      movie: ''
    };
    this.renderSearch = this.renderSearch.bind(this);
    this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
  }
  handleMovieSubmit(event) {
    this.setState({ movie: event.nativeEvent.text });
  }

  handlePress() {
    this.props.navigator.pop();
  }

  SearchPress() {
    this.props.navigator.push({
      id: 3
    });
  }

  renderSearch() {
    if (this.state.movie) {
      return (
        <SearchResults movie={this.state.movie} />
      );
    }
    return null;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Personal Bartender
          </Text>
        </View>
        <View>
          <TextInput
            autoFocus
            style={styles.input}
            placeholderTextColor="white"
            placeholder="Search"
            // The onSubmitEditing function is run when the text is submitted.
            // It will set this.state.movie equal to the value of the text input.
            onSubmitEditing={this.handleMovieSubmit}
          />
          {/* The Search term is passed into the SearchResults component as props. */}
          <SearchResults movie={this.state.movie} />
        </View>
       
        <TouchableHighlight onPress={() => this.SearchPress()} style={styles.outerButton}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Go Back</Text>
          </View>
        </TouchableHighlight>
         
        <View style={styles.footer} />
        <Image source={drinkImg} style={styles.icon} />
      </View>
    );
  }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 60,
    backgroundColor: '#e4c232',
    marginBottom: 5,
    marginTop: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    color: 'white',
    margin: 10,
    height: 45,
    paddingLeft: 10,
    backgroundColor: '#e4c232',
    fontSize: 18,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  searchButton: {
    paddingVertical: 15,
    paddingHorizontal:20,
    backgroundColor: '#c9f3e7',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  searchButtonText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#ff4981'
  },
  outerButton: {
    paddingVertical: 3,
    paddingHorizontal: 30
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: screenWidth,
    backgroundColor: '#e4c232'
  },
  icon: {
    width: 90,
    height: 90,
    position: 'absolute',
    left: (screenWidth / 2 - 45),
    bottom: 0
  }
});
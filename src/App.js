import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyByD52BIwJ2AjumiGCS79yVTVd7ZUSGKIY",
            authDomain: "auth-b1d04.firebaseapp.com",
            databaseURL: "https://auth-b1d04.firebaseio.com",
            projectId: "auth-b1d04",
            storageBucket: "auth-b1d04.appspot.com",
            messagingSenderId: "407114259975"
        })
    }
    render() {
        return (
            <View>
                <Header headerText="10 minutes of code" />
                <LoginForm />
            </View>
        )
    }
}

export default App;
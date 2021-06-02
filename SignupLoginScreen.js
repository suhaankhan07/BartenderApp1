import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config'

export default class Welcome extends React.Component {
    constructor () {
     super();
     this.state = {
        email: "",
        password: "",
    }
}

 handleEmail = (text) => {
     this.setState({
         password:text
     });
 }

 handlePassword = (text) => {
     this.setState({
         email:text
     })
 }

  userSignup = (email,password) => {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((response)  => {
      return Alert.alert('User has benen added sucsessfully')
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage);
    })
  }

  userLogin = (email,password) => {
   firebase.auth().signInWithEmailAndPassword(email,password)
   .then(() => {
     return Alert.alert('Sucsessfully Logged in')
   })
   .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     return Alert.alert(errorMessage)
   })
  }

    render() {
        return(
            <View style = {styles.container}> 
              <Text style = {{fontSize:35, alignSelf:'center',fontWeight:'bold',textShadowColor:'black',textShadowRadius:3,color:'white'}}>
               The Bartender App 
             </Text>
              <TextInput
               style = {styles.emailInput}
               placeholder = "Email"
               placeholderTextColor =  'purple'
               keyboardType = "email-address"
               keyboardAppearance = 'light'
               onChangeText = {this.handleEmail}
             /> 
             <TextInput 
              style = {styles.passwordInput}
              placeholder = "Password"
              placeholderTextColor = 'purple'
              keyboardType = 'email-address'
              keyboardAppearance = 'light'
              secureTextEntry = {true}
              onChangeText = {this.handlePassword}
             />
  
             <TouchableOpacity style = {styles.loginButton} 
             onPress = {() => {
              this.userLogin(this.state.email,this.state.password)
             }}>
              <Text style = {styles.welcomeText}>
                Login
              </Text>
             </TouchableOpacity>

             <Text style = {{margin:10, fontSize:18, fontWeight:'bold',color:'black',alignSelf:'center'}}> OR </Text>

             <TouchableOpacity style = {styles.signupButton}
              onPress = {() =>  {
               this.userSignup(this.state.email,this.state.password)
              }}>
              <Text style = {styles.welcomeText}>
                Signup
              </Text>
             </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'gray',
    },
    emailInput:{
     width:150,
     height:50,
     alignSelf:'center',
     fontSize:24,
     textShadowRadius: 3,
     textShadowColor:'white',
     fontColor:'purple',
    },
    passwordInput:{
     width:150,
     height:50,
     alignSelf:'center',
     fontSize:21,
     textShadowRadius: 3,
     textShadowColor:'white',
     fontColor:'black',
    },
    loginButton:{
     backgroundColor:'lightblue',
     marginTop:15,
     width:150,
     height:40,
     alignSelf:'center',
     justifyContent:'center',
     borderRadius: 15,
     borderColor:'red',
     borderWidth:3,
    },
    signupButton:{
     backgroundColor:'lightblue',
     marginTop:10,
     width:150,
     height:40,
     alignSelf:'center',
     justifyContent:'center',
     borderRadius: 15,
     borderColor:'red',
     borderWidth:3,  
    },
    welcomeText:{
     color:'white',   
     fontSize:16,
     fontWeight:'bold',
     alignSelf:'center',
     textShadowColor:'black',
     textShadowRadius:4,
     marginTop:3,
    },
})
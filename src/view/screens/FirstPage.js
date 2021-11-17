import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";




export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
return (
    
  <ImageBackground source={require('../../assets/images/wp3020932-subwoofer-wallpaper.jpeg')} style={styles.backimage}>
   <View  style={styles.container}> 
    <View style={styles.TopMessage}>
   <Text style={styles.welcomeText}>Let’s make a mark with quality audio.</Text>
      <Text
        style={styles.welcomeText1}>
        <Text> Your Home of Authentic sound{"\n"} equipment and many more</Text></Text>
        </View>
        <View style={styles.loginBtn}>
   <TouchableOpacity style={styles.login}>
        <Text style={styles.letsgo}
         title="Go to Login"
         onPress={() => navigation.navigate('Login')} 
       >Let's Go
        </Text>
</TouchableOpacity> 
</View>



      
      
      <StatusBar style="auto" />
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent:'center',
    alignItems:'center'
    

  },
 
  backimage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

  TopMessage:{
    marginRight:'25%',
    marginBottom:30,
    marginTop:'90%',

  },

  welcomeText:{
    fontSize:30,
    fontWeight:"bold",
    color:'white',

  },
  welcomeText1:{
    fontSize:15,
    marginTop:10,
    color:'white',
   
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
  
loginBtn: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:2,
    marginRight:'10%',
    backgroundColor: "white",
    borderRadius:40,
  },

  letsgo:{
color:'black',
fontSize:19,
fontWeight:'bold',

  },  
});
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
    
 <View  style={styles.container}> 
     
    <View style={styles.TopMessage}>
   
      <Text style={styles.welcomeText}>Hey,{"\n"}Login Now.</Text>
      <Text
        style={styles.welcomeText1}>
        <Text> Your Home of Authentic sound{"\n"} equipment and many more</Text></Text>

    </View><View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="jamessane@gmail.com"
          placeholderTextColor="#707070"
          onChangeText={(email) => setEmail(email)} />
      </View><View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your password"
          placeholderTextColor="#707070"
          textAlign='left'
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)} />
      </View><TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity><TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}
         >LOGIN</Text>



      </TouchableOpacity><TouchableOpacity style={styles.Skip}>
        <Text style={styles.SkipNow}
         title="Go to Details"
         onPress={() => navigation.navigate('Home')}
         >Skip Now</Text>
      </TouchableOpacity><StatusBar style="auto" />
      </View>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    

  },
 
  backimage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

  TopMessage:{
    marginRight:'25%',
    marginBottom:60,

  },

  welcomeText:{
    fontSize:30,
    fontWeight:"bold",
    color:'black',

  },
  welcomeText1:{
    fontSize:15,
    marginTop:15,
    color:'black',
   
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
  inputView: {
   borderWidth:1,
   borderColor:'black',
   borderRadius:40,
  width: "80%",
    height: 50,
    marginBottom: 20,
    
    
   
   
  },

  TextInput: {
    height:20,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color:'white',
    
    
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    color:'black',
  },

  loginBtn: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "black",
    borderRadius:40,
  },

  loginText:{
color:'white',
fontSize:20,
fontWeight:'bold'
  },

  SkipNow:{
    color:'black',
    marginTop:30,
  }
  
});
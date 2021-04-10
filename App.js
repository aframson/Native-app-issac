import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>alert("Hey ! why did you press me ")} style={styles.butt}>
        <Text style={{color:'white'}}>Click This button</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  butt:{
    padding:10, 
    backgroundColor:'black',
    width:300,
    borderRadius:10,
    alignItems:'center',
    height:40,
    justifyContent:'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

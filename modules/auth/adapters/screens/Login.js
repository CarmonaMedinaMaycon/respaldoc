import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React, {useState} from 'react'
import { isEmpty } from 'lodash';
import { Input, Button, Icon, Image } from '@rneui/base'

export default function Login() {
    const [error,setError] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');    
    const login=()=>{
      if (!(isEmpty(email)||isEmpty(password))) {
        console.log("ya estuvo rei")
      }else{
        setError('campo obligatorio hdtptm')
      }
    }    
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
        source={require('../../../../assets/finanzas.jpeg')}
      resizeMode='contain'
    style={styles.logotype}
  
        />
        
        <Input placeholder='correo electronico'
        keyboardType='email-address'
        containerStyle= {styles.input}
        onChange={(event)=>setEmail(event.nativeEvent.text)} 
        errorMessage={error}
        />

<Input placeholder='contraseña'
        keyboardType='password'
        containerStyle= {styles.input}
        onChange={(event)=>setPassword(event.nativeEvent.text)} 
        errorMessage={error}
        />

        <Button
        title='iniciar session'
        icon={<Icon type='material-community'
        name='login'
        size={22}
        color='#fff'
        onPress={() => navigation.navigate('profile')}
        />}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  backgroundColor:'#fff',
  height:"100%"
},
logotype:{
width:"100%",
height: 150,
marginTop:16,
marginBottom:16
}


})
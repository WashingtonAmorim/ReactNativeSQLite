import React from 'react';
import { View, TextInput, Button, Alert } from 'react-native'; 
//import firebase from '../database/Firebase'
import Sqlite from '../database/Sqlite';

import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const db = new Sqlite();

class SecondScreen extends React.Component {

  constructor(){
    super();
    this.state = {
      name:'',
      desc:'',
      img:'',
    }
  }


  onChangeTextInput(value, field) {
    const state = this.state;
    state[field] = value;
    this.setState(state);
  }

  saveContent(){


    const { navigation } = this.props;

/*  
    firebase.firestore().collection('contents').add(
      {
        name:this.state.name,
        desc:this.state.desc,
        img:this.state.img,
      }
    )
    .then(()=>{
      console.log("Salvou");
      navigation.navigate("ContentScreen");
    })
    .catch((error)=>{
      console.log("Erro ao salvar o conteudo", error);
      Alert.alert('Não foi possível salvar o documento','',[{text:'OK'}]);      
    })
*/

      const { database } = this.props.route.params;
          const data = {
            name: this.state.name,
            desc: this.state.desc,
            img: this.state.img,
          }
          db.addContent(data, database);
          navigation.navigate("ContentScreen");
    }


  render(){
    return (
      <View>
                <TextInput placeholder="Nome da matéria"
                           value={this.state.name}
                           onChangeText={(value)=>this.onChangeTextInput(value, 'name')}
                           
                           />
                <TextInput placeholder="Descrição"
                          multiline={true}
                          numberOfLines={4}
                            value={this.state.desc}
                            onChangeText={(value)=>this.onChangeTextInput(value, 'desc')}
                                />

                <TextInput placeholder="Imagem"
                            value={this.state.img}
                            onChangeText={(value)=>this.onChangeTextInput(value, 'img')}
                                />                
                  <Button 
                   color="#4473ba" 
                   title="SALVAR" 
                   onPress={()=>this.saveContent()}/>

            </View>    
    );
  }  
}

export default function(props) {
  const navigation = useNavigation();
  const route = useRoute();

  return <SecondScreen {...props}  navigation={navigation} route={route}/>;

}
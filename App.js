import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Image} from 'react-native';
import Header from "./componentes/header";
import Body from "./componentes/body";
import Footer from "./componentes/footer";

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.headerStyle}>
      <Text style={styles.equipos}>Equipo 1</Text>
      <Text style={styles.equipos}>Equipo 2</Text>
      <Text style={styles.equipos}>Equipo 3</Text>
    </View>
    <View style={styles.bodyStyle}>
      <View>
      <Text style={styles.equipos}>Jugador 1.1</Text>
      <Text style={styles.equipos}>Jugador 1.2</Text>
      <Text style={styles.equipos}>Jugador 1.3</Text>
      <Text style={styles.equipos}>Jugador 1.4</Text>
      <Text style={styles.equipos}>Jugador 1.5</Text>
      </View>
      <View style={styles.assideStyle}>
      <Image style={styles.image} source={{
                        uri: 'https://estaticos-cdn.sport.es/clip/079f8146-5fef-4016-b95b-6acfcb65b810_alta-libre-aspect-ratio_default_0.jpg',
                    }}></Image>
      </View>
    </View>
    <View style={styles.footerStyle}>
      <Text style={styles.equipos}>www.equipo.com</Text>
      <Text style={styles.equipos}>123456789</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
container:{
borderWidth: 2,
borderColor: '#000000',
flex:1,
},
headerStyle:{
borderWidth: 2,
borderColor: '#000000',
height:100,
flexDirection: "row",
alignItems: "center",
margin: 10,
},
bodyStyle:{
borderWidth:2,
borderColor: '#000000',
flex:1,
flexDirection:'row',
},
equipos:{
fontSize:16,
borderWidth:2,
borderColor: '#000000',
margin: 10,
},
assideStyle:{
  borderWidth:2,
  borderColor: '#000000',
  width:"100%",
  height:"100%",
},
image: {
  width: "100%",
  height: "100%"
},
footerStyle: {
  borderWidth: 2,
  borderColor: "#000000",
  flexDirection: "row",
  height: 100,
  justifyContent: 'space-between',
  paddingLeft: 10,
  paddingRight: 10,
  padding: 10,
},
});
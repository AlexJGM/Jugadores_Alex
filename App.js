import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Image} from 'react-native';
import Lista_Equipo from './componentes/Lista_Equipo';
import Body from './componentes/Body';
import Footer from './componentes/Footer';


export default function App() {
  return (
  <View style={styles.container}>
    <Lista_Equipo />
    <Body />
    <Footer />
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
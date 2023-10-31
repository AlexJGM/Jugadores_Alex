import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Image} from 'react-native';
import Lista_Equipo from './componentes/Lista_Equipo';
import Body from './componentes/Body';
import Footer from './componentes/Footer';
import { Component } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        equipoSeleccionado: 'Leyendas FC',
    };
}

EquipoSeleccionado = (equipo) => {
  console.log('Equipo seleccionado:', equipo);
  this.setState({ equipoSeleccionado: equipo });
}

render() {
  const { equipoSeleccionado } = this.state;

  return (
      <View style={styles.container}>
          <Lista_Equipo EquipoSeleccionado={this.EquipoSeleccionado} equipoSeleccionado={equipoSeleccionado}/>
          <Body equipoSeleccionado={equipoSeleccionado} />
          <Footer />
      </View>
  );
}
}

const styles = StyleSheet.create({
container:{
borderWidth: 2,
borderColor: '#000000',
flex:1,
},
});
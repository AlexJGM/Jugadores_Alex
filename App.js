import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Lista_Equipo from './componentes/Lista_Equipo';
import Body from './componentes/Body';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import { Component } from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipoSeleccionado: 'Leyendas FC',  
      equiposOcultos: true,    
    };
  }


  EquipoSeleccionado = (equipo) => {
    console.log('Equipo seleccionado:', equipo);
    this.setState((prevState) => ({
      
      equipoSeleccionado: equipo,
      //equiposOcultos: prevState.equipoSeleccionado === equipo ? !prevState.equiposOcultos : false,
      equiposOcultos: equipo !== prevState.equipoSeleccionado,    
    }));
  }
  
  render() {
    const { equipoSeleccionado, equiposOcultos } = this.state;


    if (Platform.OS === 'web') {
      console.log('Estás en un entorno web');
    } else {
      console.log('No estás en un entorno web');
    }


    if (Platform.OS === 'web') {
      return (
        <View style={styles.container}>
          <Header equipoSeleccionado={equipoSeleccionado} EquipoSeleccionado={this.EquipoSeleccionado} />
          <Body equipoSeleccionado={equipoSeleccionado} />
          <Footer />
        </View>
      );
    } else if (Platform.OS === 'android') {
      return (
        <View style={[styles.containerAndroid, { marginTop: StatusBar.currentHeight }]}>
          <Header equipoSeleccionado={equipoSeleccionado} EquipoSeleccionado={this.EquipoSeleccionado} equiposOcultos={equiposOcultos}/>
          {equiposOcultos ? <Body equipoSeleccionado={equipoSeleccionado} /> : null}
          <Footer />
        </View>
      );
    }

  }
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#000000',
    flex: 1,
  },

  containerAndroid: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

});

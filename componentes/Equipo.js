import { Component } from "react";
import { Platform, Text, View } from "react-native"
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

class Equipo extends Component{
  constructor(props) {
    super(props);
    this.state= {
      
    }
  }

  cambiarColor = (equipo) => {
    switch (equipo) {
      case 'Leyendas FC':
        return '#1078A5';
      case 'FC Barcelona':
        return '#5AE2E9';
      case 'Real Madrid':
        return '#7759EA';
      default:
        return 'white';
    }
  };

  render() {
  const equipoColor = this.props.equipo === this.props.equipoSeleccionado ? this.cambiarColor(this.props.equipo) : 'white';

  const equipoStyleAndroid = this.props.equiposOcultos
  ? styles.equiposAndroid
  : [styles.equiposAndroid, {
    height: 60,
    justifyContent: 'center',
    margin: 5}];

  if(Platform.OS === 'android') {
    return (
      <>
        <TouchableOpacity
            style={[equipoStyleAndroid, { backgroundColor: equipoColor }]}
            onPress={() => this.props.EquipoSeleccionado(this.props.equipo)}>
  
          <Text style={styles.texto}>{this.props.equipo}</Text>
        </TouchableOpacity>
      </>
    );
  } else if(Platform.OS === 'web') {
    return (
      <>
        <TouchableOpacity
          style={[styles.equipos, { backgroundColor: equipoColor }]}
          onPress={() => this.props.EquipoSeleccionado(this.props.equipo)}>
          <Text style={styles.texto}>{this.props.equipo}</Text>
        </TouchableOpacity>
      </>
    );
  }
 
}
}

export default Equipo;

const styles = StyleSheet.create({
 
  equipos: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#000000',
    margin: 10,
    borderRadius: 10,
    width:100,
  },
  texto:{
    textAlign: "center",
    textShadowColor: "black",
    textShadowRadius: 1,
  }, 
  equiposAndroid:{
    fontSize:16,
    borderWidth:2,
    borderColor: '#000000',
    width: "95%",
    height: 50,
    justifyContent: 'center',
    },
    textoAndroid:{
      textAlign: "center",
      textShadowColor: "black",
      textShadowRadius: 1,
    },
});

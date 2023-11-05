import { Platform, View } from "react-native"
import { StyleSheet } from "react-native"
import ListaJugadores from "./ListaJugadores"
import Perfil from "./Perfil"
import React, { Component } from 'react'


export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jugadorSeleccionado: this.CambiarJugador(this.props.equipoSeleccionado),
    }
  }


  jugadorSeleccionado = (jugador) => {
    console.log('jugador seleccionado:', jugador);
    this.setState({ jugadorSeleccionado: jugador });
  }

  CambiarJugador(equipo) {
    let jugadorInicial;
    if (equipo === 'Leyendas FC') {
      jugadorInicial = 'Messi';
    } else if (equipo === 'FC Barcelona') {
      jugadorInicial = 'Ronaldinho';
    } else if (equipo === 'Real Madrid') {
      jugadorInicial = 'Courtois';
    } else {
      jugadorInicial = 'Messi';
    }
     return jugadorInicial;
  }

  render() {
    const { equipoSeleccionado } = this.props;
    const { jugadorSeleccionado } = this.state;

    if (Platform.OS === 'android') {
      return (
        <View style={styles.bodyStyleAndroid}>
          <View style={styles.container}>
            <Perfil jugadorSeleccionado={jugadorSeleccionado} />
          </View>
          <View style={styles.container2}>
            <ListaJugadores equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={this.jugadorSeleccionado} JugadorSeleccionado={this.state.jugadorSeleccionado} />
          </View>
        </View>
      );
    } else if (Platform.OS === 'web') {
      return (
        <View style={styles.bodyStyle} >
          <ListaJugadores equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={this.jugadorSeleccionado} JugadorSeleccionado={this.state.jugadorSeleccionado} />
          <Perfil jugadorSeleccionado={jugadorSeleccionado} />
        </View>
      );
    }

  }
}
const styles = StyleSheet.create({

  bodyStyle: {
    borderWidth: 2,
    borderColor: '#000000',
    flex: 1,
    flexDirection: 'row',
  },

  bodyStyleAndroid: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '95%',
    height: '47%',
    marginBottom: 5,
  },
  container2: {
    width: '95%',
    height: '50%',
    marginBottom: 5,
  },
});

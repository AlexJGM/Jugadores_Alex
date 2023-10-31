import { View } from "react-native"
import { StyleSheet } from "react-native"
import ListaJugadores from "./ListaJugadores"
import Perfil from "./Perfil"
import React, { Component } from 'react'


export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
          jugadorSeleccionado: "Messi"
    }
  }

 
jugadorSeleccionado = (jugador) => {
  console.log('jugador seleccionado:', jugador);
  this.setState({ jugadorSeleccionado: jugador });
}

  render() {
    const { equipoSeleccionado } = this.props;
    const { jugadorSeleccionado } = this.state;

    return (
      <View style={styles.bodyStyle}>
        <ListaJugadores equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={this.jugadorSeleccionado} JugadorSeleccionado={this.state.jugadorSeleccionado} />
        <Perfil jugadorSeleccionado={jugadorSeleccionado}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
    bodyStyle: {
        borderWidth: 2,
        borderColor: '#000000',
        flex: 1,
        flexDirection: 'row',
    },
});

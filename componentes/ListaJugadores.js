import React, { Component } from 'react';
import { View } from 'react-native';
import Jugadores from './Jugadores';
import { StyleSheet } from 'react-native-web';



class ListaJugadores extends Component {
  constructor(props) {
      super(props);
      this.state = {
          equipoSeleccionado: 'Equipo1'
      };
  }
  render() {
      const { equipoSeleccionado } = this.props;
      return (
          <View>
              {equipoSeleccionado === 'Equipo1' && (
                  <View>
                      <Jugadores jugador={"Jugador1"} />
                      <Jugadores jugador={"Jugador2"} />
                      <Jugadores jugador={"Jugador3"} />
                      <Jugadores jugador={"Jugador4"} />
                      <Jugadores jugador={"Jugador5"} />
                  </View>
              )}
              {equipoSeleccionado === 'Equipo2' && (
                  <View>
                      <Jugadores jugador={"Jugador6"} />
                      <Jugadores jugador={"Jugador7"} />
                      <Jugadores jugador={"Jugador8"} />
                      <Jugadores jugador={"Jugador9"} />
                      <Jugadores jugador={"Jugador10"} />
                  </View>
              )}
                 {equipoSeleccionado === 'Equipo3' && (
                  <View>
                      <Jugadores jugador={"Jugador11"} />
                      <Jugadores jugador={"Jugador12"} />
                      <Jugadores jugador={"Jugador13"} />
                      <Jugadores jugador={"Jugador14"} />
                      <Jugadores jugador={"Jugador15"} />
                  </View>
              )}
          </View>
      );
  }
}

  
  export default ListaJugadores;


const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#000000',
        flex: 1,
    },
    headerStyle: {
        borderWidth: 2,
        borderColor: '#000000',
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
    },
    bodyStyle: {
        borderWidth: 2,
        borderColor: '#000000',
        flex: 1,
        flexDirection: 'row',
    },
    equipos: {
        fontSize: 16,
        borderWidth: 2,
        borderColor: '#000000',
        margin: 10,
    },
    assideStyle: {
        borderWidth: 2,
        borderColor: '#000000',
        width: "100%",
        height: "100%",
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


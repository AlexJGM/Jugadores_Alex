import { Platform, Text, View } from "react-native"
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { Component } from 'react'


const coloresJugadores = {
  Messi: '#2F70A5',
  Cristiano: '#6379B6',
  Puyol: '#5ECBCC',
  Casillas: '#3C7D8C',
  Nazario: '#7CDEC5',
  Ronaldinho: '#2F70A5',
  Gavi: '#6379B6',
  Pedri: '#5ECBCC',
  Kounde: '#3C7D8C',
  TerStegen: '#7CDEC5',
  Courtois: '#2F70A5',
  Rudiger: '#6379B6',
  Modric: '#5ECBCC',
  Bellingan: '#3C7D8C',
  Kross: '#7CDEC5',
};

class Jugadores extends Component{
    constructor(props) {
      super(props);
    }
    render() {
      //const jugadorColor = coloresJugadores[this.props.jugador] || 'white';
      const jugadorColor = this.props.jugador === this.props.JugadorSeleccionado ? coloresJugadores[this.props.jugador] : 'white';

    if(Platform.OS === 'web') {
      return (
        <>
          <TouchableOpacity style={[styles.equipos, { backgroundColor: jugadorColor }]} onPress={() => this.props.jugadorSeleccionado(this.props.jugador)}><Text style={styles.texto}>{this.props.jugador}</Text></TouchableOpacity>
        </>
      );
    } else if(Platform.OS === 'android') {
      return (
        <>
          <TouchableOpacity style={[styles.equiposAndroid, { backgroundColor: jugadorColor }]} onPress={() => this.props.jugadorSeleccionado(this.props.jugador)}><Text style={styles.textoAndroid}>{this.props.jugador}</Text></TouchableOpacity>
        </>
      );
    }
   
    }
  }
  
  export default Jugadores;

const styles = StyleSheet.create({
    equipos:{
    fontSize:16,
    borderWidth:2,
    borderColor: '#000000',
    margin: 10,
    borderRadius: 10,
    width: 100,
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
      margin: 3,
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

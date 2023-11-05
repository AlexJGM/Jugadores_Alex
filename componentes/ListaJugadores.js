
import { Platform, View } from "react-native"
import { StyleSheet } from "react-native";
import React, { Component } from 'react'
import Jugadores from "./Jugadores";

export default class ListaJugadores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Leyendas: ['Messi', 'Cristiano', 'Puyol', 'Casillas', 'Nazario'],
            Barcelona: ['Ronaldinho', 'Gavi', 'Pedri', 'Kounde', 'TerStegen'],
            Madrid: ['Courtois', 'Rudiger', 'Modric', 'Bellingan', 'Kross'],
        };
    }
    render() {
        const { equipoSeleccionado } = this.props;
        const { jugadorSeleccionado, JugadorSeleccionado } = this.props;
        const { Leyendas, Barcelona, Madrid } = this.state;
        if(Platform.OS === 'android') {
            return (
                <View style={styles.containerAndroid}>
                    {equipoSeleccionado === 'Leyendas FC' && Leyendas.map((jug, index) => (
                        <Jugadores key={index} jugador={jug} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado} />
                    ))}
                    {equipoSeleccionado === 'FC Barcelona'  && Barcelona.map((jug, index) => (
                        <Jugadores key={index} jugador={jug} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado} />
                    ))}
                    {equipoSeleccionado === 'Real Madrid'  && Madrid.map((jug, index) => (
                        <Jugadores key={index} jugador={jug} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado} />
                    ))}
                </View>
            );
        } else if(Platform.OS === 'web'){
            return (
                <View style={styles.container}>
                    {equipoSeleccionado === 'Leyendas FC' && Leyendas.map((jug, index) => (
                        <Jugadores key={index} jugador={jug} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado} />
                    ))}
                    {equipoSeleccionado === 'FC Barcelona'  && Barcelona.map((jug, index) => (
                        <Jugadores key={index} jugador={jug} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado} />
                    ))}
                    {equipoSeleccionado === 'Real Madrid'  && Madrid.map((jug, index) => (
                        <Jugadores key={index} jugador={jug} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado} />
                    ))}
                </View>
            );
        }
       
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7AA1F4", 
        borderWidth: 2,
        borderColor: 'black',
    },
    containerAndroid: {
        borderWidth: 2,
        borderColor: 'black',
        height: "100%",
        alignItems: "center",

    },
    
});


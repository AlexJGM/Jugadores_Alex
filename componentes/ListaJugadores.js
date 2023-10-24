import { View } from "react-native"
import Equipo from "./Equipo"
import { StyleSheet } from "react-native";
import React, { Component } from 'react'
import Jugadores from "./Jugadores";

class ListaJugadores extends Component {
    constructor(props) {
        super(props);
        this.state = { Jugador1: 'Jugador1', Jugador2: 'Jugador2', Jugador3: 'Jugador3', Jugador4: 'Jugador4', Jugador5: 'Jugador5' };
    }
    render() {
        const Jugadore = ["Jugador1", "Jugador2", "Jugador3", "Jugador4", "Jugador5"];
        return (
            <View>
               {Jugadore.map((jugado, index) => (
                    <Jugadores jugador={jugado} key={index} />
                ))}
            </View>
        );
    }
}

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

export default ListaJugadores;
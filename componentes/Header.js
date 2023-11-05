import { Platform, View } from "react-native"
import { StyleSheet } from "react-native"
import ListaJugadores from "./ListaJugadores"
import Perfil from "./Perfil"
import React, { Component } from 'react'
import Lista_Equipo from "./Lista_Equipo"

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { equipoSeleccionado, EquipoSeleccionado, equiposOcultos } = this.props;
        const headerStyleAndroid = equiposOcultos
        ? styles.headerStyleAndroid
        : [styles.headerStyleAndroid, { flex: 1 }];


        if (Platform.OS === 'android') {
            return (
                <View style={Platform.OS === 'android' ? headerStyleAndroid : styles.headerStyle}>
                    <Lista_Equipo
                        equipoSeleccionado={equipoSeleccionado}
                        EquipoSeleccionado={EquipoSeleccionado}
                        equiposOcultos={equiposOcultos}
                    />
                </View>
            );
        } else if (Platform.OS === 'web') {
            return (
                <View style={styles.headerStyle}>
                    <Lista_Equipo
                        equipoSeleccionado={equipoSeleccionado}
                        EquipoSeleccionado={EquipoSeleccionado}
                    />
                </View>
            );
        }

    }
}
const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        borderWidth: 2,
        backgroundColor: "#405E9D",
    },

    headerStyleAndroid: {
    },
});

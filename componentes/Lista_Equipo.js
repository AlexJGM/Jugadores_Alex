import { View } from "react-native"
import Equipo from "./Equipo"
import { StyleSheet } from "react-native";
import React, { Component } from 'react'

class Lista_Equipo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipos: ['Leyendas FC', 'FC Barcelona', 'Real Madrid'],
        };
    }

    render() {
        const { EquipoSeleccionado, equipoSeleccionado } = this.props;
        const { equipos } = this.state;

        return (
            <View style={styles.headerStyle}>
                {equipos.map((equip, index) => {
                    return (
                        <Equipo key={index} equipo={equip} EquipoSeleccionado={EquipoSeleccionado} equipoSeleccionado={equipoSeleccionado}

                        />
                    )
                })}
            </View>
        );
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
  
});
export default Lista_Equipo;
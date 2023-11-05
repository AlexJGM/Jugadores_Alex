import { Platform, View } from "react-native"
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
        const { EquipoSeleccionado, equipoSeleccionado, equiposOcultos } = this.props;
        const { equipos } = this.state;

        
        if (Platform.OS === 'android') {
            let equiposAMostrar = equipos; 

            if (equiposOcultos) {
                equiposAMostrar = equiposAMostrar.filter(equipo => equipo === equipoSeleccionado);
            }

            return (
                <View style={Platform.OS === 'android' ? styles.headerStyleAndroid : styles.headerStyle}>
                {equiposAMostrar.map((equip, index) => (
                    <Equipo
                        key={index}
                        equipo={equip}
                        EquipoSeleccionado={EquipoSeleccionado}
                        equipoSeleccionado={equipoSeleccionado}
                        equiposOcultos={equiposOcultos}
                    />
                ))}
            </View>
            );
        } else if (Platform.OS === 'web') {
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
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: "row",
    },

    headerStyleAndroid: {
        alignItems: "center",
        marginTop: 5,
    },
});
export default Lista_Equipo;
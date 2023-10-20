import { View } from "react-native"
import Equipo from "./Equipo"
import { StyleSheet } from "react-native";
import React, { Component } from 'react'

class Lista_Equipo extends Component {
    constructor(props) {
        super(props);
        this.state = { Equipo1: 'Equipo1', Equipo2: 'Equipo2', Equipo3: 'Equipo3' };
    }

    render() {
        const { Equipo1, Equipo2, Equipo3 } = this.state;
        return (

            <View style={styles.headerStyle}>
                <Equipo equipo={Equipo1}/>
                <Equipo equipo={Equipo2} />
                <Equipo equipo={Equipo3} />
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

export default Lista_Equipo;
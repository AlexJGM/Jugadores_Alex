import { Text, View } from "react-native"
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

function Equipo(props) {
  const equipoColor = props.equipo === props.equipoSeleccionado ? cambiarColor(props.equipo) : 'white';

  return (
    <>
      <TouchableOpacity
        style={[styles.equipos, { backgroundColor: equipoColor }]}
        onPress={() => props.EquipoSeleccionado(props.equipo)}>

        <Text style={styles.texto}>{props.equipo}</Text>
      </TouchableOpacity>
    </>
  );
}
const cambiarColor = (equipo) => {
  switch (equipo) {
    case 'Leyendas FC':
      return '#1078A5';
    case 'FC Barcelona':
      return '#5AE2E9';
    case 'Real Madrid':
      return '#7759EA';
    default:
      return 'white';
  }
};

export default Equipo;

const styles = StyleSheet.create({
 
  equipos: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#000000',
    margin: 10,
    borderRadius: 10,
    width:100,
  },
  texto:{
    textAlign: "center",
    textShadowColor: "black",
    textShadowRadius: 1,
  },
 
});

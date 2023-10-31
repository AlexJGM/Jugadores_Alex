import { StyleSheet } from "react-native";
import { View, Text } from "react-native";


export default function Footer() {
  return (
      <View style={styles.footerStyle}>
          <Text style={styles.equipos}>www.equipo.com</Text>
          <Text style={styles.equipos}>123456789</Text>
      </View>
  )
}

const styles = StyleSheet.create({
 
  equipos:{
  fontSize:16,
  borderWidth:2,
  margin: 10,
  borderRadius:10,
  textAlign: "center",
  height: 30,
  width: 200,
  backgroundColor: "white",
  },
  footerStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    padding: 10,
    backgroundColor: "#405E9D",
  },
  });

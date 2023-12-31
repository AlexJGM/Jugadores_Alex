import { Component } from "react";
import { Platform, View } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

export default class Perfil extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      Imagenes1: [{ Messi: "https://www.fcbarcelona.com/photo-resources/2020/04/30/43337a9f-3781-4886-948c-f70912e4b1af/1920x1080_Messi_primerGol-min.jpg?width=1200&height=750" },
      { Cristiano: "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2NzQ0NjUxMDk1NDE4NDk4/cristiano-ronaldo-festeja.jpg" },
      { Puyol: "https://fotografias.lasexta.com/clipping/cmsimages01/2012/05/02/B8FB0DEA-60A2-4C88-A7E8-ABE80E0ABA7E/98.jpg?crop=1200,675,x0,y0&width=1900&height=1069&optimize=low&format=webply" },
      { Casillas: "https://cnnespanol.cnn.com/wp-content/uploads/2019/09/190912235308-iker-casillas-debut-futbol-espana-real-madrid-deportes-cnn-00000003-full-169.jpg?quality=100&strip=info" },
      { Nazario: "https://cdn.cnn.com/cnnnext/dam/assets/221017142414-deportes-ronaldo-nazario-world-cup-2002.jpg" },
      { Ronaldinho: "https://s1.eestatic.com/2018/11/07/deportes/futbol/ronaldinho-futbol-fc_barcelona_351478124_104863876_1706x960.jpg" },
      { Gavi: "https://www.elnacional.cat/uploads/s1/35/22/79/92/pablo-gavi-barca-betis.jpeg" },
      { Pedri: "https://s2.ppllstatics.com/rc/www/multimedia/2023/02/17/pedri-kQcD-U190666899945EPD-1200x840@RC.JPG" },
      { Kounde: "https://www.estadiodeportivo.com/imagenes/f41a5e1b-d367-4042-8dcd-8b487ece7931_1200x680.jpeg" },
      { TerStegen: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2023/01/23/63ced679f0864.jpeg" },
      { Courtois: "https://estaticos-cdn.epe.es/clip/c7d93566-c9d4-4169-a4ca-e158d5da562d_source-aspect-ratio_default_0.jpg" },
      { Rudiger: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8327f14b23a755d4/63161e620abfa76cf8f39d01/Toni_Rudiger.jpg?auto=webp&format=pjpg&width=3840&quality=60" },
      { Modric: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/10/06/3798732-77264568-2560-1440.jpg" },
      { Bellingan: "https://phantom-marca-us.unidadeditorial.es/60135e800780f243176b964c441fc4a4/resize/828/f/jpg/assets/multimedia/imagenes/2023/10/08/16967671610315.jpg" },
      { Kross: "https://3cnews.net/wp-content/uploads/2022/01/C82061A6-1735-46C9-9345-773231852426.jpeg" },
      ],
    }
  }

  render() {
    const { jugadorSeleccionado } = this.props;
    const imagenJugador = this.state.Imagenes1.find(jugador => jugador[jugadorSeleccionado]);
    if (Platform.OS === 'web') {
      return (
        <View style={styles.assideStyle}>
          
          <Image style={styles.image} source={{ uri: imagenJugador ? imagenJugador[jugadorSeleccionado] : '' }} />
        </View>
      );
    } else if (Platform.OS === 'android') {
      return (
        <View style={styles.assideStyleAndroid}>
          
          <Image style={styles.imageAndroid} source={{ uri: imagenJugador ? imagenJugador[jugadorSeleccionado] : '' }} />
        
        </View>
      );
    }

  }
}
const styles = StyleSheet.create({
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
  assideStyleAndroid: {
    borderWidth: 2,
    borderColor: '#000000',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageAndroid: {
    width: '95%',
    height: '95%',
  },
});
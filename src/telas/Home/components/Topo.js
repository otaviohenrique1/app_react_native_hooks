import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from "../../../assets/logo.png";
import { carregaTopo } from '../../../services/carregaDados';

class Topo extends React.Component {
  atualizaTopo() {
    const retorno = carregaTopo();
  }

  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={estilos.topo}>
        <Image source={Logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{carregaTopo().boasVindas}</Text>
        <Text style={estilos.legenda}>{carregaTopo().legenda}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  }
});

export default Topo;
import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { carregaProdutores } from '../../../services/carregaDados';

export default function Produtores() {
  const [titulo, setTitulo] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  const topoLista = () => {
    return <Text style={estilos.titulo}>{titulo}</Text>;
  };

  return (
    <FlatList
      data={lista}
      ListHeaderComponent={topoLista}
      renderItem={({item: { nome }}) => <Text>{nome}</Text>}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: "bold",
    color: "#464646",
  }
});

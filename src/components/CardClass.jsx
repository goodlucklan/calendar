import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const CardDate = (text, color) => {
  return (
    <View style={styles.container}>
      <View style={[styles.firstBlock, colorCard(color)]}>
        <Text style={styles.textColor}>{color}</Text>
      </View>
    </View>
  );
};

const colorCard = (color) => {
  switch (color) {
    case "Presencial":
      return {
        backgroundColor: "#226C37",
      };
    case "Virtual":
      return {
        backgroundColor: "#0260AB",
      };
    default:
      return {
        backgroundColor: "#048583",
      };
  }
};

const CardClass = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity style={{ marginBottom: 20, marginHorizontal: 5 }}>
      <View style={styles.containerCard}>
        <View style={styles.contentCard}>
          {CardDate(item.name, item.day)}
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textCard}>
            {item.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              marginHorizontal: 8,
              paddingTop: 12
            }}
          >
            07:30 - 09:30
          </Text>
          <Text style={{ marginHorizontal: 8, paddingTop: 12 }}>Zoom</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardClass;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    height: 24,
    borderColor: "#226C37",
  },
  firstBlock: {
    height: 24,
    borderRadius: 4,
  },
  textColor: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#FFFFFF",
    marginVertical: 4,
    marginHorizontal: 8,
    padding: 0,
    flexWrap: "wrap",
  },
  containerCard: {
    margin: 0,
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    height: 88,
    alignContent: "center",
    justifyContent: "center",
  },
  contentCard: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    borderWidth: 1,
    borderTopColor: "#FFFFFF",
    borderRightColor: "#FFFFFF",
    borderLeftColor: "#FFFFFF",
    borderBottomColor: "#E8F4FF",
  },
  textCard: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 8,
    textAlign: "left",
    alignSelf: "stretch",
  },
});

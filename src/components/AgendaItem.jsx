import React, { useCallback } from "react";
import {
  StyleSheet,
  Alert,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";

const AgendaItem = (props) => {
  const { item } = props;

  const buttonPressed = useCallback(() => {
    Alert.alert("Show me more");
  }, []);

  const itemPressed = useCallback(() => {
    Alert.alert(item.title);
  }, []);

  if (!item) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned Today</Text>
      </View>
    );
  }


  const CardDate = (text, color) => {
    let newText;
    switch (text) {
      case "4pm":
        newText = "Virtual";
        break;
      case "5pm":
        newText = "Presencial";
        break;
      default:
        newText = "R. academico";
        break;
    }
    return (
      <View style={styles2.container}>
        <View style={[styles2.firstBlock, colorCard(newText)]}>
          <Text style={styles2.textColor}>{newText}</Text>
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

  return (
    <TouchableOpacity style={{ marginBottom: 20, marginHorizontal: 5 }}>
      <View style={styles2.containerCard}>
        <View style={styles2.contentCard}>
          {CardDate(item.hour, item.duration)}
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles2.textCard}>
            {item.title}
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
              paddingTop: 12,
            }}
          >
            07:30 - 09:30
          </Text>
          <Text style={{ marginHorizontal: 8, paddingTop: 12 }}>Zoom</Text>
        </View>
      </View>
    </TouchableOpacity>
    // <TouchableOpacity onPress={itemPressed} style={styles.item}>
    //   <View>
    //     <Text style={styles.itemHourText}>{item.hour}</Text>
    //     <Text style={styles.itemDurationText}>{item.duration}</Text>
    //   </View>
    //   <Text style={styles.itemTitleText}>{item.title}</Text>
    //   <View style={styles.itemButtonContainer}>
    //     <Button color={"grey"} title={"Info"} onPress={buttonPressed} />
    //   </View>
    // </TouchableOpacity>
  );
};

export default React.memo(AgendaItem);

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
  },
  itemHourText: {
    color: "black",
  },
  itemDurationText: {
    color: "grey",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  itemTitleText: {
    color: "black",
    marginLeft: 16,
    fontWeight: "bold",
    fontSize: 16,
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  emptyItemText: {
    color: "lightgrey",
    fontSize: 14,
  },
});

const styles2 = StyleSheet.create({
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

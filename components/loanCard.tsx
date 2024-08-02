import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoanCard({ icons, text, color, itemback}) {
	const styles = StyleSheet.create({
  card1: {
    height: 220,
    borderWidth: 1,
    width: 150,
    borderRadius: 30,
    borderColor: "#1a2c04",
    backgroundColor:color,
    marginLeft:20,
    marginTop:40,
    marginBottom:40
  },
  iconView1: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: itemback,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconView2: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "#a9d0b5",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "500",
    color: "#1a2c04",
    marginLeft:10,
    marginTop:15,
    width:'90%'
  },
  angle:{
	backgroundColor:"#1a2c04",
	height:40,
	width:40,
	borderRadius:50,
	alignItems:'center',
	justifyContent:'center',
	marginLeft:90,
	marginTop:15
  }
});

  return (
    <View style={styles.card1}>
      <View style={styles.iconView1}>
        <FontAwesome6 name={icons} size={22} color="black" />
      </View>
      <Text style={styles.textHeader}>{text}</Text>
      <View style={styles.angle}>
	<FontAwesome name="angle-right" size={24} color="white" />
      </View>
    </View>
  );
}

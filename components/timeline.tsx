import { Ionicons } from "@expo/vector-icons";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import Timeline from "react-native-timeline-flatlist";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { StyleSheet } from "react-native";
export default function TimelineInfo() {
  const data = [
    {
//       time: "09:00",
      title: "1. Provide your bank debit card and employer details",
//       description: "Event 1 Description",
      icon: (
        <MaterialCommunityIcons name="bank-outline" size={22} color="black" />
      ),
      circleColor: "#b8d19a",
    },
    {
//       time: "10:45",
      title: "2. We'll verify your bank account and employment",
//       description: "Event 2 Description",
      icon: <Octicons name="verified" size={22} color="black" />,
      circleColor: "#d7baa8",
    },
    {
//       time: "12:00",
      title: "3. Get money in your bank",
//       description: "Event 3 Description",
      icon: <FontAwesome name="money" size={22} color="black" />,
      circleColor: "#a9d0b5",
    },
  ];
  return (
    <Timeline
      circleSize={40}
      circleColor={"circleColor"}
      innerCircle="icon"
      showTime={false}
      data={data}
      lineWidth={2}
      dotSize={30}
      lineColor="black"
      separator={false}
      style={{width:'90%', margin:'auto',paddingVertical:15}}
      titleStyle={styles.line}
    />
  );
}

const styles = StyleSheet.create({
	line:{
		height:80,
		// color:'red'
		fontWeight:300,
		paddingLeft:8,
		fontSize:20
	}
})
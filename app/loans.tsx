import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Loans() {
  return (
    <View style={{ height: 1000, width: "90%", margin: "auto" }}>
      <ScrollView>
        <View style={styles.main}>
          <TouchableOpacity style={styles.icon}>
            <Link href={"/transaction"}>
              <FontAwesome name="angle-left" size={30} color="black" />
            </Link>
          </TouchableOpacity>
          <Text style={styles.loanText3}>Loan activity</Text>
        </View>
        <View style={styles.moneyCard}>
          <View style={styles.quick}>
            <Text style={styles.quickText}>Health Loan</Text>
            <TouchableOpacity style={styles.button}>
              <Text>Paid</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.card1}>
            <View style={styles.iconView2}>
              <MaterialCommunityIcons
                name="credit-card"
                size={25}
                color="black"
              />
            </View>
            <View>
              <Text style={styles.loanText2}>$1,59.20</Text>
              <Text style={styles.loanText1}>Approved 04/06/2024</Text>
            </View>
          </View>
        </View>
        <View style={styles.moneyCard2}>
          <View style={styles.quick}>
            <Text style={styles.quickText}>Business Loan</Text>
            <TouchableOpacity style={styles.button2}>
              <Text>Paid</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.card1}>
            <View style={styles.iconView1}>
              <MaterialCommunityIcons
                name="credit-card"
                size={25}
                color="#40b163"
              />
            </View>
            <View>
              <Text style={styles.loanText2}>$1,59.20</Text>
              <Text style={styles.loanText1}>Approved 04/06/2024</Text>
            </View>
          </View>
        </View>
        <View style={styles.moneyCard}>
          <View style={styles.quick}>
            <Text style={styles.quickText}>Student Loan</Text>
            <TouchableOpacity style={styles.button2}>
              <Text>Paid</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.card1}>
            <View style={styles.iconView1}>
              <MaterialCommunityIcons
                name="credit-card"
                size={25}
                color="black"
              />
            </View>
            <View>
              <Text style={styles.loanText2}>$1,59.20</Text>
              <Text style={styles.loanText1}>Approved 04/06/2024</Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 100 }}>
          <View style={styles.moneyCard}>
            <View style={styles.quick}>
              <Text style={styles.quickText}>Health Loan</Text>
              <TouchableOpacity style={styles.button}>
                <Text>Paid</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.card1}>
              <View style={styles.iconView2}>
                <MaterialCommunityIcons
                  name="credit-card"
                  size={25}
                  color="black"
                />
              </View>
              <View>
                <Text style={styles.loanText2}>$1,59.20</Text>
                <Text style={styles.loanText1}>Approved 04/06/2024</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 130,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:'left'
  },
  icon: {
    borderBlockColor: "black",
    borderWidth: 2,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  loanText1: {
    // marginLeft:15,
    fontSize: 20,
    fontWeight: "300",
    color: "#a8a9a4",
  },
  moneyCard: {
    width: "100%",
    height: 220,
    borderWidth: 1,
    borderColor: "#1a2c04",
    borderRadius: 20,
    marginTop: 40,
  },
  moneyCard2: {
    width: "100%",
    height: 220,
    backgroundColor: "#d2f9de",
    borderRadius: 20,
    marginTop: 40,
  },
  divider: {
    width: "90%",
    margin: "auto",
    borderColor: "#a8a9a4",
    borderWidth: 0.5,
  },
  quick: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    margin: "auto",
  },
  quickText: {
    fontSize: 30,
    fontWeight: "600",
    color: "#1a2c04",
  },
  button: {
    height: 45,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b8d19a",
    borderRadius: 10,
  },
  button2: {
    height: 45,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d6ffe1",
    borderRadius: 10,
  },
  card1: {
    width: "90%",
    borderColor: "#1a2c04",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
  },
  iconView2: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#b8d19a",
    // flexDirection:'row',
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconView1: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#d6ffe1",
    // flexDirection:'row',
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  loanText2: {
    fontSize: 25,
    fontWeight: "600",
    color: "#1a2c04",
  },
  loanText3: {
    fontSize: 25,
    marginLeft: 15,
    fontWeight: "600",
    color: "#1a2c04",
  },
});

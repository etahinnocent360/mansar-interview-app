import LoanCard from "@/components/loanCard";
// import { fonts } from "@/hooks/fonts";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import AppLoading from 'expo-app-loading';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  MuktaMalar_200ExtraLight,
  MuktaMalar_300Light,
  MuktaMalar_400Regular,
  MuktaMalar_500Medium,
  MuktaMalar_600SemiBold,
  MuktaMalar_700Bold,
  MuktaMalar_800ExtraBold,
} from '@expo-google-fonts/mukta-malar';
export default function Transaction() {
     let [fontsLoaded] = useFonts({
    MuktaMalar_200ExtraLight,
    MuktaMalar_300Light,
    MuktaMalar_400Regular,
    MuktaMalar_500Medium,
    MuktaMalar_600SemiBold,
    MuktaMalar_700Bold,
    MuktaMalar_800ExtraBold,
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ backgroundColor: "#fafafa", height: 1000 }}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.profile}>
            <View>
              <Text style={styles.boldText}>Hi, Imran</Text>
              <Text style={styles.loanMessage}>
                Currently you have two loan
              </Text>
            </View>
            <View style={styles.imgView}>
              <Image
                style={styles.img}
                source={require("../assets/images/woman2.png")}
              />
            </View>
          </View>
          <View style={styles.balanceView}>
            <Text style={styles.balance}>Current balance</Text>
            <Text style={styles.boldText}>$1,459.21</Text>
          </View>
          <ScrollView
            style={{ marginVertical: 30, width: "100%" }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.card}>
              <View style={styles.iconView1}>
                <FontAwesome6 name="sack-dollar" size={22} color="black" />
              </View>
              <View>
                <Text style={styles.loanText1}>Loan amount</Text>
                <Text style={styles.loanText2}>$1,59.20</Text>
              </View>
            </View>
            <View style={styles.card1}>
              <View style={styles.iconView2}>
                <FontAwesome5 name="hand-holding-usd" size={22} color="black" />
              </View>
              <View>
                <Text style={styles.loanText1}>Wait payment</Text>
                <Text style={styles.loanText2}>$1,59.20</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.quick}>
            <Text style={styles.quickText}>Quick link</Text>
            <TouchableOpacity style={styles.button}>
              <Link href={"/loans"}>View all</Link>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{ marginHorizontal:-20}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <LoanCard
              icons={"sack-dollar"}
              text={"Apply for a loan"}
              color={"#fafafa"}
              itemback={"#a9d0b5"}
            />
            <LoanCard
              icons={"money-bill-alt"}
              text={"Make a payment"}
              color={"#e8fecd"}
              itemback={"#b8d19a"}
            />
            <LoanCard
              icons={"sack-dollar"}
              text={"Apply for a loan"}
              color={"#fafafa"}
              itemback={"#a9d0b5"}
            />
          </ScrollView>
             <View style={styles.quick}>
            <Text style={styles.quickText}>Loan offer</Text>
            <TouchableOpacity style={styles.button}>
              <Link href={"/loans"}>View all</Link>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{ marginHorizontal:-20}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <LoanCard
              icons={"sack-dollar"}
              text={"Apply for a loan"}
              color={"#fafafa"}
              itemback={"#a9d0b5"}
            />
            <LoanCard
              icons={"money-bill-alt"}
              text={"Make a payment"}
              color={"#e8fecd"}
              itemback={"#b8d19a"}
            />
            <LoanCard
              icons={"sack-dollar"}
              text={"Apply for a loan"}
              color={"#fafafa"}
              itemback={"#a9d0b5"}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "90%",
    margin: "auto",
    backgroundColor: "'#4c669f', '#3b5998', '#192f6a'",
    marginBottom:100
  },
  profile: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgView: {
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: "#f8efb8",
    alignItems: "center",
    justifyContent: "center",
  },
  boldText: {
    fontSize: 40,
    // fontWeight: "bold",
    color: "#1a2c04",
    fontFamily:'MuktaMalar_700Bold'
  },
  img: {
    height: 45,
    width: 30,
  },
  loanMessage: {
    fontSize: 15,
    color: "#a8a9a4",
    fontFamily:'MuktaMalar_300Light',
    marginTop:-5
  },
  balance: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom:-15,
    color: "#a8a9a4",
    fontFamily:'MuktaMalar_500Medium'
  },
  balanceView: {
    marginTop: 30,
    fontFamily:'MuktaMalar_700Bold'
  },
  card: {
    height: 90,
    borderWidth: 1,
    width: 175,
    borderRadius: 20,
    borderColor: "#1a2c04",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // marginLeft:8
  },
  card1: {
    height: 90,
    borderWidth: 1,
    width: 175,
    borderRadius: 20,
    borderColor: "#1a2c04",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: 20,
  },
  iconView1: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#b8d19a",
    // flexDirection:'row',
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconView2: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#a9d0b5",
    // flexDirection:'row',
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  loanText1: {
    fontSize: 17,
    // fontWeight: "600",
    color: "#a8a9a4",
    fontFamily:'MuktaMalar_500Medium'
  },
  loanText2: {
    fontSize: 35,
    fontWeight: "600",
    color: "#1a2c04",
    fontFamily:'MuktaMalar_700Bold',
    marginTop:-15
  },
  quick: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
  },
  quickText: {
    fontSize: 30,
    fontWeight: "600",
    color: "#1a2c04",
    fontFamily:'MuktaMalar_600SemiBold'
  },
  button: {
    height: 45,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    // borderColor:"#a8a9a4",
    borderRadius: 10,
    fontFamily:'MuktaMalar_300Light'
  },
});

import TimelineInfo from "@/components/timeline";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppLoading from 'expo-app-loading';
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
export default function Home() {
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
    <LinearGradient
      start={{ x: 1, y: 3 }}
      end={{ x: 0, y: 0 }}
      colors={["rgba(0,0,0,0.8)", "transparent"]}
    >
      <View style={{ height: 1000 ,backgroundColor:'#fafafa'}}>
        <ScrollView>
          <View style={styles.main}>
            <Image
              style={styles.img}
              source={require("../assets/images/home_money-removebg-preview.png")}
            />
          </View>
          <View>
            <Text style={styles.title}>Unlocking your pay starts now</Text>
            <Text style={styles.introduction}>
              In order to access your earnings we need to setup your account
            </Text>
            <SafeAreaView>
              <TimelineInfo />
            </SafeAreaView>
            <Text style={styles.terms}>
              Restrictions apply, see earning terms and service for details
            </Text>
            <TouchableOpacity style={styles.button}>
              <Link href={"/transaction"} style={styles.buttonText}>
                Continue
              </Link>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  main: {
    height: 210,
    marginTop: 40,
    width: "100%",
    // backgroundColor:'red'
  },
  img: {
    height: 200,
    margin: "auto",
    width: "80%",
  },
  title: {
    color: "#1a2c04",
    fontSize: 35,
    width: "90%",
    textAlign: "center",
    margin: "auto",
    fontWeight: "bold",
    fontFamily: 'MuktaMalar_700Bold',
    paddingTop: 20,
  },
  introduction: {
    width: "90%",
    fontSize: 20,
    margin: "auto",
    textAlign: "center",
    color: "#a8a9a4",
    lineHeight:20,
    fontFamily:'MuktaMalar_400Regular',
    paddingVertical: 10,
  },
  terms: {
    width: "90%",
    margin: "auto",
    fontSize: 13,
    marginTop: -20,
    color: "#a8a9a4",
  },
  button: {
    backgroundColor: "#1b2d05",
    width: "90%",
    margin: "auto",
    height: 75,
    borderRadius: 30,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center",
  },
});

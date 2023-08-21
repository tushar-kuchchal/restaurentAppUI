import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Detail = ({ navigation }) => {
  return (
    <ScrollView ScrollView>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/leftArrow.png")}
            style={{ height: 20, width: 15 }}
          />
        </TouchableOpacity>
      </View>

      <View>
        <View style={{ alignItems: "flex-end" }}>
          <Image
            source={require("../assets/vLogo.png")}
            style={{ height: 200, width: 240 }}
            resizeMode="cover"
          />
        </View>

        <View
          style={{
            position: "absolute",
            marginTop: 15,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Mashala Muglai
            </Text>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "green",
                height: 15,
                width: 30,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                margin: 5,
              }}
            >
              <Text style={{ fontSize: 10, color: "white" }}>4.5</Text>
              <Image
                source={require("../assets/star.png")}
                style={{ height: 10, width: 10, marginLeft: 2 }}
              />
            </View>
          </View>
          <View style={{ height: 100, width: "75%", marginTop: 10 }}>
            <Text style={{ fontWeight: "200" }}>
              {" "}
              Mughts Mussia is a style of cookery developer in the Indian
              Subcontinent by the imperial kitchens of the Mughal Empire
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/clock.png")}
              style={styles.icon}
            />
            <Text style={{ fontWeight: "500", marginLeft: 15 }}>1 hour</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          width: "100%",
          marginTop: 20,
          borderColor: "#a9a9a9",
        }}
      ></View>
      <View
        style={{
          height: 80,
          width: "90%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Ingredients</Text>
        <Text style={{ color: "gray", fontSize: 10, marginTop: 5 }}>
          For 2 people
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          width: "100%",
          marginTop: 20,
          borderColor: "#a9a9a9",
        }}
      ></View>

      <View style={styles.dropContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Vegetables (05)
        </Text>
        <Image
          source={require("../assets/drop-down-arrow.png")}
          style={styles.downImg}
        />
      </View>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          height: 100,
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Cauliflower</Text>
          <Text>01 Pc</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Tomato</Text>
          <Text>10 Pc</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Spinach</Text>
          <Text>1/2 Kg</Text>
        </View>
      </View>
      <View style={styles.dropContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Spices (10)</Text>
        <Image
          source={require("../assets/drop-down-arrow.png")}
          style={styles.downImg}
        />
      </View>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          height: 100,
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Coriander</Text>
          <Text>100 gram</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Mustard oil</Text>
          <Text>1/2 liters</Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          width: "90%",
          alignSelf: "center",
        }}
      >
        Appliances
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          height: 150,
          alignSelf: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "80%",
            width: "25%",
            backgroundColor: "#DEDEDE",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/refridgrator.png")}
            style={{ height: "70%", width: "60%" }}
          />
          <Text style={{ fontSize: 10 }}>Refrigerator</Text>
        </View>
        <View
          style={{
            height: "80%",
            width: "25%",
            backgroundColor: "#DEDEDE",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/refridgrator.png")}
            style={{ height: "70%", width: "60%" }}
          />
          <Text style={{fontSize:10}}>Refrigerator</Text>
        </View>
        <View
          style={{
            height: "80%",
            width: "25%",
            backgroundColor: "#DEDEDE",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/refridgrator.png")}
            style={{ height: "70%", width: "60%" }}
          />
          <Text style={{fontSize:10}}>Refrigerator</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
  },
  icon: { height: 25, width: 25 },
  downImg: { height: 8, width: 8, padding: 10, marginLeft: 10 },
  dropContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    paddingTop: 10,
  },
});

export default Detail;

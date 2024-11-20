import React, { useState } from "react";
import {Text,View,Pressable,StyleSheet,TouchableOpacity,ScrollView,FlatList,Image,} from "react-native";
import HomeHeader from "../subscreen/Home_page_header";
import { promoCategories, standard, recomended } from "../global/Data.js";
import { colors } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
export default function Homepage({ navigation }) {
  const [Delivery, setDelivery] = useState(false);
  const [indexcheck, setindexcheck] = useState(" ");
  const [sindexcheck, ssetindexcheck] = useState(" ");
  const [recoindexcheck, recosetindexcheck] = useState(" ");

  return (
    <View style={{ flex: 1 }}>
      <View>
        <HomeHeader title="sign in" type="arrow-left" navigation={navigation} />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, padding: 20 }}
        showsVerticalScrollIndicator={true}
        stickyHeaderIndices={[0]}
      >
        <View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View
                style={{
                  ...styles.deliveryButon,
                  backgroundColor: Delivery
                    ? "hsl(27, 88%, 58%)"
                    : colors.grey5,
                }}
              >
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}
            >
              <View
                style={{
                  ...styles.setDeliveryButon,
                  backgroundColor: Delivery
                    ? colors.grey5
                    : "hsl(27, 88%, 58%)",
                }}
              >
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.filterWholContainer}>
            <View style={styles.mepTimeContainer}>
              <View style={[{ flexDirection: "row", padding: 5 }]}>
                <Feather name="map-pin" color="hsl(0, 71%, 58%)" size={32} />
                <Text>gurd shola</Text>
              </View>
              <View style={styles.timeIconCntainer}>
                <Feather name="clock" color={colors.grey3} size={32} />
                <Text style={{ paddingRight: 5 }}>now</Text>
              </View>
            </View>
            <View style={styles.filterView}>
              <Feather name="sliders" color={colors.grey2} size={32} />
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.TextHead}>Promotion Categories</Text>
          <View style={styles.promotionView}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={promoCategories}
              keyExtractor={(item) => item.id}
              extraData={indexcheck}
              renderItem={({ item }) => (
                <Pressable
                  style={{ padding: 10 }}
                  onPress={() => {
                    setindexcheck(item.id);
                  }}
                >
                  <View
                    style={
                      indexcheck === item.id
                        ? styles.promotionCardsSelected
                        : styles.promotionCards
                    }
                  >
                    <Image
                      style={{
                        height: "70%",
                        width: "70%",
                        borderRadius: 15,
                        padding: 10,
                      }}
                      source={item.image}
                    />
                    <View>
                      <Text
                        style={
                          indexcheck === item.id
                            ? styles.promotionCardtextSelected
                            : styles.promotionCardtext
                        }
                      >
                        {item.ProductName}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
        </View>

        <View>
          <Text style={styles.TextHead}>Standard Categories</Text>
          <View style={styles.promotionView}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={standard}
              keyExtractor={(item) => item.id}
              extraData={sindexcheck}
              renderItem={({ item }) => (
                <Pressable
                  style={{ padding: 10 }}
                  onPress={() => {
                    ssetindexcheck(item.id);
                  }}
                >
                  <View
                    style={
                      sindexcheck === item.id
                        ? styles.standardCardsSelected
                        : styles.standardCards
                    }
                  >
                    <Image
                      style={{
                        height: "70%",
                        width: "70%",
                        borderRadius: 15,
                        padding: 10,
                      }}
                      source={item.image}
                    />
                    <View>
                      <Text
                        style={
                          indexcheck === item.id
                            ? styles.promotionCardtextSelected
                            : styles.promotionCardtext
                        }
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
        </View>

        <View>
          <Text style={styles.TextHead}>Recommended Categories</Text>
          <View style={styles.promotionView}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={recomended}
              keyExtractor={(item) => item.id}
              extraData={recoindexcheck}
              renderItem={({ item }) => (
                <Pressable
                  style={{ padding: 10 }}
                  onPress={() => {
                    recosetindexcheck(item.id);
                  }}
                >
                  <View
                    style={
                      recoindexcheck === item.id
                        ? styles.standardCardsSelected
                        : styles.standardCards
                    }
                  >
                    <Image
                      style={{
                        height: "70%",
                        width: "70%",
                        borderRadius: 15,
                        padding: 10,
                      }}
                      source={item.image}
                    />
                    <View>
                      <Text
                        style={
                          recoindexcheck === item.id
                            ? styles.promotionCardtextSelected
                            : styles.promotionCardtext
                        }
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
        </View>
      </ScrollView>{" "}
      {/* Ensure this closes properly */}
    </View>
  );
}

const styles = StyleSheet.create({
  // Your styles here
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  deliveryButon: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 15,
    marginVertical: 20,
  },
  setDeliveryButon: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 15,
    marginVertical: 20,
  },
  deliveryText: {
    marginLeft: 15,
    fontSize: 16,
    color: "black",
  },
  filterWholContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  mepTimeContainer: {
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: colors.grey5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
  },
  timeIconCntainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 15,
  },
  filterView: {
    alignItems: "center",
    marginRight: 5,
  },
  promotionView: {
    backgroundColor: colors.grey5,
    marginTop: 10,
    margin: 10,
    padding: 10,
  },
  TextHead: {
    color: colors.grey2,
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 5,
    textAlign: "center",
  },
  promotionCards: {
    borderRadius: 15,
    backgroundColor: colors.grey3,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  promotionCardsSelected: {
    borderRadius: 15,
    backgroundColor: "hsl(27, 88%, 58%)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    width: 100,
    height: 100,
  },
  promotionCardtextSelected: {
    fontWeight: "bold",
    color: colors.grey1,
  },
  promotionCardtext: {
    fontWeight: "bold",
    color: colors.grey2,
  },
  standardCards: {
    borderRadius: 15,
    backgroundColor: colors.grey3,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 300,
    height: 300,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  standardCardsSelected: {
    borderRadius: 15,
    backgroundColor: "hsl(27, 88%, 58%)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    width: 400,
    height: 400,
  },
});

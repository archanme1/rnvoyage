import React from "react";
import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";
import appartments from "@assets/data/feature5/dummy.json";

type ApartmentListItemProps = {
  apartment: typeof appartments[0];
  onPress: () => void;
  containerStyle?: ViewStyle;
  close?: boolean;
}

const ApartmentListItem = ({
  apartment,
  onPress,
  containerStyle,
  close
}: ApartmentListItemProps ) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: apartment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{apartment.title}</Text>
        <Text style={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          fugit quia ratione impedit.
        </Text>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>$ {apartment.price}</Text>
          </View>
          <Text style={styles.price}>
            ★ {apartment.rating} ({apartment.numberOfStars})
          </Text>
          {!close && <Text style={styles.price} onPress={onPress}>
            ❌
          </Text>}
        </View>
      </View>
    </View>
  );
};

export default ApartmentListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    // position: "absolute",
    // bottom: 20,
    // right: 10,
    // left: 10,
    flexDirection: "row",
    gap: 10,
    overflow: "hidden", 
    borderRadius: 10,
  },
  image: {
    width: 125,
    aspectRatio: 1,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontFamily: "Inter",
    marginBottom: 5,
  },
  description: {
    color: "gray",
    fontFamily: "AmaticBold",
    fontSize: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  priceContainer: {
    backgroundColor: "#32572f",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 50,
  },
  price: {
    color: "#7e9e7b",
    fontSize: 12,
    fontFamily: "Inter",
  },
});
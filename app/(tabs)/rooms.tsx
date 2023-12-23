import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const items = [
  {
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    address: "225 Talbot Street Trumbull, CT 06611",
    bedrooms: 4,
    sqft: 1250,
    price: 2550,
  },
  {
    img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    address: "998 Hillcrest Street Cookeville, TN 38501",
    bedrooms: 2,
    sqft: 800,
    price: 1725,
  },
  {
    img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    address: "15 Santa Clara Street Antioch, TN 37013",
    bedrooms: 3,
    sqft: 920,
    price: 2200,
  },
  {
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2350&q=80",
    address: "8757 Sunbeam Street Fullerton, CA 92831",
    bedrooms: 5,
    sqft: 2400,
    price: 6700,
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    address: "468 E. Atlantic Dr. Passaic, NJ 07055",
    bedrooms: 3,
    sqft: 1975,
    price: 5650,
  },
  {
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    address: "954 Bishop St. Capitol Heights, MD 20743",
    bedrooms: 2,
    sqft: 925,
    price: 2250,
  },
];

export default function Example() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Listings</Text>

        {items.map(({ img, address, bedrooms, sqft, price }, index) => {
          return (
            <View
              key={index}
              style={[styles.cardWrapper, index === 0 && { borderTopWidth: 0 }]}
            >
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                <View style={styles.card}>
                  <Image
                    alt=""
                    resizeMode="cover"
                    source={{ uri: img }}
                    style={styles.cardImg}
                  />

                  <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>{address}</Text>

                    <View style={styles.cardRow}>
                      <View style={styles.cardRowItem}>
                        <FontAwesome color="#173153" name="bed" size={13} />

                        <Text style={styles.cardRowItemText}>
                          {bedrooms} Bedrooms
                        </Text>
                      </View>

                      <View style={styles.cardRowItem}>
                        <FontAwesome
                          color="#173153"
                          name="plus-square"
                          solid={true}
                          size={13}
                        />

                        <Text style={styles.cardRowItemText}>
                          {sqft.toLocaleString("en-US")} sqft
                        </Text>
                      </View>
                    </View>

                    <Text style={styles.cardPrice}>
                      ${price.toLocaleString("en-US")} / month
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  card: {},
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
    marginBottom: 16,
  },
  cardImg: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginRight: 16,
  },
  cardBody: {
    paddingVertical: 16,
  },
  cardTitle: {
    fontSize: 21,
    lineHeight: 28,
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: -6,
    marginBottom: 8,
  },
  cardRowItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  cardRowItemText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#173153",
    marginLeft: 4,
  },
  cardPrice: {
    fontSize: 19,
    fontWeight: "700",
    color: "#173153",
  },
});

import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';

// Dapatkan lebar layar perangkat
const { width: screenWidth } = Dimensions.get('window');

// Tipe untuk properti item
type EventItemProps = {
  item: {
    id: string;
    title: string;
    date: string;
    image: any; // Tipe 'any' untuk 'require'
  };
};

const EventCard = ({ item }: EventItemProps) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={item.image}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth - 60, // Lebar kartu = lebar layar dikurangi sedikit padding
    height: 200,
    marginHorizontal: 30, // Padding di sisi kanan dan kiri
    borderRadius: 20,
    // Efek shadow untuk iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    // Efek shadow untuk Android
    elevation: 8,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end', // Posisikan teks di bawah
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay gelap agar teks terbaca
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
});

export default EventCard;
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import EventCard from './EventCard';

// Data events (bisa diimport dari file lain)
const EVENTS_DATA = [
  // ... (copy data dari Langkah 1 ke sini)
  { id: '1', title: 'Konser Musik Kemerdekaan', date: '31 Agustus 2025', image: require('../../assets/images/all stars ads.jpeg') },
  { id: '2', title: 'Festival Kuliner Nusantara', date: '5 September 2025', image: require('../../assets/images/valorant_ads.jpeg') },
  { id: '3', title: 'Festival Kuliner Nusantara', date: '5 September 2025', image: require('../../assets/images/valorant_ads.jpeg') },
  { id: '4', title: 'Festival Kuliner Nusantara', date: '5 September 2025', image: require('../../assets/images/valorant_ads.jpeg') },
  
];

const EventRenders = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={EVENTS_DATA}
        renderItem={({ item }) => <EventCard item={item} />}
        keyExtractor={item => item.id}
        // ---- PROPERTI KUNCI ----
        horizontal={true} // Membuat FlatList scroll ke samping
        pagingEnabled={true} // 👈 Ini properti ajaibnya! Membuat scroll berhenti per item
        showsHorizontalScrollIndicator={false} // Menghilangkan scrollbar
        // Properti di bawah ini membantu snapping lebih presisi
        snapToAlignment="center"
        decelerationRate="fast"
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220, // Beri tinggi yang cukup untuk card dan shadow
  },
});

export default EventRenders;
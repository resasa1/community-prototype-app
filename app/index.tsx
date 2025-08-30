import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ImageBackground, // Ditambahkan untuk handle layar kecil
  KeyboardAvoidingView, // Ditambahkan agar keyboard tidak menutupi input
  Platform, // Untuk behavior spesifik OS,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Index() {
  const {t} = useTranslation();
  
  // --- STATE MANAGEMENT ---
  // Mengelola value dari setiap input form dengan useState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // --- FONT LOADING ---
  const [fontsLoaded] = useFonts({
    'supercellFonts': require('../assets/fonts/supercell-magic.ttf'),
  });

  // Tampilkan loading screen atau null jika font belum siap
  if (!fontsLoaded) {
    return null;
  }

  // --- RENDER FUNCTION ---
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Bagian 1: Gambar Header */}
        <ImageBackground
          source={require('../assets/images/sketchPin.jpeg')}
          style={styles.headerImage}
        />

        {/* Bagian 2: Konten Form dalam ScrollView */}
        <ScrollView 
            style={styles.contentContainer}
            contentContainerStyle={styles.contentScrollView}
            showsVerticalScrollIndicator={false}
        >
          {/* Judul */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{t('join-us')}</Text>
            <TouchableOpacity>
              <Text style={styles.subtitleText}>&apos;{t('name-club')}&apos;</Text>
            </TouchableOpacity>
          </View>

          {/* Form Input */}
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your name"
                placeholderTextColor={'#B1B1B1'}
                autoCapitalize='words'
                value={name}
                onChangeText={setName}
              />
            </View>
            
            {/* <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your email"
                placeholderTextColor={'#B1B1B1'}
                autoCapitalize='none'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
              />
            </View> */}

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your password"
                placeholderTextColor={'#B1B1B1'}
                autoCapitalize='none'
                secureTextEntry // Menyembunyikan input password
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          {/* Tombol Submit */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => router.replace('./(tabs)/Dashboard')}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>

          {/* Footer/Disclaimer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Dengan mengklik setuju maka Anda menyetujui persyaratan platform ini.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// --- STYLESHEET ---
// Semua styling dipusatkan di sini agar lebih rapi dan teroptimasi
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 350, // Tinggi gambar dibuat lebih kecil agar proporsional
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20, // Sedikit overlap untuk efek visual, tapi tidak merusak layout
  },
  contentScrollView: {
    padding: 30,
    alignItems: 'center', // Pusatkan semua konten di dalam scrollview
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  titleText: {
    fontFamily: 'supercellFonts',
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitleText: {
    fontFamily: 'supercellFonts',
    fontSize: 20,
    color: '#FFD700', // Memberi warna agar terlihat seperti link
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontFamily: 'supercellFonts',
    fontSize: 16,
    marginBottom: 8,
    color: '#3A3A3A',
  },
  inputField: {
    fontFamily: 'supercellFonts',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingHorizontal: 15,
    paddingVertical: 12,
    width: '100%',
    borderRadius: 10,
    color: '#3A3A3A',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: "#000", // Menambahkan shadow agar tombol lebih menonjol
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 30,
  },
  submitButtonText: {
    fontFamily: 'supercellFonts',
    color: 'black',
    fontSize: 18,
  },
  footer: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: '#A0A0A0',
    textAlign: 'center',
    fontSize: 12,
  },
});

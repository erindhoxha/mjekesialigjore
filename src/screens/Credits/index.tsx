import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Text, Linking, TouchableOpacity } from 'react-native';
import { HouseLine } from 'phosphor-react-native';

import { Header } from '../../components/Header';

import { styles } from './styles';

export function Credits() {

  const { goBack } = useNavigation();

  const handlePressPhone = () => {
    Linking.openURL('tel:+38348377390');
  };

  const handlePressEmail = () => {
    Linking.openURL('mailto:mjekesialigjoreapp@gmail.com');
  };

  return (
    <View style={styles.container}>
      <Header
        title="Kreditet"
        subtitle={`Kreditet e studimeve tuaja të realizuara`}
        icon={HouseLine}
        onPress={goBack}
      />

      <ScrollView
        contentContainerStyle={styles.textContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.h1}>Falenderojmë</Text>
        <Text style={styles.text}>Dr. Genta Bunjaku</Text>
        <Text style={styles.text1}>Dr. Flamur Blakaj dhe Sokrat Meksi janë autorët e librit Mjekësia Ligjore</Text>
        <Text style={styles.text2}>Mund ta gjeni librin ta bleni ne keto pika te shitjës: Libraria Dukagjini, Libraria Buzuku, IML.</Text>
        <Text style={styles.text}>Erind Hoxha (Zhvillues i aplikacionit)</Text>
        <View style={styles.contactWrapper}>
          <Text style={styles.contact}>Mund të na kontaktoni në:</Text>
          <Text style={styles.contact}>
          Telefono në:
          </Text>
          <TouchableOpacity onPress={handlePressPhone}>
            <Text style={[styles.text, styles.link]}>+38348377390</Text>
          </TouchableOpacity>
          <Text style={styles.contact}>
          Dergo e-mail nê:
          </Text>
          <TouchableOpacity onPress={handlePressEmail}>
            <Text style={[styles.text, styles.link]}> mjekesialigjoreapp@gmail.com</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
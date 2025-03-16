import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Text } from 'react-native';
import { HouseLine } from 'phosphor-react-native';

import { Header } from '../../components/Header';

import { styles } from './styles';

export function Credits() {

  const { goBack } = useNavigation();

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
        <Text style={styles.h1}>Falenderojme</Text>
        <Text style={styles.text}>Dr. Genta Bunjaku (Doktore, hulumtuese)</Text>
        <Text style={styles.text}>Flamur Blakaj dhe Sokrat Meksi janë autorët e librit Mjekësia Ligjore</Text>
        <Text style={styles.text}>Mund ta gjeni librin ta bleni ne keto pika te shitjes: Libraria Dukagjini, Libraria Buzuku, IML.</Text>
        <Text style={styles.text}>Erind Hoxha (Zhvillues i aplikacionit)</Text>

        <Text style={styles.contact}>Kontaktoni ne +38348377390 ose ne mjekesialigjoreapp@gmail.com</Text>
      </ScrollView>
    </View>
  );
}
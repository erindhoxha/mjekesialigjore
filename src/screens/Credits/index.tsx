import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, Linking, TouchableOpacity } from "react-native";
import { HouseLine } from "phosphor-react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export function Credits() {
  const { goBack } = useNavigation();

  const handlePressPhone = () => {
    Linking.openURL("tel:+38348377390");
  };

  const handlePressEmail = () => {
    Linking.openURL("mailto:mjekesialigjoreapp@gmail.com");
  };

  return (
    <View style={styles.container}>
      <Header
        title="Kreditet"
        subtitle={`Kreditet e studimeve tuaja të realizuara`}
        icon={HouseLine}
        onPress={goBack}
      />

      <ScrollView contentContainerStyle={styles.textContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.textTop}>
          Pyetjet dhe përmbajtja në këtë aplikacion janë hartuar me fjalët tona, duke u mbështetur në literaturën
          ekzistuese si material orientues.
        </Text>
        <View style={styles.textWrapper}>
          <Text style={styles.text1}>Dr. Flamur Blakaj</Text>
          <Text style={styles.text1}>Dr. Sokrat Meksi</Text>
          <Text style={styles.text2}>Autor të librit Mjekësia Ligjore</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Dr. Genta Bunjaku</Text>
          <Text style={styles.text2}>Mjeke Ligjore ne Institutin e Mjekësisë Ligjore në Kosovë</Text>
        </View>
        <Text style={styles.text}>Erind Hoxha</Text>
        <Text style={styles.text2}>Zhvillues i aplikacionit</Text>
        <View>
          <Text style={styles.contact1}>Kontakti</Text>
          <View style={styles.contactInner}>
            <Text style={styles.contact}>Telefono në:</Text>
            <TouchableOpacity onPress={handlePressPhone}>
              <Text style={[styles.text, styles.link]}>+38348377390</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contactInner}>
            <Text style={styles.contact}>Dergo e-mail nê:</Text>
            <TouchableOpacity onPress={handlePressEmail}>
              <Text style={[styles.text, styles.link]}>mjekesialigjoreapp@gmail.com</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

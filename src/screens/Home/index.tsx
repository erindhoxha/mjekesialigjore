import { FlatList, View } from "react-native";
import { Trophy, Medal } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { QuizCard } from "../../components/QuizCard";

import { styles } from "./styles";
import { QUIZZES } from "../../data/quizzes";

export function Home() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        icon={Medal}
        onPress={() => navigate("credits")}
        title="Mjekësia Ligjore"
        subtitle="Teste teorike për mjekësinë ligjore"
      />
      <FlatList
        data={QUIZZES}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <QuizCard index={index} data={item} onPress={() => navigate("quiz", { id: item.id })} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cards}
      />
    </View>
  );
}

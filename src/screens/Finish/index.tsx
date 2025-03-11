import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Stars } from "../../components/Stars";

import { styles } from "./styles";
import { HistoryProps } from "../../components/HistoryCard";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Params {
  total: string;
  points: string;
  quizHistory: HistoryProps[];
}

export function Finish() {
  const route = useRoute();
  const { points, total, quizHistory } = route.params as Params;

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Stars />

      <View style={styles.message}>
        <Text style={styles.title}>
          Bravo!
        </Text>

        <Text style={styles.subtitle}>
          Ju keni përgjigjur saktë {points} nga {total} pyetje
        </Text>
      </View>
      <Button
        title="Kthehu në fillim"
        onPress={() => navigate("home")}
      />
      {quizHistory?.length > 0 && (
        <View>
          {quizHistory.map((history, index) => (
            <TouchableOpacity
              key={history.id}
            >
              <Text style={{ color: "white" }}>
                {`${index + 1}`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

import { useState } from "react";
import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Stars } from "../../components/Stars";

import { styles } from "./styles";
import { HistoryProps } from "../../components/HistoryCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { QUIZ } from "../../data/quiz";

type QuizProps = typeof QUIZ[0];
interface Params {
  total: string;
  points: string;
  quizHistory: HistoryProps[];
  quiz: QuizProps;
}

export function Finish() {
  const route = useRoute();
  const { points, total, quizHistory, quiz } = route.params as Params;

  const { navigate } = useNavigation();
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleQuestionPress = (index: number) => {
    setSelectedQuestion(index);
  };

  const selectedQuestionDetails = selectedQuestion !== null ? quiz.questions[selectedQuestion] : null;
  const selectedHistoryItem = selectedQuestion !== null ? quizHistory.find(item => item.questionIndex === selectedQuestion) : null;

  return (
    <View style={styles.container}>
      <Stars />

      <View style={styles.message}>
        <Text style={styles.title}>
          {points === total ? "Bravo!" : "Më mirë herën tjetër!"}
        </Text>

        <Text style={styles.subtitle}>
          Ju keni përgjigjur saktë {points} nga {total} pyetje
        </Text>
      </View>
      <Button
        title="Kthehu në fillim"
        onPress={() => navigate("home")}
      />
      {quiz.questions.length > 0 && (
        <View style={styles.scoreContainer}>
          {quiz.questions.map((question, index) => {
            const historyItem = quizHistory.find(
              (item) => item.questionIndex === index,
            );
            const isAnswered = !!historyItem;
            const isCorrect = isAnswered &&
              question.correct === historyItem?.alternativeSelected;

            return isAnswered
              ? (
                <TouchableOpacity
                  style={[
                    styles.scoreButton,
                    !isAnswered && styles.scoreButtonGray,
                    isAnswered && isCorrect && styles.scoreButtonCorrect,
                    isAnswered && !isCorrect && styles.scoreButtonIncorrect,
                  ]}
                  key={question.title}
                  onPress={() => handleQuestionPress(index)}
                >
                  <Text style={{ color: "black" }}>
                    {`${index + 1}`}
                  </Text>
                </TouchableOpacity>
              )
              : (
                <View style={styles.scoreButtonGray} key={question.title}>
                  <Text style={{ color: "black" }}>
                    {`${index + 1}`}
                  </Text>
                </View>
              );
          })}
        </View>
      )}
      {selectedQuestionDetails && selectedHistoryItem && (
        <View style={styles.selectedQuestionDetails}>
          <Text style={styles.title}>
            {selectedQuestionDetails.title}
          </Text>
          <Text style={styles.subtitle}>
            Your answer: {selectedQuestionDetails.alternatives[selectedHistoryItem.alternativeSelected || 0]}
          </Text>
          <Text style={styles.subtitle}>
            Correct answer: {selectedQuestionDetails.alternatives[selectedQuestionDetails.correct]}
          </Text>
          <Text style={styles.subtitle}>
            Explanation: {selectedQuestionDetails.explanation}
          </Text>
        </View>
      )}
    </View>
  );
}
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Stars } from "../../components/Stars";

import { styles } from "./styles";
import { HistoryProps } from "../../components/HistoryCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { QUIZ } from "../../data/quiz";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { Question } from "../../components/Question";
import { Option } from "../../components/Option";

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

  const [selectedHistoryQuestion, setSelectedHistoryQuestion] = useState<number | null>(null);
  const { navigate } = useNavigation();
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleQuestionPress = (index: number) => {
    setSelectedQuestion(index);
  };

  const selectedQuestionDetails = selectedQuestion !== null
    ? quiz.questions[selectedQuestion]
    : null;
  const selectedHistoryItem = selectedQuestion !== null
    ? quizHistory.find((item) => item.questionIndex === selectedQuestion)
    : null;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View>
          {/* <Stars /> */}
          <View style={styles.message}>
            <Text style={styles.title}>
              {points === total ? "Bravo!" : "Më mirë herën tjetër!"}
            </Text>
            <Text style={styles.subtitle}>
              Ju keni përgjigjur saktë <Text style={styles.bold}>{points}</Text> nga <Text style={styles.bold}>{total}</Text> pyetje
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
                const isSelected = selectedQuestion === index;
                return isAnswered
                  ? (
                    <TouchableOpacity
                      style={[
                        styles.scoreButton,
                        !isAnswered && styles.scoreButtonGray,
                        isAnswered && isCorrect && styles.scoreButtonCorrect,
                        isAnswered && !isCorrect && styles.scoreButtonIncorrect,
                        isSelected && styles.scoreButtonSelected,
                      ]}
                      key={question.title}
                      onPress={() => handleQuestionPress(index)}
                    >
                      <Text style={[{ color: "black" }, isSelected && { color: "white", fontWeight: "bold" }]}>
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
              <Text style={styles.title2}>
                {selectedQuestionDetails.title}
              </Text>
              {selectedQuestionDetails.alternatives.map((alternative, index) => {
                let status: 'correct' | 'incorrect' | 'neutral' = 'neutral';
                if (index === selectedQuestionDetails.correct) {
                  status = 'correct';
                } else if (index === selectedHistoryItem.alternativeSelected) {
                  status = 'incorrect';
                }
                return (
                  <Option
                    key={index}
                    title={alternative}
                    checked={selectedHistoryItem.alternativeSelected !== null ? selectedHistoryItem.alternativeSelected === index : selectedHistoryItem.alternativeSelected === index}
                    status={status}
                  />
                );
              })}
              {selectedQuestionDetails.explanation && (
                <Text style={styles.subtitle}>
                  Pergjigja e plote: {selectedQuestionDetails.explanation}
                </Text>
              )}
            </View>
          )}
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}
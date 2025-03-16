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
                   {/* {selectedQuestion && (
              <Question
                  key={quiz.questions[selectedQuestion].title}
                  question={quiz.questions[selectedQuestion]}
                  alternativeSelected={selectedQuestion}
                  history={quizHistory}
                />
            )} */}
            <Text style={styles.title2}>
              {selectedQuestionDetails.title}
            </Text>
            <Text style={styles.subtitle}>
              Your answer:{" "}
              {selectedQuestionDetails
                .alternatives[selectedHistoryItem.alternativeSelected || 0]}
            </Text>
            <Text></Text>
            <Text style={styles.subtitle}>
              Correct answer:{" "}
              {selectedQuestionDetails
                .alternatives[selectedQuestionDetails.correct]}
            </Text>
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

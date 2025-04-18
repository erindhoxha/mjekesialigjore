import { View, Text } from "react-native";

import { ProgressBar } from "../ProgressBar";

import { styles } from "./styles";

interface Props {
  title: string;
  totalOfQuestions: number;
  currentQuestion: number;
}

export function QuizHeader({ title, totalOfQuestions, currentQuestion }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.question}>
          {title} / Pyetja e {currentQuestion}
        </Text>

        <Text style={styles.length}>
          {currentQuestion}/{totalOfQuestions}
        </Text>
      </View>

      <ProgressBar total={totalOfQuestions} current={currentQuestion} />
    </View>
  );
}

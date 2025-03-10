import { Text, Image } from 'react-native';
import Animated from 'react-native-reanimated';

import { Option } from '../Option';
import { styles } from './styles';
import { HistoryProps } from '../HistoryCard';

type QuestionProps = {
  title: string;
  image?: string;
  alternatives: string[];
}

type Props = {
  question: QuestionProps;
  alternativeSelected?: number | null;
  setAlternativeSelected?: (value: number) => void;
  currentQuestionIndex: number;
  onUnmount: () => void;
  history: HistoryProps[];
}

export function Question({
  question,
  alternativeSelected,
  setAlternativeSelected,
  currentQuestionIndex,
  history,
}: Props) {
  const currentQuestionHistory = history.find((item) => item.questionIndex === currentQuestionIndex);
  return (
    <Animated.View style={styles.container}>
      {question?.image && <Image style={{
        width: 400,
        height: 200,
      }} source={question.image} />}
      <Text style={styles.title}>
        {question.title}
      </Text>
      {
        question.alternatives.map((alternative, index) => (
          <Option
            key={index}
            title={alternative}
            checked={alternativeSelected !== null ? alternativeSelected === index : currentQuestionHistory?.alternativeSelected === index}
            onPress={() => setAlternativeSelected && setAlternativeSelected(index)}
          />
        ))
      }
    </Animated.View>
  );
}
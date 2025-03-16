import { Text, Image, ImageSourcePropType } from 'react-native';
import Animated from 'react-native-reanimated';

import { Option } from '../Option';
import { styles } from './styles';
import { HistoryProps } from '../HistoryCard';
import { useEffect } from 'react';

type QuestionProps = {
  title: string;
  image?: ImageSourcePropType;
  alternatives: string[];
}

type Props = {
  question: QuestionProps;
  alternativeSelected?: number | null;
  currentQuestionIndex: number;
  history: HistoryProps[];
  setAlternativeSelected?: (value: number | null) => void;
  onUnmount: () => void;
}

export function Question({
  question,
  alternativeSelected,
  setAlternativeSelected,
  currentQuestionIndex,
  history,
}: Props) {
  const currentQuestionHistory = history.find((item) => item.questionIndex === currentQuestionIndex);
  useEffect(() => {
    return () => {
      setAlternativeSelected && setAlternativeSelected(null);
    }
  }, [currentQuestionIndex]);
  return (
    <Animated.View style={styles.container}>
      {question?.image && <Image style={{
        width: "100%",
        height: 200,
        marginBottom: 24,
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
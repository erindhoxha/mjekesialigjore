import { Text, View } from 'react-native';

import { styles } from './styles';

export type HistoryProps = {
  id: string;
  title: string;
  points: number;
  questions: number;
  questionIndex?: number;
  alternativeSelected?: number;
  level: number;
}

type Props = {
  data: HistoryProps;
}

export function HistoryCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {data.title}
        </Text>

        <Text style={styles.subtitle}>
          Ju keni përgjigjur saktë {data.points} nga {data.questions}
        </Text>
      </View>
    </View>
  );
}
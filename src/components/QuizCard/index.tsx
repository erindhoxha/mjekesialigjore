import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../styles/theme';

import { QUIZZES } from '../../data/quizzes';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

type Props = TouchableOpacityProps & {
  index: number;
  data: typeof QUIZZES[0];
}

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function QuizCard({ index, data, ...rest }: Props) {
  return (
    <TouchableOpacityAnimated
      entering={FadeInUp.delay(index * 100)}
      exiting={FadeOutUp}
      style={styles.container}
      {...rest}
    >
      <View style={styles.header}>
        <Text style={styles.subtitle}>{data.subtitle}</Text>
      </View>
      <View style={{flexDirection:'row'}}> 
        <Text style={styles.title}>
          {data.title}
        </Text>
      </View>
      <Text style={styles.description}>
        {data.description}
      </Text>
    </TouchableOpacityAnimated>
  );
}
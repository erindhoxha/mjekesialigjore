import { TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import { CheckCircle } from "phosphor-react-native";

import { QUIZZES } from "../../data/quizzes";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { historyGetAll } from "../../storage/quizHistoryStorage";
import { useCallback, useEffect, useState } from "react";
import { HistoryProps } from "../HistoryCard";

type Props = TouchableOpacityProps & {
  index: number;
  data: (typeof QUIZZES)[0];
};

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function QuizCard({ index, data, ...rest }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [history, setHistory] = useState<HistoryProps[]>([]);

  async function fetchHistory() {
    const response = await historyGetAll();
    setHistory(response);
    setIsLoading(false);
    return response;
  }

  console.log(data.pytjet);

  useEffect(() => {
    fetchHistory().then((history) => {
      history.map((hist) => {
        if (hist.title === data.title && hist.points === hist.questions) {
          setIsFinished(true);
          return;
        }
      });
    });
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isFinished) {
    return (
      <TouchableOpacityAnimated
        entering={FadeInUp.delay(index * 100)}
        exiting={FadeOutUp}
        style={[
          styles.container,
          isFinished
            ? {
                borderWidth: 2,
                borderColor: THEME.COLORS.BRAND_LIGHT,
              }
            : null,
        ]}
        {...rest}>
        <View style={styles.header}>
          <Text style={styles.subtitle}>{data.subtitle}</Text>
          <View style={styles.score}>
            <Text style={styles.scoreTitle}>
              {data.pytjet}/{data.pytjet}
            </Text>
            <CheckCircle size={24} color={THEME.COLORS.BRAND_LIGHT} />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.description}>{data.pytjet} pyetje</Text>
      </TouchableOpacityAnimated>
    );
  } else {
    return (
      <TouchableOpacityAnimated
        entering={FadeInUp.delay(index * 100)}
        exiting={FadeOutUp}
        style={[styles.container]}
        {...rest}>
        <View style={styles.header}>
          <Text style={styles.subtitle}>{data.subtitle}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <Text style={styles.description}>{data.description}</Text>
      </TouchableOpacityAnimated>
    );
  }
}

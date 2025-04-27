import { useEffect, useRef, useState } from "react";
import { Alert, BackHandler, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./styles";

import { QUIZ } from "../../data/quiz";
import { historyAdd } from "../../storage/quizHistoryStorage";

import { Loading } from "../../components/Loading";
import { Question } from "../../components/Question";
import { QuizHeader } from "../../components/QuizHeader";
import { ConfirmButton } from "../../components/ConfirmButton";
import { OutlineButton } from "../../components/OutlineButton";
import { HistoryProps } from "../../components/HistoryCard";
import { Header } from "../../components/Header";
import { House } from "phosphor-react-native";
interface Params {
  id: string;
}

type QuizProps = (typeof QUIZ)[0];

const CARD_INCLINATION = 10;
const CARD_SKIP_AREA = -200;

export function Quiz() {
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quiz, setQuiz] = useState<QuizProps>({} as QuizProps);
  const [alternativeSelected, setAlternativeSelected] = useState<null | number>(null);
  const [statusReply, setStatusReply] = useState(0);
  const [quizHistory, setQuizHistory] = useState<HistoryProps[]>([]);

  const scrollY = useSharedValue(0);
  const cardPosition = useSharedValue(0);

  const { navigate } = useNavigation();

  const currentQuestionHistory = quizHistory.find((item) => item.questionIndex === currentQuestion);

  const route = useRoute();
  const { id } = route.params as Params;

  function handleSkipConfirm() {
    Alert.alert("Për të kaluar", "Nuk keni zgjedhur asnjë përgjigje.");
  }

  const scrollViewRef = useRef<Animated.ScrollView>(null);

  function handleNextQuestion(updatedPoints: number) {
    setQuizHistory((prevState) => {
      const existingHistoryIndex = prevState.findIndex((history) => history.questionIndex === currentQuestion);

      const existingHistoryAlternativeSelected = prevState[existingHistoryIndex]?.alternativeSelected;

      const selectedAlternative =
        alternativeSelected !== null && alternativeSelected !== undefined
          ? alternativeSelected
          : existingHistoryAlternativeSelected;

      if (existingHistoryIndex !== -1) {
        const updatedHistory = [...prevState];
        updatedHistory[existingHistoryIndex] = {
          ...updatedHistory[existingHistoryIndex],
          points: updatedPoints,
          alternativeSelected: selectedAlternative,
        };
        return updatedHistory;
      } else {
        return [
          ...prevState,
          {
            id: new Date().getTime().toString(),
            title: quiz.title,
            points: updatedPoints,
            questions: quiz.questions.length,
            questionIndex: currentQuestion,
            alternativeSelected: selectedAlternative,
          },
        ];
      }
    });

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prevState) => prevState + 1);
      // Scroll to top when moving to the next question
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    } else {
      setQuizHistory((prevState) => {
        handleFinished(updatedPoints, prevState);
        return prevState;
      });
    }
  }

  async function handleFinished(updatedPoints: number, updatedQuizHistory: HistoryProps[]) {
    await historyAdd({
      id: new Date().getTime().toString(),
      title: quiz.title,
      points: updatedPoints,
      questions: quiz.questions.length,
    });

    navigate("finish", {
      points: String(updatedPoints),
      total: String(quiz.questions.length),
      quizHistory: updatedQuizHistory,
      quiz: quiz,
    });
  }
  function handlePreviousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevState) => prevState - 1);
    }
  }

  async function handleConfirm() {
    // Use the previously selected answer from history if alternativeSelected is null
    const selectedAlternative =
      alternativeSelected !== null ? alternativeSelected : currentQuestionHistory?.alternativeSelected;

    if (selectedAlternative === null || selectedAlternative === undefined) {
      return handleSkipConfirm();
    }

    let updatedPoints = points;

    // Check if the question has already been answered
    if (currentQuestionHistory?.alternativeSelected !== undefined) {
      const wasCorrect = currentQuestionHistory.alternativeSelected === quiz.questions[currentQuestion].correct;
      const isNowCorrect = selectedAlternative === quiz.questions[currentQuestion].correct;

      // Only update points if the correctness changes
      if (currentQuestionHistory.alternativeSelected !== selectedAlternative) {
        if (wasCorrect && !isNowCorrect) {
          // Previously correct, now incorrect
          updatedPoints = points - 1;
          setPoints(updatedPoints);
          setStatusReply(2);
        } else if (!wasCorrect && isNowCorrect) {
          // Previously incorrect, now correct
          updatedPoints = points + 1;
          setPoints(updatedPoints);
          setStatusReply(1);
        } else {
          // No change in correctness
          setStatusReply(isNowCorrect ? 1 : 2);
        }
      } else {
        // If the answer hasn't changed, just update the status reply
        setStatusReply(isNowCorrect ? 1 : 2);
      }
    } else {
      // If the question has not been answered before
      if (quiz.questions[currentQuestion].correct === selectedAlternative) {
        updatedPoints = points + 1;
        setPoints(updatedPoints);
        setStatusReply(1);
      } else {
        setStatusReply(2);
      }
    }

    setAlternativeSelected(null);
    handleNextQuestion(updatedPoints);
  }

  function handleStop() {
    if (currentQuestion === 0) {
      Alert.alert("Kthehu", "Dëshiron te kthehesh në faqën kryesore?", [
        {
          text: "Jo",
          style: "cancel",
        },
        {
          text: "Po",
          style: "destructive",
          onPress: () => navigate("home"),
        },
      ]);
    } else {
      handlePreviousQuestion();
    }
    return true;
  }

  function handleGoToStep(index: number) {
    setCurrentQuestion(index);
  }

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const headerStyles = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [60, 90], [1, 0], Extrapolate.CLAMP),
  }));

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const onPan = Gesture.Pan()
    .activateAfterLongPress(200)
    .onUpdate((event) => {
      const moveToLeft = event.translationX < 0;

      if (moveToLeft) {
        cardPosition.value = event.translationX;
      }
    })
    .onEnd((event) => {
      if (event.translationX < CARD_SKIP_AREA) {
        runOnJS(handleSkipConfirm)();
      }

      cardPosition.value = withTiming(0);
    });

  const dragStyles = useAnimatedStyle(() => {
    const rotateZ = cardPosition.value / CARD_INCLINATION;

    return {
      transform: [{ translateX: cardPosition.value }, { rotateZ: `${rotateZ}deg` }],
    };
  });

  useEffect(() => {
    const quizSelected = QUIZ.filter((item) => item.id === id)[0];

    // Shuffle the questions
    const shuffledQuestions = shuffleArray([...quizSelected.questions]);

    // Set the quiz with shuffled questions
    setQuiz({ ...quizSelected, questions: shuffledQuestions });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleStop);

    return () => backHandler.remove();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Header
        // icon={House} TODO: Check if this is better
        backButton
        title={quiz.title}
        subtitle={quiz.description}
        onPress={() => {
          Alert.alert("Kthehu", "Dëshiron te kthehësh ne fillim?", [
            {
              text: "Jo",
              style: "cancel",
            },
            {
              text: "Po",
              style: "destructive",
              onPress: () => navigate("home"),
            },
          ]);
        }}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.question}
        onScroll={scrollHandler}
        ref={scrollViewRef}
        scrollEventThrottle={16}>
        <Animated.View style={[styles.header, headerStyles]}>
          {quiz.title && (
            <QuizHeader
              title={quiz.title}
              currentQuestion={currentQuestion + 1}
              totalOfQuestions={quiz.questions.length}
            />
          )}
        </Animated.View>
        <GestureDetector gesture={onPan}>
          <Animated.View style={[dragStyles]}>
            <Question
              question={quiz.questions[currentQuestion]}
              alternativeSelected={alternativeSelected}
              setAlternativeSelected={setAlternativeSelected}
              currentQuestionIndex={currentQuestion}
              history={quizHistory}
              onUnmount={() => setStatusReply(0)}
            />
          </Animated.View>
        </GestureDetector>

        <View style={styles.footer}>
          <OutlineButton title="Kthehu" onPress={handleStop} />
          <ConfirmButton onPress={handleConfirm} />
        </View>

        {quiz.questions.length > 0 && (
          <View style={styles.scoreContainer}>
            {quiz.questions.map((history, index) => {
              const isAnswered = quizHistory.some((item) => item.questionIndex === index);
              const isCurrentQuestion = currentQuestion === index;
              const lastHistory = quizHistory.sort()[quizHistory.length - 1]?.questionIndex;
              const isLastAnswered = lastHistory !== undefined && lastHistory + 1 === index;
              return isAnswered || isLastAnswered ? (
                <TouchableOpacity
                  style={[
                    styles.scoreButton,
                    isLastAnswered ? styles.answered : null,
                    isCurrentQuestion ? styles.current : null,
                  ]}
                  key={history.title + index}
                  onPress={() => handleGoToStep(index)}>
                  <Text
                    style={[
                      { color: "black" },
                      isLastAnswered ? styles.answeredText : null,
                      isCurrentQuestion ? styles.currentText : null,
                    ]}>{`${index + 1}`}</Text>
                </TouchableOpacity>
              ) : (
                <View
                  style={[styles.scoreButtonGray, isCurrentQuestion ? styles.current : null]}
                  key={history.title + index}>
                  <Text style={[{ color: "black" }, isCurrentQuestion ? styles.currentText : null]}>{`${
                    index + 1
                  }`}</Text>
                </View>
              );
            })}
          </View>
        )}
        <View style={styles.footerSub}>
          <TouchableOpacity
            style={styles.footerButton}
            onPressIn={() => {
              Alert.alert("Kthehu", "Dëshiron te kthehësh?", [
                {
                  text: "Jo",
                  style: "cancel",
                },
                {
                  text: "Po",
                  style: "destructive",
                  onPress: () => navigate("home"),
                },
              ]);
            }}>
            <Text style={styles.footerButtonTitle}>Kthehu në faqën kryesore</Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

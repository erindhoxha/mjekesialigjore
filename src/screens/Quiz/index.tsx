import { useEffect, useState } from 'react';
import { Alert, BackHandler, Text, View, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  useAnimatedScrollHandler,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { THEME } from '../../styles/theme';

import { QUIZ } from '../../data/quiz';
import { historyAdd } from '../../storage/quizHistoryStorage';

import { Loading } from '../../components/Loading';
import { Question } from '../../components/Question';
import { QuizHeader } from '../../components/QuizHeader';
import { ConfirmButton } from '../../components/ConfirmButton';
import { OutlineButton } from '../../components/OutlineButton';
import { ProgressBar } from '../../components/ProgressBar';
import { HistoryProps } from '../../components/HistoryCard';

interface Params {
  id: string;
}

type QuizProps = typeof QUIZ[0];

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
    Alert.alert('Për të kaluar', 'Nuk keni zgjedhur asnjë përgjigje.');
  }

  async function handleFinished(updatedPoints: number) {
    await historyAdd({
      id: new Date().getTime().toString(),
      title: quiz.title,
      level: quiz.level,
      points: updatedPoints,
      questions: quiz.questions.length
    });

    navigate('finish', {
      points: String(updatedPoints),
      total: String(quiz.questions.length),
    });
  }

  function handleNextQuestion(updatedPoints: number) {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prevState => prevState + 1);
  
      setQuizHistory(prevState => {
        const existingHistoryIndex = prevState.findIndex(history => history.questionIndex === currentQuestion);
  
        if (existingHistoryIndex !== -1) {
          // Update existing history
          const updatedHistory = [...prevState];
          updatedHistory[existingHistoryIndex] = {
            ...updatedHistory[existingHistoryIndex],
            points: updatedPoints,
            alternativeSelected: alternativeSelected || 0,
          };
          return updatedHistory;
        } else {
          // Add new history entry
          return [
            ...prevState,
            {
              id: new Date().getTime().toString(),
              title: quiz.title,
              points: updatedPoints,
              level: quiz.level,
              questions: quiz.questions.length,
              questionIndex: currentQuestion,
              alternativeSelected: alternativeSelected || 0,
            }
          ];
        }
      });
    } else {
      handleFinished(updatedPoints);
    }
  }

  function handlePreviousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(prevState => prevState - 1);
      let updatedPoints = points;
      updatedPoints = points - 1;
      setPoints(updatedPoints);
    }
  }

  console.log("ALT", alternativeSelected);


  async function handleConfirm() {
    if (alternativeSelected === null && currentQuestionHistory?.alternativeSelected === undefined) {
      return handleSkipConfirm();
    }

    let updatedPoints = points;
  
    if (quiz.questions[currentQuestion].correct === alternativeSelected) {
      updatedPoints = points + 1;
      setPoints(updatedPoints);
      setStatusReply(1);
    } else {
      setStatusReply(2);
    }
    setAlternativeSelected(null);
    handleNextQuestion(updatedPoints);
  }

  function handleStop() {
    if (currentQuestion === 0) {
      Alert.alert('Parar', 'Deshiron te kthehesh?', [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Exit',
          style: 'destructive',
          onPress: () => navigate('home')
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
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    }
  });

  const fixedProgressBarStyles = useAnimatedStyle(() => ({
    position: 'absolute',
    zIndex: 1,
    paddingTop: 50,
    backgroundColor: THEME.COLORS.GREY_500,
    width: '110%',
    left: '-5%',
    opacity: interpolate(scrollY.value, [50, 90], [0, 1], Extrapolate.CLAMP),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [50, 100],
          [-40, 0],
          Extrapolate.CLAMP,
        )
      }
    ]
  }));

  const headerStyles = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [60, 90], [1, 0], Extrapolate.CLAMP),
  }));

  const onPan = Gesture
    .Pan()
    .activateAfterLongPress(200)
    .onUpdate(event => {
      const moveToLeft = event.translationX < 0;

      if (moveToLeft) {
        cardPosition.value = event.translationX;
      }
    })
    .onEnd(event => {
      if (event.translationX < CARD_SKIP_AREA) {
        runOnJS(handleSkipConfirm)();
      }

      cardPosition.value = withTiming(0);
    })

  const dragStyles = useAnimatedStyle(() => {
    const rotateZ = cardPosition.value / CARD_INCLINATION;

    return {
      transform: [
        { translateX: cardPosition.value },
        { rotateZ: `${rotateZ}deg` }
      ]
    }
  });

  useEffect(() => {
    const quizSelected = QUIZ.filter(item => item.id === id)[0];

    setQuiz(quizSelected);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleStop,
    );

    return () => backHandler.remove();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>

      <Animated.View style={fixedProgressBarStyles}>
        <Text style={styles.title}>{quiz.title}</Text>

        <ProgressBar
          total={quiz.questions.length}
          current={currentQuestion + 1}
        />
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.question}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Animated.View style={[styles.header, headerStyles]}>
          <QuizHeader
            title={quiz.title}
            currentQuestion={currentQuestion + 1}
            totalOfQuestions={quiz.questions.length}
          />
        </Animated.View>

        <GestureDetector gesture={onPan}>
          <Animated.View style={[dragStyles]}>
            <Question
              key={quiz.questions[currentQuestion].title}
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
        {quizHistory.length > 0 && (
        <View>
          {quizHistory.map((history, index) => (
            <TouchableOpacity key={history.id} onPress={() => handleGoToStep(history.questionIndex || 0)}>
              <Text style={{ color: 'white' }}>
                {`${index + 1}`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      </Animated.ScrollView>


    </View >
  );
}

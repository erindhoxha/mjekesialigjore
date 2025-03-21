import { CloudArrowUp, CodeSimple, ToggleLeft, PaintBucket, DeviceMobile, GitFork } from "phosphor-react-native";
import { QUIZ } from "./quiz";

export const QUIZZES = [
  {
    id: "1",
    subtitle: "I.",
    title: "Pjesa e parë",
    description: "Konsiderata të përgjithshme",
    svg: ToggleLeft,
    pytjet: QUIZ.find((item) => item.id === "1")?.questions.length,
  },
  {
    subtitle: "II.",
    id: "2",
    title: "Pjesa e dytë",
    description: "Investigimi mjekoligjor përballë krimeve kunder jetës së personit",
    svg: CodeSimple,
    pytjet: QUIZ.find((item) => item.id === "2")?.questions.length,
  },
  {
    subtitle: "III.",
    id: "3",
    title: "Pjesa e tretë",
    description: "Investigimi mjekoligjor përballë krimeve kunder shëndetit",
    svg: GitFork,
    pytjet: QUIZ.find((item) => item.id === "3")?.questions.length,
  },
  {
    subtitle: "IV.",
    id: "4",
    title: "Pjesa e katërt",
    description: "Identifikimi mjekoligjor",
    svg: PaintBucket,
    pytjet: QUIZ.find((item) => item.id === "4")?.questions.length,
  },
  {
    subtitle: "V.",
    id: "5",
    title: "Pjesa e pestë",
    description: "Investigimi i provave materiale biologjike",
    svg: CloudArrowUp,
    pytjet: QUIZ.find((item) => item.id === "5")?.questions.length,
  },
  {
    subtitle: "VI.",
    id: "6",
    title: "Pjesa e gjashtë",
    description: "Etika dhe deontologjia mjekësore",
    svg: DeviceMobile,
    pytjet: QUIZ.find((item) => item.id === "6")?.questions.length,
  },
  {
    subtitle: "VII.",
    id: "7",
    title: "Pjesa e shtatë",
    description: "Ekspertiza mjekësore në procedurë civile",
    svg: DeviceMobile,
    pytjet: QUIZ.find((item) => item.id === "7")?.questions.length,
  },
];

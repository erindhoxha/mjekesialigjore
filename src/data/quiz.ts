import { PJESA_E_PARE } from "./mjekesia-ligjore-1";
import { PJESA_E_DYTE } from "./pjesa2a";
import { PJESA_E_DYTE_B } from "./pjesa2b";
import { PJESA_E_DYTE_C } from "./pjesa2c";

export const QUIZ = [
  PJESA_E_PARE,
  PJESA_E_DYTE,
  PJESA_E_DYTE_B,
  PJESA_E_DYTE_C,
  {
    id: "5",
    title: "Pjesa e dytë (d)",
    description: "Dëmtimet nutritive, dëmtimet psikike dhe vdekja nga traumat kimike",
    questions: [
      {
        title: "Cila është festa kombëtare e Shqipërisë?",
        alternatives: ["Dita e Pavarësisë", "Dita e Flamurit", "Dita e Çlirimit", "Dita e Verës"],
        correct: 1,
      },
      {
        title: "Cila është kënga më e njohur shqiptare?",
        alternatives: ["Xhamadani Vija Vija", "Moj e Bukura More", "Valle Kosovare", "Kuq e Zi"],
        correct: 0,
      },
      {
        title: "Cili është vallja tradicionale shqiptare?",
        alternatives: ["Vallja e Tropojës", "Vallja e Rugovës", "Vallja e Shpatit", "Vallja e Labërisë"],
        correct: 3,
      },
    ],
  },
  {
    id: "6",
    title: "Pjesa e tretë",
    description: "Etika dhe deontologjia mjekësore",
    questions: [
      {
        title: "Cili është sporti më i njohur në Shqipëri?",
        alternatives: ["Futbolli", "Basketbolli", "Volejbolli", "Tenisi"],
        correct: 0,
      },
      {
        title: "Cili është klubi më i suksesshëm i futbollit në Shqipëri?",
        alternatives: ["KF Tirana", "Partizani", "Skënderbeu", "Vllaznia"],
        correct: 0,
      },
      {
        title: "Cili është sportisti më i njohur shqiptar?",
        alternatives: ["Lorik Cana", "Edi Rama", "Ismail Qemali", "Gjergj Kastrioti"],
        correct: 0,
      },
    ],
  },
  {
    id: "7",
    title: "Pjesa e katert",
    description: "Ekspertiza mjekësore në procedurë civile",
    questions: [
      {
        title: "Cili është sporti më i njohur në Shqipëri?",
        alternatives: ["Futbolli", "Basketbolli", "Volejbolli", "Tenisi"],
        correct: 0,
      },
      {
        title: "Cili është klubi më i suksesshëm i futbollit në Shqipëri?",
        alternatives: ["KF Tirana", "Partizani", "Skënderbeu", "Vllaznia"],
        correct: 0,
      },
      {
        title: "Cili është sportisti më i njohur shqiptar?",
        alternatives: ["Lorik Cana", "Edi Rama", "Ismail Qemali", "Gjergj Kastrioti"],
        correct: 0,
      },
    ],
  },
];

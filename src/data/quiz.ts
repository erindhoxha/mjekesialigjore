import { PJESA_E_PARE } from "./mjekesia-ligjore-1";
import { PJESA_E_DYTE } from "./pyetje-te-pergjithshme";

export const QUIZ = [
  PJESA_E_PARE,
  PJESA_E_DYTE,
  {
    id: "3",
    title: "Pjesa e tretë",
    description: "Investigimi mjekoligjor përballë krimeve kunder shëndetit",
    questions: [
      {
        title: "Kush ishte heroi kombëtar i Shqipërisë?",
        alternatives: ["Ismail Qemali", "Gjergj Kastrioti Skënderbeu", "Enver Hoxha", "Ahmet Zogu"],
        correct: 1,
      },
      {
        title: "Në cilin vit Shqipëria shpalli pavarësinë?",
        alternatives: ["1912", "1944", "1991", "2008"],
        correct: 0,
      },
      {
        title: "Cila ishte kryeqyteti i parë i Shqipërisë?",
        alternatives: ["Tirana", "Durrësi", "Shkodra", "Vlora"],
        correct: 3,
      },
    ],
  },
  {
    id: "4",
    title: "Pjesa e katërt",
    description: "Identifikimi mjekoligjor",
    questions: [
      {
        title: "Cili është mali më i lartë në Shqipëri?",
        alternatives: ["Mali i Dajtit", "Maja e Korabit", "Mali i Tomorrit", "Mali i Shpiragut"],
        correct: 1,
      },
      {
        title: "Cili është liqeni më i madh në Shqipëri?",
        alternatives: ["Liqeni i Shkodrës", "Liqeni i Pogradecit", "Liqeni i Prespës", "Liqeni i Fierzës"],
        correct: 0,
      },
      {
        title: "Cili është lumi më i gjatë në Shqipëri?",
        alternatives: ["Lumi i Vjosës", "Lumi i Drinit", "Lumi i Shkumbinit", "Lumi i Matit"],
        correct: 1,
      },
    ],
  },
  {
    id: "5",
    title: "Pjesa e pestë",
    description: "Investigimi i provave materiale biologjike",
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
    title: "Pjesa e gjashtë",
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
    title: "Pjesa e shtatë",
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

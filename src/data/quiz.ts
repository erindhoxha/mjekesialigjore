import { MJEKESIA_LIGJORE_1 } from "./mjekesia-ligjore-1";
import { PYETJE_TE_PERGJITHSHME_1 } from "./pyetje-te-pergjithshme";

export const QUIZ = [
  MJEKESIA_LIGJORE_1,
  PYETJE_TE_PERGJITHSHME_1,
  {
    id: '3',
    title: 'Histori',
    level: 2,
    questions: [
      {
        title: 'Kush ishte heroi kombëtar i Shqipërisë?',
        alternatives: [
          'Ismail Qemali',
          'Gjergj Kastrioti Skënderbeu',
          'Enver Hoxha',
          'Ahmet Zogu'
        ],
        correct: 1
      },
      {
        title: 'Në cilin vit Shqipëria shpalli pavarësinë?',
        alternatives: [
          '1912',
          '1944',
          '1991',
          '2008'
        ],
        correct: 0
      },
      {
        title: 'Cila ishte kryeqyteti i parë i Shqipërisë?',
        alternatives: [
          'Tirana',
          'Durrësi',
          'Shkodra',
          'Vlora'
        ],
        correct: 3
      },
    ]
  },
  {
    id: '4',
    title: 'Gjeografi',
    level: 2,
    questions: [
      {
        title: 'Cili është mali më i lartë në Shqipëri?',
        alternatives: [
          'Mali i Dajtit',
          'Maja e Korabit',
          'Mali i Tomorrit',
          'Mali i Shpiragut'
        ],
        correct: 1
      },
      {
        title: 'Cili është liqeni më i madh në Shqipëri?',
        alternatives: [
          'Liqeni i Shkodrës',
          'Liqeni i Pogradecit',
          'Liqeni i Prespës',
          'Liqeni i Fierzës'
        ],
        correct: 0
      },
      {
        title: 'Cili është lumi më i gjatë në Shqipëri?',
        alternatives: [
          'Lumi i Vjosës',
          'Lumi i Drinit',
          'Lumi i Shkumbinit',
          'Lumi i Matit'
        ],
        correct: 1
      },
    ]
  },
  {
    id: '5',
    title: 'Kulturë',
    level: 3,
    questions: [
      {
        title: 'Cila është festa kombëtare e Shqipërisë?',
        alternatives: [
          'Dita e Pavarësisë',
          'Dita e Flamurit',
          'Dita e Çlirimit',
          'Dita e Verës'
        ],
        correct: 1
      },
      {
        title: 'Cila është kënga më e njohur shqiptare?',
        alternatives: [
          'Xhamadani Vija Vija',
          'Moj e Bukura More',
          'Valle Kosovare',
          'Kuq e Zi'
        ],
        correct: 0
      },
      {
        title: 'Cili është vallja tradicionale shqiptare?',
        alternatives: [
          'Vallja e Tropojës',
          'Vallja e Rugovës',
          'Vallja e Shpatit',
          'Vallja e Labërisë'
        ],
        correct: 3
      },
    ]
  },
  {
    id: '6',
    title: 'Sport',
    level: 1,
    questions: [
      {
        title: 'Cili është sporti më i njohur në Shqipëri?',
        alternatives: [
          'Futbolli',
          'Basketbolli',
          'Volejbolli',
          'Tenisi'
        ],
        correct: 0
      },
      {
        title: 'Cili është klubi më i suksesshëm i futbollit në Shqipëri?',
        alternatives: [
          'KF Tirana',
          'Partizani',
          'Skënderbeu',
          'Vllaznia'
        ],
        correct: 0
      },
      {
        title: 'Cili është sportisti më i njohur shqiptar?',
        alternatives: [
          'Lorik Cana',
          'Edi Rama',
          'Ismail Qemali',
          'Gjergj Kastrioti'
        ],
        correct: 0
      },
    ]
  },
];
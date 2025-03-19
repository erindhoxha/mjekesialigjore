export const PJESA_E_PARE = {
  id: "1",
  title: "Pjesa e parë",
  description: "Konsiderata të përgjithshme",
  questions: [
    {
      title: "Cila nga alternativat e mëposhtme nuk është detyrë e mjekësisë ligjore?",
      image: require("../assets/image2.png"),
      alternatives: [
        "Zbulimi i shkaqeve të vdekjes",
        "Identifikimi i kufomave",
        "Trajtimi i të sëmurëve në spitale",
        "Vlerësimi i dëmtimeve trupore.",
      ],
      explanation: "Trajtimi i të sëmurëve në spitale nuk është detyrë e mjekësisë ligjore.",
      correct: 2,
    },
    {
      title: "Në cilat raste mund të kërkohet ekspertimi mjekoligjor i kufomave?",
      //  image: require( "../assets/knife2.png"),
      alternatives: [
        "Vetëm në rastet e vdekjeve të dhunshme",
        "Vetëm në rastet e vdekjeve të papritura",
        "Në të gjitha rastet e vdekjeve të dyshimta ose të dhunshme",
        "Vetëm në rastet kur familjarët e viktimës e kërkojnë.",
      ],
      explanation:
        "Ekspertimi mjekoligjor i kufomave kërkohet në të gjitha rastet e vdekjeve të dyshimta ose të dhunshme për të përcaktuar shkakun dhe mënyrën e vdekjes.",
      correct: 2,
    },
    {
      title: "Cili është roli i ekspertit mjekoligjor në hetimin e krimeve?",
      alternatives: [
        "Të zbulojë autorët e krimeve",
        "Të mbledhë prova materiale dhe të kryejë autopsinë",
        "Të marrë vendime gjyqësore",
        "Të kryejë arrestime.",
      ],
      explanation:
        "Eksperti mjekoligjor ka për detyrë të mbledhë prova materiale dhe të kryejë autopsinë për të ndihmuar në zbardhjen e rrethanave të krimit.",
      correct: 1,
    },
    {
      title: "Cilat janë objektet e hetimit mjekoligjor?",
      alternatives: [
        "Vetëm kufomat",
        "Vetëm personat e gjallë",
        "Kufomat, personat e gjallë dhe provat materiale biologjike",
        "Vetëm provat materiale biologjike.",
      ],
      explanation:
        "Hetimi mjekoligjor përfshin këqyrjen e kufomave, personave të gjallë dhe provave materiale biologjike për të zbuluar të vërtetën në një hetim.",
      correct: 2,
    },
    {
      title: "Cila nga alternativat e mëposhtme nuk është pjesë e rregullave procedurale të hetimit mjekoligjor?",
      alternatives: [
        "Caktimi i ekspertëve nga organet e drejtësisë",
        "Dhënia e betimit nga ekspertët",
        "Marrja e vendimeve përfundimtare nga ekspertët",
        "Vlerësimi i mendimit të ekspertëve nga gjykata.",
      ],
      explanation:
        "Ekspertët mjekoligjorë nuk marrin vendime përfundimtare, por japin mendime profesionale që vlerësohen nga gjykata.",
      correct: 2,
    },
    {
      title: "Në cilat raste mund të kërkohet hetimi i personave të gjallë nga mjekësia ligjore?",
      alternatives: [
        "Vetëm në rastet e krimeve seksuale",
        "Në rastet e vdekjeve të dhunshme",
        "Në rastet e përcaktimit të dëmtimeve trupore, krimeve seksuale dhe identitetit",
        "Vetëm në rastet e përcaktimit të atësisë.",
      ],
      explanation:
        "Hetimi i personave të gjallë nga mjekësia ligjore kërkohet në rastet e përcaktimit të dëmtimeve trupore, krimeve seksuale dhe identitetit për të siguruar prova dhe fakte.",
      correct: 2,
    },
    {
      title: "Cili është qëllimi i këqyrjes së vendit të ngjarjes nga ekspertët mjekoligjorë?",
      alternatives: [
        "Të arrestojnë autorët e krimit",
        "Të mbledhin prova materiale dhe të dokumentojnë gjendjen e vendit",
        "Të marrin vendime gjyqësore në vendin e ngjarjes",
        "Të intervistojnë dëshmitarët.",
      ],
      explanation:
        "Ekspertët mjekoligjorë këqyrin vendin e ngjarjes për të mbledhur prova materiale dhe për të dokumentuar gjendjen e vendit, duke ndihmuar në hetimin e krimit.",
      correct: 1,
    },
    {
      title: "Cila nga alternativat e mëposhtme nuk është pjesë e detyrave të mjekësisë ligjore në procesin penal?",
      alternatives: [
        "Përcaktimi i shkakut të vdekjes",
        "Përcaktimi i fajësisë së të pandehurit",
        "Identifikimi i kufomës",
        "Përcaktimi i kohës së vdekjes.",
      ],
      explanation:
        "Mjekësia ligjore nuk përcakton fajësinë e të pandehurit, por ndihmon në zbardhjen e fakteve dhe provave që lidhen me shkakun dhe mënyrën e vdekjes.",
      correct: 1,
    },
    {
      title: "Cili është roli i ekspertit mjekoligjor në identifikimin e kufomave?",
      alternatives: [
        "Të marrë vendime përfundimtare për identitetin e kufomës",
        "Të mbledhë të dhëna dhe prova për të ndihmuar në identifikim",
        "Të lajmërojë familjarët e viktimës",
        "Të kryejë ceremoninë e varrimit.",
      ],
      explanation:
        "Eksperti mjekoligjor mbledh të dhëna dhe prova për të ndihmuar në identifikimin e kufomave, duke përdorur metoda shkencore dhe teknika të specializuara.",
      correct: 1,
    },
    {
      title: "Përse kryhet hetimi i provave materiale biologjike?",
      alternatives: [
        "Për të përcaktuar gjurmët e lëngjeve biologjike si njolla gjaku, spermë, qime, flokë, eshtra, inde ose pjesë organesh, pështymën, djersën, urinën, etj.",
        "Për të përcaktuar shkakun e vdekjes.",
        "Për të përcaktuar mekanizmin dhe mënyrën e ardhjes së vdekjes ose të plagosjes.",
        "Për të përcaktuar tempin e ardhjes së vdekjes (e atëçastshme ose me mundime).",
      ],
      correct: 0,
      explanation:
        "Investigimi i provave materiale biologjike, kryhet per te percaktuar gjurmet e lengjeve biologjike si njolla gjaku, sperme, qime, floke, eshtra, inde ose pjese organesh, peshtymen, djersen, urinen, etj.",
    },
    {
      title: "Në grup hetimor bejne pjesë:",
      alternatives: [
        "Prokurori, eksperti kriminalistik, eksperti mjeko ligjor.",
        "Prokurori, eksperti mjeko ligjor, kufoma.",
        "Eksperti kriminalistik, eksperti mjeko ligjore, eksperti i daktilografise.",
      ],
      correct: 0,
      explanation:
        "Ne grup hetimor bejne pjese prokurori, eksperti kriminalistik dhe eksperti mjeko ligjor. Kufoma paraqet interes investigimi mjekoligjor. Ndersa eksperti i daktilogradise bene pjese ne ekspertet e kriminalistikes.",
    },
    {
      title: "Cila nga keto paraqet Principin e Leocardit?",
      alternatives: [
        "Dy objekte mund te jene te padallueshme mes njeri tjetrit, porse asnjehere identike.",
        "Kurdohere kur dy objekte ndeshen dhunshem midis tyre, do te shkembejne gjurmet perkatese te njeri tjetrit.",
        "Vertete i vdekuri eshte ne gjumin perjetshem qiellor, porse po te dime ta zgjojme per nje cast dicka do te na thote: pse iku nga kjo bote.",
        "Sic ka vdekje kriminale pa shenja dhune, ka dhe vdekje natyrore me shenja dhune.",
      ],
      correct: 1,
      explanation:
        "Kurdohere kur dy objekte ndeshen dhunshem midis tyre, do te shkembejne gjurmet perkatese te njeri tjetrit",
    },
    {
      title: "Diferencimi i provave nga me e thejshta dhe te qarta deri tek ato me komplekse dhe te paqarta paraqet:",
      alternatives: ["Teorine e probabilitetit", "Besueshmerine teknike", "Sigurine shkencore"],
      correct: 1,
      explanation:
        "Sipas teorise se problabilitetit, bazuar ne arsyetime te logjikes matematike, jepen hipoteza dhe alternativa te mundshme, ndersa siguria shkencore perfshin argumentat e pakontestueshme. Nderkaq besueshmeria teknike arriket duke kapercyer pjese pjese diferencimin e provave nga me te thjeshta dhe te qarta deri tek ato me komplekse dhe me te paqarta.",
    },
    {
      title: "Teoria e probabilitetit, besueshmeria teknike dhe siguria shkencore paraqesin:",
      alternatives: ["Principin e Leocardit", "Principin e individualitetit", "Kategorine e njohjes shkencore"],
      correct: 2,
      explanation:
        "Kategoria e njohjes shkencore kalon ne menyre te peshkalluarr nga te njohurat ne te panjohura nepermjet: probabilitetit matematikor, besueshmerise teknike dhe sigurise shkencore.",
    },
    {
      title: "Limiti i perfundimit te nje akt espertimi mjekoligjor mbi provat materiale bilogjike eshte:",
      alternatives: ["1 jave", "2 jave", "3 jave"],
      correct: 1,
      explanation:
        "Afati i limitit te perfundimit te akteve mjeko ligjore jane te ndryshme, ashtu qe: Akt deshmite mjekoligjore ambullantore deri ne 24 h. Akt ekspertimi mjekoligjor te ekzaminimit te kufomave te fresketa pa analiza laboratorike shtese eshte deri ne pese dite dhe me analiza deri ne dy jave. Akt ekspertimi mjekoligjor i ekzaminimit te kufomava te dekompozuara dhe te zhvarrosura eshte deri ne tri jave. Akt ekspertimi mjekoligjor mbi provat materiale biologjike deri ne dy jave. Akt ekspertimi mjekoligjore mbi provat toksikologjike, dhe akt ekspertimi mbi dokumetat e ceshtjes deri ne kater jave etj.",
    },
    {
      title: "Limiti i perfundimit te nje ekspertimi mjekoligjor prej 4 javesh eshte tek:",
      alternatives: [
        "Akt ekspertimi mbi provat materiale",
        "Akt ekspertimi mjekoligjor mbi dokumentat e ceshtjes",
        "Akt deshmite mjekologjiore ambullantore",
      ],
      correct: 1,
      explanation:
        "Afati i limitit te perfundimit te akteve mjeko ligjore jane te ndryshme, ashtu qe: Akt deshmite mjekoligjore ambullantore deri ne 24 h. Akt ekspertimi mjekoligjor te ekzaminimit te kufomave te fresketa pa analiza laboratorike shtese eshte deri ne pese dite dhe me analiza deri ne dy jave. Akt ekspertimi mjekoligjor i ekzaminimit te kufomava te dekompozuara dhe te zhvarrosura eshte deri ne tri jave. Akt ekspertimi mjekoligjor mbi provat materiale biologjike deri ne dy jave. Akt ekspertimi mjekoligjore mbi provat toksikologjike, dhe akt ekspertimi mbi dokumetat e ceshtjes deri ne kater jave etj.",
    },
    {
      title: "Shpjegimi me i mire i objektit te investigimit tek akti i ekspertimit behet ne pjesen e:",
      alternatives: ["Hyrjes", "Peshkrimit", "Perfundimtare"],
      correct: 0,
      explanation:
        "Pjesa e hyrjes permban te dhenat identifikuese te personit qe i nenshtrohet investigimit si dhe rrethanat e qeshtjes.",
    },
    {
      title:
        "Cili nga shembujt e mëposhtëm ilustron më mirë rolin e mjekësisë ligjore në një procedurë civile, në krahasim me një procedurë penale?",
      alternatives: [
        "Ekzaminimi i një kufome për të përcaktuar shkakun e vdekjes në një rast vrasjeje.",
        "Vlerësimi i dëmtimeve trupore të një personi të përfshirë në një aksident automobilistik për qëllime kompensimi.",
        "Analiza e provave biologjike të gjetura në vendin e krimit për të identifikuar autorin e mundshëm.",
        "Përcaktimi i kohës së vdekjes së një personi të gjetur të vdekur në rrethana të dyshimta.",
      ],
      correct: 1,
      explanation:
        "Opsioni (b) fokusohet në vlerësimin e dëmeve për kompensim, që është një aspekt kryesor i procedurave civile",
    },
    {
      title: "Në cilën nga situatat e mëposhtme përdoret mjekësia ligjore klinike në hetimet mjekoligjore?",
      alternatives: [
        "Hetimi i shkaqeve të vdekjes në rastet e vrasjeve.",
        "Përcaktimi i shkallës së dehjes alkoolike në rastet e aksidenteve automobilistike.",
        "Ekzaminimi i kufomave në rastet e krimeve kundër jetës.",
        "Identifikimi i personave të vdekur.",
      ],
      correct: 1,
      explanation:
        "Opsionet (a), (c) dhe (d) janë më të lidhura me hetimet penale të krimeve kundër jetës, ku fokusi është te ekzaminimi i kufomave, përcaktimi i shkaqeve të vdekjes dhe identifikimi i viktimave. Ndersa opsioni (b) është i saktë sepse përcaktimi i shkallës së dehjes alkoolike ose intoksikimit nga droga janë shembuj të përdorimit të mjekësisë ligjore klinike në kontekstin e procedurave civile, siç përmendet në tekst.",
    },
    {
      title: "Ne provat biologjike nuk bejne pjese:",
      alternatives: ["Teshat", "Lotet", "Peshtyma", "Fekaliet"],
      correct: 0,
      explanation:
        "Investigimi i provave materiale biologjike, kryhet per te percaktuar gjurmet e lengjeve biologjike si njolla gjaku, sperme, qime, floke, eshtra, inde ose pjese organesh, peshtymen, djersen, urinen, etj.",
    },
  ],
};

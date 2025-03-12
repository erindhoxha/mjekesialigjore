export const MJEKESIA_LIGJORE_1 = {
  id: "1",
  title: "Mjekesia Ligjore I",
  level: 1,
  questions: [
    {
      title:
        "Cila nga alternativat e mëposhtme nuk është detyrë e mjekësisë ligjore?",
      //  image: require( "../assets/knife2.png"),
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
      title:
        "Në cilat raste mund të kërkohet ekspertimi mjekoligjor i kufomave?",
      //  image: require( "../assets/knife2.png"),
      alternatives: [
        "Vetëm në rastet e vdekjeve të dhunshme",
        "Vetëm në rastet e vdekjeve të papritura",
        "Në të gjitha rastet e vdekjeve të dyshimta ose të dhunshme",
        "Vetëm në rastet kur familjarët e viktimës e kërkojnë.",
      ],
      correct: 2,
    },
    {
      title: "Cili është roli i ekspertit mjekoligjor në hetimin e krimeve?",
      alternatives: [
        "Të zbulojë autorët e krimeve", 
        "Të mbledhë prova materiale dhe të kryejë autopsinë", 
        "Të marrë vendime gjyqësore", 
        "Të kryejë arrestime."
      ],
      correct: 1,
    },
    {
      title: "Cilat janë objektet e hetimit mjekoligjor?",
      alternatives: [
        "Vetëm kufomat", 
        "Vetëm personat e gjallë", 
        "Kufomat, personat e gjallë dhe provat materiale biologjike", 
        "Vetëm provat materiale biologjike."
      ],
      correct: 2,
    },
  ],
};

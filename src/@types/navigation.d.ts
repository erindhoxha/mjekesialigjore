import { HistoryProps } from "../components/HistoryCard";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      quiz: { id: string };
      history: undefined;
      finish: { total: string, points: string, quizHistory: HistoryProps[], quiz: { id: string } };
    }
  }
}
export interface Name {
  firstName: string;
  lastName: string;
}

export interface Person {
  id?: string;
  name: Name;
  emotionDistribution?: emotionUnit[];
  score?: number;
}

export interface emotionUnit {
  emotionName?: string;
  percentile?: number;
}

export interface Question {
  id: string;
  answer: string;
  emotion_id: string;
  attributes_id: string;
  question: string;
  score: number;
  user_id: string;
  weights_id: string;
}

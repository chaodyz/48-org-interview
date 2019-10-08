export interface Name{
  firstName: string;
  lastName: string;
}


export interface Person{
  name: Name;
  emotionDistribution?: emotionUnit[];
  score?: number;
}

export interface emotionUnit{
  emotionTyp?: string;
  percentile?: number;
}
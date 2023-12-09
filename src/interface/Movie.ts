export interface IMovie {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind?: string;
  episode?: string;
  episodes_aired?: number;
  score?: string;
}

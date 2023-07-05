import { useQuery } from '@tanstack/react-query';
import { IQuiz, IQuestionQuery } from '../interfaces';
import axios from 'axios';

const useGetQuestions = ({}: IQuestionQuery) => {
   const fetcher = async () => {
      const response = await axios.get<IQuiz>(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`);
      return response.data;
   };

   return useQuery({
      queryKey: ['questions'],
      queryFn: fetcher,
   });
};

export default useGetQuestions;

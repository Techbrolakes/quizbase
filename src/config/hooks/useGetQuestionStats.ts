import { useQuery } from '@tanstack/react-query';
import { IQuestionStats } from '../interfaces';
import axios from 'axios';

const useGetQuestionStats = () => {
   const fetcher = async () => {
      const response = await axios.get<IQuestionStats>(`https://opentdb.com/api_count_global.php`);
      return response.data;
   };

   return useQuery({
      queryKey: ['questions_stats'],
      queryFn: fetcher,
   });
};

export default useGetQuestionStats;

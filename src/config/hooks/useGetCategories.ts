import { useQuery } from '@tanstack/react-query';
import { ICategory } from '../interfaces';
import axios from 'axios';

const useGetCategories = () => {
   const fetcher = async () => {
      const response = await axios.get<ICategory>(`https://opentdb.com/api_category.php`);
      return response.data;
   };

   return useQuery({
      queryKey: ['questions_categories'],
      queryFn: fetcher,
   });
};

export default useGetCategories;

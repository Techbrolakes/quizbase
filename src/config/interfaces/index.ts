export interface IQuiz {
   response_code: number;
   results: [
      {
         category: string;
         type: string;
         difficulty: string;
         question: string;
         correct_answer: string;
         incorrect_answers: String[];
      },
   ];
}

export interface IQuestionStats {
   overall: {
      total_num_of_questions: number;
      total_num_of_pending_questions: number;
      total_num_of_verified_questions: number;
      total_num_of_rejected_questions: number;
   };
}

export interface ICategory {
   trivia_categories: [
      {
         id: number;
         name: string;
      },
   ];
}

export interface IQuestionQuery {
   amount: number;
   category: number;
   difficulty: string;
   type: string;
}

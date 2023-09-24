interface question {
	question: string;
	answer: string;
	options: string[];
}

export interface quiz {
	id: number;
	list: question[];
}

export const FirstQuiz: quiz = {
	id: 1,
	list: [
		{
			question: 'What is the capital of India?',
			answer: 'Delhi',
			options: ['Kolkata', 'Mumbai', 'Chennai']
		},
		{
			question: 'What is the capital of USA?',
			answer: 'Washington DC',
			options: ['New York', 'Los Angeles', 'Chicago']
		},
		{
			question: 'What is the capital of UK?',
			answer: 'London',
			options: ['Manchester', 'Liverpool', 'Birmingham']
		},
		{
			question: 'True or false : The capital of India is Delhi',
			answer: 'True',
			options: ['False']
		}
	]
};


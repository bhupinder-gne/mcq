import React, { useState, useEffect } from 'react';
import Question from './Question';

const App = () => {
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedOptions, setSelectedOptions] = useState({});
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);

	useEffect(() => {
		fetch('/questions.json')
			.then((response) => response.json())
			.then((data) => setQuestions(data));
	}, []);

	const handleOptionChange = (option) => {
		setSelectedOptions({
			...selectedOptions,
			[currentQuestionIndex]: option,
		});
	};

	const handleNextQuestion = () => {
		if (
			questions[currentQuestionIndex].correct ===
			selectedOptions[currentQuestionIndex]
		) {
			setScore(score + 1);
		}

		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			setShowResult(true);
		}
	};

	if (showResult) {
		return (
			<div>
				<h2>
					Your Score: {score} / {questions.length}
				</h2>
			</div>
		);
	}

	if (questions.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Question
				question={questions[currentQuestionIndex].question}
				options={questions[currentQuestionIndex].options}
				selectedOption={selectedOptions[currentQuestionIndex]}
				onOptionChange={handleOptionChange}
			/>
			<button onClick={handleNextQuestion}>
				{currentQuestionIndex < questions.length - 1
					? 'Next Question'
					: 'Submit'}
			</button>
		</div>
	);
};

export default App;

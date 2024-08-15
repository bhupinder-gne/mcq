import React from 'react';

const Question = ({ question, options, selectedOption, onOptionChange }) => {
	return (
		<div>
			<h3>{question}</h3>
			{options.map((option, index) => (
				<div key={index}>
					<label>
						<input
							type="radio"
							name="option"
							value={option}
							checked={selectedOption === option}
							onChange={(e) => onOptionChange(e.target.value)}
						/>
						{option}
					</label>
				</div>
			))}
		</div>
	);
};

export default Question;

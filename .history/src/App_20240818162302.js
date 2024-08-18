import React, { useState } from 'react';
import Question from './questions';
const questions = [
	{
		id: 1,
		question:
			'Security professionals are tasked with the protection of persons, property, and',
		correct: 'Information',
		options: [
			'Government buildings',
			'Employee belongings',
			'Information',
			'Military locations',
		],
	},
	{
		id: 2,
		question:
			'Individuals holding an individual security licence in the province of Alberta may not refer to themselves as:',
		correct: 'Peace officers',
		options: [
			'Security professionals',
			'Loss prevention workers',
			'Peace officers',
			'Watchpersons',
		],
	},
	{
		id: 3,
		question: ' Professionalism is best demonstrated by:',
		correct: 'Peace officers',
		options: [
			'Your conduct and deportment',
			'Loss prevention workers',
			'Peace officers',
			'Watchpersons',
		],
	},
	{
		id: 4,
		question:
			'Your conduct and deportment __________________ utilized by licensed security professionals must be authorized by the Registrar',
		correct: 'Batons',
		options: ['Batons', 'Reporting forms', 'Post orders', 'Safety equipment'],
	},
	{
		id: 5,
		question: 'The notes in your notebook will help you:',
		correct: 'Prepare reports for your employer and others',
		options: [
			'Prepare reports for your employer and others',
			'Avoid court testimony',
			'Obtain a security licence in another    classification',
			'Communicate non-verbally',
		],
	},
	{
		id: 6,
		question: 'Writing profanity in your notebook is:',
		correct: 'Acceptable when you are quoting verbatim',
		options: [
			'Never appropriate',
			'Acceptable when you are quoting verbatim',
			'Inadmissible in court',
			'Prohibited under the Security Services and Investigator’s Act',
		],
	},
	{
		id: 7,
		question:
			'A statement is usually gathered as part of the _____________ process.',
		correct: 'Interview',
		options: [
			'Use of force',
			'Interview',
			'Verbal communication',
			'Post-order',
		],
	},
	{
		id: 8,
		question:
			'When you lose your security licence, you must file a written report to:',
		correct: 'The Registrar of Security programs',
		options: [
			'The police',
			'The Registrar of Security programs',
			'Your supervisor',
			'The client where you lost your licence',
		],
	},
	{
		id: 9,
		question:
			'A security professional in the province of Alberta must be, at minimum, _________years of age.',
		correct: '18',
		options: ['16', '18', '19', '21'],
	},
	{
		id: 10,
		question:
			'A licensed security professional may perform the following tasks:',
		correct: 'All of the above',
		options: [
			'Monitoring of alarm systems',
			'Arrest of persons found committing a crime',
			'Responding to emergencies',
			'Conducting physical searches of purses,   backpacks, and other personal items',
			'All of the above',
		],
	},
	{
		id: 11,
		question:
			'Protecting information may include limiting access of persons to computer equipment and data.',
		correct: 'True',
		options: ['True', 'False'],
	},
	{
		id: 12,
		question:
			'An individual holding a security licence is licensed to work as a private detective when:',
		correct: 'Never',
		options: [
			'Directed by the licensee’s employer',
			'The security professional is directed to  protect information',
			'The work of another employee must be covered due to illness or vacation',
			'Never',
		],
	},
	{
		id: 13,
		question:
			'Uniform requirements for licensed security professionals are designated by:',
		correct: 'The Security Services and Investigators Act',
		options: [
			'The Employment Standards Code and  Regulation',
			'The Security Operations Standards Council',
			'The Security Services and Investigators Act',
			'The Alberta Association of Chiefs of Police',
		],
	},
	{
		id: 14,
		question: 'The main duties of a security professional are to:',
		correct: 'Observe, deter, report',
		options: [
			'Observe, notify, arrest',
			'Observe, deter, report',
			'Concentrate, notice, recall',
			'Contain, deter, arrest',
		],
	},
	{
		id: 15,
		question: 'When approached by media, you should:',
		correct: 'Observe, deter, report',
		options: [
			'Tell them “no comment”',
			'Ignore them',
			'Only provide “yes” or “no” answers',
			'Refrain from participating in an interview',
		],
	},
	{
		id: 17,
		question: 'When approached by media, you should:',
		correct: 'Refrain from participating in an interview',
		options: [
			'Tell them “no comment”',
			'Ignore them',
			'Only provide “yes” or “no” answers',
			'Refrain from participating in an interview',
		],
	},
	{
		id: 18,
		question:
			'After you have called the police to assist with a hostile individual, you should:',
		correct: 'Continue to monitor the individual and situation',
		options: [
			'Continue on with your patrol duties',
			'Continue to monitor the individual and situation',
			'Tell the individual to leave before the police arrive',
			'Ask the individual to provide you with a statement',
		],
	},
	{
		id: 19,
		question:
			'Which of these is not appropriate to be contained in a notebook?',
		correct: 'E-mail address of secretary',
		options: [
			'Cell phone number of witness',
			'E-mail address of secretary',
			'Record of false alarm',
			'Complaints from members of the public',
		],
	},
	{
		id: 20,
		question: 'When you have finished a notebook, you should:',
		correct: 'Write the date of your last entry in the front  cover.',
		options: [
			'Shred it because it contains personal information',
			'Tear out the pages with personal information and turn the remainder over to your supervisor',
			'Write the date of your last entry in the front  cover.',
			'Give it to the client for review',
		],
	},
	{
		id: 21,
		question:
			'It is okay to add details to a statement if you know the information and the witness does not.',
		correct: 'False',
		options: ['True', 'False'],
	},
	{
		id: 22,
		question: 'If you leave blank lines in your notebook, you should:',
		correct: 'Draw a single line through the blank and initial',
		options: [
			'Shade in the blank area and initial',
			'Put an x through the blank line(s)',
			'Draw a single line through the blank and initial',
			'Initial the blank and indicate date and time',
		],
	},
	{
		id: 23,
		question: 'professionals in Alberta are licensed under the:',
		correct: 'Security Services and Investigators Act',
		options: [
			'Security Services and Investigators Act',
			'Security Services and Investigators Regulation',
			'Personal Property Security Act',
			'Security Management Regulation',
		],
	},
	{
		id: 24,
		question:
			'Persons with any criminal record are not permitted to apply for a security licence in the province of Alberta.',
		correct: 'False',
		options: ['True', 'False'],
	},
	{
		id: 25,
		question:
			'The Registrar may refuse the renewal of an individual security licence if:',
		correct:
			'The licensee fails to provide information as   required by the Act, regulations, or the Registrar',
		options: [
			'The licensee has not worked a minimum of 20 hours/week as a security professional',
			'The licensee fails to provide information as   required by the Act, regulations, or the Registrar',
			'The licensee fails to complete basic first aid training',
			' The licensee is suspected of a criminal offence',
		],
	},
	{
		id: 26,
		question:
			'  Public complaints against licensees are submitted in writing to:',
		correct: 'The owner of the business employing the subject of the complaint',
		options: [
			'The local police department',
			' The Registrar of security licensees',
			' The owner of the business employing the subject of the complaint',
			' The individual against whom the complaint is being filed',
		],
	},
	{
		id: 27,
		question:
			'With consent of both parties, an employer may attempt to resolve an issue between a security professional and a complainant.',
		correct: 'True',
		options: ['True', 'False'],
	},
	{
		id: 28,
		question:
			'When a witness tells you they think they know who committed a crime, you should:',
		correct: 'Make note of the name to pass along to the police',
		options: [
			' Make note of the name to pass along to the police',
			' Find the named person and arrest him or her',
			'Ask the witness to write the suspects name and number in your notebook',
			' Let the witness go since you know who the guilty party is',
		],
	},
	{
		id: 29,
		question:
			'What information is not required in your daily, opening notebook entry?',
		correct: 'Expected visitors to the premises',
		options: [
			'Weather',
			'Name of partner',
			'Special events',
			'Expected visitors to the premises',
		],
	},
	{
		id: 30,
		question: 'On the 24-hour clock you would write 5:30 PM as:',
		correct: '1730',
		options: ['0530', '05:30', '1330', '1730'],
	},
	{
		id: 31,
		question: 'A well-written report is prepared in: ',
		correct: 'Past tense',
		options: ['Future tense', 'Present tense', 'Past tense', 'Third person'],
	},
	{
		id: 32,
		question:
			'A security professional in the province of Alberta is eligible to begin work before receiving their licence, provided they have completed all application documents and requirements.',
		correct: 'False',
		options: ['True', 'False'],
	},
	{
		id: 33,
		question:
			'A public complaint against an individual security licence holder must be filed within ____ days of the alleged incident.',
		correct: '90',
		options: ['30', '45', '60', '90'],
	},
	{
		id: 34,
		question:
			'A security professional must notify the Registrar when the following occurs:',
		correct: 'Both a and c',
		options: [
			' Change of telephone number',
			'Change of employer',
			'Change of address',
			'Renewal of driver licence',
			'Both a and c',
		],
	},
	{
		id: 35,
		question: 'deportment refer to',
		correct: 'A professional appearance and attitude',
		options: [
			'The format and neatness of a written report',
			'The classification of a security licensee in the province of Alberta',
			'A process for altering post orders after a shift has started',
			'A professional appearance and attitude',
		],
	},
	{
		id: 36,
		question: 'An individual  security licence may be transferred',
		correct: 'Never',
		options: [
			'a. Upon leaving a position',
			'Never',
			'When a temporary assignment is required in the case of illness or medical leave',
			'When the owner of a security services company gives written permission to do so',
		],
	},
	{
		id: 37,
		question:
			'Which legislation defines the hours of work for a security professional?',
		correct: 'Employment Standards Code and Regulation',
		options: [
			'Criminal Code of Canada',
			'Security Services and Investigators Regulation  (Ministerial)',
			'Security Services and Investigators Act',
			'Employment Standards Code and Regulation',
		],
	},
	{
		id: 38,
		question: 'You should not write your ____________ in your notebook.',
		correct: 'Opinion',
		options: [
			'Shift start and end times',
			'Partners name',
			'Opinion',
			'Explanation of what occurred',
		],
	},
	{
		id: 39,
		question: 'The 24 hour clock',
		correct: 'Helps differentiate between AM and PM',
		options: [
			'Is only used by military personnel',
			'Helps differentiate between AM and PM',
			'Should not be used for non-military clients',
			'Is not used for written reports',
		],
	},
	{
		id: 40,
		question: 'What tone should you use in your report writing?',
		correct: 'Formal',
		options: ['Friendly', 'Informal', 'Formal', 'Technical'],
	},
	{
		id: 41,
		question: 'Events should be written in _________ order.',
		correct: 'Chronological',
		options: ['First', 'Logical', 'Chronological', 'Remembered'],
	},
	{
		id: 42,
		question:
			'Reports should contain information about who, what, _________, when, why, and how.',
		correct: 'Where',
		options: ['Warnings', 'Weather', 'Wait-time', 'Where'],
	},
	{
		id: 43,
		question:
			'A loud voice is most appropriate for showing your authority as a security professional.',
		correct: 'False',
		options: ['True', 'False'],
	},
	{
		id: 44,
		question:
			'Which of the following is not part of your nonverbal communication?',
		correct: 'Text messages',
		options: ['Uniform', 'Posture', 'Text messages', 'Facial expressions'],
	},
	{
		id: 45,
		question: 'An active listener: ',
		correct: 'Makes eye contact with the speaker',
		options: [
			'Makes eye contact with the speaker',
			'Notices ongoing distractions while listening',
			'Interrupts to clarify information',
			'Does not respond while the speaker is talking',
		],
	},
	{
		id: 46,
		question: 'You should summarize a conversation with an individual:',
		correct: 'At the end of a conversation, to clarify expectations',
		options: [
			'a. At the start of the conversation',
			'When there are multiple persons involved',
			'At the end of a conversation, to clarify expectations',
			'Each time you begin to speak',
		],
	},
	{
		id: 47,
		question: 'Best practice for communication is to:',
		correct: 'Ask one question at a time',
		options: [
			'Ask all your questions at once',
			'Ask one question at a time',
			'Use only closed questions',
			'Use only open-ended questions',
		],
	},
	{
		id: 48,
		question:
			'Raising your voice is an effective way to convince an agitated person to calm down.',
		correct: 'False',
		options: ['True', 'False'],
	},
	{
		id: 49,
		question: 'You should _______________ before interviewing someone.',
		correct: 'Ask permission',
		options: [
			'Wait until your shift ends',
			'Ask your supervisor for new post-orders',
			'Have the individual call a lawyer',
			'Ask permission',
		],
	},
	{
		id: 50,
		question: 'Up to ______________ of communication is non-verbal.',
		correct: '90%',
		options: ['50%', '65%', '85%', '90%'],
	},
	{
		id: 51,
		question: 'LEAPS is a method for:',
		correct: 'Gaining cooperation and compliance',
		options: [
			'Making a decision about whether or not to use force',
			'Recalling information',
			'Gaining cooperation and compliance',
			'Memorizing a patrol route',
		],
	},
	{
		id: 52,
		question:
			'When deciding whether or not to put out a fire on your own, you should consider:',
		correct: 'The equipment available to you',
		options: [
			'The equipment available to you',
			'The number of people in the building',
			'Your proximity to a water source',
			'What floor you are on',
		],
	},
	{
		id: 53,
		question: 'Shift-work may affect you in the following areas:',
		correct: 'All of the above',
		options: ['Social life', 'Sleep', 'Physical fitness', 'All of the above'],
	},
	{
		id: 54,
		question:
			'Being physically fit will help you combat fatigue and keep your powers of ______________ sharp.',
		correct: 'Observation',
		options: ['Self-defence', 'Writing', 'Observation', 'Running'],
	},
	{
		id: 55,
		question:
			'A parking lot after darkness falls is an example of a ____________-risk setting:',
		correct: 'High',
		options: ['Low', 'Medium', 'High', 'Very high'],
	},
	{
		id: 56,
		question: 'Effective communication is ___________________.',
		correct: 'Confident',
		options: ['Aggressive', 'Arrogant', 'Confident', 'Dismissive'],
	},
	{
		id: 57,
		question: 'Tone of voice may be used to communicate ________________.',
		correct: 'Seriousness of a situation',
		options: [
			'Greater knowledge of a topic',
			'Experience as a security professional',
			'Seriousness of a situation',
			'Qualifications of licensee',
		],
	},
	{
		id: 58,
		question: 'Which of the following are challenges to communication?',
		correct: 'All of the above',
		options: [
			'Your attitudes',
			'The language skills of the parties involved',
			'Disabilities',
			'All of the above',
		],
	},
	{
		id: 59,
		question:
			'When the attitude or behaviour of another person causes you to become frustrated, it is known as:',
		correct: 'A trigger',
		options: [
			'Anger management',
			'Bi-polar disorder',
			'A trigger',
			'Harassment',
		],
	},
	{
		id: 60,
		question: 'To help an individual de-escalate, you might try: ',
		correct: 'Asking the person to come with you to a  quiet place',
		options: [
			'Moving the person to an area where more people are present',
			'Limiting the individuals choices',
			'Becoming aggressive, to show the individual you are in control of the situation',
			'Asking the person to come with you to a  quiet place',
		],
	},
	{
		id: 61,
		question:
			'Your _______________ and __________________ fitness are important for your personal safety.',
		correct: 'Mental, physical',
		options: [
			'Cardiovascular, mental ',
			'Mental, physical',
			'Strength, physical',
			'Intellectual, physical',
		],
	},
	{
		id: 62,
		question:
			'Keep your uniform in _________________ to avoid potential hazards.',
		correct: 'Good repair',
		options: [
			'Your locker',
			'Your employers office',
			'Plain sight',
			'Good repair',
		],
	},
	{
		id: 63,
		question:
			'The _________________ with which you encounter certain hazards can affect the level of risk at a site.',
		correct: 'Frequency',
		options: ['Nature', 'Less', 'Frequency', 'Danger'],
	},
	{
		id: 64,
		question: 'Hazard assessment should be a(n) _____________________ process.',
		correct: 'Ongoing',
		options: ['Legal', 'Observational', 'Ongoing', 'Supervisory'],
	},
	{
		id: 65,
		question:
			'Use ____________ to determine changes in temperature, such as a fire behind a door.',
		correct: 'Touch',
		options: [
			'Smoke detectors',
			'Touch',
			'Building systems software',
			'Thermostat readings',
		],
	},
	{
		id: 66,
		question: 'Professional communication is: ',
		correct: 'All of the above',
		options: [
			'Free from acronyms ',
			'Direct and to the point',
			'Courteous and respectful',
			'All of the above',
		],
	},
	{
		id: 67,
		question: 'You should ask an individual to clarify what they have said to:',
		correct: 'All of the above',
		options: [
			'Show them you are in control',
			'Help them realize they are saying something stupid',
			'Help you understand the situation',
			'Frustrate the person so he or she will go away',
		],
	},
	{
		id: 68,
		question: 'You should conduct an interview: ',
		correct: 'When you require information about an incident',
		options: [
			'With your supervisor, after a crime has occurred',
			'When you are sure the individual is guilty',
			'When the police will take more than five minutes to arrive',
			'When you require information about an incident',
		],
	},
	{
		id: 69,
		question: '______________ is a sign of escalating behaviour.',
		correct: 'Increasing volume',
		options: [
			'Decreasing volume',
			'Decreased movement',
			'Increasing volume',
			'Increased movement',
		],
	},
	{
		id: 70,
		question: 'Paraphrasing is: ',
		correct: 'Putting something into your own words',
		options: [
			'Repeating what has just been said',
			'Putting something into your own words',
			'Speaking at the same time as another individual',
			'When a disabled person uses gestures to communicate',
		],
	},
	{
		id: 71,
		question:
			'If you are overtired or ill while on shift, you are a ______________ to yourself. ',
		correct: 'Hazard',
		options: ['Hazard', 'Contagious person', 'Victim', 'Physician'],
	},
	{
		id: 72,
		question:
			'Which of the following is not a step in mentally preparing for a shift?',
		correct: 'Getting enough sleep',
		options: [
			'Getting enough sleep',
			'Dealing with distractions',
			'Getting focused',
			'Reviewing your assignment',
		],
	},
	{
		id: 73,
		question:
			'Choose the term which describes a confident, straightforward manner: ',
		correct: 'Assertive',
		options: ['Aggressive', 'Amicable', 'Assertive', 'Arrogant'],
	},
	{
		id: 74,
		question: 'In LEAPS, the S stands for:  ',
		correct: 'Summarize',
		options: ['Soften', 'Stand down', 'Shorten', 'Summarize'],
	},
	{
		id: 75,
		question:
			'Showing your frustration with a situation will help the listener take you more seriously. ',
		correct: 'False',
		options: ['True', 'False'],
	},
	{
		id: 75,
		question: 'You should _____________ the risk on each site you work. 
a.	Refuse 
b.	Assess 
c.	Eliminate 
d.	Ignore 
',
		correct: 'May have several answers',
		options: [
			'May have several answers',
			'Requires a “yes” or “no” answer',
			'Must be answered by several people',
			'Cannot be answered until the police arrive',
		],
	},
];

const App = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedOptions, setSelectedOptions] = useState({});
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);

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

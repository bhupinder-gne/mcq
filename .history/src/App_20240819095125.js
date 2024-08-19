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
		id: 76,
		question: 'You should _____________ the risk on each site you work. ',
		correct: 'Assess',
		options: ['Refuse', 'Assess', 'Eliminate', 'Ignore'],
	},
	{
		id: 77,
		question: 'An open-ended question: ',
		correct: 'May have several answers',
		options: [
			'May have several answers',
			'Requires a yes or no answer',
			'Must be answered by several people',
			'Cannot be answered until the police arrive',
		],
	},
	{
		id: 78,
		question: 'At the start of your shift, your duties will be:',
		correct: 'Outlined in post-orders',
		options: [
			'Decided upon in consultation with your  supervisor',
			'Explained by the owner of the premises',
			'Outlined in post-orders',
			'Explained by the security professional you are relieving',
		],
	},
	{
		id: 79,
		question:
			'The Canadian Charter of Rights and Freedoms guarantees individuals: ',
		correct: 'Protection against unreasonable search',
		options: [
			'Protection from being accused of committing a crime',
			'Protection against unreasonable search',
			'Protection from being arrested until proven guilty',
			'Protection against being denied bail',
		],
	},
	{
		id: 80,
		question:
			'Which of the following is not considered an indictable offence: ',
		correct: 'Possession of weapon at public meeting',
		options: [
			'Possession of housebreaking instruments',
			'Possession of counterfeit money',
			'Possession of weapon or imitation for dangerous purpose',
			'Possession of weapon at public meeting',
		],
	},
	{
		id: 81,
		question:
			'Which of the following behaviours is NOT an example of assault as defined in Section 265 of the Criminal Code: ',
		correct: 'Bullying with foul language',
		options: [
			'Spitting',
			'Bullying with foul language',
			'Grabbing',
			'Pushing/shoving',
		],
	},
	{
		id: 82,
		question:
			'Which legislation outlines your authority on behalf of a property owner?',
		correct: 'All of the above',
		options: [
			'Trespass to Premises Act',
			'Petty Trespass Act',
			'Criminal Code of Canada',
			'All of the above',
		],
	},
	{
		id: 83,
		question:
			'When testifying in court, it is acceptable to admit you do not know the answer to a question. ',
		correct: 'True',
		options: ['True', 'False'],
	},
	{
		id: 84,
		question:
			'________________ evidence is based on something said by a third party. ',
		correct: 'Hearsay',
		options: ['Circumstantial', 'Hearsay', 'Unreliable', 'Admissible'],
	},
	{
		id: 85,
		question: 'A fingerprint is an example of ________________ evidence: ',
		correct: 'Trace',
		options: ['Trace', 'Physical', 'Direct', 'Documentary'],
	},
	{
		id: 86,
		question:
			'A security professional can be expected to monitor which type of alarm? ',
		correct: 'All of the above',
		options: ['Fire', 'Humidity', 'Building system', 'All of the above'],
	},
	{
		id: 87,
		question: 'Alarm responses are: ',
		correct: 'Defined by the client and your supervisor',
		options: [
			'The same for all similar types of buildings',
			'Printed on the inside cover of your notebook',
			'Defined by the client and your supervisor',
			'Defined by the security professional',
		],
	},
	{
		id: 88,
		question:
			'Off-site alarm responders should drive as quickly as possible when responding to an alarm: ',
		correct: 'False',
		options: ['True', 'False'],
	},
	{
		id: 89,
		question: 'Security professionals have the power to arrest persons found: ',
		correct: 'Committing an indictable offence',
		options: [
			'Causing a disturbance',
			'Loitering near a vandalized vehicle in a private compound',
			'Committing an indictable offence',
			'Committing an indecent act',
		],
	},
	{
		id: 90,
		question:
			'A security professional must deliver an arrested person to the police: ',
		correct: 'As soon as possible after arrest',
		options: [
			'As soon as possible after arrest',
			'After advising the owner of the property about the arrest',
			'After the incident has been called in to the shift supervisor',
			'Before advising the suspect he or she is entitled to a phone call',
		],
	},
	{
		id: 91,
		question: 'Public mischief is an example of a(n) _______________ offence. ',
		correct: 'Hybrid (dual)',
		options: ['Summary', 'Indictable', 'Hybrid (dual)'],
	},
	{
		id: 92,
		question: 'An individual who tampers with computer data is guilty of:  ',
		correct: 'HMischief',
		options: ['Fraud', 'Theft', 'Mischief', 'Trespassing'],
	},
	{
		id: 93,
		question:
			'If you use more force than necessary to stop a criminal act, you can be held criminally responsible. ',
		correct: 'True',
		options: ['True', 'False'],
	},
	{
		id: 94,
		question: 'When you are responsible for monitoring an alarm, you should: ',
		correct: 'Learn how the alarm system works when beginning your shift',
		options: [
			'Write down the name of the alarm company',
			'Find out the contact information for the client',
			'Learn how the alarm system works when beginning your shift',
			'Never leave the alarm control panel',
		],
	},
	{
		id: 95,
		question: 'Respond to ___________ alarms. ',
		correct: 'All',
		options: ['Genuine', 'All', 'After-hours', 'Emergency'],
	},
	{
		id: 96,
		question:
			'A security professional has more powers of arrest than a regular individual when the security professional is licensed and in uniform.',
		correct: 'False',
		options: ['True', 'False'],
	},
	{
		id: 97,
		question:
			'Possession of housebreaking instruments is an example of a(n) ______________ offence.',
		correct: 'Hybrid (dual)',
		options: ['Summary', 'Indictable', 'Hybrid (dual)'],
	},
	{
		id: 98,
		question: 'In court, you must not leave the stand: ',
		correct: 'Until the judge dismisses you',
		options: [
			'Until the lawyer is finished asking questions',
			'If there are people in the court room',
			'Before handing in your notebook',
			'Until the judge dismisses you',
		],
	},
	{
		id: 99,
		question:
			'Some alarm response protocols will require you to call the company owner or client before contacting emergency services. ',
		correct: 'False',
		options: ['True', 'False'],
	},
	{
		id: 100,
		question: 'The last step in responding to an off-site alarm is to:',
		correct: 'Document events in your notebook',
		options: [
			'Contact emergency services',
			'Document events in your notebook',
			'Call the owner for the alarm reset code',
			'Preserve the scene for evidence collection',
		],
	},
	{
		id: 101,
		question: 'When arresting an individual, you are required to:',
		correct:
			'Tell them what criminal act they are being arrested for committing',
		options: [
			'Tell them you have called the police',
			'Advise them you are a licensed security professional',
			'Tell them what criminal act they are being arrested for committing',
			'Ensure a witness is present at the time of arrest',
		],
	},
	{
		id: 102,
		question: 'at night is an example of a(n) _____________ offence.',
		correct:
			'Summary',
		options: [
			 
a.	"Summary", 
b.	"Indictable",
c.	"Hybrid (dual) ",

		],
	},
	{
		id: 103,
		question: 'If you are not provided with instructions for responding to alarms, you should: ',
		correct:
			"Phone your supervisor for clarification and instructions",
		options: [
			 

			a. 	"Locate all alarm components and develop your own response plan", 
			b.	"Do nothing; you are not responsible for monitoring alarms if they have not been explained",
			c.	"Contact the client for instructions",
			d.	"Phone your supervisor for clarification and instructions"
			

		],
	},
	{
		id: 104,
		question: 'When you encounter a trespasser on the premises, your first course of action should be to:',
		correct:
			"Ask the trespasser to leave",
		options: [
			 

			 
a. 	"Ask the trespasser to leave",
b.	"Advise your supervisor a trespasser is on the premises", 
c.	"Call for police assistance", 
d.	"Note the time and location in your notebook" 

			

		],
	},
	{
		id: 105,
		question: 'If you use more force than necessary to stop a criminal act, you can be held criminally responsible. ',
		correct:
			"True",
		options: [a. "True", 
			B . "False"
			],
	},
	{
		id: 106,
		question: 'Recording the name of the police officer who assumes control of a crime scene is: ',
		correct:
			"Preserving the chain of evidence",
		options: [
			a.	"Required for filling out Post-orders", 
			b.	"Not required",
			c.	"Preserving the chain of evidence",
			d.	"Necessary for keeping the media informed" 
			
			],
	},
	{
		id: 107,
		question: 'You should advise the police about witnesses to the incident when: ',
		correct:
			"When the police arrive",
		options: [
			
a. 	"You believe the witness is lying", 
b.	"When the police arrive" ,
c.	"When you have finished interviewing the witness", 
d.	"When the witness does not know the suspect"

			],
	},
	{
		id: 108,
		question: 'You should determine what type of emergency equipment is available to you___________. ',
		correct:
			"Before an emergency ever happens",
		options: [
			a. 	"When an emergency occurs",
			b.	"When debriefing with emergency services personnel",
			c.	"Before an emergency ever happens",
			d.	"When the fire inspector comes on site",
			],
	},
	{
		id: 109,
		question: 'To use “as much force as necessary” means: ',
		correct:
			"Using enough force to stop the criminal act from continuing",
		options: [
			
a.	"Using enough force to ensure the suspect cannot run away", 
b.	"Restraining all suspects, even those who are cooperative",
c.	"Using enough force to stop the criminal act from continuing", 
d.	"Using force until the suspect gives a confession"

			],
	},
	{
		id: 110,
		question: 'In a use of force situation, you should consider the following:',
		correct:
			"All of the above",
		options: [
		 
a. 	"Threat of safety to yourself and others", 
b.	"Urgency",
c.	"Environment", 
d.	"All of the above" 

			],
	},
	{
		id: 111,
		question: 'You should keep other security professionals away from a crime scene in order to protect evidence. ',
		correct:
			"True",
		options: [a. "True", 
			B . "False"],
	},
	{
		id: 112,
		question: 'During an evacuation, ensure you check for _______________, who may need assistance.',
		correct:
			"Persons with mobility difficulties",
		options: [ 
			a.	"VIPs",
			b.	"Persons with mobility difficulties",
			c.	"People with pets",
			d.	"Individuals wearing high-heeled shoes" 
			],
	},
	{
		id: 113,
		question: 'You are permitted to search an individual you have arrested if: ',
		correct:
			"You have reasonable grounds to believe the individual is carrying a weapon",
		options: [ 
			
a.	"You recognize the individual as the suspect in a previous criminal offence", 
b.	"The individual refuses to answer your questions", 
c.	"The police will take more than 30 minutes to arrive", 
d.	"You have reasonable grounds to believe the individual is carrying a weapon" 

			],
	},
	{
		id: 114,
		question: 'When making a decision to use force, you should consider:',
		correct:
			"Your own preparedness",
		options: [ 
		
 a. 	"Your own preparedness", 
 b.	"The number of witnesses present", 
 c.	"How long you have been licensed as a security professional", 
 d.	"If the suspect tells you he or she is going to call a lawyer" 
 
			],
	},
	{
		id: 115,
		question: 'Section 25 of the Criminal Code permits you to use as much force as is____________ to stop a criminal act.',
		correct:
			"Necessary",
		options: [ 
		 
a.	"Lawfully permitted", 
b.	"Non-hazardous", 
c.	"Necessary", 
d.	"Safe" 

			],
	},
	{
		id: 116,
		question: 'The Bomb Threat checklist is used to:',
		correct:
			"Gather information from a threatening caller",
		options: [ 
	 
a.	"Tell the police how to find your location", 
b.	"Gather information from a threatening caller", 
c.	"Define the process for evacuation", 
d.	"Check all areas of a building for suspicious items"

			],
	},
	{
		id: 117,
		question: 'A bomb threat should be consider genuine ',
		correct:
			"In all circumstances",
		options: [ 
	 
 a. "When it is received via mail",
 b.	"When it occurs in the middle of a weekday", 
 c.	"When there are many people present in the building", 
 d.	"In all circumstances" 
	 ],
	},
	{
		id: 118,
		question: 'When asked to evacuate a location, you should:',
		correct:
			"Assist persons in leaving the building in a calm, orderly manner",
		options: [ 
	  
a.	"Call your supervisor first for permission",
b.	"Ask the public to run as quickly as possible to the designated meeting place",
c.	"Assist persons in leaving the building in a calm, orderly manner",
d.	"Stay in the security office to greet emergency services personnel" 

	 ],
	},
	{
		id: 119,
		question: 'You must be able to _____________ information in order to use it in an investigation.',
		correct:
			"Recall",
		options: [ 
	   
a.	"Recall",
b.	"Memorize",
c.	"Document",
d.	"Record" 

	 ],
	},
	{
		id: 120,
		question: 'The purpose of patrol is to:',
		correct:
			"Observe your surroundings for changes or unusual activit",
		options: [ 
	    
a.	"Let everyone know you are in the building", 
b.	"Observe your surroundings for changes or unusual activity", 
c.	"Meet the requirement of your post orders", 
d.	"Find out the events taking place at the site" 

	 ],
	},
	{
		id: 121,
		question: ' Your patrol route should: ',
		correct:
			"Allow you to cover all areas of a premises or site",
		options: [ 
	    
a.	"Always stay the same", 
b.	"Change every time", 
c.	"Allow you to cover all areas of a premises or site", 
d.	"Get shorter as you near the end of your shift"

	 ],
	},
	{
		id: 122,
		question: ' Controlling ___________ is a common duty for a security professional.',
		correct:
			"Access",
		options: [ 
	     
a. 	"Open and closing times",
b.	"Temperature and humidity",
c.	"Overtime",
d.	"Access" 

	 ],
	},
	{
		id: 123,
		question: '______________________ is not a suggested method for controlling a crowd.',
		correct:
			"Using force to remove individuals who are fighting",
		options: [ 
	      
a. "Removing the leader",
b.	"Breaking the crowd into smaller groups", 
c.	"Using force to remove individuals who are fighting", 
d.	"Seeking assistance from a sympathetic leader" 


	 ],
	},
	{
		id: 124,
		question: '_____________ your patrol at the start of each shift.',
		correct:
			"Plan",
		options: [ 
	    
a.	"Call in", 
b.	"Document", 
c.	"Conduct", 
d.	"Plan"

	 ],
	},
	{
		id: 125,
		question: 'When calling in a licence plate using the phonetic alphabet, “EZM” would be expressed as: ',
		correct:
			"Echo-Zulu-Mike",
		options: [ 
			a. 	"Earache–Zion-Malta",
			b.	"Echo-Zion-Mike",
			c.	"Elbow-Zulu-Malta" ,
			d.	"Echo-Zulu-Mike" 
			
	 ],
	},
	{
		id: 126,
		question: 'Be watchful for ________, or things that look _____________ than before. ',
		correct:
			"Change, different",
		options: [ 
			a. 	"People, bigger", 
b.	"Time, different",
c.	"Change, different",
d.	"Association, more disturbed" 

	 ],
	},
	{
		id: 127,
		question: 'You may recall information by concentrating, associating, and _____________________.',
		correct:
			"Repeating",
		options: [ 
			
 a. 	"Writing",
 b.	"Visualizing",
 c.	"Repeating",
 d.	"Memorizing" 
 
	 ],
	},
	{
		id: 128,
		question: 'Which of the following is not an appropriate activity while on patrol? ',
		correct:
			"Arranging a lunch date with a contractor",
		options: [ 
		
a. 	"Checking in with the dispatcher at regular intervals", 
b.	"Asking the receptionist how things are going", 
c.	"Arranging a lunch date with a contractor", 
d.	"Speaking to another security professional about site hazards" 

	 ],
	},
	{
		id: 129,
		question: 'Portable sound systems (e.g., MP3 players) may be used after hours or at night while on duty.',
		correct:
			"False",
		options: [ 
		 
a.	"True",
b.	"False" 


	 ],
	},
	{
		id: 130,
		question: 'Door and window locks should be checked:',
		correct:
			"Each time you pass",
		options: [
			a. 	"Once per shift",
		   b.	"At the beginning and end of each shift",
		   c.	"Hourly",
		   d.	"Each time you pass" 
		   ],
	},
	{
		id: 131,
		question: '. You may permit access to an unauthorized individual: ',
		correct:
			"Each time you pass",
		options: [
			
a.	"When it is late at night and it is not safe for the person to remain outside", 
b.	"When they are accompanied by an authorized person",
c.	"Under no circumstances",
d.	"When the individual tells you an emergency situation is taking place"

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
			<p>Total Questions ({questions.length})</p>
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

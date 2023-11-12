import {useState} from 'react' // Import the `useState` hook from the React library
import './App.css' // Import a CSS file for styling
// Define a functional component called `App`
const App = () => {
  // Define two sets of questions and answers in two different languages
  const QuestionbankTelugu = [
    // Define an array of questions in Telugu
    {
      id: 1,
      Question: 'Q1 - పలికే ధ్వనులకు ఏర్పరచుకున్న గుర్తును ఏమంటారు?',
      Answers: [
        {Answer: 'వర్ణము', isCorrect: false},
        {Answer: 'అక్షరము', isCorrect: true},
        {Answer: 'అచ్చు', isCorrect: false},
      ],
    },
    // Define more questions similarly
    // ...
    {
      id: 2,
      Question: 'Q2 - అర్థబేధకము కలిగిన కనిష్ఠ ధ్వనికి ఏమని పేరు?',
      Answers: [
        {Answer: 'వర్ణము', isCorrect: true},
        {Answer: 'అక్షరము', isCorrect: false},
        {Answer: 'ఏదీకాదు', isCorrect: false},
      ],
    },
    {
      id: 3,
      Question: 'Q3 - శ్రీ   అక్షరములో వర్ణాల(ధ్వనుల) సంఖ్య ఎంత',
      Answers: [
        {Answer: '1', isCorrect: false},
        {Answer: '2', isCorrect: true},
        {Answer: '3', isCorrect: false},
      ],
    },
    {
      id: 4,
      Question:
        'Q4 -ఈ క్రింది అక్షరాలలో నాలుగు వర్ణాలు (ధ్వనులు)కలి గిన అక్షరము  ఏది?',
      Answers: [
        {Answer: 'శ్రీ', isCorrect: false},
        {Answer: 'స్త్రీ', isCorrect: false},
        {Answer: 'పైరెండు', isCorrect: true},
      ],
    },
    {
      id: 5,
      Question:
        'Q5 - సాధ్వి  అనే పదంలో  సంయుక్తాక్షరం లోని  లోని వర్ణాల( ధ్వనుల) సంఖ్య ఎంత?.',
      Answers: [
        {Answer: '4', isCorrect: false},
        {Answer: '2', isCorrect: false},
        {Answer: '1', isCorrect: true},
      ],
    },
    {
      id: 6,
      Question:
        'Q6 - పద్మ  అనే పదంలోని సంయుక్తాక్షరాన్ని  వర్ణాలు (ధ్వనులు)గా విడదీసి వ్రాయగా?',
      Answers: [
        {Answer: ' ప్+అ+ద్+మ్+అ', isCorrect: false},
        {Answer: 'ప+ద్+మ్+అ', isCorrect: true},
        {Answer: 'ద్+మ్+అ', isCorrect: false},
      ],
    },
    {
      id: 7,
      Question:
        'Q7 -  లక్ష్మి అనే పదాన్ని వర్ణాలుగా (ధ్వనులు గా ) విడదీసి వ్రాయగా?',
      Answers: [
        {Answer: 'ల+క్+ష్+మి', isCorrect: false},
        {Answer: 'ల్+అ+క్+ష్+మ్+ఇ', isCorrect: false},
        {Answer: 'ల్+అ+క్+ష్+మ్+ఈ', isCorrect: true},
      ],
    },
    {
      id: 8,
      Question:
        'Q8 -  ఈ క్రింది పదాలలో సంశ్లేష అక్షరం కలిగి ఉన్న పదాన్ని గుర్తించండి?',
      Answers: [
        {Answer: 'సంస్కృతి', isCorrect: false},
        {Answer: 'సంస్కారము', isCorrect: true},
        {Answer: 'సత్ప్రవర్తన', isCorrect: false},
      ],
    },
    {
      id: 9,
      Question: 'Q9 - వర్గాక్షరాలను ఎన్ని వర్గాలుగా విభజించారు?',
      Answers: [
        {Answer: '4', isCorrect: false},
        {Answer: '5', isCorrect: true},
        {Answer: '6', isCorrect: false},
      ],
    },
    {
      id: 10,
      Question: 'Q10 - ఈ క్రింది పదాలలో అనునాసికం కానిది?',
      Answers: [
        {Answer: 'న', isCorrect: false},
        {Answer: 'వ', isCorrect: false},
        {Answer: 'మ', isCorrect: true},
      ],
    },
    {
      id: 11,
      Question: 'Q11 - వర్గ పంచమాక్షరాలకు మరొక పేరు? ',
      Answers: [
        {Answer: 'పరుషాలు', isCorrect: false},
        {Answer: 'సరళాలు', isCorrect: false},
        {Answer: 'అనునాసికాలు', isCorrect: true},
      ],
    },
    {
      id: 12,
      Question: 'Q12 - ఈ క్రింది వాటిలో సరళాలు(వర్గ తృతీయాక్షరాలు) ఏవి?',
      Answers: [
        {Answer: 'గ,జ,డ,ద,బ', isCorrect: false},
        {Answer: 'గ, జ, ఢ ,ద ,బ', isCorrect: false},
        {Answer: 'గ , జ , డ ,ద ,భ', isCorrect: true},
      ],
    },
    {
      id: 13,
      Question: 'Q13 - ఈ క్రింది పదాలలో అన్ని ఊష్మాలు కలిగిన  పదం?',
      Answers: [
        {Answer: 'సహజం', isCorrect: false},
        {Answer: 'సహవాసం', isCorrect: false},
        {Answer: 'శేషము', isCorrect: true},
      ],
    },
    {
      id: 14,
      Question: 'Q14 - సంస్కృత పదాలకు మాత్రమే చేరేది/చేరేవి?',
      Answers: [
        {Answer: 'పూర్ణబిందువు', isCorrect: false},
        {Answer: ' అరసున్న', isCorrect: false},
        {Answer: 'విసర్గ', isCorrect: true},
      ],
    },
    {
      id: 15,
      Question: 'Q15 -  కనురెప్ప పాటు కాలాన్ని ఏమంటారు?',
      Answers: [
        {Answer: 'క్షణము', isCorrect: false},
        {Answer: 'సెకను', isCorrect: false},
        {Answer: 'మాత్ర', isCorrect: true},
      ],
    },
    {
      id: 16,
      Question: 'Q16 - ద్విత్వాక్షరం అనగా ?',
      Answers: [
        {
          Answer: 'ఒక అక్షరానికి అదే అక్షరం ఒత్తుగా  చేరే అక్షరం',
          isCorrect: false,
        },
        {
          Answer: 'ఒక హల్లుకు అదే హల్లుకు చెందిన ఒత్తు  చేరి న అక్షరం',
          isCorrect: false,
        },
        {
          Answer: 'ఒక హల్లుకు వేరొక హల్లుకు చెందిన ఒత్తు చేరే అక్షరం',
          isCorrect: true,
        },
      ],
    },
    {
      id: 17,
      Question: 'Q17 - బుద్ధిమంతుడు  అనే పదం లో ఉన్న అక్షరం ఏది ?',
      Answers: [
        {Answer: 'ద్విత్వాక్షరం', isCorrect: false},
        {Answer: 'సంయుక్తాక్షరం', isCorrect: false},
        {Answer: 'సంశ్లేషాక్షరం', isCorrect: true},
      ],
    },
    {
      id: 18,
      Question: 'Q10 - అక్షరమాల లేదా వర్ణమాల అనగా ఏమిటి?',
      Answers: [
        {Answer: 'హల్లులు కలిగియున్నది.', isCorrect: false},
        {Answer: 'అచ్చులు కలిగియున్నది.', isCorrect: false},
        {
          Answer: 'భాషా ధ్వనులకు చెందిన అక్షరపు గుర్తులు కలిగియున్నది.',
          isCorrect: true,
        },
      ],
    },
    {
      id: 19,
      Question: 'Q19 - పొల్లుగా పలికే ధ్వనిని ఏమంటారు?',
      Answers: [
        {Answer: 'అచ్చు', isCorrect: false},
        {Answer: 'హల్లు', isCorrect: false},
        {Answer: 'ద్రుతము', isCorrect: true},
      ],
    },
    {
      id: 20,
      Question: 'Q20 - ఈ క్రింది అక్షరాలలో రెండు మాత్రల కాలంలో ఉచ్చరించబడనిది?',
      Answers: [
        {Answer: 'ౠ', isCorrect: false},
        {Answer: 'ఈ', isCorrect: false},
        {Answer: 'ఋ', isCorrect: true},
      ],
    },
  ]

  const QuestionbankEnglish = [
    // Define an array of questions in English

    {
      id: 1,
      Question: 'Q1 - I spoke to ____.',
      Answers: [
        {Answer: 'she', isCorrect: false},
        {Answer: 'her', isCorrect: true},
      ],
    },
    // Define more questions similarly
    // ...

    {
      id: 2,
      Question: 'Q2 - Where ____ you come from?',
      Answers: [
        {Answer: 'do', isCorrect: true},
        {Answer: 'are', isCorrect: false},
      ],
    },
    {
      id: 3,
      Question: 'Q3 - What time does she ___ up?',
      Answers: [
        {Answer: 'get', isCorrect: true},
        {Answer: 'gets', isCorrect: false},
      ],
    },
    {
      id: 4,
      Question: 'Q4 - Where ___ he live?',
      Answers: [
        {Answer: 'do', isCorrect: false},
        {Answer: 'does', isCorrect: true},
      ],
    },
    {
      id: 5,
      Question: 'Q5 - I am not ____ this film.',
      Answers: [
        {Answer: 'liking', isCorrect: false},
        {Answer: 'enjoying', isCorrect: true},
      ],
    },
    {
      id: 6,
      Question: 'Q6 - I am seeing her ____ three Oclock.',
      Answers: [
        {Answer: 'in', isCorrect: false},
        {Answer: 'at', isCorrect: true},
        {Answer: 'on', isCorrect: false},
      ],
    },
    {
      id: 7,
      Question: 'Q7 - Easter is ___ March this year.',
      Answers: [
        {Answer: 'on', isCorrect: false},
        {Answer: 'at', isCorrect: false},
        {Answer: 'in', isCorrect: true},
      ],
    },
    {
      id: 8,
      Question: 'Q8 - She is ____ work all day today.',
      Answers: [
        {Answer: 'at', isCorrect: true},
        {Answer: 'on', isCorrect: false},
      ],
    },
    {
      id: 9,
      Question: 'Q9 - I go ___ by bus.',
      Answers: [
        {Answer: 'home', isCorrect: true},
        {Answer: 'to home', isCorrect: false},
      ],
    },
    {
      id: 10,
      Question: 'Q10 - Do you like it?',
      Answers: [
        {Answer: 'Yes,I like', isCorrect: false},
        {Answer: 'Yes,I do', isCorrect: true},
      ],
    },
    {
      id: 11,
      Question: 'Q11 - How ___ did your journey take?',
      Answers: [
        {Answer: 'long', isCorrect: true},
        {Answer: 'long time', isCorrect: false},
        {Answer: 'very long time', isCorrect: false},
      ],
    },
    {
      id: 12,
      Question: 'Q12 - He comes ____ the north of the country.',
      Answers: [
        {Answer: 'from to', isCorrect: false},
        {Answer: 'to', isCorrect: false},
        {Answer: 'from', isCorrect: true},
      ],
    },
    {
      id: 13,
      Question: 'Q13 - She ____ goodbye.',
      Answers: [
        {Answer: 'said', isCorrect: true},
        {Answer: 'told', isCorrect: false},
        {Answer: 'spoke', isCorrect: false},
      ],
    },
    {
      id: 14,
      Question: 'Q14 - They are ___ love.',
      Answers: [
        {Answer: 'at', isCorrect: false},
        {Answer: 'in', isCorrect: true},
        {Answer: 'on', isCorrect: false},
      ],
    },
    {
      id: 15,
      Question: 'Q15 - You _____ drink and drive.',
      Answers: [
        {Answer: 'may', isCorrect: false},
        {Answer: 'may not', isCorrect: false},
        {Answer: 'must not', isCorrect: true},
      ],
    },
    {
      id: 16,
      Question: 'Q16 - She is studying law ____ university.',
      Answers: [
        {Answer: 'at', isCorrect: true},
        {Answer: 'on', isCorrect: false},
        {Answer: 'in', isCorrect: false},
      ],
    },
    {
      id: 17,
      Question: 'Q17 - The bus stopped ___ the traffic lights.',
      Answers: [
        {Answer: 'on', isCorrect: false},
        {Answer: 'in', isCorrect: false},
        {Answer: 'at', isCorrect: true},
      ],
    },
    {
      id: 18,
      Question: 'Q18 - She ____ English twice a week.',
      Answers: [
        {Answer: 'study', isCorrect: false},
        {Answer: 'studies', isCorrect: true},
        {Answer: 'studys', isCorrect: false},
      ],
    },
    {
      id: 19,
      Question: 'Q19 - ____ is it?',
      Answers: [
        {Answer: 'whos', isCorrect: false},
        {Answer: 'whose', isCorrect: true},
        {Answer: 'who', isCorrect: false},
      ],
    },
    {
      id: 20,
      Question: 'Q20 - ___ you afford it?',
      Answers: [
        {Answer: 'do', isCorrect: false},
        {Answer: 'can', isCorrect: true},
        {Answer: 'did', isCorrect: false},
      ],
    },
  ]
  // Define states using the `useState` hook
  const [isEnglish, setLanguage] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  // Define a function to handle the user's response to a question
  const handleAnswerResponse = isCorrect => {
    // If the answer is correct, increase the score by 5
    if (isCorrect) {
      setScore(score + 5)
    }
    // Move to the next question if available; otherwise, show the final score

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < QuestionbankEnglish.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  // Define a function to switch between Telugu and English questions
  const selectLang = () => {
    setLanguage(prevCheck => !prevCheck)
    setCurrentQuestion(0) // Reset the current question
    setScore(0) // Reset the score
    setShowScore(false) // Hide the final score
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }
  // Choose the set of questions based on the selected language
  const Questionbank = isEnglish ? QuestionbankEnglish : QuestionbankTelugu

  return (
    <div className="app-container">
      <div className="instructions">
        <h1 className="title">Language Learning App</h1>
        <p className="description">
          a digital platform designed to help individuals acquire proficiency in
          a new language or improve their existing language skills.
        </p>
        <button onClick={selectLang} className="change-button" type="button">
          Change Language
        </button>
      </div>
      <div className="app">
        {showScore ? (
          <div>
            <img
              alt="img"
              src="https://img.freepik.com/free-vector/grades-concept-illustration_114360-628.jpg?w=900&t=st=1699788713~exp=1699789313~hmac=3e3ab8f77af9f7f8ba107d2705c47e7ba78e10f3a1098265b0e0156b74e29e68"
            />
            <div className="score-section">
              You have scored {score} out of {Questionbank.length * 5}
              <>
                <button
                  className="change-button"
                  type="submit"
                  onClick={resetQuiz}
                >
                  Play Again!!
                </button>
              </>
            </div>
          </div>
        ) : (
          <div className="quiz-section">
            <p className="instruction-para question-count">
              <span>INSTRUCTIONS :</span> All questions have equal weightage.
              Every correct response gets +5 mark. There is no negative marking.
            </p>
            <div className="question-section">
              <div className="question-count">
                <span>{currentQuestion + 1}</span>/{Questionbank.length}
              </div>

              <div className="question-text">
                {Questionbank[currentQuestion].Question}
              </div>
            </div>

            <div className="answer-section">
              {Questionbank[currentQuestion].Answers.map(answer => (
                <button
                  className="option-button"
                  type="button"
                  onClick={() => handleAnswerResponse(answer.isCorrect)}
                >
                  {answer.Answer}
                </button>
              ))}
              <p className="instruction-para">
                You must answer all the MCQs correctly in order to mark your
                practice as completed.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App // Export the `App` component for use in other parts of the application

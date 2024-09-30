import { useState } from "react";
import { jsQuizz } from "./Components/Question/QuestionComponent";
import resultInitialState from "./Components/Result/ResultInitialState";
import 'tailwindcss/tailwind.css';

const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);

  if (jsQuizz.questions && jsQuizz.questions.length > 0) {
    if (currentQuestion >= 0 && currentQuestion < jsQuizz.questions.length) {
      const { question, choices, correctAnswer } = jsQuizz.questions[currentQuestion];

      const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === correctAnswer) {
          setAnswer(true);
        } else {
          setAnswer(false);
        }
      };

      const onClickNext = () => {
        setAnswerIdx(null);
        setResult((prev) =>
          answer
            ? { ...prev, score: prev.score + 5, correctAnswers: prev.correctAnswers + 1 }
            : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        );

        if (currentQuestion !== jsQuizz.questions.length - 1) {
          setCurrentQuestion((prev) => prev + 1);
        } else {
          setCurrentQuestion(0);
          setShowResult(true);
        }
      };

      return (
        <div>
          <div className="mb-quizz-margin">
            <h4>
              Question {currentQuestion + 1} of {jsQuizz.questions.length}
            </h4>
            <div>
              {question}
            </div>
          </div>
          <div>
            {choices.map((choice, index) => (
              <div
                key={index}
                className={`bg-quizz-white text-quizz-black p-quizz-padding rounded-quizz-radius mb-quizz-margin hover:bg-quizz-black hover:text-quizz-white`}
                onClick={() => onAnswerClick(choice, index)}
              >
                <p>{choice}</p>
              </div>
            ))}
          </div>
          <div>
            <button
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
              className="bg-quizz-blue text-quizz-white py-2 px-4 rounded-quizz-radius"
            >
              Previous
            </button>
            <button
              onClick={onClickNext}
              className="bg-quizz-blue text-quizz-white py-2 px-4 rounded-quizz-radius"
            >
              Next
            </button>
          </div>
        </div>
      );
    } else {
      return <div>Erreur : question non trouvée</div>;
    }
  } else {
    return <div>Erreur : questions non trouvées</div>;
  }
};

export default Quizz
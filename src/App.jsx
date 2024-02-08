import React from 'react';
import './App.css'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://avatars.mds.yandex.net/i?id=db64d25bb7b3be74c128aa81a44053768cbf9408-8496994-images-thumbs&n=13" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const progress = Math.round(step / questions.length * 100); 
  return (
    <>
      <div className="progress">
        <div style={{ width: `${progress}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))}
      </ul>
    </>
  );
}

function App() {
  const [step, SetStep] = React.useState(0);
  const [correct, SetCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => 
  {
    SetStep(step + 1);
    if (question.correct === index){
      SetCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? 
        (<Game step={step} question={question} onClickVariant={onClickVariant}/>): 
        (<Result correct={correct}/>)
      }
    </div>
  );
}

export default App;
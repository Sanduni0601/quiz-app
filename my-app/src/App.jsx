import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Dash from "./components/Dash"; 

function App() {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [startGame, setStartGame] = useState(false); // State to track if the game started

  const data = [
    {
      id: 1,
      question: "What does the acronym 'DNS' stand for in networking?",
      answers: [
        { text: "Dynamic Network System", correct: false },
        { text: "Domain Name System", correct: true },
        { text: "Data Network Source", correct: false },
        { text: "Distributed Network Services", correct: false },
      ],
    },
    {
      id: 2,
      question: "Which of the following is a core component of the Agile methodology?",
      answers: [
        { text: "Waterfall", correct: false },
        { text: "Scrum", correct: true },
        { text: "Kanban", correct: true },
        { text: "Six Sigma", correct: false },
      ],
    },
    {
      id: 3,
      question: "Which database query language is used for relational database management systems?",
      answers: [
        { text: "CQL", correct: false },
        { text: "NoSQL", correct: false },
        { text: "SQL", correct: true },
        { text: "GraphQL", correct: false },
      ],
    },
    {
      id: 4,
      question: "In the context of machine learning, what does the term 'overfitting' refer to?",
      answers: [
        { text: "The model fits too closely to the training data, causing poor generalization to new data.", correct: true },
        { text: "The model is undertrained and doesn't fit the data well.", correct: false },
        { text: "The model achieves high accuracy by using only one feature.", correct: false },
        { text: "The model is designed to handle missing data better.", correct: false },
      ],
    },
    {
      id: 5,
      question: "Which of the following is NOT a characteristic of blockchain technology?",
      answers: [
        { text: "Decentralized ledger", correct: false },
        { text: "Immutable records", correct: false },
        { text: "Centralized control", correct: true },
        { text: "Cryptography for security", correct: false },
      ],
    },
    {
      id: 6,
      question: "Which protocol is commonly used for secure communication over a network?",
      answers: [
        { text: "FTP", correct: false },
        { text: "HTTP", correct: false },
        { text: "SSH", correct: true },
        { text: "SMTP", correct: false },
      ],
    },
    {
      id: 7,
      question: "What is the purpose of a load balancer in cloud computing?",
      answers: [
        { text: "To store data in a cloud database", correct: false },
        { text: "To distribute network traffic across multiple servers", correct: true },
        { text: "To manage user authentication", correct: false },
        { text: "To encrypt data transmission", correct: false },
      ],
    },
    {
      id: 8,
      question: "What is the difference between 'deep learning' and 'machine learning'?",
      answers: [
        { text: "Deep learning uses neural networks with more layers to process data.", correct: true },
        { text: "Machine learning requires more data than deep learning.", correct: false },
        { text: "Deep learning cannot perform supervised learning.", correct: false },
        { text: "Machine learning is not part of artificial intelligence.", correct: false },
      ],
    },
    {
      id: 9,
      question: "Which of the following is the main function of an operating system?",
      answers: [
        { text: "Provide internet access", correct: false },
        { text: "Manage hardware and software resources", correct: true },
        { text: "Secure network connections", correct: false },
        { text: "Run applications directly", correct: false },
      ],
    },
    {
      id: 10,
      question: "What is the main difference between REST and SOAP web services?",
      answers: [
        { text: "REST uses XML only, while SOAP supports both XML and JSON.", correct: false },
        { text: "REST is stateless, while SOAP requires the server to maintain state.", correct: false },
        { text: "SOAP is more lightweight compared to REST.", correct: false },
        { text: "REST is more lightweight compared to SOAP.", correct: true },
      ],
    },
    {
      id: 11,
      question: "In containerization, which of the following is a tool commonly used for managing containers?",
      answers: [
        { text: "Docker", correct: true },
        { text: "Kubernetes", correct: true },
        { text: "Apache Hadoop", correct: false },
        { text: "Nginx", correct: false },
      ],
    },
    {
      id: 12,
      question: "Which type of attack is a Distributed Denial of Service (DDoS) attack?",
      answers: [
        { text: "Man-in-the-middle attack", correct: false },
        { text: "Denial of service attack", correct: true },
        { text: "Phishing attack", correct: false },
        { text: "SQL injection", correct: false },
      ],
    },
    {
      id: 13,
      question: "What does 'big data' refer to?",
      answers: [
        { text: "Large amounts of data that are difficult to process with traditional methods.", correct: true },
        { text: "Data with no value or application in any context.", correct: false },
        { text: "Data stored in small databases.", correct: false },
        { text: "Only structured data stored in relational databases.", correct: false },
      ],
    },
    {
      id: 14,
      question: "In software development, what is a version control system (VCS) used for?",
      answers: [
        { text: "To track and manage changes to software code.", correct: true },
        { text: "To manage users' access rights to applications.", correct: false },
        { text: "To create backups of software projects.", correct: false },
        { text: "To manage database schemas.", correct: false },
      ],
    },
    {
      id: 15,
      question: "Which programming language is commonly used for data science and machine learning tasks?",
      answers: [
        { text: "Java", correct: false },
        { text: "C#", correct: false },
        { text: "Python", correct: true },
        { text: "Swift", correct: false },
      ],
    },
];


  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    if (questionNumber > 1) {
      const earnedAmount = moneyPyramid.find((m) => m.id === questionNumber - 1)?.amount;
      if (earnedAmount) {
        setEarned(earnedAmount);
      }
    }
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!startGame ? (
        <Start setStartGame={setStartGame} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setTimeOut={setTimeOut} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Dash
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

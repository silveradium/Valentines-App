"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const defaultImage = "/images/bubududu2.jpg";

export const questions = [
  {
    id: "q1",
    type: "yesno",
    question: "Sorry to interupt you but there has been a crime in the neighborhood...",
    image: "anya-spy.jpg",
    answers: [
      { label: "Omg, what is it?!", value: "yes", next: "q2", reaction: "" },
      { label: "Okay... so?", value: "no", next: "q2", reaction: "" },
    ],
  },
  {
    id: "q2",
    type: "yesno",
    question: "I have been assigned as the detective and I need your help😎",

    image: "anya-spy2.jpg",
    answers: [
      { label: "What do you need?", value: "yes", next: "q3", reaction: "Thank you!" },
      { label: "I'm too sleepy for this -_-", value: "no", next: "q3", reaction: "Oh please I need your help" },
    ],
  },
  {
    id: "q3",
    type: "yesno",
    question: "So I want you to answer some very important questions which will lead me straight to the criminal! Will you help me? 🥺",
    image: "anya-spy3.jpg",
    answers: [
      { label: "Yes, of course!", value: "yes", next: "q4", reaction: "okay lets get to it" },
      { label: "ok.", value: "no", next: "q4", reaction: "Yayy thank you so muchh" },
    ],
  },
  {
    id: "q4",
    type: "yesno",
    question: "Okay so shall we start, but remember answer them carefully, you only get one chance",
    image: "anya-spy3.jpg",
    answers: [
      { label: "Okay lets go", value: "yes", next: "q5", reaction: "hehe😏" },
      { label: "can we finish this already", value: "no", next: "q5", reaction: "🙄" },
    ],
  },
  {
    id: "q5",
    type: "choice",
    question: "First question, What do you think about your boypend?😒",
    options: ["He's the best bf ever", "I miss himmm", "Do I have one atp?", "he's dumb"],
    image: "bubu-cute.jpg",
  },
  {
    id: "q6",
    type: "choice",
    question: "Do you think he loves you?",
    options: ["no.", "I hate him", "Yess he loves me very much", "pft"],
    image: "bubu-consider.jpg",
  },
  {
    id: "q7",
    type: "choice",
    question: "If your boypend was a potato, what kind would he be?",
    options: ["Sweet potato 🍠 (obviously)", "I hate him", "Fries (hot)", "Raw. Needs improvement."],
    image: "bubu-cool2.jpg",
  },
  {
    id: "q8",
    type: "choice",
    question: "On a scale of 1 to 10 how much would you rate him?",
    options: ["10/10, couldn't ask for better", "I hate him", "0", "can i go negative?"],
    image: "bubu-smirk.jpg",
  },
  {
    id: "q9",
    type: "text",
    question: "Ok so how much do you hate him?",
    image: "anya-judging2.jpg",
  },
    {
    id: "q10",
    type: "choice",
    question: "Do you know that he loves you very much, and tries really hard:(",
    options: ["bro needs to try harder", "yes, i know..but still i feel lonely", "hmm", "i appreciate him tho"],
    image: "bubu-sad.jpg",
  },
      {
    id: "q11",
    type: "choice",
    question: "Ok now. what's his faviourite saying?",
    options: ["It maybe stormy now, but it can never rain forever", "cross the bridge when you get to it", "never give up", "Behind every great man is a woman rolling her eyes"],
    image: "anya-judging.jpg",
  },
  {
    id: "q12",
    type: "text",
    question: "Anything you want him to know?...something nice maybe? :) he wont see this....or will he?",
    image: "bubu-cute.jpg",
  },
  {
    id: "q13",
    type: "statement",
    question: "Ohh, it seems the criminal has been caught! Thank you so much for your help.",
    image: "alert.jpg",
  },
  {
    id: "q14",
    type: "statement",
    question: "It has been confirmed that the culprit is a woman that goes by the name 'Nethu Lamahewa'.",
    image: "nethu_L.png",
  },
  {
    id: "q15",
    type: "statement",
    question: "She has been charges for the following acts, \n 1. being too cute, \n 2. being too pretty, \n 3. being too sexy, \n 4. putting up with her boypends bs for so long, \n 5. hopefully being nice to me again 🤧 ",
    image: "nethu_L2.png",
  },
    {
    id: "q16",
    type: "statement",
    question: "ok, ok now jokes now that the criminal has been caught,.... I just want to say that I'm always sorry for everything I did, for not being able to give much attention for a long time, getting mad all the time and saying mean things and overall not being a good bf for a while now.",
    image: "bubu-sad2.jpg",
  },
  {
    id: "q17",
    type: "statement",
    question: "But I'm always trying hard to manage everything and still be with you whenever possible. And I do appreciate yourside of it too.",
    image: "bubu-sad2.jpg",
  },
  {
    id: "q18",
    type: "statement",
    question: "Anyways thats all, thank you for taking the time to answer everything.",
    image: "bubu-cute.jpg",
  },
  {
    id: "q19",
    type: "statement",
    question: "....",
    image: "bubu-cute.jpg",
  },
  {
    id: "q20",
    type: "statement",
    question: "..",
    image: "bubu-cute.jpg",
  },
  {
    id: "q21",
    type: "statement",
    question: "....or maybe its not over.",
    image: "bubu-smirk.jpg",
  },
  {
    id: "q22",
    type: "statement",
    question: "....so there' actually one more question.",
    image: "bubu-embarassed.jpg",
  },
  {
    id: "q23",
    type: "statement",
    question: "I know its already so late but...",
    image: "bubu-consider.jpg",
  },
  {
    id: "q24",
    type: "statement",
    question: "umm....",
    image: "bubu-cute.jpg",
  },
  {
    id: "q25",
    type: "final",
    question: "Will you be my Valentine? 💖",
    image: "bubududu.jpg",
    answers: [
      { label: "Yes 💕", value: "yes", next: null, reaction: "Yay!! 💖" },
      { label: "No 😢", value: "no", next: null, reaction: "bwahahahaa, i knew youd say yes 💞" },
    ],
  },
];

export default function Home() {
  const [currentId, setCurrentId] = useState(questions[0]?.id ?? null);
  const [textAnswer, setTextAnswer] = useState("");
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [stage, setStage] = useState("question");
  const [isFadedIn, setIsFadedIn] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoverNoAsYes, setHoverNoAsYes] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const audioRef = useRef(null);

  const currentQuestion = questions.find((q) => q.id === currentId);
  const isComplete = !currentQuestion;
  const isYesNoSection = currentQuestion?.type === "yesno";
  const musicSrc = isYesNoSection ? "/audio/mystery.mp3" : "/audio/boba-date.mp3";
  const mainThemeClass = isYesNoSection
    ? "bg-[#120f1a] text-[#f5f1ff]"
    : "bg-pink-100 text-[#6b4b3e]";

  const getNextIdByOrder = (id) => {
    const index = questions.findIndex((q) => q.id === id);
    if (index === -1) return null;
    return questions[index + 1]?.id ?? null;
  };


  const progressLabel = useMemo(() => {
    if (isComplete) return "All done!";
    return `Question ${Object.keys(answers).length + 1} of ${questions.length}`;
  }, [answers, isComplete]);

  const answerSummary = useMemo(() => {
    return questions
      .map((q) => {
        const answer = answers[q.id] ?? "(no answer)";
        const prettyAnswer =
          answer === "yes" ? "Yes" : answer === "no" ? "No" : answer;
        return `${q.question} ${prettyAnswer}`;
      })
      .join("\n");
  }, [answers]);

  const handleYesNo = (answer) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer.value }));
    setFeedback(answer.reaction || "");
    setIsFadedIn(false);
    setTimeout(() => {
      setStage("reaction");
      setIsFadedIn(true);
    }, 350);

    setTimeout(() => {
      setIsFadedIn(false);
    }, 1200);

    setTimeout(() => {
      setStage("question");
      setFeedback("");
      setIsFadedIn(true);
      setCurrentId(answer.next ?? getNextIdByOrder(currentQuestion.id));
    }, 1700);
  };

  const handleChoice = (value) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    setCurrentId(getNextIdByOrder(currentQuestion.id));
  };

  const handleTextSubmit = () => {
    if (!currentQuestion) return;
    if (!textAnswer.trim()) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: textAnswer.trim() }));
    setTextAnswer("");
    setCurrentId(getNextIdByOrder(currentQuestion.id));
  };

  const handleStatementNext = () => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: "seen" }));
    setCurrentId(getNextIdByOrder(currentQuestion.id));
  };

  const handleRestart = () => {
    setCurrentId(questions[0]?.id ?? null);
    setAnswers({});
    setSubmitMessage("");
    setFeedback("");
    setStage("question");
    setIsFadedIn(true);
    setTextAnswer("");
    setHoverNoAsYes(false);
    setHasSubmitted(false);
  };

  // Auto-send email when quiz is complete
  useEffect(() => {
    if (isComplete && !hasSubmitted) {
      setHasSubmitted(true);
      (async () => {
        try {
          const response = await fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answers }),
          });
          if (!response.ok) {
            console.error("Failed to send");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      })();
    }
  }, [isComplete, hasSubmitted, answers]);

  const handleToggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log("Audio play blocked:", error);
      setIsPlaying(false);
    }
  };

  const handleAudioLoaded = async () => {
    const audio = audioRef.current;
    if (!audio || !isPlaying) return;
    try {
      await audio.play();
    } catch (error) {
      console.log("Audio play blocked:", error);
      setIsPlaying(false);
    }
  };

  const handleSubmitResults = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      if (!response.ok) {
        console.error("Failed to send");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center gap-6 px-6 py-12 ${mainThemeClass}`}>
      <audio
        ref={audioRef}
        src={musicSrc}
        autoPlay
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={handleAudioLoaded}
      />
      <button
        onClick={handleToggleMusic}
        className="text-sm underline decoration-pink-300 hover:decoration-pink-500"
      >
        {isPlaying ? "Pause music" : "Play music"}
      </button>

      <img
        src={isComplete ? defaultImage : `/images/${currentQuestion.image}`}
        alt="question image"
        className="w-52 h-auto"
      />

      {!isComplete ? (
        <div className="w-full flex flex-col items-center min-h-[200px]">
          {stage === "question" ? (
            <div
              className={`transition-opacity duration-500 ${
                isFadedIn ? "opacity-100" : "opacity-0"
              }`}
            >
              {currentQuestion.type !== "statement" ? (
                <h1 className="text-3xl md:text-4xl text-center mb-6">
                  {currentQuestion.question}
                </h1>
              ) : null}

              {currentQuestion.type === "yesno" || currentQuestion.type === "final" ? (
                <div
                  className={`flex flex-row gap-40 justify-center ${
                    currentQuestion.type === "final" ? "font-rubik-dirt" : ""
                  }`}
                >
                  {currentQuestion.answers.map((answer, index) => (
                    <button
                      key={answer.label}
                      onClick={() => handleYesNo(answer)}
                      onMouseEnter={
                        currentQuestion.type === "final" && answer.value === "no"
                          ? () => setHoverNoAsYes(true)
                          : undefined
                      }
                      onMouseLeave={
                        currentQuestion.type === "final" && answer.value === "no"
                          ? () => setHoverNoAsYes(false)
                          : undefined
                      }
                      className={`text-2xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-md px-6 py-3 rounded-xl ${
                        currentQuestion.type === "final"
                          ? answer.value === "yes"
                            ? "bg-green-500 text-white"
                            : hoverNoAsYes
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                          : ""
                      }`}
                    >
                      <span className="mr-2">{String.fromCharCode(97 + index)}.)</span>
                      {currentQuestion.type === "final" && answer.value === "no" && hoverNoAsYes
                        ? "Yes 💕"
                        : answer.label}
                    </button>
                  ))}
                </div>
              ) : currentQuestion.type === "choice" ? (
                <div className="flex flex-col gap-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={option}
                      onClick={() => handleChoice(option)}
                      className="text-2xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                    >
                      <span className="mr-2">{String.fromCharCode(97 + index)}.)</span>
                      {option}
                    </button>
                  ))}
                </div>
              ) : currentQuestion.type === "text" ? (
                <div className="flex flex-col gap-3 items-center">
                  <input
                    value={textAnswer}
                    onChange={(event) => setTextAnswer(event.target.value)}
                    placeholder="Type your cutest nickname..."
                    className="bg-transparent border-b border-pink-300 px-2 py-1 text-lg text-center outline-none"
                  />
                  <button
                    onClick={handleTextSubmit}
                    className="text-2xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    Next
                  </button>
                </div>
              ) : currentQuestion.type === "statement" ? (
                <div className="flex flex-col gap-4 items-center">
                  <p className="text-2xl text-center">{currentQuestion.question}</p>
                  <button
                    onClick={handleStatementNext}
                    className="text-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    Next
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <div
              className={`transition-opacity duration-500 ${
                isFadedIn ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg text-center">{feedback}</p>
            </div>
          )}
        </div>
      ) : (
        <>
          <div
            className={`transition-opacity duration-500 flex flex-col items-center gap-6 ${
              isFadedIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl text-center">
              Thank you for being my Valentine! 💖
            </h1>
            <p className="text-xl text-center">
              I love youuu. To the moon and back 🌙💖
            </p>
          </div>
          <button
            onClick={handleRestart}
            className="mt-6 text-lg underline decoration-pink-300 hover:decoration-pink-500"
          >
            Play again
          </button>
        </>
      )}
    </main>
  );
}

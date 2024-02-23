'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import useStore from '@/store/store';

// TypeScript interface for questions
interface Questions {
  [key: number]: string;
}

const questions: Questions = {
  1: "Áttu von á barni?",
  2: "Áttu von á þínu fyrsta barni?",
  3: "Fæddist barnið með keisara?",
  4: "Áttu von á einu barni?",
  5: "Ertu almennt hraust?",
  6: "Hafa skoðanir á meðgöngu verið eðlilegar?"
};

const DecisionGuide: React.FC = () => {
  const router = useRouter();
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const setBestOption = useStore((state) => state.setBestOption);

  const goToNextPage = (bestOption: number) => {
    setBestOption(bestOption);
    router.push(`/bestChoice/${bestOption}`); // Navigate to next page with dynamic route
  };

  const handleAnswer = (answer: boolean) => {
    switch (questionNumber) {

        case 1:
            if(answer){
                setQuestionNumber(2)
            }
            else{
                goToNextPage(0)
            }
            break;
        case 2:
            if(answer){
                setQuestionNumber(4)
            }
            else{
                setQuestionNumber(3)
            }
            break;
        case 3:
            if(answer){
                goToNextPage(1)
            }
            else{
                setQuestionNumber(4)
            }
            break;
        case 4:
            if(answer){
                setQuestionNumber(5)
            }
            else{
                goToNextPage(1)
            }
            break;
        case 5:
            if(answer){
                setQuestionNumber(6)
            }
            else{
                goToNextPage(2)
            }
            break;
        case 6:
            if(answer){
                goToNextPage(3)
            }
            else{
                goToNextPage(0)
            }
            break;
        default:
            setQuestionNumber(1)
    }
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
        <h1>DecisionGuide</h1>
        <h2>{questions[questionNumber]}</h2>
        <button onClick={() => handleAnswer(true)}>Já</button>
        <button onClick={() => handleAnswer(false)}>Nei</button>
        </div>
    </main>
  );
};

export default DecisionGuide;

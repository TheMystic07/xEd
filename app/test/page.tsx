'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Award, Share2 } from 'lucide-react'
import { connectWallet } from '@/utils/web3'
import Image from 'next/image'

const questions = [
  {
    question: "Which of the following is NOT a part of the female reproductive system?",
    options: ["Ovary", "Fallopian tube", "Uterus", "Prostate"],
    correctAnswer: "Prostate"
  },
  {
    question: "What is the primary function of the testes?",
    options: ["Egg production", "Sperm production", "Hormone regulation", "Urine storage"],
    correctAnswer: "Sperm production"
  },
  {
    question: "During which phase of the menstrual cycle does ovulation typically occur?",
    options: ["Follicular phase", "Luteal phase", "Menstrual phase", "Ovulatory phase"],
    correctAnswer: "Ovulatory phase"
  },
  {
    question: "Which hormone is primarily responsible for the development of male secondary sexual characteristics?",
    options: ["Estrogen", "Progesterone", "Testosterone", "Follicle-stimulating hormone"],
    correctAnswer: "Testosterone"
  },
  {
    question: "What is the average length of a typical menstrual cycle?",
    options: ["14 days", "21 days", "28 days", "35 days"],
    correctAnswer: "28 days"
  }
]

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score
    }, 0)
  }

  const score = calculateScore()
  const passingScore = Math.ceil(questions.length * 0.7)

  const handleConnectWallet = async () => {
    const signer = await connectWallet()
    if (signer) {
      setWalletConnected(true)
    }
  }

  const mintNFTCertificate = async () => {
    if (!walletConnected) {
      alert('Please connect your wallet first')
      return
    }
    // Here you would typically interact with a smart contract to mint the NFT
    console.log('Minting NFT certificate...')
    alert('NFT Certificate minted successfully!')
  }

  const shareOnX = () => {
    const text = encodeURIComponent("I just got my 'X-ually Educated' certificate from ReproEdu! #ReproductiveHealth #Education")
    const url = encodeURIComponent("https://reproedu.com")
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
  }

  if (showResults) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Test Results</CardTitle>
            <CardDescription>
              You scored {score} out of {questions.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {score >= passingScore ? (
              <div>
                <p className="text-green-600 font-bold mb-4">Congratulations! You passed the test.</p>
                <Image
                  src="/placeholder.svg"
                  alt="X-ually Educated Certificate"
                  width={600}
                  height={400}
                  className="mb-4 rounded-lg"
                />
                <div className="flex flex-wrap gap-4">
                  <Button onClick={mintNFTCertificate}>
                    <Award className="mr-2 h-4 w-4" />
                    Get NFT Certificate
                  </Button>
                  <Button onClick={shareOnX}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share on X
                  </Button>
                  {!walletConnected && (
                    <Button onClick={handleConnectWallet}>
                      Connect Wallet
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-red-600 font-bold">Unfortunately, you did not pass. Please review the course material and try again.</p>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Reproductive Biology Test</h1>
      <Card>
        <CardHeader>
          <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
          <CardDescription>{questions[currentQuestion].question}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup onValueChange={handleAnswer} value={answers[currentQuestion]}>
            {questions[currentQuestion].options.map((option, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
          <Button onClick={handleNext} className="mt-4">
            {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Test"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}


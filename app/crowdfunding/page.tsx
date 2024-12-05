'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { connectWallet } from '@/utils/web3'
import Image from 'next/image'

const campaigns = [
  {
    title: "Support for Rare Reproductive Disorders",
    description: "Help fund research and treatment for individuals with rare reproductive disorders.",
    goal: 50,
    raised: 32,
    image: "/placeholder.svg"
  },
  {
    title: "Accessible Fertility Treatments",
    description: "Make fertility treatments more accessible for low-income families.",
    goal: 100,
    raised: 75,
    image: "/placeholder.svg"
  },
  {
    title: "Teen Reproductive Health Education",
    description: "Provide comprehensive reproductive health education to teenagers in underserved communities.",
    goal: 30,
    raised: 18,
    image: "/placeholder.svg"
  }
]

export default function CrowdfundingPage() {
  const [walletConnected, setWalletConnected] = useState(false)

  const handleConnectWallet = async () => {
    const signer = await connectWallet()
    if (signer) {
      setWalletConnected(true)
    }
  }

  const handleDonate = async (campaign: string, amount: number) => {
    if (!walletConnected) {
      alert('Please connect your wallet first')
      return
    }
    // Here you would typically interact with a smart contract to process the donation
    console.log(`Donating ${amount} ETH to ${campaign}`)
    alert('Thank you for your donation!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Crowdfunding Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign, index) => (
          <Card key={index}>
            <Image
              src={campaign.image}
              alt={campaign.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{campaign.title}</CardTitle>
              <CardDescription>{campaign.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span>Raised: {campaign.raised} ETH</span>
                  <span>Goal: {campaign.goal} ETH</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  placeholder="Amount (ETH)"
                  className="w-full"
                />
                <Button onClick={() => handleDonate(campaign.title, 0.1)}>Donate</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {!walletConnected && (
        <div className="mt-6 text-center">
          <Button onClick={handleConnectWallet}>
            Connect Wallet to Donate
          </Button>
        </div>
      )}
    </div>
  )
}


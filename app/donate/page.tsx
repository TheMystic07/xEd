'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { connectWallet } from '@/utils/web3'

const ngos = [
  { name: "Reproductive Health for All", description: "Providing reproductive health education and services globally." },
  { name: "Youth Sexual Health Initiative", description: "Empowering young people with knowledge about sexual health." },
  { name: "Maternal Care Worldwide", description: "Supporting maternal health in underprivileged communities." },
]

export default function DonatePage() {
  const [amount, setAmount] = useState('')
  const [selectedNgo, setSelectedNgo] = useState('')
  const [walletConnected, setWalletConnected] = useState(false)

  const handleConnectWallet = async () => {
    const signer = await connectWallet()
    if (signer) {
      setWalletConnected(true)
    }
  }

  const handleDonate = async () => {
    if (!walletConnected) {
      alert('Please connect your wallet first')
      return
    }
    if (!amount || !selectedNgo) {
      alert('Please enter an amount and select an NGO')
      return
    }
    // Here you would typically interact with a smart contract to process the donation
    console.log(`Donating ${amount} to ${selectedNgo}`)
    alert('Thank you for your donation!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Donate to Reproductive Health NGOs</h1>
      <Card>
        <CardHeader>
          <CardTitle>Make a Donation</CardTitle>
          <CardDescription>Support organizations working to improve reproductive health globally</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="ngo">Select an NGO</Label>
              <select
                id="ngo"
                className="w-full p-2 border rounded"
                value={selectedNgo}
                onChange={(e) => setSelectedNgo(e.target.value)}
              >
                <option value="">Select an NGO</option>
                {ngos.map((ngo, index) => (
                  <option key={index} value={ngo.name}>{ngo.name}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="amount">Donation Amount (ETH)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.1"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              {!walletConnected && (
                <Button onClick={handleConnectWallet}>
                  Connect Wallet
                </Button>
              )}
              <Button onClick={handleDonate}>
                Donate
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


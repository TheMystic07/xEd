'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, Wallet } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { connectWallet } from '@/utils/web3'

export function Navbar() {
  const [walletConnected, setWalletConnected] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleConnectWallet = async () => {
    const signer = await connectWallet()
    if (signer) {
      setWalletConnected(true)
    }
  }

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className={pathname === '/' ? 'invisible' : ''}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <Link className="flex items-center justify-center ml-4" href="/">
        <BookOpen className="h-6 w-6 mr-2" />
        <span className="font-bold">ReproEdu</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/course">
          Course
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/donate">
          Donate
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/crowdfunding">
          Crowdfunding
        </Link>
      </nav>
      {!walletConnected && (
        <Button onClick={handleConnectWallet} className="ml-4">
          <Wallet className="h-4 w-4 mr-2" />
          Connect Wallet
        </Button>
      )}
    </header>
  )
}


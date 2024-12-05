import { ethers } from 'ethers'

export async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      console.log("Wallet connected")
      return signer
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  } else {
    console.error("Metamask is not installed")
  }
}

// Add more Web3 functions here as needed


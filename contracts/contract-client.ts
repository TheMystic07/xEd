import { ethers, ContractTransaction, BrowserProvider, Contract } from 'ethers';
import abi from './abi.json';

declare global {
  interface Window {
    ethereum?: any;
  }
}

// Types for contract interaction
export interface CertificateMetadata {
  name: string;
  score: number;
}

export interface DonationMetadata {
  name: string;
  amount: string;
}

export interface ContractStats {
  totalCertificates: number;
  totalDonations: number;
}

export interface TransactionResponse {
  hash: string;
  wait: () => Promise<any>;
}

export class EduPlatformService {
  private provider: BrowserProvider | null = null;
  private contract: Contract | null = null;
  private contractAddress: string;

  constructor(contractAddress: string) {
    this.contractAddress = contractAddress;
  }

  public async initialize(): Promise<void> {
    if (typeof window.ethereum === 'undefined') {
      throw new Error('Please install MetaMask to use this application');
    }

    this.provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await this.provider.getSigner();
    this.contract = new ethers.Contract(
      this.contractAddress,
      abi,
      signer
    );
  }

  public async isContractOwner(): Promise<boolean> {
    if (!this.contract) throw new Error('Contract not initialized');
    
    const signer = await this.provider!.getSigner();
    const owner = await this.contract.owner();
    return (await signer.getAddress()) === owner;
  }

  public async mintCertificate(
    studentWallet: string,
    studentName: string,
    score: number
  ): Promise<string> {
    if (!this.contract) throw new Error('Contract not initialized');

    const tx = await this.contract.mintCourseCertificate(
      studentWallet,
      studentName,
      score
    ) as TransactionResponse;
    await tx.wait();
    return tx.hash;
  }

  public async makeDonation(donorName: string, amount: number): Promise<string> {
    if (!this.contract) throw new Error('Contract not initialized');

    const tx = await this.contract.donate(donorName, {
      value: ethers.parseEther(amount.toString())
    }) as TransactionResponse;
    await tx.wait();
    return tx.hash;
  }

  public async withdrawDonations(recipientAddress: string): Promise<string> {
    if (!this.contract) throw new Error('Contract not initialized');

    const tx = await this.contract.withdrawDonations(recipientAddress) as TransactionResponse;
    await tx.wait();
    return tx.hash;
  }

  public async getCertificateDetails(tokenId: number): Promise<CertificateMetadata> {
    if (!this.contract) throw new Error('Contract not initialized');

    const [name, score] = await this.contract.getCertificateMetadata(tokenId);
    return {
      name,
      score: Number(score)
    };
  }

  public async getDonationDetails(tokenId: number): Promise<DonationMetadata> {
    if (!this.contract) throw new Error('Contract not initialized');

    const [name, amount] = await this.contract.getDonationMetadata(tokenId);
    return {
      name,
      amount: ethers.formatEther(amount)
    };
  }

  public async getContractStats(): Promise<ContractStats> {
    if (!this.contract) throw new Error('Contract not initialized');

    const [totalCertificates, totalDonations] = await Promise.all([
      this.contract.getTotalCertificates(),
      this.contract.getTotalDonations()
    ]);

    return {
      totalCertificates: Number(totalCertificates),
      totalDonations: Number(totalDonations)
    };
  }

  public async subscribeToEvent(
    eventName: string,
    callback: (...args: any[]) => void
  ): Promise<void> {
    if (!this.contract) throw new Error('Contract not initialized');

    this.contract.on(eventName, callback);
  }

  public async unsubscribeFromEvent(
    eventName: string,
    callback: (...args: any[]) => void
  ): Promise<void> {
    if (!this.contract) throw new Error('Contract not initialized');

    this.contract.off(eventName, callback);
  }
}
import { useState, useEffect } from 'react';

interface WalletState {
  account: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  chainId: number | null;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    account: null,
    isConnected: false,
    isConnecting: false,
    chainId: null,
  });

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('MetaMask not detected! Please install MetaMask to connect your wallet.');
      return;
    }

    try {
      setWalletState(prev => ({ ...prev, isConnecting: true }));

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const chainId = await window.ethereum.request({
        method: 'eth_chainId',
      });

      setWalletState({
        account: accounts[0],
        isConnected: true,
        isConnecting: false,
        chainId: parseInt(chainId, 16),
      });

    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setWalletState(prev => ({ 
        ...prev, 
        isConnecting: false 
      }));
    }
  };

  const disconnectWallet = () => {
    setWalletState({
      account: null,
      isConnected: false,
      isConnecting: false,
      chainId: null,
    });
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Check if already connected on load
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_accounts',
          });

          if (accounts.length > 0) {
            const chainId = await window.ethereum.request({
              method: 'eth_chainId',
            });

            setWalletState({
              account: accounts[0],
              isConnected: true,
              isConnecting: false,
              chainId: parseInt(chainId, 16),
            });
          }
        } catch (error) {
          console.error('Failed to check wallet connection:', error);
        }
      }
    };

    checkConnection();

    // Listen for account changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnectWallet();
        } else {
          setWalletState(prev => ({
            ...prev,
            account: accounts[0],
            isConnected: true,
          }));
        }
      });

      window.ethereum.on('chainChanged', (chainId: string) => {
        setWalletState(prev => ({
          ...prev,
          chainId: parseInt(chainId, 16),
        }));
      });
    }

    // Cleanup listeners
    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners('accountsChanged');
        window.ethereum.removeAllListeners('chainChanged');
      }
    };
  }, []);

  return {
    ...walletState,
    connectWallet,
    disconnectWallet,
    formatAddress: walletState.account ? formatAddress(walletState.account) : null,
  };
};
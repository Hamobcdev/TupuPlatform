import React from 'react';
import { useWallet } from '../hooks/useWallet';

export const WalletButton: React.FC = () => {
  const { 
    isConnected, 
    isConnecting, 
    formatAddress, 
    connectWallet, 
    disconnectWallet 
  } = useWallet();

  if (isConnected && formatAddress) {
    return (
      <div className="flex items-center space-x-2">
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          {formatAddress}
        </div>
        <button
          onClick={disconnectWallet}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={connectWallet}
      disabled={isConnecting}
      className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-4 py-2 rounded-md text-sm transition-colors flex items-center space-x-2"
    >
      {isConnecting ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
          <span>Connecting...</span>
        </>
      ) : (
        <span>Connect Wallet</span>
      )}
    </button>
  );
};
import { useState } from "react"
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"
import { Wallet, HDNodeWallet } from "ethers";
import './App.css';

const WalletContainer = ({ children }) => (
  <div className="wallet-container">
    {children}
  </div>
);

const AddressDisplay = ({ address, type }) => (
  <div className="address-item">
    <span className="address-type">{type}</span>
    <span className="address-value">{address}</span>
  </div>
);

export function SolanaWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);

    return <WalletContainer>
        <h2 className="wallet-title">Solana Wallet</h2>
        <button className="wallet-button solana-button" onClick={function() {
            const seed = mnemonicToSeed(mnemonic);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);
            setCurrentIndex(currentIndex + 1);
            setPublicKeys([...publicKeys, keypair.publicKey]);
        }}>
            Add Solana Wallet
        </button>
        <div className="addresses-list">
            {publicKeys.map((p, index) => 
                <AddressDisplay 
                    key={index} 
                    type="SOL" 
                    address={p.toBase58()} 
                />
            )}
        </div>
    </WalletContainer>
}

export const EthWallet = ({mnemonic}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);

    return (
        <WalletContainer>
            <h2 className="wallet-title">Ethereum Wallet</h2>
            <button className="wallet-button eth-button" onClick={async function() {
                const seed = await mnemonicToSeed(mnemonic);
                const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
                const hdNode = HDNodeWallet.fromSeed(seed);
                const child = hdNode.derivePath(derivationPath);
                const privateKey = child.privateKey;
                const wallet = new Wallet(privateKey);
                setCurrentIndex(currentIndex + 1);
                setAddresses([...addresses, wallet.address]);
            }}>
                Add ETH Wallet
            </button>
            <div className="addresses-list">
                {addresses.map((p, index) => 
                    <AddressDisplay 
                        key={index} 
                        type="ETH" 
                        address={p} 
                    />
                )}
            </div>
        </WalletContainer>
    )
}

// Create a default export for the App component
export default function App() {
    const [mnemonic, setMnemonic] = useState("");
    
    return (
        <div className="app-container">
            <h1>Crypto Wallet Generator</h1>
            <div className="mnemonic-input-container">
                <label htmlFor="mnemonic-input">Enter your mnemonic phrase:</label>
                <input 
                    id="mnemonic-input"
                    className="mnemonic-input"
                    type="text" 
                    placeholder="Enter your 12 or 24 word seed phrase"
                    value={mnemonic}
                    onChange={(e) => setMnemonic(e.target.value)}
                />
            </div>
            {mnemonic && (
                <div className="wallets-container">
                    <SolanaWallet mnemonic={mnemonic} />
                    <EthWallet mnemonic={mnemonic} />
                </div>
            )}
        </div>
    );
}
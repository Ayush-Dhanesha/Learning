export function Airdrop() {
    const wallet =useWallet()
    alert(wallet.publicKey.toString())
    return (
        <div>
            <input type="text" placeholder="Amount"></input>
            <button>Submit</button>
        </div>
    )
}
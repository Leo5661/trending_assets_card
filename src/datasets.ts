import { CardType } from "./interface/CardType"

export const DataSets: CardType[] = [
    {
        logo: "bsv.png",
        name: "Bitcoin(BTC)",
        price: "31,812.80",
        changePercent: +10,
        tvl: "60,000",
        pairings: [
            "sol.png",
            "eth.png",
            "bnb.png"
        ]   
    },
    {
        logo: "sol.png",
        name: "Solana(SOL)",
        price: "32.83",
        changePercent: -12.32,
        tvl: "60,000",
        pairings: [
            "bsv.png",
            "eth.png",
            "bnb.png"
        ]   
    },
    {
        logo: "eth.png",
        name: "Ethereum(ETH)",
        price: "1466.46",
        changePercent: -11.93,
        tvl: "60,000",
        pairings: [
            "sol.png",
            "bsv.png",
            "bnb.png"
        ]   
    },
    {
        logo: "bnb.png",
        name: "Binance USD(BUSD)",
        price: "1.00",
        changePercent: +0.26,
        tvl: "60,000",
        pairings: [
            "sol.png",
            "eth.png",
            "bnb.png"
        ]   
    },
    {
        logo: "shib.png",
        name: "Shiba Inu(SHIB)",
        price: "0.000000001948",
        changePercent: -8.1,
        tvl: "60,000",
        pairings: [
            "sol.png",
            "eth.png",
            "bnb.png"
        ]   
    }
]
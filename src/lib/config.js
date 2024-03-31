
export const DAPP_URL = "http://prime-ape.com";
export const DAPP_TITLE = "PrimeApe Farms & Pools";

export const networkChainId = 369;

export const MASTERCHEF_ADDRESS = "0xDf2DF8c17423415E4Cc269075f42D5D455092D73";
export const NATIVE_TOKEN_ADDRESS = "0xA1077a294dDE1B09bB078844df40758a5D0f9a27"; //WPLS
export const FARM_TOKEN_ADDRESS = "0xC6B28B2E3Bf9fF26299D540a4D654F7ade4dFdB0"; //Yield
export const STABLECOIN_ADDRESS = "0xefD766cCb38EaF1dfd701853BFCe31359239F305"; //DAI
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const DEAD_ADDRESS = "0x000000000000000000000000000000000000dEaD";

//PulseX V1
export let PULSEX_V1_FACTORY_ADDRESS = "0x1715a3E4A142d8b698131108995174F37aEBA10D";
export let PULSEX_V1_ROUTER_ADDRESS = "0x98bf93ebf5c380C0e6Ae8e192A7e2AE08edAcc02";

//PulseX V2
export let PULSEX_V2_FACTORY_ADDRESS = "0x29ea7545def87022badc76323f373ea1e707c523";
export let PULSEX_V2_ROUTER_ADDRESS = "0x165C3410fC91EF562C50559f7d2289fEbed552d9";

//DEXTOP


export const Oracles = {
    PULSEX_V1: 0,
    PULSEX_V2: 1,
    
}

export const Types = {
    Pool: 0,
    Farm: 1
}

export const DepositTypes = {
    TOKEN: 0,
    PLS: 1
}


export let farms = [
    {
        orderById: 1,
        displayName: 'Bananas/PLS v2',
        lpAbbreviation: 'LP ',
        poolId: 0,
        stakingToken: '0xd3cC40772454a1eEadd36a69e31067646C04B0cB',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/add/V2/0xC6B28B2E3Bf9fF26299D540a4D654F7ade4dFdB0/PLS',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 6,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 2,
        displayName: 'PrimeApe/PLS v2',
        lpAbbreviation: 'LP ',
        poolId: 1,
        stakingToken: '0x13B2EAf34507B51D846AC42E94d6a423196F31bf',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/add/V2/0x1Ce712b990F0Eb66e274057bea5365aCB597F038/PLS',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 6,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 3,
        displayName: 'Bananas/Atropa v2',
        lpAbbreviation: 'LP',
        poolId: 2,
        stakingToken: '0xEf3b6DF0E8126E5ad3746cA58901f16010d2daF2',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/add/V2/0xC6B28B2E3Bf9fF26299D540a4D654F7ade4dFdB0/0xCc78A0acDF847A2C1714D2A925bB4477df5d48a6',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 3,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 4,
        displayName: 'PrimeApe/Atropa v2',
        lpAbbreviation: 'LP',
        poolId: 3,
        stakingToken: '0x53E13E147BDAB43B96486A5eCaF0C0284eaD99bB',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/add/V2/0x1Ce712b990F0Eb66e274057bea5365aCB597F038/0xCc78A0acDF847A2C1714D2A925bB4477df5d48a6',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 3,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 5,
        displayName: 'Bananas/pDAI v2',
        lpAbbreviation: 'LP ',
        poolId: 4,
        stakingToken: '0x0Ca1cF18F4dFaE79a9a094CbB9f8d6a8E29B9EF9',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/add/V2/0xC6B28B2E3Bf9fF26299D540a4D654F7ade4dFdB0/0x6B175474E89094C44Da98b954EedeAC495271d0F',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 3,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    
    {
        orderById: 6,
        displayName: 'PrimeApe/pDAI v2',
        lpAbbreviation: 'LP',
        poolId: 5,
        stakingToken: '0x5ED7fd86b516c5863DB8b37219dF295A341d6586',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/add/V2/0x1Ce712b990F0Eb66e274057bea5365aCB597F038/0x6B175474E89094C44Da98b954EedeAC495271d0F',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 3,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 1,
        displayName: 'pDAI ',
        lpAbbreviation: 'pDAI',
        poolId: 6,
        stakingToken: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/?outputCurrency=0x6B175474E89094C44Da98b954EedeAC495271d0F',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 5,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Pool,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 2,
        displayName: 'Atropa ',
        lpAbbreviation: 'Atropa',
        poolId: 7,
        stakingToken: '0xCc78A0acDF847A2C1714D2A925bB4477df5d48a6',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/?outputCurrency=0xCc78A0acDF847A2C1714D2A925bB4477df5d48a6',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 5,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Pool,
        oracle: Oracles.PULSEX_V2
    },
     
    {
        orderById: 3,
        displayName: 'pHEX ',
        lpAbbreviation: 'pHEX',
        poolId: 8,
        stakingToken: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/?outputCurrency=0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Pool,
        oracle: Oracles.PULSEX_V1
    },

    {
        orderById: 4,
        displayName: 'pWBTC ',
        lpAbbreviation: 'pWBTC',
        poolId: 9,
        stakingToken: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/?outputCurrency=0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Pool,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 5,
        displayName: 'E.WBTC ',
        lpAbbreviation: 'E.WBTC',
        poolId: 10,
        stakingToken: '0xb17D901469B9208B17d916112988A3FeD19b5cA1',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/?outputCurrency=0xb17D901469B9208B17d916112988A3FeD19b5cA1',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Pool,
        oracle: Oracles.PULSEX_V1
    },

    {
        orderById: 6,
        displayName: 'Abyss ',
        lpAbbreviation: 'Abyss',
        poolId: 11,
        stakingToken: '0x898515c05794e195b4BA11c3e4e5A6d3c2a44FeC',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0x898515c05794e195b4BA11c3e4e5A6d3c2a44FeC',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Pool,
        oracle: Oracles.PULSEX_V2
    }


]
<script>
    // core
    import { onMount } from 'svelte';
    import { defaultConfig } from 'svelte-wagmi';
    import { connection, connected, chainId, signerAddress, disconnectWagmi, WC } from 'svelte-wagmi';
    import { pulsechain } from '@wagmi/core/chains';

    // components
    import Toasts from '$components/Toasts.svelte';
    import * as toast from '$stores/toasts';

    // transitions
    import { fade } from 'svelte/transition';
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    // utilities
    import * as format from '$helpers/format';

    // assets
    import Prime_LOGO from "$lib/assets/banner.png";
    import BUY_LOGO from "$lib/assets/buy.png";
    import CHART_LOGO from "$lib/assets/chart.png";
    import MERCH_LOGO from "$lib/assets/merch.png";
    import CONNECT_LOGO from "$lib/assets/connect.png";
    import DISCONNECT_LOGO from "$lib/assets/disconnect.png";

    import TELEGRAM_ICON from '$lib/assets/telegram_icon.png';
    import TWITTER_ICON from '$lib/assets/twitter-x_icon.png';
    import "../app.pcss";

    // config
    import { DAPP_TITLE, networkChainId } from '$lib/config';

    
    // functions
    const walletConnect = async() => {
        await WC('Sign in to the app');
    }

    const injectedConnector = async() => {
        await connection();
    }

    // variables
    let connectModalOpen = false;

    // store events
    connected.subscribe((connect) => {
        if (connect) {
            connectModalOpen = false;
            toast.success('Wallet Connected!');
        }
    })

    // functions
    onMount(async() => {
        const erckit = defaultConfig({
            autoConnect: true,
            appName: 'erc.kit',
            walletConnectProjectId: 'fda9e34bf32c195e3e908d0f312e40a7',
            chains: [pulsechain]
        });
        
        await erckit.init();
    });
</script>

<!-- for mobile this moves the connect button or anything u specify using "connect-box"
for example <img src="{CONNECT_LOGO}" alt="Connect Logo" class="mx-auto h-15 w-auto mb-2 connect-box"> -->
<style>
    @media (max-width: 640px) {
        .connect-box {
            margin-left: 140px;
        }
    }
    
</style>

<svelte:head>
    <title>{DAPP_TITLE}</title>
</svelte:head>

<Toasts />

<div class="border-4 border-transparent bg-transparent-800 max-w-6xl mx-auto mb-6">
<div class="bg-transparent-700"> 
    <div class="mb-8 text-center">
        <img src="{Prime_LOGO}" class="mx-auto h-108 mb-2" alt="Banner" />   
    </div>  
    <div class="mx-auto text-center w-full md:w-fit space-x-0 md:space-x-2 space-y-1 md:space-y-0 flex flex-col md:flex-row">
        <div class="border-2 border-transparent bg-transparent-500 w-full md:w-44 ">
            {#if $connected}
                <!-- Display wallet information when connected -->
                <div class="text-[#ff66c4]">
                    <!-- Insert user's wallet information here -->
                    Connected With: {format.address($signerAddress)}
                </div>
            {:else}
                <!-- Display nothing when not connected -->
                <!-- Alternatively, you can display a message -->
                <!-- <div class="text-white">Connect Wallet</div> -->
            {/if}
        </div>
    </div>     
    <div class="mx-auto text-center w-full md:w-fit space-x-0 md:space-x-2 space-y-1 md:space-y-0 flex flex-col md:flex-row">        
        <div class="border-2 border-transparent bg-transparent-500 w-full md:w-44  ">
            <a href="https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/?outputCurrency=0xC6B28B2E3Bf9fF26299D540a4D654F7ade4dFdB0" class="block text-s text-white hover:underline">
                <img src="{BUY_LOGO}" alt="Button Logo" class="mx-auto h-20 w-auto mb-2" />                
            </a>
        </div> 
        <div class="border-2 border-transparent bg-transparent-500 w-full md:w-44  ">
            <a href="https://my-store-f0acaa.creator-spring.com/" class="block text-s text-white hover:underline">
                <img src="{MERCH_LOGO}" alt="Merch Logo" class="mx-auto h-20 w-auto mb-2" />  
            </a>
        </div>
        <div class="border-2 border-transparent bg-transparent-500 w-full md:w-44  ">
            <a href=" https://dexscreener.com/pulsechain/0xd3cc40772454a1eeadd36a69e31067646c04b0cb " class="block text-s text-white hover:underline">
                <img src="{CHART_LOGO}" alt="Chart Logo" class="mx-auto h-20 w-auto mb-2" />  
            </a>
        </div>       
        <div class="border-2 border-transparent bg-transparent-500 w-full md:w-44">
            {#if !$connected}
                <button on:click={() => connectModalOpen = true} class="block text-s text-white hover:underline">
                    <img src="{CONNECT_LOGO}" alt="Connect Logo" class="mx-auto h-20 w-auto mb-2 connect-box">
                </button>
            {:else}
                <button on:click={disconnectWagmi} class="block text-s text-white hover:underline">
                    <img src="{DISCONNECT_LOGO}" alt="Connect Logo" class="mx-auto h-20 w-auto mb-2 connect-box">
                </button>
            {/if}
        </div>
    </div>
    <div class="mt-8">
        {#if $chainId !== networkChainId && $connected}
            <div class="mx-auto p-2 bg-red-500 my-6 text-center max-w-2xl text-white border-4 border-red-900">
                You're not connected to the right network, switch to PulseChain
            </div>
        {/if}
        <slot />
    </div>
</div>
</div>

{#if connectModalOpen}
<div transition:fade={{ delay: 128, duration: 256 }} class="z-40 absolute top-0 left-0 insert-0  bg-black bg-opacity-50 overflow-y-auto h-screen w-full flex justify-center items-center" id="withdrawModal">
    <div class="relative opacity-inner w-4/5 md:w-1/4 text-white text-left border-4 border-black bg-gray-500">
        <div class="border-t-white border-t-4 border-l-4 border-l-white border-b-4 w-full border-r-4 border-zinc-400 p-6">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-interactive-supports-focus -->
            <div on:click={()=>connectModalOpen=false} class="absolute top-0 right-0 p-2 mr-2 cursor-pointer text-2xl" role="button">x</div>
            <div class="text-center mt-4 mb-8">
                <img src="conwall.png" alt="Connect Wallet" class="mx-auto">
            </div>
            
            <div class="text-s mb-1 flex justify-between">

            </div>
            <div class="space-y-1">

            
                <div class="border-2 border-gray bg-gray-500">
                    <button 
                     on:click={walletConnect} 
                      class="border-b-4 border-r-4 border-zinc-500 border-t-gray border-t-4 border-l-4 border-l-gray p-4 rounded w-full"
                      style="background: url('wallet.png') no-repeat center center; background-size: cover; color: white;" >
                         <!-- Optional text if needed -->
                        
                       </button>
                </div>
                <div class="border-2 border-gray bg-gray-500">
                    <button 
                       on:click={injectedConnector} 
                        class="border-b-4 border-r-4 border-zinc-500 border-t-gray border-t-4 border-l-4 border-l-gray p-4 rounded w-full"
                          style="background: url('injected.png') no-repeat center center; background-size: cover; color: white;" >
                         <!-- Optional text if needed -->
                         
                     </button>
                </div>
            </div>
        </div>
    </div>
</div>
{/if}

<footer class="p-4 text-center mb-8 bg-transparent-800 text-[white]">
    
    <div class="mx-auto flex items-center justify-center">
        <a href="https://twitter.com/PrimeApe_Pulse" target="_blank" class="mx-2">
            <img src={TWITTER_ICON} class="w-16 inline" alt="Follow on Twitter" />
        </a>
        <div class="mx-2">
            &copy; Copyright <strong class="text-[#ff0099]">
                Prime Ape 
            </strong>
            <span class="mx-1">&bull;</span> <!-- Bullet separator -->
            All Rights Reserved
        </div>
        <a href="https://t.me/PrimeApePulse" target="_blank" class="mx-2">
            <img src={TELEGRAM_ICON} class="w-16 inline" alt="Join Telegram" />
        </a>
    </div>
</footer>




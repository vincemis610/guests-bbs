<script lang="ts">
	import BackInvite from "./back-invite.svelte";
	import FrontInvite from "./front-invite.svelte";
  import Cover from "./cover.svelte";
  import { MapPin, Gift } from '@lucide/svelte/icons';
  import TapHere from '../../assets/tap.png';
  import guests from '../../lib/data/guests.json' with { type: 'json' };
	import { page } from "$app/state";
	import { onMount } from "svelte";
  import { fade } from 'svelte/transition';
  import { fly } from 'svelte/transition';

  type TypeGuest = {
    to: string;
    msg: string;
    id: string;
    buttons?: boolean
  }

  let dataGest: TypeGuest | null = $state(null);
  
  let idGuest = $derived(page.url.searchParams.get('id'));
  
  onMount(() => {
    dataGest = guests.find((d) => d.id.toLocaleLowerCase() === idGuest?.toLowerCase()) || null;
    console.log(dataGest)
  })

  let flipped = $state(false);
  let open = $state(false);
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-[#4682B4]">
  <button 
    class="text-[#4682B4] bg-white rounded-md text-xs cursor-pointer p-1 mb-4 hidden"
    onclick={() => flipped = !flipped}
  >
    <img src={TapHere} alt="Tap screen" width="18"/> 
  </button>

  {#if open}
    <button 
      class="w-88 h-140 cursor-pointer perspective-distant"
      in:fade={{ duration: 1000 }}
      type="button"
      onclick={() => flipped = !flipped}
    >
      <div
        class={`relative w-full h-full duration-900 transform-3d 
        ${flipped ? 'transform-[rotateY(180deg)]' : ''}`}
      >
        <FrontInvite {dataGest}/>
        <BackInvite {dataGest}/>
      </div>
    </button>
  {:else}
    <div
      class="absolute t-20 b-20 l-20 r-20"
      out:fade={{ duration: 1000 }}
    >
      <Cover bind:isOpen={open}/>
    </div>
    
  {/if}
  
  <div 
    class={`${dataGest?.buttons ? '' : 'hidden'} text-sm flex justify-center text-white p-2 mt-10 rounded-full`}
  >
    <div class="hidden items-center">
      <div class="text-white px-2">Ubicación:</div>
      <button 
        class="cursor-pointer bg-[#F8F8FF] py-2 rounded-full" 
        onclick={() => window.open('https://maps.app.goo.gl/nnHcN69584rGGqVG6', '_blank', 'noopener,noreferrer')}
      >
        <MapPin class="w-4 h-4 mx-2 text-gray-600" strokeWidth={1}/>
      </button>
    </div>
    <div 
      class="flex items-center"
    >
      <div class="text-white px-2">Mesa de regalos:</div>
      <button 
        class="cursor-pointer bg-[#F8F8FF] py-2 rounded-full" 
        onclick={() => window.open('https://www.sears.com.mx/Mesa-de-Regalos/222672/te-invito-a-mi-baby-shower-grey', '_blank', 'noopener,noreferrer')}
      >
        <Gift class="w-4 h-4 mx-2 text-gray-600" strokeWidth={1}/>
      </button>
    </div>
  </div>
</div>


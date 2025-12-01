<script lang="ts">
	import BackInvite from "./back-invite.svelte";
	import FrontInvite from "./front-invite.svelte";
  import { MapPin, Gift } from '@lucide/svelte/icons';

  type TypeGuest = {
    to: string;
    msg: string;
    id: string;
  }

  let dataGest: TypeGuest | null = $state(null);

  import guests from '../../lib/data/guests.json' with { type: 'json' };

	import { page } from "$app/state";
	import { onMount } from "svelte";
  
  let idGuest = $derived(page.url.searchParams.get('id'));
  
  onMount(() => {
    dataGest = guests.find((d) => d.id.toLocaleLowerCase() === idGuest?.toLowerCase()) || null;
  })

  let flipped = $state(false);
  
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-[#4682B4]">
  <button 
    class="w-88 h-140 cursor-pointer perspective-distant"
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
  <div class="text-sm flex justify-center text-white p-2 mt-10 rounded-full ">
    <div class="flex items-center">
      <div class="text-white px-2">Ubicación:</div>
      <button 
        class="cursor-pointer bg-[#F8F8FF] py-2 rounded-full" 
        onclick={() => window.open('https://maps.app.goo.gl/nnHcN69584rGGqVG6', '_blank', 'noopener,noreferrer')}
      >
        <MapPin class="w-4 h-4 mx-2 text-gray-600" strokeWidth={1}/>
      </button>
    </div>
    <div class="flex items-center">
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


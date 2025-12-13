<script lang="ts">
  import Baby from '../../assets/baby.jpg';
  let { isOpen = $bindable() } = $props();

</script>  
  
<div 
  class="w-85 h-100 shadow-gray-900 shadow-xl"
>
  <div 
    class="h-full  bg-white rounded-xl"
  >
    <div class="h-[40%] bg-[#C4DAFA] rounded-t-xl flex flex-col justify-center items-center">
      <img src={Baby} alt="baby" class="w-20 rounded-full border-2 border-[#4D82BC]"/>
      <p class="text-sm pt-2">Einar Dariel</p>
    </div>
    <div class="rounded-b-xl text-sm flex flex-col justify-center items-center py-5 px-5 text-[#005187]">
      <p class="italic">"Con inmensa alegria, mis papis</p>
      <p class="text-md py-2 font-semibold">Vicente y Greyci</p>
      <p class="italic">tienen el honor de invitarles </p>
      <p class="italic">a celebrar mi proxima llegada."</p>
      <button
        onclick={() => isOpen = true}
        class="py-2 px-3 bg-[#4682B4] text-sm text-white rounded-md mt-8 cursor-pointer"
      >
        Abrir y hacer clic en la invitación
      </button>
    </div>
    
  </div>
</div>
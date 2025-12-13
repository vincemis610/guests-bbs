<script lang="ts">
  import BorderTop from '../../assets/borderTop.png';
  import Bbs from '../../assets/bbs1.png';

  let { dataGest } = $props();

</script>  
  
  <div 
    class="absolute w-full h-full bg-[#EEF3F6] shadow-gray-900 shadow-xl rounded-md backface-hidden"
  >
    <div class="rounded-md text-[#4682B4] h-full relative border-4 border-[#a2caea]">
      <img src={BorderTop} alt="border top" class="absolute">
      <div class="h-100 border-3 border-[#B0C4DE] mx-4 mt-28 pt-5 text-lg">
        <div class="flex justify-center mt-8">
          <p class="font-semibold px-2">Para:</p>{dataGest?.to || 'Mi Familia'}
        </div>
        <div class="justify-center hidden">
          <p class="font-semibold px-2">De:</p>EINAR DARIEL
        </div>
        <div class="flex justify-center py-5">
          <p>Invitacion a mi:</p>
        </div> 
        <div class="flex justify-center pt-4">
          <img src={Bbs} alt="border top" class="absolute" width="300" height="auto">
        </div>
        <div class="flex justify-center w-full font-semibold pt-40">
          <p class="w-40 text-lg font-serif text-center pb-2 border-b-2 text-[#4682B4] border-b-[#B0C4DE]">¡Te esperamos!</p>
        </div>
      </div>
    </div>
  </div>
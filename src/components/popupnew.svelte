<script lang="ts">
  import Tag from "./tag.svelte";

  export let target: string;
</script>

<div
  class="card bg-white p-4 w-128 h-115 h- shadow-xl rounded-3xl"
  data-popup={target}
>
  <div class="flex items-top p-6 border-b border-gray-100">
    <img src="./assets/icons/cash.svg" alt="cash" />
    <div class=" ml-4">
      <h1 class="dark:text-white text-black-100 text-lg pb-1">
        Fastest Funds to Most Banks
      </h1>
      <p class="text-black-100 text-base">
        <span class="text-red-100 font-medium">Offline</span> (Last seen: 14:32 02.05.2023)
      </p>
    </div>
  </div>
  <div class="list-data grid grid-cols-2 justify-center">
    <div>
      <p>ID: Q4D86nMUdcR</p>
      <p>Completed trades: 439</p>
      <p>
        Feedback: 
		<Tag type="success">439</Tag>
		<Tag type="warning">0</Tag>
      </p>
      <p>Date Joined: 3 weeks</p>
      <p>Max Trade size: 41</p>
      <p>Min Trade size: 10</p>
    </div>
    <div>
      <p>Username: TIANYU111</p>
      <p>Country: Sweden</p>
      <p>Date joined: 02.05.2023</p>
      <p>Language: English</p>
      <p>Verified: Yes</p>
      <p>Trading type: Buy & Sell</p>
    </div>
    <div class="flex items-center gap-4 col-span-2 justify-self-center">
      <span class="rounded-3xl p-2 bg-black-500"
        ><img src="./assets/icons/whatsapp.svg" alt="whatsapp" /></span
      >
      <span class="rounded-3xl p-2 bg-black-500"
        ><img src="./assets/icons/telegram.svg" alt="telegram" /></span
      >
    </div>
    <div class="flex items-center col-span-2 justify-self-center">
      <p class="text-black-100">
        Information gathered from: <u class="cursor-pointer">localcoinswap</u>
      </p>
    </div>
  </div>
</div>

<style>
  .list-data > div > p {
    @apply p-2;
  }
</style>

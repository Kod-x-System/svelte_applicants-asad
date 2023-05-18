<script lang="ts">
  import { LightSwitch } from "@skeletonlabs/skeleton";
  // import FilterButton from './filterButton.svelte';
  import FilterBtn from "./filterbtn.svelte";
  // import { PopupSettings } from '@skeletonlabs/skeleton';

  import { clickOutside } from "./clickOutside";
  import Popup from "./popupnew.svelte";
  import { popup } from "@skeletonlabs/skeleton";
  import type { PopupSettings } from "@skeletonlabs/skeleton";
  const tablePopup: PopupSettings = {
    event: "click",
    target: "tablePopup",
    placement: "right",
  };
  let listColumn: Array<any> = [
    {
      id: "1",
      name: "Column 1",
      selected: false,
    },
    {
      id: "2",
      name: "Column 2",
      selected: false,
    },
    {
      id: "3",
      name: "Column 3",
      selected: false,
    },
  ];
  let listFilter: Array<any> = [
    {
      id: "1",
      name: "Non KYC 1",
      selected: false,
    },
    {
      id: "2",
      name: "Non KYC 2",
      selected: false,
    },
    {
      id: "3",
      name: "Non KYC 3",
      selected: false,
    },
  ];
</script>

<div
  class="container bg-white card pt-8 mt-4 max-w-[50%] mx-auto flex flex-col justify-center items-center"
>
  <div class=" mb-8 space-y-5">
    <h1 class="h1">Tradingbro.io Application</h1>

    <div class="flex py-12 gap-4">
      Lightswitch<LightSwitch ring="ring-white" width="w-[48px]" />
    </div>

    <div>
      The figma file can be found
      <a
        class="underline"
        href="https://www.figma.com/file/elhS7rfboC3aVdUoa19lJ5/tradingbro.io-(2)?type=design&node-id=101%3A2934&t=8BraDmbdqSoVPbAr-1"
        >Here</a
      >

      <p class="">
        The tasks can be found at the readme of the repo <a href="" />
      </p>

      <p class="mt-4 mb-8 background-theme-gd">
        Fork the repo and let me know once you submitted your branch
      </p>
      <hr />
    </div>

    <h2 class="text-2xl">Button</h2>
    <div class="bg-white mb-12 gap-4 flex mr-auto border-2 p-4">
      <FilterBtn title="Filters" target="filter" data={listFilter} />
      <FilterBtn title="Columns" target="column" data={listColumn} />
    </div>

    <hr />
    <h2 class=" my-4 text-2xl">
      <button class="btn variant-filled" use:popup={tablePopup}
        >Open Popup</button
      >
    </h2>
    <Popup target={tablePopup.target} />
  </div>
</div>

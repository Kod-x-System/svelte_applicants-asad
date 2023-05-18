<script lang="ts">
  /**
    Main component for handling the filter and columns buttons across all tables 
   
    Props:
        @prop {"columnPopup | filterPopup"} target - Defines if the button should be a column or filter button
        @prop {string} title - Name to be diplayed on the button
        @prop {Array} data - List for displaying inside the popup so we don't need to create popup for filter and column seperately 

    Unused code: 
            <!-- {$_('exchanges.filters_button')} --> 
    */
  import { popup } from "@skeletonlabs/skeleton";

  import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";

  // Props
  export let target: "column" | "filter";
  export let title: string = "Placeholder";
  export let data: Array<any> = [];

  let filterPopup = {
    event: "click",
    target: target,
    placement: "bottom",
  };
</script>

<button
  class="items-center flex flex-row justify-start btn-sm min-w-[45px] hover:bg-gray-100 rounded-md border-2 dark:border-surface-600 border-[#EDF1F7] !text-base md:px-4 h-11"
  use:popup={filterPopup}
>
  <span class=" stroke-[#6C6C85] dark:stroke-slate-300 pr-2">
    <img src={`./assets/icons/${target}.svg`} alt={target} />
  </span>
  <span class="font-sans !text-[#6C6C85]">
    {title}
  </span>
</button>

<div class="card bg-white w-38 shadow-xl py-2 z-40" data-popup={target}>
  <ListBox rounded="rounded-none">
    {#each data as item}
      <ListBoxItem name="medium" value="books">
        <div class="space-y-2">
          <label class="flex items-center space-x-2">
            <input class="checkbox bg-white border-gray-50" type="checkbox" checked={item.selected} />
            <p>{item.name}</p>
          </label>
        </div>
      </ListBoxItem>
    {/each}
  </ListBox>
</div>

<style>
  input[type="checkbox"] {
    @apply border-gray-50;
  }
  input[type="checkbox"]:checked {
    @apply bg-blue-200;
  }
</style>

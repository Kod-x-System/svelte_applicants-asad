<script lang="ts">
	export let type: "success" | "warning";

    const returnType = () => {
        if (type == "success") {
            return "bg-green-100 text-green-200";
        } else if (type == "warning") {
            return "bg-red-200 text-red-100";
        }
        return 'bg-green-100 text-green-200';
    };
</script>
<!-- data-popup={target} -->
<span class={`rounded-3xl py-1 mx-1 px-4 ${returnType()}`} >
	<slot></slot>
</span>

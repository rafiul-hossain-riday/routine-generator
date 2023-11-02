<script lang="ts">
	// @ts-nocheck

	import { additionalData } from '$lib/stores';
	export let cellData = [];
</script>

<div class="flex flex-col justify-center items-center">
	{#if cellData[0]}
		<span>
			{cellData[0]}
		</span>

		{#if cellData[1]}
			<span class="text-xs">
				{cellData[1]}
			</span>
		{/if}
	{/if}
</div>

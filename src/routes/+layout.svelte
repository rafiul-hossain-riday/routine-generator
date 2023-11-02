<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	// drawer
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import DrawerComponent from '$lib/DrawerComponent.svelte';

	const drawerSettings: DrawerSettings = {
		bgDrawer: 'bg-surface-300-600-token',
		rounded: 'rounded-none'
	};
</script>

<slot />

<Drawer position="left">
	<DrawerComponent />
</Drawer>

<button
	aria-label="Side Bar"
	on:click={() => drawerStore.open(drawerSettings)}
	class="fixed top-3 right-3"
>
	<svg
		width="30"
		height="30"
		stroke-width="2"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line
			x1="3"
			y1="18"
			x2="21"
			y2="18"
		/></svg
	>
</button>

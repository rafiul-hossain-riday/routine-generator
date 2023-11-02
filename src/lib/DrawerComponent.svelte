<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { routineData, additionalData } from '$lib/stores';
	import { marked } from 'marked';

	let stringifiedRoutineData = JSON.stringify($routineData, null, 4);
	let isRoutineDataError = false;
	$: if (stringifiedRoutineData) {
		try {
			routineData.set(JSON.parse(stringifiedRoutineData));
			isRoutineDataError = false;
		} catch (error) {
			console.log('Not parsable string');
			isRoutineDataError = true;
		}
	}

	let stringifiedAdditionalData = JSON.stringify($additionalData, null, 4);
	let isAdditionalDataError = false;
	$: if (stringifiedAdditionalData) {
		try {
			additionalData.set(JSON.parse(stringifiedAdditionalData));
			isAdditionalDataError = false;
		} catch (error) {
			console.log('Not parsable string');
			isAdditionalDataError = true;
		}
	}

	marked.setOptions({
		// breaks: true,
		silent: true,
		gfm: true
	});

	let readme = '';
	fetch('README.md')
		.then((res) => res.text())
		.then((data) => (readme = data));
</script>

<div class="p-4 flex flex-col gap-4">
	<LightSwitch />

	<span>routineData :</span>
	<textarea
		bind:value={stringifiedRoutineData}
		class="textarea w-full rounded-lg p-1 {isRoutineDataError
			? 'text-error-600-300-token'
			: 'text-secondary-600-300-token'}"
		rows="10"
	/>

	<span>additionalData :</span>
	<textarea
		bind:value={stringifiedAdditionalData}
		class="textarea w-full rounded-lg p-1 {isAdditionalDataError
			? 'text-error-600-300-token'
			: 'text-secondary-600-300-token'}"
		rows="10"
	/>

	<span> README : </span>
	<section class="bg-surface-200-700-token py-1 px-2 rounded-md">
		{@html marked(readme)}
	</section>
</div>

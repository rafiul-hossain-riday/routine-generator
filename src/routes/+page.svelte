<script lang="ts">
	// @ts-nocheck

	import Cell from '$lib/Cell.svelte';
	import { routineData, additionalData } from '$lib/stores';

	const getBgColor = (cellData) => {
		if (Object.keys($additionalData.cellStyle).includes(cellData[0].split(' ')[0])) {
			return $additionalData.cellStyle[cellData[0].split(' ')[0]];
		} else {
			return '';
		}
	};

	const getColspanRowspan = (cell) => {
		let styleObj = cell.find((c) => typeof c === 'object' && !Array.isArray(c));
		return `grid-column: span ${styleObj?.colspan || 1} / span ${
			styleObj?.colspan || 1
		}; grid-row: span ${styleObj?.rowspan || 1} / span ${styleObj?.rowspan || 1};`;
	};

	const findMaxChildrenLength = () => {
		let maxNum = 0;
		for (let _i = 0; _i < $routineData.length; _i++) {
			if (maxNum < $routineData[_i].length) {
				maxNum = $routineData[_i].length;
			}
		}
		return maxNum;
	};
	findMaxChildrenLength();
</script>

<!-- <div>Hi</div> -->

<div
	class="mt-14 mb-10 mx-auto flex justify-center items-center px-2"
	style="min-width: {findMaxChildrenLength() * 100}px;"
>
	<div
		class="grid children:flex children:justify-center children:items-center mb-14"
		style="grid-template-columns: repeat({findMaxChildrenLength()}, minmax(0, 1fr));"
	>
		{#each $routineData as rows, i_rows (i_rows)}
			{#each rows as cell, i_cell (i_cell)}
				{#if cell[0] !== null && Array.isArray(cell[0])}
					<div style="{getColspanRowspan(cell)} ">
						<div class="w-full children:flex children:justify-center children:items-center">
							{#each cell.filter((c) => Array.isArray(c)) as childCell, i_childCell (i_childCell)}
								{#key $additionalData}
									<div
										class="border {$additionalData.cellClass} {(i_rows === 0 || i_cell === 0) &&
											$additionalData.firstRowColumnClass}"
										style="{getBgColor(childCell)} "
									>
										<Cell cellData={childCell} />
									</div>
								{/key}
							{/each}
						</div>
					</div>
				{:else if cell[0] !== null && !Array.isArray(cell[0])}
					{#key $additionalData}
						<div
							class="border {$additionalData.cellClass} {(i_rows === 0 || i_cell === 0) &&
								$additionalData.firstRowColumnClass}"
							style="{getColspanRowspan(cell)} {getBgColor(cell)}"
						>
							<Cell cellData={cell} />
						</div>
					{/key}
				{:else if cell[0] === null}
					{#key $additionalData}
						<div
							class="border {$additionalData.cellClass}"
							style="{getColspanRowspan(cell)} {$additionalData.errorCellStyle}"
						>
							No Class
						</div>
					{/key}
				{/if}
			{/each}
		{/each}
	</div>
</div>

<style>
	.border {
		border-color: rgb(var(--color-surface-500));
	}
	.grid {
		/* making every row equal height */
		grid-auto-rows: 1fr;
	}
</style>

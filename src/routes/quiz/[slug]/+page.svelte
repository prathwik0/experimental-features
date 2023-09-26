<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.data?.list as item, i}
	<h1>{i + 1}. {item.question}</h1>
	{#each item.options as option}
		<p>{option}</p>
	{/each}
	<hr />
{/each}

<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#each data.quizList as item}
	<a href="quiz/{item.name}">{item.name}</a>
	<hr />
{/each}

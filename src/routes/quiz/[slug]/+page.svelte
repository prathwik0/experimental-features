<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let score = 0;
	let currentQuestion = data.data?.list[0].question;
	let answerList: string[] = [];

	function submitForm() {
		for (let i = 0; i < data.data?.list.length; i++) {
			if (answerList[i] === data.data?.list[i].answer) {
				score++;
			}
		}
		alert(`Your score is ${score}`);
		currentQuestion = data.data?.list[0].question;
		score = 0;
		answerList = [];
		return;
	}

	function nextClick(i: number) {
		currentQuestion = data.data?.list[i + 1].question;
	}

	function prevClick(i: number) {
		if (currentQuestion === data.data?.list[0].question) {
			return;
		}
		currentQuestion = data.data?.list[i - 1].question;
	}

	function handleClick(e: any, index: number) {
		answerList[index] = e.target.value;
	}
</script>

{#each data.data?.list as item, i}
	{#if currentQuestion === item.question}
		<div class="flex flex-col items-center gap-4">
			<h1>{i + 1}. {item.question}</h1>
			{#each item.options as option}
				<button
					class="btn btn-ghost {answerList[i] === option ? 'btn-active' : ''}"
					value={option}
					on:click={(e) => handleClick(e, i)}>{option}</button
				>
			{/each}
			{#if i !== 0}
				<button class="btn btn-primary w-32" on:click={() => prevClick(i)}>Prev</button>
			{/if}
			{#if i !== data.data?.list.length - 1}
				<button class="btn btn-primary w-32" on:click={() => nextClick(i)}>Next</button>
			{:else}
				<button class="btn btn-primary w-32" on:click={() => submitForm()}>Submit</button>
			{/if}

			<hr />
		</div>
	{/if}
{/each}

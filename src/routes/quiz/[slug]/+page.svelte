<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let score = 0;
	let currentQuestion = 0;

	function submitForm() {
		for (let i = 0; i < data.list.length; i++) {
			if (data.answers[i].answer === data.list[i].answer) {
				score++;
			}
		}
		alert(`Your score is ${score}`);
		return;
	}

	function nextClick() {
		currentQuestion++;
	}

	function prevClick() {
		if (currentQuestion === 0) {
			return;
		}
		currentQuestion--;
	}

	function handleClick(e: any) {
		if (data.answers[currentQuestion].answered === false) {
			data.answers[currentQuestion].answered = true;
			data.answers[currentQuestion].answer = e.target.value;
		} else {
			data.answers[currentQuestion].answer = e.target.value;
			//alert('You have already answered this question');
		}
	}
</script>

<p>{JSON.stringify(data)}</p>
<p>Current question - {currentQuestion}</p>
<hr />

<div class="flex flex-col items-center gap-4">
	<h1>{currentQuestion + 1}. {data.list[currentQuestion].question}</h1>

	{#each data.answers[currentQuestion].order as i}
		<button
			class="btn btn-ghost {data.answers[currentQuestion].answer ===
			data.list[currentQuestion].options[i]
				? 'btn-active'
				: ''}"
			value={data.list[currentQuestion].options[i]}
			on:click={(e) => handleClick(e)}>{data.list[currentQuestion].options[i]}</button
		>
	{/each}

	{#if currentQuestion !== 0}
		<button class="btn btn-primary w-32" on:click={() => prevClick()}>Prev</button>
	{/if}

	{#if currentQuestion !== data.list.length - 1}
		<button class="btn btn-primary w-32" on:click={() => nextClick()}>Next</button>
	{:else}
		<button class="btn btn-primary w-32" on:click={() => submitForm()}>Submit</button>
	{/if}
</div>

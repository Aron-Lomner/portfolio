<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		message: string;
		interval?: number;
	}
	const { message, interval = 200 } = $props<Props>();
	let typed = $state('');
	function typeWright(message: string, n: number) {
		if (n >= message.length) return;
		typed = message.slice(0, n + 1);
		setTimeout(() => typeWright(message, n + 1), interval);
	}
	onMount(() => typeWright(message, 0));
</script>

<p>
	{typed}
</p>

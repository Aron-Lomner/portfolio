<script lang="ts">
	let { heading, paragraph } = $props<{ heading: string; paragraph: string }>();
</script>

<div class="bg-s mx-4 mb-8 max-w-sm overflow-hidden rounded-lg bg-base-200 shadow-md">
	<div class="px-6 py-4">
		<h3 class="mb-2 text-xl font-bold">{heading}</h3>
		<p class="text-base">{paragraph}</p>
	</div>
</div>

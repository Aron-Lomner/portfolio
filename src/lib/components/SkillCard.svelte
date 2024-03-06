<script lang="ts">
	interface Props {
		name: string;
		path: string;
	}
	let { name, path } = $props<Props>();
</script>

<div
	class="m-1 flex  flex-col items-center justify-center  bg-base-300 p-2 shadow-lg rounded-full size-24
"
>
	<img src={`/icons/${path}`} alt={name} class="mx-auto mb-2 h-8 w-8" />
	<p class="text-center text-sm font-bold">{name}</p>
</div>

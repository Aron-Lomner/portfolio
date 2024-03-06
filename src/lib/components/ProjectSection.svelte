<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<section class="bg-base-300 py-6">
	<div class="container flex flex-col items-center">
		<div class="text-center">
			<h1 class="text-5xl font-bold text-base-content m-2">Recent work.</h1>
			<p class="m-2">Here are some of the recent projects I have built for clients.</p>
		</div>

		<div class="flex flex-wrap justify-center">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	</div>
</section>

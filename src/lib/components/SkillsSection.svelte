<script lang="ts">
	import SkillCard from './SkillCard.svelte';

	export let skills = [
		{ name: 'Java', path: 'java.svg' },
		{ name: 'JavaScript', path: 'js.svg' },
		{ name: 'TypeScript', path: 'typescript.svg' },
		{ name: 'Lua', path: 'lua.svg' },
		{ name: 'Python', path: 'python.svg' },
		{ name: 'C#', path: 'csharp.svg' },
		{ name: 'GDscript', path: 'gdscript.svg' },
		{ name: 'CSS', path: 'css.svg' },
		{ name: 'HTML', path: 'html.svg' },

		{ name: 'React', path: 'react.svg' },
		{ name: 'Spring boot', path: 'sprinboot.svg' },
		{ name: 'Svelte', path: 'svelte.svg' },
		{ name: 'Flutter', path: 'flutter.svg' },
		{ name: 'React Native', path: 'react.svg' },
		{ name: 'Godot', path: 'gdscript.svg' },
		{ name: 'Git', path: 'git.svg' },
		{ name: 'Github', path: 'github.svg' },
		{ name: 'Node.js', path: 'node.svg' },
		{ name: 'Tailwind', path: 'tailwind.svg' },
		{ name: 'DaisyUI', path: 'daisyui.svg' }
	];
</script>

<div class="flex flex-col items-center justify-center p-4">
	<h1 class="my-4 text-2xl font-bold text-base-content">My skills:</h1>
	<div class="flex flex-wrap justify-center">
		{#each skills as skill}
			<SkillCard {...skill} />
		{/each}
	</div>
</div>

<script>
	import ThemeButton from './ThemeButton.svelte';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<p class="btn btn-ghost text-xl">Aron Lomner</p>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/" class="hidden sm:block">Home</a></li>
			<li><a href="/" class="hidden sm:block">About</a></li>
			<li><a href="/" class="hidden sm:block">Work</a></li>
			<li class="block sm:hidden z-20">
				<details>
					<summary> Menu </summary>
					<ul class="rounded-t-none bg-base-100 p-2">
						<li><a href="/">Home</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/work">Work</a></li>
					</ul>
				</details>
			</li>
			<ThemeButton size={25} />
		</ul>
	</div>
</div>

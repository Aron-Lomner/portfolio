<script lang="ts">
	import Typewrighter from './Typewrighter.svelte';
</script>

<div class="hero min-h-screen bg-base-300">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<img
			src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
			class="ml-auto max-w-sm rounded-lg shadow-2xl"
		/>
		<div>
			<h1 class="text-5xl font-bold">
				<Typewrighter message="Hello, I am a fullstack developer" />
			</h1>
			<p class="py-6">
				Hi, I'm Aron Lomner, I develop websites, mobile apps, and servers. I've been
				<em class="font-bold text-accent">
					Empowering Small Businesses with Custom Web Solutions.</em
				>
			</p>
			<button class=" btn btn-primary mt-2">I need a website</button>
			<button class="btn btn-primary mt-2">I need a dev</button>
			<ul class="mt-2 flex items-center">
				<li class="m-2 size-fit rounded-md bg-black p-1">
					<a href="https://github.com/Aron-Lomner" target="_blank"
						><img src="/github-logo.png" alt="github logo" class="size-10" /></a
					>
				</li>
				<li class="m-2 size-fit rounded-md">
					<a href="https://www.linkedin.com/in/aron-lomner-032643299/" target="_blank"
						><img src="/linkedin-logo.png" alt="github logo" class="h-12" /></a
					>
				</li>
			</ul>
		</div>
	</div>
</div>

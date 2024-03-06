<script>
	import ServiceCard from './ServiceCard.svelte';
	const servicesData = [
		{
			heading: 'Custom Website Development',
			paragraph:
				'Crafting bespoke websites tailored to your unique business needs. From concept to launch, we specialize in creating fully customized websites that reflect your brand identity and deliver an exceptional user experience.'
		},
		{
			heading: 'Responsive Design',
			paragraph:
				'Ensuring your website looks stunning and functions flawlessly across all devices, from desktops to smartphones. We prioritize responsive design to optimize user engagement and maximize accessibility for your target audience.'
		},
		{
			heading: 'Maintenance and Support',
			paragraph:
				"Providing ongoing maintenance and support services to keep your website running smoothly. From regular updates and security patches to troubleshooting and technical assistance, we're here to ensure your website remains secure, reliable, and up-to-date."
		},
		{
			heading: 'Custom Web Applications',
			paragraph:
				'Developing custom web applications tailored to your specific business requirements. From customer portals to internal tools, we design and build scalable web applications that streamline your processes and enhance productivity.'
		}
	];
</script>

<section class="py-12">
	<div class="container mx-auto">
		<div class="mb-8 text-center">
			<h2 class="m-2 text-3xl font-bold">My Services</h2>
			<p class="mx-2">I offer a range of services to meet your specific needs</p>
		</div>
		<div class="flex flex-wrap justify-center">
			{#each servicesData as service}
				<ServiceCard {...service} />
			{/each}
		</div>
	</div>
</section>

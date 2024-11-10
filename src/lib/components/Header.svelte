<script lang="ts">
	import Github from '$lib/icons/Github.svelte';
	import Menu from '$lib/icons/Menu.svelte';

	let toolName: string = $state('Tool Name');
</script>

<section class="bg-primary-dark container">
	<section class="flex justify-between  debug py-4 px-8">
		<section class="flex gap-10 ">
			<a href="/" class="text-3xl font-display">WEBTOOLS</a>
			<span class="mt-4 text-xl hidden tablet:block">|</span>
			<p class="mt-1.5 text-xl font-medium hidden tablet:block">{toolName}</p>
		</section>
		<section class="mt-1.5 flex gap-4">
			<Github />
		</section>
	</section>

	<section class="bg-primary-dark/70 py-4 px-8 gap-8 flex items-center tablet:hidden">
		<Menu />
		<p class="text-md font-medium">{toolName}</p>
	</section>
</section>

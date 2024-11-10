<script lang="ts">
	import Github from '$lib/icons/Github.svelte';
	import Menu from '$lib/icons/Menu.svelte';
	import { navigationPreferences } from '$lib/stores/navigation.svelte';
</script>

<section class="bg-primary-dark container">
	<section class="flex justify-between py-4 px-8">
		<section class="flex gap-10">
			<a href="/" class="text-3xl font-display">WEBTOOLS</a>
			<span class="mt-4 text-xl hidden tablet:block">|</span>
			<p class="mt-1.5 text-xl font-medium hidden tablet:block">{navigationPreferences.toolName}</p>
		</section>
		<section class="mt-1.5 flex gap-4">
			<Github />
		</section>
	</section>

	<section class=" py-4 px-8 gap-8 flex items-center tablet:hidden">
		<button onclick={() => navigationPreferences.toggleSidemenu()}>
			<Menu />
		</button>
		<p class="text-md font-medium">{navigationPreferences.toolName}</p>
	</section>
</section>

<script lang="ts">
	import Github from '$lib/icons/Github.svelte';
	import Menu from '$lib/icons/Menu.svelte';
	import Theme from '$lib/icons/theme.svelte';
	import { navigationPreferences } from '$lib/stores/navigation.svelte';

	function updateTheme(): void {
		console.log('updateTheme', localStorage.theme);
		if (localStorage.theme === 'dark') {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		} else {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		}
	}
</script>

<section class="dark:bg-primary-dark bg-primary-light">
	<section class="flex justify-between py-4 px-32">
		<section class="flex gap-10">
			<a href="/" class="text-xl mt-4 font-display">Webtools</a>
			<span class="mt-4 text-xl hidden tablet:block">|</span>
			<p class="mt-4 text-xl font-medium hidden tablet:block font-display">
				{navigationPreferences.toolName}
			</p>
		</section>
		<section class="pt-3 flex gap-12">
			<button onclick={updateTheme}>
				<Theme />
			</button>
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

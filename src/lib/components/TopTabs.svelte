<script lang="ts">
	import { page } from '$app/stores';

	interface Tab {
		name: string;
		slug: string;
	}

	const { tabs }: { tabs: Tab[] } = $props();
</script>

<section class="-mt-72 -ml-28 flex absolute">
	{#each tabs as tab}
		<a
			href={tab.slug}
			class="px-56 py-12 text-left text-sm lg:text-base {$page.params.tab === tab.slug
				? 'bg-primary-light font-medium hover:bg-primary-light  dark:bg-primary-dark hover:dark:bg-primary-dark'
				: 'font-normal hover:bg-primary-light/50 hover:dark:bg-primary-dark/10 '}"
		>
			{tab.name}
		</a>
	{/each}
</section>

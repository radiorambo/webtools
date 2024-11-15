<script lang="ts">
	import { page } from '$app/stores';

	interface Tab {
		name: string;
		routeId: string;
	}

	const { tabs }: { tabs: Tab[] } = $props();
</script>

<section class="relative w-[60vw] tablet:w-1/4 2xl:w-1/5">
	<section class="flex flex-col gap-8 sticky top-155 tablet:top-125">
		{#each tabs as tab}
			<a
				href={tab.routeId}
				class="-mr-2 ml-16 px-20 py-12 text-left text-sm lg:text-base
		{$page.route.id?.includes(tab.routeId)
					? '  bg-primary-light font-medium hover:bg-primary-light  dark:bg-primary-dark hover:dark:bg-primary-dark'
					: 'font-normal hover:bg-primary-light/50 hover:dark:bg-primary-dark/10 '}"
			>
				{tab.name}
			</a>
		{/each}
	</section>
</section>

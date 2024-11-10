<script lang="ts">
	import SidebarTab from '$lib/components/SidebarTab.svelte';
	import { navigationPreferences } from '$lib/stores/navigation.svelte';

	let { children } = $props();
	navigationPreferences.toolName = 'Text Editor';
</script>

<svelte:head>
	<title>Text Editor • Webtools</title>
	<meta name="Text Editor" content="Text editor from Webtools" />
</svelte:head>

<section class="relative">
	<div
		class=" absolute mt-80 flex transition-transform tablet:container tablet:static tablet:mx-auto tablet:transition-none {navigationPreferences.isSidemenuOpen
			? 'left-4  '
			: ' right-4  '} "
	>
		<div class=" flex w-[60vw] flex-col gap-8 tablet:w-1/4 2xl:w-1/5">
			<SidebarTab routeId="/texteditor/readme" tabName="Readme" />
			<SidebarTab routeId="/texteditor/simple" tabName="Simple Text Editor" />
			<SidebarTab routeId="/texteditor/contribute" tabName="Contribute" />
		</div>

		<!-- don't add both classes, will break layout -->

		<div
			class="{navigationPreferences.isSidemenuOpen
				? 'w-[36vw] overflow-hidden sm:w-[38vw]'
				: ' '} mb-10 h-fit min-h-screen tablet:mr-40 mr-10 tablet:w-3/4 2xl:w-4/5"
		>
			<div
				class="min-h-screen w-[91vw] bg-primary-light p-28 outline outline-1 -outline-offset-[12px] outline-text-light/20 dark:bg-primary-dark dark:outline-text-dark/20 tablet:w-auto"
			>
				{@render children?.()}
			</div>
		</div>
	</div>
</section>

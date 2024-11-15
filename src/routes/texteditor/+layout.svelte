<script lang="ts">
	import SideTabs from '$lib/components/SideTabs.svelte';
	import { navigationPreferences } from '$lib/stores/navigation.svelte';

	let { children } = $props();
	navigationPreferences.toolName = 'Text Editor';

	const tabs = [
		{ name: 'Readme', routeId: '/texteditor/readme' },
		{ name: 'Simple Text Editor', routeId: '/texteditor/simple' },
		{ name: 'Contribute', routeId: '/texteditor/contribute' }
	];
</script>

<svelte:head>
	<title>Text Editor • Webtools</title>
	<meta name="Text Editor" content="Text editor from Webtools" />
</svelte:head>

<section class="relative">
	<section
		class=" absolute mt-80 flex transition-transform tablet:static tablet:mx-auto tablet:transition-none {navigationPreferences.isSidemenuOpen
			? 'left-4  '
			: ' right-4  '} "
	>
		<SideTabs {tabs} />

		<!-- don't add both classes, will break layout -->

		<section
			class="{navigationPreferences.isSidemenuOpen
				? 'w-[36vw] overflow-hidden sm:w-[38vw]'
				: ' '} mb-50 h-fit min-h-screen tablet:mr-40 mr-10 tablet:w-3/4 2xl:w-4/5"
		>
			<div
				class="min-h-screen w-[91vw] bg-primary-light p-28 outline-1 -outline-offset-[12px] outline-text-light/20 dark:bg-primary-dark dark:outline-text-dark/20 tablet:w-auto"
			>
				{@render children?.()}
			</div>
		</section>
	</section>
</section>

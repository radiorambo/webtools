<script lang="ts">
	import { page } from '$app/stores';
	let { routeId, tabName } = $props();
</script>

<a
	href={routeId}
	class=" -mr-2 ml-16 px-20 py-12 text-left text-sm lg:text-base
  {$page.route.id === routeId
		? '  bg-primary-light font-medium hover:bg-primary-light  dark:bg-primary-dark hover:dark:bg-primary-dark'
		: 'font-normal hover:bg-primary-light/50 hover:dark:bg-primary-dark/10 '}"
>
	{tabName}
</a>

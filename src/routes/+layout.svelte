<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	const { children } = $props();
</script>

<Header />
<section class="container">
	{@render children()}
</section>

<script lang="ts">
	import { onMount } from 'svelte';

	let simpleTextEditorContent: string = $state('');

	if (typeof window !== 'undefined' && window.localStorage) {
		simpleTextEditorContent = localStorage.getItem('simpleTextEditorData') || '';
	}

	function simpleTextEditorDataUpdate(): void {
		localStorage.setItem('simpleTextEditorData', simpleTextEditorContent);
	}

	onMount(() => {
		const textArea = document.querySelector('textarea');
		if (textArea) {
			const height = textArea.scrollHeight;
			textArea.style.height = height + 'px';
			textArea.addEventListener('input', () => {
				const height = textArea.scrollHeight;
				textArea.style.height = height + 'px';
			});
		}
	});
</script>

<!-- svelte-ignore a11y_autofocus -->
<textarea
	autofocus
	bind:value={simpleTextEditorContent}
	oninput={simpleTextEditorDataUpdate}
	placeholder="Start typing here"
	class=" min-h-screen border-0 w-full overflow-x-hidden bg-primary-light text-base text-text-light outline-0 dark:bg-primary-dark dark:text-text-dark"
></textarea>

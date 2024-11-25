<script lang="ts">
	import { browser } from '$app/environment';

	if (browser) {
		import('trix');
	}

	const lang = {
		attachFiles: 'Attach Files',
		bold: 'Bold',
		bullets: 'Bullets',
		code: 'Code',
		heading1: 'Heading',
		italic: 'Italic',
		link: 'Link',
		numbers: 'Numbers',
		quote: 'Quote',
		redo: 'Redo',
		strike: 'Strikethrough',
		undo: 'Undo'
	};
</script>

<trix-toolbar id="my_toolbar">
	<section class="flex flex-wrap justify-between">
		<section>
			<button
				type="button"
				class="relative px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 cursor-pointer first:border-l-0 border-l border-[#ccc]"
				data-trix-attribute="bold"
				data-trix-key="b"
				aria-label={lang.bold}>{lang.bold}</button
			>
			<button
				type="button"
				class="relative px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 cursor-pointer first:border-l-0 border-l border-[#ccc]"
				data-trix-attribute="italic"
				data-trix-key="i"
				aria-label={lang.italic}>{lang.italic}</button
			>
			<button
				type="button"
				class="relative px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 cursor-pointer first:border-l-0 border-l border-[#ccc]"
				data-trix-attribute="strike"
				aria-label={lang.strike}>{lang.strike}</button
			>

			<button
				type="button"
				class="relative px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 cursor-pointer first:border-l-0 border-l border-[#ccc]"
				data-trix-attribute="code"
				aria-label={lang.code}>{lang.code}</button
			>
		</section>
		<section>
			<button
				type="button"
				class="relative px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 cursor-pointer first:border-l-0 border-l border-[#ccc]"
				data-trix-action="undo"
				aria-label={lang.undo}>{lang.undo}</button
			>
			<button
				type="button"
				class="relative px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 cursor-pointer first:border-l-0 border-l border-[#ccc]"
				data-trix-action="redo"
				aria-label={lang.redo}>{lang.redo}</button
			>
		</section>
	</section>
</trix-toolbar>

<trix-editor class="w-full h-screen outline-0" toolbar="my_toolbar" input="my_input"></trix-editor>

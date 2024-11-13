import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	const currentPath = url.pathname;
	const basePath = currentPath.endsWith('/') ? currentPath : currentPath + '/';
	throw redirect(307, `${basePath}readme`);
}

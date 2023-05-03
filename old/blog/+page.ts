import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
    const slug = params['slug'];
    const res = await fetch(`/${slug}.md`);
    const post = await res.text();

    return {
        slug,
        post: marked.parse(post),
    };
};
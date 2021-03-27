import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
	const fileNames = fs.readdirSync(postsDirectory);

	const allPostsData = fileNames.map(fileName => {
		const id = fileName.replace(/\.md$/, '');
		const filePath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(filePath, 'utf8');
		const matterResult = matter(fileContents);

		return {
			id,
			...matterResult.data,
			date: JSON.stringify(matterResult.data.date),
		} as PostFrontMatter;
	});

	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export type PostFrontMatter = {
	date: string;
	id: string;
	summary: string;
	tags: string[];
	title: string;
};

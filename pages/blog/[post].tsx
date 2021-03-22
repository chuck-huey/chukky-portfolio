import { useRouter } from 'next/router';

export default function Post() {
	const router = useRouter();
	const { post } = router.query;

	return <div className="container">{post}</div>;
}

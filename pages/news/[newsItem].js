import { useRouter } from 'next/router';

function DetailPage() { 
    const router = useRouter();

    console.log(router.query.newsItem);

    return <h1>The Detail Page</h1>;
}

export default DetailPage;
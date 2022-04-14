// our-domain.com/news 
// next.js provides file-based routing
import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
    return <Fragment>
        <h1>The News Page</h1>
        <ul>
            <li>
                <Link href='/news/tukazban'>something-important</Link>
            </li>
            <li>
                <Link href='/news/vafa'>something-not-important</Link>
            </li>
        </ul>
        </Fragment>;
}

export default NewsPage;
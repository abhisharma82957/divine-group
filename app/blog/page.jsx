import {posts} from '../../lib/data';import {PageHero,BlogCard} from '../../components/Site';
export const metadata={title:'Blog'};
export default function Blog(){return <><PageHero crumb="Blog" title="Insights & Resources" description="Simple, helpful articles on education, employment and travel topics."/><section className="pad light"><div className="container"><div className="blog-grid">{posts.map(b=><BlogCard key={b.slug} post={b}/>)}</div></div></section></>}

import Reveal from './Reveal';
export default function PageHero({eyebrow,title,text}){return <section className="page-hero"><div className="container"><Reveal><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p></Reveal></div></section>}

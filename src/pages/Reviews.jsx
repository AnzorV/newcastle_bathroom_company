import PageHero from '../components/PageHero';
import { company } from '../data/company';
import Reveal from '../components/Reveal';

export default function Reviews(){return <>
 <PageHero eyebrow="Reputation" title="Trusted for workmanship and attention to detail" text="Customers consistently highlight the quality of the finish, reliability and care taken in their homes."/>
 <section className="section"><div className="container stat-grid"><Reveal direction="right"><div><strong>{company.rating}</strong><span>Google rating</span></div></Reveal><Reveal delay={70}><div><strong>{company.reviews}</strong><span>public reviews</span></div></Reveal><Reveal delay={140} direction="left"><div><strong>{company.photos}</strong><span>profile photos</span></div></Reveal></div>
 <Reveal direction="down"><div className="container note"><h2>See the latest public feedback</h2><p>Visit the Google business profile for current ratings, customer feedback and project photography.</p><div className="actions"><a className="btn" href={company.maps} target="_blank" rel="noreferrer">Open Google profile</a><a className="btn ghost" href={company.facebook} target="_blank" rel="noreferrer">View Facebook projects</a></div></div></Reveal></section>
 </>}

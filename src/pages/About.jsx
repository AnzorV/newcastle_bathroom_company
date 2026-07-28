import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { company } from '../data/company';
import aboutImg from '../assets/641537533_937093662216155_4615040965385166575_n.jpg';

export default function About(){return <>
 <PageHero eyebrow="About" title="Bathroom expertise shaped around the customer" text="A local Newcastle company focused on bathroom installation, tiling and complete transformations."/>
 <section className="section"><div className="container split">
  <Reveal direction="right"><div>
   <h2>Local bathroom specialists</h2>
   <p>{company.name} serves customers across Newcastle upon Tyne. Its public Google profile shows a {company.rating} score from {company.reviews} reviews and {company.photos} project photos.</p>
   
   <h2>Experience that shows in the finish</h2>
   <p>The company profile describes more than 16 years of experience in bathroom installation and tiling, with services covering full bathrooms, wet rooms, shower rooms and finishing work.</p>
   
   <h2>Follow recent work</h2>
   <p>Project examples are also shared on the company Facebook page, showcasing a commitment to quality and transparency in every job.</p>
   <div className="actions" style={{marginTop: '20px'}}>
    <a className="btn" href={company.facebook} target="_blank" rel="noreferrer">Open Facebook</a>
   </div>
  </div></Reveal>
  <Reveal delay={120} direction="left">
   <img src={aboutImg} alt="Full Luxury Bathroom Renovation" className="split-image" />
  </Reveal>
 </div></section>
</>}

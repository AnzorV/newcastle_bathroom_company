import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { company } from '../data/company';

import img1 from '../assets/558442010_826474119944777_201240710577318025_n.jpg';
import img2 from '../assets/558507941_826474086611447_584547597819783604_n.jpg';
import img3 from '../assets/558810475_826474079944781_8051841373725324556_n.jpg';
import img4 from '../assets/559556422_826474126611443_599435347779278809_n.jpg';
import img5 from '../assets/638878185_937093795549475_2849481481680194696_n.jpg';
import img6 from '../assets/641198431_937093755549479_5618946941157760348_n.jpg';
import img7 from '../assets/643319867_937093792216142_1760064630782575148_n.jpg';
import img8 from '../assets/641537533_937093662216155_4615040965385166575_n.jpg';
import img9 from '../assets/639823873_937093665549488_1402015918024037118_n.jpg';
import img10 from '../assets/641438180_937093688882819_3537828339113545737_n.jpg';

export default function Projects(){
 const projects = [
  { img: img1, title: 'Luxury Walk-in Shower', category: 'Shower Systems' },
  { img: img2, title: 'Modern Wet Room Design', category: 'Shower Systems' },
  { img: img3, title: 'Classic Bathroom Installation', category: 'Full Renovation' },
  { img: img4, title: 'Bespoke Tiling & Vanity Unit', category: 'Tiling & Finishing' },
  { img: img5, title: 'Contemporary Ensuite Refresh', category: 'Ensuite' },
  { img: img6, title: 'Wood-Effect Feature Wall', category: 'Tiling & Finishing' },
  { img: img7, title: 'Minimalist Walk-in Suite', category: 'Shower Systems' },
  { img: img8, title: 'Premium Full Renovation', category: 'Full Renovation' },
  { img: img9, title: 'Quality Plumbing & Finish', category: 'Installation' },
  { img: img10, title: 'Modern Family Bathroom', category: 'Full Renovation' }
 ];

 return <>
  <PageHero eyebrow="Projects" title="Bathroom inspiration and recent work" text="Explore a range of styles, finishes and layouts, then visit Facebook for more completed installations."/>
  <section className="section">
   <div className="container">
    <div className="gallery">
     {projects.map((p,i)=>(
      <Reveal key={i} delay={(i%2)*100} direction="up">
       <figure className="gallery-item">
        <div className="gallery-img-wrapper">
         <img src={p.img} alt={p.title} className="gallery-image" loading="lazy" />
         <span className="gallery-category">{p.category}</span>
        </div>
        <figcaption>
         <h3>{p.title}</h3>
        </figcaption>
       </figure>
      </Reveal>
     ))}
    </div>
   </div>
   <div className="container centre-action">
    <Reveal delay={300} direction="up">
     <div className="note" style={{ maxWidth: '800px', margin: '40px auto 0', textAlign: 'center' }}>
      <h3>Looking for more?</h3>
      <p>We update our Facebook page regularly with before-and-after photos of our latest installations in Newcastle and surrounding areas.</p>
      <a className="btn" href={company.facebook} target="_blank" rel="noreferrer" style={{ marginTop: '20px' }}>
       <span className="facebook-mark small-mark">f</span>View all 40+ projects on Facebook
      </a>
     </div>
    </Reveal>
   </div>
  </section>
 </>}

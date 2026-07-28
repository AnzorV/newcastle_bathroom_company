import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import serviceImg from '../assets/558442010_826474119944777_201240710577318025_n.jpg';
import finishImg from '../assets/559556422_826474126611443_599435347779278809_n.jpg';

export default function Services(){
 const services=[
  ['Bathroom renovations','Complete bathroom makeovers tailored to the room and the way you use it.'],
  ['Bathroom installation','Professional fitting of bathroom suites, furniture and finishing details.'],
  ['Shower rooms','Space-conscious shower rooms designed around comfort and practicality.'],
  ['Wet rooms','Modern wet-room design and installation for a clean, accessible finish.'],
  ['Wall and floor tiling','Ceramic, wall and floor tiling completed with close attention to detail.'],
  ['Bathroom refresh work',<><span className="text-highlight">Targeted improvements</span> for bathrooms that need updating rather than replacing.</>]
 ];
 return <><PageHero eyebrow="Services" title="Complete bathroom installation and finishing" text="From full renovations to tiling and shower-room upgrades, every project starts with understanding your space."/>
 <section className="section"><div className="container service-grid">{services.map(([s,d],i)=><Reveal key={s} delay={i*60} direction={i%2===0?'right':'left'}><article className="service"><span>0{i+1}</span><h3>{s}</h3><p>{d}</p></article></Reveal>)}</div></section>
 
 <section className="section soft"><div className="container split"><Reveal direction="right"><div><h2>A simple project journey</h2><ol className="steps"><li><b>Share the brief</b><span>Tell us about the room, your priorities and preferred style.</span></li><li><b>Discuss the options</b><span>Review practical solutions, finishes and the scope of work.</span></li><li><b>Plan the transformation</b><span>Agree the project details and suitable next steps.</span></li></ol></div></Reveal><Reveal delay={120} direction="left"><img src={serviceImg} alt="Grey Marble Transformation" className="split-image" /></Reveal></div></section>

 <section className="section"><div className="container split"><Reveal direction="right"><img src={finishImg} alt="Bespoke Tiling & Vanity" className="split-image" /></Reveal><Reveal delay={120} direction="left"><div><h2>Attention to the details</h2><p>The difference between a good bathroom and a great one is in the final millimetres. We take pride in the quality of our tiling, the precision of our plumbing, and the cleanliness of our work.</p><ul><li style={{marginBottom: '10px'}}>✓ Professional tile alignment</li><li style={{marginBottom: '10px'}}>✓ Neat silicone finishing</li><li style={{marginBottom: '10px'}}>✓ Hidden pipework where possible</li><li style={{marginBottom: '10px'}}>✓ Daily site cleanup</li></ul></div></Reveal></div></section></>}

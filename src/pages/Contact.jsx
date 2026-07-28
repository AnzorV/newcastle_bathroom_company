import PageHero from '../components/PageHero';
import { company } from '../data/company';
import { Phone, MapPin, ExternalLink, MessageSquare, Clock } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Contact() {
  const socialItems = [
    { icon: Phone, title: 'Call Us', text: 'Speak directly with our team for immediate advice and bookings.', action: company.phone, href: company.phoneHref, btnClass: 'btn' },
    { icon: MessageSquare, title: 'Message Us', text: 'Send us a message on Facebook for a quick response and to share photos.', action: 'Facebook Message', href: company.facebook, btnClass: 'btn ghost', isExternal: true },
    { icon: MapPin, title: 'Visit Us', text: company.locationLabel, action: 'Open Google Maps', href: company.maps, btnClass: 'btn ghost', isExternal: true, showHours: true }
  ];

  return (
    <>
      <PageHero 
        eyebrow="Contact" 
        title="Let's start your bathroom transformation" 
        text="Whether you have a clear vision or need expert advice, we're here to help. Get in touch via any of the methods below." 
      />
      
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {socialItems.map((item, idx) => (
              <Reveal key={item.title} className="contact-card" direction="up" delay={idx * 100}>
                <div className="contact-icon-wrapper">
                  <item.icon size={32} />
                </div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                {item.showHours && (
                  <div className="contact-hours">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginBottom: '10px' }}>
                      <Clock size={16} />
                      <span>{company.hours[0]}</span>
                    </div>
                  </div>
                )}
                <a 
                  className={item.btnClass} 
                  href={item.href} 
                  target={item.isExternal ? "_blank" : undefined} 
                  rel={item.isExternal ? "noreferrer" : undefined}
                >
                  {item.title === 'Message Us' && <span className="facebook-mark small-mark" style={{marginRight: '8px'}}>f</span>}
                  {item.action}
                  {item.isExternal && item.title === 'Message Us' && <ExternalLink size={15} style={{marginLeft: '8px'}}/>}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f6f4ef', borderTop: '1px solid #eee' }}>
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <Reveal direction="up">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready for a Quote?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>
              Most of our projects start with a simple phone call. We'll discuss your ideas, give you a rough estimate, and then arrange a home visit for a detailed quote.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="btn" href={company.phoneHref} style={{ padding: '15px 40px' }}>
                Call {company.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

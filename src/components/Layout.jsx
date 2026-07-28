import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { company } from '../data/company';
import ScrollToTop from './ScrollToTop';
import logo from '../assets/logo.png';

export default function Layout(){
 const [open,setOpen]=useState(false);
 const nav=[['/','Home'],['/services','Services'],['/projects','Projects'],['/about','About'],['/reviews','Reviews'],['/contact','Contact']];
 return <div className="site">
  <ScrollToTop/>
  <header className="header"><div className="container nav">
   <NavLink to="/" className="brand" onClick={()=>setOpen(false)}>
    <img src={logo} alt={company.name} className="header-logo" />
   </NavLink>
   <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open?<X/>:<Menu/>}</button>
   <nav className={open?'links open':'links'}>{nav.map(([to,label])=><NavLink key={to} to={to} end={to === '/'} onClick={()=>setOpen(false)}>{label}</NavLink>)}
    <a className="social-link" href={company.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><span className="facebook-mark">f</span></a>
    <a className="btn small" href={company.phoneHref}><Phone size={17}/>Call</a>
   </nav>
  </div></header>
  <main className="content"><Outlet/></main>
  <footer><div className="container footer-grid">
   <div><h3>{company.name}</h3><p>Bathroom remodelling in Newcastle upon Tyne.</p></div>
   <div><h4>Contact</h4><a href={company.phoneHref}>{company.phone}</a><a href={company.maps} target="_blank" rel="noreferrer"><MapPin size={16}/>Google Maps</a><a href={company.facebook} target="_blank" rel="noreferrer"><span className="facebook-mark small-mark">f</span>Facebook <ExternalLink size={14}/></a></div>
   <div><h4>Hours</h4>{company.hours.map(x=><p key={x}>{x}</p>)}<p>{company.locationLabel}</p></div>
  </div><div className="container fine">© {new Date().getFullYear()} {company.name}. All rights reserved.</div></footer>
  <a className="mobile-call" href={company.phoneHref}><Phone size={20}/>Call now</a>
 </div>
}

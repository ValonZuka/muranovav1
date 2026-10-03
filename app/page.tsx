'use client'

import { useMemo, useState } from 'react'

const referenceImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%2010%2C%202026%2C%2002_28_20%20AM-4QMx1X8BWmrkwNCkpfNgsZ8M3KVzLY.png'

const categories = ['Të gjitha', 'Kuzhina', 'Ormana', 'Koridori', 'TV & living', 'Tryeze pune', 'Dhoma gjumi', 'Garderoba']
const categoryDescriptions: Record<string, string> = {
  'Kuzhina': 'Kuzhinë e projektuar me dru natyral, funksionale dhe e përshtatur për ritmin e përditshëm të familjes.',
  'Ormana': 'Orman i punuar me dorë, me linja të pastra dhe hapësirë të organizuar për çdo gjë.',
  'Koridori': 'Koridor me finiturë druri natyral, që sjell ngrohtësi që në hyrje të shtëpisë.',
  'TV & living': 'Hapësirë living e menduar për komoditet dhe mbrëmje të gjata në shtëpi.',
  'Tryeze pune': 'Tryezë pune e personalizuar, e projektuar për fokus dhe produktivitet.',
  'Dhoma gjumi': 'Dhomë gjumi me mobilje druri që krijojnë qetësi dhe ngrohtësi.',
  'Garderoba': 'Garderobë e personalizuar me hapësirë ruajtëse të mençur dhe dizajn të pastër.',
}



const placeholderImages = [
  '/images/kuzhina (1).jpg',
  '/images/kuzhina (2).jpg',
  '/images/kuzhina (3).jpg',
  '/images/kuzhina (4).jpg',
  '/images/kuzhina (5).jpg',
  '/images/kuzhina (6).jpg',
  '/images/kuzhina (7).jpg',
  '/images/kuzhina (8).jpg',
  '/images/kuzhina (9).jpg',
  '/images/kuzhina (10).jpg',
  '/images/kuzhina (11).jpg',
  '/images/kuzhina (12).jpg',
  '/images/kuzhina (13).jpg',
  '/images/kuzhina (14).jpg',
  '/images/kuzhina (15).jpg',
  '/images/kuzhina (16).jpg',
  '/images/kuzhina (17).jpg',

  '/images/ormana (1).jpg',
  '/images/ormana (2).jpg',
  '/images/ormana (3).jpg',

  '/images/koridori.jpg',

  '/images/tv&living (1).jpg',
  '/images/tv&living (2).jpg',
  '/images/tv&living (3).jpg',
  '/images/tv&living (4).jpg',
  '/images/tv&living (5).jpg',
  '/images/tv&living (6).jpg',

  '/images/work-desk (1).jpg',
  '/images/work-desk (2).jpg',
  '/images/work-desk (3).jpg',
  '/images/work-desk (4).jpg',
  '/images/work-desk (5).jpg',

  '/images/shtrati.jpg',
  '/images/shtrati(2).jpg',

  '/images/garderob.jpg',
    '/images/koridori(2).jpg',


]
const scrollToId = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const projects = [
  { title: 'Kuzhinë e personalizuar 1', category: 'Kuzhina', image: placeholderImages[0], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 2', category: 'Kuzhina', image: placeholderImages[1], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 3', category: 'Kuzhina', image: placeholderImages[2], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 4', category: 'Kuzhina', image: placeholderImages[3], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 5', category: 'Kuzhina', image: placeholderImages[4], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 6', category: 'Kuzhina', image: placeholderImages[5], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 7', category: 'Kuzhina', image: placeholderImages[6], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 8', category: 'Kuzhina', image: placeholderImages[7], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 9', category: 'Kuzhina', image: placeholderImages[8], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 10', category: 'Kuzhina', image: placeholderImages[9], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 11', category: 'Kuzhina', image: placeholderImages[10], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 12', category: 'Kuzhina', image: placeholderImages[11], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 13', category: 'Kuzhina', image: placeholderImages[12], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 14', category: 'Kuzhina', image: placeholderImages[13], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 15', category: 'Kuzhina', image: placeholderImages[14], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 16', category: 'Kuzhina', image: placeholderImages[15], location: 'Prishtinë · 2025' },
  { title: 'Kuzhinë e personalizuar 17', category: 'Kuzhina', image: placeholderImages[16], location: 'Prishtinë · 2025' },

  // TODO: zëvendëso me foto reale kur t'i kesh — për tani po përdor foto kuzhine si placeholder
  { title: 'Orman i personalizuar 1', category: 'Ormana', image: placeholderImages[17], location: 'Prishtinë · 2025' },
  { title: 'Orman i personalizuar 2', category: 'Ormana', image: placeholderImages[18], location: 'Prishtinë · 2025' },
  { title: 'Orman i personalizuar 3', category: 'Ormana', image: placeholderImages[19], location: 'Prishtinë · 2025' },

  { title: 'Koridor me dru natyral 1', category: 'Koridori', image: placeholderImages[20], location: 'Prishtinë · 2025' },
  { title: 'Koridor me dru natyral 2', category: 'Koridori', image: placeholderImages[35], location: 'Prishtinë · 2025' },

  { title: 'TV & living 1', category: 'TV & living', image: placeholderImages[21], location: 'Prishtinë · 2024' },
  { title: 'TV & living 2', category: 'TV & living', image: placeholderImages[22], location: 'Prishtinë · 2024' },
  { title: 'TV & living 3', category: 'TV & living', image: placeholderImages[23], location: 'Prishtinë · 2024' },
  { title: 'TV & living 4', category: 'TV & living', image: placeholderImages[24], location: 'Prishtinë · 2024' },
  { title: 'TV & living 5', category: 'TV & living', image: placeholderImages[25], location: 'Prishtinë · 2024' },
  { title: 'TV & living 6', category: 'TV & living', image: placeholderImages[26], location: 'Prishtinë · 2024' },

  { title: 'Tryeze pune 1', category: 'Tryeze pune', image: placeholderImages[27], location: 'Prishtinë · 2024' },
  { title: 'Tryeze pune 2', category: 'Tryeze pune', image: placeholderImages[28], location: 'Prishtinë · 2024' },
  { title: 'Tryeze pune 3', category: 'Tryeze pune', image: placeholderImages[29], location: 'Prishtinë · 2024' },
  { title: 'Tryeze pune 4', category: 'Tryeze pune', image: placeholderImages[30], location: 'Prishtinë · 2024' },
  { title: 'Tryeze pune 5', category: 'Tryeze pune', image: placeholderImages[31], location: 'Prishtinë · 2024' },

  { title: 'Dhoma gjumi 1', category: 'Dhoma gjumi', image: placeholderImages[32], location: 'Fushë Kosovë · 2024' },
  { title: 'Dhoma gjumi 2', category: 'Dhoma gjumi', image: placeholderImages[33], location: 'Fushë Kosovë · 2024' },

  { title: 'Garderobë e personalizuar', category: 'Garderoba', image: placeholderImages[34], location: 'Prishtinë · 2024' },

]

const featuredProducts = [
  { label: 'KUZHINA', title: 'Kuzhinë që mbledh njerëzit', image: placeholderImages[7]},
  { label: 'GARDEROBA', title: 'Rregull në çdo detaj', image: placeholderImages[34] },
  { label: 'TV & LIVING', title: 'Qendër për mbrëmjet tuaja', image: placeholderImages[25] },
  { label: 'DHOMA GJUMI', title: 'Qetësi e punuar me dorë',  image: placeholderImages[32] },
]
function Logo({ className }: { className?: string }) {
  return (
    <a className={`logo ${className || ''}`} href="#top" aria-label="Muranova fillimi">
      <img 
        src="/muranova_logo_concept.png" 
        alt="Muranova Woodworks Logo" 
        style={{ height: '100px', width: 'auto', display: 'block' }} 
      />
    </a>
  )
}



export default function Page() {
  const [active, setActive] = useState('Të gjitha')
  const [menuOpen, setMenuOpen] = useState(false)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const featured = featuredProducts[featuredIndex]
  const moveFeatured = (direction: number) => setFeaturedIndex((featuredIndex + direction + featuredProducts.length) % featuredProducts.length)
  const visibleProjects = useMemo(() => active === 'Të gjitha' ? projects : projects.filter((project) => project.category === active), [active])

  return (
    <main id="top">
      <div className="announcement">Punuar me kujdes në Prishtinë <span>·</span> Për shtëpi që zgjasin</div>
      <header className="site-header"><Logo />

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Hap menynë">{menuOpen ? 'Mbyll' : 'Menu'}</button>
      
      <nav className={menuOpen ? 'open' : ''}>
      
      <a href="#sherbimet" onClick={scrollToId('sherbimet')}>Shërbimet</a>
      <a href="#projektet" onClick={scrollToId('procesi')}>Projektet</a>
      <a href="#procesi" onClick={scrollToId('rreth-nesh')}>Rreth nesh</a>
      <a className="nav-cta" onClick={scrollToId('kontakt')}>Kërko ofertë <span>↗</span></a>

        </nav>
      </header>

      <section className="hero">
          <div className="hero-fade" aria-hidden="true"></div>
        <div className="hero-copy">
          <p className="eyebrow">MOBILERI E PUNUAR SIPAS JUSH</p>
          <h1>Hapësira të cilat<br /><em>ndihen</em> si tuajat.</h1>
          <p className="hero-text">Ne krijojmë mobilje të personalizuara që i japin karakter çdo dhome — nga ideja e parë deri te montimi i fundit.</p>
      
        <div className="hero-actions"><a className="button button-light" href="#projektet">Shiko projektet <span>↗</span></a>
          <a className="text-link light-link" href="#rreth-nesh">Njihuni me Muranova <span>→</span></a>
      
        </div>
      </div>
      <div className="hero-image" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={(event) => { if (touchStart !== null && Math.abs(event.changedTouches[0].clientX - touchStart) > 45) moveFeatured(event.changedTouches[0].clientX < touchStart ? 1 : -1); setTouchStart(null) }}>
      <img src={featured.image} alt={featured.title} />
      <div className="hero-product"><span>{featured.label}</span><strong>{featured.title}</strong><div className="hero-dots" aria-label="Zgjidhni produktin kryesor">{featuredProducts.map((product, index) => <button key={product.label} className={featuredIndex === index ? 'active' : ''} onClick={() => setFeaturedIndex(index)} aria-label={`Shiko ${product.label}`} />)}</div></div>
      <div className="hero-controls" aria-label="Navigimi i galerisë"><button type="button" onClick={() => moveFeatured(-1)} aria-label="Produkti i mëparshëm">←</button>
      <button type="button" onClick={() => moveFeatured(1)} aria-label="Produkti i ardhshëm">→</button></div>
      <div className="swipe-hint">← rrëshqit për të parë më shumë →</div></div>
      </section>

      <section className="intro section-pad"><div className="section-kicker">MURANOVA / 01</div><div className="intro-content"><h2>Druri është materiali.<br /><em>Ju jeni historia.</em></h2><div><p className="lead">Çdo hapësirë ka ritmin e vet. Ne e dëgjojmë, e kuptojmë dhe e kthejmë në mobilje të ndërtuara për jetën tuaj.</p><a className="text-link" href="#rreth-nesh">Më shumë rreth nesh <span>→</span></a></div></div></section>

      <section className="services section-pad" id="sherbimet"><div className="workshop-tools" aria-hidden="true"><span className="tool tool-nail">⌁</span><span className="tool tool-hammer">⌕</span><span className="tool tool-saw">⌇</span></div><div className="section-heading"><div><div className="section-kicker">ÇFARË BËJMË</div><h2>Forma që i japin<br /><em>jetë funksionit.</em></h2></div><p>Që nga një kuzhinë e vogël deri te interieret e plota, e bëjmë çdo centimetër të vlejë.</p></div><div className="service-grid">{[['01','Kuzhina','Ritualet e përditshme meritojnë një hapësirë të menduar mirë.'],['02','Garderoba','Ruajtje e mençur, linja të pastra dhe gjithçka në vendin e vet.'],['03','TV & living','Komoditet, ngrohtësi dhe një pikë fokale për shtëpinë.'],['04','Dhoma gjumi','Qetësi e projektuar për pushimin që ju nevojitet.'],['05','Zyra & kontrata','Zgjidhje të qëndrueshme për hapësira pune me identitet.']].map(([number,title,text]) => <article className="service-card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><a href="#kontakt" aria-label={`Mëso më shumë për ${title}`}>↗</a></article>)}</div></section>

      <section className="projects section-pad" id="projektet">
        
      <div className="section-heading project-heading"><div>
      <div className="section-kicker">PUNËT TONA</div>
      <h2>Disa nga hapësirat<br />
      <em>që kemi krijuar.</em></h2></div>
      <p className="project-desc-text">Nga ideja fillestare te realizimi final — shfletoni disa nga hapësirat tona të preferuara të shndërruara në jetë.</p>   
      </div>
      <div className="filters">{categories.map((category) => <button className={active === category ? 'active' : ''} key={category} onClick={() => setActive(category)}>{category}</button>)}</div>
      <div className="project-grid">
  {visibleProjects.map((project, index) => (
    <article
      className={`project-card card-${index % 3}`}
      key={project.title}
      onClick={() => setSelectedProject(project)}
      style={{ cursor: 'pointer' }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-meta">
        <div><span>{project.category}</span><h3>{project.title}</h3></div>
        <p>{project.location}</p>
      </div>
    </article>
  ))}
</div><div className="center-link"><a className="button button-dark" href="#kontakt">Shiko të gjitha projektet <span>↗</span></a></div></section>

      <section className="statement"><div className="statement-inner"><span className="section-kicker">BESIMI YNË</span><h2>Gjërat e mira<br /><em>duan kohë.</em></h2><p>Materiale të zgjedhura. Punë e përpiktë. Një rezultat që plaket bukur dhe qëndron gjatë.</p></div></section>

      <section className="process section-pad" id="procesi"><div className="section-heading"><div><div className="section-kicker">SI PUNOJMË</div><h2>Një proces i qartë.<br /><em>Një rezultat i juaji.</em></h2></div></div><div className="process-grid">{[['01','Dëgjojmë','Fillojmë me ju: dëshirat, nevojat dhe mënyrën si jetoni.'],['02','Projektojmë','Kthejmë idetë në vizatim dhe materialet në një plan konkret.'],['03','Ndërtojmë','Punojmë me durim në punishte, duke kontrolluar çdo detaj.'],['04','Vendosim','Sjellim gjithçka në shtëpinë tuaj dhe e lëmë gati për jetën.']].map(([number,title,text]) => <div className="process-item" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="about section-pad" id="rreth-nesh"><div className="about-image"><img src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1200&q=85" alt="Detaj i një interieri të punuar me dru" /></div><div className="about-copy"><div className="section-kicker">RRETH MURANOVA</div><h2>Ne besojmë se<br /><em>cilësia duket.</em></h2><p>Muranova është një punishte mobilieri me pasion për materialin, proporcioni dhe punën e bërë mirë. Bashkojmë zanatin tradicional me dizajnin bashkëkohor për të krijuar pjesë që ju shërbejnë çdo ditë.</p><a className="text-link" href="#kontakt">Na njihni më mirë <span>→</span></a></div></section>

      <section className="contact" id="kontakt"><div><div className="section-kicker">LE TË FLASIM</div><h2>Keni një hapësirë<br /><em>në mendje?</em></h2></div><div className="contact-side"><p>Na tregoni çfarë po imagjinoni. Ne do ta kthejmë në diçka të prekshme.</p><a className="button button-light" href="mailto:info@muranova.com">Kërko ofertë <span>↗</span></a></div></section>

      
      <footer><div className="footer-logo-blush">
    <Logo />
  </div>
  
  <div className="footer-nav">
    <a href="#sherbimet">Shërbimet</a>
    <a href="#projektet">Projektet</a><a href="#procesi">Procesi</a>
    <a href="#rreth-nesh">Rreth nesh</a>
  </div>
  <div className="footer-contact">
    <a href="tel:+38344123456">+383 44 123 456</a><a href="mailto:info@muranova.com">info@muranova.com</a>
  <span>Prishtinë, Kosovë</span>
  </div>
  <div className="footer-bottom">
  <span>© 2026 Muranova Woodworks. Të gjitha të drejtat e rezervuara.</span>
  <span>Instagram&nbsp;&nbsp; Facebook</span>
  </div>
  
  </footer>

  {selectedProject && (
  <div className="lightbox-overlay" onClick={() => setSelectedProject(null)}>
    <button className="lightbox-close" onClick={() => setSelectedProject(null)} aria-label="Mbyll">✕</button>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <img src={selectedProject.image} alt={selectedProject.title} />
      <div className="lightbox-info">
        <span>{selectedProject.category}</span>
        <h3>{selectedProject.title}</h3>
        <p>{categoryDescriptions[selectedProject.category]}</p>
      </div>
    </div>
  </div>
)}
    </main>
  )
}

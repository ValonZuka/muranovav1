'use client'

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

// ---- Kontakti (ndrysho vetëm këtu) ----
const CONTACT = {
  email: 'muranova071@gmail.com',
  phoneDisplay: '046 444 002',
  phoneHref: 'tel:+38346444002',
  office: {
    name: 'Zyra',
    address: 'Objekti 1, afër Pronex Group SHPK, Prishtinë',
    mapUrl: 'https://www.google.com/maps/place/Pronex+Group+SHPK/@42.6568599,21.1777408,36m/data=!3m1!1e3!4m6!3m5!1s0x13549f5c1e1e18dd:0xc74d33b3134be094!8m2!3d42.6568285!4d21.1778393!16s%2Fg%2F11zgycg0k6',
  },
  workshop: {
    name: 'Punishtja',
    address: 'Rr. Eset Maloku, përballë shkollës «Hilmi Rakovica», Prishtinë',
    // TODO: zëvendëso me linkun e saktë të Google Maps kur ta kesh
    mapUrl: 'https://www.google.com/maps/place/MURANOVA+WoodWorks/@42.6886793,21.1539209,581m/data=!3m2!1e3!4b1!4m6!3m5!1s0x13549fe45fe893c9:0xfac3cb627341a022!8m2!3d42.6886754!4d21.1564958!16s%2Fg%2F11p1hvzphg?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
  },
}

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
      <img src="/muranova_logo_concept.png" alt="Muranova Woodworks Logo" />
    </a>
  )
}

const wrap = (i: number, n: number) => (((i % n) + n) % n)
// pozicioni relativ i një slide-i: -1, 0, 1 ose 2
const relOffset = (i: number, current: number, n: number) => {
  const d = wrap(i - current, n)
  return d > n - 2 ? d - n : d
}

export default function Page() {
  const [active, setActive] = useState('Të gjitha')
  const [shown, setShown] = useState('Të gjitha')
  const [leaving, setLeaving] = useState(false)
  const [gridHeight, setGridHeight] = useState<number | undefined>(undefined)
  const gridInnerRef = useRef<HTMLDivElement>(null)
  const filterTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null)

  // ---- Galeria e hero me rrëshqitje që ndjek gishtin ----
  const n = featuredProducts.length
  const [pos, setPos] = useState({ i: 0, prev: 0 })
  const [dragging, setDragging] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ down: false, moving: false, id: -1, x0: 0, y0: 0, lastX: 0, lastT: 0, vx: 0 })
  const featured = featuredProducts[pos.i]

  const go = (dir: number) => setPos((p) => ({ i: wrap(p.i + dir, n), prev: p.i }))
  const goTo = (k: number) => setPos((p) => ({ i: k, prev: p.i }))
  const setDrag = (px: number) => heroRef.current?.style.setProperty('--drag', `${px}px`)

  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    if ((e.target as HTMLElement).closest('button')) return
    const d = drag.current
    d.down = true; d.moving = false; d.id = e.pointerId
    d.x0 = d.lastX = e.clientX; d.y0 = e.clientY; d.lastT = performance.now(); d.vx = 0
  }
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d.down) return
    const dx = e.clientX - d.x0
    if (!d.moving) {
      if (Math.abs(dx) < 6 || Math.abs(dx) < Math.abs(e.clientY - d.y0)) return
      d.moving = true
      setDragging(true)
      try { heroRef.current?.setPointerCapture(d.id) } catch {}
    }
    const now = performance.now()
    const dt = now - d.lastT
    if (dt > 0) d.vx = 0.8 * d.vx + 0.2 * ((e.clientX - d.lastX) / dt)
    d.lastX = e.clientX; d.lastT = now
    setDrag(dx)
  }
  const onUp = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d.down) return
    d.down = false
    if (!d.moving) return
    d.moving = false
    const dx = e.clientX - d.x0
    const width = heroRef.current?.offsetWidth || 1
    const far = Math.abs(dx) > width * 0.2
    const fast = Math.abs(d.vx) > 0.45 && Math.abs(dx) > 12
    setDrag(0)
    setDragging(false)
    if ((far || fast) && (dx < 0 ? d.vx <= 0.2 : d.vx >= -0.2)) go(dx < 0 ? 1 : -1)
    else setPos((p) => ({ i: p.i, prev: p.i }))
  }

  // ---- Filtrimi i projekteve me animacion ----
  const visibleProjects = useMemo(() => shown === 'Të gjitha' ? projects : projects.filter((project) => project.category === shown), [shown])

  const changeFilter = (category: string, el: HTMLElement) => {
    if (category === active) return
    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    setActive(category)
    if (gridInnerRef.current) setGridHeight(gridInnerRef.current.offsetHeight)
    setLeaving(true)
    clearTimeout(filterTimer.current)
    filterTimer.current = setTimeout(() => {
      setShown(category)
      setLeaving(false)
    }, 220)
  }

  useLayoutEffect(() => {
    if (gridHeight === undefined || !gridInnerRef.current) return
    const next = gridInnerRef.current.offsetHeight
    setGridHeight(next)
    const t = setTimeout(() => setGridHeight(undefined), 650)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown])

  // ---- Menuja dhe lightbox ----
  const closeMenuAnd = (id: string) => (e: React.MouseEvent) => { setMenuOpen(false); scrollToId(id)(e) }

  useEffect(() => {
    if (!selectedProject) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedProject(null)
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prevOverflow }
  }, [selectedProject])

  return (
    <main id="top">
      <div className="announcement">Punuar me kujdes në Prishtinë <span>·</span> Për shtëpi që zgjasin</div>
      <header className="site-header">
        <Logo />
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Mbyll menynë' : 'Hap menynë'}>{menuOpen ? 'Mbyll' : 'Menu'}</button>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#sherbimet" onClick={closeMenuAnd('sherbimet')}>Shërbimet</a>
          <a href="#projektet" onClick={closeMenuAnd('projektet')}>Projektet</a>
          <a href="#procesi" onClick={closeMenuAnd('procesi')}>Procesi</a>
          <a href="#rreth-nesh" onClick={closeMenuAnd('rreth-nesh')}>Rreth nesh</a>
          <a className="nav-cta" href="#kontakt" onClick={closeMenuAnd('kontakt')}>Kërko ofertë <span>↗</span></a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">MOBILERI E PUNUAR SIPAS JUSH</p>
          <h1>Hapësira të cilat<br /><em>ndihen</em> si tuajat.</h1>
          <p className="hero-text">Ne krijojmë mobilje të personalizuara që i japin karakter çdo dhome — nga ideja e parë deri te montimi i fundit.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#projektet" onClick={scrollToId('projektet')}>Shiko projektet <span>↗</span></a>
            <a className="text-link light-link" href="#rreth-nesh" onClick={scrollToId('rreth-nesh')}>Njihuni me Muranova <span>→</span></a>
          </div>
        </div>

        <div
          className={`hero-image${dragging ? ' is-dragging' : ''}`}
          ref={heroRef}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          {featuredProducts.map((product, i) => {
            const offset = relOffset(i, pos.i, n)
            const prevOffset = relOffset(i, pos.prev, n)
            const animate = Math.abs(offset) <= 1 && Math.abs(prevOffset) <= 1
            const visible = Math.abs(offset) <= 1
            return (
              <div
                className="hero-slide"
                key={product.label}
                aria-hidden={i !== pos.i}
                style={{
                  transform: `translate3d(calc(${offset * 100}% + var(--drag, 0px)), 0, 0)`,
                  transition: dragging || !animate ? 'none' : undefined,
                  visibility: visible ? 'visible' : 'hidden',
                }}
              >
                <img src={product.image} alt={product.title} draggable={false} />
              </div>
            )
          })}
          <div className="hero-fade-right" aria-hidden="true" />
          <div className="hero-product" key={featured.label}>
            <span>{featured.label}</span>
            <strong>{featured.title}</strong>
            <div className="hero-dots" aria-label="Zgjidhni produktin kryesor">
              {featuredProducts.map((product, index) => <button key={product.label} className={pos.i === index ? 'active' : ''} onClick={() => goTo(index)} aria-label={`Shiko ${product.label}`} />)}
            </div>
          </div>
          <div className="hero-controls" aria-label="Navigimi i galerisë">
            <button type="button" onClick={() => go(-1)} aria-label="Produkti i mëparshëm">←</button>
            <button type="button" onClick={() => go(1)} aria-label="Produkti i ardhshëm">→</button>
          </div>
          <div className="swipe-hint">← rrëshqit për të parë më shumë →</div>
        </div>
      </section>

      <section className="intro section-pad"><div className="section-kicker">MURANOVA / 01</div><div className="intro-content"><h2>Druri është materiali.<br /><em>Ju jeni historia.</em></h2><div><p className="lead">Çdo hapësirë ka ritmin e vet. Ne e dëgjojmë, e kuptojmë dhe e kthejmë në mobilje të ndërtuara për jetën tuaj.</p><a className="text-link" href="#rreth-nesh" onClick={scrollToId('rreth-nesh')}>Më shumë rreth nesh <span>→</span></a></div></div></section>

      <section className="services section-pad" id="sherbimet"><div className="workshop-tools" aria-hidden="true"><span className="tool tool-nail">⌁</span><span className="tool tool-hammer">⌕</span><span className="tool tool-saw">⌇</span></div><div className="section-heading"><div><div className="section-kicker">ÇFARË BËJMË</div><h2>Forma që i japin<br /><em>jetë funksionit.</em></h2></div><p>Që nga një kuzhinë e vogël deri te interieret e plota, e bëjmë çdo centimetër të vlejë.</p></div><div className="service-grid">{[['01','Kuzhina','Ritualet e përditshme meritojnë një hapësirë të menduar mirë.'],['02','Garderoba','Ruajtje e mençur, linja të pastra dhe gjithçka në vendin e vet.'],['03','TV & living','Komoditet, ngrohtësi dhe një pikë fokale për shtëpinë.'],['04','Dhoma gjumi','Qetësi e projektuar për pushimin që ju nevojitet.'],['05','Zyra & kontrata','Zgjidhje të qëndrueshme për hapësira pune me identitet.']].map(([number,title,text]) => <article className="service-card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><a href="#kontakt" onClick={scrollToId('kontakt')} aria-label={`Mëso më shumë për ${title}`}>↗</a></article>)}</div></section>

      <section className="projects section-pad" id="projektet">
        <div className="section-heading project-heading">
          <div>
            <div className="section-kicker">PUNËT TONA</div>
            <h2>Disa nga hapësirat<br /><em>që kemi krijuar.</em></h2>
          </div>
          <p className="project-desc-text">Nga ideja fillestare te realizimi final — shfletoni disa nga hapësirat tona të preferuara të shndërruara në jetë.</p>
        </div>
        <div className="filters" role="tablist" aria-label="Filtro projektet">
          {categories.map((category) => (
            <button
              role="tab"
              aria-selected={active === category}
              className={active === category ? 'active' : ''}
              key={category}
              onClick={(e) => changeFilter(category, e.currentTarget)}
            >{category}</button>
          ))}
        </div>
        <div className="project-grid-wrap" style={gridHeight !== undefined ? { height: gridHeight } : undefined}>
          <div className={`project-grid${leaving ? ' is-leaving' : ''}`} key={shown} ref={gridInnerRef}>
            {visibleProjects.map((project, index) => (
              <article
                className="project-card"
                key={project.title}
                style={{ ['--i' as string]: Math.min(index, 9) }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                </div>
                <div className="project-meta">
                  <div><span>{project.category}</span><h3>{project.title}</h3></div>
                  <p>{project.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="center-link"><a className="button button-dark" href="#kontakt" onClick={scrollToId('kontakt')}>Shiko të gjitha projektet <span>↗</span></a></div>
      </section>

      <section className="statement"><div className="statement-inner"><span className="section-kicker">BESIMI YNË</span><h2>Gjërat e mira<br /><em>duan kohë.</em></h2><p>Materiale të zgjedhura. Punë e përpiktë. Një rezultat që plaket bukur dhe qëndron gjatë.</p></div></section>

      <section className="process section-pad" id="procesi"><div className="section-heading"><div><div className="section-kicker">SI PUNOJMË</div><h2>Një proces i qartë.<br /><em>Një rezultat i juaji.</em></h2></div></div><div className="process-grid">{[['01','Dëgjojmë','Fillojmë me ju: dëshirat, nevojat dhe mënyrën si jetoni.'],['02','Projektojmë','Kthejmë idetë në vizatim dhe materialet në një plan konkret.'],['03','Ndërtojmë','Punojmë me durim në punishte, duke kontrolluar çdo detaj.'],['04','Vendosim','Sjellim gjithçka në shtëpinë tuaj dhe e lëmë gati për jetën.']].map(([number,title,text]) => <div className="process-item" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="about section-pad" id="rreth-nesh"><div className="about-image"><img src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1200&q=85" alt="Detaj i një interieri të punuar me dru" loading="lazy" /></div><div className="about-copy"><div className="section-kicker">RRETH MURANOVA</div><h2>Ne besojmë se<br /><em>cilësia duket.</em></h2><p>Muranova është një punishte mobilieri me pasion për materialin, proporcioni dhe punën e bërë mirë. Bashkojmë zanatin tradicional me dizajnin bashkëkohor për të krijuar pjesë që ju shërbejnë çdo ditë.</p><a className="text-link" href="#kontakt" onClick={scrollToId('kontakt')}>Na njihni më mirë <span>→</span></a></div></section>

      <section className="contact" id="kontakt">
        <div className="contact-main">
          <div className="section-kicker">LE TË FLASIM</div>
          <h2>Keni një hapësirë<br /><em>në mendje?</em></h2>
          <p className="contact-intro">Na tregoni çfarë po imagjinoni. Ne do ta kthejmë në diçka të prekshme.</p>
          <div className="contact-actions">
            <a className="button button-light" href={CONTACT.phoneHref}>Thirr {CONTACT.phoneDisplay} <span>↗</span></a>
            <a className="button button-outline" href={`mailto:${CONTACT.email}`}>Dërgo email <span>↗</span></a>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-item">
            <h3>Telefon</h3>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div className="contact-item">
            <h3>{CONTACT.office.name}</h3>
            <p>{CONTACT.office.address}</p>
            <a className="map-link" href={CONTACT.office.mapUrl} target="_blank" rel="noopener noreferrer">Hap në hartë ↗</a>
          </div>
          <div className="contact-item">
            <h3>{CONTACT.workshop.name}</h3>
            <p>{CONTACT.workshop.address}</p>
            <p className="contact-note">Këtu mund ta shihni nga afër punën e kryer.</p>
            <a className="map-link" href={CONTACT.workshop.mapUrl} target="_blank" rel="noopener noreferrer">Hap në hartë ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo-blush"><Logo /></div>
        <div className="footer-nav">
          <a href="#sherbimet" onClick={scrollToId('sherbimet')}>Shërbimet</a>
          <a href="#projektet" onClick={scrollToId('projektet')}>Projektet</a>
          <a href="#procesi" onClick={scrollToId('procesi')}>Procesi</a>
          <a href="#rreth-nesh" onClick={scrollToId('rreth-nesh')}>Rreth nesh</a>
        </div>
        <div className="footer-contact">
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.office.mapUrl} target="_blank" rel="noopener noreferrer">Zyra: {CONTACT.office.address}</a>
          <a href={CONTACT.workshop.mapUrl} target="_blank" rel="noopener noreferrer">Punishtja: {CONTACT.workshop.address}</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Muranova Woodworks. Të gjitha të drejtat e rezervuara.</span>
          <span><a href="https://www.instagram.com/muranovagroup/" target="_blank">Instagram</a>&nbsp;&nbsp; <a href="https://www.facebook.com/profile.php?id=61594988946904" target="_blank">Facebook</a> </span>
        </div>
      </footer>

      {selectedProject && (
        <div className="lightbox-overlay" onClick={() => setSelectedProject(null)}>
          <button className="lightbox-close" onClick={() => setSelectedProject(null)} aria-label="Mbyll">✕</button>
          <div className="lightbox-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
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

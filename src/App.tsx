import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Building2,
  ChevronDown, ChevronLeft, ChevronRight, CircleCheck, Clock3, Leaf, MapPin, Menu, MessageCircle,
  Paintbrush, Phone, Plus, ShieldCheck, Sparkles, Star, Truck, Users, Wrench, X, Zap,
} from 'lucide-react';

const heroSlides = [
  {
    eyebrow: 'Une direction présente sur le terrain',
    title: 'Des solutions concrètes pour vos projets.',
    text: 'Global Logiclean Services SARL accompagne ses clients dans le BTP, le nettoyage et les prestations techniques avec une équipe visible et engagée.',
    image: '/images/realizations/WhatsApp_Image_2026-09-09_at_21.22.32.jpeg',
    alt: 'Direction de Global Logiclean Services SARL',
  },
  {
    eyebrow: 'Nettoyage professionnel en hauteur',
    title: 'La qualité jusque dans les détails.',
    text: 'Des équipes formées et équipées pour entretenir les bâtiments, les vitrages et les espaces qui comptent pour vous.',
    image: '/images/team/WhatsApp_Image_2026-09-09_at_21.22.31.jpeg',
    alt: 'Agent Global Logiclean nettoyant une façade vitrée en hauteur',
  },
  {
    eyebrow: 'Interventions techniques',
    title: 'Des équipes qui savent faire.',
    text: 'Maintenance, installation et entretien : nous intervenons avec méthode, sécurité et sens du service.',
    image: '/images/hero/WhatsApp_Image_2026-09-09_at_21.22.27.jpeg',
    alt: 'Technicien Global Logiclean en intervention sur site',
  },
];

const services = [
  { icon: Building2, title: 'BTP & construction', text: 'Construction, rénovation et génie civil avec une identité claire et structurée.', image: '/images/realizations/WhatsApp_Image_2026-09-09_at_21.22.29.jpeg', tech: 'Maçonnerie, gros œuvre, finitions, respect des normes HSE.' },
  { icon: Sparkles, title: 'Nettoyage en hauteur', text: 'Lavage de façades vitrées avec des équipes équipées et visibles.', image: '/images/team/WhatsApp_Image_2026-09-09_at_21.22.31.jpeg', tech: 'Accès sur échelle, harnais de sécurité, produits adaptés aux vitrages.' },
  { icon: Paintbrush, title: 'Nettoyage & désinfection', text: 'Des interventions soignées pour des espaces propres et sains.', image: '/images/services/construction/WhatsApp_Image_2026-09-09_at_21.22.30.jpeg', tech: 'Produits professionnels, désinfection des surfaces, entretien régulier.' },
  { icon: Truck, title: 'Logistique & transport', text: 'Une équipe et un véhicule identifiés pour vos interventions.', image: '/images/services/technical/WhatsApp_Image_2026-09-09_at_21.22.28_(2).jpeg', tech: 'Véhicule de service marqué, matériel d’intervention embarqué.' },
  { icon: Wrench, title: 'Services techniques', text: 'Maintenance et interventions techniques sur site.', image: '/images/hero/WhatsApp_Image_2026-09-09_at_21.22.27.jpeg', tech: 'Électricité, plomberie, outillage professionnel, diagnostic sur place.' },
  { icon: Zap, title: 'Accompagnement', text: 'Une direction et une équipe disponibles pour vos besoins.', image: '/images/realizations/WhatsApp_Image_2026-09-09_at_21.22.32.jpeg', tech: 'Étude personnalisée, devis détaillé, suivi de chantier.' },
];

const projects = [
  { title: 'Nettoyage de façades vitrées', category: 'Nettoyage', description: 'Intervention d’équipe sur un bâtiment moderne.', image: '/images/team/WhatsApp_Image_2026-09-09_at_21.22.31.jpeg', tech: 'Travail en hauteur, sécurité harnais, lavage vitrage.' },
  { title: 'Nettoyage résidentiel en hauteur', category: 'Nettoyage', description: 'Entretien de fenêtres et de façades avec accès sur échelle.', image: '/images/realizations/WhatsApp_Image_2026-09-09_at_21.22.28_(1).jpeg', tech: 'Échelle à crinoline, produits non abrasifs, finition sans traces.' },
  { title: 'Équipe et véhicule de service', category: 'Équipements', description: 'Une équipe équipée et identifiable sur le terrain.', image: '/images/services/technical/WhatsApp_Image_2026-09-09_at_21.22.28_(2).jpeg', tech: 'Véhicule marbré, tenues d’équipe, matériel d’intervention.' },
  { title: 'Maintenance technique sur site', category: 'BTP', description: 'Intervention technique réalisée par un agent Global Logiclean.', image: '/images/hero/WhatsApp_Image_2026-09-09_at_21.22.27.jpeg', tech: 'Diagnostic, outillage, intervention ciblée et sécurisée.' },
  { title: 'BTP & nettoyage spécialisé', category: 'BTP', description: 'Une offre de services présentée dans les supports de l’entreprise.', image: '/images/realizations/WhatsApp_Image_2026-09-09_at_21.22.29.jpeg', tech: 'Double compétence BTP et nettoyage, coordination de chantier.' },
  { title: 'Agent en intervention', category: 'Nettoyage', description: 'Un agent équipé pour une prestation de nettoyage spécialisé.', image: '/images/services/cleaning/WhatsApp_Image_2026-09-09_at_21.22.30_(1).jpeg', tech: 'Équipement individuel, produit professionnel, méthode structurée.' },
  { title: 'Chantier de construction', category: 'Construction', description: 'Vue de chantier avec équipe et matériel en action.', image: '/images/services/construction/WhatsApp_Image_2026-09-09_at_21.22.30.jpeg', tech: 'Gros œuvre, coordination, sécurité de chantier.' },
  { title: 'Étude technique sur site', category: 'Construction', description: 'Analyse technique avant démarrage d’un projet.', image: '/images/services/construction/WhatsApp_Image_2026-09-09_at_21.22.27_(1).jpeg', tech: 'Repérage, mesures, planification des étapes d’intervention.' },
];

const beforeAfter = [
  {
    label: 'Nettoyage de façade',
    before: '/images/realizations/WhatsApp_Image_2026-09-09_at_21.22.29.jpeg',
    after: '/images/team/WhatsApp_Image_2026-09-09_at_21.22.31.jpeg',
    tech: 'Lavage haute pression, produits adaptés au support, finition sans traces.',
  },
  {
    label: 'Intervention technique',
    before: '/images/services/construction/WhatsApp_Image_2026-09-09_at_21.22.27_(1).jpeg',
    after: '/images/hero/WhatsApp_Image_2026-09-09_at_21.22.27.jpeg',
    tech: 'Diagnostic, outillage professionnel, remise en état après intervention.',
  },
];

const equipment = [
  { name: 'Véhicule et matériel d’intervention', type: 'Logistique & nettoyage spécialisé', image: '/images/services/technical/WhatsApp_Image_2026-09-09_at_21.22.28_(2).jpeg' },
  { name: 'Équipement de nettoyage en hauteur', type: 'Façades et vitrages', image: '/images/equipment/WhatsApp_Image_2026-09-09_at_21.22.29_(1).jpeg' },
  { name: 'Outillage technique', type: 'Maintenance sur site', image: '/images/hero/WhatsApp_Image_2026-09-09_at_21.22.27.jpeg' },
];

const teamPhotos = [
  { image: '/images/team/WhatsApp_Image_2026-09-09_at_21.22.31.jpeg', role: 'Nettoyage spécialisé' },
  { image: '/images/team/WhatsApp_Image_2026-09-09_at_21.22.28.jpeg', role: 'Équipe sur le terrain' },
  { image: '/images/realizations/WhatsApp_Image_2026-09-09_at_21.22.32.jpeg', role: 'Direction' },
];

const testimonials = [
  { quote: 'Une équipe visible, équipée et engagée pour des interventions de qualité.', name: 'Équipe Global Logiclean', role: 'Nettoyage spécialisé', image: '/images/team/WhatsApp_Image_2026-09-09_at_21.22.31.jpeg' },
  { quote: 'Une organisation de terrain pensée pour accompagner chaque besoin avec sérieux.', name: 'Équipe Global Logiclean', role: 'Logistique & transport', image: '/images/services/technical/WhatsApp_Image_2026-09-09_at_21.22.28_(2).jpeg' },
  { quote: 'Des compétences techniques mobilisées avec méthode, sécurité et sens du service.', name: 'Équipe Global Logiclean', role: 'Prestations techniques', image: '/images/hero/WhatsApp_Image_2026-09-09_at_21.22.27.jpeg' },
];

const commitments = [
  { icon: BadgeCheck, title: 'Qualité', text: 'Des finitions soignées et des résultats durables.' },
  { icon: Users, title: 'Équipe engagée', text: 'Des experts qualifiés et passionnés.' },
  { icon: Leaf, title: 'Respect', text: 'Des méthodes et produits responsables.' },
  { icon: Clock3, title: 'Réactivité', text: 'Une équipe disponible quand vous en avez besoin.' },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#accueil" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Global Logiclean Services, accueil">
      <span className="brand-mark"><span className="brand-mark-ring" /><span className="brand-mark-dot" /></span>
      <span className="brand-copy"><strong>GLOBAL LOGICLEAN</strong><small>SERVICES SARL</small></span>
    </a>
  );
}

function BeforeAfterSlider({ pair }: { pair: typeof beforeAfter[0] }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) update(e.clientX); };
    const onTouch = (e: TouchEvent) => { if (dragging.current && e.touches[0]) update(e.touches[0].clientX); };
    const onUp = () => { dragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouch);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <div className="ba-slider" ref={ref}>
      <img className="ba-after" src={pair.after} alt={`${pair.label} — après intervention`} loading="lazy" />
      <div className="ba-before-wrap" style={{ width: `${pos}%` }}>
        <img className="ba-before" src={pair.before} alt={`${pair.label} — avant intervention`} loading="lazy" />
      </div>
      <div
        className="ba-handle"
        style={{ left: `${pos}%` }}
        onMouseDown={() => { dragging.current = true; }}
        onTouchStart={(e) => { dragging.current = true; if (e.touches[0]) update(e.touches[0].clientX); }}
        role="slider"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Comparaison avant/après — ${pair.label}`}
      >
        <ChevronLeft size={16} /><ChevronRight size={16} />
      </div>
      <span className="ba-label ba-label-before">Avant</span>
      <span className="ba-label ba-label-after">Après</span>
    </div>
  );
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState('Tous');
  const [equipmentIndex, setEquipmentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [expandedTech, setExpandedTech] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];
  const categories = ['Tous', 'BTP', 'Construction', 'Rénovation', 'Génie civil', 'Nettoyage', 'Équipements'];
  const visibleProjects = filter === 'Tous' ? projects : projects.filter((project) => project.category === filter);
  const visibleEquipment = equipment[(equipmentIndex + equipment.length) % equipment.length];

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  const toggleTech = (key: string) => {
    setExpandedTech(expandedTech === key ? null : key);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <Logo />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            <button onClick={() => goTo('accueil')}>Accueil</button>
            <button onClick={() => goTo('services')}>Nos services</button>
            <button onClick={() => goTo('apropos')}>À propos</button>
            <button onClick={() => goTo('realisations')}>Réalisations</button>
            <button onClick={() => goTo('engagements')}>Engagements</button>
            <button onClick={() => goTo('contact')}>Contact</button>
            <button className="nav-cta" onClick={() => goTo('contact')}>Demander un devis <ArrowUpRight size={15} /></button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-grid-lines" />
          <div className="hero-arc hero-arc-one" />
          <div className="hero-arc hero-arc-two" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow light-eyebrow"><span /> GLOBAL LOGICLEAN SERVICES SARL</div>
              <p className="hero-kicker">{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <p className="hero-text">{slide.text}</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => goTo('contact')}>Demander un devis <ArrowRight size={17} /></button>
                <button className="button button-ghost" onClick={() => goTo('realisations')}>Nos réalisations <ArrowRight size={17} /></button>
              </div>
              <div className="hero-trust">
                <span><ShieldCheck size={17} /> Photos de l’entreprise</span>
                <span><BadgeCheck size={17} /> Équipe identifiée</span>
                <span><Clock3 size={17} /> Contact direct</span>
              </div>
            </div>
            <div className="hero-visual" aria-label="Aperçu de nos métiers">
              <div className="hero-image-main"><img key={slide.image} src={slide.image} alt={slide.alt} /></div>
              <div className="hero-image-circle hero-image-circle-top"><img src="/images/team/WhatsApp_Image_2026-09-09_at_21.22.31.jpeg" alt="Agent Global Logiclean nettoyant une façade vitrée" /></div>
              <div className="hero-image-circle hero-image-circle-bottom"><img src="/images/services/construction/WhatsApp_Image_2026-09-09_at_21.22.30.jpeg" alt="Agent Global Logiclean équipé pour une intervention" /></div>
              <div className="hero-image-small"><img src="/images/services/technical/WhatsApp_Image_2026-09-09_at_21.22.28_(2).jpeg" alt="Équipe Global Logiclean et véhicule de service" /></div>
              <div className="hero-badge"><span className="badge-number">GL<span>S</span></span><span>une équipe<br />visible sur le terrain</span></div>
              <div className="hero-slides"><span>{String(activeSlide + 1).padStart(2, '0')}</span><div>{heroSlides.map((_, index) => <button key={index} onClick={() => setActiveSlide(index)} className={activeSlide === index ? 'active' : ''} aria-label={`Afficher la diapositive ${index + 1}`} />)}</div><span>03</span></div>
            </div>
          </div>
          <div className="hero-bottom-wave" />
        </section>

        <section className="intro section" id="services">
          <div className="container">
            <div className="section-heading heading-row"><div><div className="eyebrow"><span /> Nos expertises</div><h2>Une gamme complète de solutions.</h2></div><p>Nous intervenons sur tous vos projets de construction, d’entretien et de services avec des mesures adaptées à vos besoins.</p></div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text, image, tech }) => (
                <article className="service-card" key={title}>
                  <div className="service-card-image">
                    <img src={image} alt={title} loading="lazy" />
                    <span className="service-icon"><Icon size={19} /></span>
                  </div>
                  <div className="service-card-body">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <button className="tech-toggle" onClick={() => toggleTech(`svc-${title}`)} aria-expanded={expandedTech === `svc-${title}`}>
                      <Plus size={13} /> Détail technique
                      <ChevronDown size={12} className={expandedTech === `svc-${title}` ? 'rotated' : ''} />
                    </button>
                    {expandedTech === `svc-${title}` && <p className="tech-detail">{tech}</p>}
                    <button className="card-arrow" onClick={() => goTo('contact')} aria-label={`En savoir plus sur ${title}`}><ArrowRight size={17} /></button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section" id="apropos">
          <div className="about-photo"><img src="/images/realizations/WhatsApp_Image_2026-09-09_at_21.22.32.jpeg" alt="Direction de Global Logiclean Services dans ses bureaux" loading="lazy" /><span className="about-photo-ring" /><span className="about-photo-label">Une entreprise identifiée</span></div>
          <div className="about-content"><div className="eyebrow"><span /> À propos de nous</div><h2>Une entreprise réelle, présente sur le terrain.</h2><p>Global Logiclean Services SARL rassemble une direction, des agents équipés et un véhicule de service pour répondre à des besoins de BTP, de nettoyage spécialisé et de prestations techniques.</p><p>Notre identité se construit dans nos équipes, nos équipements et la qualité de chaque intervention.</p><button className="button button-blue" onClick={() => goTo('contact')}>Parler de votre besoin <ArrowRight size={17} /></button><div className="about-stats"><div><strong>2</strong><span>Activités principales</span></div><div><strong>1</strong><span>Équipe identifiée</span></div><div><strong>100%</strong><span>Photos réelles</span></div></div></div>
        </section>

        <section className="before-after-section section">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow"><span /> Avant / Après</div>
              <h2>Des résultats visibles, immédiatement.</h2>
              <p>Faites glisser le curseur pour comparer l’état avant et après nos interventions.</p>
            </div>
            <div className="ba-grid">
              {beforeAfter.map((pair) => (
                <div className="ba-item" key={pair.label}>
                  <BeforeAfterSlider pair={pair} />
                  <div className="ba-caption">
                    <strong>{pair.label}</strong>
                    <button className="tech-toggle" onClick={() => toggleTech(`ba-${pair.label}`)} aria-expanded={expandedTech === `ba-${pair.label}`}>
                      <Plus size={13} /> Détail technique
                      <ChevronDown size={12} className={expandedTech === `ba-${pair.label}` ? 'rotated' : ''} />
                    </button>
                    {expandedTech === `ba-${pair.label}` && <p className="tech-detail">{pair.tech}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="commitments section" id="engagements"><div className="container"><div className="section-heading centered"><div className="eyebrow"><span /> Pourquoi nous choisir ?</div><h2>Notre engagement, votre satisfaction.</h2><p>Chaque intervention est guidée par la qualité, la sécurité et le respect de nos engagements.</p></div><div className="commitment-grid">{commitments.map(({ icon: Icon, title, text }) => <div className="commitment" key={title}><div className="commitment-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

        <section className="process section"><div className="container"><div className="process-layout"><div><div className="eyebrow"><span /> Notre processus</div><h2>Une méthode simple et efficace.</h2><p className="process-lead">De l’écoute à la livraison, nous avançons avec clarté pour que chaque étape de votre projet soit maîtrisée.</p><div className="process-list">{['Analyse du besoin', 'Visite / étude', 'Proposition technique', 'Devis transparent', 'Exécution', 'Contrôle qualité'].map((step, index) => <div className="process-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{step}</h3><p>{index === 0 ? 'Nous vous écoutons pour comprendre vos priorités.' : index === 5 ? 'Nous garantissons un résultat conforme à vos attentes.' : 'Une équipe dédiée fait avancer votre projet.'}</p></div></div>)}</div></div><div className="process-card"><span className="process-card-mark"><CircleCheck size={32} /></span><p>Votre projet mérite une équipe fiable.</p><strong>De petits travaux<br />aux grands projets.</strong><button onClick={() => goTo('contact')}>Parlons de votre projet <ArrowRight size={16} /></button></div></div></div></section>

        <section className="projects section" id="realisations">
          <div className="container">
            <div className="section-heading heading-row"><div><div className="eyebrow"><span /> Notre galerie</div><h2>Des interventions visibles et réelles.</h2></div><button className="text-link" onClick={() => setFilter('Tous')}>Voir toute la galerie <ArrowRight size={16} /></button></div>
            <div className="filter-tabs">{categories.map((category) => <button className={filter === category ? 'active' : ''} key={category} onClick={() => setFilter(category)}>{category}</button>)}</div>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <img src={project.image} alt={`${project.title} — ${project.description}`} loading="lazy" />
                    <span>{project.category}</span>
                    <button aria-label={`Voir ${project.title}`}><ArrowUpRight size={18} /></button>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p><MapPin size={14} /> {project.description}</p>
                    <button className="tech-toggle" onClick={() => toggleTech(`proj-${project.title}`)} aria-expanded={expandedTech === `proj-${project.title}`}>
                      <Plus size={13} /> Détail technique
                      <ChevronDown size={12} className={expandedTech === `proj-${project.title}` ? 'rotated' : ''} />
                    </button>
                    {expandedTech === `proj-${project.title}` && <p className="tech-detail">{project.tech}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="equipment section"><div className="container equipment-layout"><div className="equipment-image"><img key={visibleEquipment.image} src={visibleEquipment.image} alt={visibleEquipment.name} loading="lazy" /><div className="equipment-counter"><span>0{equipmentIndex + 1}</span><span>/ 0{equipment.length}</span></div></div><div className="equipment-copy"><div className="eyebrow light-eyebrow"><span /> Nos équipements</div><h2>Le bon matériel pour chaque défi.</h2><p>Notre parc d’équipements nous permet d’intervenir avec efficacité, précision et sécurité, quelle que soit l’ampleur de votre projet.</p><div className="equipment-detail"><span><Truck size={19} /></span><div><strong>{visibleEquipment.name}</strong><small>{visibleEquipment.type}</small></div></div><div className="equipment-controls"><button onClick={() => setEquipmentIndex((equipmentIndex - 1 + equipment.length) % equipment.length)} aria-label="Équipement précédent"><ChevronLeft /></button><button onClick={() => setEquipmentIndex((equipmentIndex + 1) % equipment.length)} aria-label="Équipement suivant"><ChevronRight /></button></div></div></div></section>

        <section className="numbers section"><div className="container numbers-inner"><div><div className="eyebrow"><span /> Les preuves de terrain</div><h2>Une identité fondée sur<br /><em>le réel.</em></h2></div><div className="numbers-grid"><div><strong>Locale</strong><span>Direction identifiée</span></div><div><strong>Terrain</strong><span>Équipe en intervention</span></div><div><strong>Réel</strong><span>Photos de l’entreprise</span></div><div><strong>Direct</strong><span>Contact disponible</span></div></div></div></section>

        <section className="team-section section">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow"><span /> Notre équipe</div>
              <h2>Des professionnels visibles sur le terrain.</h2>
              <p>Une équipe équipée, identifiée et engagée pour chaque intervention.</p>
            </div>
            <div className="team-grid">
              {teamPhotos.map((member) => (
                <div className="team-card" key={member.image}>
                  <img src={member.image} alt={`Membre de l’équipe Global Logiclean — ${member.role}`} loading="lazy" />
                  <span>{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials section"><div className="container"><div className="section-heading centered"><div className="eyebrow"><span /> Une équipe visible</div><h2>Le professionnalisme sur le terrain.</h2><p>Nos photos racontent mieux que les promesses la réalité de nos interventions.</p></div><div className="testimonial-wrap"><button className="carousel-arrow" onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)} aria-label="Photo précédente"><ChevronLeft /></button><article className="testimonial"><div className="testimonial-avatar"><img src={testimonials[testimonialIndex].image} alt={testimonials[testimonialIndex].role} /></div><div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={15} fill="currentColor" />)}</div><blockquote>“{testimonials[testimonialIndex].quote}”</blockquote><strong>{testimonials[testimonialIndex].name}</strong><span>{testimonials[testimonialIndex].role}</span></article><button className="carousel-arrow" onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)} aria-label="Photo suivante"><ChevronRight /></button></div><div className="carousel-dots">{testimonials.map((_, index) => <button key={index} onClick={() => setTestimonialIndex(index)} className={testimonialIndex === index ? 'active' : ''} aria-label={`Photo ${index + 1}`} />)}</div></div></section>

        <section className="contact section" id="contact"><div className="container contact-layout"><div className="contact-copy"><div className="eyebrow light-eyebrow"><span /> Parlons de votre projet</div><h2>Vous avez un projet ?<br /><em>Construisons-le ensemble.</em></h2><p>Notre équipe est prête à vous accompagner dans vos projets de construction, rénovation, nettoyage et prestations techniques.</p><div className="contact-details"><a href="tel:+22376557215"><Phone size={17} /> +223 76 55 72 15</a><a href="tel:+22362128590"><Phone size={17} /> +223 62 12 85 90</a><span><MapPin size={17} /> Imm. Samassa, route des 30 mètres</span></div></div><div className="contact-form-wrap">{formSent ? <div className="success-message"><CircleCheck size={42} /><h3>Merci pour votre demande.</h3><p>Notre équipe reviendra vers vous très rapidement.</p><button className="button button-blue" onClick={() => setFormSent(false)}>Envoyer une autre demande</button></div> : <form onSubmit={handleSubmit}><div className="form-heading"><h3>Parlez-nous de votre besoin</h3><p>Réponse sous 24h ouvrées.</p></div><div className="form-row"><label>Nom complet<input required placeholder="Votre nom" /></label><label>Téléphone<input required type="tel" placeholder="+223 ..." /></label></div><label>Email professionnel<input required type="email" placeholder="vous@entreprise.com" /></label><label>Votre projet<select defaultValue=""><option value="" disabled>Choisissez un service</option><option>Construction / BTP</option><option>Rénovation</option><option>Nettoyage professionnel</option><option>Services techniques</option></select></label><label>Message<textarea required rows={3} placeholder="Décrivez-nous votre projet..." /></label><button className="button button-primary form-button" type="submit">Envoyer ma demande <ArrowRight size={17} /></button></form>}</div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div><Logo light /><p>Construire aujourd’hui,<br />entretenir demain.</p><div className="socials"><a href="tel:+22376557215" aria-label="Téléphone principal"><Phone size={16} /></a><a href="tel:+22362128590" aria-label="Téléphone secondaire"><Phone size={16} /></a><a href="#contact" aria-label="Demander un devis"><MessageCircle size={16} /></a></div></div><div><h3>Liens utiles</h3><a href="#accueil">Accueil</a><a href="#services">Nos services</a><a href="#apropos">À propos</a><a href="#realisations">Réalisations</a></div><div><h3>Nos services</h3><a href="#services">Construction & BTP</a><a href="#services">Nettoyage</a><a href="#services">Génie civil</a><a href="#services">Services techniques</a></div><div><h3>Contact</h3><a href="tel:+22376557215"><Phone size={14} /> +223 76 55 72 15</a><a href="tel:+22362128590"><Phone size={14} /> +223 62 12 85 90</a><span><MapPin size={14} /> Imm. Samassa, route des 30 mètres</span></div></div><div className="container footer-bottom"><span>© 2026 Global Logiclean Services SARL. Tous droits réservés.</span><span>Qualité · Sécurité · Engagement</span></div></footer>
    </div>
  );
}

export default App;

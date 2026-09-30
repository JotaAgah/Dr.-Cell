import { useState } from 'react'

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconPhone() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  )
}

function IconWrench() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  )
}

function IconScreen() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="8" y1="6" x2="16" y2="6"/>
      <line x1="8" y1="10" x2="16" y2="10"/>
      <line x1="8" y1="14" x2="12" y2="14"/>
    </svg>
  )
}

function IconBattery() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="16" height="10" rx="2"/>
      <line x1="22" y1="11" x2="22" y2="13"/>
      <line x1="6" y1="11" x2="6" y2="13"/>
      <line x1="10" y1="11" x2="10" y2="13"/>
    </svg>
  )
}

function IconCircuit() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="4" height="4" rx="1"/>
      <rect x="18" y="2" width="4" height="4" rx="1"/>
      <rect x="18" y="18" width="4" height="4" rx="1"/>
      <rect x="2" y="18" width="4" height="4" rx="1"/>
      <line x1="6" y1="4" x2="18" y2="4"/>
      <line x1="4" y1="6" x2="4" y2="18"/>
      <line x1="20" y1="6" x2="20" y2="18"/>
      <line x1="6" y1="20" x2="18" y2="20"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  )
}

function IconCharger() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12V7a7 7 0 0 1 14 0v5"/>
      <rect x="3" y="12" width="18" height="8" rx="2"/>
      <line x1="12" y1="16" x2="12" y2="16.01" strokeWidth="2"/>
    </svg>
  )
}

function IconDroplet() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  )
}

function IconSettings() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function IconWhatsapp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function IconChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

function IconX() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function IconStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF2D55" stroke="#FF2D55" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <IconScreen />,
    title: 'Troca de Tela / Display',
    desc: 'Substituição de displays originais para iPhone, Samsung e outros modelos. Resultado perfeito com toque calibrado.',
  },
  {
    icon: <IconBattery />,
    title: 'Substituição de Bateria',
    desc: 'Baterias certificadas que restauram autonomia total do seu aparelho. Serviço rápido com garantia.',
  },
  {
    icon: <IconCircuit />,
    title: 'Reparo de Placa Eletrônica',
    desc: 'Diagnóstico avançado e microssoldagem para falhas no hardware. Expertise em placas de alta complexidade.',
  },
  {
    icon: <IconCharger />,
    title: 'Conector de Carga',
    desc: 'Substituição de conectores Lightning, USB-C e micro-USB. Carregamento normalizado em até 1 hora.',
  },
  {
    icon: <IconDroplet />,
    title: 'Limpeza e Desoxidação',
    desc: 'Tratamento especializado para danos por água. Limpeza ultrassônica que elimina corrosão e oxidação.',
  },
  {
    icon: <IconSettings />,
    title: 'Manutenção Preventiva e Software',
    desc: 'Otimização de desempenho, atualização de sistema e remoção de vírus. Deixe seu celular novo.',
  },
]

const faqs = [
  {
    q: 'Qual é o prazo médio de conserto?',
    a: 'A maioria dos reparos é concluída no mesmo dia, em até 2 horas. Reparos em placa eletrônica podem levar de 24 a 48 horas dependendo da complexidade.',
  },
  {
    q: 'Qual é a garantia dos serviços?',
    a: 'Todos os serviços possuem garantia mínima de 90 dias. Peças originais têm garantia de 6 meses. A garantia cobre defeitos no serviço prestado.',
  },
  {
    q: 'Vocês atendem qual marca de celular?',
    a: 'Atendemos todas as marcas: Apple (iPhone), Samsung, Xiaomi, Motorola, LG, Huawei e demais. Temos peças em estoque para os modelos mais populares.',
  },
  {
    q: 'Preciso agendar ou posso ir direto à loja?',
    a: 'Você pode ir direto à loja ou agendar pelo WhatsApp para garantir atendimento prioritário sem espera. Recomendamos agendar para reparos complexos.',
  },
]

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(13,13,13,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#FF2D55' }}>
            <span className="text-white" style={{ fontSize: 14, fontWeight: 800, letterSpacing: '-0.5px' }}>Dr</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.5px', color: '#fff' }}>Dr. Cell</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Sobre', 'Serviços', 'Localização', 'Orçamento'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace('ç', 'c').replace('ã', 'a')}`}
              className="transition-colors"
              style={{ color: '#8e8e93', fontSize: 14, fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8e8e93')}
            >
              {item}
            </a>
          ))}
          <a
            href="#orcamento"
            className="transition-all"
            style={{ background: '#FF2D55', color: '#fff', fontSize: 14, fontWeight: 600, padding: '8px 20px', borderRadius: 100 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Fazer Orçamento
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <IconX /> : <IconMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: 'rgba(13,13,13,0.97)' }}>
          {['Sobre', 'Serviços', 'Localização', 'Orçamento'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace('ç', 'c').replace('ã', 'a')}`}
              onClick={() => setOpen(false)}
              style={{ color: '#ebebf5', fontSize: 16, fontWeight: 500, padding: '10px 0', borderBottom: '1px solid #2c2c2e' }}
            >
              {item}
            </a>
          ))}
          <a
            href="#orcamento"
            onClick={() => setOpen(false)}
            className="text-center mt-2"
            style={{ background: '#FF2D55', color: '#fff', fontSize: 15, fontWeight: 600, padding: '12px 24px', borderRadius: 100 }}
          >
            Fazer Orçamento
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="sobre" className="relative min-h-screen flex items-center" style={{ background: '#0d0d0d', paddingTop: 80 }}>
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 800, background: 'radial-gradient(circle, rgba(255,45,85,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Text side */}
        <div>
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,45,85,0.12)', border: '1px solid rgba(255,45,85,0.25)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF2D55', display: 'inline-block' }} />
            <span style={{ color: '#FF2D55', fontSize: 12, fontWeight: 600, letterSpacing: '0.5px' }}>ASSISTÊNCIA TÉCNICA ESPECIALIZADA</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff', marginBottom: 24 }}>
            Seu celular<br />
            <span style={{ color: '#FF2D55' }}>consertado</span><br />
            hoje mesmo.
          </h1>

          <p style={{ color: '#8e8e93', fontSize: 18, lineHeight: 1.7, marginBottom: 40, maxWidth: 460 }}>
            <strong style={{ color: '#ebebf5' }}>Técnico Celinho</strong> com anos de experiência em diagnóstico e reparo de smartphones. Serviço rápido, peças originais e garantia em todos os reparos.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10">
            {[
              { n: '5.000+', l: 'Aparelhos reparados' },
              { n: '98%', l: 'Satisfação' },
              { n: '90 dias', l: 'Garantia' },
            ].map(s => (
              <div key={s.n}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{s.n}</div>
                <div style={{ fontSize: 12, color: '#8e8e93', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#orcamento"
              className="transition-all"
              style={{ background: '#FF2D55', color: '#fff', fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 100, display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,45,85,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >
              Solicitar Orçamento Rápido
            </a>
            <a
              href="https://wa.me/5516992290475"
              className="transition-all flex items-center gap-2"
              style={{ color: '#fff', fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)', display: 'inline-flex' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = '' }}
            >
              <IconWhatsapp /> Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="relative flex justify-center">
          <div className="relative" style={{ width: '100%', maxWidth: 440 }}>
            {/* Glowing ring */}
            <div style={{ position: 'absolute', inset: -16, borderRadius: 32, background: 'linear-gradient(135deg, rgba(255,45,85,0.15), transparent)', border: '1px solid rgba(255,45,85,0.15)' }} />
            <div
              style={{
                borderRadius: 24,
                overflow: 'hidden',
                aspectRatio: '4/5',
                background: '#1a1a1a',
                position: 'relative',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&h=1000&fit=crop&auto=format"
                alt="Técnico Celinho na bancada de trabalho realizando reparo de smartphone"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Overlay badge */}
              <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, background: 'rgba(13,13,13,0.85)', backdropFilter: 'blur(12px)', borderRadius: 16, padding: '14px 18px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: '#FF2D55', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <IconWrench />
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Técnico Celinho</div>
                  <div style={{ color: '#8e8e93', fontSize: 12 }}>Especialista em Smartphones</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => <IconStar key={i} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" style={{ background: '#0d0d0d', padding: '100px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p style={{ color: '#FF2D55', fontSize: 12, fontWeight: 600, letterSpacing: '1.5px', marginBottom: 12 }}>O QUE FAZEMOS</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: 16 }}>
            Serviços Especializados
          </h2>
          <p style={{ color: '#8e8e93', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>
            Do display à placa-mãe, resolvemos qualquer problema com precisão e agilidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#1f1f1f' : '#161616',
        border: `1px solid ${hovered ? 'rgba(255,45,85,0.25)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 20,
        padding: '28px 28px 24px',
        cursor: 'default',
        transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      <div style={{ width: 48, height: 48, borderRadius: 14, background: hovered ? 'rgba(255,45,85,0.15)' : 'rgba(255,45,85,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF2D55', marginBottom: 20, transition: 'all 0.2s ease' }}>
        {icon}
      </div>
      <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 10, letterSpacing: '-0.01em' }}>{title}</h3>
      <p style={{ color: '#8e8e93', fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>
      <button
        style={{ color: '#FF2D55', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Saber mais <IconArrowRight />
      </button>
    </div>
  )
}

function Location() {
  return (
    <section id="localizacao" style={{ background: '#f5f5f7', padding: '100px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p style={{ color: '#FF2D55', fontSize: 12, fontWeight: 600, letterSpacing: '1.5px', marginBottom: 12 }}>ENDEREÇO</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#000', marginBottom: 16 }}>
            Visite Nossa Loja
          </h2>
          <p style={{ color: '#6e6e73', fontSize: 17, maxWidth: 400, margin: '0 auto' }}>
            Estamos aqui para atender você com hora marcada ou por ordem de chegada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Info column */}
          <div style={{ background: '#fff', borderRadius: 24, padding: 40, border: '1px solid #e5e5ea' }}>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div style={{ color: '#FF2D55', marginTop: 2, flexShrink: 0 }}><IconMapPin /></div>
                <div>
                  <div style={{ fontWeight: 700, color: '#000', fontSize: 15, marginBottom: 4 }}>Endereço</div>
                  <div style={{ color: '#6e6e73', fontSize: 14, lineHeight: 1.6 }}>
                    Rua das Palmeiras, 347 — Sala 02<br />
                    Bairro Centro, São Paulo — SP<br />
                    CEP: 01310-100
                  </div>
                  <div style={{ color: '#6e6e73', fontSize: 13, marginTop: 8 }}>
                    <strong style={{ color: '#000' }}>Referência:</strong> Próximo ao Shopping Metrópole e Metrô República
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4"
                    style={{ color: '#FF2D55', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}
                  >
                    Como Chegar <IconArrowRight />
                  </a>
                </div>
              </div>

              <div style={{ height: 1, background: '#e5e5ea' }} />

              <div className="flex gap-4">
                <div style={{ color: '#FF2D55', marginTop: 2, flexShrink: 0 }}><IconClock /></div>
                <div>
                  <div style={{ fontWeight: 700, color: '#000', fontSize: 15, marginBottom: 10 }}>Horário de Funcionamento</div>
                  {[
                    { d: 'Segunda a Sexta', h: '09h00 – 18h30' },
                    { d: 'Sábado', h: '09h00 – 14h00' },
                    { d: 'Domingo', h: 'Fechado' },
                  ].map(row => (
                    <div key={row.d} className="flex justify-between" style={{ fontSize: 14, marginBottom: 6 }}>
                      <span style={{ color: '#6e6e73' }}>{row.d}</span>
                      <span style={{ color: row.h === 'Fechado' ? '#8e8e93' : '#000', fontWeight: 500 }}>{row.h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ height: 1, background: '#e5e5ea' }} />

              <div style={{ background: 'rgba(255,45,85,0.06)', borderRadius: 14, padding: '16px 20px', border: '1px solid rgba(255,45,85,0.15)' }}>
                <p style={{ color: '#000', fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Atendimento por agendamento</p>
                <p style={{ color: '#6e6e73', fontSize: 13, lineHeight: 1.5 }}>Prefira agendar pelo WhatsApp para atendimento sem fila e garantia de peças reservadas.</p>
              </div>
            </div>
          </div>

          {/* Map column */}
          <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '1/1', background: '#e5e5ea', position: 'relative', border: '1px solid #e5e5ea' }}>
            <iframe
              title="Localização Dr. Cell"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6545!3d-23.5616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjgiUyA0NsKwMzknMTYuMiJX!5e0!3m2!1spt-BR!2sbr!4v1609459200000!5m2!1spt-BR!2sbr"
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Pin overlay */}
            <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderRadius: 12, padding: '10px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ color: '#FF2D55' }}><IconMapPin /></div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#000' }}>Dr. Cell</div>
                <div style={{ fontSize: 11, color: '#6e6e73' }}>Assistência Técnica</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteForm() {
  const [form, setForm] = useState({ brand: '', model: '', defect: '', name: '', phone: '' })

  const brands = ['Apple (iPhone)', 'Samsung', 'Xiaomi', 'Motorola', 'Outros']
  const defects = ['Troca de Tela', 'Substituição de Bateria', 'Reparo de Placa', 'Conector de Carga', 'Dano por Água', 'Software / Lentidão', 'Outro']

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Olá! Gostaria de um orçamento:\n\n📱 Marca: ${form.brand}\n🔧 Modelo: ${form.model}\n⚡ Defeito: ${form.defect}\n\nNome: ${form.name}\nWhatsApp: ${form.phone}`
    )
    window.open(`https://wa.me/5516992290475?text=${msg}`, '_blank')
  }

  const inputStyle = {
    background: '#1a1a1a',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: '14px 16px',
    color: '#fff',
    fontSize: 15,
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.15s',
    fontFamily: 'inherit',
  }

  return (
    <section id="orcamento" style={{ background: '#0d0d0d', padding: '100px 0' }}>
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-14">
          <p style={{ color: '#FF2D55', fontSize: 12, fontWeight: 600, letterSpacing: '1.5px', marginBottom: 12 }}>SIMULADOR</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: 12 }}>
            Orçamento Instantâneo
          </h2>
          <p style={{ color: '#8e8e93', fontSize: 16 }}>
            Selecione o problema do seu aparelho e receba uma estimativa rápida.
          </p>
        </div>

        <div style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: '40px 36px' }}>
          <div className="flex flex-col gap-4">
            <div>
              <label style={{ color: '#8e8e93', fontSize: 12, fontWeight: 600, letterSpacing: '0.5px', display: 'block', marginBottom: 8 }}>MARCA DO CELULAR</label>
              <select
                value={form.brand}
                onChange={e => setForm(f => ({ ...f, brand: e.target.value }))}
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,45,85,0.5)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              >
                <option value="">Selecione a marca</option>
                {brands.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            <div>
              <label style={{ color: '#8e8e93', fontSize: 12, fontWeight: 600, letterSpacing: '0.5px', display: 'block', marginBottom: 8 }}>MODELO DO APARELHO</label>
              <input
                type="text"
                placeholder="Ex: iPhone 14 Pro, Galaxy S23..."
                value={form.model}
                onChange={e => setForm(f => ({ ...f, model: e.target.value }))}
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,45,85,0.5)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
            </div>

            <div>
              <label style={{ color: '#8e8e93', fontSize: 12, fontWeight: 600, letterSpacing: '0.5px', display: 'block', marginBottom: 8 }}>TIPO DE DEFEITO</label>
              <select
                value={form.defect}
                onChange={e => setForm(f => ({ ...f, defect: e.target.value }))}
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,45,85,0.5)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              >
                <option value="">Selecione o defeito</option>
                {defects.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '4px 0' }} />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label style={{ color: '#8e8e93', fontSize: 12, fontWeight: 600, letterSpacing: '0.5px', display: 'block', marginBottom: 8 }}>SEU NOME</label>
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,45,85,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>
              <div>
                <label style={{ color: '#8e8e93', fontSize: 12, fontWeight: 600, letterSpacing: '0.5px', display: 'block', marginBottom: 8 }}>WHATSAPP</label>
                <input
                  type="tel"
                  placeholder="(11) 9 0000-0000"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,45,85,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-3 mt-2 transition-all"
              style={{ background: '#FF2D55', color: '#fff', fontWeight: 700, fontSize: 16, padding: '16px 32px', borderRadius: 100, border: 'none', cursor: 'pointer', width: '100%' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,45,85,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >
              <IconWhatsapp /> Gerar Orçamento no WhatsApp
            </button>

            <p style={{ textAlign: 'center', color: '#6e6e73', fontSize: 12 }}>
              Ao enviar, você será redirecionado ao WhatsApp do Técnico Celinho.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactAndFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="contato" style={{ background: '#f5f5f7', padding: '100px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact */}
          <div>
            <p style={{ color: '#FF2D55', fontSize: 12, fontWeight: 600, letterSpacing: '1.5px', marginBottom: 12 }}>FALE CONOSCO</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#000', marginBottom: 8 }}>
              Contato Direto
            </h2>
            <p style={{ color: '#6e6e73', fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
              Escolha o canal mais conveniente para você.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: <IconWhatsapp />, label: 'WhatsApp', value: '(11) 9 9999-0000', href: 'https://wa.me/5516992290475', accent: true },
                { icon: <IconPhone />, label: 'Telefone', value: '(11) 3000-0000', href: 'tel:+551130000000' },
                { icon: <IconMail />, label: 'E-mail', value: 'contato@drcell.com.br', href: 'mailto:contato@drcell.com.br' },
                { icon: <IconInstagram />, label: 'Instagram', value: '@drcell.oficial', href: 'https://instagram.com' },
              ].map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 transition-all"
                  style={{
                    background: c.accent ? 'rgba(255,45,85,0.08)' : '#fff',
                    border: c.accent ? '1px solid rgba(255,45,85,0.2)' : '1px solid #e5e5ea',
                    borderRadius: 16,
                    padding: '16px 20px',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = '' }}
                >
                  <div style={{ color: '#FF2D55', width: 20, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: '#8e8e93', fontWeight: 600, letterSpacing: '0.5px' }}>{c.label.toUpperCase()}</div>
                    <div style={{ fontSize: 15, color: '#000', fontWeight: 600, marginTop: 2 }}>{c.value}</div>
                  </div>
                  <div className="ml-auto" style={{ color: '#8e8e93' }}><IconArrowRight /></div>
                </a>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <p style={{ color: '#FF2D55', fontSize: 12, fontWeight: 600, letterSpacing: '1.5px', marginBottom: 12 }}>DÚVIDAS FREQUENTES</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#000', marginBottom: 8 }}>
              Perguntas Frequentes
            </h2>
            <p style={{ color: '#6e6e73', fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
              As respostas mais comuns para quem está contratando pela primeira vez.
            </p>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{ background: '#fff', border: '1px solid #e5e5ea', borderRadius: 16, overflow: 'hidden' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between transition-all"
                    style={{ padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#000', flex: 1, paddingRight: 12 }}>{faq.q}</span>
                    <div style={{ color: '#FF2D55', flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(180deg)' : 'none' }}>
                      <IconChevronDown />
                    </div>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 20px 18px', borderTop: '1px solid #f0f0f0' }}>
                      <p style={{ color: '#6e6e73', fontSize: 14, lineHeight: 1.7, paddingTop: 14 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div style={{ width: 32, height: 32, borderRadius: 10, background: '#FF2D55', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 13, fontWeight: 800 }}>Dr</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 16, color: '#fff', letterSpacing: '-0.3px' }}>Dr. Cell</span>
          </div>

          {/* Copyright */}
          <p style={{ color: '#6e6e73', fontSize: 13, textAlign: 'center' }}>
            © 2024 Dr. Cell — Todos os direitos reservados.{' '}
            <a href="#" style={{ color: '#8e8e93', textDecoration: 'underline' }}>Política de Privacidade</a>
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: <IconWhatsapp />, href: 'https://wa.me/5516992290475', label: 'WhatsApp' },
              { icon: <IconInstagram />, href: 'https://instagram.com', label: 'Instagram' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="transition-all"
                style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8e8e93', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#FF2D55'; e.currentTarget.style.borderColor = 'rgba(255,45,85,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#8e8e93'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      <Navbar />
      <Hero />
      <Services />
      <Location />
      <QuoteForm />
      <ContactAndFAQ />
      <Footer />
    </div>
  )
}

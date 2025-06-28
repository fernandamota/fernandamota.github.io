import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const styles: { [key: string]: React.CSSProperties } = {
  arrowRightIcon: {
    width: '1.25rem',
    height: '1.25rem',
    marginLeft: '0.5rem',
    transitionProperty: 'transform',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
    zIndex: 10,
  },
  arrowRightIconHover: {
    transform: 'translateX(0.25rem)',
  },
  documentIcon: {
    width: '1.5rem',
    height: '1.5rem',
  },

  portfolioSection: {
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    position: 'relative',
  },
  portfolioOverlay: {
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
    backgroundColor: 'var(--portfolio-dark-blue-purple)',
  },
  portfolioContainer: {
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '5rem',
    paddingBottom: '5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    position: 'relative',
    zIndex: 10,
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: '5rem',
  },
  mainTitle: {
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
    fontWeight: 700,
    letterSpacing: '-0.025em',
    color: '#ffffff',
  },
  mainTitleSpan: {
    color: 'var(--portfolio-gold)',
  },
  subTitle: {
    marginTop: '1.5rem',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    color: 'var(--portfolio-light-gray)',
    maxWidth: '48rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  qualificationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    gap: '2.5rem',
  },
  qualificationCard: {
    backgroundColor: 'var(--portfolio-medium-blue)',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.30)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
    display: 'flex',
    flexDirection: 'column',
  },
  qualificationCardHover: {
    borderColor: 'rgba(var(--portfolio-gold-rgb), 0.3)',
  },
  cardImageContainer: {
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '14rem',
    objectFit: 'cover',
    transitionProperty: 'transform',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '500ms',
  },
  cardImageHover: {
     transform: 'scale(1.05)',
  },
  cardTextContent: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '1rem',
  },
  cardDescription: {
    color: 'var(--portfolio-light-gray)',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  tagsContainer: {
    marginBottom: '2rem',
  },
  tagSpan: {
    display: 'inline-block',
    backgroundColor: 'rgba(var(--portfolio-gold-rgb), 0.1)',
    color: 'var(--portfolio-gold)',
    borderRadius: '9999px',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 500,
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
  },
  cardButtonContainer: {
    marginTop: 'auto',
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    backgroundColor: 'var(--portfolio-gold)',
    color: 'var(--portfolio-dark-blue-purple)',
    fontWeight: 700,
    borderRadius: '0.375rem',
    transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  ctaButtonSpan: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
  },

  fab: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    backgroundColor: 'var(--portfolio-gold)',
    color: 'var(--portfolio-dark-blue-purple)',
    width: '4rem',
    height: '4rem',
    borderRadius: '9999px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
    zIndex: 50,
    border: 'none',
    cursor: 'pointer',
  },
  fabHover: {
    backgroundColor: 'var(--portfolio-lighter-gold)',
  },
  fabTooltip: {
    position: 'absolute',
    bottom: '50%',
    transform: 'translateY(50%)',
    right: '100%',
    marginRight: '1rem',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.375rem',
    paddingBottom: '0.375rem',
    backgroundColor: 'var(--portfolio-medium-blue)',
    color: '#ffffff',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 500,
    borderRadius: '0.375rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    opacity: 0,
    transitionProperty: 'opacity',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
    whiteSpace: 'nowrap',
  },
  fabTooltipHover: {
    opacity: 1,
  },
};

const ArrowRightIcon: React.FC<{isGroupHovered?: boolean}> = ({ isGroupHovered }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round"
        style={{
            ...styles.arrowRightIcon,
            ...(isGroupHovered ? styles.arrowRightIconHover : {})
        }}
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

const DocumentIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round"
        style={styles.documentIcon}
    >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
    </svg>
);

const qualifications = [
  {
    title: 'Formação Acadêmica',
    description: 'Graduada em Psicologia pela Universidade Federal de Alagoas, com Pós-Graduação em Neuropsicologia e em TEA (Transtorno do Espectro Autista).',
    imageUrl: 'https://placehold.co/600x400/1A1A2E/FFD700?text=Formação',
    tags: ['Psicologia', 'Neuropsicologia', 'Autismo'],
    buttonText: 'Agendar consulta',
    ctaUrl: '/client-contact',
  },
  {
    title: 'Experiência Clínica',
    description: 'Atualmente na AACD, com mais de 5 anos de experiência no atendimento de crianças com Espectro Autista, Síndrome de Down, TDAH e outras deficiências.',
    imageUrl: 'https://placehold.co/600x400/1F4287/FFD700?text=Experiência',
    tags: ['AACD', 'Crianças', 'TEA'],
    buttonText: 'Agendar consulta',
    ctaUrl: '/client-contact',
  },
  {
    title: 'Abordagem Terapêutica',
    description: 'Foco na Gestalt-terapia, com capacitação no método TEACCH e no programa ABA para crianças e adolescentes com desenvolvimento atípico.',
    imageUrl: 'https://placehold.co/600x400/1F4287/FFD700?text=Abordagem',
    tags: ['Gestalt', 'TEACCH', 'ABA'],
    buttonText: 'Agendar consulta',
    ctaUrl: '/client-contact',
  },
];

const Portfolio: React.FC = () => {
    useEffect(() => {
        document.title = 'Atendimento Psicológico';
    }, []);
    const navigate = useNavigate();
    const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
    const [fabHovered, setFabHovered] = useState(false);
    const [ctaButtonHovered, setCtaButtonHovered] = useState<number | null>(null);

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    const combinedPortfolioContainerStyle = {
        ...styles.portfolioContainer,
    };

    const combinedMainTitleStyle = {
        ...styles.mainTitle,
    };

    return (
        <section
            id="qualificacoes"
            style={{
                ...styles.portfolioSection,
                backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-matter.png')"
            }}
        >
            <div style={styles.portfolioOverlay} />

            <div style={combinedPortfolioContainerStyle}>
                <div style={styles.titleSection}>
                    <h2 style={combinedMainTitleStyle}>
                        Uma jornada de cuidado guiada por uma <span style={styles.mainTitleSpan}>profissional qualificada</span>
                    </h2>
                    <p style={styles.subTitle}>
                        Conheça a base de conhecimento e experiência que sustenta minha prática clínica.
                    </p>
                </div>

                <div style={styles.qualificationsGrid}>
                    {qualifications.map((qual, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.qualificationCard,
                                ...(hoveredCardIndex === index ? styles.qualificationCardHover : {})
                            }}
                            onMouseEnter={() => setHoveredCardIndex(index)}
                            onMouseLeave={() => setHoveredCardIndex(null)}
                        >
                            <div style={styles.cardImageContainer}>
                                <img
                                    src={qual.imageUrl}
                                    alt={`Imagem ilustrativa de ${qual.title}`}
                                    style={{
                                        ...styles.cardImage,
                                        ...(hoveredCardIndex === index ? styles.cardImageHover : {})
                                    }}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src=`https://placehold.co/600x400/${COLOR_DARK_BLUE_PURPLE.slice(1)}/${COLOR_GOLD.slice(1)}?text=Imagem+Indisponível`;
                                    }}
                                />
                            </div>
                            <div style={styles.cardTextContent}>
                                <div>
                                    <h3 style={styles.cardTitle}>{qual.title}</h3>
                                    <p style={styles.cardDescription}>{qual.description}</p>
                                    <div style={styles.tagsContainer}>
                                        {qual.tags.map(tag => (
                                            <span key={tag} style={styles.tagSpan}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div style={styles.cardButtonContainer}>
                                    <button
                                        onClick={() => handleNavigate(qual.ctaUrl)}
                                        className="shine-button"
                                        style={styles.ctaButton}
                                        onMouseEnter={() => setCtaButtonHovered(index)}
                                        onMouseLeave={() => setCtaButtonHovered(null)}
                                    >
                                        <span style={styles.ctaButtonSpan}>
                                            {qual.buttonText} <ArrowRightIcon isGroupHovered={ctaButtonHovered === index} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={() => handleNavigate('/gerar-contrato')}
                title="Gerador de Contrato para Psicólogos"
                style={{
                    ...styles.fab,
                    ...(fabHovered ? styles.fabHover : {})
                }}
                onMouseEnter={() => setFabHovered(true)}
                onMouseLeave={() => setFabHovered(false)}
            >
                <DocumentIcon />
                <span style={{
                    ...styles.fabTooltip,
                    ...(fabHovered ? styles.fabTooltipHover : {})
                }}>
                    Gerador de Contrato
                </span>
            </button>
        </section>
    );
};

export default Portfolio;

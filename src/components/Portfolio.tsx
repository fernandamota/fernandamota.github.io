import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faPlus, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Portfolio.css';
import fotoPrincipal from '../assets/images/foto-principal.webp'
import fotoFormacao from '../assets/images/foto-formacao.webp';
import fotoExperiencia from '../assets/images/foto-experiencia.webp';
import fotoAbordagem from '../assets/images/foto-abordagem.webp';

// --- DADOS DO COMPONENTE ---

const expertiseAreas = [
    {
        title: 'Formação Acadêmica',
        description: 'Graduada em Psicologia pela Universidade Federal de Alagoas, com Pós-Graduação em Neuropsicologia e em TEA, formação em Gestalt-Terapia buscando sempre a mais sólida base teórica para uma prática clínica eficaz e atualizada.',
        imageUrl: fotoFormacao,
        tags: ['Psicologia', 'Neuropsicologia', 'Autismo'],
    },
    {
        title: 'Experiência Clínica',
        description: 'Atuação na AACD e em consultório particular, com vasta experiência no cuidado a pessoas com deficiências físicas e neurodivergências, como Transtorno do Espectro Autista, TDAH, entre outras condições. Prática consolidada em escuta clínica qualificada, acolhendo crianças, adolescentes e adultos em diferentes contextos de desenvolvimento e saúde mental.',
        imageUrl: fotoExperiencia,
        tags: ['AACD', 'Crianças', 'Desenvolvimento Atípico'],
    },
    {
        title: 'Abordagem Terapêutica',
        description: 'A prática clínica está fundamentada na Gestalt-terapia, abordagem humanista-existencial que compreende o indivíduo em sua totalidade, valorizando a consciência no aqui-e-agora, a integração entre dimensões emocionais, cognitivas e corporais e a responsabilidade no processo de desenvolvimento pessoal. Além disso, conta com capacitações específicas para o atendimento de pessoas neurodivergentes, possibilitando um suporte terapêutico individualizado e sensível às singularidades de cada sujeito.',
        imageUrl: fotoAbordagem,
        tags: ['Gestalt-terapia', 'TEACCH', 'ABA'],
    },
];

const testimonials = [
    { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien vitae massa rhoncus lacinia. Nullam at interdum nisi.", author: "A. S., Mãe de paciente" },
    { quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.", author: "R. F., Paciente" },
];

const faqData = [
    { question: "Como funciona a primeira consulta?", answer: "A primeira consulta é uma conversa inicial onde podemos nos conhecer, você pode expor suas questões e eu explico como meu trabalho pode ajudar. É um espaço para tirar dúvidas e entendermos se há uma boa conexão terapêutica para seguirmos em frente." },
    { question: "Qual a duração e frequência das sessões?", answer: "Normalmente, as sessões têm duração de 50 minutos e ocorrem semanalmente. No entanto, a frequência pode ser ajustada de acordo com a necessidade e o plano terapêutico que construiremos juntos." },
    { question: "Vocês aceitam plano de saúde?", answer: "Atendo de forma particular. No entanto, forneço recibo para que você possa solicitar o reembolso junto ao seu plano de saúde, de acordo com as condições da sua apólice." },
];

// --- COMPONENTE FAQ ITEM ---

interface FaqItemProps {
    item: { question: string; answer: string };
    isOpen: boolean;
    toggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ item, isOpen, toggle }) => (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
        <button className="faq-question" onClick={toggle}>
            {item.question}
            <FontAwesomeIcon icon={faPlus} className="icon" />
        </button>
        <div className="faq-answer" style={{ maxHeight: isOpen ? '200px' : '0' }}>
            <p>{item.answer}</p>
        </div>
    </div>
);


// --- COMPONENTE PRINCIPAL ---

const Portfolio: React.FC = () => {
    useEffect(() => {
        document.title = 'Portfólio | Atendimento Psicológico';
    }, []);

    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="portfolio-page-light">

            {/* Seção Herói */}
            <section className="section-container hero-section">
                <div className="hero-content">
                    <p className="hero-eyebrow">Fernanda Mota | Psicóloga CRP 02/21789</p>
                    <h1 className="hero-title">
		Compromisso com a saúde mental e a qualidade de vida
		</h1>
                    <p className="hero-description">
			Ofereço um espaço de acolhimento e escuta para quem busca fortalecer sua saúde mental. Através de uma abordagem humanista-existencial, ajudo as pessoas a explorar seus desafios e a encontrar novos caminhos para uma vida mais autêntica e significativa. Os atendimentos podem ser online ou presenciais em Recife.	
		    </p>
                    <button onClick={() => navigate('/client-contact')} className="cta-button">Agendar uma conversa</button>
                </div>
                <div className="hero-image-wrapper">
                    <img src={fotoPrincipal} alt="Fernanda Mota" />
                </div>
            </section>

            {/* Seção de Especialidades */}
            <section className="section-container">
                {expertiseAreas.map((item, index) => (
                    <div key={index} className="expertise-item">
                        <div className="expertise-image-wrapper">
                            <img src={item.imageUrl} alt={`Ilustração para ${item.title}`} />
                        </div>
                        <div>
                            <h2 className="expertise-title">{item.title}</h2>
                            <p className="expertise-description">{item.description}</p>
                            <div className="expertise-tags">
                                {item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Seção de Depoimentos */}
            <section className="section-container testimonials-section">
                <h2 className="section-title">O que dizem sobre o processo</h2>
                <p className="section-subtitle">A confiança é a base de qualquer jornada terapêutica. Veja o que clientes e famílias compartilham sobre suas experiências.</p>
                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-quote">"{item.quote}"</p>
                            <p className="testimonial-author">- {item.author}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Seção de FAQ */}
            <section className="section-container">
                <div style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Perguntas Frequentes</h2>
                    <p className="section-subtitle">Tire suas principais dúvidas sobre o processo terapêutico e como podemos começar.</p>
                </div>
                <div className="faq-container">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openFaq === index}
                            toggle={() => toggleFaq(index)}
                        />
                    ))}
                </div>
            </section>

            {/* Botão Flutuante */}
            <div className="fab-container">
                <button
                    onClick={() => navigate('/gerar-contrato')}
                    title="Gerador de Contrato para Psicólogos"
                    className="fab"
                >
                    <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: '24px' }} />
                </button>
            </div>

            {/* Rodapé */}
            <footer className="footer">
                <div className="footer-content">
                    <p>Fernanda Mota | Psicóloga CRP 02/21789</p>
                    <div className="footer-contact">
                        <a href="tel:+5581981297306" aria-label="Telefone"><FontAwesomeIcon icon={faPhone} /> (81) 98129-7306</a>
                        <a href="https://wa.me/5581981297306" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /> (81) 98129-7306</a>
                        <a href="mailto:psicofernanda85@gmail.com" aria-label="E-mail"><FontAwesomeIcon icon={faEnvelope} /> psicofernanda85@gmail.com</a>
                        <a href="https://instagram.com/fernandamotapsi" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /> @fernandamotapsi</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;

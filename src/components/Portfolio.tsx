import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Plus } from 'lucide-react';
import './Portfolio.css';
import fotoPrincipal from '../assets/images/foto-principal.webp'
import fotoFormacao from '../assets/images/foto-formacao.webp';
import fotoExperiencia from '../assets/images/foto-experiencia.webp';
import fotoAbordagem from '../assets/images/foto-abordagem.webp';

// --- DADOS DO COMPONENTE ---

const expertiseAreas = [
    {
        title: 'Formação Acadêmica',
        description: 'Graduada em Psicologia pela Universidade Federal de Alagoas, com Pós-Graduação em Neuropsicologia e em TEA, buscando sempre a mais sólida base teórica para uma prática clínica eficaz e atualizada.',
        imageUrl: fotoFormacao,
        tags: ['Psicologia', 'Neuropsicologia', 'Autismo'],
    },
    {
        title: 'Experiência Clínica',
        description: 'Atuação na AACD e em consultório particular, com mais de 5 anos de experiência no atendimento de crianças e adolescentes com Espectro Autista, TDAH, Síndrome de Down e outras neurodivergências.',
        imageUrl: fotoExperiencia,
        tags: ['AACD', 'Crianças', 'Desenvolvimento Atípico'],
    },
    {
        title: 'Abordagem Terapêutica',
        description: 'Foco na Gestalt-terapia, uma abordagem que valoriza o aqui-e-agora e a totalidade do ser. Utilizo também ferramentas das capacitações TEACCH e ABA para um suporte completo e individualizado.',
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
            <Plus className="icon" size={20} />
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
                    <p className="hero-eyebrow">Fernanda Mota | Psicóloga CRP 15/4321</p>
                    <h1 className="hero-title">Um caminho seguro para o desenvolvimento e bem-estar</h1>
                    <p className="hero-description">Ofereço um espaço de escuta, acolhimento e técnica para crianças, adolescentes e suas famílias encontrarem novas formas de ser e estar no mundo.</p>
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
                    <FileText size={24} />
                </button>
            </div>
        </div>
    );
};

export default Portfolio;

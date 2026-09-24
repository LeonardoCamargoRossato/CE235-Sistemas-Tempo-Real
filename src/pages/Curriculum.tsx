import { Github, Linkedin, Building2, Globe2, FileUser } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import SocialCard from "../components/SocialCard";
import ExternalButton from "../components/ExternalButton";
import { links, CV_URL } from "../data/links";
export default function Curriculum(){return <section className="section page-section"><div className="container">
<SectionTitle eyebrow="Perfil profissional" title="Currículo e Redes Profissionais" description="Conexões entre a formação acadêmica, pesquisa, engenharia de sistemas e desenvolvimento tecnológico."/>
<div className="social-grid">
<SocialCard title="Site Pessoal" description="Portfólio de projetos, pesquisa e atuação profissional." href={links.personalSiteUrl} icon={<Globe2/>}/>
<SocialCard title="LinkedIn" description="Experiência profissional, formação e atividades." href={links.linkedinUrl} icon={<Linkedin/>}/>
<SocialCard title="GitHub" description="Repositórios, aplicações e projetos técnicos." href={links.githubUrl} icon={<Github/>}/>
<SocialCard title="Instituto Foton" description="P&D, inovação e tecnologias quânticas." href={links.fotonUrl} icon={<Building2/>}/>
</div>
<div className="cv-panel"><div><span className="eyebrow">Curriculum Vitae</span><h2>Formação, pesquisa e experiência</h2><p>O botão abaixo fica automaticamente habilitado quando a URL do CV for preenchida em <code>src/data/links.ts</code>.</p></div><ExternalButton href={CV_URL} className="button button--gold"><FileUser size={16}/> Acessar CV</ExternalButton></div>
</div></section>}
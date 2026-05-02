/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Target, 
  Award, 
  Briefcase, 
  MessageSquare, 
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Handshake,
  Smartphone,
  Globe,
  Figma,
  Database,
  Zap,
  Cpu,
  ChevronDown,
  Code2,
  Wind,
  Layers,
  Palette,
  Layout,
  FileText,
  Users2,
  MousePointer2,
  PenTool,
  Video,
  Box
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqData = [
    {
      q: "Como funciona a etapa de desenvolvimento?",
      a: "Eu lidero pessoalmente toda a estratégia, o design (UX/UI) e a gestão do projeto. Para a etapa de programação de sistemas complexos, conto com um braço técnico parceiro especialista em código. Seu contato é 100% comigo, garantindo que a visão de negócios seja executada com perfeição."
    },
    {
      q: "Como a automação pode ajudar minha empresa?",
      a: "Conectamos seus sistemas para que tarefas repetitivas (como gestão de leads, envio de propostas e organização de planilhas) sejam feitas por robôs e IA, economizando horas da sua equipe."
    },
    {
      q: "Qual é o tempo médio de um projeto?",
      a: "Depende da complexidade, mas dividimos as entregas em ciclos rápidos para que você já veja resultados nas primeiras semanas."
    },
    {
      q: "Vocês usam templates prontos?",
      a: "Não. Todo projeto é desenhado do zero no Figma para atender exatamente às regras da sua operação, resultando em um sistema exclusivo e focado em conversão."
    },
    {
      q: "O que acontece depois que o projeto é entregue? Vocês oferecem suporte?",
      a: "Sim. Após o lançamento, oferecemos um período de acompanhamento e garantia para garantir a estabilidade do sistema. Depois disso, você pode optar por pacotes de manutenção contínua e evolução do produto, garantindo que sua plataforma cresça junto com a sua empresa."
    },
    {
      q: "Como funcionam os orçamentos e prazos?",
      a: "Como trabalhamos com soluções sob medida de alta complexidade, não temos pacotes tabelados. O processo começa com uma Sessão de Estratégia gratuita para entendermos o seu cenário. A partir daí, desenhamos o escopo, o cronograma de entregas (dividido em etapas ágeis) e o investimento necessário para a sua operação escalar."
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-ink flex items-center justify-center rounded-md">
              <span className="text-white font-display font-bold text-lg">IT</span>
            </div>
            <span className="font-display text-xl font-bold uppercase tracking-tight">Isabella Tragante</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate">
              <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
              <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
              <a href="#processo" className="hover:text-accent transition-colors">Como Funciona</a>
            </div>
            <a href="#contato" className="bg-accent text-white px-6 py-3 font-display font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all rounded-lg">
              Falar com Especialista
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-paper border-t border-border overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate">
                  <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors py-2">Sobre</a>
                  <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors py-2">Serviços</a>
                  <a href="#processo" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors py-2">Como Funciona</a>
                </div>
                <a 
                  href="#contato" 
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-accent text-white px-6 py-4 font-display font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all rounded-lg text-center"
                >
                  Falar com Especialista
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center relative">
          <motion.div {...fadeIn} className="flex flex-col gap-8">
            <div className="tech-label flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-accent animate-pulse" />
              CONSULTORIA DE PRODUTO DIGITAL
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-bold leading-[0.95] tracking-tighter text-gradient">
              Design estratégico e inteligência para <span className="text-accent italic">escalar a sua operação</span>.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-slate font-medium max-w-2xl">
              Sou Product Designer e Estrategista Digital especializada em transformar necessidades de negócios em soluções escaláveis. Uno minha experiência corporativa em análise de requisitos com o design centrado no usuário e automações inteligentes para estruturar plataformas de alta performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contato" className="btn-gradient px-10 py-5 font-display font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3">
                Agendar Sessão de Estratégia
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="blueprint-border aspect-[4/5] shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-t from-ink/40 to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity" />
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop" 
              alt="Interface Abstrata de Tecnologia"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none z-20" />
            <div className="absolute bottom-6 left-6 bg-white p-4 shadow-lg z-30 rounded-lg">
              <div className="tech-label mb-1">Especialidades</div>
              <div className="font-display font-bold text-sm">UI/UX, 3D & Motion Design</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise & Tech Stack Section */}
      <section className="py-20 bg-paper/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="tech-label text-accent mb-4">Nossa Stack Tecnológica</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight">Especialidades & Ferramentas</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Design, 3D & Motion */}
            <div className="p-8 border border-border bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg uppercase">Design, 3D & Motion</h3>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-slate font-medium">
                  <Figma className="w-5 h-5 opacity-40" />
                  <span>Figma</span>
                </li>
                <li className="flex items-center gap-3 text-slate font-medium">
                  <Layout className="w-5 h-5 opacity-40" />
                  <span>Photoshop</span>
                </li>
                <li className="flex items-center gap-3 text-slate font-medium">
                  <PenTool className="w-5 h-5 opacity-40" />
                  <span>Illustrator</span>
                </li>
                <li className="flex items-center gap-3 text-slate font-medium">
                  <Video className="w-5 h-5 opacity-40" />
                  <span>After Effects (Animação)</span>
                </li>
                <li className="flex items-center gap-3 text-slate font-medium">
                  <Box className="w-5 h-5 opacity-40" />
                  <span>Maya (Modelagem 3D)</span>
                </li>
                <li className="flex items-center gap-3 text-slate font-medium">
                  <Palette className="w-5 h-5 opacity-40" />
                  <span>Substance Painter (Texturização)</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Gestão de Desenvolvimento */}
            <div className="p-8 border border-border bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg uppercase">Gestão de Desenvolvimento</h3>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-slate font-medium">
                  <Code2 className="w-5 h-5 opacity-40" />
                  <span>Desenvolvimento Sob Medida</span>
                </li>
                <li className="flex items-center gap-3 text-slate font-medium">
                  <Zap className="w-5 h-5 opacity-40" />
                  <span>Sistemas de Alta Performance</span>
                </li>
                <li className="flex items-center gap-3 text-slate font-medium">
                  <Layers className="w-5 h-5 opacity-40" />
                  <span>Orquestração Técnica</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Gestão & Dados */}
            <div className="p-8 border border-border bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg uppercase">Gestão & Dados</h3>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-slate font-medium">
                  <FileText className="w-5 h-5 opacity-40" />
                  <span>Análise de Requisitos</span>
                </li>
                <li className="flex items-center gap-3 text-slate font-medium">
                  <Users2 className="w-5 h-5 opacity-40" />
                  <span>Scrum</span>
                </li>
                <li className="flex items-center gap-3 text-slate font-medium">
                  <Zap className="w-5 h-5 opacity-40" />
                  <span>Automação (n8n)</span>
                </li>
                <li className="flex items-center gap-3 text-slate font-medium">
                  <Database className="w-5 h-5 opacity-40" />
                  <span>Banco de Dados (SQL)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-6 border-y border-border bg-linear-to-b from-white to-paper/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="tech-label text-accent">Análise de Mercado</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-gradient">Sua empresa está perdendo vendas por causa de um site antigo?</h2>
          </div>
          <div className="bg-linear-to-br from-ink to-slate text-paper p-10 blueprint-border">
            <p className="text-lg md:text-xl leading-relaxed opacity-90 font-medium">
              Se o seu site é lento, difícil de usar ou não passa confiança, o seu cliente desiste em segundos. Hoje, quem não é visto com profissionalismo na internet, perde espaço para a concorrência. Não deixe o seu faturamento escapar por uma falha de apresentação.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <motion.div {...fadeIn} className="flex flex-col gap-10">
            <div className="tech-label">Sobre Isabella Tragante</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight text-gradient">
              Interfaces que convertem. <br />
              <span className="text-slate italic">Automações que escalam.</span>
            </h2>
            <div className="flex flex-col gap-8 text-lg leading-relaxed text-slate font-medium">
              <p>
                Sou Web Designer pela FIAP, mas minha base vem da estratégia de negócios e da comunicação. Como ex-Analista de Requisitos, aprendi a mapear a fundo as dores das empresas e estruturar processos. Hoje, atuo como a ponte perfeita entre o seu negócio e a tecnologia. Desenho a estratégia, a experiência do usuário (UX/UI) e gerencio a execução técnica de ponta a ponta, garantindo que a solução final resolva problemas reais da sua operação.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border border-border bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl">
                  <Award className="w-6 h-6 text-accent mb-4" />
                  <div className="tech-label mb-2">Formação</div>
                  <div className="font-display font-bold text-sm">Web Design (FIAP)</div>
                </div>
                <div className="p-6 border border-border bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl">
                  <Handshake className="w-6 h-6 text-accent mb-4" />
                  <div className="tech-label mb-2">Diferencial</div>
                  <div className="font-display font-bold text-sm">Visão de Ponta a Ponta</div>
                </div>
              </div>
              <p>
                Por isso, combino design focado em conversão com automações de processos (n8n), inteligência artificial (NotebookLM) e bancos de dados (SQL) para entregar soluções que resolvem problemas reais da sua operação.
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <div className="blueprint-border aspect-square shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-tr from-accent/10 to-transparent z-10 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Tecnologia e Performance"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Technical Overlay */}
            <div className="absolute -bottom-10 -left-10 btn-gradient p-8 shadow-2xl hidden md:block">
              <div className="tech-label text-white/70 mb-2">Diferencial</div>
              <div className="font-display font-bold text-2xl leading-tight">
                Sites que <br /> trazem resultados.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 px-6 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col gap-4 mb-20">
            <div className="tech-label text-accent">Nossos Serviços</div>
            <h2 className="font-display text-4xl md:text-7xl font-bold">Soluções para Organizar e Crescer sua Empresa.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-1 bg-white/10">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Presença Digital Profissional",
                desc: "Criamos sites que passam autoridade e confiança imediata para quem visita, fortalecendo a imagem da sua marca."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Foco no Seu Cliente",
                desc: "Design pensado para ser simples e fácil de usar para qualquer pessoa, facilitando o contato e a venda."
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Velocidade e Segurança",
                desc: "Sites rápidos que abrem no celular sem travar, garantindo que você não perca nenhum cliente por demora."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-ink hover:bg-linear-to-br hover:from-ink hover:to-accent/20 transition-all duration-500 group"
              >
                <div className="text-accent mb-8 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] transition-all">{service.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-32 px-6 bg-linear-to-b from-paper to-white">
        <div className="max-w-7xl mx-auto">
          <div className="tech-label text-accent mb-12">Como Trabalhamos</div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Levantamento de Requisitos", txt: "Mergulhamos nas regras do seu negócio. Utilizo minha experiência corporativa para mapear suas necessidades e traduzi-las em especificações técnicas e estratégicas claras." },
              { step: "02", title: "Prototipação & UX/UI", txt: "Desenho a jornada do usuário e a interface no Figma, alinhando estética e usabilidade antes de escrever qualquer linha de código." },
              { step: "03", title: "Desenvolvimento & Automação", txt: "Com a estratégia e o design aprovados, orquestro a implementação técnica junto ao meu parceiro especialista em programação. Garanto que a solução final e o banco de dados reflitam as regras do seu negócio com segurança e escalabilidade." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-6 group">
                <div className="font-display text-5xl font-bold text-border group-hover:text-accent/20 transition-colors">{item.step}</div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-slate leading-relaxed font-medium">{item.txt}</p>
                <div className="h-1 w-12 bg-linear-to-r from-accent to-accent-deep group-hover:w-24 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-32 px-6 bg-white border-t border-border relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-radial-to-tl from-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative flex flex-col items-center gap-10">
          <div className="flex flex-col gap-6">
            <div className="tech-label text-accent">Fale Conosco</div>
            <h2 className="font-display text-4xl md:text-7xl font-bold leading-tight text-gradient">Vamos profissionalizar a sua presença digital?</h2>
            <p className="text-xl text-slate leading-relaxed font-medium">
              Agende uma conversa rápida. Sem termos técnicos complicados, apenas foco no que a sua empresa precisa para vender mais.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <div className="flex items-center gap-4 p-6 border border-border bg-white/50 backdrop-blur-sm hover:border-accent/50 transition-colors rounded-xl flex-1 max-w-xs">
              <MessageSquare className="w-6 h-6 text-accent" />
              <span className="font-display font-bold text-lg">Atendimento Direto</span>
            </div>
            <div className="flex items-center gap-4 p-6 border border-border bg-white/50 backdrop-blur-sm hover:border-accent/50 transition-colors rounded-xl flex-1 max-w-xs">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <span className="font-display font-bold text-lg">Suporte Garantido</span>
            </div>
          </div>

          <a 
            href="https://wa.me/5583996157873" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-gradient py-6 px-16 font-display font-bold text-lg uppercase tracking-[0.2em] shadow-2xl"
          >
            Agendar Sessão de Estratégia
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-paper/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="tech-label text-accent mb-4">Dúvidas Comuns</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight">Perguntas Frequentes</h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqData.map((item, i) => (
              <div 
                key={i} 
                className="border border-border bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/30 shadow-sm"
              >
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                >
                  <span className="font-display font-bold text-lg md:text-xl pr-8">{item.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-accent transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`} 
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaqIndex === i ? "auto" : 0, opacity: openFaqIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-8 text-slate leading-relaxed font-medium">
                    <div className="pt-2 border-t border-border/50">
                      {item.a}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-ink flex items-center justify-center rounded-sm">
              <span className="text-white font-display font-bold text-[10px]">IT</span>
            </div>
            <span className="tech-label">Isabella Tragante // Estratégia Digital</span>
          </div>
          <div className="tech-label opacity-50">
            © {new Date().getFullYear()} // Tecnologia, Confiança e Resultados Reais
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a 
        href="https://wa.me/5583996157873" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex flex-row-reverse items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 fill-current" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-3 transition-all duration-500 font-display font-bold text-sm uppercase tracking-widest whitespace-nowrap">
          Falar com Especialista
        </span>
      </a>
    </div>
  );
}





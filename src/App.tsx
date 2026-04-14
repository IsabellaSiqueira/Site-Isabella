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
  Globe
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              Consultoria Especializada em João Pessoa
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-bold leading-[0.95] tracking-tighter text-gradient">
              O site da sua empresa deve ser o seu <span className="text-accent italic">melhor vendedor</span>.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-slate font-medium max-w-2xl">
              Tecnologia de ponta de São Paulo com a confiança e o compromisso da Paraíba. Criamos sites profissionais que funcionam de verdade e trazem novos clientes para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contato" className="btn-gradient px-10 py-5 font-display font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3">
                Quero um Diagnóstico Gratuito
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
              src="https://picsum.photos/seed/macbook-tech-minimal/800/1000" 
              alt="Tecnologia e Performance"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none z-20" />
            <div className="absolute bottom-6 left-6 bg-white p-4 shadow-lg z-30 rounded-lg">
              <div className="tech-label mb-1">Localização</div>
              <div className="font-display font-bold text-sm">JPA // SP</div>
            </div>
          </motion.div>
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
              Inovação de São Paulo. <br />
              <span className="text-slate italic">Compromisso de João Pessoa.</span>
            </h2>
            <div className="flex flex-col gap-8 text-lg leading-relaxed text-slate font-medium">
              <p>
                Estudo Web Design na FIAP, em São Paulo, para trazer o que há de mais moderno no Brasil para a sua empresa. Mas minhas raízes são em João Pessoa, onde aprendi o valor da palavra dada e do trabalho honesto.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border border-border bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl">
                  <Award className="w-6 h-6 text-accent mb-4" />
                  <div className="tech-label mb-2">Formação</div>
                  <div className="font-display font-bold text-sm">FIAP São Paulo</div>
                </div>
                <div className="p-6 border border-border bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl">
                  <Handshake className="w-6 h-6 text-accent mb-4" />
                  <div className="tech-label mb-2">Valores</div>
                  <div className="font-display font-bold text-sm">Ética e Transparência</div>
                </div>
              </div>
              <p>
                Unimos a tecnologia avançada com o atendimento próximo e transparente que você valoriza. Eu não entrego apenas um site bonito; entrego uma ferramenta de vendas organizada para o seu negócio.
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <div className="blueprint-border aspect-square shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-tr from-accent/10 to-transparent z-10 pointer-events-none" />
              <img 
                src="https://picsum.photos/seed/sao-paulo-paulista-fiap/1000/1000" 
                alt="Avenida Paulista - São Paulo"
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
              { step: "01", title: "Conversa Inicial", txt: "Entendemos os desafios do seu negócio e definimos as metas de crescimento." },
              { step: "02", title: "Planejamento", txt: "Você acompanha cada etapa do desenho do projeto para garantir que tudo esteja do seu jeito." },
              { step: "03", title: "Entrega e Suporte", txt: "Seu site entra no ar funcionando perfeitamente, com acompanhamento garantido." }
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
            Fale comigo
          </a>
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
          Fale comigo
        </span>
      </a>
    </div>
  );
}





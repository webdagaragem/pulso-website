import { HeroSlider } from "@/components/HeroSlider";
import { Seo } from "@/components/Seo";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Award, Cpu, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Award,
    title: "Equipe Técnica Qualificada",
    desc: "Mecânicos de tratores, colheitadeiras, pulverizadores e plantadeiras, com atendimento direto na lavoura.",
  },
  {
    icon: Cpu,
    title: "Tecnologia de Alto Nível",
    desc: "Trabalhamos com as melhores marcas e sistemas do mercado: Topcon, Precision Planting, Terris e muito mais.",
  },
  {
    icon: Target,
    title: "Compromisso com Resultado",
    desc: "Nosso foco é o resultado do produtor — atendimento ágil, diagnóstico preciso e suporte contínuo no campo.",
  },
];

const Index = () => {
  return (
    <>
      <Seo path="/" />
      <HeroSlider />

      <section className="bg-[#0a0a0a] py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="inline-block text-primary text-xs font-semibold uppercase"
              style={{ letterSpacing: "2px" }}
            >
              Por que escolher a Pulso?
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold uppercase leading-tight text-foreground">
              Assistência técnica para o{" "}
              <span className="text-primary">agro</span> no campo
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-[640px] mx-auto leading-relaxed">
              A Pulso é oficina de máquinas agrícolas em Juara, no Mato Grosso. Faz manutenção e reparo de tratores, colheitadeiras, pulverizadores, plantadeiras e implementos, e é concessionária oficial Topcon para monitores e pilotos automáticos no Médio Norte.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#111111] border border-white/[0.08] rounded-xl p-8 transition-colors hover:border-primary/60"
              >
                <Icon className="h-10 w-10 text-primary" strokeWidth={1.8} />
                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground uppercase tracking-wider font-semibold"
            >
              <Link to="/servicos">Conheça Todos os Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      <Gallery />
      <Testimonials />
    </>
  );
};

export default Index;

import { ArrowDown, Download } from "lucide-react";
import Background3D from "../components/Background3D";
import { useLenis } from "lenis/react";

export default function Hero() {
  const lenis = useLenis();

  const scrollToAbout = () => {
    if (lenis) {
      lenis.scrollTo("#about", { offset: -80, duration: 1.5 });
    } else {
      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <Background3D />

      <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
          Hello, I am Mohamed
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          Full Stack{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Developer
          </span>
        </h1>
        <p className="text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          I design modern web applications with the MERN Stack, focusing on
          performance, software architecture, and user experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/cv.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl font-medium text-sm transition-colors shadow-lg shadow-primary/20"
          >
            <Download size={16} />
            Download My CV
          </a>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-6 py-3 border border-divider text-foreground/80 hover:border-primary hover:text-primary rounded-xl font-medium text-sm transition-colors"
          >
            <ArrowDown size={16} />
            Learn More
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}

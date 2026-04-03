import { getMarkdownContent } from "@/lib/markdown";
import AgeGate from "@/components/AgeGate";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default async function Home() {
  const aboutContent = await getMarkdownContent("about");

  // Strip the leading heading from about content since we render it separately
  const aboutHtml = aboutContent.contentHtml
    .replace(/<p>I don't just prompt; I direct\.<\/p>/, "")
    .trim();

  return (
    <>
      {/* Ambient background blooms */}
      <div className="ambient-bg" aria-hidden="true" />

      <AgeGate>
        <Header />
        <main className="relative z-10">
          <HeroSection />
          <ServicesSection />
          <AboutSection contentHtml={aboutHtml} />
          <ContactSection />
        </main>
        <Footer />
      </AgeGate>
    </>
  );
}

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#111827]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <JourneySection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <AchievementsSection />
        <LanguagesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

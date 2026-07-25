import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import FeaturedBlog from "@/components/FeaturedBlog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <FeaturedProjects />
      <FeaturedBlog />
      <Contact />
    </>
  );
}

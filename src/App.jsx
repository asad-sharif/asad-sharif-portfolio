import AboutSection from "./components/AboutSection"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import WorkSection from "./components/WorkSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <main className=" mx-auto mt-8 ">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
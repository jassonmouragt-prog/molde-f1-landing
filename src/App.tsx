import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import RevenueOpportunity from './components/RevenueOpportunity'
import MethodModules from './components/MethodModules'
import Objections from './components/Objections'
import BigStatement from './components/BigStatement'
import SocialProof from './components/SocialProof'
import Transformation from './components/Transformation'
import FinalCTA from './components/FinalCTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <ProblemSection />
        <RevenueOpportunity />
        <MethodModules />
        <Objections />
        <BigStatement />
        <SocialProof />
        <Transformation />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
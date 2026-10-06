import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import FeaturedProperties from '../components/FeaturedProperties'
import CTABar from '../components/CTABar'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <FeaturedProperties />
      <CTABar />
    </motion.div>
  )
}

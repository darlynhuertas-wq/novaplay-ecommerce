import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import CatalogPage from '@/pages/CatalogPage'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <CatalogPage />
      </main>
      <Footer />
    </div>
  )
} 
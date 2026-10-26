import Header from './components/Header'
import Footer from './components/Footer'
import CartToast from './components/CartToast'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'

export default function App() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-warm">
        <Header />
        <main className="flex-1">
          <Home />
        </main>
        <Footer />
        <CartToast />
      </div>
    </CartProvider>
  )
}

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Chatbot from '@/components/ui/Chatbot'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-24">
        {children}
      </main>

      <Chatbot />

      <Footer />
    </>
  )
}

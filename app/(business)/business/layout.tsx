import { ReactNode } from 'react'
import Sidebar from '@/components/layout/business/Sidebar'
import TopNavigationBar from '@/components/business/layout/TopNavigationBar'

export default function ForBusinessLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="lg:ml-72 min-h-screen flex flex-col">
        <div className="pt-14 lg:pt-0">
          <TopNavigationBar />
        </div>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}

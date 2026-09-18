import { ReactNode } from 'react'
import Sidebar from '@/components/layout/business/Sidebar'
import TopNavigationBar from '@/components/business/layout/TopNavigationBar'

export default function ForBusinessLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-72">
        <main className="min-h-screen">
          <TopNavigationBar />
          {children}
        </main>
      </div>
    </div>
  )
}

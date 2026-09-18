import { ReactNode } from 'react'
import Sidebar from '@/components/layout/business/Sidebar'

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
          {children}
        </main>
      </div>
    </div>
  )
}

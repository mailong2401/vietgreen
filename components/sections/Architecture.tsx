'use client'

import { Database, CheckCircle } from 'lucide-react'

export default function Architecture() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Data Lakehouse Architecture</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Kiến trúc dữ liệu hiện đại cho nền tảng thông minh
          </p>
        </div>
        
        <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-border-md">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <Database size={20} />
                Data Sources
              </h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  Enterprise Systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  Public Data
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  IoT Sensors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  Consumer Feedback
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <Database size={20} />
                Data Processing
              </h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  ETL/ELT Pipelines
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  Data Lakehouse
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  NLP/LLM Processing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  Knowledge Graph
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <Database size={20} />
                Intelligence & Insights
              </h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  VGPI & VGCI Indices
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  Analytics Dashboard
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  API & Visualization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  AI Recommendations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

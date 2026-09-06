'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { Building2 } from 'lucide-react'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

const partners = [
  {
    id: 1,
    name: 'Tập đoàn Vingroup',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200&q=80',
    color: '#0A6E4B'
  },
  {
    id: 2,
    name: 'Tổng công ty Điện lực EVN',
    logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&q=80',
    color: '#1A5C3A'
  },
  {
    id: 3,
    name: 'Bộ Tài nguyên & Môi trường',
    logo: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=200&q=80',
    color: '#2D8B4E'
  },
  {
    id: 4,
    name: 'Công ty CP Dược phẩm Vinfa',
    logo: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=200&q=80',
    color: '#0A6E4B'
  },
  {
    id: 5,
    name: 'Tập đoàn Sun Group',
    logo: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=200&q=80',
    color: '#1A7A4A'
  },
  {
    id: 6,
    name: 'Công ty Xây dựng COTEC',
    logo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=200&q=80',
    color: '#2D8B4E'
  },
  {
    id: 7,
    name: 'Ngân hàng TMCP Ngoại thương Vietcombank',
    logo: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=200&q=80',
    color: '#0A6E4B'
  },
  {
    id: 8,
    name: 'Tập đoàn Hòa Phát',
    logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=200&q=80',
    color: '#1A5C3A'
  }
]

export default function TrustedPartners() {
  const ref = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [scrollPosition, setScrollPosition] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)

  // Tạo mảng gấp 3 lần để tạo hiệu ứng vô hạn
  const infinitePartners = [...partners, ...partners, ...partners]

  // Tính toán chiều rộng
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const calculatedItemWidth = Math.min(200, containerWidth / 4.5)
        setItemWidth(calculatedItemWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Animation loop vô hạn
  useEffect(() => {
    if (itemWidth === 0) return

    let animationFrameId: number
    let lastTimestamp: number
    const speed = 80
    const singleLoopWidth = itemWidth * partners.length

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const deltaTime = (timestamp - lastTimestamp) / 1000
      lastTimestamp = timestamp

      setScrollPosition(prev => {
        let newPosition = prev + speed * deltaTime
        if (newPosition >= singleLoopWidth * 2) {
          newPosition = singleLoopWidth
        }
        return newPosition
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [itemWidth, isInView])

  return (
    <section ref={ref} className="py-20 bg-background/50 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="container mx-auto ">
        {/* Header - Sử dụng ScrollAnimation */}
        <ScrollAnimation direction="up" duration={0.6}>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
              <Building2 size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Đối tác chiến lược</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Đối tác đã tin tưởng
              <span className="text-primary"> VietGreen</span>
            </h2>

            <p className="text-foreground/60 text-base md:text-lg max-w-2xl mx-auto">
              Cùng nhau xây dựng nền kinh tế xanh và phát triển bền vững
            </p>
          </div>
        </ScrollAnimation>

        {/* Infinite Loop Carousel - Sử dụng ScrollAnimation cho container */}
        <ScrollAnimation direction="up" duration={0.8} delay={0.2}>
          <div className="relative h-32 md:h-36">
            <div
              ref={containerRef}
              className="absolute left-0 right-0 h-full overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background/50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background/50 to-transparent z-10 pointer-events-none"></div>

              <motion.div
                className="flex absolute top-1/2 -translate-y-1/2 items-center gap-4"
                style={{
                  x: -scrollPosition,
                }}
              >
                {infinitePartners.map((partner, index) => {
                  // Chỉ item gốc (bản đầu tiên) mới có stagger delay lúc xuất hiện lần đầu.
                  // Các bản sao (dùng để tạo hiệu ứng vô hạn) phải HIỆN NGAY khi isInView,
                  // nếu không chúng sẽ mãi ở trạng thái opacity: 0 => nhìn như "không lặp lại".
                  const isOriginal = index < partners.length
                  return (
                    <motion.div
                      key={`${partner.id}-${index}`}
                      className="shrink-0 px-2"
                      style={{ width: `${itemWidth}px` }}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: isOriginal ? (index % partners.length) * 0.05 : 0
                      }}
                    >
                      <div className="group relative">
                        {/* Partner Card */}
                        <div className="bg-background p-4 transition-all duration-300 hover:-translate-y-1">
                          <div className="flex flex-col items-center gap-2">
                            {/* Logo Container */}
                            <div className="relative w-16 h-16 md:w-20 md:h-20">
                              <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                              <div
                                className="relative w-full h-full rounded-full overflow-hidden transition-all duration-300 bg-white p-2"
                              >
                                <Image
                                  src={partner.logo}
                                  alt={partner.name}
                                  fill
                                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-110"
                                  sizes="(max-width: 768px) 64px, 80px"
                                  unoptimized={true}
                                />
                              </div>
                            </div>

                            {/* Partner Name */}
                            <p className="text-xs text-foreground/60 text-center line-clamp-1 group-hover:text-primary transition-colors duration-300">
                              {partner.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

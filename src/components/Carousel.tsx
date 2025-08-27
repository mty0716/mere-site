'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface CarouselItem {
  id: number
  title: string
  description: string
  image: string
  date?: string
  category?: string
}

interface CarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  interval?: number
}

const Carousel: React.FC<CarouselProps> = ({ items, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, items.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg">
      {/* 轮播图片 */}
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* 背景图片 */}
            <div className="w-full h-full relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // 图片加载失败时隐藏图片，显示占位符
                  e.currentTarget.style.display = 'none'
                  const placeholder = e.currentTarget.nextElementSibling as HTMLElement
                  if (placeholder) {
                    placeholder.style.display = 'flex'
                  }
                }}
              />
              {/* 占位符 */}
              <div className="w-full h-full bg-gradient-to-br from-primary-600 to-blue-700 flex items-center justify-center absolute inset-0" style={{ display: 'none' }}>
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏔️</div>
                  <p className="text-sm opacity-75">轮播图片 {index + 1}</p>
                </div>
              </div>
            </div>
            
            {/* 内容覆盖层 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="container-custom h-full flex items-end pb-4 sm:pb-6 md:pb-8">
                <div className="max-w-2xl text-white">
                  {/* 新闻标签 */}
                  {item.category && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-2 sm:mb-3">
                      <span className="px-2 sm:px-3 py-1 bg-primary-600 text-white text-xs sm:text-sm rounded-full mb-2 sm:mb-0 inline-block w-fit">
                        {item.category}
                      </span>
                      {item.date && (
                        <span className="text-xs sm:text-sm opacity-80">{item.date}</span>
                      )}
                    </div>
                  )}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 opacity-90 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <Link 
                    href={`/news/${item.id}`}
                    className="inline-block bg-white text-primary-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-xs sm:text-sm"
                  >
                    阅读详情
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 左右箭头 - 桌面端显示 */}
      <button
        onClick={goToPrevious}
        className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full items-center justify-center text-white transition-all"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full items-center justify-center text-white transition-all"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel

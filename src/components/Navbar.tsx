'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getImagePath } from '../utils/paths'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/about', label: '实验室概况' },
    { path: '/research', label: '研究方向' },
    { path: '/news', label: '新闻动态' },
    { path: '/people', label: '人才培养' },
    { path: '/achievements', label: '科研成果' },
    { path: '/contact', label: '联系我们' }
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        {/* 顶部区域：标题和Logo */}
        <div className="flex justify-between items-center h-16 sm:h-20 border-b border-gray-100">
          {/* 左侧：标题文字 */}
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight truncate">
              矿山生态安全教育部工程研究中心
            </span>
            <span className="hidden sm:block text-xs text-gray-600 leading-tight mt-1 truncate">
              Engineering Research Center of Mining Environment and Ecological Safety, Ministry of Education
            </span>
          </div>

          {/* 右侧：Logo和搜索 */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Logo容器 */}
            <div className="hidden sm:flex items-center space-x-3">
              <img 
                src={getImagePath("/images/cumtb-logo.png")} 
                alt="中国矿业大学" 
                className="h-8 sm:h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="w-px h-6 bg-gray-300"></div>
              <img 
                src={getImagePath("/images/geological-logo.png")} 
                alt="地测学院" 
                className="h-8 sm:h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>

            {/* 移动端简化Logo */}
            <div className="flex sm:hidden items-center space-x-2">
              <img 
                src={getImagePath("/images/cumtb-logo.png")} 
                alt="中国矿业大学" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>

            {/* 搜索按钮 - 桌面端显示 */}
            <button className="hidden sm:block p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 底部区域：导航菜单 */}
        <div className="h-12 flex items-center justify-center">
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 中心信息 */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                矿山生态安全教育部工程研究中心
              </h3>
              <p className="text-gray-600 mb-4 max-w-md">
                致力于矿山生态安全技术研究与人才培养，推动矿业可持续发展。
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@mine-ecology.edu.cn
                </div>
              </div>
            </div>

            {/* 快速链接 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary-600">关于我们</Link></li>
                <li><Link href="/research" className="text-sm text-gray-600 hover:text-primary-600">科学研究</Link></li>
                <li><Link href="/people" className="text-sm text-gray-600 hover:text-primary-600">团队成员</Link></li>
                <li><Link href="/news" className="text-sm text-gray-600 hover:text-primary-600">新闻动态</Link></li>
              </ul>
            </div>

            {/* 联系方式 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">联系方式</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>地址：北京市海淀区学院路</li>
                <li>电话：+86 10 1234 5678</li>
                <li>传真：+86 10 1234 5679</li>
              </ul>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                © 2025 矿山生态安全教育部工程研究中心. 保留所有权利.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">隐私政策</Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">使用条款</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

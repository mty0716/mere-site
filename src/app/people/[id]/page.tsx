'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { teamMembers } from '../../../data/teamData'
import { useParams } from 'next/navigation'

export default function TeamMemberDetailPage() {
  const params = useParams()
  const id = params.id as string
  const memberId = parseInt(id)
  const member = teamMembers.find(item => item.id === memberId)

  if (!member) {
    notFound()
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* 面包屑导航 */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-600">首页</Link>
            <span>/</span>
            <Link href="/people" className="hover:text-primary-600">人才培养</Link>
            <span>/</span>
            <span className="text-gray-900">{member.name}</span>
          </nav>

          {/* 个人信息卡片 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const placeholder = e.currentTarget.nextElementSibling as HTMLElement
                      if (placeholder) {
                        placeholder.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center border-4 border-white shadow-lg" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="text-4xl mb-2">👨‍🏫</div>
                      <p className="text-xs text-gray-600">教授头像</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h1>
                  <p className="text-xl text-primary-600 font-semibold mb-2">{member.title}</p>
                  <p className="text-lg text-gray-700 mb-4">{member.position}</p>
                  {member.email && (
                    <p className="text-gray-600">
                      <span className="font-medium">邮箱：</span>
                      <a href={`mailto:${member.email}`} className="text-primary-600 hover:text-primary-700">
                        {member.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 研究方向 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">主要研究方向</h3>
                  <div className="space-y-2">
                    {member.researchAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 主要成就 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">主要成就</h3>
                  <div className="space-y-2">
                    {member.achievements.slice(0, 4).map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 个人简介 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">个人简介</h2>
              <p className="text-gray-700 leading-relaxed">{member.introduction}</p>
            </div>

            {/* 教育经历 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">教育经历</h2>
              <div className="space-y-3">
                {member.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary-600 pl-4">
                    <p className="text-gray-700">{edu}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 代表性论文 */}
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">代表性论文</h2>
            <div className="space-y-4">
              {member.publications.map((publication, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{publication}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 主要项目 */}
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">主要项目</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {member.projects.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{project}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 返回按钮 */}
          <div className="mt-8 text-center">
            <Link 
              href="/people"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              返回团队列表
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

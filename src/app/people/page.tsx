'use client'

import Link from 'next/link'
import { teamMembers } from '../../data/teamData'

export default function PeoplePage() {
  const coreMembers = teamMembers.slice(0, 2) // 核心团队成员
  const otherMembers = teamMembers.slice(2) // 其他团队成员

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-primary mb-6">人才培养</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            中心拥有一支高水平的师资队伍，致力于培养矿山生态安全领域的优秀人才
          </p>
        </div>

        {/* 核心团队 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreMembers.map((member) => (
              <Link key={member.id} href={`/people/${member.id}`} className="group">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="h-64 bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center p-8">
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
                        <div className="text-3xl mb-2">👨‍🏫</div>
                        <p className="text-xs text-gray-600">教授头像</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 font-medium mb-1">{member.title}</p>
                      <p className="text-gray-600 mb-4">{member.position}</p>
                      
                      <div className="space-y-2">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">主要研究方向：</h4>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {member.researchAreas.slice(0, 3).map((area, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <span className="text-primary-600 group-hover:text-primary-700 font-medium text-sm">
                        查看详情 →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 骨干教师 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">骨干教师</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherMembers.map((member) => (
              <Link key={member.id} href={`/people/${member.id}`} className="group">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center p-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-3 border-white shadow-md"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const placeholder = e.currentTarget.nextElementSibling as HTMLElement
                        if (placeholder) {
                          placeholder.style.display = 'flex'
                        }
                      }}
                    />
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center border-3 border-white shadow-md" style={{ display: 'none' }}>
                      <div className="text-center">
                        <div className="text-2xl mb-1">👨‍🏫</div>
                        <p className="text-xs text-gray-600">头像</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 text-sm font-medium mb-1">{member.title}</p>
                      <p className="text-gray-600 text-sm mb-3">{member.position}</p>
                      
                      <div className="text-xs text-gray-500">
                        主要研究：{member.researchAreas.slice(0, 2).join('、')}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 人才培养成果 */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">人才培养成果</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">培养博士、硕士研究生</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">就业率</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">合作企业提供实习机会</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              中心注重理论与实践相结合，为学生提供丰富的科研实践机会和产业实习机会，
              培养具有创新精神和实践能力的高素质人才。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

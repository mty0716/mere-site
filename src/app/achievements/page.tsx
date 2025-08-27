import { researchAchievements } from '../../data/newsData'

export default function AchievementsPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const achievementsByType = {
    '论文发表': researchAchievements.filter(item => item.type === '论文发表'),
    '专利授权': researchAchievements.filter(item => item.type === '专利授权'),
    '项目验收': researchAchievements.filter(item => item.type === '项目验收'),
    '技术突破': researchAchievements.filter(item => item.type === '技术突破'),
    '获奖成果': researchAchievements.filter(item => item.type === '获奖成果'),
    '合作项目': researchAchievements.filter(item => item.type === '合作项目'),
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-primary mb-6">科研成果</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            中心在矿山生态安全领域取得了丰硕的科研成果，推动了行业技术进步和发展
          </p>
        </div>

        {/* 成果统计 */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">成果统计</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(achievementsByType).map(([type, achievements]) => (
              <div key={type} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {achievements.length}
                </div>
                <div className="text-sm text-gray-600">{type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 最新成果 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">最新成果</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAchievements
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 6)
              .map((achievement) => (
                <div key={achievement.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">
                        {achievement.type === '论文发表' ? '📄' : 
                         achievement.type === '专利授权' ? '🏆' :
                         achievement.type === '项目验收' ? '✅' :
                         achievement.type === '技术突破' ? '🚀' :
                         achievement.type === '获奖成果' ? '🥇' : '🤝'}
                      </div>
                      <p className="text-sm text-gray-600">{achievement.type}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {achievement.type}
                      </span>
                      <span className="text-xs text-gray-500">{formatDate(achievement.date)}</span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {achievement.title}
                    </h3>
                    
                    {achievement.description && (
                      <p className="text-body text-sm line-clamp-3 mb-3">
                        {achievement.description}
                      </p>
                    )}
                    
                    <div className="space-y-1 text-xs text-gray-500">
                      {achievement.journal && (
                        <div>期刊：{achievement.journal}</div>
                      )}
                      {achievement.impact && (
                        <div>影响因子：{achievement.impact}</div>
                      )}
                      {achievement.authors && (
                        <div>作者：{achievement.authors.join('、')}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* 按类型分类显示成果 */}
        {Object.entries(achievementsByType).map(([type, achievements]) => {
          if (achievements.length === 0) return null

          return (
            <div key={type} className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{type}</h2>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                            {achievement.type}
                          </span>
                          <span className="text-sm text-gray-500">{formatDate(achievement.date)}</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {achievement.title}
                        </h3>
                        
                        {achievement.description && (
                          <p className="text-body mb-3">
                            {achievement.description}
                          </p>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
                          {achievement.journal && (
                            <div>
                              <span className="font-medium">期刊：</span>
                              {achievement.journal}
                            </div>
                          )}
                          {achievement.impact && (
                            <div>
                              <span className="font-medium">影响因子：</span>
                              {achievement.impact}
                            </div>
                          )}
                          {achievement.authors && (
                            <div>
                              <span className="font-medium">作者：</span>
                              {achievement.authors.join('、')}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0 lg:ml-6 flex-shrink-0">
                        <div className="text-4xl">
                          {achievement.type === '论文发表' ? '📄' : 
                           achievement.type === '专利授权' ? '🏆' :
                           achievement.type === '项目验收' ? '✅' :
                           achievement.type === '技术突破' ? '🚀' :
                           achievement.type === '获奖成果' ? '🥇' : '🤝'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* 合作成果 */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">产学研合作成果</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600">合作企业</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5000万</div>
              <div className="text-gray-600">技术转化产值</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">80%</div>
              <div className="text-gray-600">成果转化率</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              中心积极推动产学研深度融合，与多家企业建立长期合作关系，
              科研成果转化率高，为行业发展做出了重要贡献。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

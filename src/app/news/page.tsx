import Link from 'next/link'
import { newsData } from '../../data/newsData'

export default function NewsPage() {
  // 按分类分组新闻
  const categories = ['学术活动', '科研项目', '合作交流', '野外调研', '学术成果', '人才培养', '荣誉奖项'] as const
  
  const getNewsByCategory = (category: string) => {
    return newsData.filter(item => item.category === category)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-primary mb-6">新闻动态</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            了解中心最新动态，掌握行业前沿资讯，关注矿山生态安全技术发展
          </p>
        </div>

        {/* 分类导航 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-primary-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* 最新新闻 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">最新动态</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 6)
              .map((news) => (
                <article key={news.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center">
                    {news.image ? (
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const placeholder = e.currentTarget.nextElementSibling as HTMLElement
                          if (placeholder) {
                            placeholder.style.display = 'flex'
                          }
                        }}
                      />
                    ) : null}
                    <div className="w-full h-full bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center" style={{ display: news.image ? 'none' : 'flex' }}>
                      <div className="text-center">
                        <div className="text-4xl mb-2">📰</div>
                        <p className="text-sm text-gray-600">新闻图片</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {news.category}
                      </span>
                      <span className="text-xs text-gray-500">{formatDate(news.date)}</span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    
                    <p className="text-body text-sm line-clamp-3 mb-4">
                      {news.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">作者：{news.author}</span>
                      <Link 
                        href={`/news/${news.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        阅读更多 →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>

        {/* 按分类显示新闻 */}
        {categories.map((category) => {
          const categoryNews = getNewsByCategory(category)
          if (categoryNews.length === 0) return null

          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category}</h2>
              <div className="space-y-4">
                {categoryNews.map((news) => (
                  <div key={news.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                            {news.category}
                          </span>
                          <span className="text-sm text-gray-500">{formatDate(news.date)}</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {news.title}
                        </h3>
                        
                        <p className="text-body line-clamp-2 mb-2">
                          {news.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>作者：{news.author}</span>
                          {news.tags && (
                            <div className="flex space-x-1">
                              {news.tags.slice(0, 3).map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <Link 
                          href={`/news/${news.id}`}
                          className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm"
                        >
                          查看详情
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

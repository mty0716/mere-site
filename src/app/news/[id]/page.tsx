import { notFound } from 'next/navigation'
import Link from 'next/link'
import { newsData } from '../../../data/newsData'

interface NewsDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params
  const newsId = parseInt(id)
  const news = newsData.find(item => item.id === newsId)

  if (!news) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const relatedNews = newsData
    .filter(item => item.id !== newsId && item.category === news.category)
    .slice(0, 3)

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* 面包屑导航 */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-600">首页</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">新闻动态</Link>
            <span>/</span>
            <span className="text-gray-900">{news.title}</span>
          </nav>

          <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* 新闻头图 */}
            <div className="h-64 md:h-80 bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center">
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
                  <div className="text-6xl mb-4">📰</div>
                  <p className="text-gray-600">新闻图片</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* 新闻元信息 */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                  {news.category}
                </span>
                <span className="text-sm text-gray-500">发布时间：{formatDate(news.date)}</span>
                <span className="text-sm text-gray-500">作者：{news.author}</span>
              </div>

              {/* 新闻标题 */}
              <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {news.title}
              </h1>

              {/* 新闻摘要 */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {news.description}
                </p>
              </div>

              {/* 新闻内容 */}
              <div className="prose prose-lg max-w-none">
                {news.content ? (
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {news.content}
                  </div>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    新闻详细内容正在完善中，敬请期待...
                  </p>
                )}
              </div>

              {/* 标签 */}
              {news.tags && news.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">标签：</span>
                    <div className="flex flex-wrap gap-2">
                      {news.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* 相关新闻 */}
          {relatedNews.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">相关新闻</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((relatedItem) => (
                  <Link key={relatedItem.id} href={`/news/${relatedItem.id}`} className="group">
                    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-32 bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center">
                        {relatedItem.image ? (
                          <img 
                            src={relatedItem.image} 
                            alt={relatedItem.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center">
                            <div className="text-2xl mb-1">📰</div>
                            <p className="text-xs text-gray-600">新闻图片</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                            {relatedItem.category}
                          </span>
                          <span className="text-xs text-gray-500">{formatDate(relatedItem.date)}</span>
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                          {relatedItem.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 返回按钮 */}
          <div className="mt-8 text-center">
            <Link 
              href="/news"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              返回新闻列表
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

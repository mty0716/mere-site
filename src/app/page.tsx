import Link from 'next/link'
import Carousel from '../components/Carousel'
import { getFeaturedNews, getFeaturedAchievements, scrollingResearchNews } from '../data/newsData'
import { getImagePath } from '../utils/paths'

export default function HomePage() {
  // 获取首页轮播图新闻数据 - 按日期排序，显示最新的6条
  const newsCarouselItems = getFeaturedNews()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)
    .map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      date: item.date,
      category: item.category,
      image: item.image || getImagePath('/images/news-default.jpg')
    }))

  // 获取首页科研成果数据
  const researchAchievements = getFeaturedAchievements().map(item => item.title)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative section-padding bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${getImagePath('/images/background.jpg')})` }}>
        {/* 背景遮罩 */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="container-custom">
          <div className="text-center">
            <h1 className="heading-primary text-white mb-4">
              矿山生态安全教育部工程研究中心
            </h1>
            <h2 className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 font-medium">
              Engineering Research Center of Mining Environment and Ecological Safety, Ministry of Education
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              聚焦矿山生态修复、环境监测与绿色矿业可持续发展，致力于培养高素质生态环保人才，推动矿业绿色发展，为建设美丽中国贡献力量。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link
                href="/about"
                className="bg-primary-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors text-center"
              >
                了解更多
              </Link>
              <Link
                href="/research"
                className="border border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
              >
                研究方向
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 新闻动态轮播图 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="heading-secondary text-center">新闻动态</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              了解中心最新动态，掌握行业前沿资讯，关注矿山生态安全技术发展
            </p>
          </div>
          <Carousel items={newsCarouselItems} autoPlay={true} interval={5000} />
        </div>
      </section>

      {/* 核心优势 */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">核心优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">创新研究</h3>
              <p className="text-body">
                在矿山生态安全领域开展前沿技术研究，推动行业技术进步。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">人才培养</h3>
              <p className="text-body">
                培养高素质的矿山生态安全专业人才，为行业发展提供智力支持。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">产学研合作</h3>
              <p className="text-body">
                与企业、高校深度合作，促进科技成果转化和产业化应用。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 科研成果 */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="heading-secondary">科研成果</h2>
            <Link href="/achievements" className="text-primary-600 hover:text-primary-700 font-medium">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAchievements.slice(0, 3).map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔬</div>
                    <p className="text-sm text-gray-600">科研成果 {index + 1}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">2025年8月{20 - index * 5}日</p>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {achievement}
                  </h3>
                  <p className="text-body text-sm line-clamp-3">
                    这是一项重要的科研成果，在相关领域具有重要的理论意义和实用价值...
                  </p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm mt-3">
                    查看详情 →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* 滚动文字轮播 */}
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">最新科研成果动态</h3>
            </div>
            <div className="overflow-hidden h-32">
              <div className="scrolling-text">
                {scrollingResearchNews.map((news, index) => (
                  <div key={index} className="flex items-center space-x-3 py-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">{news}</p>
                  </div>
                ))}
                {/* 重复内容以实现无缝循环 */}
                {scrollingResearchNews.map((news, index) => (
                  <div key={`repeat-${index}`} className="flex items-center space-x-3 py-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">{news}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
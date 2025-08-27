export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-primary text-center mb-8">实验室概况</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">中心简介</h2>
              <p className="text-body mb-6">
                矿山生态安全教育部工程研究中心依托中国矿业大学（北京），是教育部批准建设的工程研究中心。
                中心聚焦矿山生态修复、环境监测与绿色矿业可持续发展，致力于培养高素质生态环保人才，
                推动矿业绿色发展，为建设美丽中国贡献力量。
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">发展历程</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">2020年</p>
                    <p className="text-body">教育部正式批准建设矿山生态安全教育部工程研究中心</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">2021年</p>
                    <p className="text-body">中心正式成立并开始运行，建立完善的管理制度和运行机制</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">2022年</p>
                    <p className="text-body">承担多项国家重点科研项目，科研成果显著</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">2023年</p>
                    <p className="text-body">与多家企业建立产学研合作关系，推动技术成果转化</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">研究方向</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    <span className="text-body">土地复垦与生态重建</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    <span className="text-body">矿山环境监测与评价</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    <span className="text-body">矿山地质环境治理</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    <span className="text-body">绿色矿业技术</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">核心优势</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    <span className="text-body">国家级科研平台</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    <span className="text-body">顶尖专家团队</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    <span className="text-body">先进实验设备</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    <span className="text-body">产学研深度融合</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

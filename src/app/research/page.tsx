export default function ResearchPage() {
  const researchAreas = [
    {
      title: "土地复垦与生态重建",
      description: "研究矿山开采后土地的修复技术，包括土壤改良、植被恢复、生态系统重建等关键技术。",
      features: ["土壤修复技术", "植被恢复方法", "生态系统重建", "生物多样性保护"]
    },
    {
      title: "矿山环境监测与评价",
      description: "建立完善的矿山环境监测体系，实时监控矿区环境质量，为环境治理提供科学依据。",
      features: ["环境质量监测", "污染源识别", "风险评估", "预警系统"]
    },
    {
      title: "矿山地质环境治理",
      description: "针对矿山开采引起的地质环境问题，研究有效的治理技术和方法。",
      features: ["地面沉陷治理", "边坡稳定", "地下水保护", "地质灾害防治"]
    },
    {
      title: "绿色矿业技术",
      description: "推动矿业绿色发展，研究清洁生产技术和循环经济模式。",
      features: ["清洁生产工艺", "资源综合利用", "节能减排", "循环经济"]
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-primary mb-6">研究方向</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            中心围绕矿山生态安全领域的关键技术问题，开展前沿研究，致力于推动矿业绿色发展
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">
                    {index === 0 ? '🌱' : index === 1 ? '🔍' : index === 2 ? '⛰️' : '♻️'}
                  </div>
                  <p className="text-sm text-gray-600">研究方向 {index + 1}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-body mb-4">{area.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">主要特色：</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 研究成果统计 */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">研究成果统计</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">发表论文</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-sm text-gray-600">专利授权</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">科研项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">合作企业</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

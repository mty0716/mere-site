import { getImagePath } from '../utils/paths';

// 新闻动态数据类型定义
export interface NewsItem {
  id: number
  title: string
  description: string
  content?: string
  date: string
  category: '学术活动' | '科研项目' | '合作交流' | '野外调研' | '学术成果' | '人才培养' | '荣誉奖项'
  image?: string
  author?: string
  tags?: string[]
  featured?: boolean // 是否在首页轮播图显示
}

// 科研成果数据类型定义
export interface ResearchAchievement {
  id: number
  title: string
  description?: string
  date: string
  type: '论文发表' | '专利授权' | '项目验收' | '技术突破' | '获奖成果' | '合作项目'
  journal?: string
  authors?: string[]
  impact?: string
  featured?: boolean // 是否在首页显示
}

// 新闻动态数据
export const newsData: NewsItem[] = [
  {
    id: 1,
    title: '我中心与沁源县能源局开展深度交流合作',
    description: '中心与沁源县能源局就矿山生态修复、环境治理等议题进行深入交流，达成多项合作意向，为后续项目合作奠定坚实基础。',
    content: `
      2025年8月12日，矿山生态安全教育部工程研究中心与山西省沁源县能源局在沁源县举行深度交流合作座谈会。此次交流活动旨在加强双方在矿山生态修复、环境治理、技术研发等领域的合作，共同推动区域绿色发展。

      座谈会上，中心主任李晶教授首先介绍了中心的基本情况、研究方向和技术优势。中心作为教育部工程研究中心，在矿山生态修复、环境监测、绿色矿业技术等方面具有丰富的科研经验和先进的技术成果。李晶教授表示，中心愿意与沁源县能源局建立长期合作关系，为沁源县的矿山生态治理和环境保护提供技术支持和智力保障。

      沁源县能源局局长王明对中心的科研实力和技术水平给予了高度评价。他指出，沁源县作为山西省重要的能源基地，在煤炭开采过程中面临着生态修复和环境治理的挑战。与中心的合作将为沁源县解决这些技术难题提供重要支撑，有助于实现经济发展与环境保护的协调统一。

      双方就以下合作领域进行了深入探讨：

      1. 矿山生态修复技术应用
      中心将根据沁源县的具体情况，提供定制化的生态修复技术方案，包括土壤改良、植被恢复、水系修复等方面的技术支持。

      2. 环境监测体系建设
      协助沁源县建立完善的环境监测网络，实时监控矿区环境质量，为环境治理决策提供科学依据。

      3. 技术人才培养
      中心将为沁源县培养专业技术人才，提供技术培训和知识更新服务，提升当地技术人员的专业水平。

      4. 产学研合作项目
      双方将共同申报和实施科研项目，推动技术创新和成果转化，实现产学研深度融合。

      经过深入交流，双方达成了多项合作意向，并签署了合作框架协议。根据协议，中心将在未来三年内为沁源县提供全方位的技术支持和咨询服务，共同推进沁源县的绿色矿山建设和生态修复工作。

      此次合作是中心服务地方发展、推动产学研合作的重要举措。通过与沁源县能源局的深度合作，中心的技术成果将得到更好的应用和推广，同时为沁源县的可持续发展贡献科技力量。

      座谈会结束后，中心团队还实地考察了沁源县的部分矿区，了解了当地生态修复的现状和需求，为后续合作项目的具体实施奠定了基础。
    `,
    date: '2025-08-12',
    category: '野外调研',
    image: getImagePath('/images/news/qinyuan-cooperation.jpg'),
    author: '中心办公室',
    tags: ['沁源县', '能源局', '深度合作', '生态修复', '环境治理'],
    featured: true
  },

  {
    id: 2,
    title: '中心举办矿山生态安全技术研讨会',
    description: '本次研讨会邀请了行业专家就矿山生态安全技术发展趋势进行深入探讨，为行业发展提供新思路。',
    content: '详细内容...',
    date: '2025-08-15',
    category: '学术活动',
    image: '/images/news/seminar.jpg',
    author: '中心办公室',
    tags: ['研讨会', '技术交流'],
    featured: true
  },
  {
    id: 3,
    title: '中心获得国家自然科学基金重点项目资助',
    description: '项目将重点研究矿山生态修复新技术，预计投入资金500万元，研究周期4年。',
    content: '详细内容...',
    date: '2025-08-10',
    category: '科研项目',
    image: '/images/news/funding.jpg',
    author: '科研管理部',
    tags: ['基金项目', '生态修复'],
    featured: true
  },
  {
    id: 4,
    title: '中心与某矿业集团签署战略合作协议',
    description: '双方将在人才培养、技术研发、成果转化等方面开展深度合作，共同推动行业发展。',
    content: '详细内容...',
    date: '2025-08-05',
    category: '合作交流',
    image: '/images/news/cooperation.jpg',
    author: '合作发展部',
    tags: ['战略合作', '产学研'],
    featured: true
  },
  {
    id: 5,
    title: '中心研究成果在顶级期刊发表',
    description: '关于矿山生态修复技术的研究论文被《Nature》子刊接收，标志着中心科研水平达到国际先进水平。',
    content: '详细内容...',
    date: '2025-07-28',
    category: '学术成果',
    image: '/images/news/publication.jpg',
    author: '张教授团队',
    tags: ['论文发表', 'Nature'],
    featured: true
  },
  {
    id: 6,
    title: '李晶团队赴山西煤矿开展生态修复技术调研',
    description: '李晶教授带领团队深入山西煤矿一线，实地调研生态修复技术应用情况，为后续技术研发和项目实施提供重要参考。',
    content: `
      2025年8月11日，矿山生态安全教育部工程研究中心李晶教授带领研究团队赴山西省某大型煤矿开展生态修复技术实地调研。

      此次调研活动旨在深入了解当前煤矿生态修复技术的实际应用效果，收集一线数据和经验，为后续的技术研发和项目实施提供重要参考。调研团队包括李晶教授、程琳琳副教授以及多名博士研究生。

      在为期三天的调研中，团队重点考察了以下几个方面：

      1. 矿区生态修复现状评估
      团队实地查看了矿区的植被恢复情况、土壤改良效果以及生态系统重建进展，对现有修复技术的实际效果进行了全面评估。

      2. 技术应用效果分析
      深入了解了生物修复、物理修复和化学修复等多种技术在矿区环境治理中的应用情况，分析了各种技术的优缺点和适用条件。

      3. 环境监测体系建设
      考察了矿区的环境监测网络建设情况，包括空气质量监测、水质监测、土壤监测等系统的运行状况。

      4. 与当地技术人员交流
      与矿区技术人员进行了深入交流，了解了他们在生态修复过程中遇到的实际问题和解决方案，为后续技术改进提供了宝贵经验。

      通过此次调研，团队获得了大量一手资料和实地数据，为后续的科研项目开展和技术创新奠定了坚实基础。李晶教授表示，此次调研成果将直接应用于中心正在开展的"矿山生态修复关键技术研究"项目中。

      调研期间，团队还与当地环保部门和企业代表进行了座谈，就加强产学研合作、推动技术成果转化等议题进行了深入探讨，为后续合作奠定了良好基础。
    `,
    date: '2025-08-11',
    category: '野外调研',
    image: getImagePath('/images/news/li-jing-team-research.jpg'),
    author: '李晶团队',
    tags: ['野外调研', '生态修复', '山西煤矿', '技术调研'],
    featured: true
  }
]

// 滚动科研成果动态数据
export const scrollingResearchNews: string[] = [
  '课题组博士研究生论文被SCI期刊接收发表',
  '中心在矿山生态修复技术方面获得国家发明专利授权',
  '环境监测系统开发项目通过验收，技术指标达到国际先进水平',
  '生态修复材料产业化应用取得重大突破，经济效益显著',
  '安全评估模型构建研究获得教育部科技进步奖',
  '中心与多家企业建立产学研合作关系，推动技术转化',
  '我中心与沁源县能源局开展深度交流合作',
  '李晶团队赴山西煤矿开展生态修复技术调研',
  '中心获得国家自然科学基金重点项目资助',
  '中心研究成果在顶级期刊发表',
  '中心举办矿山生态安全技术研讨会'
]

// 科研成果数据
export const researchAchievements: ResearchAchievement[] = [
  {
    id: 1,
    title: '课题组博士研究生被SCI期刊接收发表',
    description: '论文题目：基于机器学习的矿山生态修复效果评估方法研究',
    date: '2025-08-20',
    type: '论文发表',
    journal: 'Precision Agriculture',
    authors: ['张教授', '李教授'],
    impact: 'IF: 5.6',
    featured: true
  },
  {
    id: 2,
    title: '中心在矿山生态修复技术方面获得国家发明专利授权',
    description: '专利名称：一种基于生物炭的矿山土壤修复方法',
    date: '2025-08-15',
    type: '专利授权',
    authors: ['王教授', '陈副教授'],
    featured: true
  },
  {
    id: 3,
    title: '环境监测系统开发项目通过验收，技术指标达到国际先进水平',
    description: '项目开发的环境监测系统已成功应用于多个矿山项目',
    date: '2025-08-10',
    type: '项目验收',
    authors: ['技术团队'],
    featured: true
  },
  {
    id: 4,
    title: '生态修复材料产业化应用取得重大突破，经济效益显著',
    description: '自主研发的生态修复材料已实现产业化生产',
    date: '2025-08-05',
    type: '技术突破',
    authors: ['材料研发团队'],
    featured: true
  },
  {
    id: 5,
    title: '安全评估模型构建研究获得教育部科技进步奖',
    description: '构建的矿山安全评估模型在多个项目中得到应用',
    date: '2025-07-30',
    type: '获奖成果',
    authors: ['安全评估团队'],
    featured: true
  },
  {
    id: 6,
    title: '中心与多家企业建立产学研合作关系，推动技术转化',
    description: '已与10余家企业建立合作关系，技术转化效果显著',
    date: '2025-07-25',
    type: '合作项目',
    authors: ['合作发展部'],
    featured: true
  }
]

// 获取首页轮播图新闻
export const getFeaturedNews = () => {
  return newsData.filter(item => item.featured)
}

// 获取首页科研成果
export const getFeaturedAchievements = () => {
  return researchAchievements.filter(item => item.featured)
}

// 按分类获取新闻
export const getNewsByCategory = (category: NewsItem['category']) => {
  return newsData.filter(item => item.category === category)
}

// 按类型获取科研成果
export const getAchievementsByType = (type: ResearchAchievement['type']) => {
  return researchAchievements.filter(item => item.type === type)
}

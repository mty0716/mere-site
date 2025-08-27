import { getImagePath } from '../utils/paths';

// 团队成员数据类型定义
export interface TeamMember {
  id: number
  name: string
  title: string
  position: string
  email?: string
  image: string
  researchAreas: string[]
  education: string[]
  achievements: string[]
  publications: string[]
  projects: string[]
  introduction: string
}

// 团队成员数据
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '胡振琪',
    title: '教授，博士生导师',
    position: '中心主任',
    email: 'huzq@cumtb.edu.cn',
    image: getImagePath('/images/team/hu-zhenqi.jpg'),
    researchAreas: [
      '土地复垦与生态重建',
      '矿山地质环境治理',
      '国土资源利用与管理',
      '矿山测量'
    ],
    education: [
      '1984: 毕业于中国矿业大学地质系获矿山测量专业工学学士学位',
      '1987: 毕业于中国矿业大学测量物探系工程测量专业工学硕士学位',
      '1991: 毕业于中国矿业大学采矿系工程测量专业获工学博士学位（为中美联合培养的土地复垦学博士）',
      '1989.02-1991.05: 留学美国南伊利诺大学',
      '1996.09-1997.09: 获英国皇家学会对华研究员奖学金，以Exeter大学荣誉研究员的身份在该大学坎伯恩矿院研究污染土地的复垦'
    ],
    achievements: [
      '负责参与国家863课题3项，国家支撑计划项目和课题2项，国际合作3项，国家自然科学基金项目6项，国土资源部公益性行业科研专项2项',
      '出版学术专著10余部，主编参编教材6部',
      '在国内外期刊和国际会议上发表学术论文300余篇',
      '指导毕业博士后、博士、硕士100余人'
    ],
    publications: [
      'Zhenqi Hu, Guanghua Yang, Wu Xiao, Jing Li, Yaoqi Yang, Yang Yu, Farmland damage and its impact on the overlapped areas of cropland and coal resources in the eastern plains of China. Resources, Conservation and Recycling. 2014, 86 :1–8',
      'Hu Zhenqi, Xiao Wu. Optimization of concurrent mining and reclamation plans for single coal seam: a case study in northern Anhui, China. Environmental Earth Sciences. 2013, 68(5):1247-1254',
      '胡振琪,肖武,王培俊,赵艳玲. 试论井工煤矿边开采边复垦技术[J]. 煤炭学报,2013,38(2):301-307',
      '胡振琪,龙精华,王新静.论煤矿区生态环境的自修复、自然修复和人工修复[J].煤炭学报,2014,39(08):1751-1757',
      '胡振琪 李晶 赵艳玲，矿产与粮食复合主产区环境质量与粮食安全的问题、成因与对策，科技导报. 2006,(3):28-31'
    ],
    projects: [
      '大型煤炭基地沉陷区黄河泥沙充填修复技术及示范，国家十二五支撑计划',
      '风沙区超大工作面开采的土地损伤规律及生态修复方法，国家自然科学基金煤炭联合基金重点项目',
      '酸性煤矸石山污染原位控制与生态重建联合治理技术及示范,国家863计划',
      '煤矿区典型重金属复合污染土壤的综合修复技术，国家863计划',
      '土地整理工程施工关键技术研究，国家十一五支撑计划'
    ],
    introduction: '胡振琪教授是矿山生态安全教育部工程研究中心主任，博士生导师。1984年毕业于中国矿业大学地质系获矿山测量专业工学学士学位，1987年毕业于中国矿业大学测量物探系工程测量专业工学硕士学位，1991年毕业于中国矿业大学采矿系工程测量专业获工学博士学位（为中美联合培养的土地复垦学博士）。1989.02-1991.05留学美国南伊利诺大学，1996.09-1997.09获英国皇家学会对华研究员奖学金，以Exeter大学荣誉研究员的身份在该大学坎伯恩矿院研究污染土地的复垦。主要从事土地复垦与生态重建、矿山地质环境治理、国土资源利用与管理、矿山测量等方向的研究。负责参与国家863课题3项，国家支撑计划项目和课题2项，国际合作3项，国家自然科学基金项目6项，国土资源部公益性行业科研专项2项。出版学术专著10余部，主编参编教材6部，在国内外期刊和国际会议上发表学术论文300余篇，指导毕业博士后、博士、硕士100余人。胡振琪教授在土地复垦与生态重建领域具有深厚的理论基础和丰富的实践经验，是我国该领域的知名专家。'
  },
  {
    id: 2,
    name: '李晶',
    title: '教授，博士生导师',
    position: '中心副主任',
    email: 'lijing@cumtb.edu.cn',
    image: getImagePath('/images/team/li-jing.jpg'),
    researchAreas: [
      '土地复垦与生态重建',
      '矿山环境监测与评价',
      '遥感与地理信息系统应用',
      '矿区生态环境修复'
    ],
    education: [
      '2000-2004: 中国矿业大学（北京）土地资源管理专业，学士学位',
      '2004-2007: 中国矿业大学（北京）土地资源管理专业，硕士学位',
      '2007-2010: 中国矿业大学（北京）土地资源管理专业，博士学位'
    ],
    achievements: [
      '主持国家自然科学基金项目4项',
      '主持国家863计划项目1项',
      '主持国土资源部公益性行业科研专项2项',
      '在国内外期刊发表学术论文100余篇，其中SCI论文30余篇',
      '获得国家科技进步二等奖1项，省部级科技进步奖3项'
    ],
    publications: [
      'Jing Li*, Xiaoxiao Yan, Zhiguo Cao, Zhen Yang, Jiaxin Liang, Tianyue Ma, Qianlong Liu. Identification of successional trajectory over 30 Years and evaluation of reclamation effect in coal waste dumps of surface coal mine[J]. Journal of Cleaner Production, 2020, 269.(中科院分区1区，JCR分区Q1,IF=11.072) (SCI)',
      '李晶*, 殷守强, 于加春, 胡振琪, 杨震, 杨超元. 黄河流域矿区充填复垦泥沙供需状况及输沙路径分析[J]. 农业工程学报, 2019, 35(05):268-277.(EI)',
      'Zhen Yang, Jing Li*, Carl E. Zipper, Yingying Shen, Hui Miao, Patricia F. Donovan. Identification of the disturbance and trajectory types in mining areas using multitemporal remote sensing images[J]. Science of the Total Environment, 2018, 644: 916-927.(中科院分区1区，JCR分区Q1,IF=10.753) (SCI)',
      'Jing Li*, Zhen Yang, Yingying Shen, Hui Miao, Xiaoxiao Yan. A denoising method for inter-annual NDVI time series derived from Landsat images[J]. International Journal of Remote Sensing, 2018, 39(12):3816-3827.(中科院分区3区，JCR分区Q3,IF=3.531) (SCI)'
    ],
    projects: [
      '基于多源遥感数据的矿区生态环境动态监测与评价，国家自然科学基金',
      '矿区土地复垦效果评价与生态修复技术研究，国家863计划',
      '黄河流域矿区生态环境修复关键技术研究，国土资源部公益性行业科研专项',
      '矿山环境监测与评价技术体系构建，国家自然科学基金'
    ],
    introduction: '李晶教授是矿山生态安全教育部工程研究中心副主任，博士生导师。主要从事土地复垦与生态重建、矿山环境监测与评价、遥感与地理信息系统应用、矿区生态环境修复等方向的研究。在国内外期刊发表学术论文100余篇，其中SCI论文30余篇，主持国家自然科学基金项目4项，主持国家863计划项目1项，主持国土资源部公益性行业科研专项2项，获得国家科技进步二等奖1项，省部级科技进步奖3项。代表性论文包括在Journal of Cleaner Production、Science of the Total Environment、International Journal of Remote Sensing等国际知名期刊发表的论文。李晶教授在矿山环境监测与评价领域具有丰富的研究经验，特别是在遥感技术应用方面取得了重要成果，在矿区生态环境动态监测与评价、土地复垦效果评价等领域具有深厚的学术造诣。'
  },
  {
    id: 3,
    name: '赵艳玲',
    title: '教授，博士生导师',
    position: '中心骨干教师',
    email: 'zhaoyanling@cumtb.edu.cn',
    image: getImagePath('/images/team/zhao-yanling.jpg'),
    researchAreas: [
      '土地复垦与生态重建',
      '矿山环境治理',
      '土壤修复技术',
      '环境监测'
    ],
    education: [
      '2006-2010: 中国矿业大学（北京）土地资源管理专业，学士学位',
      '2010-2013: 中国矿业大学（北京）土地资源管理专业，硕士学位',
      '2013-2016: 中国矿业大学（北京）土地资源管理专业，博士学位'
    ],
    achievements: [
      '主持国家自然科学基金项目2项',
      '主持省部级科研项目4项',
      '发表学术论文40余篇，其中SCI论文8篇',
      '获得省部级科技进步奖1项'
    ],
    publications: [
      '赵艳玲, 胡振琪, 李晶. 煤矿区土壤修复技术研究进展[J]. 煤炭学报, 2019, 44(3): 789-795',
      '赵艳玲, 程琳琳. 矿山环境治理技术应用研究[J]. 农业工程学报, 2018, 34(10): 156-162',
      'Zhao Yanling, Hu Zhenqi, Li Jing. Soil remediation technology in coal mining areas[J]. Environmental Science and Pollution Research, 2020, 27(15): 17890-17899'
    ],
    projects: [
      '煤矿区土壤修复关键技术研究，国家自然科学基金',
      '矿山环境治理技术集成与应用，省部级科研项目',
      '土地复垦效果评价体系构建，省部级科研项目'
    ],
    introduction: '赵艳玲教授主要从事土地复垦与生态重建、矿山环境治理、土壤修复技术、环境监测等方向的研究。主持国家自然科学基金项目2项，主持省部级科研项目4项，发表学术论文40余篇，其中SCI论文8篇，获得省部级科技进步奖1项。代表性论文包括在Environmental Science and Pollution Research、煤炭学报、农业工程学报等期刊发表的论文。在煤矿区土壤修复技术、矿山环境治理技术集成与应用、土地复垦效果评价体系构建等方面具有扎实的理论基础和丰富的实践经验。'
  },
  {
    id: 4,
    name: '程琳琳',
    title: '教授，博士生导师',
    position: '中心骨干教师',
    email: 'chenglinlin@cumtb.edu.cn',
    image: getImagePath('/images/team/cheng-linlin.jpg'),
    researchAreas: [
      '矿山环境监测',
      '土地复垦技术',
      '生态环境评价',
      'GIS应用'
    ],
    education: [
      '2005-2009: 中国矿业大学（北京）土地资源管理专业，学士学位',
      '2009-2012: 中国矿业大学（北京）土地资源管理专业，硕士学位',
      '2012-2015: 中国矿业大学（北京）土地资源管理专业，博士学位'
    ],
    achievements: [
      '主持国家自然科学基金项目2项',
      '主持省部级科研项目3项',
      '发表学术论文50余篇，其中SCI论文10余篇',
      '获得省部级科技进步奖2项'
    ],
    publications: [
      '程琳琳, 李晶, 胡振琪. 基于遥感的矿区生态环境变化监测研究[J]. 煤炭学报, 2018, 43(5): 1234-1240',
      '程琳琳, 赵艳玲. 矿山土地复垦技术研究进展[J]. 农业工程学报, 2017, 33(15): 1-8',
      'Cheng Linlin, Li Jing, Hu Zhenqi. Remote sensing monitoring of ecological environment changes in mining areas[J]. International Journal of Coal Science & Technology, 2019, 6(2): 234-241'
    ],
    projects: [
      '基于多源数据的矿区生态环境监测技术研究，国家自然科学基金',
      '矿山土地复垦效果评价方法研究，省部级科研项目',
      'GIS在矿山环境监测中的应用研究，省部级科研项目'
    ],
    introduction: '程琳琳副教授主要从事矿山环境监测、土地复垦技术、生态环境评价、GIS应用等方向的研究。主持国家自然科学基金项目2项，主持省部级科研项目3项，发表学术论文50余篇，其中SCI论文10余篇，获得省部级科技进步奖2项。代表性论文包括在International Journal of Coal Science & Technology、煤炭学报、农业工程学报等期刊发表的论文。在基于多源数据的矿区生态环境监测技术研究、矿山土地复垦效果评价方法研究、GIS在矿山环境监测中的应用研究等方面具有丰富的研究经验。'
  }
]

// 获取所有团队成员
export const getAllTeamMembers = () => teamMembers

// 根据ID获取团队成员
export const getTeamMemberById = (id: number) => teamMembers.find(member => member.id === id)

// 获取核心团队成员（前两位）
export const getCoreTeamMembers = () => teamMembers.slice(0, 2)

// 获取所有团队成员（除核心成员外）
export const getOtherTeamMembers = () => teamMembers.slice(2)

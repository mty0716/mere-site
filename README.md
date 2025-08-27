# 矿山生态安全教育部工程研究中心官网

这是一个基于 Next.js 15 和 Tailwind CSS 4 构建的学术门户网站，展示矿山生态安全教育部工程研究中心的信息、研究成果和团队介绍。

## 技术栈

- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS 4
- **语言**: TypeScript
- **字体**: Inter
- **部署**: Vercel (推荐)

## 功能特性

- 🏠 **首页**: 展示中心概况、新闻轮播、核心优势和科研成果
- 📖 **实验室概况**: 详细介绍中心发展历程和研究方向
- 🔬 **研究方向**: 展示各个研究领域的详细信息
- 📰 **新闻动态**: 按分类展示新闻，支持详情页面
- 👥 **人才培养**: 团队成员介绍和详情页面
- 🏆 **科研成果**: 按类型展示研究成果和统计数据
- 📞 **联系我们**: 联系信息和在线留言表单
- 📱 **响应式设计**: 支持桌面端、平板和移动端
- 🎨 **极简学术风格**: 专业、清晰的学术界面设计

## 开始使用

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 开发模式

\`\`\`bash
npm run dev
\`\`\`

然后在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

### 预览生产版本

\`\`\`bash
npm run start
\`\`\`

## 项目结构

\`\`\`
src/
├── app/                    # Next.js App Router 页面
│   ├── about/             # 实验室概况页面
│   ├── achievements/      # 科研成果页面
│   ├── contact/           # 联系我们页面
│   ├── news/              # 新闻动态页面和详情页面
│   ├── people/            # 人才培养页面和团队成员详情
│   ├── research/          # 研究方向页面
│   ├── globals.css        # 全局样式文件
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 首页
├── components/            # 可复用组件
│   ├── AppLayout.tsx      # 应用布局组件
│   ├── Carousel.tsx       # 轮播图组件
│   ├── Footer.tsx         # 页脚组件
│   └── Navbar.tsx         # 导航栏组件
├── data/                  # 数据文件
│   ├── newsData.ts        # 新闻和科研成果数据
│   └── teamData.ts        # 团队成员数据
└── utils/                 # 工具函数
    └── paths.ts           # 路径处理工具
\`\`\`

## 内容管理

### 新闻动态

编辑 \`src/data/newsData.ts\` 文件来添加或修改新闻内容。新闻支持以下分类：

- 学术活动
- 科研项目
- 合作交流
- 野外调研
- 学术成果
- 人才培养
- 荣誉奖项

### 团队成员

编辑 \`src/data/teamData.ts\` 文件来添加或修改团队成员信息。

### 静态资源

将图片文件放置在 \`public/images/\` 目录下，包括：

- \`public/images/team/\` - 团队成员头像
- \`public/images/news/\` - 新闻图片
- \`public/images/background.jpg\` - 首页背景图
- \`public/images/cumtb-logo.png\` - 中国矿业大学Logo
- \`public/images/geological-logo.png\` - 地测学院Logo

## 样式定制

项目使用 Tailwind CSS 4 的新语法。主要的自定义样式定义在 \`src/app/globals.css\` 中：

- \`.container-custom\` - 自定义容器样式
- \`.section-padding\` - 统一的区块内边距
- \`.heading-primary\` / \`.heading-secondary\` - 标题样式
- \`.text-body\` - 正文文本样式
- 导航栏和轮播图的特殊效果

## 部署

### Vercel 部署 (推荐)

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 中导入项目
3. Vercel 会自动检测 Next.js 项目并进行部署

### 其他平台

项目支持部署到任何支持 Node.js 的平台，如：

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 开发说明

- 项目使用 TypeScript 进行类型安全
- 遵循 Next.js 13+ App Router 最佳实践
- 使用 ESLint 进行代码质量检查
- 采用响应式设计，支持各种屏幕尺寸

## 许可证

MIT License

---

© 2025 矿山生态安全教育部工程研究中心. 保留所有权利.
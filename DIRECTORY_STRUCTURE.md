# Nova Camp Website - 项目目录结构

> Monorepo（pnpm workspace）

```
novacampwebsite/
├── package.json                    # Monorepo 根配置
├── pnpm-workspace.yaml             # workspace 声明：apps/* + packages/*
├── pnpm-lock.yaml
├── .gitignore
├── .npmrc
│
├── docs/                           # 项目文档
│   ├── nova-prd-v2.md              # PRD V2（产品需求）
│   ├── nova-项目推进手册.md         # 项目推进手册
│   ├── nova-项目目录结构.md         # 本文件副本
│   ├── nova-sprint-task-breakdown.md
│   ├── nova-sprint-task-breakdown.csv
│   ├── nova-sprint-task-breakdown.xlsx
│   ├── nova-sprint-task-breakdown.numbers
│   ├── nova-camp-gantt.png
│   ├── PAGES_NAVIGATION.md         # Figma 页面导航
│   └── ATTRIBUTIONS.md             # 第三方素材授权
│
├── apps/
│   ├── web/                        # 官网 H5（React + Vite）
│   │   ├── package.json            # @nova/web
│   │   ├── vite.config.ts
│   │   ├── postcss.config.mjs
│   │   ├── __figma__entrypoint__.ts
│   │   ├── default_shadcn_theme.css
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── App.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── Screen1Landing.tsx
│   │   │   │   │   ├── Screen2Course.tsx
│   │   │   │   │   ├── Screen3Form.tsx
│   │   │   │   │   ├── Screen4Payment.tsx
│   │   │   │   │   ├── Screen5Group.tsx
│   │   │   │   │   ├── Screen6Checkin.tsx
│   │   │   │   │   ├── Screen7Referral.tsx
│   │   │   │   │   ├── Screen7MyCourses.tsx
│   │   │   │   │   ├── Screen8Accommodation.tsx
│   │   │   │   │   ├── Screen9Teacher.tsx
│   │   │   │   │   ├── Screen10Competition.tsx
│   │   │   │   │   ├── Screen11AfterParty.tsx
│   │   │   │   │   ├── Screen12Store.tsx
│   │   │   │   │   ├── Screen13Transportation.tsx
│   │   │   │   │   ├── ScreenMySchedule.tsx
│   │   │   │   │   ├── ScreenSchedule.tsx
│   │   │   │   │   ├── ScreenTeachers.tsx
│   │   │   │   │   ├── SideMenu.tsx
│   │   │   │   │   ├── figma/
│   │   │   │   │   │   └── ImageWithFallback.tsx
│   │   │   │   │   └── ui/         # shadcn/ui 组件
│   │   │   │   │       ├── accordion.tsx
│   │   │   │   │       ├── alert-dialog.tsx
│   │   │   │   │       ├── alert.tsx
│   │   │   │   │       ├── aspect-ratio.tsx
│   │   │   │   │       ├── avatar.tsx
│   │   │   │   │       ├── badge.tsx
│   │   │   │   │       ├── breadcrumb.tsx
│   │   │   │   │       ├── button.tsx
│   │   │   │   │       ├── calendar.tsx
│   │   │   │   │       ├── card.tsx
│   │   │   │   │       ├── carousel.tsx
│   │   │   │   │       ├── chart.tsx
│   │   │   │   │       ├── checkbox.tsx
│   │   │   │   │       ├── collapsible.tsx
│   │   │   │   │       ├── command.tsx
│   │   │   │   │       ├── context-menu.tsx
│   │   │   │   │       ├── dialog.tsx
│   │   │   │   │       ├── drawer.tsx
│   │   │   │   │       ├── dropdown-menu.tsx
│   │   │   │   │       ├── form.tsx
│   │   │   │   │       ├── hover-card.tsx
│   │   │   │   │       ├── input-otp.tsx
│   │   │   │   │       ├── input.tsx
│   │   │   │   │       ├── label.tsx
│   │   │   │   │       ├── menubar.tsx
│   │   │   │   │       ├── navigation-menu.tsx
│   │   │   │   │       ├── pagination.tsx
│   │   │   │   │       ├── popover.tsx
│   │   │   │   │       ├── progress.tsx
│   │   │   │   │       ├── radio-group.tsx
│   │   │   │   │       ├── resizable.tsx
│   │   │   │   │       ├── scroll-area.tsx
│   │   │   │   │       ├── select.tsx
│   │   │   │   │       ├── separator.tsx
│   │   │   │   │       ├── sheet.tsx
│   │   │   │   │       ├── sidebar.tsx
│   │   │   │   │       ├── skeleton.tsx
│   │   │   │   │       ├── slider.tsx
│   │   │   │   │       ├── sonner.tsx
│   │   │   │   │       ├── switch.tsx
│   │   │   │   │       ├── table.tsx
│   │   │   │   │       ├── tabs.tsx
│   │   │   │   │       ├── textarea.tsx
│   │   │   │   │       ├── toggle-group.tsx
│   │   │   │   │       ├── toggle.tsx
│   │   │   │   │       ├── tooltip.tsx
│   │   │   │   │       ├── use-mobile.ts
│   │   │   │   │       └── utils.ts
│   │   │   ├── imports/            # 图片资源
│   │   │   │   ├── image.png
│   │   │   │   ├── image-1.png
│   │   │   │   ├── image-2.png
│   │   │   │   ├── image-3.png
│   │   │   │   └── pasted_text/
│   │   │   │       └── nova-website-prd.md
│   │   │   └── styles/
│   │   │       ├── fonts.css
│   │   │       ├── globals.css
│   │   │       ├── index.css
│   │   │       ├── tailwind.css
│   │   │       └── theme.css
│   │   └── guidelines/
│   │       └── Guidelines.md
│   │
│   ├── admin/                      # 后台管理系统（待开发）
│   │   └── package.json            # @nova/admin
│   │
│   └── checkin/                    # 核销端 PWA（待开发）
│       └── package.json            # @nova/checkin
│
├── server/                         # 后端 API（待开发）
│   ├── package.json                # @nova/server
│   └── src/
│
└── packages/
    └── shared/                     # 前后端共享类型/常量（待开发）
        ├── package.json            # @nova/shared
        └── src/
```

## 常用命令

```bash
# 安装依赖
pnpm install

# 启动各端
pnpm dev:web      # 官网 H5
pnpm dev:admin    # 后台管理
pnpm dev:checkin  # 核销端
pnpm dev:server   # 后端 API

# 构建
pnpm build:web
pnpm build:admin
pnpm build:checkin
pnpm build:server
```

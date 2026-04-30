# Nova 官网 · 项目目录结构

> 推荐技术栈：Next.js + Nest.js + PostgreSQL · Monorepo（pnpm workspace）
> 对应文档：《nova-技术需求附录.md》《nova-项目推进手册.md》

---

## 推荐技术栈

| 层 | 技术选型 | 说明 |
|---|---|---|
| 前端 H5 | Next.js 14 + React 18 + TailwindCSS | 移动优先、SSR、内置 i18n（中英双语） |
| 后台管理 | React + Ant Design Pro | RBAC 权限、数据导出、订单/支付/核销管理 |
| 核销端 | React H5（PWA） | 离线队列 + 弱网重试、扫码核销 |
| 后端 API | Nest.js (Node.js) + TypeScript | RESTful API、支付宝/Wise 对接、状态机 |
| 数据库 | PostgreSQL + Prisma ORM | 枚举、状态机、JSON 字段 |
| 缓存/队列 | Redis | 并发核销锁、支付回调幂等 |
| 对象存储 | 阿里云 OSS | 图片/视频/凭证上传 |
| CDN | 阿里云 CDN | 静态资源加速 |
| 部署 | 阿里云 ECS（2核4G起） + Docker Compose | Node 服务 + Nginx 反代 |
| CI/CD | GitHub Actions | 自动构建 + 部署 |

---

## Monorepo 目录结构

```
novacampwebsite/
├── package.json                    # Monorepo 根配置（pnpm workspace）
├── pnpm-workspace.yaml             # workspace 声明
├── turbo.json                      # Turborepo 构建编排（可选）
├── .env.example                    # 环境变量模板
├── .gitignore
├── docker-compose.yml              # 本地开发 / 生产部署编排
├── nginx/                          # Nginx 配置
│   └── default.conf
│
├── docs/                           # 项目文档（非代码）
│   ├── nova-技术需求附录.md
│   ├── nova-项目推进手册.md
│   ├── nova-项目目录结构.md        # 本文件
│   ├── api-spec/                   # 接口文档
│   │   └── openapi.yaml
│   └── db/                         # 数据库设计
│       └── er-diagram.dbml
│
├── packages/                       # 共享包
│   └── shared/                     # 前后端共享类型/常量
│       ├── package.json
│       └── src/
│           ├── types/              # TypeScript 类型定义
│           │   ├── order.ts        # 订单状态机枚举、订单类型
│           │   ├── sku.ts          # SKU 类型（整期/次卡）
│           │   ├── payment.ts      # 支付方式枚举
│           │   ├── user.ts         # 用户/角色类型
│           │   └── checkin.ts      # 核销类型
│           ├── constants/          # 业务常量
│           │   ├── order-status.ts # INIT→PAYING→PAID→CHECKED_IN 等
│           │   └── roles.ts        # 超级管理员/运营/财务客服/安保核销员
│           └── index.ts
│
├── apps/                           # 三端应用
│   │
│   ├── web/                        # ========== 官网 H5 ==========
│   │   ├── package.json
│   │   ├── next.config.js          # Next.js 配置（i18n、图片域名）
│   │   ├── tailwind.config.ts
│   │   ├── next-i18next.config.js  # 中英双语配置
│   │   ├── public/
│   │   │   ├── locales/
│   │   │   │   ├── zh/             # 中文语言包
│   │   │   │   │   └── common.json
│   │   │   │   └── en/             # 英文语言包
│   │   │   │       └── common.json
│   │   │   └── images/             # 静态图片（小文件，大文件走 OSS）
│   │   └── src/
│   │       ├── app/                # Next.js App Router
│   │       │   ├── layout.tsx      # 根布局（固定底部 CTA）
│   │       │   ├── page.tsx        # Screen1 · 首页 Landing
│   │       │   ├── course/
│   │       │   │   └── page.tsx    # Screen2 · 课程详情/选课（SKU列表）
│   │       │   ├── enroll/
│   │       │   │   └── page.tsx    # Screen3 · 报名表单
│   │       │   ├── payment/
│   │       │   │   ├── page.tsx    # Screen4 · 支付方式选择
│   │       │   │   └── result/
│   │       │   │       └── page.tsx # 支付结果页
│   │       │   ├── group/
│   │       │   │   └── page.tsx    # Screen5 · 拼团页
│   │       │   ├── my/
│   │       │   │   └── page.tsx    # Screen6 · 我的报名/核销码
│   │       │   └── referral/
│   │       │       └── page.tsx    # Screen7 · 分销落地页
│   │       ├── components/         # 前台组件
│   │       │   ├── layout/
│   │       │   │   ├── Header.tsx
│   │       │   │   ├── Footer.tsx
│   │       │   │   └── FixedCTA.tsx        # 底部固定 CTA
│   │       │   ├── course/
│   │       │   │   ├── TeacherCard.tsx     # 老师卡片（hover播放视频）
│   │       │   │   ├── SkuSelector.tsx     # SKU选择器
│   │       │   │   └── Timetable.tsx       # 课表
│   │       │   ├── enroll/
│   │       │   │   ├── EnrollForm.tsx      # 报名表单
│   │       │   │   └── AgreementCheckbox.tsx
│   │       │   ├── payment/
│   │       │   │   ├── AlipayButton.tsx    # 支付宝跳转
│   │       │   │   └── WiseUpload.tsx      # Wise凭证上传
│   │       │   ├── group/
│   │       │   │   ├── GroupStatus.tsx     # 拼团状态（名额/成员）
│   │       │   │   └── ShareButton.tsx
│   │       │   └── common/
│   │       │       ├── LangSwitcher.tsx    # 语言切换
│   │       │       └── QRCode.tsx          # 核销二维码
│   │       ├── hooks/
│   │       │   ├── useOrder.ts
│   │       │   └── useAuth.ts
│   │       ├── lib/
│   │       │   ├── api.ts          # API 请求封装
│   │       │   └── oss.ts          # OSS 上传工具
│   │       └── styles/
│   │           └── globals.css
│   │
│   ├── admin/                      # ========== 后台管理系统 ==========
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── src/
│   │       ├── main.tsx
│   │       ├── App.tsx
│   │       ├── routes/             # 路由配置
│   │       │   └── index.tsx
│   │       ├── layouts/
│   │       │   └── AdminLayout.tsx # 侧边栏 + 顶栏
│   │       ├── pages/
│   │       │   ├── dashboard/      # 数据概览
│   │       │   │   └── index.tsx
│   │       │   ├── content/        # 内容配置（课程/老师/课表/FAQ）
│   │       │   │   ├── teachers/
│   │       │   │   ├── courses/
│   │       │   │   ├── timetables/
│   │       │   │   └── faq/
│   │       │   ├── orders/         # 订单管理
│   │       │   │   ├── list.tsx    # 订单列表 + 导出
│   │       │   │   └── detail.tsx
│   │       │   ├── payments/       # 支付管理
│   │       │   │   ├── list.tsx
│   │       │   │   └── wise-pending.tsx  # Wise待确认列表+确认按钮
│   │       │   ├── checkins/       # 核销管理
│   │       │   │   └── list.tsx
│   │       │   ├── skus/           # SKU 配置
│   │       │   │   └── list.tsx
│   │       │   ├── groups/         # 拼团管理（Phase 4）
│   │       │   │   └── list.tsx
│   │       │   ├── referrals/      # 分销数据（Phase 4）
│   │       │   │   └── list.tsx
│   │       │   └── system/         # 系统管理
│   │       │       ├── users.tsx   # 用户/角色管理
│   │       │       └── logs.tsx    # 操作日志
│   │       ├── components/         # 后台通用组件
│   │       │   ├── ExportButton.tsx
│   │       │   └── StatusTag.tsx
│   │       ├── services/           # API 调用
│   │       │   └── api.ts
│   │       └── utils/
│   │           └── auth.ts         # 权限工具（按角色鉴权）
│   │
│   └── checkin/                    # ========== 核销端（PWA） ==========
│       ├── package.json
│       ├── vite.config.ts
│       └── src/
│           ├── main.tsx
│           ├── App.tsx
│           ├── pages/
│           │   ├── Login.tsx       # 安保核销员登录
│           │   ├── Scan.tsx        # 扫码页
│           │   └── Result.tsx      # 核销结果
│           ├── components/
│           │   └── Scanner.tsx     # 摄像头扫码组件
│           ├── lib/
│           │   ├── offline-queue.ts # 离线队列（弱网/断网缓存）
│           │   └── api.ts
│           └── sw.ts               # Service Worker（PWA离线支持）
│
└── server/                         # ========== 后端 API ==========
    ├── package.json
    ├── tsconfig.json
    ├── nest-cli.json
    └── src/
        ├── main.ts                 # 入口
        ├── app.module.ts           # 根模块
        │
        ├── common/                 # 通用层
        │   ├── guards/
        │   │   ├── auth.guard.ts           # JWT 鉴权
        │   │   └── roles.guard.ts          # 角色权限守卫
        │   ├── decorators/
        │   │   └── roles.decorator.ts
        │   ├── interceptors/
        │   │   └── logging.interceptor.ts  # 关键操作日志
        │   ├── filters/
        │   │   └── http-exception.filter.ts
        │   └── utils/
        │       └── token.ts                # 核销码生成（随机token/签名串）
        │
        ├── modules/                # 业务模块
        │   ├── auth/               # 认证
        │   │   ├── auth.module.ts
        │   │   ├── auth.controller.ts
        │   │   └── auth.service.ts
        │   ├── users/              # 用户 + 角色
        │   │   ├── users.module.ts
        │   │   ├── users.controller.ts
        │   │   └── users.service.ts
        │   ├── content/            # 内容管理（老师/课程/课表/FAQ）
        │   │   ├── content.module.ts
        │   │   ├── teachers/
        │   │   │   ├── teachers.controller.ts
        │   │   │   └── teachers.service.ts
        │   │   ├── courses/
        │   │   │   ├── courses.controller.ts
        │   │   │   └── courses.service.ts
        │   │   └── timetables/
        │   │       ├── timetables.controller.ts
        │   │       └── timetables.service.ts
        │   ├── skus/               # SKU（整期/次卡）
        │   │   ├── skus.module.ts
        │   │   ├── skus.controller.ts
        │   │   └── skus.service.ts
        │   ├── orders/             # 订单（含状态机）
        │   │   ├── orders.module.ts
        │   │   ├── orders.controller.ts
        │   │   ├── orders.service.ts
        │   │   └── order-state-machine.ts  # 状态机逻辑
        │   ├── payments/           # 支付
        │   │   ├── payments.module.ts
        │   │   ├── payments.controller.ts
        │   │   ├── payments.service.ts
        │   │   ├── alipay/         # 支付宝 H5 支付
        │   │   │   ├── alipay.service.ts
        │   │   │   └── alipay-notify.controller.ts  # 异步通知回调
        │   │   └── wise/           # Wise 海外支付
        │   │       ├── wise.service.ts
        │   │       └── wise.controller.ts   # 凭证上传 + 后台确认
        │   ├── checkins/           # 核销
        │   │   ├── checkins.module.ts
        │   │   ├── checkins.controller.ts
        │   │   └── checkins.service.ts     # 防重复核销 + 次卡扣减
        │   ├── groups/             # 拼团（Phase 4）
        │   │   ├── groups.module.ts
        │   │   ├── groups.controller.ts
        │   │   └── groups.service.ts       # 团池 + 自动归团
        │   ├── referrals/          # 分销（Phase 4）
        │   │   ├── referrals.module.ts
        │   │   ├── referrals.controller.ts
        │   │   └── referrals.service.ts
        │   └── upload/             # OSS 上传
        │       ├── upload.module.ts
        │       ├── upload.controller.ts
        │       └── upload.service.ts
        │
        └── prisma/                 # 数据库
            ├── schema.prisma       # 数据模型（对应附录第五节数据表）
            ├── migrations/         # 迁移文件
            └── seed.ts             # 初始数据（角色、测试SKU等）
```

---

## 目录与需求映射

| 需求文档章节 | 对应目录 |
|---|---|
| 二、页面清单 Screen1-7 | `apps/web/src/app/` 各路由页 |
| 三、SKU 体系 | `server/src/modules/skus/` + `packages/shared/src/types/sku.ts` |
| 三、拼团 | `server/src/modules/groups/` + `apps/web/src/app/group/` |
| 三、支付（支付宝+Wise）| `server/src/modules/payments/alipay/` + `wise/` |
| 三、核销 | `server/src/modules/checkins/` + `apps/checkin/` |
| 四、订单状态机 | `server/src/modules/orders/order-state-machine.ts` |
| 五、数据表 | `server/src/prisma/schema.prisma` |
| 六、非功能需求 | 核销端 PWA 离线队列、Redis 并发锁、日志拦截器 |
| 七、角色权限 | `server/src/common/guards/roles.guard.ts` + `apps/admin/src/utils/auth.ts` |
| 八、基础设施 | `docker-compose.yml` + `nginx/` |

---

## Phase 与目录开发优先级

| Phase | 涉及目录 | 说明 |
|---|---|---|
| P0 准备 | 根目录初始化、`docs/`、`packages/shared/` | 搭骨架 |
| P1 静态页+表单 | `apps/web/`（页面+i18n）、`server/modules/content/` + `auth/` | 可跑通前台 |
| P2 订单+支付+核销 | `server/modules/orders/` + `payments/` + `checkins/`、`apps/checkin/` | 闭环 |
| P3 次卡 | `server/modules/skus/`（次卡逻辑）、核销扣减 | 依赖饭团 W2 规则 |
| P4 拼团+分销 | `server/modules/groups/` + `referrals/`、`apps/web/group/` + `referral/` | 依赖饭团 W4 规则 |
| P5 上线 | `docker-compose.yml`、`nginx/`、CI/CD 配置 | 部署+压测 |

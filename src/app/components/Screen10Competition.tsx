import { ArrowLeft, Home, ArrowRight, Trophy, Users, Calendar, MapPin, Medal, Target } from 'lucide-react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen10Competition({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            NOVA COMPETITION
          </div>
          <nav className="flex gap-4">
            <button onClick={() => onNavigate('schedule')} className="hover:text-red-500 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('landing')} className="hover:text-red-500 transition-colors">
              <Home className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[40vh] mt-14 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #dc2626 20px, #dc2626 22px)'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <Trophy className="w-16 h-16 text-[#dc2626] mx-auto mb-4" />
          <h1 className="text-white mb-3" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2.5rem',
            letterSpacing: '0.05em'
          }}>
            NOVA<br/>COMPETITION 2026
          </h1>
          <p className="text-gray-300 text-sm">挑战自我 · 超越极限</p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="px-6 -mt-10 relative z-10">
        <div className="bg-white border-2 border-black p-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <Calendar className="w-5 h-5 mx-auto mb-1" />
            <div className="text-xs text-gray-600">比赛日期</div>
            <div className="text-sm font-semibold">8月19日</div>
          </div>
          <div>
            <MapPin className="w-5 h-5 mx-auto mb-1" />
            <div className="text-xs text-gray-600">比赛场地</div>
            <div className="text-sm font-semibold">主营地</div>
          </div>
          <div>
            <Users className="w-5 h-5 mx-auto mb-1" />
            <div className="text-xs text-gray-600">参赛资格</div>
            <div className="text-sm font-semibold">营员可选</div>
          </div>
        </div>
      </section>

      {/* Competition Introduction */}
      <section className="px-6 py-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          比赛简介
        </h2>
        
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Nova Competition 是 Nova Camp 2026 的重要组成部分，旨在为学员提供一个展示技能、挑战自我的舞台。比赛将在营期第三天（8月19日）举行，涵盖多个竞技项目。
          </p>
          <p>
            无论你是初学者还是资深选手，都能在这里找到适合自己的挑战。我们鼓励所有营员参与，在竞争中学习，在合作中成长。
          </p>
          <p>
            比赛设置个人赛和团队赛两种形式，优胜者将获得Nova Camp官方荣誉证书及精美奖品。
          </p>
        </div>
      </section>

      {/* Competition Categories */}
      <section className="px-6 pb-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          比赛项目
        </h2>

        <div className="space-y-4">
          {[
            {
              title: '个人技能挑战赛',
              desc: '测试个人专项技能，包括速度、精准度和创造力三个维度',
              icon: Target,
              category: '个人赛'
            },
            {
              title: '团队协作竞技赛',
              desc: '4-6人组队，完成团队任务，考验配合与策略',
              icon: Users,
              category: '团队赛'
            },
            {
              title: '创新展示赛',
              desc: '自由主题创作，评委打分，展示你的创意与表达',
              icon: Medal,
              category: '个人/团队'
            }
          ].map((item, index) => (
            <div key={index} className="border border-gray-300 p-4 hover:border-black transition-colors">
              <div className="flex items-start gap-3">
                <div className="bg-black text-white p-2 mt-1">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-base">{item.title}</h3>
                    <span className="text-xs bg-gray-200 px-2 py-0.5">{item.category}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prizes */}
      <section className="px-6 pb-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          奖项设置
        </h2>

        <div className="bg-black text-white p-6 space-y-4">
          <div className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-[#FFD700] text-black flex items-center justify-center font-bold">1</div>
              <span className="font-semibold">冠军奖</span>
            </div>
            <div className="text-sm text-gray-300 ml-10">荣誉证书 + 定制奖杯 + 价值¥500奖品</div>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-[#C0C0C0] text-black flex items-center justify-center font-bold">2</div>
              <span className="font-semibold">亚军奖</span>
            </div>
            <div className="text-sm text-gray-300 ml-10">荣誉证书 + 定制奖牌 + 价值¥300奖品</div>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-[#CD7F32] text-white flex items-center justify-center font-bold">3</div>
              <span className="font-semibold">季军奖</span>
            </div>
            <div className="text-sm text-gray-300 ml-10">荣誉证书 + 定制奖牌 + 价值¥200奖品</div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Medal className="w-6 h-6 text-[#dc2626]" />
              <span className="font-semibold">参与奖</span>
            </div>
            <div className="text-sm text-gray-300 ml-10">所有参赛选手均可获得纪念品一份</div>
          </div>
        </div>
      </section>

      {/* Registration Rules */}
      <section className="px-6 pb-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          报名须知
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">仅限已报名Nova Camp 2026的营员参加</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">报名截止时间：8月18日 20:00</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">每位营员最多可报名2个项目（个人赛+团队赛各1项）</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">团队赛需提前组队，也可现场随机分组</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">请穿着运动装备参赛，确保安全</p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="px-6 pb-10">
        <button
          onClick={() => onNavigate('form')}
          className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 flex items-center justify-center gap-2 transition-colors duration-200"
        >
          <span className="tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem' }}>
            立即报名参赛
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <p className="text-center text-xs text-gray-500 mt-3">
          * 报名比赛需先完成营期课程报名
        </p>
      </section>
    </div>
  );
}

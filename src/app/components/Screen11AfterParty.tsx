import { ArrowLeft, Home, ArrowRight, Music, Sparkles, Clock, MapPin, Ticket, Users, Zap } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen11AfterParty({ onNavigate }: Props) {
  const [ticketCount, setTicketCount] = useState(1);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            AFTER PARTY
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
      <section className="relative h-[45vh] mt-14 bg-gradient-to-br from-[#dc2626] via-black to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #dc2626 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <Sparkles className="w-12 h-12 text-[#dc2626] mx-auto mb-4 animate-pulse" />
          <h1 className="text-white mb-4" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '3rem',
            letterSpacing: '0.05em'
          }}>
            AFTER<br/>PARTY<br/>2026
          </h1>
          <p className="text-gray-200 text-sm tracking-wide">营期狂欢夜 · 不散的青春</p>
        </div>

        <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-xs font-bold">
          8月20日晚
        </div>
      </section>

      {/* Event Highlights */}
      <section className="px-6 py-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          活动亮点
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Music, title: 'DJ Live Set', desc: '专业DJ现场打碟' },
            { icon: Sparkles, title: '主题派对', desc: '荧光主题装扮' },
            { icon: Users, title: '互动游戏', desc: '全员参与狂欢' },
            { icon: Zap, title: '特效灯光', desc: '沉浸式体验' }
          ].map((item, index) => (
            <div key={index} className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors group">
              <item.icon className="w-8 h-8 mx-auto mb-2 group-hover:text-[#dc2626]" />
              <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600 group-hover:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Event Details */}
      <section className="px-6 pb-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          活动详情
        </h2>

        <div className="bg-gray-50 border border-gray-300 divide-y divide-gray-300">
          <div className="p-4 flex items-start gap-4">
            <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold mb-1">活动时间</div>
              <div className="text-sm text-gray-700">8月20日（周三）19:00 - 23:00</div>
              <div className="text-xs text-gray-500 mt-1">闭营日晚间</div>
            </div>
          </div>

          <div className="p-4 flex items-start gap-4">
            <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold mb-1">活动地点</div>
              <div className="text-sm text-gray-700">营地主会场（室外广场）</div>
              <div className="text-xs text-gray-500 mt-1">雨天改至室内体育馆</div>
            </div>
          </div>

          <div className="p-4 flex items-start gap-4">
            <Ticket className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold mb-1">参与方式</div>
              <div className="text-sm text-gray-700">凭票入场，限量200张</div>
              <div className="text-xs text-gray-500 mt-1">先到先得，售完即止</div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="px-6 pb-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          活动流程
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gray-300"></div>

          <div className="space-y-6">
            {[
              { time: '19:00', title: '入场 & 签到', desc: '领取荧光手环和饮品券' },
              { time: '19:30', title: '开场表演', desc: '营员才艺展示 + 舞蹈表演' },
              { time: '20:00', title: 'DJ Set 开始', desc: '专业DJ现场打碟，全场狂欢' },
              { time: '21:00', title: '互动游戏环节', desc: '全员参与，赢取神秘礼品' },
              { time: '22:00', title: '高潮时刻', desc: '烟花秀 + 毕业合影' },
              { time: '23:00', title: '活动结束', desc: '安全送返住宿区' }
            ].map((item, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-0 top-1 w-9 h-9 border-2 border-black bg-white flex items-center justify-center">
                  <div className={`w-2 h-2 ${index === 2 ? 'bg-[#dc2626]' : 'bg-black'}`}></div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{item.time}</div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="px-6 pb-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          重要提示
        </h2>

        <div className="bg-black text-white p-6 space-y-3 text-sm">
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p>建议穿着荧光色或白色衣物，现场提供荧光贴纸</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p>现场提供免费饮品和小食，禁止携带酒精饮料</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p>18岁以下学员需由监护人签署同意书方可参加</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p>活动全程有专业安保和医护人员在场</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p>非营员也可购票参加，但需提前实名登记</p>
          </div>
        </div>
      </section>

      {/* Ticket Purchase Section */}
      <section className="px-6 pb-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          门票购买
        </h2>

        <div className="border-2 border-black p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs text-gray-600 mb-1">After Party 门票</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">¥88</span>
                <span className="text-sm text-gray-500 line-through">¥128</span>
              </div>
              <div className="text-xs text-[#dc2626] mt-1">早鸟价限时优惠</div>
            </div>
            <div className="bg-[#dc2626] text-white px-3 py-1 text-xs font-bold">
              限量200张
            </div>
          </div>

          <div className="border-t border-gray-300 pt-4 mb-4">
            <div className="text-sm font-semibold mb-3">门票包含</div>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-black"></div>
                <span>入场凭证 + 荧光手环</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-black"></div>
                <span>免费饮品券 x3</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-black"></div>
                <span>专属纪念品一份</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-black"></div>
                <span>活动全程摄影照片（电子版）</span>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="border-t border-gray-300 pt-4">
            <div className="text-sm font-semibold mb-3">购买数量</div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                className="w-10 h-10 border-2 border-black flex items-center justify-center text-xl hover:bg-black hover:text-white transition-colors"
              >
                -
              </button>
              <div className="flex-1 text-center">
                <div className="text-2xl font-bold">{ticketCount}</div>
                <div className="text-xs text-gray-500">张门票</div>
              </div>
              <button
                onClick={() => setTicketCount(Math.min(5, ticketCount + 1))}
                className="w-10 h-10 border-2 border-black flex items-center justify-center text-xl hover:bg-black hover:text-white transition-colors"
              >
                +
              </button>
            </div>
            <div className="text-xs text-gray-500 text-center mt-2">
              每人最多购买5张
            </div>
          </div>
        </div>

        {/* Total and CTA */}
        <div className="bg-gray-50 border border-gray-300 p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">合计金额</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#dc2626]">¥{88 * ticketCount}</div>
              <div className="text-xs text-gray-500">已优惠 ¥{40 * ticketCount}</div>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('payment')}
          className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 flex items-center justify-center gap-2 transition-colors duration-200 mb-3"
        >
          <span className="tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem' }}>
            立即购票
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-center text-xs text-gray-500">
          * 购票成功后将收到电子票，凭二维码入场
        </p>
      </section>
    </div>
  );
}

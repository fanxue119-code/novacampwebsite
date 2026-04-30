import { ArrowLeft, Home, Calendar, Copy, Share2, Users, Clock } from 'lucide-react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen7MyCourses({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-lg tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            我的课程
          </div>
          <nav className="flex gap-4">
            <button onClick={() => onNavigate('landing')} className="hover:text-red-500 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('landing')} className="hover:text-red-500 transition-colors">
              <Home className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* My Purchases */}
      <section className="pt-20 px-6 py-8 bg-black text-white">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem',
          letterSpacing: '0.05em'
        }}>
          已购课程
        </h2>
        <div className="border-2 border-white p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem' }}>
                8次卡
              </div>
              <div className="text-xs text-gray-400">不含 Robbie / Special / 联合课</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400 mb-1">剩余</div>
              <div className="text-3xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>6</div>
              <div className="text-xs text-gray-400">节课</div>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-700 text-xs text-gray-400">
            有效期至：2026年12月17日
          </div>
        </div>
      </section>

      {/* Group Purchase Progress */}
      <section className="px-6 py-8 bg-gradient-to-b from-black to-gray-900 text-white">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem',
          letterSpacing: '0.05em'
        }}>
          我的拼团
        </h2>
        <div className="border-2 border-white p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem' }}>
                5人团 - 23节课
              </div>
              <div className="text-xs text-gray-400">订单号: NC20260816001234</div>
            </div>
            <div className="text-right">
              <div className="inline-block px-3 py-1 bg-yellow-500 text-black text-xs mb-1">
                拼团中
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="py-4 border-y border-gray-700 mb-4">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="text-center">
                <div className="text-3xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>3</div>
                <div className="text-xs text-gray-400">已参团</div>
              </div>
              <div className="text-2xl text-gray-500">/</div>
              <div className="text-center">
                <div className="text-3xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>5</div>
                <div className="text-xs text-gray-400">成团人数</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-gray-700 h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-yellow-500 h-full" style={{ width: '60%' }}></div>
            </div>
            <div className="text-xs text-center text-gray-400">
              还差 <strong className="text-white">2</strong> 人成团
            </div>
          </div>

          {/* Countdown & Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>剩余 <span className="text-yellow-500" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>23:45:32</span></span>
            </div>
            <button
              onClick={() => onNavigate('group')}
              className="text-xs border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
            >
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                查看详情
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Referral Link */}
      <section className="px-6 py-12 bg-gray-50">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem',
          letterSpacing: '0.05em'
        }}>
          我的专属分享链接
        </h2>
        <div className="border-2 border-black p-6 bg-white mb-4">
          <div className="text-xs text-gray-600 mb-2">分享给好友，成功报名即可获得奖励</div>
          <div className="text-xs text-gray-600 mb-4 break-all font-mono bg-gray-50 p-3">
            https://novacamp.com/ref/USER123456
          </div>
          <button className="w-full border-2 border-black bg-white hover:bg-black hover:text-white py-3 flex items-center justify-center gap-2 text-sm transition-colors duration-200 mb-3">
            <Copy className="w-4 h-4" />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>复制链接</span>
          </button>
          <button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-3 flex items-center justify-center gap-2 transition-colors duration-200">
            <Share2 className="w-4 h-4" />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>分享邀请</span>
          </button>
        </div>
        <div className="text-xs text-gray-500 text-center">
          已有 3 位好友通过你的链接报名
        </div>
      </section>
    </div>
  );
}

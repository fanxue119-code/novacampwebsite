import { ArrowRight, Calendar, MapPin, Users, ShoppingCart } from 'lucide-react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen1Landing({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            NOVA CAMP
          </div>
          <nav className="flex gap-4 items-center">
            <button onClick={() => onNavigate('store')} className="hover:text-red-500 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #dc2626 2px, #dc2626 4px)',
            animation: 'slide 20s linear infinite'
          }}></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="text-white mb-4 text-sm tracking-widest">2026 夏季营</div>
          <h1 className="text-white mb-6" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '3.5rem',
            lineHeight: '1',
            letterSpacing: '0.05em'
          }}>
            NOVA CAMP<br/>2026
          </h1>
          <p className="text-gray-300 mb-8 text-base leading-relaxed max-w-xs mx-auto">
            面向国内与国际学生的<br/>高质量主题营
          </p>

          <div className="flex flex-col gap-3 mb-12">
            <button
              onClick={() => onNavigate('course')}
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 px-8 transition-colors duration-200 text-sm tracking-wider"
            >
              立即报名
            </button>
            <button
              onClick={() => onNavigate('schedule')}
              className="border border-white text-white hover:bg-white hover:text-black py-4 px-8 transition-colors duration-200 text-sm tracking-wider"
            >
              了解更多
            </button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col gap-2 text-white text-sm">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>2026年8月17日 - 8月20日</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>上海·浦东新区</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs animate-bounce">
          向下滑动
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-center mb-12" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2.5rem',
          letterSpacing: '0.05em'
        }}>
          本期阵容
        </h2>

        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          {[
            'Robbie', 'Sarah', 'Michael', 'Alex',
            'Emma', 'David', 'Lisa', 'James',
            'Sophia', 'Ryan', 'Nina', 'Kevin'
          ].map((name, i) => (
            <button
              key={i}
              onClick={() => onNavigate('teacher')}
              className="text-center group"
            >
              <div className="w-full aspect-square bg-gray-200 rounded-full mb-2 group-hover:bg-black transition-colors duration-200"></div>
              <div className="text-xs">{name}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-6 bg-black text-white overflow-x-auto">
        <h2 className="text-center mb-12" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2.5rem',
          letterSpacing: '0.05em'
        }}>
          课程表
        </h2>

        <div className="overflow-x-auto">
          <div className="min-w-[600px] max-w-2xl mx-auto">
            {/* Headers */}
            <div className="grid grid-cols-5 gap-1 mb-4">
              <div className="text-xs text-gray-500"></div>
              {['Day 1', 'Day 2', 'Day 3', 'Day 4'].map((day, i) => (
                <div key={i} className="text-center text-xs text-gray-400 py-2">
                  {day}<br/>Aug {17 + i}
                </div>
              ))}
            </div>

            {/* Time Slots */}
            <div className="space-y-2">
              {[
                { time: '09:00-10:00', teachers: ['Alyssa', 'Takami', 'Geoffrey', 'Gary'] },
                { time: '10:00-12:00', teachers: ['Vanessa', 'Blake', 'Rowan', ''] },
                { time: '14:00-16:00', teachers: ['Robbie', 'Hayley', 'Robbie', 'Robbie'] },
                { time: '16:00-17:00', teachers: ['Maverick', 'Paddy', 'Takami', 'Alyssa'] },
                { time: '17:00-18:00', teachers: ['Caitlin', 'Caitlin', 'Poppy', 'Paulina'] },
                { time: '19:30-20:00', teachers: ['Pedro', 'Geoffrey', 'Salena', 'Special'] },
                { time: '20:30-22:00', teachers: ['Pauline', 'Rowan', 'Maverick', 'Special'] },
              ].map((slot, i) => (
                <div key={i} className="grid grid-cols-5 gap-1 items-center">
                  <div className="text-xs text-gray-400 pr-2">{slot.time}</div>
                  {slot.teachers.map((teacher, j) => (
                    <div
                      key={j}
                      className={`${
                        teacher === 'Special'
                          ? 'bg-[#dc2626] text-white'
                          : teacher === ''
                          ? 'bg-transparent border border-gray-800'
                          : 'bg-gray-700 text-white'
                      } text-xs py-2 px-2 text-center`}
                    >
                      {teacher === 'Special' ? 'Special Class' : teacher}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-center mb-12" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2.5rem',
          letterSpacing: '0.05em'
        }}>
          课程套餐
        </h2>

        <div className="space-y-4 max-w-md mx-auto mb-12">
          {[
            { name: '早鸟价', desc: '23节完整课程', price: '¥4,999', per: '单节¥217' },
            { name: '5人团', desc: '23节完整课程', price: '¥4,799', per: '单节¥209' },
            { name: '次卡选择', desc: '1/4/8/12次灵活选择', price: '¥500起', per: '' },
          ].map((pkg, i) => (
            <div key={i} className="border border-black p-6 hover:bg-black hover:text-white transition-colors duration-200 group">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="mb-1 text-lg" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300">{pkg.desc}</p>
                  {pkg.per && <p className="text-xs text-gray-500 group-hover:text-gray-400">{pkg.per}</p>}
                </div>
                <div className="text-right">
                  <div className="text-xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    {pkg.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('course')}
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 px-12 transition-colors duration-200 text-sm tracking-wider inline-flex items-center gap-2"
          >
            查看全部课程
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2.5rem',
          letterSpacing: '0.05em'
        }}>
          准备好加入我们了吗？
        </h2>
        <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-xs mx-auto">
          名额有限，早鸟优惠进行中
        </p>
        <button
          onClick={() => onNavigate('course')}
          className="bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 px-12 transition-colors duration-200 text-sm tracking-wider"
        >
          立即报名
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-200 text-center text-sm text-gray-600">
        <div className="mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', color: '#000' }}>
          NOVA CAMP 2026
        </div>
        <div className="text-xs">© 2026 Nova Camp. All rights reserved.</div>
      </footer>

      <style>{`
        @keyframes slide {
          0% { transform: translateY(0); }
          100% { transform: translateY(100px); }
        }
      `}</style>
    </div>
  );
}

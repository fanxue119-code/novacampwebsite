import { ArrowLeft, Home, Calendar } from 'lucide-react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function ScreenMySchedule({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-lg tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            我的课表
          </div>
          <nav className="flex gap-4">
            <button onClick={() => onNavigate('mycourses')} className="hover:text-red-500 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('landing')} className="hover:text-red-500 transition-colors">
              <Home className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      <section className="px-6 py-20">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem',
          letterSpacing: '0.05em'
        }}>
          我的课表
        </h2>

        {/* Location Info */}
        <div className="border-2 border-black p-4 mb-6 bg-gray-50">
          <div className="flex items-start gap-3">
            <div className="text-sm">
              <div className="mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                上课地点
              </div>
              <div className="text-xs text-gray-700">上海市浦东新区 Nova Camp 教学中心</div>
              <div className="text-xs text-gray-500 mt-1">地铁2号线科技馆站3号口</div>
            </div>
          </div>
        </div>

        {/* Day Schedule */}
        <div className="space-y-6">
          {/* Aug 17 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-[#dc2626]" />
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
                8月17日 (Day 1)
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-2 border-black p-4">
                <div className="flex justify-between items-center mb-2">
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem' }}>
                    09:00 - 10:00
                  </div>
                  <div className="text-xs bg-black text-white px-2 py-1">
                    已预约
                  </div>
                </div>
                <div className="text-sm text-gray-700">Alyssa 老师</div>
                <div className="text-xs text-gray-500 mt-1">主题课程 A</div>
              </div>

              <div className="border-2 border-black p-4">
                <div className="flex justify-between items-center mb-2">
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem' }}>
                    14:00 - 16:00
                  </div>
                  <div className="text-xs bg-black text-white px-2 py-1">
                    已预约
                  </div>
                </div>
                <div className="text-sm text-gray-700">Robbie 老师</div>
                <div className="text-xs text-gray-500 mt-1">核心课程 B</div>
              </div>
            </div>
          </div>

          {/* Aug 20 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-[#dc2626]" />
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
                8月20日 (Day 4)
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-2 border-black p-4">
                <div className="flex justify-between items-center mb-2">
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem' }}>
                    16:00 - 17:00
                  </div>
                  <div className="text-xs bg-black text-white px-2 py-1">
                    已预约
                  </div>
                </div>
                <div className="text-sm text-gray-700">Alyssa 老师</div>
                <div className="text-xs text-gray-500 mt-1">进阶课程 C</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

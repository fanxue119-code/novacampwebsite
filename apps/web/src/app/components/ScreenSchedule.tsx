import { ArrowLeft, Home } from 'lucide-react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function ScreenSchedule({ onNavigate }: Props) {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            课表
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

      <div className="pt-20 pb-12 px-6 overflow-x-auto">
        {/* Intro */}
        <div className="mb-8 text-center">
          <h2 className="mb-4" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2rem',
            letterSpacing: '0.05em'
          }}>
            CAMP SCHEDULE
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            2026年8月17日 - 8月20日
          </p>
          <p className="text-xs text-gray-500">
            点击特殊课程了解详情
          </p>
        </div>

        {/* Schedule Table */}
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
              { time: '14:00-16:00', teachers: ['Robbie', 'Competition', 'Robbie', 'Robbie'], screens: [null, 'competition', null, null] },
              { time: '16:00-17:00', teachers: ['Maverick', 'Paddy', 'Takami', 'Alyssa'] },
              { time: '17:00-18:00', teachers: ['Caitlin', 'Caitlin', 'Poppy', 'Paulina'] },
              { time: '19:30-20:00', teachers: ['Pedro', 'Geoffrey', 'Salena', 'Special'] },
              { time: '20:30-22:00', teachers: ['Pauline', 'Rowan', 'After Party', 'Special'], screens: [null, null, 'afterparty', null] },
            ].map((slot, i) => (
              <div key={i} className="grid grid-cols-5 gap-1 items-center">
                <div className="text-xs text-gray-400 pr-2">{slot.time}</div>
                {slot.teachers.map((teacher, j) => (
                  <button
                    key={j}
                    onClick={() => slot.screens && slot.screens[j] && onNavigate(slot.screens[j])}
                    className={`${
                      teacher === 'Special'
                        ? 'bg-[#dc2626] text-white'
                        : teacher === 'Competition' || teacher === 'After Party'
                        ? 'bg-[#dc2626] text-white cursor-pointer hover:bg-[#b91c1c]'
                        : teacher === ''
                        ? 'bg-transparent border border-gray-200'
                        : 'bg-gray-700 text-white'
                    } text-xs py-2 px-2 text-center transition-colors`}
                    disabled={!slot.screens || !slot.screens[j]}
                  >
                    {teacher === 'Special' ? 'Special Class' : teacher}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex gap-4 justify-center text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-700"></div>
            <span className="text-gray-600">常规课程</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#dc2626]"></div>
            <span className="text-gray-600">特殊活动</span>
          </div>
        </div>

        {/* Special Events Details */}
        <div className="mt-12 space-y-6 max-w-2xl mx-auto">
          {/* Competition */}
          <div className="border-2 border-black p-6 bg-white">
            <div className="mb-4">
              <h3 className="text-lg mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                8月18日 NOVA COMPETITION
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Nova Camp 年度竞技比赛，汇集全营学员展开激烈角逐。比赛采用团队对抗形式，考验学员的技术水平、战术配合与临场应变能力。优胜队伍将获得丰厚奖品及荣誉证书。
              </p>
              <div className="text-xs text-gray-500 mb-4">
                时间：8月18日 14:00-18:00 | 地点：主会场
              </div>
            </div>
            <button
              onClick={() => onNavigate('form')}
              className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                点击进入报名表单 →
              </span>
            </button>
          </div>

          {/* After Party */}
          <div className="border-2 border-[#dc2626] p-6 bg-red-50">
            <div className="mb-4">
              <h3 className="text-lg mb-2 text-[#dc2626]" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                8月19日 AFTER PARTY
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Nova Camp 官方派对夜！DJ现场打碟、互动游戏、美食饮品应有尽有。与来自全球的学员尽情狂欢，留下难忘的夏日回忆。非营员也可购票参加。
              </p>
              <div className="text-xs text-gray-600 mb-4">
                时间：8月19日 20:30-23:00 | 地点：派对厅 | 门票价格：¥199/人
              </div>
            </div>
            <button
              onClick={() => onNavigate('store')}
              className="w-full bg-[#dc2626] text-white py-3 hover:bg-[#b91c1c] transition-colors flex items-center justify-center gap-2"
            >
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                购买门票入口 →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

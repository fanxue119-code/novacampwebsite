import { ArrowLeft, Home, Copy, Share2, Users, Clock, Lock } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onNavigate: (screen: string) => void;
}

type GroupType = '5' | '10' | '20';

export function Screen5Group({ onNavigate }: Props) {
  const [activeGroupType, setActiveGroupType] = useState<GroupType>('5');

  const groupData = {
    '5': {
      name: '5人团',
      price: 4799,
      originalPrice: 5799,
      saved: 1000,
      pricePerSession: 209,
      totalSeats: 5,
      filledSeats: 2,
      isHidden: false,
      groupId: 'NC2026G5-001234'
    },
    '10': {
      name: '10人团',
      price: 4499,
      originalPrice: 5799,
      saved: 1300,
      pricePerSession: 196,
      totalSeats: 10,
      filledSeats: 6,
      isHidden: true,
      benefits: '带队老师免费上课',
      groupId: 'NC2026G10-001234'
    },
    '20': {
      name: '20人团',
      price: 3999,
      originalPrice: 5799,
      saved: 1800,
      pricePerSession: 174,
      totalSeats: 20,
      filledSeats: 12,
      isHidden: true,
      benefits: '带队老师免费 + ¥2000返现',
      groupId: 'NC2026G20-001234'
    }
  };

  const currentGroup = groupData[activeGroupType];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-lg tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            拼团
          </div>
          <nav className="flex gap-4">
            <button onClick={() => onNavigate('payment')} className="hover:text-red-500 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('landing')} className="hover:text-red-500 transition-colors">
              <Home className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Group Type Tabs */}
      <section className="pt-20 px-6 py-4 bg-black">
        <div className="flex gap-2">
          {(['5', '10', '20'] as GroupType[]).map((type) => (
            <button
              key={type}
              onClick={() => setActiveGroupType(type)}
              className={`flex-1 py-3 transition-colors duration-200 relative ${
                activeGroupType === type
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white border border-white'
              }`}
            >
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                {type}人团
              </span>
              {groupData[type].isHidden && (
                <Lock className="w-3 h-3 inline ml-1 text-[#dc2626]" />
              )}
            </button>
          ))}
        </div>
        {currentGroup.isHidden && (
          <div className="mt-3 text-xs text-yellow-300 text-center">
            🔒 分销专属团 - 仅通过分销链接可见
          </div>
        )}
      </section>

      {/* Price Comparison */}
      <section className="px-6 py-12 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="text-center mb-8">
          <div className="text-sm text-gray-400 mb-4">{currentGroup.name}立省</div>
          <div className="text-5xl mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            ¥{currentGroup.saved.toLocaleString()}
          </div>
          <div className="flex items-center justify-center gap-6">
            <div>
              <div className="text-xs text-gray-400 mb-1">单买价</div>
              <div className="text-xl line-through text-gray-400">¥{currentGroup.originalPrice.toLocaleString()}</div>
            </div>
            <div className="text-[#dc2626]">→</div>
            <div>
              <div className="text-xs text-[#dc2626] mb-1">{currentGroup.name}价</div>
              <div className="text-xl text-[#dc2626]">¥{currentGroup.price.toLocaleString()}</div>
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-3">单节仅需 ¥{currentGroup.pricePerSession}</div>
          {currentGroup.benefits && (
            <div className="text-xs text-yellow-300 mt-2">✨ {currentGroup.benefits}</div>
          )}
        </div>
      </section>

      {/* Group Progress */}
      <section className="px-6 py-12 bg-white">
        <h2 className="mb-8" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem',
          letterSpacing: '0.05em'
        }}>
          拼团进度
        </h2>

        <div className="border-2 border-black p-8 mb-8 relative">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-5xl mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                {currentGroup.filledSeats}
              </div>
              <div className="text-xs text-gray-500">已参团</div>
            </div>
            <div className="text-3xl text-gray-400">/</div>
            <div className="text-center">
              <div className="text-5xl mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                {currentGroup.totalSeats}
              </div>
              <div className="text-xs text-gray-500">成团人数</div>
            </div>
          </div>

          {/* Members Grid */}
          <div className={`grid gap-3 mb-8 ${
            activeGroupType === '5' ? 'grid-cols-5' :
            activeGroupType === '10' ? 'grid-cols-5' :
            'grid-cols-5'
          }`}>
            {Array.from({ length: currentGroup.filledSeats }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="w-full aspect-square bg-black mb-2"></div>
                <div className="text-xs">成员{i + 1}</div>
              </div>
            ))}
            {Array.from({ length: currentGroup.totalSeats - currentGroup.filledSeats }).map((_, i) => (
              <div key={i + currentGroup.filledSeats} className="text-center">
                <div className="w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-xs text-gray-400">待参团</div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 h-2 overflow-hidden mb-3">
            <div
              className="bg-black h-full"
              style={{ width: `${(currentGroup.filledSeats / currentGroup.totalSeats) * 100}%` }}
            ></div>
          </div>
          <div className="text-sm text-center mb-4">
            还差 <strong>{currentGroup.totalSeats - currentGroup.filledSeats}</strong> 人成团
          </div>

          {/* Countdown in corner */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif' }}>23:45:32</span>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="px-6 py-8 bg-gray-50">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.5rem',
          letterSpacing: '0.05em'
        }}>
          分享拼团链接
        </h2>
        <div className="border-2 border-black p-6 bg-white mb-4">
          <div className="text-xs text-gray-600 mb-4 break-all font-mono">
            https://novacamp.com/group/{currentGroup.groupId}
          </div>
          <button className="w-full border-2 border-black bg-white hover:bg-black hover:text-white py-3 flex items-center justify-center gap-2 text-sm transition-colors duration-200">
            <Copy className="w-4 h-4" />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>复制链接</span>
          </button>
        </div>
      </section>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white z-40 max-w-[390px] mx-auto">
        <div className="px-6 py-4 flex gap-3">
          <button className="flex-1 border-2 border-white text-white hover:bg-white hover:text-black py-4 flex items-center justify-center gap-2 transition-colors duration-200">
            <Share2 className="w-4 h-4" />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>分享</span>
          </button>
          <button
            onClick={() => onNavigate('form')}
            className="flex-1 bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 transition-colors duration-200"
          >
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>立即参团</span>
          </button>
        </div>
      </div>
    </div>
  );
}

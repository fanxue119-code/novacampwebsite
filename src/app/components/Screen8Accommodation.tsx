import { ArrowLeft, Home, ExternalLink } from 'lucide-react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen8Accommodation({ onNavigate }: Props) {
  const images = [
    { height: 280 },
    { height: 200 },
    { height: 240 },
    { height: 220 },
    { height: 260 },
    { height: 210 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-lg tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            住宿信息
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

      {/* Hero Image */}
      <section className="pt-16 relative h-[60vh] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gray-800"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="mb-4" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '3rem',
            letterSpacing: '0.05em',
            lineHeight: '1'
          }}>
            ACCOMMODATION
          </h1>
          <p className="text-gray-300 text-base">舒适住宿 · 配套服务</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-12">
        <div className="mb-12">
          <h2 className="mb-4" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1.8rem',
            letterSpacing: '0.05em'
          }}>
            关于住宿
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            我们为参加 Nova Camp 的学员提供配套住宿服务，位于营地附近，步行即可到达。
          </p>
          <p className="text-gray-700 leading-relaxed">
            住宿环境舒适安全，配备完善的生活设施，让您专注于学习体验。
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="mb-12">
          <h3 className="mb-6" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            环境展示
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                className="bg-gray-200"
                style={{ height: `${img.height}px` }}
              >
                {/* Placeholder for images */}
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h3 className="mb-6" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            配套设施
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              '空调暖气',
              '独立卫浴',
              '免费WiFi',
              '24小时热水',
              '洗衣服务',
              '安全门禁',
            ].map((feature, i) => (
              <div key={i} className="border border-black p-4 text-center">
                <div className="text-sm">{feature}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="space-y-4 mb-12">
          <div className="border border-black p-6">
            <h4 className="mb-2 text-sm" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
              住宿价格
            </h4>
            <p className="text-gray-700 text-sm">
              价格根据房型和入住天数而定，详情请查看预订页面
            </p>
          </div>

          <div className="border border-black p-6">
            <h4 className="mb-2 text-sm" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
              预订说明
            </h4>
            <p className="text-gray-700 text-sm">
              住宿需单独预订，不包含在课程费用中。建议提前预订以确保房源
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="sticky bottom-6">
          <button
            className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 transition-colors duration-200 flex items-center justify-center gap-2"
            onClick={() => window.alert('跳转到住宿预订独立站')}
          >
            <span className="tracking-wider">前往预订</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

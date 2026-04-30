import { ArrowLeft, TrendingUp, Share2, DollarSign } from 'lucide-react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen7Referral({ onNavigate }: Props) {
  const referrals = [
    { name: '李同学', type: '10人团', price: 4499, commission: 449.9, time: '2026-08-10 14:23' },
    { name: '王同学', type: '20人团', price: 3999, commission: 399.9, time: '2026-08-11 15:45' },
    { name: '赵同学', type: '早鸟价', price: 4999, commission: 499.9, time: '2026-08-11 16:12' },
    { name: '陈同学', type: '5人团', price: 4799, commission: 479.9, time: '2026-08-12 18:30' },
    { name: '刘同学', type: '12次卡', price: 2999, commission: 299.9, time: '2026-08-13 09:15' },
    { name: '周同学', type: '8次卡', price: 2399, commission: 239.9, time: '2026-08-13 10:20' },
    { name: '吴同学', type: '10人团', price: 4499, commission: 449.9, time: '2026-08-14 11:05' },
    { name: '郑同学', type: '早鸟价', price: 4999, commission: 499.9, time: '2026-08-14 13:40' },
    { name: '孙同学', type: '20人团', price: 3999, commission: 399.9, time: '2026-08-15 14:18' },
    { name: '马同学', type: '4次卡', price: 1399, commission: 139.9, time: '2026-08-15 15:32' },
  ];

  const totalSales = referrals.reduce((sum, item) => sum + item.price, 0);
  const totalCommission = referrals.reduce((sum, item) => sum + item.commission, 0);
  const totalCount = referrals.length;

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <button onClick={() => onNavigate('landing')} className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-lg tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            我的推荐
          </div>
          <button className="text-sm">规则</button>
        </div>
      </header>

      {/* Overview Card */}
      <section className="pt-20 px-6 py-12 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="border-2 border-white p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-[#dc2626]" />
            <div className="text-sm tracking-wider">推荐奖励</div>
          </div>
          <div className="text-center mb-6">
            <div className="text-5xl mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              ¥{totalCommission.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">累计收益</div>
          </div>
          <div className="flex justify-center gap-6 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{totalCount}</div>
              <div className="text-xs text-gray-400">推荐人数</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                ¥{totalSales.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">总销售额</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12 bg-gray-50">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem',
          letterSpacing: '0.05em'
        }}>
          推荐统计
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white border-2 border-black p-4 text-center">
            <div className="text-3xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              {referrals.filter(r => r.type.includes('团')).length}
            </div>
            <div className="text-xs text-gray-600">拼团购买</div>
          </div>
          <div className="bg-white border-2 border-black p-4 text-center">
            <div className="text-3xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              {referrals.filter(r => r.type === '单买').length}
            </div>
            <div className="text-xs text-gray-600">单独购买</div>
          </div>
          <div className="bg-white border-2 border-black p-4 text-center">
            <div className="text-3xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              {referrals.filter(r => r.type === '次卡').length}
            </div>
            <div className="text-xs text-gray-600">次卡</div>
          </div>
        </div>
      </section>

      {/* Referral List */}
      <section className="px-6 py-12">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem',
          letterSpacing: '0.05em'
        }}>
          推荐记录
        </h2>
        <div className="space-y-3">
          {referrals.map((referral, index) => (
            <div key={index} className="border-2 border-black p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-sm mb-1">{referral.name}</div>
                  <div className="text-xs text-gray-500" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                    {referral.time}
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-block px-2 py-1 bg-black text-white text-xs mb-1">
                    {referral.type}
                  </div>
                  <div className="text-sm">¥{referral.price.toLocaleString()}</div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <span className="text-xs text-gray-500">佣金奖励</span>
                <span className="text-sm text-[#dc2626]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  +¥{referral.commission.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white z-40 max-w-[390px] mx-auto">
        <div className="px-6 py-4">
          <button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 flex items-center justify-center gap-2 transition-colors duration-200">
            <Share2 className="w-5 h-5" />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
              分享推荐链接
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

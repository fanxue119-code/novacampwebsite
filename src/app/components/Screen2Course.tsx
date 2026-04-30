import { ArrowLeft, Home, Check, Calendar, Users, Lock } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen2Course({ onNavigate }: Props) {
  const [selectedSKU, setSelectedSKU] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showHiddenSKU, setShowHiddenSKU] = useState(true); // 演示模式，实际应该根据分销链接判断

  const skus = [
    {
      id: 'FULL_SINGLE',
      category: '整期课程',
      name: '单买价',
      subtitle: '23节完整课程',
      price: 5799,
      pricePerSession: 252,
      sessions: 23,
      highlights: ['23节课程', '包含所有内容', '线上资料', '结业证书'],
      hidden: false
    },
    {
      id: 'FULL_EARLY',
      category: '整期课程',
      name: '早鸟价',
      subtitle: '23节完整课程',
      price: 4999,
      pricePerSession: 217,
      sessions: 23,
      highlights: ['23节课程', '早鸟优惠', '线上资料', '结业证书'],
      badge: '限时优惠',
      hidden: false
    },
    {
      id: 'FULL_GROUP_5',
      category: '整期课程',
      name: '5人团',
      subtitle: '23节完整课程',
      price: 4799,
      pricePerSession: 209,
      sessions: 23,
      highlights: ['23节课程', '5人成团', '线上资料', '结业证书'],
      badge: '推荐',
      hidden: false
    },
    {
      id: 'FULL_GROUP_10',
      category: '整期课程',
      name: '10人团',
      subtitle: '23节完整课程 + 带队老师免费',
      price: 4499,
      pricePerSession: 196,
      sessions: 23,
      highlights: ['23节课程', '10人成团', '带队老师免费上课', '线上资料', '结业证书'],
      badge: '分销专属',
      hidden: true
    },
    {
      id: 'FULL_GROUP_20',
      category: '整期课程',
      name: '20人团',
      subtitle: '23节完整课程 + 带队老师免费 + ¥2000返现',
      price: 3999,
      pricePerSession: 174,
      sessions: 23,
      highlights: ['23节课程', '20人成团', '带队老师免费上课', '¥2000返现', '线上资料', '结业证书'],
      badge: '分销专属',
      hidden: true
    },
    {
      id: 'CARD_12',
      category: '次卡',
      name: '12次卡',
      subtitle: '不含 Robbie / Special / 联合课',
      price: 2999,
      pricePerSession: 249,
      sessions: 12,
      highlights: ['12节课程', '不含 Robbie/Special/联合课', '有效期6个月', '灵活选课'],
      hidden: false
    },
    {
      id: 'CARD_8',
      category: '次卡',
      name: '8次卡',
      subtitle: '不含 Robbie / Special / 联合课',
      price: 2399,
      pricePerSession: 299,
      sessions: 8,
      highlights: ['8节课程', '不含 Robbie/Special/联合课', '有效期4个月', '灵活选课'],
      hidden: false
    },
    {
      id: 'CARD_4',
      category: '次卡',
      name: '4次卡',
      subtitle: '不含 Robbie / Special / 联合课',
      price: 1399,
      pricePerSession: 349,
      sessions: 4,
      highlights: ['4节课程', '不含 Robbie/Special/联合课', '有效期2个月', '灵活选课'],
      hidden: false
    },
    {
      id: 'CARD_1',
      category: '次卡',
      name: '单次卡',
      subtitle: '不含 Robbie / Special / 联合课',
      price: 500,
      pricePerSession: 500,
      sessions: 1,
      highlights: ['1节课程', '不含 Robbie/Special/联合课', '有效期1个月', '体验课程'],
      hidden: false
    },
    {
      id: 'SPECIAL',
      category: '特殊课程',
      name: 'Robbie / 联合课 / SP',
      subtitle: '特殊课程单节购买',
      price: 700,
      pricePerSession: 700,
      sessions: 1,
      highlights: ['可选 Robbie 课程', '可选联合课', '可选 SP 特殊课程', '仅特殊单次卡支持'],
      badge: '特殊',
      hidden: false
    },
  ];

  // 根据隐藏标志过滤SKU
  const visibleSKUs = showHiddenSKU ? skus : skus.filter(sku => !sku.hidden);

  // 按类别分组
  const groupedSKUs = visibleSKUs.reduce((acc, sku) => {
    if (!acc[sku.category]) {
      acc[sku.category] = [];
    }
    acc[sku.category].push(sku);
    return acc;
  }, {} as Record<string, typeof skus>);

  const selected = skus.find(s => s.id === selectedSKU);

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-lg tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            选择课程
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

      {/* Camp Info */}
      <section className="pt-20 px-6 py-8 bg-black text-white">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          Nova Camp 2026
        </h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#dc2626]" />
            <span>2026年8月17日 - 8月20日</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-[#dc2626]" />
            <span>适合高中生、大学生及职场新人</span>
          </div>
        </div>
      </section>

      {/* Demo Toggle - 实际部署时删除 */}
      {showHiddenSKU && (
        <section className="px-6 py-4 bg-yellow-50 border-y-2 border-yellow-200">
          <div className="text-xs text-yellow-800 text-center">
            📌 演示模式：显示分销专属套餐（实际需通过分销链接访问）
          </div>
        </section>
      )}

      {/* SKU Selection by Category */}
      <section className="px-6 py-12">
        {Object.entries(groupedSKUs).map(([category, categorySkus]) => (
          <div key={category} className="mb-12">
            <h2 className="mb-6 flex items-center gap-2" style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.5rem',
              letterSpacing: '0.05em'
            }}>
              {category}
              {category === '整期课程' && <span className="text-xs text-gray-500">(23节课)</span>}
            </h2>

            <div className="space-y-4">
              {categorySkus.map((sku) => (
                <button
                  key={sku.id}
                  onClick={() => {
                    setSelectedSKU(sku.id);
                    setQuantity(1);
                  }}
                  className={`w-full text-left border-2 transition-all ${
                    selectedSKU === sku.id
                      ? 'border-black bg-black text-white'
                      : 'border-black bg-white text-black hover:bg-gray-50'
                  } ${sku.hidden ? 'ring-2 ring-[#dc2626] ring-offset-2' : ''}`}
                >
                  <div className="p-6">
                    {/* Badge */}
                    {sku.badge && (
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 text-xs ${
                          sku.badge === '分销专属'
                            ? selectedSKU === sku.id ? 'bg-[#dc2626] text-white' : 'bg-[#dc2626] text-white'
                            : sku.badge === '推荐'
                            ? 'bg-black text-white'
                            : selectedSKU === sku.id ? 'bg-white text-black' : 'bg-gray-200 text-black'
                        }`}>
                          {sku.badge}
                          {sku.badge === '分销专属' && <Lock className="w-3 h-3 inline ml-1" />}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 style={{
                            fontFamily: 'Bebas Neue, sans-serif',
                            fontSize: '1.5rem',
                            letterSpacing: '0.05em'
                          }}>
                            {sku.name}
                          </h3>
                          {selectedSKU === sku.id && (
                            <Check className="w-5 h-5" />
                          )}
                        </div>
                        <div className={`text-xs mb-2 ${selectedSKU === sku.id ? 'text-gray-300' : 'text-gray-600'}`}>
                          {sku.subtitle}
                        </div>
                        <div className={`text-xs ${selectedSKU === sku.id ? 'text-gray-400' : 'text-gray-500'}`}>
                          单节 ¥{sku.pricePerSession}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                          ¥{sku.price.toLocaleString()}
                        </div>
                        <div className={`text-xs ${selectedSKU === sku.id ? 'text-gray-400' : 'text-gray-500'}`}>
                          {sku.sessions}节课
                        </div>
                      </div>
                    </div>

                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white z-40 max-w-[390px] mx-auto">
        <div className="px-6 py-4">
          <div className="mb-4">
            <div className="text-sm mb-3">
              {selected ? (
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem' }}>
                      {selected.name}
                    </span>
                    {selected.badge === '分销专属' && (
                      <Lock className="w-3 h-3 text-[#dc2626]" />
                    )}
                  </div>
                  <div className="text-xs text-gray-400">{selected.subtitle}</div>
                  <div className="text-xs text-gray-400">单价 ¥{selected.price.toLocaleString()}</div>
                </div>
              ) : (
                <div className="text-gray-400">请选择课程</div>
              )}
            </div>

            {selected && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg min-w-[2rem] text-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <div className="text-xs text-gray-400 mb-1">总价</div>
                  <div className="text-2xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    ¥{(selected.price * quantity).toLocaleString()}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (selectedSKU) {
                // 如果是团购SKU，跳转到拼团页面
                if (['FULL_GROUP_5', 'FULL_GROUP_10', 'FULL_GROUP_20'].includes(selectedSKU)) {
                  onNavigate('group');
                } else {
                  onNavigate('form');
                }
              }
            }}
            disabled={!selectedSKU}
            className={`w-full py-4 transition-colors duration-200 ${
              selectedSKU
                ? 'bg-[#dc2626] hover:bg-[#b91c1c] text-white'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span className="tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              {selected && ['FULL_GROUP_5', 'FULL_GROUP_10', 'FULL_GROUP_20'].includes(selected.id) ? '参与拼团' : '立即报名'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

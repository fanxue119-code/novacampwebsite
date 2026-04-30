import { ArrowLeft, Home, MapPin, Navigation, Car, Train, Plane, Bus, Clock, Phone, Info } from 'lucide-react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen13Transportation({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            TRANSPORTATION
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

      {/* Location Info */}
      <section className="mt-14 bg-black text-white p-6">
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 flex-shrink-0 mt-1 text-[#dc2626]" />
          <div>
            <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              NOVA CAMP 2026 营地地址
            </h2>
            <p className="text-sm text-gray-300 mb-3">
              上海市浦东新区东方路XXX号<br/>
              东方体育中心训练基地
            </p>
            <button className="text-sm text-[#dc2626] border border-[#dc2626] px-4 py-2 hover:bg-[#dc2626] hover:text-white transition-colors">
              复制地址
            </button>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="relative h-[200px] bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <div className="text-sm">地图加载中...</div>
          </div>
        </div>
        <button className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 text-sm shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
          <Navigation className="w-4 h-4" />
          导航
        </button>
      </section>

      {/* Transportation Options */}
      <section className="px-6 py-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          交通方式
        </h2>

        <div className="space-y-4">
          {/* Metro */}
          <div className="border-2 border-black p-4">
            <div className="flex items-start gap-4 mb-3">
              <div className="bg-black text-white p-3">
                <Train className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">地铁</h3>
                <div className="text-xs text-gray-600">推荐方式 · 便捷快速</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 space-y-3 text-sm">
              <div>
                <div className="font-semibold mb-1 flex items-center gap-2">
                  <span className="bg-[#dc2626] text-white px-2 py-0.5 text-xs">6号线</span>
                  东方体育中心站
                </div>
                <div className="text-gray-600 text-xs ml-1">4号口出站，步行约10分钟</div>
              </div>
              
              <div className="border-t border-gray-300 pt-3">
                <div className="font-semibold mb-1 flex items-center gap-2">
                  <span className="bg-purple-600 text-white px-2 py-0.5 text-xs">11号线</span>
                  东方体育中心站
                </div>
                <div className="text-gray-600 text-xs ml-1">1号口出站，步行约8分钟</div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
              <Clock className="w-4 h-4" />
              <span>从市中心约30-40分钟</span>
            </div>
          </div>

          {/* Taxi/Car */}
          <div className="border-2 border-gray-300 p-4 hover:border-black transition-colors">
            <div className="flex items-start gap-4 mb-3">
              <div className="bg-gray-800 text-white p-3">
                <Car className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">自驾/打车</h3>
                <div className="text-xs text-gray-600">灵活便利</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 space-y-3 text-sm">
              <div>
                <div className="font-semibold mb-1">导航地址</div>
                <div className="text-gray-700">"东方体育中心训练基地"或"浦东新区东方路XXX号"</div>
              </div>
              
              <div className="border-t border-gray-300 pt-3">
                <div className="font-semibold mb-2">停车信息</div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-black"></div>
                    <span className="text-gray-700">营地内设有免费停车场</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-black"></div>
                    <span className="text-gray-700">车位有限，建议提前到达</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-black"></div>
                    <span className="text-gray-700">营期内可长期停放</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
              <Clock className="w-4 h-4" />
              <span>从市中心约20-30分钟（视路况而定）</span>
            </div>
          </div>

          {/* Airport */}
          <div className="border-2 border-gray-300 p-4 hover:border-black transition-colors">
            <div className="flex items-start gap-4 mb-3">
              <div className="bg-blue-600 text-white p-3">
                <Plane className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">机场接驳</h3>
                <div className="text-xs text-gray-600">外地学员推荐</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 space-y-3 text-sm">
              <div>
                <div className="font-semibold mb-2">浦东国际机场 (PVG)</div>
                <div className="text-xs space-y-1 text-gray-700">
                  <div className="flex items-center gap-2">
                    <Train className="w-3 h-3" />
                    <span>地铁2号线转6号线，约1小时20分钟</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-3 h-3" />
                    <span>打车约45-60分钟，费用约¥120-150</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-300 pt-3">
                <div className="font-semibold mb-2">虹桥机场 (SHA)</div>
                <div className="text-xs space-y-1 text-gray-700">
                  <div className="flex items-center gap-2">
                    <Train className="w-3 h-3" />
                    <span>地铁2号线转6号线，约1小时</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-3 h-3" />
                    <span>打车约40-50分钟，费用约¥100-130</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Train Station */}
          <div className="border-2 border-gray-300 p-4 hover:border-black transition-colors">
            <div className="flex items-start gap-4 mb-3">
              <div className="bg-green-600 text-white p-3">
                <Bus className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">火车站/高铁站</h3>
                <div className="text-xs text-gray-600">长途出行</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 space-y-3 text-sm">
              <div>
                <div className="font-semibold mb-2">上海虹桥站</div>
                <div className="text-xs text-gray-700">地铁2号线转6号线，约50分钟</div>
              </div>
              
              <div className="border-t border-gray-300 pt-3">
                <div className="font-semibold mb-2">上海站</div>
                <div className="text-xs text-gray-700">地铁1号线转6号线，约45分钟</div>
              </div>

              <div className="border-t border-gray-300 pt-3">
                <div className="font-semibold mb-2">上海南站</div>
                <div className="text-xs text-gray-700">地铁1号线转6号线，约40分钟</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shuttle Bus Service */}
      <section className="px-6 pb-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          接送班车服务
        </h2>

        <div className="bg-[#dc2626] text-white p-6 mb-4">
          <div className="flex items-start gap-4 mb-4">
            <Bus className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                NOVA CAMP 专属接送班车
              </h3>
              <p className="text-sm opacity-90">
                为方便学员往返，我们提供营期首日和最后一日的免费接送班车服务
              </p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 p-4 space-y-3 text-sm">
            <div>
              <div className="font-semibold mb-1">8月17日（首日）接站</div>
              <div className="text-xs opacity-90">
                • 浦东机场 T1/T2：9:00, 11:00, 14:00<br/>
                • 虹桥枢纽：10:00, 12:00, 15:00<br/>
                • 人民广场：9:30, 11:30, 14:30
              </div>
            </div>

            <div className="border-t border-white border-opacity-20 pt-3">
              <div className="font-semibold mb-1">8月20日（末日）送站</div>
              <div className="text-xs opacity-90">
                • 送至浦东机场：14:00, 16:00, 18:00<br/>
                • 送至虹桥枢纽：14:30, 16:30, 18:30<br/>
                • 送至人民广场：15:00, 17:00, 19:00
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white bg-opacity-10 p-3 text-xs">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p>需至少提前24小时预约，名额有限</p>
                <p>预约成功后会收到短信通知上车地点</p>
                <p>请至少提前15分钟到达候车点</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('form')}
          className="w-full border-2 border-black text-black py-4 hover:bg-black hover:text-white transition-colors"
        >
          <span className="tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem' }}>
            预约班车服务
          </span>
        </button>
      </section>

      {/* Contact Info */}
      <section className="px-6 pb-10">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '0.05em'
        }}>
          联系我们
        </h2>

        <div className="border border-gray-300 divide-y divide-gray-300">
          <div className="p-4 flex items-center gap-4">
            <div className="bg-gray-100 p-3">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-600 mb-1">24小时服务热线</div>
              <div className="font-semibold text-lg">400-XXX-XXXX</div>
            </div>
            <button className="text-sm text-[#dc2626] border border-[#dc2626] px-4 py-2 hover:bg-[#dc2626] hover:text-white transition-colors">
              拨打
            </button>
          </div>

          <div className="p-4">
            <div className="text-sm text-gray-700 space-y-2">
              <p>• 交通咨询时间：每日 9:00 - 21:00</p>
              <p>• 紧急情况可随时联系</p>
              <p>• 微信客服：Novacamp2026</p>
            </div>
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
          温馨提示
        </h2>

        <div className="bg-gray-50 border border-gray-300 p-6 space-y-3 text-sm text-gray-700">
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p>建议至少提前1小时到达营地，预留签到和安置时间</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p>营地周边交通便利，但高峰期可能拥堵，请合理规划出行时间</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p>如有大件行李，建议选择自驾或打车</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2 flex-shrink-0"></div>
            <p>营期内不建议中途离营，如有特殊情况需提前报备</p>
          </div>
        </div>
      </section>
    </div>
  );
}

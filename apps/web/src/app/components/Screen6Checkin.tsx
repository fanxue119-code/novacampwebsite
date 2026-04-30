import { ArrowLeft, Home, QrCode, CheckCircle2, XCircle, Download } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen6Checkin({ onNavigate }: Props) {
  const [view, setView] = useState<'user' | 'staff'>('user');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-lg tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            我的报名
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

      {/* View Toggle */}
      <section className="pt-20 px-6 py-4 bg-black">
        <div className="flex gap-2">
          <button
            onClick={() => setView('user')}
            className={`flex-1 py-3 transition-colors duration-200 ${
              view === 'user'
                ? 'bg-white text-black'
                : 'bg-transparent text-white border border-white'
            }`}
          >
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>学员视图</span>
          </button>
          <button
            onClick={() => setView('staff')}
            className={`flex-1 py-3 transition-colors duration-200 ${
              view === 'staff'
                ? 'bg-white text-black'
                : 'bg-transparent text-white border border-white'
            }`}
          >
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>安保视图</span>
          </button>
        </div>
      </section>

      {view === 'user' ? (
        <>
          {/* Order Status */}
          <section className="px-6 py-12">
            <div className="border-2 border-black p-8 mb-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', letterSpacing: '0.05em' }}>
                  报名成功
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">订单编号</span>
                  <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>NC20260416001234</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">课程套餐</span>
                  <span>5人团 - 23节课</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">支付状态</span>
                  <span className="text-green-600 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    已支付
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600">支付金额</span>
                  <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem' }}>¥4,799</span>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="border-2 border-black p-8">
              <h3 className="text-center mb-6" style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '1.5rem',
                letterSpacing: '0.05em'
              }}>
                核销二维码
              </h3>
              <div className="aspect-square bg-white border-2 border-black flex items-center justify-center mb-6">
                <QrCode className="w-32 h-32 text-black" />
              </div>
              <div className="text-center text-xs text-gray-600 mb-4">
                请在营地入口出示此二维码进行核销
              </div>
              <button className="w-full border-2 border-black bg-white hover:bg-black hover:text-white py-3 flex items-center justify-center gap-2 transition-colors duration-200">
                <Download className="w-4 h-4" />
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>保存二维码</span>
              </button>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Staff View - Scan */}
          <section className="px-6 py-12">
            <h2 className="mb-8" style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.8rem',
              letterSpacing: '0.05em'
            }}>
              扫描学生二维码
            </h2>
            <button
              className="w-full aspect-square border-4 border-dashed border-black bg-gray-50 flex flex-col items-center justify-center gap-6 hover:bg-gray-100 transition-colors"
            >
              <QrCode className="w-24 h-24 text-black" />
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
                点击扫描
              </div>
            </button>
          </section>

          {/* Scan Result */}
          <section className="px-6 py-8">
            <h3 className="mb-6" style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.5rem',
              letterSpacing: '0.05em'
            }}>
              扫码结果
            </h3>

            <div className="border-2 border-green-600 bg-green-50 p-8 mb-6">
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">学生姓名</span>
                  <span>张小明</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">订单编号</span>
                  <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>NC20260416001234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">课程套餐</span>
                  <span>5人团 - 23节课</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">支付状态</span>
                  <span className="text-green-600 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    已支付
                  </span>
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 flex items-center justify-center gap-2 transition-colors duration-200">
                <CheckCircle2 className="w-5 h-5" />
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
                  确认入场
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="border-2 border-black p-6">
              <div className="text-center mb-4" style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '1.2rem',
                letterSpacing: '0.05em'
              }}>
                今日核销统计
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>156</div>
                  <div className="text-xs text-gray-600">已核销</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>44</div>
                  <div className="text-xs text-gray-600">未到场</div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

import { ArrowLeft, Home, Upload, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen4Payment({ onNavigate }: Props) {
  const [paymentMethod, setPaymentMethod] = useState<'alipay' | 'wise' | null>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleAlipayPayment = () => {
    // 模拟跳转支付宝
    alert('正在跳转支付宝支付...\n\n（这是模拟演示，实际会调用支付宝接口）');
    setTimeout(() => {
      onNavigate('group');
    }, 500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-lg tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            {paymentMethod ? (paymentMethod === 'alipay' ? '支付宝支付' : 'Wise 支付') : '选择支付方式'}
          </div>
          <nav className="flex gap-4">
            <button onClick={() => onNavigate('form')} className="hover:text-red-500 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('landing')} className="hover:text-red-500 transition-colors">
              <Home className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Order Info */}
      <section className="pt-20 px-6 py-8 bg-black text-white">
        <div className="border-2 border-white p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">订单编号</span>
            <span className="text-sm" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
              NC20260816001234
            </span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-gray-700">
            <span className="text-sm text-gray-400">订单金额</span>
            <span className="text-3xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              ¥4,799
            </span>
          </div>
        </div>
      </section>

      {!paymentMethod ? (
        /* Payment Method Selection */
        <section className="px-6 py-12">
          <h2 className="mb-8" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1.8rem',
            letterSpacing: '0.05em'
          }}>
            请选择支付方式
          </h2>

          <div className="space-y-4">
            {/* Alipay */}
            <button
              onClick={() => setPaymentMethod('alipay')}
              className="w-full border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border-2 border-current flex items-center justify-center">
                    <span className="text-xs" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>支付宝</span>
                  </div>
                  <div className="text-left">
                    <div className="mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
                      支付宝 Alipay
                    </div>
                    <div className="text-xs text-gray-600 group-hover:text-gray-300">适合中国大陆用户</div>
                  </div>
                </div>
              </div>
            </button>

            {/* Wise / International */}
            <button
              onClick={() => setPaymentMethod('wise')}
              className="w-full border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border-2 border-current flex items-center justify-center">
                    <span className="text-xs" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>WISE</span>
                  </div>
                  <div className="text-left">
                    <div className="mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
                      Wise / International
                    </div>
                    <div className="text-xs text-gray-600 group-hover:text-gray-300">For International Students</div>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-current pt-4 text-xs text-left text-gray-600 group-hover:text-gray-300">
                付款后请上传转账凭证，我们将在24小时内确认订单
              </div>
            </button>
          </div>
        </section>
      ) : paymentMethod === 'alipay' ? (
        /* Alipay Payment Page */
        <section className="px-6 py-12">
          <div className="border-2 border-black p-8 text-center mb-6">
            <div className="w-24 h-24 border-2 border-black mx-auto mb-6 flex items-center justify-center">
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem' }}>支付宝</span>
            </div>
            <div className="mb-6">
              <div className="text-sm text-gray-600 mb-2">支付金额</div>
              <div className="text-4xl mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                ¥4,799
              </div>
            </div>
            <button
              onClick={handleAlipayPayment}
              className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 transition-colors duration-200"
            >
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                确认支付
              </span>
            </button>
          </div>
          <button
            onClick={() => setPaymentMethod(null)}
            className="w-full border-2 border-black py-3 hover:bg-black hover:text-white transition-colors duration-200"
          >
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
              返回选择其他方式
            </span>
          </button>
        </section>
      ) : (
        /* Wise Payment Page */
        <section className="px-6 py-12">
          <div className="border-2 border-black p-6 mb-6">
            <h3 className="mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.3rem', letterSpacing: '0.05em' }}>
              收款账户信息
            </h3>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">收款人</span>
                <span>Nova Camp Education</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">账户类型</span>
                <span>Wise Business</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">邮箱</span>
                <span className="text-xs">payments@novacamp.com</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">金额</span>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem' }}>
                  ¥4,799
                </span>
              </div>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-200 p-4 text-xs text-gray-700">
              请使用 Wise 转账至以上账户，完成后上传支付凭证
            </div>
          </div>

          {/* Upload Section */}
          <div className="border-2 border-black p-6 mb-6">
            <h3 className="mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.3rem', letterSpacing: '0.05em' }}>
              上传支付凭证
            </h3>
            <input
              type="file"
              id="payment-proof"
              accept="image/*,.pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
            <label
              htmlFor="payment-proof"
              className="w-full border-2 border-dashed border-gray-400 bg-gray-50 p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
            >
              {uploadedFile ? (
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <div className="text-sm mb-1">已上传</div>
                  <div className="text-xs text-gray-600">{uploadedFile}</div>
                </div>
              ) : (
                <div className="text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <div className="text-sm mb-1">点击上传凭证</div>
                  <div className="text-xs text-gray-500">支持 JPG、PNG、PDF 格式</div>
                </div>
              )}
            </label>
          </div>

          <button
            onClick={() => uploadedFile && onNavigate('checkin')}
            disabled={!uploadedFile}
            className={`w-full py-4 mb-3 transition-colors duration-200 ${
              uploadedFile
                ? 'bg-[#dc2626] hover:bg-[#b91c1c] text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
              提交凭证
            </span>
          </button>

          <button
            onClick={() => setPaymentMethod(null)}
            className="w-full border-2 border-black py-3 hover:bg-black hover:text-white transition-colors duration-200"
          >
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
              返回选择其他方式
            </span>
          </button>
        </section>
      )}

      {/* Notes */}
      {!paymentMethod && (
        <section className="px-6 py-8">
          <div className="border-2 border-[#dc2626] bg-red-50 p-6">
            <div className="text-sm mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
              温馨提示
            </div>
            <ul className="text-xs text-gray-700 space-y-2">
              <li>• 请在30分钟内完成支付</li>
              <li>• 支付成功后将自动生成核销二维码</li>
              <li>• Wise 付款需上传凭证，24小时内确认</li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}

import { ArrowLeft, Home } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen3Form({ onNavigate }: Props) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-lg tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            填写报名信息
          </div>
          <nav className="flex gap-4">
            <button onClick={() => onNavigate('course')} className="hover:text-red-500 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('landing')} className="hover:text-red-500 transition-colors">
              <Home className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Form */}
      <form className="pt-20 px-6 py-12">
        <div className="space-y-8">
          {/* Student Name */}
          <div>
            <label className="block text-sm mb-3">
              学生姓名 <span className="text-[#dc2626]">*</span>
            </label>
            <input
              type="text"
              placeholder="请输入学生姓名"
              className="w-full border-b-2 border-black px-0 py-3 bg-transparent focus:outline-none focus:border-[#dc2626] transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-3">
              手机号码 <span className="text-[#dc2626]">*</span>
            </label>
            <input
              type="tel"
              placeholder="+86 138 0000 0000"
              className="w-full border-b-2 border-black px-0 py-3 bg-transparent focus:outline-none focus:border-[#dc2626] transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-3">
              电子邮箱 <span className="text-[#dc2626]">*</span>
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border-b-2 border-black px-0 py-3 bg-transparent focus:outline-none focus:border-[#dc2626] transition-colors"
            />
          </div>

          {/* Country/Region */}
          <div>
            <label className="block text-sm mb-3">
              国家/地区 <span className="text-[#dc2626]">*</span>
            </label>
            <select className="w-full border-b-2 border-black px-0 py-3 bg-transparent focus:outline-none focus:border-[#dc2626] transition-colors">
              <option>请选择</option>
              <option>中国大陆</option>
              <option>中国香港</option>
              <option>中国台湾</option>
              <option>美国</option>
              <option>英国</option>
              <option>加拿大</option>
              <option>其他</option>
            </select>
          </div>

          {/* School */}
          <div>
            <label className="block text-sm mb-3">
              所在学校 <span className="text-[#dc2626]">*</span>
            </label>
            <input
              type="text"
              placeholder="请输入学校名称"
              className="w-full border-b-2 border-black px-0 py-3 bg-transparent focus:outline-none focus:border-[#dc2626] transition-colors"
            />
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="block text-sm mb-3">
              紧急联系人
            </label>
            <input
              type="text"
              placeholder="联系人姓名"
              className="w-full border-b-2 border-gray-300 px-0 py-3 bg-transparent focus:outline-none focus:border-[#dc2626] transition-colors mb-6"
            />
            <input
              type="tel"
              placeholder="联系电话"
              className="w-full border-b-2 border-gray-300 px-0 py-3 bg-transparent focus:outline-none focus:border-[#dc2626] transition-colors"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm mb-3">
              备注信息
            </label>
            <textarea
              placeholder="如有特殊需求请在此说明"
              rows={4}
              className="w-full border-2 border-gray-300 px-4 py-3 bg-white resize-none focus:outline-none focus:border-black transition-colors"
            />
          </div>

          {/* Agreement */}
          <div className="border-2 border-black p-6 bg-gray-50">
            <label className="flex items-start gap-4 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 accent-black"
              />
              <span className="text-sm leading-relaxed">
                我已阅读并同意《Nova Camp 报名协议》及《隐私政策》，确认提交的信息真实有效。营期：2026年8月17-20日
              </span>
            </label>
          </div>
        </div>
      </form>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white z-40 max-w-[390px] mx-auto">
        <div className="px-6 py-4">
          <button
            onClick={() => agreed && onNavigate('payment')}
            disabled={!agreed}
            className={`w-full py-4 transition-colors duration-200 ${
              agreed
                ? 'bg-[#dc2626] hover:bg-[#b91c1c] text-white'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span className="tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              提交订单
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

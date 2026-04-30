import { ArrowLeft, Home, Play } from 'lucide-react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function Screen9Teacher({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-lg tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            师资介绍
          </div>
          <nav className="flex gap-4">
            <button onClick={() => onNavigate('teachers')} className="hover:text-red-500 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('landing')} className="hover:text-red-500 transition-colors">
              <Home className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 relative h-[50vh] bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gray-800"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6"></div>
          <h1 className="mb-2" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2.5rem',
            letterSpacing: '0.05em'
          }}>
            ROBBIE
          </h1>
          <p className="text-gray-300 text-sm mb-2">课程总监</p>
          <p className="text-gray-400 text-xs">10年教学经验</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="px-6 py-12">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem',
          letterSpacing: '0.05em'
        }}>
          个人简介
        </h2>
        <div className="prose prose-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            Robbie 拥有超过10年的教学经验，曾在多个知名教育机构担任课程总监。他专注于创新教学方法，致力于为学生提供最优质的学习体验。
          </p>
          <p>
            他的教学理念是"以学生为中心"，通过互动式教学和实践项目，帮助学生深入理解课程内容，培养独立思考和解决问题的能力。教学风格严谨而不失幽默，善于激发学生的学习热情。
          </p>
          <p>
            在 Nova Camp，Robbie 负责整体课程设计与教学质量把控，确保每位学员都能获得最大的学习收获。他曾指导数百名学生成功完成学业，其中不乏考入世界顶尖大学的优秀学员。
          </p>
          <p>
            <strong>教学风格：</strong>严谨、互动、启发式教学，注重实践与理论结合。擅长将复杂概念简化，帮助学生建立完整的知识体系。
          </p>
        </div>
      </section>

      {/* Video Preview */}
      <section className="px-6 py-12 bg-black text-white">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem',
          letterSpacing: '0.05em'
        }}>
          授课视频预览
        </h2>
        <div className="aspect-video bg-gray-800 border-2 border-white flex items-center justify-center mb-4">
          <button className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200">
            <Play className="w-8 h-8 ml-1" />
          </button>
        </div>
        <div className="text-sm text-gray-400 text-center">
          点击播放 Robbie 的授课片段
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 text-center">
        <h2 className="mb-6" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem',
          letterSpacing: '0.05em'
        }}>
          想跟 Robbie 学习？
        </h2>
        <button
          onClick={() => onNavigate('course')}
          className="bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 px-12 transition-colors duration-200"
        >
          <span className="tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            立即报名
          </span>
        </button>
      </section>
    </div>
  );
}

import { ArrowLeft, Home } from 'lucide-react';

interface Props {
  onNavigate: (screen: string) => void;
}

export function ScreenTeachers({ onNavigate }: Props) {
  const internationalTeachers = [
    'Robbie', 'Sarah', 'Michael', 'Alex',
    'Emma', 'David', 'Lisa', 'James',
    'Sophia', 'Ryan', 'Nina', 'Kevin'
  ];

  const specialTeachers = [
    '张老师', '李老师', '王老师', '刘老师',
    '陈老师', '杨老师', '赵老师', '黄老师'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            老师介绍
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

      <div className="pt-20 pb-12 px-6">
        {/* International Teachers Section */}
        <section className="mb-16">
          <h2 className="text-center mb-8" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2rem',
            letterSpacing: '0.05em'
          }}>
            本期阵容
          </h2>
          <p className="text-center text-gray-600 text-sm mb-8">
            来自全球各地的专业导师
          </p>

          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {internationalTeachers.map((name, i) => (
              <button
                key={i}
                onClick={() => onNavigate('teacher')}
                className="text-center group"
              >
                <div className="w-full aspect-square bg-gray-200 rounded-full mb-2 group-hover:bg-black transition-colors duration-200"></div>
                <div className="text-xs">{name}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Special Class Teachers Section */}
        <section>
          <h2 className="text-center mb-8" style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2rem',
            letterSpacing: '0.05em'
          }}>
            SPECIAL CLASS
          </h2>
          <p className="text-center text-gray-600 text-sm mb-8">
            特邀导师
          </p>

          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {specialTeachers.map((name, i) => (
              <button
                key={i}
                onClick={() => onNavigate('teacher')}
                className="text-center group"
              >
                <div className="w-full aspect-square bg-red-100 rounded-full mb-2 group-hover:bg-red-600 transition-colors duration-200"></div>
                <div className="text-xs">{name}</div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

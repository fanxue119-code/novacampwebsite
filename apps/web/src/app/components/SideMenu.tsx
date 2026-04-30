import { X, ChevronRight } from 'lucide-react';

type Screen = 'landing' | 'course' | 'form' | 'payment' | 'group' | 'checkin' | 'mycourses' | 'myschedule' | 'accommodation' | 'teacher' | 'teachers' | 'schedule' | 'competition' | 'afterparty' | 'store' | 'transportation';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function SideMenu({ isOpen, onClose, currentScreen, onNavigate }: SideMenuProps) {
  const handleNavigate = (screen: Screen) => {
    onNavigate(screen);
    onClose();
  };

  const menuSections = [
    {
      title: 'CAMP 介绍',
      items: [
        { label: 'Camp 课表', screen: 'schedule' as Screen },
        { label: '购买课程', screen: 'course' as Screen },
        { label: '本期阵容', screen: 'teachers' as Screen },
      ]
    },
    {
      title: '我的',
      items: [
        { label: '我的订单', screen: 'mycourses' as Screen },
        { label: '我的课表', screen: 'myschedule' as Screen },
        { label: '课程核销', screen: 'checkin' as Screen },
      ]
    },
    {
      title: 'NOVA 商店',
      items: [
        { label: '商城', screen: 'store' as Screen },
      ]
    },
    {
      title: '实用指南',
      items: [
        { label: '交通指引', screen: 'transportation' as Screen },
        { label: '合作住宿', screen: 'accommodation' as Screen },
      ]
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="font-['Bebas_Neue'] text-2xl tracking-wider">NOVA CAMP</h2>
            <p className="text-xs text-gray-500 mt-0.5">Aug 17-20, 2026</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Sections */}
        <div className="overflow-y-auto h-[calc(100%-80px)] py-4">
          {menuSections.map((section, idx) => (
            <div key={idx} className="mb-6">
              <div className="px-6 mb-2">
                <h3 className="text-xs font-semibold text-gray-400 tracking-wider">
                  {section.title}
                </h3>
              </div>
              <div>
                {section.items.map((item, itemIdx) => (
                  <button
                    key={itemIdx}
                    onClick={() => handleNavigate(item.screen)}
                    className={`w-full px-6 py-3 flex items-center justify-between transition-colors ${
                      currentScreen === item.screen
                        ? 'bg-red-50 text-red-600 border-l-4 border-red-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-sm">{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <p className="text-xs text-center text-gray-400">
            © 2026 Nova Camp. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

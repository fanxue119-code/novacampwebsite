import { useState } from 'react';
import { Menu } from 'lucide-react';
import { SideMenu } from './components/SideMenu';
import { Screen1Landing } from './components/Screen1Landing';
import { Screen2Course } from './components/Screen2Course';
import { Screen3Form } from './components/Screen3Form';
import { Screen4Payment } from './components/Screen4Payment';
import { Screen5Group } from './components/Screen5Group';
import { Screen6Checkin } from './components/Screen6Checkin';
import { Screen7MyCourses } from './components/Screen7MyCourses';
import { ScreenMySchedule } from './components/ScreenMySchedule';
import { Screen8Accommodation } from './components/Screen8Accommodation';
import { Screen9Teacher } from './components/Screen9Teacher';
import { ScreenTeachers } from './components/ScreenTeachers';
import { ScreenSchedule } from './components/ScreenSchedule';
import { Screen10Competition } from './components/Screen10Competition';
import { Screen11AfterParty } from './components/Screen11AfterParty';
import { Screen12Store } from './components/Screen12Store';
import { Screen13Transportation } from './components/Screen13Transportation';

type Screen = 'landing' | 'course' | 'form' | 'payment' | 'group' | 'checkin' | 'mycourses' | 'myschedule' | 'accommodation' | 'teacher' | 'teachers' | 'schedule' | 'competition' | 'afterparty' | 'store' | 'transportation';

// Nova Camp Registration System
export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Menu Button - Fixed at top left, outside container */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 left-4 z-[60] w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
        style={{ maxWidth: '390px' }}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Side Menu */}
      <SideMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
      />

      {/* Main Content Container */}
      <div className="max-w-[390px] mx-auto bg-white min-h-screen relative">
        {/* Render Current Screen */}
        {currentScreen === 'landing' && <Screen1Landing onNavigate={setCurrentScreen} />}
        {currentScreen === 'course' && <Screen2Course onNavigate={setCurrentScreen} />}
        {currentScreen === 'form' && <Screen3Form onNavigate={setCurrentScreen} />}
        {currentScreen === 'payment' && <Screen4Payment onNavigate={setCurrentScreen} />}
        {currentScreen === 'group' && <Screen5Group onNavigate={setCurrentScreen} />}
        {currentScreen === 'checkin' && <Screen6Checkin onNavigate={setCurrentScreen} />}
        {currentScreen === 'mycourses' && <Screen7MyCourses onNavigate={setCurrentScreen} />}
        {currentScreen === 'myschedule' && <ScreenMySchedule onNavigate={setCurrentScreen} />}
        {currentScreen === 'accommodation' && <Screen8Accommodation onNavigate={setCurrentScreen} />}
        {currentScreen === 'teacher' && <Screen9Teacher onNavigate={setCurrentScreen} />}
        {currentScreen === 'teachers' && <ScreenTeachers onNavigate={setCurrentScreen} />}
        {currentScreen === 'schedule' && <ScreenSchedule onNavigate={setCurrentScreen} />}
        {currentScreen === 'competition' && <Screen10Competition onNavigate={setCurrentScreen} />}
        {currentScreen === 'afterparty' && <Screen11AfterParty onNavigate={setCurrentScreen} />}
        {currentScreen === 'store' && <Screen12Store onNavigate={setCurrentScreen} />}
        {currentScreen === 'transportation' && <Screen13Transportation onNavigate={setCurrentScreen} />}
      </div>
    </>
  );
}
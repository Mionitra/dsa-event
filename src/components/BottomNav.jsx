import { useState } from 'react';
import FAQPage from '../pages/FAQPage';
import ReglementsPage from '../pages/ReglementsPage';
import DSAPage from '../pages/DSAPage';
import StaffRecruitmentPage from '../pages/StaffRecruitmentPage';

const COLORS = {
  yellow: '#FCD34D',
  blue: '#3B82F6',
  darkBlue: '#1E3A8A'
};

function BottomNav({ activeTab, setActiveTab }) {
  const navItems = [
    {
      id: 'faq',
      label: 'FAQ',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      id: 'dsa',
      label: 'DSA Site',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      id: 'reglements',
      label: 'Règlements',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'recrutement',
      label: 'Recrutement',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9.5" cy="7.5" r="3.5"></circle>
          <path d="M3.5 20c0-3.8 3-6.5 6.5-6.5"></path>
          <circle cx="17" cy="16.5" r="4.5"></circle>
          <line x1="20.5" y1="20" x2="22.5" y2="22"></line>
        </svg>
      )
    },
    
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 border-t shadow-2xl z-50 safe-area-pb"
      style={{
        backgroundColor: COLORS.darkBlue,
        borderTopColor: COLORS.blue
      }}
    >
      <div className="max-w-md mx-auto">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center justify-center flex-1 gap-1 transition-all duration-300 group relative"
            >
              <div
                className={`transition-all duration-300 ${
                  activeTab === item.id
                    ? 'scale-110 -translate-y-0.5'
                    : 'group-hover:scale-105'
                }`}
                style={{
                  color: activeTab === item.id ? COLORS.yellow : "#ffffff"
                }}
              >
                {item.icon}
              </div>
              <span
                className={`text-xs font-medium transition-all duration-300 ${
                  activeTab === item.id
                    ? 'opacity-100 font-semibold'
                    : 'opacity-80'
                }`}
                style={{
                  color: activeTab === item.id ? COLORS.yellow : "#ffffff"
                }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}


export default function App() {
  const [activeTab, setActiveTab] = useState('reglements');

  return (
    <div
      className="min-h-screen pb-20"
    >
      {/* Content area with bottom padding to prevent overlap with nav */}
      <div className="w-full mx-auto">
        {activeTab === 'reglements' && <ReglementsPage />}
        {activeTab === 'faq' && <FAQPage />}
        {activeTab === 'dsa' && <DSAPage />}
        {activeTab === 'recrutement' && <StaffRecruitmentPage />}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
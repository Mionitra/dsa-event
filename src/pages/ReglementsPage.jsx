import { useState } from 'react';
import { Rocket, GraduationCap, Monitor, FileText, X, BookOpen, Users, Handshake, Scale, Info, Mail, Target, Trophy, Zap, Cpu } from 'lucide-react';
import InputUrl from '../components/InputUrl';

const COLORS = {
  yellow: '#FCD34D',
  blue: '#3B82F6',
  darkBlue: '#1E3A8A'
};

export default function ReglementsPage() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
    >

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeIn">
          <div className="inline-block mb-4 sm:mb-6">
            <Rocket
              size={60}
              className="sm:w-20 sm:h-20 animate-bounce mx-auto"
              style={{ 
                color: COLORS.yellow,
                animationDuration: '2s'
              }}
            />
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight tracking-tight px-4"
            style={{
              background: `linear-gradient(135deg, ${COLORS.yellow} 0%, ${COLORS.blue} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Hackathon<br />Algorithmique
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4">
            <div
              className="h-0.5 sm:h-1 w-8 sm:w-12 md:w-16 rounded-full"
              style={{ backgroundColor: COLORS.yellow }}
            />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
              8 Mai à l'INSI
            </p>
            <div
              className="h-0.5 sm:h-1 w-8 sm:w-12 md:w-16 rounded-full"
              style={{ backgroundColor: COLORS.yellow }}
            />
          </div>
          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 backdrop-blur-sm text-sm sm:text-base"
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderColor: COLORS.blue
            }}
          >
            <span className="text-white font-semibold">DSA-INSI</span>
            <span className="text-white/60">×</span>
            <span className="text-white font-semibold">AlgoMada</span>
          </div>
        </div>

        {/* Description */}
        <div
          className="rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 mb-10 sm:mb-12 backdrop-blur-sm border-2 transform hover:scale-[1.02] transition-all duration-300"
          style={{
            backgroundColor: 'rgba(59, 130, 246, 0.05)',
            borderColor: COLORS.blue
          }}
        >
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed text-center mb-4 sm:mb-6">
            Une journée intense de réflexion, de logique et de compétition pour tous les passionnés d'algorithmique et de programmation.
          </p>
          <InputUrl url="https://docs.google.com/forms/d/e/1FAIpQLSeJD5DpgoMGYZYip_76_Y6AtmDZAT0wsRifnHGAyMwEUSWZ1Q/viewform?usp=dialog" title="URL du formulaire d'inscription"/>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {[
              { icon: <Info size={18} className="sm:w-5 sm:h-5" />, text: 'Réflexion' },
              { icon: <Target size={18} className="sm:w-5 sm:h-5" style={{ color: COLORS.yellow }} />, text: 'Logique' },
              { icon: <Trophy size={18} className="sm:w-5 sm:h-5" />, text: 'Compétition' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                style={{
                  backgroundColor: 'rgba(252, 211, 77, 0.1)',
                  borderColor: COLORS.yellow
                }}
              >
                <span style={{ color: COLORS.yellow }}>{item.icon}</span>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            Préparez vos cerveaux.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            Formez vos équipes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-black" style={{ color: COLORS.yellow }}>
              Relevez le défi.
            </p>
            <div className="flex gap-2">
              <Cpu size={28} className="sm:w-9 sm:h-9" style={{ color: COLORS.yellow }} />
              <Zap size={28} className="sm:w-9 sm:h-9" style={{ color: COLORS.blue }} />
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4">
            <Trophy size={36} className="sm:w-12 sm:h-12" style={{ color: COLORS.yellow }} />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-center"
              style={{ color: COLORS.yellow }}
            >
              Les Catégories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* School Category */}
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden border-2 transform hover:scale-105 lg:hover:rotate-1 transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: COLORS.blue
              }}
              onClick={() => setActiveSection(activeSection === 'school' ? null : 'school')}
            >
              <div
                className="p-5 sm:p-6 border-b-2"
                style={{
                  backgroundColor: COLORS.blue,
                  borderColor: COLORS.yellow
                }}
              >
                <GraduationCap size={40} className="sm:w-12 sm:h-12 mb-2 text-white" />
                <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                  Niveau #School
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">Pour les débutants</p>
              </div>
              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: COLORS.yellow }}
                  />
                  <p className="text-white text-sm sm:text-base">
                    Équipe composée <strong className="font-bold" style={{ color: COLORS.yellow }}>uniquement d'étudiants en L1</strong>
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: COLORS.yellow }}
                  />
                  <p className="text-white text-sm sm:text-base">
                    <strong className="font-bold" style={{ color: COLORS.yellow }}>5 personnes obligatoirement</strong>
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: COLORS.yellow }}
                  />
                  <p className="text-white text-sm sm:text-base">
                    Idéal pour débuter dans la compétition algorithmique
                  </p>
                </div>
              </div>
            </div>

            {/* Classic Category */}
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden border-2 transform hover:scale-105 lg:hover:-rotate-1 transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: 'rgba(252, 211, 77, 0.1)',
                borderColor: COLORS.yellow
              }}
              onClick={() => setActiveSection(activeSection === 'classic' ? null : 'classic')}
            >
              <div
                className="p-5 sm:p-6 border-b-2"
                style={{
                  backgroundColor: COLORS.yellow,
                  borderColor: COLORS.blue
                }}
              >
                <Monitor size={40} className="sm:w-12 sm:h-12 mb-2" style={{ color: COLORS.darkBlue }} />
                <h3
                  className="text-xl sm:text-2xl font-black mb-1"
                  style={{ color: COLORS.darkBlue }}
                >
                  Niveau #Classic
                </h3>
                <p className="text-xs sm:text-sm" style={{ color: COLORS.darkBlue, opacity: 0.8 }}>
                  Pour les compétiteurs
                </p>
              </div>
              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: COLORS.blue }}
                  />
                  <p className="text-white text-sm sm:text-base">
                    Équipe de <strong className="font-bold" style={{ color: COLORS.yellow }}>2 à 3 personnes</strong>
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: COLORS.blue }}
                  />
                  <p className="text-white text-sm sm:text-base">
                    <strong className="font-bold" style={{ color: COLORS.yellow }}>Tous niveaux confondus</strong>
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: COLORS.blue }}
                  />
                  <p className="text-white text-sm sm:text-base">
                    Niveau plus compétitif et stratégique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rules Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4">
            <FileText size={36} className="sm:w-12 sm:h-12" style={{ color: COLORS.yellow }} />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-center"
              style={{ color: COLORS.yellow }}
            >
              Règlement Officiel
            </h2>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {[
              { icon: <X size={24} className="sm:w-7 sm:h-7" />, text: 'Les LLMs (ChatGPT, Copilot, Gemini, etc.) sont strictement interdits', highlight: 'strictement interdits' },
              { icon: <BookOpen size={24} className="sm:w-7 sm:h-7" />, text: 'Documentation autorisée (papier ou numérique)', highlight: 'autorisée' },
              { icon: <Users size={24} className="sm:w-7 sm:h-7" />, text: 'Respect strict de la composition des équipes', highlight: 'strict' },
              { icon: <Handshake size={24} className="sm:w-7 sm:h-7" />, text: 'Aucun échange d\'informations entre équipes', highlight: 'Aucun échange' },
              { icon: <Scale size={24} className="sm:w-7 sm:h-7" />, text: 'Toute tentative de triche = disqualification immédiate', highlight: 'disqualification immédiate' }
            ].map((rule, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border-2 backdrop-blur-sm transform hover:translate-x-1 sm:hover:translate-x-2 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  borderColor: idx === 0 || idx === 4 ? '#EF4444' : COLORS.blue
                }}
              >
                <div className="flex-shrink-0" style={{ color: idx === 0 || idx === 4 ? '#EF4444' : COLORS.blue }}>
                  {rule.icon}
                </div>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                  {rule.text.split(rule.highlight).map((part, i, arr) => (
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <strong className="font-black" style={{ color: COLORS.yellow }}>
                          {rule.highlight}
                        </strong>
                      </span>
                    ) : part
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div
          className="rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border-2 backdrop-blur-sm relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(252, 211, 77, 0.1)',
            borderColor: COLORS.yellow
          }}
        >
          <div className="absolute top-0 right-0 opacity-10 hidden sm:block">
            <Info size={100} className="sm:w-28 sm:h-28 lg:w-32 lg:h-32" style={{ color: COLORS.yellow }} />
          </div>
          <div className="relative z-10">
            <h2
              className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3"
              style={{ color: COLORS.yellow }}
            >
              <Info size={28} className="sm:w-9 sm:h-9" />
              Important
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-4">
              Des modifications ou précisions peuvent être apportées au règlement si nécessaire.
            </p>
            <div
              className="p-4 sm:p-5 rounded-lg border-2"
              style={{
                backgroundColor: COLORS.darkBlue,
                borderColor: COLORS.blue
              }}
            >
              <p className="text-white font-semibold mb-2 flex items-start sm:items-center gap-2 text-sm sm:text-base">
                <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-0" style={{ color: COLORS.yellow }} />
                <span>Elles seront communiquées <span style={{ color: COLORS.yellow }}>uniquement par email</span> aux participants inscrits.</span>
              </p>
              <p className="text-white/80 text-sm sm:text-base">
                Merci de fournir une adresse valide lors de l'inscription.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
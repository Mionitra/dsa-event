import { useState } from 'react';
import { Server, FileCode, Upload, CheckCircle, XCircle, Trophy, BarChart3, Clock, Zap, Code2, Play, Eye, Award, Users, TrendingUp } from 'lucide-react';
import InputUrl from '../components/InputUrl';

const COLORS = {
  yellow: '#FCD34D',
  blue: '#3B82F6',
  darkBlue: '#1E3A8A'
};

export default function DSAPage() {
  const [activeStep, setActiveStep] = useState(null);

  const features = [
    { icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Consulter les énoncés des problèmes' },
    { icon: <Upload className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Soumettre votre code directement en ligne' },
    { icon: <Play className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Tester automatiquement vos solutions' },
    { icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Recevoir une correction instantanée (accepte ou rejette selon les tests)' },
    { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Obtenir des points d\'expérience en fonction de vos performances' },
    { icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Voir le classement en temps réel' },
    { icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Suivre l\'évolution de votre équipe tout au long de la compétition' }
  ];

  const steps = [
    { 
      number: '01', 
      icon: <FileCode className="w-6 h-6 sm:w-8 sm:h-8" />, 
      title: 'Réception des problèmes',
      description: 'Les équipes reçoivent les problèmes à résoudre sur la plateforme.',
      color: COLORS.blue
    },
    { 
      number: '02', 
      icon: <Upload className="w-6 h-6 sm:w-8 sm:h-8" />, 
      title: 'Soumission des solutions',
      description: 'Les équipes soumettent leurs solutions.',
      color: COLORS.yellow
    },
    { 
      number: '03', 
      icon: <Play className="w-6 h-6 sm:w-8 sm:h-8" />, 
      title: 'Exécution automatique',
      description: 'La plateforme exécute automatiquement les tests cachés.',
      color: COLORS.blue
    },
    { 
      number: '04', 
      icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />, 
      title: 'Attribution des points',
      description: 'Si la solution est correcte, des points sont attribués.',
      color: COLORS.yellow
    },
    { 
      number: '05', 
      icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />, 
      title: 'Mise à jour du classement',
      description: 'Le classement se met à jour automatiquement.',
      color: COLORS.blue
    }
  ];

  const reasons = [
    { icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />, text: 'faire de la programmation compétitive' },
    { icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />, text: 'gérer facilement les soumissions' },
    { icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />, text: 'suivre l\'évolution des équipes' },
    { icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />, text: 'offrir une expérience similaire à un vrai concours' }
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            backgroundColor: COLORS.blue,
            top: '-10%',
            right: '-10%',
            animationDuration: '4s'
          }}
        />
        <div
          className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{
            backgroundColor: COLORS.yellow,
            bottom: '10%',
            left: '-5%',
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        />
        <div
          className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{
            backgroundColor: COLORS.blue,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animationDuration: '5s',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeIn">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="relative">
              <Server
                size={64}
                className="sm:w-20 sm:h-20 mx-auto"
                style={{ color: COLORS.yellow }}
              />
              <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full"></div>
            </div>
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
            Plateforme DSA
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto px-4 mb-6 sm:mb-8">
            L'outil en ligne du club DSA-INSI pour les compétitions d'algorithmique
          </p>
            <InputUrl url="https://dsa-kohl-one.vercel.app/" title="URL de la plateforme DSA"/>
          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 backdrop-blur-sm text-sm sm:text-base"
            style={{
              backgroundColor: 'rgba(252, 211, 77, 0.1)',
              borderColor: COLORS.yellow
            }}
          >
            <Zap size={18} className="sm:w-5 sm:h-5" style={{ color: COLORS.yellow }} />
            <span className="text-white font-semibold">Conditions réelles de concours</span>
          </div>
        </div>

        {/* What is DSA */}
        <div
          className="rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 mb-10 sm:mb-12 lg:mb-16 backdrop-blur-sm border-2 transform hover:scale-[1.02] transition-all duration-300"
          style={{
            backgroundColor: 'rgba(59, 130, 246, 0.05)',
            borderColor: COLORS.blue
          }}
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div
              className="p-2 sm:p-3 rounded-xl flex-shrink-0"
              style={{ backgroundColor: COLORS.blue }}
            >
              <Server className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3" style={{ color: COLORS.yellow }}>
                C'est quoi la plateforme DSA ?
              </h2>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-4">
            La plateforme DSA est un outil en ligne utilisé par le club DSA-INSI pour organiser des compétitions d'algorithmique et des séances d'entraînement.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
            Elle permet de simuler des conditions réelles de concours, comme celles que l'on retrouve dans les <strong style={{ color: COLORS.yellow }}>compétitions internationales</strong>.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 px-4">
            <div
              className="p-2 sm:p-3 rounded-xl"
              style={{ backgroundColor: COLORS.yellow }}
            >
              <Zap className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: COLORS.darkBlue }} />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black"
              style={{ color: COLORS.yellow }}
            >
              À quoi sert-elle concrètement ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border-2 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  borderColor: idx % 2 === 0 ? COLORS.blue : COLORS.yellow
                }}
              >
                <div
                  className="p-2 sm:p-2.5 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    backgroundColor: idx % 2 === 0 ? COLORS.blue : COLORS.yellow,
                    color: idx % 2 === 0 ? 'white' : COLORS.darkBlue
                  }}
                >
                  {feature.icon}
                </div>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed pt-1">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 px-4">
            <div
              className="p-2 sm:p-3 rounded-xl"
              style={{ backgroundColor: COLORS.blue }}
            >
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black"
              style={{ color: COLORS.yellow }}
            >
              Fonctionnement pendant la compétition
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div
                  className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border-2 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: activeStep === idx ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                    borderColor: step.color
                  }}
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-xl sm:text-2xl relative overflow-hidden"
                      style={{ 
                        backgroundColor: step.color,
                        color: idx % 2 === 0 ? 'white' : COLORS.darkBlue
                      }}
                    >
                      {step.number}
                      <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div style={{ color: step.color }}>
                        {step.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute left-8 top-full w-0.5 h-6 ml-6"
                    style={{
                      backgroundColor: COLORS.blue,
                      opacity: 0.3
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why DSA */}
        <div
          className="rounded-xl sm:rounded-2xl overflow-hidden border-2 backdrop-blur-sm"
          style={{
            backgroundColor: 'rgba(252, 211, 77, 0.1)',
            borderColor: COLORS.yellow
          }}
        >
          <div
            className="p-6 sm:p-8 border-b-2"
            style={{
              backgroundColor: COLORS.yellow,
              borderColor: COLORS.blue
            }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" style={{ color: COLORS.darkBlue }} />
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-black"
                style={{ color: COLORS.darkBlue }}
              >
                Pourquoi on utilise DSA ?
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
              Parce que c'est l'outil le plus adapté pour :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border-2 transform hover:scale-105 transition-all duration-300"
                  style={{
                    backgroundColor: COLORS.darkBlue,
                    borderColor: COLORS.blue
                  }}
                >
                  <div
                    className="p-2 sm:p-2.5 rounded-lg flex-shrink-0 group-hover:rotate-12 transition-transform duration-300"
                    style={{ backgroundColor: COLORS.yellow }}
                  >
                    <div style={{ color: COLORS.darkBlue }}>
                      {reason.icon}
                    </div>
                  </div>
                  <p className="text-white text-sm sm:text-base md:text-lg font-medium">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <div
            className="inline-block p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2"
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderColor: COLORS.blue
            }}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: COLORS.yellow }} />
              <p className="text-xl sm:text-2xl md:text-3xl font-black" style={{ color: COLORS.yellow }}>
                Prêt à relever le défi ?
              </p>
            </div>
            <p className="text-base sm:text-lg text-white/80">
              La plateforme DSA vous attend le 8 Mai !
            </p>
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
      `}</style>
    </div>
  );
}
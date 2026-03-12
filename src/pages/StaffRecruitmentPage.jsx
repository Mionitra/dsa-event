import { useState } from 'react';
import { FileText, Package, DollarSign, Megaphone, Target, Sparkles, Users, TrendingUp, Award, Briefcase, Heart, Phone, Mail, Send } from 'lucide-react';

const COLORS = {
  yellow: '#FCD34D',
  blue: '#3B82F6',
  darkBlue: '#1E3A8A'
};

export default function StaffRecruitmentPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const roles = [
    {
      id: 'secretaire',
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Secrétaire',
      color: COLORS.blue,
      tasks: [
        'Rédige les comptes rendus des réunions',
        'Gère les documents du club (archives, listes de membres)',
        'S\'occupe des communications internes (convocations, infos aux membres)',
        'Organise le planning des réunions'
      ]
    },
    {
      id: 'logistique',
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Logistique',
      color: COLORS.yellow,
      tasks: [
        'S\'occupe du matériel (ordinateurs, projecteurs, salles, etc.)',
        'Prépare les lieux des événements',
        'Vérifie que tout le matériel nécessaire est disponible',
        'Coordonne l\'installation et le rangement'
      ]
    },
    {
      id: 'tresorier',
      icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Trésorier',
      color: COLORS.blue,
      tasks: [
        'Gère l\'argent du club',
        'Fait le budget des activités',
        'Suit les dépenses et les entrées d\'argent',
        'Présente le bilan financier'
      ]
    },
    {
      id: 'communication',
      icon: <Megaphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Communication',
      color: COLORS.yellow,
      tasks: [
        'Gère les réseaux sociaux et annonces',
        'Fait les affiches et publications',
        'Informe les étudiants ou le public des événements du club',
        'Travaille sur la visibilité du club'
      ]
    },
    {
      id: 'activite',
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Activité',
      color: COLORS.blue,
      tasks: [
        'Propose et organise les activités du club (ateliers, concours, événements)',
        'Planifie le programme des événements',
        'Coordonne les membres pendant les activités'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Développement personnel',
      color: COLORS.yellow,
      items: [
        'Développer des compétences en leadership et organisation',
        'Améliorer la communication et le travail en équipe',
        'Apprendre à gérer des projets et des responsabilités'
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Expérience pratique',
      color: COLORS.blue,
      items: [
        'Mettre en pratique ce qu\'on apprend en cours ou en programmation',
        'Apprendre à organiser des événements ou compétitions'
      ]
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Réseau',
      color: COLORS.yellow,
      items: [
        'Rencontrer des étudiants motivés avec les mêmes intérêts',
        'Se créer un réseau utile pour les projets ou le futur travail'
      ]
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Valorisation du CV',
      color: COLORS.blue,
      items: [
        'Avoir une expérience associative à mettre dans le CV',
        'Montrer qu\'on sait prendre des initiatives et gérer des responsabilités'
      ]
    },
    {
      icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Expérience et opportunités',
      color: COLORS.yellow,
      items: [
        'Participer à des projets intéressants',
        'Accéder plus facilement à certains événements, formations ou collaborations'
      ]
    }
  ];

  const conditions = [
    { icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Motivation et engagement' },
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Esprit d\'équipe' },
    { icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Disponibilité' },
    { icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Intérêt pour le domaine du club' },
    { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Sens des responsabilités' }
  ];

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+261 38 70 922 91');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
    >

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeIn">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="relative">
              <Users
                size={64}
                className="sm:w-20 sm:h-20 mx-auto "
                style={{ color: COLORS.yellow, animationDuration: '2s' }}
              />
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
            Rejoins le Staff<br />DSA-INSI
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto px-4 mb-6 sm:mb-8">
            Deviens membre du staff et contribue à faire vivre le club !
          </p>

          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 backdrop-blur-sm text-sm sm:text-base"
            style={{
              backgroundColor: 'rgba(252, 211, 77, 0.1)',
              borderColor: COLORS.yellow
            }}
          >
            <Sparkles size={18} className="sm:w-5 sm:h-5" style={{ color: COLORS.yellow }} />
            <span className="text-white font-semibold">Candidatures ouvertes</span>
          </div>
        </div>

        {/* Roles Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 px-4">
            <div
              className="p-2 sm:p-3 rounded-xl"
              style={{ backgroundColor: COLORS.yellow }}
            >
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: COLORS.darkBlue }} />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black"
              style={{ color: COLORS.yellow }}
            >
              Postes disponibles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {roles.map((role, idx) => (
              <div
                key={role.id}
                className="group rounded-xl sm:rounded-2xl overflow-hidden border-2 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: selectedRole === role.id ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.05)',
                  borderColor: role.color
                }}
                onClick={() => setSelectedRole(selectedRole === role.id ? null : role.id)}
              >
                <div
                  className="p-5 sm:p-6 border-b-2 flex items-center gap-3 sm:gap-4"
                  style={{
                    backgroundColor: role.color,
                    borderColor: role.color === COLORS.yellow ? COLORS.blue : COLORS.yellow
                  }}
                >
                  <div style={{ color: role.color === COLORS.yellow ? COLORS.darkBlue : 'white' }}>
                    {role.icon}
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-black"
                    style={{ color: role.color === COLORS.yellow ? COLORS.darkBlue : 'white' }}
                  >
                    {role.title}
                  </h3>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  {role.tasks.map((task, taskIdx) => (
                    <div key={taskIdx} className="flex items-start gap-2 sm:gap-3">
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: role.color }}
                      />
                      <p className="text-white text-sm sm:text-base leading-relaxed">
                        {task}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 px-4">
            <div
              className="p-2 sm:p-3 rounded-xl"
              style={{ backgroundColor: COLORS.blue }}
            >
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black"
              style={{ color: COLORS.yellow }}
            >
              Pourquoi nous rejoindre ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border-2 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  borderColor: benefit.color
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div
                    className="p-2 sm:p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: benefit.color }}
                  >
                    <div style={{ color: benefit.color === COLORS.yellow ? COLORS.darkBlue : 'white' }}>
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black" style={{ color: benefit.color }}>
                    {benefit.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {benefit.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2 sm:gap-3">
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: benefit.color }}
                      />
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conditions Section */}
        <div
          className="rounded-xl sm:rounded-2xl overflow-hidden border-2 backdrop-blur-sm mb-12 sm:mb-16"
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
              <Award className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: COLORS.darkBlue }} />
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-black"
                style={{ color: COLORS.darkBlue }}
              >
                Conditions requises
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {conditions.map((condition, idx) => (
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
                      {condition.icon}
                    </div>
                  </div>
                  <p className="text-white text-sm sm:text-base font-medium">
                    {condition.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div
            className="inline-block p-8 sm:p-10 lg:p-12 rounded-2xl border-2 backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderColor: COLORS.blue
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: COLORS.yellow }} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black" style={{ color: COLORS.yellow }}>
                Prêt à postuler ?
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
              Contactez-nous sur WhatsApp pour plus d'informations ou pour candidater
            </p>

            <div className="space-y-4">
              <button
                onClick={handleCopyPhone}
                className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
                style={{
                  backgroundColor: COLORS.yellow,
                  color: COLORS.darkBlue
                }}
              >
                <Phone className="w-6 h-6" />
                <span>{copiedPhone ? 'Numéro copié !' : '+261 38 70 922 91'}</span>
                
              </button>

              <p className="text-sm sm:text-base text-white/60">
                Cliquez pour copier le numéro
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
      `}</style>
    </div>
  );
}
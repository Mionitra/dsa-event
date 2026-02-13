import React, { useState } from 'react';
import { ChevronDown, Code, Users, Trophy, Clock, Zap, Target, Sparkles } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      icon: <Code className="w-5 h-5" />,
      question: "Comment se déroule l'entraînement ?",
      answer: (
        <div className="space-y-4">
          <p className="text-slate-200">L'entraînement se fait :</p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">▸</span>
              <span>soit sur la <strong className="text-white">plateforme DSA</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">▸</span>
              <span>soit lors d'un <strong className="text-white">regroupement général chaque vendredi pendant la séance de DSA</strong></span>
            </li>
          </ul>
          <p className="text-slate-200 pt-2">Ces séances permettent de :</p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>pratiquer des problèmes types compétition</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>apprendre les techniques classiques (DP, graphes, greedy, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>travailler en équipe</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      icon: <Target className="w-5 h-5" />,
      question: "Qui prépare les sujets ?",
      answer: (
        <p>La <strong className="text-white">thématique et les sujets sont entièrement préparés par AlgoMada</strong>.</p>
      )
    },
    {
      icon: <Users className="w-5 h-5" />,
      question: "C'est qui AlgoMada ?",
      answer: (
        <div className="space-y-4">
          <p className="text-slate-200"><strong className="text-white">AlgoMada</strong> est une association de programmation compétitive dédiée à la création d'une communauté de passionnés de résolution de problèmes.</p>
          <p className="text-slate-200">Elle organise :</p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>des concours de codage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>des webinaires</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>des événements de networking</span>
            </li>
          </ul>
          <p className="text-slate-200 pt-2">Son objectif est d'aider les participants à développer :</p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>leur pensée algorithmique</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>leurs compétences en programmation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>leur esprit compétitif</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      question: "Est-ce obligatoire de participer ?",
      answer: (
        <div className="space-y-3">
          <p className="text-slate-200">Oui… 😌</p>
          <p className="text-slate-200">Mais bon, on ne va pas vous en vouloir si vous estimez que votre logique préfère rester en vacances.</p>
          <p className="text-slate-200">Plus sérieusement : ce n'est pas obligatoire, mais c'est <strong className="text-amber-400">fortement recommandé</strong> si vous voulez progresser rapidement.</p>
        </div>
      )
    },
    {
      icon: <Zap className="w-5 h-5" />,
      question: "Pourquoi organiser un hackathon algorithmique ?",
      answer: (
        <div className="space-y-4">
          <p className="text-slate-200">Parce que l'algorithmique :</p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>développe la logique</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>améliore la capacité de résolution de problèmes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>prépare aux concours et aux entretiens techniques</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>renforce l'esprit d'équipe</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>pousse à sortir de sa zone de confort</span>
            </li>
          </ul>
          <p className="text-slate-200 pt-2">C'est aussi une excellente occasion de se mesurer à d'autres étudiants motivés.</p>
        </div>
      )
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      question: "Quelle est la différence entre School et Classic ?",
      answer: (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-cyan-500/30">
                <th className="text-left py-3 px-4 text-amber-400 font-semibold">School</th>
                <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Classic</th>
              </tr>
            </thead>
            <tbody className="text-slate-200">
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4">Uniquement L1</td>
                <td className="py-3 px-4">Tous niveaux</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4">5 personnes</td>
                <td className="py-3 px-4">2 à 3 personnes</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4">Niveau introductif</td>
                <td className="py-3 px-4">Niveau plus avancé</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Esprit découverte</td>
                <td className="py-3 px-4">Esprit compétition intense</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      icon: <Code className="w-5 h-5" />,
      question: "Quel langage de programmation est autorisé ?",
      answer: (
        <div className="space-y-3">
          <p className="text-slate-200">Tous les langages standards de compétition sont acceptés (C, C++, Java, Python, etc.).</p>
          <p className="text-slate-200">Les détails techniques seront communiqués aux inscrits.</p>
        </div>
      )
    },
    {
      icon: <Zap className="w-5 h-5" />,
      question: "Peut-on utiliser Internet ?",
      answer: (
        <div className="space-y-3">
          <p className="text-green-400">✓ Oui, pour la documentation uniquement.</p>
          <p className="text-red-400">✗ Non, pour les assistants IA ou la communication externe.</p>
        </div>
      )
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      question: "Y aura-t-il un classement ?",
      answer: (
        <div className="space-y-4">
          <p className="text-slate-200">Oui. Un classement sera établi par catégorie.</p>
          <p className="text-slate-200">Le classement se fera :</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <span>Selon le nombre de points d'expérience obtenus.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">⏱️</span>
              <span>En cas d'égalité de points, les équipes seront départagées selon le temps de soumission (l'équipe ayant résolu les problèmes le plus rapidement sera mieux classée).</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      icon: <Code className="w-5 h-5" />,
      question: "Quelle plateforme sera utilisée pour la compétition ?",
      answer: (
        <p className="text-slate-200">La compétition se déroulera sur la <strong className="text-white">plateforme DSA</strong>.</p>
      )
    },
    {
      icon: <Zap className="w-5 h-5" />,
      question: "C'est quoi la plateforme DSA ?",
      answer: (
        <div className="space-y-4">
          <p className="text-slate-200">La plateforme DSA est l'environnement officiel utilisé par le club DSA-INSI pour :</p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>s'entraîner en algorithmique</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>résoudre des problèmes de programmation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>participer à des mini-compétitions internes</span>
            </li>
          </ul>
          <p className="text-slate-200 pt-2">Elle permet :</p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>la soumission automatique du code</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>la correction instantanée</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>l'attribution de points</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>le suivi du classement en temps réel</span>
            </li>
          </ul>
          <p className="text-slate-200 pt-2">C'est donc un outil spécialement conçu pour vous mettre dans les conditions réelles d'une compétition algorithmique. 💻⚡</p>
        </div>
      )
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      question: "Y aura-t-il des récompenses ?",
      answer: (
        <div className="space-y-3">
          <p className="text-3xl">👀</p>
          <p className="text-amber-400 font-semibold text-lg">Surprise…</p>
          <p className="text-slate-200">Les détails seront annoncés prochainement.</p>
        </div>
      )
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      question: "Faut-il être un expert pour participer ?",
      answer: (
        <div className="space-y-3">
          <p className="text-slate-200 text-lg"><strong className="text-white">Absolument pas.</strong></p>
          <p className="text-slate-200">Le niveau <span className="text-amber-400 font-semibold">#School</span> est justement là pour permettre aux débutants motivés de découvrir la compétition.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30">
              <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
              <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Questions Fréquentes</span>
            </div>
          </div>
          <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
            FAQ
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Toutes les réponses à vos questions sur le hackathon algorithmique
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-slate-800/30 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`p-2 rounded-lg transition-colors ${
                    openIndex === index 
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white' 
                      : 'bg-slate-800 text-cyan-400 group-hover:bg-slate-700'
                  }`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-14 text-slate-300 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-amber-500/10 backdrop-blur-sm px-8 py-6 rounded-2xl border border-cyan-500/30">
            <p className="text-slate-200 text-lg mb-4">
              D'autres questions ? 
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
              Contactez les membres du staff
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
import Link from 'next/link';
import { ArrowRight, Brain, BarChart3, Zap, Star, Users, Shield, CheckCircle } from 'lucide-react';

const FEATURES = [
  {
    icon: Brain,
    title: 'AI-Personalized Story Books',
    description: 'Generate unique Montessori-aligned books in seconds, tailored to your child\'s name, age, and favorite topics.',
  },
  {
    icon: BarChart3,
    title: 'Track Learning Milestones',
    description: 'See exactly which skills your child is developing — literacy, numeracy, and life skills — all in one dashboard.',
  },
  {
    icon: Zap,
    title: 'Hands-On Activity Guides',
    description: 'Every book comes with printable Montessori activities so learning leaps off the page and into real life.',
  },
  {
    icon: Star,
    title: 'Reading Streaks & Rewards',
    description: 'Keep kids motivated with daily reading streaks and achievement badges that celebrate every milestone.',
  },
  {
    icon: Users,
    title: 'Multi-Child Profiles',
    description: 'Manage up to 5 children from one account, each with their own personalized library and progress tracker.',
  },
  {
    icon: Shield,
    title: 'Safe & Ad-Free Experience',
    description: 'A completely child-safe environment with no ads, no distractions — just pure, joyful learning.',
  },
];

const PRICING_TIERS = [
  {
    "name": "Free",
    "price": "Free",
    "features": [
      "1 child profile",
      "3 AI-generated books/month",
      "Basic progress tracking",
      "Printable activities"
    ],
    "description": "Try MontessoriMagic with one child"
  },
  {
    "name": "Family",
    "price": "$12/mo",
    "features": [
      "Up to 3 child profiles",
      "20 AI-generated books/month",
      "Full milestone tracking",
      "Audio narration",
      "Priority book generation",
      "Email progress reports"
    ],
    "description": "Perfect for growing families"
  },
  {
    "name": "Unlimited",
    "price": "$24/mo",
    "features": [
      "Up to 5 child profiles",
      "Unlimited AI-generated books",
      "Advanced learning analytics",
      "Custom book themes",
      "Early access to new features",
      "Dedicated support"
    ],
    "description": "For families who love to read every day"
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-slate-100 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="font-bold text-xl text-slate-900">MontessoriMagic</span>
        <div className="flex items-center gap-4">
          <Link href="/sign-up" className="text-sm font-semibold text-slate-600 hover:text-slate-900">Sign in</Link>
          <Link href="/sign-up" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-4 text-center bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Personalized Montessori learning adventures for every child
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            MontessoriMagic creates AI-powered, adaptive learning books tailored to your child's age, interests, and developmental stage. Parents track progress and watch their kids fall in love with learning through beautifully crafted Montessori-inspired stories and activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-base"
            >
              Get started free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Everything you need</h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
            MontessoriMagic gives you all the tools to build and scale your product.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      {/* Pricing */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Simple, transparent pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier, i) => (
              <div key={tier.name} className={`bg-white border rounded-2xl p-6 ${i === 1 ? 'border-indigo-600 shadow-lg ring-1 ring-indigo-600' : 'border-slate-200'}`}>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{tier.name}</h3>
                <p className="text-3xl font-extrabold text-slate-900 mb-2">{tier.price}</p>
                <p className="text-slate-500 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sign-up"
                  className={`block text-center font-semibold py-2.5 px-4 rounded-lg transition-colors ${i === 1 ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-indigo-600">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-indigo-200 mb-8">Join thousands of users already using MontessoriMagic.</p>
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Start for free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} MontessoriMagic. All rights reserved.</p>
          <a
            href="https://skylia.dev/built-with/7f7b74b1-825c-4b23-bf25-a4bc49736688"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors group"
          >
            Built with{' '}
            <span className="font-semibold text-indigo-500 group-hover:text-indigo-700 transition-colors">
              Skylia
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}

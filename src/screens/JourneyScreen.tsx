import { ChevronDown, Award, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface Milestone {
  day: number;
  title: string;
  description: string;
  unlocked: boolean;
  reward?: string;
}

export function JourneyScreen() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const milestones: Milestone[] = [
    { day: 3, title: '72-Hour Victory', description: 'First 3 days complete', unlocked: true, reward: 'Badge unlocked' },
    { day: 7, title: 'One Week Warrior', description: 'You\'ve made it a full week!', unlocked: true, reward: 'Avatar skin' },
    { day: 14, title: 'Two Weeks Strong', description: 'Halfway through month 1', unlocked: true, reward: '100 XP bonus' },
    { day: 30, title: 'One Month Free', description: 'You\'ve quit for a full month!', unlocked: true, reward: 'Special badge' },
    { day: 60, title: '60-Day Champion', description: 'Two months down!', unlocked: false, reward: 'Exclusive theme' },
    { day: 90, title: '3-Month Milestone', description: 'Quarter year cigarette-free!', unlocked: false, reward: 'Trophy' },
    { day: 180, title: 'Half Year', description: 'Six months of freedom', unlocked: false, reward: 'Title change' },
    { day: 365, title: 'One Year Victory', description: 'A full year smoke-free!', unlocked: false, reward: 'Platinum medal' },
  ];

  return (
    <div className="pb-24 pt-6 px-4 max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Journey</h1>
        <p className="text-slate-600">Day 30 of 365 - You're 8% there!</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="text-center mb-4">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">30</div>
              <div className="text-sm text-white/90">days</div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">You're Smoke-Free!</h2>
          <p className="text-slate-600 mt-2">Money saved: $150 • Cigarettes not smoked: 600</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">$150</div>
            <p className="text-xs text-slate-600 mt-1">Saved</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">600</div>
            <p className="text-xs text-slate-600 mt-1">Avoided</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">10h</div>
            <p className="text-xs text-slate-600 mt-1">Time gained</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
          <Award size={20} className="text-yellow-500" />
          Milestones
        </h3>
        <div className="space-y-3">
          {milestones.map((milestone) => (
            <div
              key={milestone.day}
              className={`rounded-lg border transition ${
                milestone.unlocked
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <button
                onClick={() => setExpandedDay(expandedDay === milestone.day ? null : milestone.day)}
                className="w-full p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    milestone.unlocked
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-500'
                      : 'bg-slate-300'
                  }`}>
                    <span className="text-sm font-bold text-white">{milestone.day}</span>
                  </div>
                  <div className="text-left">
                    <p className={`font-semibold ${milestone.unlocked ? 'text-green-700' : 'text-slate-700'}`}>
                      {milestone.title}
                    </p>
                    <p className="text-sm text-slate-600">{milestone.description}</p>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-slate-600 transition ${expandedDay === milestone.day ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedDay === milestone.day && (
                <div className="px-4 pb-4 pt-0 border-t border-current border-opacity-10">
                  <p className="text-sm text-slate-700 mb-3">{milestone.reward}</p>
                  {milestone.unlocked && (
                    <button className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium text-sm hover:shadow-md transition">
                      Claim Reward
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl text-white p-6 text-center">
        <TrendingUp className="mx-auto mb-2" size={32} />
        <h3 className="font-bold text-lg mb-2">Keep Going!</h3>
        <p className="text-sm opacity-90">Your next big milestone is Day 60. You're on track!</p>
      </div>
    </div>
  );
}

import { AlertCircle, Bell } from 'lucide-react';
import { StreakWidget } from '../components/StreakWidget';
import { XPBar } from '../components/XPBar';
import { DailyMissions } from '../components/DailyMissions';

interface HomeScreenProps {
  onSOS: () => void;
}

export function HomeScreen({ onSOS }: HomeScreenProps) {
  const userLevel = 5;
  const currentXP = 340;
  const xpToNextLevel = 500;
  const currentStreak = 12;
  const longestStreak = 28;

  return (
    <div className="pb-24 pt-6 px-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-slate-600">Day 12 of Your Journey</p>
        </div>
        <button className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition relative">
          <Bell size={20} className="text-slate-700" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>

      <button
        onClick={onSOS}
        className="w-full mb-6 p-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 font-bold text-lg"
      >
        🆘 Craving SOS - Need Help Now?
      </button>

      <XPBar currentXP={currentXP} xpToNextLevel={xpToNextLevel} currentLevel={userLevel} />

      <StreakWidget currentStreak={currentStreak} longestStreak={longestStreak} />

      <DailyMissions />

      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-4 mb-6">
        <div className="flex gap-3">
          <AlertCircle className="text-teal-600 flex-shrink-0" size={20} />
          <div>
            <p className="font-semibold text-slate-900 mb-1">Smart Insight</p>
            <p className="text-sm text-slate-700">You tend to crave around 3 PM. Let's prepare a strategy for tomorrow.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <h3 className="font-bold text-lg text-slate-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { label: 'Completed breathing exercise', time: '2 hours ago', type: 'success' },
            { label: 'Logged craving - intensity 5/10', time: '4 hours ago', type: 'neutral' },
            { label: 'Watched motivation video', time: 'Yesterday', type: 'success' },
          ].map((activity, i) => (
            <div key={i} className="flex items-center gap-3 pb-3 border-b border-slate-100 last:border-0">
              <div className={`w-2 h-2 rounded-full ${activity.type === 'success' ? 'bg-green-500' : 'bg-slate-400'}`}></div>
              <div className="flex-1">
                <p className="text-sm text-slate-900">{activity.label}</p>
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Flame, Target } from 'lucide-react';

interface StreakWidgetProps {
  currentStreak: number;
  longestStreak: number;
  lastCheckIn?: string;
}

export function StreakWidget({ currentStreak, longestStreak, lastCheckIn }: StreakWidgetProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Flame className="text-orange-500" size={20} />
          <span className="text-sm font-semibold text-slate-700">Current Streak</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-orange-600">{currentStreak}</span>
          <span className="text-sm text-slate-600">days</span>
        </div>
        <p className="text-xs text-slate-600 mt-2">Keep it going!</p>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Target className="text-teal-600" size={20} />
          <span className="text-sm font-semibold text-slate-700">Personal Best</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-teal-600">{longestStreak}</span>
          <span className="text-sm text-slate-600">days</span>
        </div>
        <p className="text-xs text-slate-600 mt-2">You've got this!</p>
      </div>
    </div>
  );
}

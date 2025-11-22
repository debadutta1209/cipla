import { Star, Zap } from 'lucide-react';

interface XPBarProps {
  currentXP: number;
  xpToNextLevel: number;
  currentLevel: number;
}

export function XPBar({ currentXP, xpToNextLevel, currentLevel }: XPBarProps) {
  const progress = (currentXP / xpToNextLevel) * 100;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Star className="text-yellow-500" size={20} fill="currentColor" />
          <span className="font-bold text-slate-900">Level {currentLevel}</span>
        </div>
        <span className="text-sm text-slate-600">{currentXP} / {xpToNextLevel} XP</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
    </div>
  );
}

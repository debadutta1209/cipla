import { CheckCircle2, Circle, Zap, BookOpen, BarChart3 } from 'lucide-react';

interface Mission {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  completed: boolean;
  icon: any;
}

export function DailyMissions() {
  const missions: Mission[] = [
    {
      id: 'checkin',
      title: 'Daily Check-in',
      description: 'Log your craving levels and mood',
      xpReward: 25,
      completed: true,
      icon: CheckCircle2,
    },
    {
      id: 'journal',
      title: 'Journal Entry',
      description: 'Write about your day and triggers',
      xpReward: 35,
      completed: false,
      icon: BookOpen,
    },
    {
      id: 'content',
      title: 'Watch Content',
      description: 'Complete a 2-min motivation clip',
      xpReward: 20,
      completed: false,
      icon: BarChart3,
    },
  ];

  const totalXP = missions.filter(m => m.completed).reduce((sum, m) => sum + m.xpReward, 0);
  const maxXP = missions.reduce((sum, m) => sum + m.xpReward, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-slate-900">Today's Missions</h3>
        <div className="text-right">
          <p className="text-sm font-bold text-yellow-600">{totalXP} / {maxXP} XP</p>
          <p className="text-xs text-slate-500">
            {missions.filter(m => m.completed).length} / {missions.length} done
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {missions.map((mission) => {
          const Icon = mission.icon;
          return (
            <button
              key={mission.id}
              className="w-full p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition text-left border border-slate-200"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {mission.completed ? (
                    <CheckCircle2 size={20} className="text-green-500" />
                  ) : (
                    <Circle size={20} className="text-slate-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`font-semibold text-sm ${mission.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                    {mission.title}
                  </p>
                  <p className="text-xs text-slate-600">{mission.description}</p>
                </div>
                <div className="flex items-center gap-1 text-yellow-600">
                  <Zap size={16} />
                  <span className="text-sm font-bold">{mission.xpReward}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

import { TrendingDown, Clock, AlertCircle, Target } from 'lucide-react';

export function AnalyticsScreen() {
  const timeOfDayData = [
    { time: '6am', intensity: 2, height: '20%' },
    { time: '9am', intensity: 4, height: '40%' },
    { time: '12pm', intensity: 7, height: '70%' },
    { time: '3pm', intensity: 8, height: '80%' },
    { time: '6pm', intensity: 6, height: '60%' },
    { time: '9pm', intensity: 3, height: '30%' },
  ];

  const triggers = [
    { name: 'After meals', count: 12, percentage: 40 },
    { name: 'During stress', count: 8, percentage: 27 },
    { name: 'Social situations', count: 7, percentage: 23 },
    { name: 'With coffee', count: 3, percentage: 10 },
  ];

  return (
    <div className="pb-24 pt-6 px-4 max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Analytics</h1>
        <p className="text-slate-600">Understand your patterns</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown className="text-green-500" size={20} />
            <span className="text-sm font-semibold text-slate-700">Cravings Trend</span>
          </div>
          <p className="text-2xl font-bold text-green-600">-35%</p>
          <p className="text-xs text-slate-600 mt-1">Last 7 days</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <Target className="text-teal-600" size={20} />
            <span className="text-sm font-semibold text-slate-700">Success Rate</span>
          </div>
          <p className="text-2xl font-bold text-teal-600">94%</p>
          <p className="text-xs text-slate-600 mt-1">Resisted cravings</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100 mb-6">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Clock size={20} className="text-blue-500" />
          Craving Intensity by Time
        </h3>
        <div className="flex items-end justify-between h-32 gap-2">
          {timeOfDayData.map((data) => (
            <div key={data.time} className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg transition hover:shadow-lg" style={{ height: data.height }}></div>
              <span className="text-xs text-slate-600">{data.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-900">
            <span className="font-semibold">High-risk time:</span> 3 PM is your peak craving hour
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100 mb-6">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <AlertCircle size={20} className="text-orange-500" />
          Your Top Triggers
        </h3>
        <div className="space-y-3">
          {triggers.map((trigger) => (
            <div key={trigger.name}>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium text-slate-900">{trigger.name}</p>
                <span className="text-sm text-slate-600">{trigger.percentage}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-orange-400 to-red-500 h-full rounded-full"
                  style={{ width: `${trigger.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4 mb-6">
        <h4 className="font-bold text-slate-900 mb-2">AI Coach Recommendation</h4>
        <p className="text-sm text-slate-700">
          Since 3 PM is your high-risk time, let's add a reminder for 2:45 PM with a breathing exercise. You've successfully resisted in 94% of situations!
        </p>
        <button className="mt-3 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg text-sm font-bold hover:shadow-md transition">
          Apply Recommendation
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100">
        <h3 className="font-bold text-slate-900 mb-4">Health Benefits Unlocked</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <div>
              <p className="font-medium text-slate-900">Breathing Improving</p>
              <p className="text-xs text-slate-600">After 30 days, your lungs begin to heal</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <div>
              <p className="font-medium text-slate-900">Circulation Improving</p>
              <p className="text-xs text-slate-600">Blood oxygen levels increase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

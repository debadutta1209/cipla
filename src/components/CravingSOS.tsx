import { X, Wind, Gamepad2, Headphones, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface CravingSOSProps {
  onClose: () => void;
}

export function CravingSOS({ onClose }: CravingSOSProps) {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [breathCount, setBreathCount] = useState(0);

  const tools = [
    {
      id: 'breathe',
      name: 'Breathing Exercise',
      description: '60-second guided breathing',
      icon: Wind,
      color: 'from-blue-400 to-cyan-400',
    },
    {
      id: 'game',
      name: 'Quick Game',
      description: 'Tap patterns distraction',
      icon: Gamepad2,
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 'audio',
      name: 'Urge Surfing',
      description: '3-min guided audio',
      icon: Headphones,
      color: 'from-green-400 to-emerald-400',
    },
    {
      id: 'buddy',
      name: 'Message Buddy',
      description: 'Text accountability',
      icon: MessageSquare,
      color: 'from-orange-400 to-red-400',
    },
  ];

  const renderToolContent = () => {
    if (selectedTool === 'breathe') {
      return (
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">4-7-8 Breathing</h3>
            <p className="text-slate-600">Breathe in for 4, hold for 7, out for 8</p>
          </div>
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-pulse opacity-30"></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl font-bold text-blue-600">4</div>
              <p className="text-sm text-slate-600 mt-2">Inhale</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedTool(null)}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium"
          >
            Complete
          </button>
        </div>
      );
    }

    if (selectedTool === 'game') {
      return (
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-xl font-bold text-slate-900">Tap Attack</h3>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <button
                key={i}
                onClick={() => setBreathCount(breathCount + 1)}
                className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xl transition transform hover:scale-110 active:scale-95"
              >
                {i}
              </button>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-2xl font-bold text-purple-600">{breathCount} taps</p>
            <p className="text-sm text-slate-600">Keep going!</p>
          </div>
          <button
            onClick={() => setSelectedTool(null)}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium"
          >
            Done
          </button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-4">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`p-4 rounded-xl bg-gradient-to-br ${tool.color} text-white shadow-lg hover:shadow-xl transition transform hover:scale-105`}
            >
              <Icon size={32} className="mb-2" />
              <p className="font-bold text-sm">{tool.name}</p>
              <p className="text-xs opacity-90">{tool.description}</p>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50 animate-in fade-in duration-200">
      <div className="w-full bg-white rounded-t-3xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Craving SOS</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>

        {!selectedTool && (
          <p className="text-slate-600 mb-4">You can do this! Choose a tool to get through this moment.</p>
        )}

        <div className="mb-4">{renderToolContent()}</div>
      </div>
    </div>
  );
}

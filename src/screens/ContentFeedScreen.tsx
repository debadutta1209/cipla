import { Play, Clock, Heart } from 'lucide-react';
import { useState } from 'react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  duration: number;
  thumbnail: string;
  type: string;
  stage: string;
}

export function ContentFeedScreen() {
  const [likedContent, setLikedContent] = useState<Set<string>>(new Set());
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const content: ContentItem[] = [
    {
      id: '1',
      title: 'Day 30 Health Timeline',
      description: 'See what happens to your body in the first month',
      duration: 245,
      thumbnail: 'from-blue-400 to-cyan-400',
      type: 'Health',
      stage: 'all',
    },
    {
      id: '2',
      title: 'Success Stories: Rachel\'s Journey',
      description: 'Real person, real results - 90 days smoke-free',
      duration: 180,
      thumbnail: 'from-green-400 to-emerald-400',
      type: 'Stories',
      stage: 'all',
    },
    {
      id: '3',
      title: '5-Minute Stress Relief Guide',
      description: 'Quick techniques for managing anxiety',
      duration: 310,
      thumbnail: 'from-purple-400 to-pink-400',
      type: 'Techniques',
      stage: 'all',
    },
    {
      id: '4',
      title: 'Doctor Q&A: Nicotine Replacement',
      description: 'Expert advice on NRT options',
      duration: 420,
      thumbnail: 'from-orange-400 to-red-400',
      type: 'Education',
      stage: 'week2',
    },
    {
      id: '5',
      title: 'Why The Cravings Peak at Day 3',
      description: 'Understanding your brain chemistry',
      duration: 215,
      thumbnail: 'from-teal-400 to-cyan-500',
      type: 'Education',
      stage: 'week1',
    },
    {
      id: '6',
      title: 'Celebration: Mark\'s 6-Month Win',
      description: 'Watch his journey to half-year smoke-free',
      duration: 520,
      thumbnail: 'from-yellow-400 to-orange-400',
      type: 'Stories',
      stage: 'month2',
    },
  ];

  const filters = ['all', 'Health', 'Stories', 'Techniques', 'Education'];

  const toggleLike = (id: string) => {
    const newLiked = new Set(likedContent);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedContent(newLiked);
  };

  const filteredContent = content.filter(item =>
    activeFilter === 'all' || item.type === activeFilter
  );

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins} min`;
  };

  return (
    <div className="pb-24 pt-6 px-4 max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Resources & Stories</h1>
        <p className="text-slate-600">Personalized content to support your journey</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 -mx-4 px-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
            }`}
          >
            {filter === 'all' ? 'All' : filter}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition border border-slate-100 group cursor-pointer"
          >
            <div className="relative">
              <div
                className={`w-full h-40 bg-gradient-to-br ${item.thumbnail} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition transform group-hover:scale-110">
                    <Play size={28} className="text-slate-900 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleLike(item.id);
                }}
                className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center transition ${
                  likedContent.has(item.id) ? 'text-red-500' : 'text-slate-700'
                }`}
              >
                <Heart size={18} fill={likedContent.has(item.id) ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1 text-slate-600">
                  <Clock size={16} />
                  <span className="text-sm">{formatDuration(item.duration)}</span>
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-700 rounded-full">
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-4 mt-6">
        <p className="text-sm text-slate-700">
          <span className="font-semibold">Pro tip:</span> Watch content during high-risk times for extra support!
        </p>
      </div>
    </div>
  );
}

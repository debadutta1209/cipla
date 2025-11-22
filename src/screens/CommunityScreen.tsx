import { Heart, Share2, Plus } from 'lucide-react';
import { useState } from 'react';

interface Post {
  id: string;
  content: string;
  daysQuit: number;
  reactions: number;
  timestamp: string;
  userColor: string;
}

export function CommunityScreen() {
  const [showNewPost, setShowNewPost] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      content: 'Day 45 and feeling incredible! The cravings are getting easier to manage.',
      daysQuit: 45,
      reactions: 24,
      timestamp: '2 hours ago',
      userColor: 'from-blue-400 to-cyan-400',
    },
    {
      id: '2',
      content: 'Just hit Day 30! Celebrating with my SOS breathing exercises - they really work!',
      daysQuit: 30,
      reactions: 18,
      timestamp: '5 hours ago',
      userColor: 'from-green-400 to-emerald-400',
    },
    {
      id: '3',
      content: 'Day 7 complete. Hardest week of my life but I did it! Thanks to this community.',
      daysQuit: 7,
      reactions: 32,
      timestamp: '1 day ago',
      userColor: 'from-purple-400 to-pink-400',
    },
    {
      id: '4',
      content: 'Day 90 milestone unlocked! Longest I\'ve ever been smoke-free. Feeling proud!',
      daysQuit: 90,
      reactions: 45,
      timestamp: '2 days ago',
      userColor: 'from-orange-400 to-red-400',
    },
  ]);

  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const toggleLike = (postId: string) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  return (
    <div className="pb-24 pt-6 px-4 max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Community</h1>
        <p className="text-slate-600">See wins from people just like you</p>
      </div>

      <button
        onClick={() => setShowNewPost(true)}
        className="w-full mb-6 p-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition"
      >
        <Plus size={20} />
        Share Your Win
      </button>

      {showNewPost && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50 animate-in fade-in">
          <div className="w-full bg-white rounded-t-3xl p-6 animate-in slide-in-from-bottom">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Share Your Story</h2>
            <textarea
              placeholder="What's your update? How are you feeling today?"
              className="w-full p-3 border border-slate-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows={4}
            ></textarea>
            <div className="flex gap-2">
              <button
                onClick={() => setShowNewPost(false)}
                className="flex-1 py-2 border border-slate-300 rounded-lg font-medium text-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowNewPost(false)}
                className="flex-1 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-bold"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm p-4 border border-slate-100">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${post.userColor}`}></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-slate-900">Day {post.daysQuit}</span>
                  <span className="text-xs text-slate-500">• {post.timestamp}</span>
                </div>
                <p className="text-slate-700">{post.content}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <button
                onClick={() => toggleLike(post.id)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                  likedPosts.has(post.id)
                    ? 'bg-red-50 text-red-600'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Heart size={16} fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                <span className="text-sm font-medium">
                  {post.reactions + (likedPosts.has(post.id) ? 1 : 0)}
                </span>
              </button>
              <button className="flex items-center gap-1 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition">
                <Share2 size={16} />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 mt-6">
        <p className="text-sm text-slate-700">
          <span className="font-semibold">Pro tip:</span> All posts are anonymous. Share freely and celebrate others' wins!
        </p>
      </div>
    </div>
  );
}

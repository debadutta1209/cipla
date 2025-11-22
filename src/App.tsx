import { useState, useEffect } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { JourneyScreen } from './screens/JourneyScreen';
import { CommunityScreen } from './screens/CommunityScreen';
import { AnalyticsScreen } from './screens/AnalyticsScreen';
import { ContentFeedScreen } from './screens/ContentFeedScreen';
import { CravingSOS } from './components/CravingSOS';
import { BottomNav } from './components/BottomNav';

type Screen = 'home' | 'journey' | 'community' | 'analytics' | 'content';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [showSOS, setShowSOS] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        {currentScreen === 'home' && <HomeScreen onSOS={() => setShowSOS(true)} />}
        {currentScreen === 'journey' && <JourneyScreen />}
        {currentScreen === 'community' && <CommunityScreen />}
        {currentScreen === 'analytics' && <AnalyticsScreen />}
        {currentScreen === 'content' && <ContentFeedScreen />}
      </div>

      {showSOS && <CravingSOS onClose={() => setShowSOS(false)} />}

      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
    </div>
  );
}

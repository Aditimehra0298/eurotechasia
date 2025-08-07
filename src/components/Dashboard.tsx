import React, { useState } from 'react';
import { 
  Trophy, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Target, 
  Users, 
  Award,
  ArrowUp,
  ArrowDown,
  Star,
  BarChart3,
  Calendar,
  FileText,
  Shield
} from 'lucide-react';

interface User {
  id: string;
  name: string;
  company: string;
  industry: string;
  progress: number;
  rank: number;
  score: number;
  completionTime: number; // in days
  lastActivity: string;
  strengths: string[];
  weaknesses: string[];
  certifications: string[];
  pendingTasks: string[];
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  company: string;
  score: number;
  progress: number;
  industry: string;
  badge?: string;
}

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'leaderboard' | 'analysis'>('overview');

  // Mock data for demonstration
  const currentUser: User = {
    id: 'user-001',
    name: 'John Smith',
    company: 'TechCorp Industries',
    industry: 'Electrical & Electronics',
    progress: 78,
    rank: 4,
    score: 850,
    completionTime: 45,
    lastActivity: '2024-01-15',
    strengths: ['Technical Documentation', 'Product Testing', 'Risk Assessment'],
    weaknesses: ['Declaration of Conformity', 'Market Surveillance', 'Post-Market Requirements'],
    certifications: ['LVD Directive', 'EMC Directive'],
    pendingTasks: ['Complete RoHS Assessment', 'Finalize Technical File', 'Submit Declaration']
  };

  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, name: 'Sarah Johnson', company: 'MedTech Solutions', score: 950, progress: 95, industry: 'Medical Devices', badge: '🏆' },
    { rank: 2, name: 'Michael Chen', company: 'AutoParts Ltd', score: 920, progress: 92, industry: 'Machinery', badge: '🥈' },
    { rank: 3, name: 'Emma Wilson', company: 'SafetyFirst Inc', score: 890, progress: 89, industry: 'PPE', badge: '🥉' },
    { rank: 4, name: 'John Smith', company: 'TechCorp Industries', score: 850, progress: 78, industry: 'Electrical & Electronics' },
    { rank: 5, name: 'David Brown', company: 'Construction Pro', score: 820, progress: 82, industry: 'Construction' },
    { rank: 6, name: 'Lisa Garcia', company: 'ToyWorld', score: 780, progress: 75, industry: 'Toys & Leisure' },
    { rank: 7, name: 'Robert Lee', company: 'Pressure Systems', score: 750, progress: 70, industry: 'Pressure Equipment' },
    { rank: 8, name: 'Anna Davis', company: 'Measuring Tools Co', score: 720, progress: 68, industry: 'Measuring Instruments' }
  ];

  const industryAverages = {
    'Medical Devices': 88,
    'Machinery': 85,
    'PPE': 82,
    'Electrical & Electronics': 78,
    'Construction': 75,
    'Toys & Leisure': 72,
    'Pressure Equipment': 70,
    'Measuring Instruments': 68
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return 'text-green-600';
    if (progress >= 75) return 'text-blue-600';
    if (progress >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRankChange = (currentRank: number, previousRank: number) => {
    if (currentRank < previousRank) return { direction: 'up', value: previousRank - currentRank };
    if (currentRank > previousRank) return { direction: 'down', value: currentRank - previousRank };
    return { direction: 'stable', value: 0 };
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            CE Mark Certification Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your progress, compare with industry leaders, and identify areas for improvement
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'overview' 
                    ? 'bg-[#392f6f] text-white' 
                    : 'text-gray-600 hover:text-[#392f6f]'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('leaderboard')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'leaderboard' 
                    ? 'bg-[#392f6f] text-white' 
                    : 'text-gray-600 hover:text-[#392f6f]'
                }`}
              >
                Leaderboard
              </button>
              <button
                onClick={() => setActiveTab('analysis')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analysis' 
                    ? 'bg-[#392f6f] text-white' 
                    : 'text-gray-600 hover:text-[#392f6f]'
                }`}
              >
                Comparative Analysis
              </button>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Current User Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#392f6f]">#{currentUser.rank}</div>
                    <div className="text-sm text-gray-500">Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#392f6f]">{currentUser.score}</div>
                    <div className="text-sm text-gray-500">Score</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Target className="w-8 h-8 text-[#392f6f]" />
                    <span className="text-2xl font-bold text-[#392f6f]">{currentUser.progress}%</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Overall Progress</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(currentUser.progress).replace('text-', 'bg-')}`}
                      style={{ width: `${currentUser.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <span className="text-2xl font-bold text-green-600">{currentUser.certifications.length}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Certifications</h3>
                  <p className="text-sm text-gray-600">Completed directives</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Clock className="w-8 h-8 text-yellow-600" />
                    <span className="text-2xl font-bold text-yellow-600">{currentUser.completionTime}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Days to Complete</h3>
                  <p className="text-sm text-gray-600">Estimated timeline</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                    <span className="text-2xl font-bold text-red-600">{currentUser.pendingTasks.length}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pending Tasks</h3>
                  <p className="text-sm text-gray-600">Action items</p>
                </div>
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                  Your Strengths
                </h3>
                <div className="space-y-3">
                  {currentUser.strengths.map((strength, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
                  Areas for Improvement
                </h3>
                <div className="space-y-3">
                  {currentUser.weaknesses.map((weakness, index) => (
                    <div key={index} className="flex items-center p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">{weakness}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Industry Leaderboard</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">Top Performers</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {leaderboardData.map((entry) => (
                <div 
                  key={entry.rank}
                  className={`flex items-center p-6 rounded-xl transition-all duration-300 ${
                    entry.name === currentUser.name 
                      ? 'bg-[#392f6f] text-white shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-4 w-full">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        entry.rank <= 3 
                          ? 'bg-yellow-500 text-white' 
                          : entry.name === currentUser.name
                          ? 'bg-white text-[#392f6f]'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {entry.badge || entry.rank}
                      </div>
                      <div>
                        <div className={`font-semibold ${entry.name === currentUser.name ? 'text-white' : 'text-gray-900'}`}>
                          {entry.name}
                        </div>
                        <div className={`text-sm ${entry.name === currentUser.name ? 'text-purple-200' : 'text-gray-500'}`}>
                          {entry.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 ml-auto">
                      <div className="text-center">
                        <div className={`font-bold ${entry.name === currentUser.name ? 'text-white' : 'text-gray-900'}`}>
                          {entry.score}
                        </div>
                        <div className={`text-xs ${entry.name === currentUser.name ? 'text-purple-200' : 'text-gray-500'}`}>
                          Score
                        </div>
                      </div>
                      <div className="text-center">
                        <div className={`font-bold ${entry.name === currentUser.name ? 'text-white' : 'text-gray-900'}`}>
                          {entry.progress}%
                        </div>
                        <div className={`text-xs ${entry.name === currentUser.name ? 'text-purple-200' : 'text-gray-500'}`}>
                          Progress
                        </div>
                      </div>
                      <div className="text-center">
                        <div className={`text-sm px-3 py-1 rounded-full ${
                          entry.name === currentUser.name 
                            ? 'bg-white text-[#392f6f]' 
                            : 'bg-[#392f6f] text-white'
                        }`}>
                          {entry.industry}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparative Analysis Tab */}
        {activeTab === 'analysis' && (
          <div className="space-y-8">
            {/* Industry Comparison */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Comparison</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Industry: {currentUser.industry}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Your Progress</span>
                      <span className="font-bold text-[#392f6f]">{currentUser.progress}%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Industry Average</span>
                      <span className="font-bold text-gray-900">
                        {industryAverages[currentUser.industry as keyof typeof industryAverages]}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Gap</span>
                      <span className={`font-bold ${
                        currentUser.progress >= (industryAverages[currentUser.industry as keyof typeof industryAverages] || 0)
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}>
                        {currentUser.progress - (industryAverages[currentUser.industry as keyof typeof industryAverages] || 0)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <ArrowUp className="w-5 h-5 text-green-600 mr-2" />
                        <span className="font-semibold text-green-600">Above Average</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Your technical documentation skills are 15% above industry average
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                        <span className="font-semibold text-yellow-600">Needs Attention</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Declaration of Conformity completion is 20% below industry average
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Certification Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">LVD Directive</span>
                    </div>
                    <span className="text-sm text-gray-500">Completed</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">EMC Directive</span>
                    </div>
                    <span className="text-sm text-gray-500">Completed</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-yellow-600 mr-3" />
                      <span className="text-gray-700">RoHS Directive</span>
                    </div>
                    <span className="text-sm text-yellow-600">In Progress</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recommendations</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Target className="w-5 h-5 text-[#392f6f] mr-2" />
                      <span className="font-semibold text-[#392f6f]">Priority Action</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Complete RoHS assessment within 7 days to maintain timeline
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FileText className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-blue-600">Documentation</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Review and finalize technical file for submission
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Shield className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-semibold text-green-600">Compliance</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Schedule final compliance review with expert team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard; 
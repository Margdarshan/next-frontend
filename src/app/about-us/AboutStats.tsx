"use client";

import React, { memo } from 'react'

// TypeScript interface for better type safety
interface Stat {
  value: string
  label: string
  id: string
}

// Centralized data - easy to modify and maintain
const STATS_DATA: Stat[] = [
  { id: 'students', value: '20K+', label: 'Active Students' },
  { id: 'mentors', value: '10+', label: 'Mentors' },
  { id: 'views', value: '2L+', label: 'YouTube Views' },
  { id: 'videos', value: '100+', label: 'Videos' }
]

// Reusable StatItem component
interface StatItemProps {
  stat: Stat
  className?: string
}

function StatItem({ stat, className = '' }: StatItemProps) {
  return (
    <div className={`text-center ${className}`}>
      <h3 className="font-manrope font-semibold text-2xl lg:text-5xl leading-tight text-[#4E18CD]">
        {stat.value}
      </h3>
      <p className="font-inter text-xs lg:text-base leading-4 text-[#333333] mt-1">
        {stat.label}
      </p>
    </div>
  )
}

// Main component with performance optimizations
interface AboutStatsProps {
  className?: string
  stats?: Stat[]
}

function AboutStats({ 
  className = '',
  stats = STATS_DATA 
}: AboutStatsProps) {
  return (
    <section 
      className={`px-10 lg:px-20 ${className}`}
      aria-labelledby="company-stats"
    >
      {/* Screen reader heading */}
      <h2 id="company-stats" className="sr-only">
        Company Statistics
      </h2>
      
      {/* Responsive grid that works better on mobile */}
      <div className="mt-5 grid grid-cols-2 gap-4 lg:flex lg:justify-evenly lg:gap-8">
        {stats.map((stat) => (
          <StatItem 
            key={stat.id} 
            stat={stat}
          />
        ))}
      </div>
      
      {/* Semantic divider */}
      <hr className="border-t border-[#757575] mt-8" />
    </section>
  )
}

// Memoize component to prevent unnecessary re-renders
export default memo(AboutStats)
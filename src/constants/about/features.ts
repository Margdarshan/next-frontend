import { FeatureCard } from "@/types/about/features"

export const FEATURES_DATA: FeatureCard[] = [
  {
    id: 'curriculum',
    title: 'Curriculum Based on Industry Needs',
    description: 'Save time and money! The Margdarshan Curriculum is made to be easier to understand and in line with industry needs.',
    variant: 'dark',
    icon: '🎯'
  },
  {
    id: 'blended-learning',
    title: 'Blended-Learning Method',
    description: 'Innovative approach combining online and offline learning for maximum effectiveness and flexibility.',
    variant: 'light',
    icon: '🔄'
  },
  {
    id: 'certification',
    title: 'Industry Certification',
    description: 'Get recognized certificates that add value to your professional profile and career prospects.',
    variant: 'dark',
    icon: '🏆'
  },
  {
    id: 'auto-grading',
    title: 'Smart Auto-Grading System',
    description: 'Advanced AI-powered assessment system that provides instant feedback and detailed analytics.',
    variant: 'light',
    icon: '⭐'
  },
  {
    id: 'mentorship',
    title: 'Personal Mentorship',
    description: 'One-on-one guidance from industry experts to accelerate your learning journey.',
    variant: 'dark',
    icon: '🤝'
  }
] as const
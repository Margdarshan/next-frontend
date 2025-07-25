export interface FeatureCard {
  id: string
  title: string
  description: string
  variant: 'dark' | 'light'
  icon?: string
}

export interface AboutFeaturesProps {
  className?: string
  features?: FeatureCard[]
  heroTitle?: string
  heroDescription?: string
  animated?: boolean
}
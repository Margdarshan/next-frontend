'use client'

import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FeatureCard as FeatureCardType } from '@/types/about/features'
import styles from '@/styles/features.module.css'

interface FeatureCardProps {
  feature: FeatureCardType
  index: number
  animated?: boolean
  className?: string
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
}

function FeatureCard({ 
  feature, 
  index, 
  animated = true, 
  className = '' 
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isDark = feature.variant === 'dark'
  
  const cardClasses = `
    ${styles.card} 
    ${isDark ? styles.cardDark : styles.cardLight} 
    ${className}
  `.trim()

  const CardWrapper = animated ? motion.article : 'article'
  const motionProps = animated ? {
    variants: cardVariants,
    initial: "hidden",
    animate: "visible",
    whileHover: "hover",
    custom: index
  } : {}

  return (
    <CardWrapper
      className={cardClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-labelledby={`feature-${feature.id}-title`}
      tabIndex={0}
      {...motionProps}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          {feature.icon && (
            <span className="text-2xl" role="img" aria-hidden="true">
              {feature.icon}
            </span>
          )}
          <h3 
            id={`feature-${feature.id}-title`}
            className="font-inter font-semibold text-base lg:text-lg leading-6"
          >
            {feature.title}
          </h3>
        </div>
        
        <p className="font-inter text-sm lg:text-base leading-5 opacity-90">
          {feature.description}
        </p>
      </div>

      {/* Optional hover effect */}
      <AnimatePresence>
        {isHovered && animated && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
          />
        )}
      </AnimatePresence
    </CardWrapper>
  )
}

export default memo(FeatureCard)
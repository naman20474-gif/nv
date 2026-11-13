'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export function WhatImUpTo() {
  const { whatImUpTo } = portfolioData.about
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date()
    const istOffset = 5.5 * 60 * 60 * 1000
    const istTime = new Date(now.getTime() + istOffset)
    return istTime.toISOString().substr(11, 5)
  })

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const istOffset = 5.5 * 60 * 60 * 1000
      const istTime = new Date(now.getTime() + istOffset)
      setCurrentTime(istTime.toISOString().substr(11, 5))
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="what-im-up-to-section" id="what-im-up-to">
      <div className="container-page">
        <motion.div
          className="what-im-up-to-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="what-im-up-to-eyebrow">
            <span className="orange-line"></span>
            <span>{whatImUpTo.eyebrow}</span>
          </div>
          <h2 className="what-im-up-to-heading heading-varsity heading-h1 text-outline text-primary">
            {whatImUpTo.heading}
          </h2>
          <p className="what-im-up-to-sub text-2">{whatImUpTo.sub}</p>
        </motion.div>

        <motion.div
          className="what-im-up-to-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {whatImUpTo.items.map((item, index) => (
            <motion.div
              key={item.label}
              className={`what-im-up-to-card ${item.isClock ? 'clock-card' : ''}`}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-header">
                <span className="card-label">{item.label}</span>
              </div>

              <div className="card-content">
                {item.isClock ? (
                  <div>
                    <div className="clock-display">
                      <Clock size={18} className="clock-icon" aria-hidden="true" />
                      <span className="clock-time">{currentTime}</span>
                      <span className="timezone">IST</span>
                    </div>
                    <p className="clock-description text-2">{item.description}</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description text-2">{item.description}</p>
                    {item.status && <span className="card-status">{item.status}</span>}
                    {item.linkText && item.linkUrl && (
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-draw inline-flex items-center gap-1 text-sm"
                      >
                        {item.linkText}
                        <span className="arrow">↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
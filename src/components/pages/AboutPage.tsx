import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, Mail, ExternalLink, ArrowRight, Code, GraduationCap, Layers, Heart, Shield, Send, User, Upload } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { WhatImUpTo } from './WhatImUpTo'

import { Welcome } from '@/components/sections/Welcome'
import { ConnectContent, HireContent, ResumeContent } from '@/components/modals/ModalContent'
import { Modal } from '@/components/ui/Modal'

type ModalKey = 'resume' | 'hire' | 'connect'

const MODAL_TITLES: Record<ModalKey, string> = {
  resume: 'Resume',
  hire: 'Start a project',
  connect: 'Say hello',
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

const heroChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

const socialIconMap: Record<string, React.ElementType> = {
  github: Send,
  linkedin: User,
  mail: Mail,
}

export default function AboutPage() {
  const { about, personal } = portfolioData
  const [modal, setModal] = useState<ModalKey | null>(null)
  const closeModal = () => setModal(null)

  // Admin mode - only accessible via keyboard shortcut (Ctrl/Cmd + Shift + U)
  const [isAdminMode, setIsAdminMode] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'u') {
        e.preventDefault()
        setIsAdminMode(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Get profile image from localStorage or use default
  const [profileImage, setProfileImage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem('portfolio-profile-image') || personal.profileImage
      } catch {
        return personal.profileImage
      }
    }
    return personal.profileImage
  })

  const [isUploading, setIsUploading] = useState(false)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!validTypes.includes(file.type)) {
      alert('Please select a valid image file (JPG, PNG, or WebP)')
      return
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB')
      return
    }

    setIsUploading(true)

    const reader = new FileReader()
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string
      setProfileImage(dataUrl)
      try {
        localStorage.setItem('portfolio-profile-image', dataUrl)
      } catch (err) {
        console.warn('Could not save image to localStorage:', err)
      }
      setIsUploading(false)
    }
    reader.onerror = () => {
      setIsUploading(false)
      alert('Failed to read file')
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
      <Welcome />

      {isAdminMode && (
        <div className="admin-mode-indicator" aria-live="polite">
          Admin mode active — Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>U</kbd> to exit
        </div>
      )}

      <main id="main">
        {/* HERO SECTION */}
        <section className="about-hero-section" aria-labelledby="about-hero-title">
          <div className="container-page">
            <motion.div
              className="about-hero-inner"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <div className="about-hero-card">
                <div className="about-hero-content">
                  <motion.div className="about-hero-badge" variants={heroChildVariants}>
                    <span className="badge-dot" aria-hidden="true"></span>
                    <span>{about.intro.eyebrow}</span>
                  </motion.div>
                  <motion.h1
                    id="about-hero-title"
                    className="about-hero-name heading-varsity heading-h1 text-outline text-primary"
                    variants={heroChildVariants}
                  >
                    {about.intro.heading}
                  </motion.h1>
                  <motion.p className="about-hero-role text-2" variants={heroChildVariants}>
                    {about.intro.subHeading}
                  </motion.p>
                  <motion.div className="about-hero-location" variants={heroChildVariants}>
                    <span className="location-icon" aria-hidden="true">📍</span>
                    <span>{personal.location}</span>
                  </motion.div>
                  <motion.div className="about-hero-description text-2" variants={heroChildVariants}>
                    <p>{about.intro.paragraph1}</p>
                    <p>{about.intro.paragraph2}</p>
                  </motion.div>
                  <motion.div className="about-hero-actions" variants={heroChildVariants}>
                    <a
                      href={personal.resumeUrl}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText size={18} className="btn-icon" aria-hidden="true" />
                      {about.intro.resumeLabel}
                    </a>
                    <a href={about.intro.workUrl} className="btn btn-secondary">
                      {about.intro.workLabel}
                      <ArrowRight size={18} className="btn-icon" aria-hidden="true" />
                    </a>
                  </motion.div>
                </div>
                <motion.div className="about-hero-image-wrapper" variants={heroChildVariants}>
                  <div className="about-hero-image-container">
                    {isAdminMode && (
                      <>
                        <input
                          type="file"
                          id="profile-image-upload"
                          accept="image/jpeg,image/jpg,image/png,image/webp"
                          onChange={handleImageUpload}
                          disabled={isUploading}
                          className="profile-image-input"
                          aria-label="Upload profile image"
                        />
                        <label htmlFor="profile-image-upload" className="profile-upload-btn" aria-label="Upload new profile image">
                          <Upload size={20} />
                        </label>
                        {isUploading && (
                          <div className="profile-upload-overlay">
                            <div className="profile-upload-spinner" aria-label="Uploading..." />
                          </div>
                        )}
                      </>
                    )}
                    <img
                      src={profileImage}
                      alt={`${personal.name} - ${personal.role}`}
                      className="about-hero-image"
                    />
                  </div>
                  <div className="about-hero-social">
                    {personal.social.map((social) => {
                      const Icon = socialIconMap[social.icon] || Mail
                      return (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <Icon size={18} className="social-icon" aria-hidden="true" />
                          <span className="social-label">{social.label}</span>
                        </a>
                      )
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MY STORY CARD */}
        <section className="about-story-section" aria-labelledby="story-title">
          <div className="container-page">
            <motion.div
              className="section-header"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <span className="section-eyebrow">MY STORY / 02</span>
              <h2 id="story-title" className="section-title heading-varsity">THE JOURNEY SO FAR</h2>
            </motion.div>

            <motion.div
              className="story-card"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              transition={{ delay: 0.1 }}
            >
              <div className="story-content">
                <p className="story-paragraph text-2">{about.intro.paragraph1}</p>
                <p className="story-paragraph text-2">{about.intro.paragraph2}</p>
              </div>
              <div className="story-highlights">
                <div className="highlight-item">
                  <Code size={20} className="highlight-icon" aria-hidden="true" />
                  <div>
                    <span className="highlight-title">Full-Stack Development</span>
                    <span className="highlight-desc text-2">Building end-to-end web experiences with React, Node.js, and TypeScript</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <Shield size={20} className="highlight-icon" aria-hidden="true" />
                  <div>
                    <span className="highlight-title">Cybersecurity & Privacy</span>
                    <span className="highlight-desc text-2">Focus on browser privacy, security tooling, and defensive programming</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <Heart size={20} className="highlight-icon" aria-hidden="true" />
                  <div>
                    <span className="highlight-title">Open Source</span>
                    <span className="highlight-desc text-2">Contributing to and building public tools for developers</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CURRENTLY WORKING ON - WhatImUpTo component */}
        <WhatImUpTo />

        {/* EXPERIENCE SECTION */}
        <section className="experience-section" aria-labelledby="experience-title">
          <div className="container-page">
            <motion.div
              className="section-header"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <span className="section-eyebrow">{about.experience.eyebrow}</span>
              <h2 id="experience-title" className="section-title heading-varsity">{about.experience.heading}</h2>
            </motion.div>

            <div className="experience-cards">
              {about.experience.items.map((item, index) => (
                <motion.article
                  key={item.organization + item.role}
                  className="experience-card"
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <div className="experience-card-header">
                    <span className="experience-year">{item.year}</span>
                    <div className="experience-role-group">
                      <h3 className="experience-role">{item.role}</h3>
                      <p className="experience-org">{item.organization}</p>
                    </div>
                  </div>
                  <div className="experience-card-body">
                    <p className="experience-duration">{item.duration}</p>
                    <p className="experience-description text-2">{item.description}</p>
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="experience-technologies">
                        {item.technologies.map((tech) => (
                          <span key={tech} className="tech-pill">{tech}</span>
                        ))}
                      </div>
                    )}
                    {item.linkText && item.linkUrl && (
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-link link-draw"
                      >
                        {item.linkText}
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="education-section" aria-labelledby="education-title">
          <div className="container-page">
            <motion.div
              className="section-header"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <span className="section-eyebrow">{about.education.eyebrow}</span>
              <h2 id="education-title" className="section-title heading-varsity">{about.education.heading}</h2>
            </motion.div>

            <div className="education-cards">
              {about.education.items.map((item, index) => (
                <motion.article
                  key={item.institution + item.qualification}
                  className="education-card"
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <div className="education-card-icon">
                    <GraduationCap size={24} aria-hidden="true" />
                  </div>
                  <div className="education-card-content">
                    <span className="education-year">{item.year}</span>
                    <h3 className="education-institution">{item.institution}</h3>
                    <p className="education-qualification">{item.qualification}</p>
                    <p className="education-description text-2">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY STACK SECTION */}
        <section className="tech-stack-section" aria-labelledby="stack-title">
          <div className="container-page">
            <motion.div
              className="section-header"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <span className="section-eyebrow">{about.techStack.eyebrow}</span>
              <h2 id="stack-title" className="section-title heading-varsity">{about.techStack.heading}</h2>
            </motion.div>

            <div className="stack-cards">
              {about.techStack.categories.map((category, index) => (
                <motion.article
                  key={category.category}
                  className="stack-card"
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.1 + index * 0.08 }}
                >
                  <div className="stack-card-header">
                    <Layers size={20} className="stack-icon" aria-hidden="true" />
                    <h3 className="stack-category-title">{category.category}</h3>
                  </div>
                  <div className="stack-items">
                    {category.items.map((item) => (
                      <span key={item} className="stack-item">{item}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="philosophy-section" aria-labelledby="philosophy-title">
          <div className="container-page">
            <motion.div
              className="section-header"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <span className="section-eyebrow">{about.philosophy.eyebrow}</span>
              <h2 id="philosophy-title" className="section-title heading-varsity">{about.philosophy.heading}</h2>
            </motion.div>

            <div className="philosophy-cards">
              {about.philosophy.principles.map((principle, index) => (
                <motion.article
                  key={principle.number}
                  className="philosophy-card"
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <span className="philosophy-number">{principle.number}</span>
                  <h3 className="philosophy-title">{principle.title}</h3>
                  <p className="philosophy-description text-2">{principle.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / CTA SECTION */}
        <section className="contact-section" aria-labelledby="contact-title">
          <div className="container-page">
            <motion.div
              className="contact-card"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <div className="contact-content">
                <span className="section-eyebrow">{about.ama.eyebrow}</span>
                <h2 id="contact-title" className="contact-title heading-varsity">{about.ama.heading}</h2>
                <p className="contact-sub text-2">{about.ama.sub}</p>
              </div>
              <div className="contact-actions">
                <a
                  href={`mailto:${personal.email}?subject=${encodeURIComponent(about.ama.subject)}`}
                  className="btn btn-primary"
                >
                  <Mail size={18} className="btn-icon" aria-hidden="true" />
                  {about.ama.emailLabel || 'Email Me'}
                </a>
                <a
                  href={personal.social[0]?.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Code size={18} className="btn-icon" aria-hidden="true" />
                  GitHub
                </a>
              </div>
              <form
                action={about.ama.action}
                method="POST"
                className="contact-form"
              >
                <input type="hidden" name="_subject" value={about.ama.subject} />
                <input type="hidden" name="_next" value="/about?message=sent" />
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email" className="field-label">{about.ama.emailLabel}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={about.ama.emailPlaceholder}
                      required
                      className="field-input"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message" className="field-label">{about.ama.messageLabel}</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={about.ama.messagePlaceholder}
                    required
                    rows={4}
                    className="field-textarea"
                  />
                </div>
                <button type="submit" className="btn btn-accent">
                  {about.ama.submitLabel}
                  <ArrowRight size={18} className="btn-icon" aria-hidden="true" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Modal open={modal !== null} onClose={closeModal} title={modal ? MODAL_TITLES[modal] : ''}>
        {modal === 'resume' && <ResumeContent />}
        {modal === 'hire' && <HireContent />}
        {modal === 'connect' && <ConnectContent />}
      </Modal>
    </>
  )
}
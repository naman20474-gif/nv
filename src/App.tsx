import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Welcome } from '@/components/sections/Welcome'
import { ConnectContent, HireContent, ResumeContent } from '@/components/modals/ModalContent'
import { CTA } from '@/components/sections/CTA'
import { Experience } from '@/components/sections/Experience'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Hero } from '@/components/sections/Hero'
import { Moments } from '@/components/sections/Moments'
import { OpenSource } from '@/components/sections/OpenSource'
import { Skills } from '@/components/sections/Skills'
import AboutPage from '@/components/pages/AboutPage'
import { Modal } from '@/components/ui/Modal'

type ModalKey = 'resume' | 'hire' | 'connect'

const MODAL_TITLES: Record<ModalKey, string> = {
  resume: 'Resume',
  hire: 'Start a project',
  connect: 'Say hello',
}

export default function App() {
  const [modal, setModal] = useState<ModalKey | null>(null)
  const closeModal = () => setModal(null)

  return (
    <BrowserRouter>
      <>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>

        <Welcome />

        <Navbar onOpenResume={() => setModal('resume')} />

        <main id="main">
          <Routes>
            <Route path="/" element={
              <>
                <Hero onOpenResume={() => setModal('resume')} />
                <OpenSource />
                <Moments />
                <FeaturedProjects />
                <Experience />
                <Skills />
                <CTA onHire={() => setModal('hire')} onConnect={() => setModal('connect')} />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />

        <Modal open={modal !== null} onClose={closeModal} title={modal ? MODAL_TITLES[modal] : ''}>
          {modal === 'resume' && <ResumeContent />}
          {modal === 'hire' && <HireContent />}
          {modal === 'connect' && <ConnectContent />}
        </Modal>
      </>
    </BrowserRouter>
  )
}

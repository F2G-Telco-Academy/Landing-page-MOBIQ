import { PlayCircle, Mail } from 'lucide-react'
import { useState } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import VideoModal from '../ui/VideoModal'

export default function Contact() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section id="request-demo" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="reveal text-center max-w-3xl mx-auto space-y-6">
          <p className="section-label">GET STARTED</p>
          
          <h2 className="heading-lg dark:text-gray-100">
            Ready to transform your network analysis workflow?
          </h2>
          
          <p className="text-body dark:text-gray-300">
            Join telecom operators, QA teams, and testing companies using MOBIQ for professional mobile testing. Watch our demo or get in touch to learn more.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2" onClick={() => setIsVideoOpen(true)}>
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => window.location.href = 'http://www.f2gsolutions.com/'}>
              <Mail className="w-5 h-5" />
              Contact Us
            </Button>
          </div>

          <p className="text-sm text-muted dark:text-gray-400 pt-4">
            Requires Windows 10/11 • Python 3.11+ • 8GB RAM minimum
          </p>
        </div>
      </Container>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  )
}

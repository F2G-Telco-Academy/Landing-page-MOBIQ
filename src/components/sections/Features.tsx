import {
  Zap, Smartphone, Workflow, ShieldCheck, FileText, Rocket
} from 'lucide-react'
import Container from '../ui/Container'

const features = [
  { icon: Zap, title: 'Smart Modules', description: 'RF logging, airplane mode, data, and network checks ready to run in two clicks.' },
  { icon: Smartphone, title: 'Multi-Device Orchestration', description: 'Run synchronized campaigns across multiple Android devices from one control layer.' },
  { icon: Workflow, title: 'Visual Workflows', description: 'Build repeatable test scenarios with clear visual logic and no heavy scripting.' },
  { icon: ShieldCheck, title: 'Guaranteed Reliability', description: 'Built-in retries and execution guards keep campaigns stable from lab to release.' },
  { icon: FileText, title: 'Professional Reports', description: 'Export concise test evidence and summaries for QA, operations, and management.' },
  { icon: Rocket, title: 'Fast Setup', description: 'Start your first campaigns in minutes with a lightweight onboarding flow.' },
]

export default function Features() {
  return (
    <section id="story" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="reveal text-center mb-16 space-y-4">
          <p className="section-label">FEATURES & BENEFITS</p>
          <h2 className="heading-lg max-w-2xl mx-auto dark:text-gray-100">
            Everything you need for professional telecom test automation
          </h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            From device connection to report export, MOBIQ brings essential telecom execution tools 
            into one clear and structured workspace.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="text-center space-y-4 p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-accent/10 dark:bg-[#8BADB9]/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-accent dark:text-[#8BADB9]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary dark:text-gray-100 mb-2">{feature.title}</h3>
                <p className="text-sm text-muted dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

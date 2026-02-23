import { Smartphone, Workflow, PlayCircle, FileText } from 'lucide-react'
import Container from '../ui/Container'

const steps = [
  {
    step: '01',
    title: 'Connect Devices',
    description: 'Plug Android phones, enable ADB, and confirm live status in MOBIQ.',
    icon: Smartphone,
  },
  {
    step: '02',
    title: 'Choose Modules',
    description: 'Pick ready telecom checks and combine actions for your campaign scope.',
    icon: Workflow,
  },
  {
    step: '03',
    title: 'Run Campaign',
    description: 'Execute workflows in sequence with clear progress and control.',
    icon: PlayCircle,
  },
  {
    step: '04',
    title: 'Analyze & Export',
    description: 'Review outcomes and export concise evidence for QA and operations.',
    icon: FileText,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="reveal text-center mb-16 space-y-4">
          <p className="section-label">HOW IT WORKS</p>
          <h2 className="heading-lg max-w-2xl mx-auto dark:text-gray-100">
            Get started in four simple steps
          </h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            From setup to delivery, MOBIQ is designed for fast execution and clear outcomes.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 space-y-4 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-muted dark:text-gray-400">{item.step}</span>
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-muted dark:text-gray-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary dark:text-gray-100">{item.title}</h3>
              <p className="text-sm text-muted dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="reveal text-center mt-8 text-sm text-muted dark:text-gray-400">
          Average setup time: less than 5 minutes
        </p>
      </Container>
    </section>
  )
}

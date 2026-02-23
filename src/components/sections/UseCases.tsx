import { Smartphone, Workflow, FileText, ShieldCheck } from 'lucide-react'
import Container from '../ui/Container'

const useCases = [
  {
    title: 'RF Engineers',
    description: 'Drive test execution and network validation with structured evidence.',
    bullets: [
      'Real-time device status monitoring',
      'Workflow-based campaign control',
      'Clear traceability by run',
    ],
    icon: Smartphone,
  },
  {
    title: 'Telecom Operations',
    description: 'Stabilize field and lab operations through one reliable control center.',
    bullets: [
      'Standardized execution playbooks',
      'Faster troubleshooting loops',
      'Consistent run history visibility',
      'Cross-team campaign coordination',
    ],
    icon: Workflow,
  },
  {
    title: 'QA Teams',
    description: 'Increase release confidence with consistent checks and exportable proof.',
    bullets: [
      'Reusable validation scenarios',
      'Execution outcome tracking',
      'Issue reproduction support',
      'Report-ready evidence export',
    ],
    icon: FileText,
  },
  {
    title: 'Device Programs',
    description: 'Support device certification and onboarding with repeatable telecom tests.',
    bullets: [
      'Multi-device test coverage',
      'Stable execution guardrails',
      'Rapid campaign rollout',
      'Operational visibility for stakeholders',
    ],
    icon: ShieldCheck,
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="reveal text-center mb-16 space-y-4">
          <p className="section-label">USE CASES</p>
          <h2 className="heading-lg max-w-2xl mx-auto dark:text-gray-100">
            Built for telecom professionals
          </h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            Whether you are operating, validating, or scaling campaigns, MOBIQ adapts to your workflow.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 space-y-4 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center">
                  <useCase.icon className="w-5 h-5 text-primary dark:text-gray-100" />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-gray-100">{useCase.title}</h3>
              </div>
              <p className="text-sm text-muted dark:text-gray-400 leading-relaxed">{useCase.description}</p>
              <ul className="space-y-2 pt-2">
                {useCase.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="text-sm text-muted dark:text-gray-400 flex items-start gap-2">
                    <span className="text-primary dark:text-gray-100 mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

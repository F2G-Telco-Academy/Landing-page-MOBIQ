import Container from '../ui/Container'

const faqs = [
  {
    q: 'How quickly can a team start using MOBIQ?',
    a: 'Connect devices, run a module, build and launch a workflow.',
  },
  {
    q: 'Does MOBIQ work for both lab and field validation?',
    a: 'Yes. It supports repeatable QA and day-to-day telecom operations in both environments.',
  },
  {
    q: 'How do we prove execution quality to stakeholders?',
    a: 'Runs keep status and timeline data for quick reviews. Export professional reports with concise evidence.',
  },
  {
    q: 'What devices are supported?',
    a: 'MOBIQ works with Android devices via ADB. Multi-device orchestration allows you to control multiple phones simultaneously.',
  },
  {
    q: 'Can we customize workflows?',
    a: 'Yes. Build custom workflows by chaining modules together with visual logic. No heavy scripting required.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="reveal text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <p className="section-label">FAQ</p>
          <h2 className="heading-lg dark:text-gray-100">
            Frequently Asked Questions
          </h2>
          <p className="text-body dark:text-gray-300">
            Need help? <a href="#request-demo" className="text-accent dark:text-[#8BADB9] hover:underline">Contact us</a>
          </p>
        </div>

        <div className="reveal-children max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 group"
            >
              <summary className="cursor-pointer font-semibold text-primary dark:text-gray-100 flex justify-between items-center list-none">
                {faq.q}
                <span className="text-muted dark:text-gray-400 transition-transform group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <p className="mt-4 text-muted dark:text-gray-400 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

import { useState } from 'react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import Accordion from '../ui/Accordion.jsx'
import { useEnquireModal } from '../../context/EnquireModalContext.jsx'

const TABS = {
  'About the Course': [
    {
      question: 'What types of corporate training programs does Accredian offer?',
      answer:
        'We offer certificate, executive, and post-graduate certificate programs across technology, leadership, and domain-specific tracks, all customizable to your organization’s goals.',
    },
    {
      question: 'What domain specializations are available?',
      answer:
        'Programs span Product & Innovation, Gen-AI, Leadership, Tech & Data, Operations, Digital Enterprise, and Fintech, with more domains added based on partner needs.',
    },
  ],
  'About the Delivery': [
    {
      question: 'Is training delivered online, offline, or both?',
      answer:
        'Both. Programs can be delivered fully online, in-person, or as a hybrid mix depending on your team’s location and preferences.',
    },
    {
      question: 'Do you support distributed teams across time zones?',
      answer:
        'Yes, live sessions and mentor support are scheduled to accommodate teams spread across multiple regions.',
    },
    {
      question: 'What does the mentorship model look like?',
      answer:
        'Learners get access to 1:1 mentorship from industry practitioners throughout the cohort, alongside structured live sessions.',
    },
  ],
  Miscellaneous: [
    {
      question: 'How is program success measured?',
      answer:
        'We track completion rates, engagement scores, and business-impact metrics, all available through a live reporting dashboard.',
    },
    {
      question: 'Can we get a custom quote for our team size?',
      answer:
        'Yes, use the Enquire Now button anywhere on this page and our team will get back to you with a tailored proposal.',
    },
  ],
}

const TAB_NAMES = Object.keys(TABS)

export default function Faqs() {
  const [activeTab, setActiveTab] = useState(TAB_NAMES[0])
  const { open } = useEnquireModal()

  return (
    <section id="faqs" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col">
            {TAB_NAMES.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-brand-50 text-brand-600'
                    : 'text-ink-600 hover:bg-brand-50 hover:text-brand-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <Accordion items={TABS[activeTab]} />
        </div>

        <div className="mt-10 text-center">
          <Button type="button" onClick={open}>
            Enquire Now
          </Button>
        </div>
      </Container>
    </section>
  )
}

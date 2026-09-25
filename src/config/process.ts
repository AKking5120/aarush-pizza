export type ProcessStep = {
  step: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Contact Us',
    description:
      'Reach out via Phone or WhatsApp with your oven issue details.',
  },
  {
    step: '02',
    title: 'Explain the Problem',
    description:
      'Describe the fault (heating issue, burner fault, gas leak suspicion).',
  },
  {
    step: '03',
    title: 'Inspection & Diagnosis',
    description:
      'Our technician inspects the system to pinpoint the cause.',
  },
  {
    step: '04',
    title: 'Repair / Part Replacement',
    description:
      'Repair executed using compatible spare parts where needed.',
  },
  {
    step: '05',
    title: 'Testing & Handover',
    description:
      'Operational combustion and heat test before completion.',
  },
]

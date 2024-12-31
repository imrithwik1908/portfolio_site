'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    period: '2020 - Present',
    description: 'Led a team of developers in creating responsive web applications using React and Next.js.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Innovative Solutions',
    period: '2018 - 2020',
    description: 'Developed and maintained full-stack applications using Node.js, Express, and React.',
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Inc',
    period: '2016 - 2018',
    description: 'Assisted in the development of web applications and gained experience in various technologies.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-700 dark:text-gray-200">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


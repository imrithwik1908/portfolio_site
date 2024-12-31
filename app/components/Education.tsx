'use client'

import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Tech University',
    period: '2014 - 2016',
    description: 'Focused on advanced algorithms, machine learning, and software engineering principles.',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'State University',
    period: '2010 - 2014',
    description: 'Studied fundamental computer science concepts, data structures, and programming languages.',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.school}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.period}</p>
              <p className="text-gray-700 dark:text-gray-200">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


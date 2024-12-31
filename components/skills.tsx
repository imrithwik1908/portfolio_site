'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Server, Cpu } from 'lucide-react'

const skillCategories = [
  {
    name: 'Machine Learning',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost'],
  },
  {
    name: 'Data Science',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn'],
  },
  {
    name: 'Backend Development',
    icon: Server,
    skills: ['Python', 'Node.js', 'Django', 'Flask', 'Express'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cpu,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-card rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 mr-3 text-primary" />
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


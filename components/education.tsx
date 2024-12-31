'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { School, Calendar, Award, BookOpen } from 'lucide-react'

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    school: 'Indian Institute of Information Technology, Dharwad',
    period: 'Dec 2021 - May 2025',
    description: 'CGPA: 8.9',
    courses: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Database Management Systems',
      'Cloud Computing',
      'Machine Learning',
      'Artificial Intelligence',
    ],
    achievements: [
      'Dean\'s List for Academic Excellence',
      'Technical Lead of College Coding Club',
      'Winner of Inter-College Hackathon 2023'
    ]
  },
  {
    degree: '12th Grade',
    school: 'Narayana College, Hyderabad',
    period: 'Jun 2019 - May 2021',
    description: 'Percentage: 98%',
    achievements: [
      'School Topper in Computer Science',
      'Perfect Score in Mathematics'
    ]
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </motion.div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-primary/5 border-b border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <School className="h-5 w-5 text-primary" />
                        {edu.degree}
                      </CardTitle>
                      <p className="text-primary mt-2 font-medium">{edu.school}</p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-5 w-5 text-primary" />
                    <p className="font-semibold text-lg">{edu.description}</p>
                  </div>
                  
                  {edu.achievements && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="text-muted-foreground"
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.courses && (
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Relevant Coursework
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {edu.courses.map((course, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            className="text-sm text-muted-foreground bg-secondary/20 rounded-md px-3 py-1"
                          >
                            {course}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, Brain, Heart, Users } from 'lucide-react'

const FloatingElement = ({ children, x, y, duration }) => (
  <motion.div
    initial={{ x: 0, y: 0 }}
    animate={{
      x: [0, x, 0],
      y: [0, y, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: duration,
      ease: "easeInOut",
    }}
    className="absolute"
  >
    {children}
  </motion.div>
)

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10">
    <svg width="100%" height="100%">
      <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1" fill="#e5e7eb" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  </div>
)

const AnimatedText = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

const StatCard = ({ icon: Icon, value, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg text-center"
  >
    <Icon className="mx-auto mb-2 h-8 w-8 text-primary" />
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-bold"
    >
      {value}
    </motion.h3>
    <p className="text-gray-600">{label}</p>
  </motion.div>
)

const testimonials = [
  { name: "Alex Johnson", text: "ReproEdu changed my understanding of reproductive health. Highly recommended!" },
  { name: "Samantha Lee", text: "The course content is comprehensive and easy to understand. Great learning experience!" },
  { name: "Michael Chen", text: "I feel much more confident discussing reproductive health topics after taking this course." },
]

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg italic mb-4">"{testimonials[currentIndex].text}"</p>
        <p className="font-bold">- {testimonials[currentIndex].name}</p>
      </motion.div>
    </div>
  )
}

const FloatingActionButton = () => (
  <motion.div
    className="fixed bottom-8 right-8"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
  >
    <Button asChild className="rounded-full w-16 h-16">
      <Link href="/course">
        <BookOpen className="h-6 w-6" />
      </Link>
    </Button>
  </motion.div>
)

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <AnimatedBackground />
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <FloatingElement x={20} y={-30} duration={4}>
            <Heart className="text-red-500 h-12 w-12 opacity-50" />
          </FloatingElement>
          <FloatingElement x={-30} y={40} duration={5}>
            <Brain className="text-blue-500 h-16 w-16 opacity-50" />
          </FloatingElement>
          <FloatingElement x={40} y={20} duration={6}>
            <Users className="text-green-500 h-14 w-14 opacity-50" />
          </FloatingElement>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <AnimatedText>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Understanding Human Reproduction
                </h1>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore the intricacies of human reproductive biology and sexual health with our comprehensive course.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.4}>
                <div className="space-x-4">
                  <Button asChild>
                    <Link href="/course">
                      Take Full Course <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/test">
                      Take a Test <Award className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedText>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose ReproEdu?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard icon={BookOpen} value="50+" label="Comprehensive Lessons" />
              <StatCard icon={Users} value="10,000+" label="Students Educated" />
              <StatCard icon={Award} value="98%" label="Satisfaction Rate" />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8">What Our Students Say</h2>
            <TestimonialCarousel />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ReproEdu. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
      <FloatingActionButton />
    </div>
  )
}


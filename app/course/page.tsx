import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dna, Heart, Brain, Baby, Microscope, Pill, Dumbbell, Leaf } from 'lucide-react'

const courseModules = [
  {
    title: "Reproductive Anatomy",
    description: "Explore the structure and function of male and female reproductive organs.",
    icon: Dna,
    href: "/course/reproductive-anatomy"
  },
  {
    title: "Hormones and the Reproductive Cycle",
    description: "Understand the role of hormones in reproduction and the menstrual cycle.",
    icon: Heart,
    href: "/course/hormones-cycle"
  },
  {
    title: "Gametogenesis",
    description: "Learn about the formation of sperm and egg cells through meiosis.",
    icon: Microscope,
    href: "/course/gametogenesis"
  },
  {
    title: "Conception and Early Development",
    description: "Explore fertilization, implantation, and early embryonic development.",
    icon: Baby,
    href: "/course/conception-development"
  },
  {
    title: "Pregnancy and Fetal Development",
    description: "Understand the stages of pregnancy and fetal growth.",
    icon: Baby,
    href: "/course/pregnancy-fetal-development"
  },
  {
    title: "Reproductive Health and Disorders",
    description: "Learn about common reproductive health issues and their management.",
    icon: Brain,
    href: "/course/reproductive-health"
  },
  {
    title: "Contraception and Family Planning",
    description: "Explore various contraceptive methods and family planning strategies.",
    icon: Pill,
    href: "/course/contraception-family-planning"
  },
  {
    title: "Fertility and Assisted Reproductive Technologies",
    description: "Understand fertility issues and modern assisted reproductive techniques.",
    icon: Microscope,
    href: "/course/fertility-art"
  },
  {
    title: "Sexual Health and Responsibility",
    description: "Discover the importance of sexual health, consent, and safe practices.",
    icon: Heart,
    href: "/course/sexual-health"
  },
  {
    title: "Nutrition and Reproductive Health",
    description: "Learn about the impact of diet on reproductive function and fertility.",
    icon: Leaf,
    href: "/course/nutrition-reproductive-health"
  },
  {
    title: "Exercise and Reproductive Health",
    description: "Explore the effects of physical activity on reproductive health.",
    icon: Dumbbell,
    href: "/course/exercise-reproductive-health"
  },
  {
    title: "Environmental Factors and Reproduction",
    description: "Understand how environmental factors can affect reproductive health.",
    icon: Leaf,
    href: "/course/environment-reproduction"
  },
]

export default function CourseOverview() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Human Reproduction Education Course</h1>
      <p className="text-lg mb-8">Welcome to our comprehensive course on human reproductive biology. This course is designed to provide you with a deep understanding of all aspects of human reproduction, from basic anatomy to complex physiological processes and modern medical technologies. Choose a module to begin your learning journey.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseModules.map((module, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <module.icon className="mr-2 h-6 w-6" />
                {module.title}
              </CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={module.href}>Start Module</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BadgeIcon as Certificate, Brain, Users } from 'lucide-react'

const features = [
  {
    title: "Comprehensive Curriculum",
    description: "Our course covers all aspects of reproductive biology, from anatomy to complex physiological processes.",
    icon: BookOpen,
  },
  {
    title: "Interactive Learning",
    description: "Engage with 3D models, animations, and quizzes to enhance your understanding of reproductive biology.",
    icon: Brain,
  },
  {
    title: "Expert-Verified Content",
    description: "All course material is reviewed and approved by leading reproductive biology experts.",
    icon: Certificate,
  },
  {
    title: "Community Support",
    description: "Join our community of learners and experts to discuss topics and get your questions answered.",
    icon: Users,
  },
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <feature.icon className="mr-2 h-6 w-6" />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


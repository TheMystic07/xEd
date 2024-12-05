import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About ReproEdu</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            ReproEdu is dedicated to providing comprehensive, accurate, and accessible education on reproductive biology. 
            We believe that understanding our bodies is fundamental to making informed decisions about sexual and reproductive health.
          </p>
          <p className="mb-4">
            Founded in 2024 by a team of reproductive biologists, educators, and technology experts, ReproEdu aims to bridge the gap 
            between scientific knowledge and public understanding. We strive to create an inclusive learning environment that respects 
            diverse perspectives while maintaining scientific accuracy.
          </p>
          <p>
            Our team collaborates with leading researchers, healthcare professionals, and educators to ensure that our content 
            is up-to-date, comprehensive, and aligned with the latest scientific findings. We are committed to continually improving 
            our platform to meet the evolving needs of our learners and to address the most pressing questions in reproductive health education.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}


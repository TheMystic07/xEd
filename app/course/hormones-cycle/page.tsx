'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function HormonesAndCycle() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Hormones and the Reproductive Cycle</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="hormones">Key Hormones</TabsTrigger>
          <TabsTrigger value="menstrual-cycle">Menstrual Cycle</TabsTrigger>
          <TabsTrigger value="male-cycle">Male Reproductive Cycle</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Reproductive Hormones and Cycles</CardTitle>
              <CardDescription>Understanding the role of hormones in reproduction</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Hormones play a crucial role in regulating the reproductive systems of both males and females. They control the development of secondary sexual characteristics, the production of gametes, and the cyclical changes in the reproductive organs.</p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Endocrine System:</strong> The network of glands that produce and secrete hormones into the bloodstream.</li>
                <li><strong>Feedback Loops:</strong> Mechanisms by which hormone levels are regulated in the body.</li>
                <li><strong>Reproductive Cycles:</strong> Periodic changes in hormone levels and reproductive organs.</li>
                <li><strong>Hypothalamic-Pituitary-Gonadal Axis:</strong> The primary system regulating reproduction.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hormones">
          <Card>
            <CardHeader>
              <CardTitle>Key Reproductive Hormones</CardTitle>
              <CardDescription>Essential hormones in the reproductive system</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <strong>Gonadotropin-Releasing Hormone (GnRH):</strong>
                  <p>Released by the hypothalamus, it stimulates the pituitary gland to produce FSH and LH.</p>
                </li>
                <li>
                  <strong>Follicle-Stimulating Hormone (FSH):</strong>
                  <p>Stimulates the growth of ovarian follicles in females and sperm production in males.</p>
                </li>
                <li>
                  <strong>Luteinizing Hormone (LH):</strong>
                  <p>Triggers ovulation in females and stimulates testosterone production in males.</p>
                </li>
                <li>
                  <strong>Estrogen:</strong>
                  <p>Primary female sex hormone, responsible for secondary sexual characteristics and regulation of the menstrual cycle.</p>
                </li>
                <li>
                  <strong>Progesterone:</strong>
                  <p>Prepares the uterus for pregnancy and maintains pregnancy if fertilization occurs.</p>
                </li>
                <li>
                  <strong>Testosterone:</strong>
                  <p>Primary male sex hormone, responsible for male secondary sexual characteristics and sperm production.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="menstrual-cycle">
          <Card>
            <CardHeader>
              <CardTitle>The Menstrual Cycle</CardTitle>
              <CardDescription>Phases and hormonal changes in the female reproductive cycle</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Phases of the Menstrual Cycle:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Menstrual Phase (Days 1-5):</strong> Shedding of the uterine lining.</li>
                <li><strong>Follicular Phase (Days 1-13):</strong> Growth of ovarian follicles, estrogen levels rise.</li>
                <li><strong>Ovulation (Day 14):</strong> Release of the egg from the ovary.</li>
                <li><strong>Luteal Phase (Days 15-28):</strong> Preparation of the uterus for potential pregnancy, progesterone levels rise.</li>
              </ol>
              <Image src="/placeholder.svg" alt="Menstrual Cycle Diagram" width={600} height={400} className="mt-4 rounded-lg" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="male-cycle">
          <Card>
            <CardHeader>
              <CardTitle>Male Reproductive Cycle</CardTitle>
              <CardDescription>Hormonal regulation in male reproduction</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Unlike the female menstrual cycle, the male reproductive system does not have a distinct cyclic pattern. However, it is regulated by hormones that maintain continuous sperm production.</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Components:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Hypothalamic-Pituitary-Testicular Axis:</strong> Regulates male reproductive function.</li>
                <li><strong>Spermatogenesis:</strong> Continuous process of sperm production.</li>
                <li><strong>Testosterone Production:</strong> Regulated by LH, crucial for male reproductive function.</li>
              </ul>
              <Image src="/placeholder.svg" alt="Male Reproductive Hormones Diagram" width={600} height={400} className="mt-4 rounded-lg" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


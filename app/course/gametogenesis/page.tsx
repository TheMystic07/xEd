'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function Gametogenesis() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gametogenesis</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="spermatogenesis">Spermatogenesis</TabsTrigger>
          <TabsTrigger value="oogenesis">Oogenesis</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Gametogenesis</CardTitle>
              <CardDescription>The process of forming mature haploid gametes</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Gametogenesis is the biological process by which diploid or haploid precursor cells undergo cell division and differentiation to form mature haploid gametes. In humans, the male gametes are sperm cells (spermatozoa) and the female gametes are egg cells (ova).</p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Concepts in Gametogenesis:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Meiosis:</strong> The type of cell division that reduces the number of chromosomes in a cell by half. This is crucial for maintaining the correct number of chromosomes when gametes fuse during fertilization.</li>
                <li><strong>Haploid vs. Diploid:</strong> Gametes are haploid (containing a single set of chromosomes), while most other body cells are diploid (containing two sets of chromosomes).</li>
                <li><strong>Spermatogenesis:</strong> The process of male gamete formation, which occurs in the testes.</li>
                <li><strong>Oogenesis:</strong> The process of female gamete formation, which occurs in the ovaries.</li>
                <li><strong>Germ Cells:</strong> The precursor cells that will undergo gametogenesis to form gametes.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Importance of Gametogenesis:</h3>
              <p>Gametogenesis is crucial for sexual reproduction and genetic diversity. It allows for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>The formation of genetically unique individuals through the combination of genetic material from two parents.</li>
                <li>The maintenance of the species' chromosome number across generations.</li>
                <li>The potential for genetic variation and evolution through processes like crossing over during meiosis.</li>
              </ul>

              <p className="mt-4">In the following sections, we'll explore spermatogenesis and oogenesis in detail, comparing and contrasting these processes to gain a comprehensive understanding of gamete formation in humans.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="spermatogenesis">
          <Card>
            <CardHeader>
              <CardTitle>Spermatogenesis</CardTitle>
              <CardDescription>The process of male gamete formation</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Spermatogenesis is the process by which male gametes, or sperm cells, are produced in the testes. This process begins at puberty and continues throughout most of a man's life.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Stages of Spermatogenesis:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Multiplication Phase:</strong> Spermatogonia (diploid stem cells) undergo mitotic divisions to increase their numbers.</li>
                <li><strong>Growth Phase:</strong> Spermatogonia grow and develop into primary spermatocytes.</li>
                <li><strong>Maturation Phase:</strong> Primary spermatocytes undergo meiosis I to form secondary spermatocytes, which then undergo meiosis II to form haploid spermatids.</li>
                <li><strong>Differentiation Phase:</strong> Spermatids transform into mature spermatozoa through a process called spermiogenesis.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-4 mb-2">Key Features of Spermatogenesis:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Continuous Process:</strong> Spermatogenesis occurs continuously from puberty onwards.</li>
                <li><strong>Temperature Sensitivity:</strong> The process requires a temperature slightly lower than body temperature, which is why the testes are located outside the body cavity.</li>
                <li><strong>High Production Rate:</strong> Millions of sperm are produced daily.</li>
                <li><strong>Hormonal Regulation:</strong> The process is regulated by hormones such as testosterone, FSH, and LH.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Structure of a Mature Sperm:</h3>
              <p>A mature sperm consists of:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Head:</strong> Contains the nucleus with genetic material and the acrosome with enzymes for egg penetration.</li>
                <li><strong>Midpiece:</strong> Rich in mitochondria for energy production.</li>
                <li><strong>Tail:</strong> Provides motility for the sperm to swim towards the egg.</li>
              </ul>

              <div className="mt-4">
                <Image
                  src="/placeholder.svg"
                  alt="Stages of Spermatogenesis"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2">Figure: Stages of Spermatogenesis</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="oogenesis">
          <Card>
            <CardHeader>
              <CardTitle>Oogenesis</CardTitle>
              <CardDescription>The process of female gamete formation</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Oogenesis is the process by which female gametes, or egg cells (ova), are produced in the ovaries. Unlike spermatogenesis, oogenesis begins before birth and is characterized by long periods of dormancy.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Stages of Oogenesis:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Multiplication Phase:</strong> Occurs before birth. Oogonia (diploid stem cells) undergo mitotic divisions to increase their numbers.</li>
                <li><strong>Growth Phase:</strong> Oogonia develop into primary oocytes, which begin meiosis I but arrest in prophase I before birth.</li>
                <li><strong>Maturation Phase:</strong> Begins at puberty. Each month, a primary oocyte completes meiosis I to form a secondary oocyte and a polar body. The secondary oocyte begins meiosis II but arrests in metaphase II.</li>
                <li><strong>Completion of Meiosis:</strong> Meiosis II is only completed if the egg is fertilized by a sperm.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-4 mb-2">Key Features of Oogenesis:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Limited Number:</strong> Females are born with all the oocytes they will ever have, unlike the continuous production in spermatogenesis.</li>
                <li><strong>Cyclic Process:</strong> After puberty, oogenesis occurs in monthly cycles as part of the menstrual cycle.</li>
                <li><strong>Unequal Cell Division:</strong> Meiotic divisions in oogenesis are unequal, producing one large egg cell and smaller polar bodies.</li>
                <li><strong>Hormonal Regulation:</strong> The process is regulated by hormones such as estrogen, FSH, and LH.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Structure of a Mature Egg:</h3>
              <p>A mature egg (ovum) consists of:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Cytoplasm:</strong> Contains nutrients and organelles necessary for early embryonic development.</li>
                <li><strong>Nucleus:</strong> Contains the genetic material.</li>
                <li><strong>Zona Pellucida:</strong> A glycoprotein layer surrounding the egg, important for sperm binding and preventing polyspermy.</li>
                <li><strong>Corona Radiata:</strong> A layer of follicle cells surrounding the zona pellucida.</li>
              </ul>

              <div className="mt-4">
                <Image
                  src="/placeholder.svg"
                  alt="Stages of Oogenesis"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2">Figure: Stages of Oogenesis</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle>Comparison of Spermatogenesis and Oogenesis</CardTitle>
              <CardDescription>Understanding the similarities and differences</CardDescription>
            </CardHeader>
            <CardContent>
              <p>While both spermatogenesis and oogenesis result in the production of haploid gametes, there are several key differences between these processes:</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Comparison Table:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b">Aspect</th>
                      <th className="py-2 px-4 border-b">Spermatogenesis</th>
                      <th className="py-2 px-4 border-b">Oogenesis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">Location</td>
                      <td className="py-2 px-4 border-b">Testes</td>
                      <td className="py-2 px-4 border-b">Ovaries</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Timing</td>
                      <td className="py-2 px-4 border-b">Begins at puberty, continuous throughout life</td>
                      <td className="py-2 px-4 border-b">Begins before birth, cyclic after puberty</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Duration</td>
                      <td className="py-2 px-4 border-b">About 64 days</td>
                      <td className="py-2 px-4 border-b">Years (from fetal life to ovulation)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Number of Gametes</td>
                      <td className="py-2 px-4 border-b">Millions produced daily</td>
                      <td className="py-2 px-4 border-b">One mature egg per month (typically)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Meiotic Divisions</td>
                      <td className="py-2 px-4 border-b">Both divisions completed before release</td>
                      <td className="py-2 px-4 border-b">Second division completed only if fertilized</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Cytokinesis</td>
                      <td className="py-2 px-4 border-b">Equal</td>
                      <td className="py-2 px-4 border-b">Unequal (produces polar bodies)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Resulting Cells</td>
                      <td className="py-2 px-4 border-b">Four functional sperm from one spermatogonium</td>
                      <td className="py-2 px-4 border-b">One functional egg from one oogonium</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-2">Key Similarities:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Both processes involve meiosis to produce haploid gametes.</li>
                <li>Both are regulated by hormones from the hypothalamus and pituitary gland.</li>
                <li>Both processes result in genetic recombination, contributing to genetic diversity.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Evolutionary Perspective:</h3>
              <p>The differences between spermatogenesis and oogenesis reflect different evolutionary strategies:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Spermatogenesis prioritizes quantity, producing many small, motile gametes.</li>
                <li>Oogenesis prioritizes quality, producing fewer but larger gametes with more resources for early embryonic development.</li>
              </ul>

              <p className="mt-4">Understanding these differences is crucial for comprehending various aspects of reproductive biology, including fertility issues, assisted reproductive technologies, and the different challenges faced in male and female reproductive health.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


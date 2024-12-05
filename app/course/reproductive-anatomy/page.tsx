'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Image from 'next/image'

const organSizeData = [
  { name: 'Ovary', female: 3, male: 0 },
  { name: 'Testis', female: 0, male: 4 },
  { name: 'Uterus', female: 7, male: 0 },
  { name: 'Prostate', female: 0, male: 3 },
]

export default function ReproductiveAnatomy() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Reproductive Anatomy</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="female">Female Anatomy</TabsTrigger>
          <TabsTrigger value="male">Male Anatomy</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Reproductive Anatomy</CardTitle>
              <CardDescription>Understanding the basics of human reproductive organs</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Reproductive anatomy refers to the physical structures involved in human reproduction. These structures are different in males and females but work together to enable the creation of new life.</p>
              <p className="mt-4">Key components of the reproductive system include:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Gonads (ovaries in females, testes in males)</li>
                <li>Reproductive tracts</li>
                <li>External genitalia</li>
                <li>Secondary sexual characteristics</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="female">
          <Card>
            <CardHeader>
              <CardTitle>Female Reproductive Anatomy</CardTitle>
              <CardDescription>Exploring the structures of the female reproductive system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Key Structures:</h3>
                  <ul className="list-disc list-inside">
                    <li>Ovaries</li>
                    <li>Fallopian tubes</li>
                    <li>Uterus</li>
                    <li>Cervix</li>
                    <li>Vagina</li>
                    <li>External genitalia (vulva)</li>
                  </ul>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                  <Image
                    src="/placeholder.svg"
                    alt="Female Reproductive System"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <p className="mt-4">The female reproductive system is designed to produce ova (eggs), support fertilization, and nurture a developing fetus during pregnancy.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="male">
          <Card>
            <CardHeader>
              <CardTitle>Male Reproductive Anatomy</CardTitle>
              <CardDescription>Exploring the structures of the male reproductive system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Key Structures:</h3>
                  <ul className="list-disc list-inside">
                    <li>Testes</li>
                    <li>Epididymis</li>
                    <li>Vas deferens</li>
                    <li>Seminal vesicles</li>
                    <li>Prostate gland</li>
                    <li>Penis</li>
                  </ul>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                  <Image
                    src="/placeholder.svg"
                    alt="Male Reproductive System"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <p className="mt-4">The male reproductive system is responsible for producing sperm, testosterone, and delivering sperm during sexual intercourse.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle>Comparing Male and Female Reproductive Organs</CardTitle>
              <CardDescription>Understanding the similarities and differences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">While male and female reproductive systems have distinct structures, they share some functional similarities. The chart below compares the relative sizes of some reproductive organs:</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={organSizeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="female" fill="#8884d8" name="Female" />
                  <Bar dataKey="male" fill="#82ca9d" name="Male" />
                </BarChart>
              </ResponsiveContainer>
              <p className="mt-4">Note: The sizes are relative and not to scale. This chart is for educational purposes to illustrate the presence or absence of certain organs in male and female anatomy.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


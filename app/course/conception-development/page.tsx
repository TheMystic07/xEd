'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function ConceptionAndDevelopment() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Conception and Early Development</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="fertilization">Fertilization</TabsTrigger>
          <TabsTrigger value="implantation">Implantation</TabsTrigger>
          <TabsTrigger value="embryogenesis">Early Embryogenesis</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Conception and Early Development</CardTitle>
              <CardDescription>The journey from fertilization to early embryo</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Conception and early development encompass the fascinating processes that occur from the moment of fertilization through the initial stages of embryonic growth. This module explores the intricate events that lead to the formation of a new human life.</p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Fertilization:</strong> The fusion of sperm and egg to form a zygote.</li>
                <li><strong>Cleavage:</strong> Rapid cell divisions following fertilization.</li>
                <li><strong>Blastocyst Formation:</strong> Development of the early embryonic structure.</li>
                <li><strong>Implantation:</strong> The process by which the embryo attaches to the uterine wall.</li>
                <li><strong>Gastrulation:</strong> Formation of the three germ layers.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add more TabsContent for other tabs */}
      </Tabs>
    </div>
  )
}


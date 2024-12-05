'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function EnvironmentAndReproduction() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Environmental Factors and Reproduction</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="toxins">Environmental Toxins</TabsTrigger>
          <TabsTrigger value="lifestyle">Lifestyle Factors</TabsTrigger>
          <TabsTrigger value="prevention">Preventive Measures</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Environmental Factors and Reproduction</CardTitle>
              <CardDescription>Understanding how the environment affects reproductive health</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Environmental factors can have significant impacts on reproductive health, influencing fertility, pregnancy outcomes, and overall reproductive function. This module explores the relationship between various environmental factors and reproductive health.</p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Environmental Toxins:</strong> Substances in the environment that can affect reproductive health.</li>
                <li><strong>Occupational Hazards:</strong> Workplace factors that may impact reproduction.</li>
                <li><strong>Lifestyle Factors:</strong> How daily habits and choices affect reproductive health.</li>
                <li><strong>Climate Change:</strong> The potential impacts of global environmental changes on reproduction.</li>
                <li><strong>Preventive Measures:</strong> Strategies to minimize environmental impacts on reproductive health.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add more TabsContent for other tabs */}
      </Tabs>
    </div>
  )
}


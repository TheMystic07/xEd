'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function ExerciseAndReproductiveHealth() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Exercise and Reproductive Health</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="fertility">Exercise and Fertility</TabsTrigger>
          <TabsTrigger value="pregnancy">Exercise During Pregnancy</TabsTrigger>
          <TabsTrigger value="postpartum">Postpartum Exercise</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Exercise and Reproductive Health</CardTitle>
              <CardDescription>Understanding the effects of physical activity on reproduction</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Exercise has significant impacts on reproductive health, influencing fertility, pregnancy outcomes, and overall reproductive function. This module explores the relationship between physical activity and various aspects of reproductive health.</p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Exercise and Fertility:</strong> How physical activity affects reproductive function in both men and women.</li>
                <li><strong>Prenatal Exercise:</strong> Safe and beneficial exercises during pregnancy.</li>
                <li><strong>Exercise Intensity:</strong> The effects of different exercise intensities on reproductive health.</li>
                <li><strong>Hormonal Balance:</strong> The relationship between exercise and reproductive hormones.</li>
                <li><strong>Exercise Recommendations:</strong> Guidelines for optimal reproductive health through physical activity.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add more TabsContent for other tabs */}
      </Tabs>
    </div>
  )
}


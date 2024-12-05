'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function NutritionAndReproductiveHealth() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nutrition and Reproductive Health</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="fertility">Nutrition and Fertility</TabsTrigger>
          <TabsTrigger value="pregnancy">Nutrition During Pregnancy</TabsTrigger>
          <TabsTrigger value="postpartum">Postpartum Nutrition</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Nutrition and Reproductive Health</CardTitle>
              <CardDescription>Understanding the impact of diet on reproductive function</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Nutrition plays a crucial role in reproductive health, affecting fertility, pregnancy outcomes, and overall reproductive function. This module explores the relationship between diet and various aspects of reproductive health.</p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Nutritional Impact on Fertility:</strong> How diet affects reproductive function in both men and women.</li>
                <li><strong>Prenatal Nutrition:</strong> Essential nutrients for a healthy pregnancy.</li>
                <li><strong>Weight and Reproduction:</strong> The effects of body weight on fertility and pregnancy.</li>
                <li><strong>Micronutrients:</strong> Key vitamins and minerals for reproductive health.</li>
                <li><strong>Dietary Recommendations:</strong> Guidelines for optimal reproductive health through nutrition.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add more TabsContent for other tabs */}
      </Tabs>
    </div>
  )
}


'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function PregnancyAndFetalDevelopment() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Pregnancy and Fetal Development</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trimesters">Trimesters</TabsTrigger>
          <TabsTrigger value="fetal-growth">Fetal Growth</TabsTrigger>
          <TabsTrigger value="maternal-changes">Maternal Changes</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Pregnancy and Fetal Development</CardTitle>
              <CardDescription>The journey from embryo to newborn</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Pregnancy is a remarkable period of growth and development, lasting approximately 40 weeks from the last menstrual period to childbirth. During this time, a single cell develops into a fully formed human being, while the mother's body undergoes significant changes to support the growing fetus.</p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Trimesters:</strong> The three main stages of pregnancy.</li>
                <li><strong>Fetal Development:</strong> The growth and maturation of the fetus throughout pregnancy.</li>
                <li><strong>Placenta:</strong> The organ that provides nutrients and oxygen to the fetus.</li>
                <li><strong>Maternal Adaptations:</strong> Physical and physiological changes in the mother's body.</li>
                <li><strong>Prenatal Care:</strong> Medical care and monitoring during pregnancy.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add more TabsContent for other tabs */}
      </Tabs>
    </div>
  )
}


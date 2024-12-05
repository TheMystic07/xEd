'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function ContraceptionAndFamilyPlanning() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contraception and Family Planning</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="methods">Contraceptive Methods</TabsTrigger>
          <TabsTrigger value="effectiveness">Effectiveness</TabsTrigger>
          <TabsTrigger value="planning">Family Planning</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Contraception and Family Planning</CardTitle>
              <CardDescription>Understanding birth control and reproductive choices</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contraception and family planning involve methods and strategies to prevent pregnancy and make informed decisions about having children. This module explores various contraceptive options and the principles of family planning.</p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Contraception:</strong> Methods to prevent pregnancy.</li>
                <li><strong>Types of Contraceptives:</strong> Hormonal, barrier, intrauterine, and natural methods.</li>
                <li><strong>Effectiveness:</strong> The ability of a method to prevent pregnancy.</li>
                <li><strong>Family Planning:</strong> Deciding when and how many children to have.</li>
                <li><strong>Reproductive Rights:</strong> The right to make informed choices about reproduction.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add more TabsContent for other tabs */}
      </Tabs>
    </div>
  )
}


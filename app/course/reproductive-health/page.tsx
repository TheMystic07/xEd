'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function ReproductiveHealth() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Reproductive Health and Disorders</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="female-disorders">Female Disorders</TabsTrigger>
          <TabsTrigger value="male-disorders">Male Disorders</TabsTrigger>
          <TabsTrigger value="stis">Sexually Transmitted Infections</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Reproductive Health and Disorders</CardTitle>
              <CardDescription>Understanding common reproductive health issues</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Reproductive health encompasses a wide range of conditions and disorders that can affect the reproductive system. Understanding these issues is crucial for maintaining overall health and well-being.</p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Reproductive Health:</strong> The state of complete physical, mental, and social well-being in all matters relating to the reproductive system.</li>
                <li><strong>Disorders:</strong> Conditions that affect the normal functioning of the reproductive system.</li>
                <li><strong>Sexually Transmitted Infections (STIs):</strong> Infections that are primarily spread through sexual contact.</li>
                <li><strong>Preventive Care:</strong> Regular check-ups and screenings to maintain reproductive health.</li>
                <li><strong>Treatment Options:</strong> Various medical and surgical interventions for reproductive disorders.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add more TabsContent for other tabs */}
      </Tabs>
    </div>
  )
}


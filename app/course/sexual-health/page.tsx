'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function SexualHealth() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sexual Health and Responsibility</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="safe-practices">Safe Practices</TabsTrigger>
          <TabsTrigger value="consent">Consent and Communication</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Sexual Health and Responsibility</CardTitle>
              <CardDescription>Understanding the importance of sexual well-being and ethical behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Sexual health is a crucial aspect of overall well-being, encompassing physical, emotional, mental, and social aspects of sexuality. This module explores the importance of responsible sexual behavior, consent, and maintaining good sexual health.</p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Sexual Health:</strong> A state of physical, emotional, mental, and social well-being in relation to sexuality.</li>
                <li><strong>Safe Sex Practices:</strong> Methods to reduce the risk of sexually transmitted infections and unintended pregnancy.</li>
                <li><strong>Consent:</strong> Voluntary agreement to engage in sexual activity.</li>
                <li><strong>Communication:</strong> Open and honest dialogue about sexual health and preferences.</li>
                <li><strong>Resources:</strong> Access to information, healthcare, and support services related to sexual health.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add more TabsContent for other tabs */}
      </Tabs>
    </div>
  )
}


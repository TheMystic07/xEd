'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function FertilityAndART() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fertility and Assisted Reproductive Technologies</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="infertility">Infertility</TabsTrigger>
          <TabsTrigger value="art-methods">ART Methods</TabsTrigger>
          <TabsTrigger value="ethical-issues">Ethical Considerations</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Introduction to Fertility and ART</CardTitle>
              <CardDescription>Understanding fertility issues and modern solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Fertility and Assisted Reproductive Technologies (ART) are crucial aspects of modern reproductive medicine. This module explores the causes of infertility and the various techniques used to assist individuals and couples in achieving pregnancy.</p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Concepts:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Fertility:</strong> The ability to conceive and carry a pregnancy to term.</li>
                <li><strong>Infertility:</strong> The inability to conceive after one year of regular, unprotected intercourse.</li>
                <li><strong>Assisted Reproductive Technologies (ART):</strong> Medical procedures used to address infertility.</li>
                <li><strong>In Vitro Fertilization (IVF):</strong> A common ART procedure where fertilization occurs outside the body.</li>
                <li><strong>Gamete and Embryo Donation:</strong> The use of donated eggs, sperm, or embryos in fertility treatments.</li>
                <li><strong>Ethical Considerations:</strong> Moral and social implications of ART procedures.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add more TabsContent for other tabs */}
      </Tabs>
    </div>
  )
}


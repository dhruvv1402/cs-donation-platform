"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export function DonationForm({ projectId, projectColor }: { projectId: string; projectColor: string }) {
  const [donationAmount, setDonationAmount] = useState<number | string>(25)
  const [isRecurring, setIsRecurring] = useState(false)

  const handlePresetAmount = (amount: number) => {
    setDonationAmount(amount)
  }

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === "" || /^\d+$/.test(value)) {
      setDonationAmount(value)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with Stripe or another payment processor
    alert(`Processing ${isRecurring ? "monthly" : "one-time"} donation of $${donationAmount} for project ${projectId}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Tabs defaultValue="one-time" onValueChange={(value) => setIsRecurring(value === "monthly")}>
        <TabsList className="grid w-full grid-cols-2" style={{ backgroundColor: `${projectColor}20` }}>
          <TabsTrigger
            value="one-time"
            className="data-[state=active]:bg-opacity-100 data-[state=active]:text-white transition-colors"
            style={{ backgroundColor: projectColor, opacity: 0, color: "white" }}
          >
            One-time
          </TabsTrigger>
          <TabsTrigger
            value="monthly"
            className="data-[state=active]:bg-opacity-100 data-[state=active]:text-white transition-colors"
            style={{ backgroundColor: projectColor, opacity: 0, color: "white" }}
          >
            Monthly
          </TabsTrigger>
        </TabsList>
        <TabsContent value="one-time" className="space-y-4 animate-fade-in">
          <div className="space-y-2">
            <Label>Donation Amount</Label>
            <div className="grid grid-cols-3 gap-2">
              {[10, 25, 50].map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant="outline"
                  className={cn("transition-all", donationAmount === amount && "border-2 font-bold")}
                  style={{
                    borderColor: donationAmount === amount ? projectColor : undefined,
                    color: donationAmount === amount ? projectColor : undefined,
                    backgroundColor: donationAmount === amount ? `${projectColor}10` : undefined,
                  }}
                  onClick={() => handlePresetAmount(amount)}
                >
                  ${amount}
                </Button>
              ))}
            </div>
            <div className="relative mt-2">
              <Input
                type="text"
                value={donationAmount}
                onChange={handleCustomAmount}
                className="pl-6 transition-all focus-visible:ring-2"
                style={{
                  focusVisible: { ringColor: projectColor },
                  borderColor:
                    typeof donationAmount === "string" || ![10, 25, 50].includes(donationAmount as number)
                      ? projectColor
                      : undefined,
                }}
                placeholder="Custom amount"
              />
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="monthly" className="space-y-4 animate-fade-in">
          <div className="space-y-2">
            <Label>Monthly Donation</Label>
            <RadioGroup defaultValue="25">
              {[10, 25, 50, 100].map((amount) => (
                <div key={amount} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={amount.toString()}
                    id={`amount-${amount}`}
                    onClick={() => handlePresetAmount(amount)}
                    className="text-white border-elegant-highlight focus:ring-elegant-teal"
                  />
                  <Label htmlFor={`amount-${amount}`}>${amount} per month</Label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="amount-custom" />
                <Label htmlFor="amount-custom">Custom amount</Label>
              </div>
            </RadioGroup>
            <div className="relative mt-2">
              <Input
                type="text"
                value={
                  typeof donationAmount === "string" &&
                  donationAmount !== "10" &&
                  donationAmount !== "25" &&
                  donationAmount !== "50" &&
                  donationAmount !== "100"
                    ? donationAmount
                    : ""
                }
                onChange={handleCustomAmount}
                className="pl-6 transition-all focus-visible:ring-2"
                style={{ focusVisible: { ringColor: projectColor } }}
                placeholder="Custom amount"
              />
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Button
        type="submit"
        className="w-full transition-transform hover:scale-105"
        style={{ backgroundColor: projectColor }}
      >
        <CreditCard className="mr-2 h-4 w-4 animate-pulse-slow" />
        {isRecurring ? "Donate Monthly" : "Donate Now"}
      </Button>
    </form>
  )
}


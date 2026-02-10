
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Camera } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="max-w-3xl space-y-6">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                    Manage your account settings and personal information.
                </p>
            </div>
            <Separator />

            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your photo and personal details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="flex items-center gap-6">
                        <div className="relative group cursor-pointer">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="/avatars/01.png" />
                                <AvatarFallback className="text-2xl">JD</AvatarFallback>
                            </Avatar>
                            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Camera className="text-white h-6 w-6" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-medium">Profile Picture</h4>
                            <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 800K</p>
                            <Button variant="outline" size="sm" className="mt-2">Upload New</Button>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input id="firstName" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input id="lastName" defaultValue="Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" defaultValue="john.doe@example.com" disabled />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone number</Label>
                            <Input id="phone" defaultValue="+1 (555) 000-0000" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Company Details</CardTitle>
                    <CardDescription>Professional information for invoicing.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" defaultValue="Acme Corp" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="vat">VAT / Tax ID</Label>
                        <Input id="vat" defaultValue="US-123456789" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button>Update Company Info</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

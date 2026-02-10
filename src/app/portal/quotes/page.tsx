
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus } from "lucide-react";

export default function QuotesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tight">Quote Requests</h1>
                    <p className="text-muted-foreground">Request and manage your logistics and sourcing quotes.</p>
                </div>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    New Quote Request
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Open Requests</CardTitle>
                    <CardDescription>You currently have 3 pending quote requests being reviewed by our team.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="bg-muted rounded-full p-4 mb-4">
                        <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">No active quotes found</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto mt-2">
                        Start by creating a new quote request to get shipping or sourcing estimates from our global network.
                    </p>
                    <Button variant="outline" className="mt-6">Learn more about our pricing</Button>
                </CardContent>
            </Card>
        </div>
    );
}

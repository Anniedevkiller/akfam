
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Search, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrackingPage() {
    const [trackingId, setTrackingId] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResult(null);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            if (trackingId.length > 5) {
                setResult({
                    id: trackingId,
                    status: "In Transit",
                    location: "Customs Clearance, Dubai (DXB)",
                    timestamp: "Oct 24, 2025 - 09:42 AM"
                });
            }
        }, 1500);
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Track a Shipment</h1>
                <p className="text-muted-foreground">Enter your tracking ID to get real-time status updates.</p>
            </div>

            <Card>
                <form onSubmit={handleSearch}>
                    <CardHeader>
                        <CardTitle>Shipment Search</CardTitle>
                        <CardDescription>
                            Enter the unique tracking ID provided in your invoice.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="trackingId">Tracking ID</Label>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="trackingId"
                                    placeholder="TRK-XXXXXX"
                                    className="pl-9"
                                    value={trackingId}
                                    onChange={(e) => setTrackingId(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" disabled={isLoading} className="w-full">
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {isLoading ? "Locating Shipment..." : "Track Shipment"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>

            <AnimatePresence>
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        <Card className="border-emerald-500/50 bg-emerald-50/50">
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center text-emerald-800">
                                    <span>Shipment Found</span>
                                    <span className="text-sm font-normal bg-emerald-200 text-emerald-900 px-2 py-1 rounded">{result.status}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center border-b border-emerald-200 pb-4">
                                    <span className="text-sm text-emerald-700">Tracking ID</span>
                                    <span className="font-mono font-medium">{result.id}</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-emerald-900">Current Location</p>
                                    <p className="text-lg font-bold text-emerald-800">{result.location}</p>
                                    <p className="text-xs text-emerald-600">{result.timestamp}</p>
                                </div>

                                {/* Mock Timeline Visual */}
                                <div className="relative pt-6 pb-2">
                                    <div className="h-2 bg-emerald-200 rounded-full w-full">
                                        <motion.div
                                            className="h-2 bg-emerald-500 rounded-full"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "70%" }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

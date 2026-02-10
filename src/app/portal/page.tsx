
"use client";

import { portalStats, recentShipments } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PortalDashboard() {
    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {portalStats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={i}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {stat.label}
                                </CardTitle>
                                <Icon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    <span className="text-emerald-500 font-medium">{stat.change}</span> from last month
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Recent Shipments */}
            <Card className="col-span-4">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Recent Shipments</CardTitle>
                        <CardDescription>
                            You have 3 active shipments in transit.
                        </CardDescription>
                    </div>
                    <Link href="/portal/shipments" className="text-sm font-medium text-emerald-600 flex items-center hover:underline">
                        View All <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[120px]">Tracking ID</TableHead>
                                <TableHead>Origin</TableHead>
                                <TableHead>Destination</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-right">ETA</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentShipments.map((shipment) => (
                                <TableRow key={shipment.id}>
                                    <TableCell className="font-medium font-mono text-xs">{shipment.id}</TableCell>
                                    <TableCell>{shipment.origin}</TableCell>
                                    <TableCell>{shipment.destination}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="secondary"
                                            className={`
                            ${shipment.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-100' : ''}
                            ${shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : ''}
                            ${shipment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' : ''}
                            ${shipment.status === 'Delayed' ? 'bg-red-100 text-red-800 hover:bg-red-100' : ''}
                        `}
                                        >
                                            {shipment.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{shipment.type}</TableCell>
                                    <TableCell className="text-right tabular-nums">{shipment.eta}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

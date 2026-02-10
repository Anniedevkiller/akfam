
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { recentShipments } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function ShipmentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">My Shipments</h1>
                <p className="text-muted-foreground">Manage and track all your ongoing and past shipments.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Shipment Inventory</CardTitle>
                    <CardDescription>A comprehensive list of all shipments associated with your account.</CardDescription>
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
                                                ${shipment.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : ''}
                                                ${shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' : ''}
                                                ${shipment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                                                ${shipment.status === 'Delayed' ? 'bg-red-100 text-red-800' : ''}
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

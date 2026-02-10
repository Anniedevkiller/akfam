
"use client";

import { adminStats, revenueData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Package, Users, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            {/* Admin Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {adminStats.map((stat, i) => {
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
                                    <span className={`font-medium ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                                        {stat.change}
                                    </span> from last month
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Revenue Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={revenueData}>
                                <XAxis
                                    dataKey="name"
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `$${value}`}
                                />
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="total" fill="#0B1C2D" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 font-bold border border-emerald-200">
                                    <Package className="h-4 w-4" />
                                </div>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Shipment #TRK-8812 Delivered</p>
                                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                                </div>
                                <div className="ml-auto font-medium text-emerald-600">+$2,400</div>
                            </div>

                            <div className="flex items-center">
                                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-600 font-bold border border-blue-200">
                                    <Users className="h-4 w-4" />
                                </div>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">New Client Registered</p>
                                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-100 text-amber-600 font-bold border border-amber-200">
                                    <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Quote Request #Q-104</p>
                                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

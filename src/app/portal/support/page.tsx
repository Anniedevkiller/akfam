
"use client";

import { chatMessages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Paperclip, MoreVertical } from "lucide-react";
import { useState } from "react";

export default function SupportPage() {
    const [messages, setMessages] = useState(chatMessages);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage = {
            sender: "User",
            text: inputValue,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                sender: "Agent",
                text: "Thank you for your message. An agent will be with you shortly.",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        }, 1000);
    };

    return (
        <div className="flex h-[calc(100vh-8rem)] gap-6">
            {/* Ticket List (Sidebar ish) */}
            <Card className="w-80 hidden md:flex flex-col">
                <CardHeader className="p-4 border-b">
                    <CardTitle className="text-lg">Active Tickets</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1 overflow-auto">
                    <div className="flex flex-col">
                        {/* Active Ticket */}
                        <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-semibold text-sm">Shipment #TRK-908123</h4>
                                <span className="text-xs text-muted-foreground">2m ago</span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1">It is currently clearing customs in QA...</p>
                        </div>
                        {/* Past Ticket */}
                        <div className="p-4 hover:bg-slate-50 cursor-pointer border-b border-slate-100">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-semibold text-sm">Quote Request #Q-102</h4>
                                <span className="text-xs text-muted-foreground">Yesterday</span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1">Can you provide a breakdown of costs...</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="p-4 border-t">
                    <Button className="w-full" variant="outline">New Ticket</Button>
                </CardFooter>
            </Card>

            {/* Chat Area */}
            <Card className="flex-1 flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarFallback className="bg-emerald-100 text-emerald-800">AS</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-base">Agent Support</CardTitle>
                            <p className="text-xs text-emerald-600 flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon">
                        <MoreVertical className="h-5 w-5 text-muted-foreground" />
                    </Button>
                </CardHeader>

                <CardContent className="flex-1 p-0 overflow-hidden">
                    <ScrollArea className="h-full p-4">
                        <div className="space-y-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.sender === "User" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`
                                    max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm
                                    ${msg.sender === "User"
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-muted rounded-tl-none"
                                            }
                                `}
                                    >
                                        <p>{msg.text}</p>
                                        <p className={`text-[10px] mt-1 text-right opacity-70`}>
                                            {msg.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>

                <CardFooter className="p-4 border-t">
                    <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
                        <Button type="button" size="icon" variant="ghost">
                            <Paperclip className="h-5 w-5 text-muted-foreground" />
                        </Button>
                        <Input
                            placeholder="Type your message..."
                            className="flex-1"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Button type="submit" size="icon" className="bg-emerald-600 hover:bg-emerald-500">
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    );
}

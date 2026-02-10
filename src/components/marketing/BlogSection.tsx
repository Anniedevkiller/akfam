
import { blogPosts } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export function BlogSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                        Trade Insights
                    </h2>
                    <Link href="/blog" className="hidden md:flex items-center text-primary font-medium hover:underline">
                        View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-slate-200">
                            <div className="aspect-[16/9] bg-slate-200 w-full relative group overflow-hidden">
                                {/* Placeholder Image Div */}
                                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500 group-hover:scale-105 transition-transform duration-500">
                                    <span className="text-4xl text-slate-400">IMG</span>
                                </div>
                            </div>
                            <CardHeader className="p-6 pb-2">
                                <div className="flex justify-between items-center mb-2">
                                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{post.category}</Badge>
                                </div>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-emerald-700 transition-colors cursor-pointer">
                                    {post.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-6 pt-2">
                                <div className="flex items-center text-xs text-slate-500 gap-4 mt-2">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {post.readTime}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <ButtonLink href="#">Read Article</ButtonLink>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="mt-8 text-center md:hidden">
                    <ButtonLink href="/blog">View All Articles</ButtonLink>
                </div>
            </div>
        </section>
    );
}

function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-sm font-semibold text-emerald-600 flex items-center hover:underline">
            {children} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
    )
}

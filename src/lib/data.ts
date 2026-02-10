
import { 
  Truck, 
  Globe, 
  ShieldCheck, 
  FileText, 
  BarChart3, 
  Users, 
  Package
} from "lucide-react";

// --- Marketing Data ---

export const services = [
  {
    title: "Logistics & Warehousing",
    description: "End-to-end supply chain solutions with real-time tracking and climate-controlled storage.",
    icon: Truck,
  },
  {
    title: "Verified Product Sourcing",
    description: "Connect with vetted suppliers globally. Quality assurance and compliance guaranteed.",
    icon: Globe,
  },
  {
    title: "Visa & Immigration",
    description: "Expert guidance for business visas, work permits, and corporate immigration strategies.",
    icon: ShieldCheck, // Using ShieldCheck as a proxy for verified/legal
  },
  {
    title: "Trade Strategy & Compliance",
    description: "Navigate complex international trade regulations with our expert consultancy.",
    icon: FileText,
  },
];

export const industries = [
  { name: "Healthcare & Pharma", icon: "🏥" },
  { name: "Automotive & Industrial", icon: "🏭" },
  { name: "Consumer Goods", icon: "🛍️" },
  { name: "Technology & Electronics", icon: "💻" },
];

export const certifications = [
  "DGFT", "ICEGATE", "ISO 9001", "PHARMEXCIL", "FSSAI"
];

export const blogPosts = [
  {
    title: "Navigating Post-Brexit Trade Regulations",
    category: "Trade Compliance",
    readTime: "5 min read",
    image: "/images/blog1.jpg", // Mock path
    date: "Oct 12, 2025"
  },
  {
    title: "The Future of Sustainable Logistics",
    category: "Logistics",
    readTime: "3 min read",
    image: "/images/blog2.jpg",
    date: "Oct 08, 2025"
  },
  {
    title: "Global Sourcing Trends in 2026",
    category: "Sourcing",
    readTime: "7 min read",
    image: "/images/blog3.jpg",
    date: "Sep 28, 2025"
  }
];

// --- Client Portal Data ---

export const recentShipments = [
  {
    id: "TRK-908123-US",
    origin: "Shanghai, CN",
    destination: "Los Angeles, US",
    status: "In Transit",
    eta: "Oct 24, 2025",
    type: "Ocean Freight"
  },
  {
    id: "TRK-881234-DE",
    origin: "Berlin, DE",
    destination: "New York, US",
    status: "Delivered",
    eta: "Oct 10, 2025",
    type: "Air Freight"
  },
  {
    id: "TRK-772123-IN",
    origin: "Mumbai, IN",
    destination: "Dubai, AE",
    status: "Pending",
    eta: "Oct 30, 2025",
    type: "Customs"
  },
  {
    id: "TRK-661902-JP",
    origin: "Tokyo, JP",
    destination: "London, UK",
    status: "Delayed",
    eta: "Nov 05, 2025",
    type: "Ocean Freight"
  },
  {
    id: "TRK-551029-BR",
    origin: "Sao Paulo, BR",
    destination: "Miami, US",
    status: "In Transit",
    eta: "Oct 22, 2025",
    type: "Air Freight"
  }
];

export const portalStats = [
  { label: "Active Shipments", value: "12", change: "+2", icon: Truck },
  { label: "Pending Quotes", value: "3", change: "0", icon: FileText },
  { label: "Total Delivered", value: "1,240", change: "+18%", icon: Package },
];

export const chatMessages = [
  { sender: "Agent", text: "Hello! How can I help you with your shipment today?", time: "10:00 AM" },
  { sender: "User", text: "I need to check the status of TRK-908123-US.", time: "10:02 AM" },
  { sender: "Agent", text: "Let me check that for you. One moment.", time: "10:03 AM" },
  { sender: "Agent", text: "It is currently clearing customs in QA. Expected release tomorrow.", time: "10:05 AM" },
];

// --- Admin Panel Data ---

export const adminStats = [
  { label: "Total Revenue", value: "$4.2M", change: "+12.5%", icon: BarChart3 },
  { label: "Active Users", value: "8,540", change: "+5.2%", icon: Users },
  { label: "Shipments (MTD)", value: "1,234", change: "+8.1%", icon: Package },
  { label: "Open Support Tickets", value: "42", change: "-12%", icon: FileText },
];

export const recentUsers = [
  { name: "Acme Corp", email: "contact@acme.com", role: "Enterprise", status: "Active" },
  { name: "Global Traders Ltd", email: "support@globaltraders.com", role: "Business", status: "Active" },
  { name: "TechStart Inc", email: "admin@techstart.io", role: "Startup", status: "Suspended" },
  { name: "BioLife Phantom", email: "logistics@biolife.com", role: "Enterprise", status: "Active" },
];

export const revenueData = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2400 },
  { name: "May", total: 3200 },
  { name: "Jun", total: 3800 },
  { name: "Jul", total: 4200 },
];

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Trophy, Sparkles, ArrowRight, Users, Star, Zap, Heart, Crown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

const whatsappGroups = [
  {
    name: "Fútbol Masculino",
    italianElement: "colosseum",
    color: "from-[#009246] to-[#CE2B37]",
    glow: "shadow-[#009246]/50",
    members: "24 miembros",
    activity: "Muy activo",
    whatsappLink: "https://chat.whatsapp.com/futbol-masculino-unitec",
  },
  {
    name: "Vóley Masculino",
    italianElement: "tower",
    color: "from-[#CE2B37] to-[#009246]",
    glow: "shadow-[#CE2B37]/50",
    members: "18 miembros",
    activity: "Activo",
    whatsappLink: "https://chat.whatsapp.com/voley-masculino-unitec",
  },
  {
    name: "Básquet Masculino",
    italianElement: "dome",
    color: "from-[#009246] via-[#F4F5F0] to-[#CE2B37]",
    glow: "shadow-[#009246]/50",
    members: "22 miembros",
    activity: "Muy activo",
    whatsappLink: "https://chat.whatsapp.com/basquet-masculino-unitec",
  },
  {
    name: "Fútbol Femenino",
    italianElement: "arch",
    color: "from-[#CE2B37] via-[#F4F5F0] to-[#009246]",
    glow: "shadow-[#CE2B37]/50",
    members: "16 miembros",
    activity: "Activo",
    whatsappLink: "https://chat.whatsapp.com/futbol-femenino-unitec",
  },
  {
    name: "Vóley Femenino",
    italianElement: "column",
    color: "from-[#009246] to-[#CE2B37]",
    glow: "shadow-[#CE2B37]/50",
    members: "20 miembros",
    activity: "Muy activo",
    whatsappLink: "https://chat.whatsapp.com/voley-femenino-unitec",
  },
  {
    name: "Básquet Femenino",
    italianElement: "fountain",
    color: "from-[#CE2B37] to-[#009246]",
    glow: "shadow-[#CE2B37]/50",
    members: "14 miembros",
    activity: "Activo",
    whatsappLink: "https://chat.whatsapp.com/basquet-femenino-unitec",
  },
  {
    name: "Dibujo",
    italianElement: "palette",
    color: "from-[#009246] via-[#F4F5F0] to-[#CE2B37]",
    glow: "shadow-[#CE2B37]/50",
    members: "32 miembros",
    activity: "Muy activo",
    whatsappLink: "https://chat.whatsapp.com/dibujo-unitec",
  },
  {
    name: "Oratoria",
    italianElement: "amphitheater",
    color: "from-[#CE2B37] via-[#F4F5F0] to-[#009246]",
    glow: "shadow-[#CE2B37]/50",
    members: "28 miembros",
    activity: "Activo",
    whatsappLink: "https://chat.whatsapp.com/oratoria-unitec",
  },
  {
    name: "Conocimiento General",
    italianElement: "library",
    color: "from-[#009246] to-[#CE2B37]",
    glow: "shadow-[#CE2B37]/50",
    members: "45 miembros",
    activity: "Muy activo",
    whatsappLink: "https://chat.whatsapp.com/conocimiento-general-unitec",
  },
  {
    name: "Ajedrez",
    italianElement: "chess",
    color: "from-[#CE2B37] to-[#009246]",
    glow: "shadow-[#CE2B37]/50",
    members: "19 miembros",
    activity: "Activo",
    whatsappLink: "https://chat.whatsapp.com/ajedrez-unitec",
  },
  {
    name: "Vestido reciclado",
    italianElement: "fashion",
    color: "from-[#009246] via-[#F4F5F0] to-[#CE2B37]",
    glow: "shadow-[#CE2B37]/50",
    members: "26 miembros",
    activity: "Activo",
    whatsappLink: "https://chat.whatsapp.com/vestido-reciclado-unitec",
  },
  {
    name: "Sketch",
    italianElement: "art",
    color: "from-[#009246] via-[#F4F5F0] to-[#CE2B37]",
    glow: "shadow-[#CE2B37]/50",
    members: "31 miembros",
    activity: "Muy activo",
    whatsappLink: "https://chat.whatsapp.com/sketch-unitec",
  },
  {
    name: "Exatec",
    italianElement: "victory",
    color: "from-[#009246] to-[#CE2B37]",
    glow: "shadow-[#CE2B37]/50",
    members: "38 miembros",
    activity: "Muy activo",
    whatsappLink: "https://chat.whatsapp.com/exatec-unitec",
  },
]

const ItalianArchitecturalLayers = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -100])
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])
  const y3 = useTransform(scrollY, [0, 1000], [0, -50])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#009246]/5 via-transparent to-[#CE2B37]/5" />

      {/* Desktop Layout - Large images with creative overflow */}
      <div className="hidden md:block">
        <motion.div
          className="absolute -bottom-20 -right-32 w-[600px] h-[600px] opacity-15"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ y: y1 }}
          whileHover={{ scale: 1.05, opacity: 0.25 }}
        >
          <img
            src="/images/coliseo.png"
            alt=""
            className="w-full h-full object-contain filter drop-shadow-2xl"
            style={{
              filter:
                "sepia(100%) hue-rotate(90deg) saturate(2) brightness(0.4) drop-shadow(0 25px 50px rgba(0, 146, 70, 0.3))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute -top-40 left-1/4 w-[500px] h-[500px] opacity-12"
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 0.12 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
          style={{ y: y2 }}
          whileHover={{ scale: 1.08, opacity: 0.2 }}
        >
          <img
            src="/images/catedral-milan.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter:
                "sepia(100%) hue-rotate(180deg) saturate(2) brightness(0.5) drop-shadow(0 20px 40px rgba(206, 43, 55, 0.3))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-1/3 -left-24 w-[400px] h-[400px] opacity-18"
          initial={{ x: -200, opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 0.18, rotate: 0 }}
          transition={{ duration: 2.2, delay: 1, ease: "easeOut" }}
          style={{ y: y3 }}
          whileHover={{ scale: 1.1, rotate: 2, opacity: 0.3 }}
        >
          <img
            src="/images/torre.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter:
                "sepia(100%) hue-rotate(270deg) saturate(2) brightness(0.6) drop-shadow(0 15px 30px rgba(0, 146, 70, 0.4))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] opacity-20"
          initial={{ scale: 0, opacity: 0, rotate: 45 }}
          animate={{ scale: 1, opacity: 0.2, rotate: 0 }}
          transition={{ duration: 2.8, delay: 1.5, ease: "easeOut" }}
          style={{ y: y1 }}
          whileHover={{ scale: 1.15, rotate: -5, opacity: 0.35 }}
        >
          <img
            src="/images/panteon.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter:
                "sepia(100%) hue-rotate(45deg) saturate(2) brightness(0.7) drop-shadow(0 20px 40px rgba(206, 43, 55, 0.4))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-1/4 w-[280px] h-[280px] opacity-14"
          initial={{ y: -150, x: 150, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 0.14 }}
          transition={{ duration: 3, delay: 2, ease: "easeOut" }}
          style={{ y: y2 }}
          whileHover={{ scale: 1.12, opacity: 0.25 }}
        >
          <img
            src="/images/david.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter:
                "sepia(100%) hue-rotate(135deg) saturate(1.5) brightness(0.5) drop-shadow(0 18px 35px rgba(0, 146, 70, 0.3))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-1/6 w-[320px] h-[320px] opacity-10"
          initial={{ x: -100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.1 }}
          transition={{ duration: 2.5, delay: 2.5, ease: "easeOut" }}
          style={{ y: y3 }}
          whileHover={{ scale: 1.08, opacity: 0.18 }}
        >
          <img
            src="/images/gondola.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter:
                "sepia(100%) hue-rotate(225deg) saturate(1.8) brightness(0.4) drop-shadow(0 12px 25px rgba(206, 43, 55, 0.3))",
            }}
          />
        </motion.div>
      </div>

      {/* Mobile Layout - Responsive with reduced size but maintained ambiance */}
      <div className="block md:hidden">
        <motion.div
          className="absolute top-20 right-2 w-32 h-32 opacity-20"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/images/torre.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter:
                "sepia(100%) hue-rotate(270deg) saturate(2) brightness(0.7) drop-shadow(0 8px 16px rgba(0, 146, 70, 0.4))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-40 left-2 w-28 h-28 opacity-18"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.18 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/images/david.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter:
                "sepia(100%) hue-rotate(135deg) saturate(1.5) brightness(0.6) drop-shadow(0 6px 12px rgba(206, 43, 55, 0.4))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-4 w-36 h-36 opacity-25"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.15 }}
        >
          <img
            src="/images/catedral-milan.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter:
                "sepia(100%) hue-rotate(180deg) saturate(2) brightness(0.6) drop-shadow(0 10px 20px rgba(0, 146, 70, 0.4))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-4 w-24 h-24 opacity-22"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.22 }}
          transition={{ duration: 1.7, delay: 0.9, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/images/gondola.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter:
                "sepia(100%) hue-rotate(225deg) saturate(1.8) brightness(0.5) drop-shadow(0 6px 12px rgba(206, 43, 55, 0.3))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-3 w-40 h-40 opacity-28"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.28 }}
          transition={{ duration: 2.2, delay: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.12 }}
        >
          <img
            src="/images/coliseo.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter:
                "sepia(100%) hue-rotate(90deg) saturate(2) brightness(0.5) drop-shadow(0 12px 24px rgba(206, 43, 55, 0.4))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-28 left-3 w-32 h-32 opacity-25"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.25 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/images/panteon.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter:
                "sepia(100%) hue-rotate(45deg) saturate(2) brightness(0.8) drop-shadow(0 8px 16px rgba(0, 146, 70, 0.4))",
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

const ItalianElement = ({ element, className }: { element: string; className?: string }) => {
  const elements = {
    colosseum: (
      <div className={`relative ${className}`}>
        <div className="w-12 h-8 border-2 border-[#009246] rounded-t-full relative">
          <div className="absolute inset-1 border border-[#CE2B37] rounded-t-full">
            <div className="w-full h-1 bg-[#009246] mt-1 rounded"></div>
            <div className="w-full h-1 bg-[#CE2B37] mt-1 rounded"></div>
          </div>
        </div>
      </div>
    ),
    tower: (
      <div className={`relative ${className}`}>
        <div className="w-3 h-10 bg-gradient-to-t from-[#009246] to-[#CE2B37] rounded-t-sm relative">
          <div className="absolute top-0 w-4 h-2 bg-[#CE2B37] -left-0.5 rounded-t"></div>
          <div className="absolute top-2 left-0.5 w-2 h-1 bg-[#F4F5F0] rounded-sm"></div>
          <div className="absolute top-4 left-0.5 w-2 h-1 bg-[#F4F5F0] rounded-sm"></div>
        </div>
      </div>
    ),
    dome: (
      <div className={`relative ${className}`}>
        <div className="w-10 h-6 bg-gradient-to-b from-[#CE2B37] to-[#009246] rounded-t-full relative">
          <div className="absolute top-0 left-1/2 w-1 h-2 bg-[#F4F5F0] -translate-x-1/2 rounded-t"></div>
          <div className="absolute bottom-0 w-full h-2 bg-[#009246] rounded-b"></div>
        </div>
      </div>
    ),
    arch: (
      <div className={`relative ${className}`}>
        <div className="w-8 h-8 border-4 border-[#009246] rounded-t-full border-b-0 relative">
          <div className="absolute -bottom-1 left-0 w-1 h-4 bg-[#CE2B37]"></div>
          <div className="absolute -bottom-1 right-0 w-1 h-4 bg-[#CE2B37]"></div>
        </div>
      </div>
    ),
    column: (
      <div className={`relative ${className}`}>
        <div className="w-2 h-10 bg-gradient-to-b from-[#F4F5F0] via-[#009246] to-[#CE2B37] relative">
          <div className="absolute top-0 w-3 h-1 bg-[#009246] -left-0.5"></div>
          <div className="absolute bottom-0 w-3 h-1 bg-[#CE2B37] -left-0.5"></div>
        </div>
      </div>
    ),
    fountain: (
      <div className={`relative ${className}`}>
        <div className="w-8 h-6 bg-gradient-to-t from-[#009246] to-[#CE2B37] rounded-t-full relative">
          <div className="absolute top-1 left-1/2 w-0.5 h-3 bg-[#F4F5F0] -translate-x-1/2"></div>
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-[#F4F5F0] rounded-full -translate-x-1/2"></div>
        </div>
      </div>
    ),
    palette: (
      <div className={`relative ${className}`}>
        <div className="w-8 h-6 bg-[#F4F5F0] rounded-full relative border-2 border-[#009246]">
          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-[#009246] rounded-full"></div>
          <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#CE2B37] rounded-full"></div>
          <div className="absolute bottom-1 left-2 w-1.5 h-1.5 bg-[#009246] rounded-full"></div>
        </div>
      </div>
    ),
    amphitheater: (
      <div className={`relative ${className}`}>
        <div className="w-10 h-6 border-2 border-[#009246] rounded-b-full relative">
          <div className="absolute top-1 left-1 right-1 h-0.5 bg-[#CE2B37] rounded"></div>
          <div className="absolute top-2 left-2 right-2 h-0.5 bg-[#009246] rounded"></div>
          <div className="absolute top-3 left-3 right-3 h-0.5 bg-[#CE2B37] rounded"></div>
        </div>
      </div>
    ),
    library: (
      <div className={`relative ${className}`}>
        <div className="w-8 h-8 bg-[#F4F5F0] border-2 border-[#009246] relative">
          <div className="absolute top-1 left-1 right-1 h-0.5 bg-[#CE2B37]"></div>
          <div className="absolute top-2.5 left-1 right-1 h-0.5 bg-[#009246]"></div>
          <div className="absolute top-4 left-1 right-1 h-0.5 bg-[#CE2B37]"></div>
          <div className="absolute top-5.5 left-1 right-1 h-0.5 bg-[#009246]"></div>
        </div>
      </div>
    ),
    chess: (
      <div className={`relative ${className}`}>
        <div className="w-6 h-8 bg-gradient-to-b from-[#F4F5F0] to-[#009246] relative">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#CE2B37] rounded-full -translate-x-1/2"></div>
          <div className="absolute bottom-0 w-full h-2 bg-[#009246]"></div>
          <div className="grid grid-cols-2 gap-0 absolute inset-2">
            <div className="bg-[#009246] w-1 h-1"></div>
            <div className="bg-[#CE2B37] w-1 h-1"></div>
            <div className="bg-[#CE2B37] w-1 h-1"></div>
            <div className="bg-[#009246] w-1 h-1"></div>
          </div>
        </div>
      </div>
    ),
    fashion: (
      <div className={`relative ${className}`}>
        <div className="w-6 h-8 bg-gradient-to-b from-[#CE2B37] to-[#009246] relative rounded-t-full">
          <div className="absolute top-2 left-1/2 w-3 h-4 bg-[#F4F5F0] -translate-x-1/2 rounded"></div>
          <div className="absolute bottom-1 left-1/2 w-4 h-2 bg-[#009246] -translate-x-1/2 rounded-b"></div>
        </div>
      </div>
    ),
    art: (
      <div className={`relative ${className}`}>
        <div className="w-8 h-8 bg-[#F4F5F0] border-2 border-[#009246] relative">
          <div className="absolute top-1 left-1 w-2 h-2 border border-[#CE2B37] rounded"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-[#009246] rounded"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-[#CE2B37] rounded"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 border border-[#009246] rounded"></div>
        </div>
      </div>
    ),
    victory: (
      <div className={`relative ${className}`}>
        <div className="w-6 h-8 bg-gradient-to-t from-[#009246] to-[#CE2B37] relative">
          <Crown className="w-4 h-4 text-[#F4F5F0] absolute top-0 left-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 w-full h-2 bg-[#009246] rounded-b"></div>
        </div>
      </div>
    ),
  }

  return elements[element as keyof typeof elements] || <div className={className}></div>
}

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ItalianArchitecturalLayers />

      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#009246]/10 to-[#CE2B37]/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-[#CE2B37]/8 to-[#009246]/8 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-[#009246]/6 to-[#CE2B37]/6 rounded-full blur-xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-[#009246] via-[#F4F5F0] to-[#CE2B37] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#009246] via-[#F4F5F0] to-[#CE2B37] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <span className="text-[#6E6E6E] font-bold text-xl group-hover:text-[#009246] transition-colors duration-300">
                UNITEC
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <motion.a
                href="#inicio"
                className="text-[#6E6E6E] hover:text-[#009246] transition-all duration-300 relative group"
                whileHover={{ scale: 1.05 }}
              >
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#009246] to-[#CE2B37] group-hover:w-full transition-all duration-300" />
              </motion.a>
              <motion.a
                href="#comunidad"
                className="text-[#6E6E6E] hover:text-[#009246] transition-all duration-300 relative group"
                whileHover={{ scale: 1.05 }}
              >
                Comunidad
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#009246] to-[#CE2B37] group-hover:w-full transition-all duration-300" />
              </motion.a>
            </div>

            {/* Mobile menu for Inicio and Comunidad */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.a
                href="#inicio"
                className="text-[#6E6E6E] hover:text-[#009246] transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Inicio
              </motion.a>
              <motion.a
                href="#comunidad"
                className="text-[#6E6E6E] hover:text-[#009246] transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Comunidad
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-[#009246] rounded-full"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-3 h-3 bg-[#CE2B37] rounded-full"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-5 h-5 bg-[#009246] rounded-full"
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3.5,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-2 h-2 bg-[#CE2B37] rounded-full"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2,
              delay: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-32 left-1/4 w-6 h-6 bg-gradient-to-r from-[#009246] to-[#CE2B37] rounded-full opacity-30"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-60 right-1/3 w-4 h-4 bg-gradient-to-r from-[#CE2B37] to-[#009246] rounded-full opacity-40"
            animate={{
              y: [0, -20, 0],
              rotate: [0, -360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3.5,
              delay: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/3 w-8 h-8 bg-gradient-to-r from-[#009246] to-[#CE2B37] rounded-full opacity-20"
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              delay: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-8xl font-black text-[#6E6E6E] mb-8 text-balance leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              <motion.span
                className="italic font-serif"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Comunidad di
              </motion.span>
              <span className="block font-black relative">
                <motion.span
                  className="bg-gradient-to-r from-[#009246] to-[#CE2B37] bg-clip-text text-transparent"
                  style={{
                    WebkitTextStroke: "1px rgba(0,0,0,0.3)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  Arquitectura
                </motion.span>
                <span className="block mt-2">
                  <motion.span
                    className="bg-gradient-to-r from-[#009246] to-[#CE2B37] bg-clip-text text-transparent"
                    style={{
                      WebkitTextStroke: "1px rgba(0,0,0,0.3)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    UNITEC
                  </motion.span>
                </span>
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-2xl md:text-3xl text-[#6E6E6E]/70 text-balance font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <span className="italic font-serif">Competizione Universitaria</span> 2025 con espíritu de Italia 🇮🇹
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#009246] via-[#F4F5F0] to-[#CE2B37] text-black hover:shadow-2xl hover:shadow-[#009246]/30 hover:scale-110 transition-all duration-500 group px-8 py-4 text-lg font-bold w-full sm:w-auto border-2 border-black rounded-xl"
                onClick={() => window.open("https://chat.whatsapp.com/comunidad-arquitectura-unitec", "_blank")}
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                <span className="font-black">Únete a la Comunidad</span>
                <Sparkles className="ml-3 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#CE2B37] text-[#CE2B37] hover:bg-[#CE2B37] hover:text-white hover:shadow-xl hover:shadow-[#CE2B37]/25 hover:scale-110 transition-all duration-500 group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent w-full sm:w-auto"
              >
                <Trophy className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6 group-hover:animate-pulse" />
                <span className="italic font-serif">Ver Competenze</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comunidad WhatsApp Section */}
      <section id="comunidad" className="py-12 sm:py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-5xl md:text-6xl font-black text-[#6E6E6E] mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="italic font-serif">Unisciti ai Nostri</span>
              <span className="block font-black relative">
                <span
                  className="bg-gradient-to-r from-[#009246] to-[#CE2B37] bg-clip-text text-transparent"
                  style={{
                    WebkitTextStroke: "1px rgba(0,0,0,0.3)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  Grupos de WhatsApp
                </span>
              </span>
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-[#6E6E6E]/70 max-w-3xl mx-auto text-balance font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="italic font-serif">Connetti con studenti</span> de arquitectura en diferentes disciplinas
              deportivas y actividades creativas
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {whatsappGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Card
                  className={`relative overflow-hidden bg-white border-2 border-gray-100 transition-all duration-500 cursor-pointer group
                    md:hover:border-transparent md:hover:scale-105 md:hover:shadow-xl
                    scale-105 shadow-xl ${group.glow} shadow-lg border-transparent
                    ${hoveredCard === index ? "md:scale-110 md:shadow-2xl" : ""}
                  `}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-20 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                  />
                  <div className="absolute inset-[2px] bg-white rounded-[calc(var(--radius)-2px)] z-10" />

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-10 md:opacity-5 md:group-hover:opacity-20 transition-all duration-500 z-20`}
                  />

                  <div className="relative p-4 sm:p-6 text-center z-30">
                    <div className="relative mb-4 flex justify-center">
                      <motion.div
                        className="relative group-hover:scale-125 transition-transform duration-500"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#009246] via-[#F4F5F0] to-[#CE2B37] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          {group.name.includes("Fútbol") && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-2 border-[#009246]" />
                          )}
                          {group.name.includes("Vóley") && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded border border-[#CE2B37]" />
                          )}
                          {group.name.includes("Básquet") && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-4 border-[#009246]" />
                          )}
                          {group.name.includes("Dibujo") && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-sm border-2 border-[#CE2B37]" />
                          )}
                          {group.name.includes("Oratoria") && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-l-4 border-[#009246]" />
                          )}
                          {group.name.includes("Conocimiento") && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded border-2 border-[#CE2B37] flex items-center justify-center">
                              <div className="w-2 h-2 bg-[#009246] rounded-full" />
                            </div>
                          )}
                          {group.name.includes("Ajedrez") && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded grid grid-cols-2 gap-0">
                              <div className="bg-[#009246]" />
                              <div className="bg-[#CE2B37]" />
                              <div className="bg-[#CE2B37]" />
                              <div className="bg-[#009246]" />
                            </div>
                          )}
                          {group.name.includes("Vestido") && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-2 border-[#009246] flex items-center justify-center">
                              <div className="w-3 h-4 bg-[#CE2B37] rounded-t-full" />
                            </div>
                          )}
                          {group.name.includes("Sketch") && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded border-2 border-[#CE2B37] flex items-center justify-center">
                              <div className="w-4 h-1 bg-[#009246] rounded" />
                            </div>
                          )}
                          {group.name.includes("Exatec") && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-2 border-[#009246] flex items-center justify-center">
                              <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-[#CE2B37]" />
                            </div>
                          )}
                        </div>

                        <div className="absolute -top-2 left-1/2 w-6 h-1 -translate-x-1/2 opacity-60 md:opacity-40">
                          <div className="w-2 h-full bg-[#009246] float-left"></div>
                          <div className="w-2 h-full bg-[#F4F5F0] float-left"></div>
                          <div className="w-2 h-full bg-[#CE2B37] float-left"></div>
                        </div>
                      </motion.div>

                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${group.color} opacity-30 md:opacity-0 md:group-hover:opacity-20 rounded-full blur-xl animate-pulse transition-opacity duration-500`}
                      />
                    </div>

                    <div className="relative mb-3">
                      <h3 className="text-base sm:text-lg font-bold text-[#009246] md:text-[#6E6E6E] md:group-hover:text-[#009246] text-balance transition-colors duration-300">
                        {group.name}
                      </h3>
                      <div className="absolute -left-2 top-1/2 w-1 h-1 bg-[#009246] rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                      <div className="absolute -right-2 top-1/2 w-1 h-1 bg-[#CE2B37] rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                    </div>

                    <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-[#6E6E6E]/70">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{group.members}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div
                          className={`w-2 h-2 rounded-full ${group.activity === "Muy activo" ? "bg-[#009246]" : "bg-[#CE2B37]"} animate-pulse`}
                        />
                        <span className="hidden sm:inline">{group.activity}</span>
                        <span className="sm:hidden">{group.activity === "Muy activo" ? "Muy activo" : "Activo"}</span>
                      </div>
                    </div>

                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < 4 ? "text-[#009246] fill-current" : "text-gray-300"} animate-pulse`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        className="bg-[#25D366] hover:bg-[#25D366]/90 text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#25D366]/30 hover:scale-110 font-semibold px-4 sm:px-6 py-2 w-full text-sm sm:text-base"
                        onClick={() => window.open(group.whatsappLink, "_blank")}
                      >
                        <MessageCircle className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                        Unirse
                        <ArrowRight className="ml-2 h-4 w-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300" />
                      </Button>
                    </motion.div>

                    <div className="flex justify-center gap-2 mt-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-r from-[#009246] to-[#CE2B37] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Heart className="w-3 h-3 text-white" />
                      </motion.div>
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-r from-[#CE2B37] to-[#009246] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Zap className="w-3 h-3 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#009246] to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#CE2B37] to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-[#009246] to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-gradient-to-b from-transparent via-[#CE2B37] to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-gradient-to-r from-[#009246] via-[#F4F5F0] to-[#CE2B37] py-8 sm:py-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 3,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/5 rounded-full blur-lg"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 5,
              delay: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            className="flex items-center justify-center space-x-3 mb-4 sm:mb-6 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-[#CE2B37] via-[#F4F5F0] to-[#009246] rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#CE2B37] via-[#F4F5F0] to-[#009246] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <span className="text-[#2D2D2D] font-bold text-lg sm:text-xl group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">
              UNITEC Arquitectura
            </span>
          </motion.div>
          <motion.p
            className="text-[#2D2D2D] text-sm sm:text-base mb-2 font-semibold drop-shadow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            © 2025 UNITEC Arquitectura | <span className="italic font-serif">Comunità WhatsApp Italia</span> 🇮🇹
          </motion.p>
          <motion.p
            className="text-[#2D2D2D]/80 text-xs sm:text-sm font-medium drop-shadow-sm italic font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Costruendo il futuro con passión italiana
          </motion.p>
        </div>
      </motion.footer>
    </div>
  )
}

'use client'

import { useState } from 'react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  Zap, 
  ShoppingCart,
  ChevronRight,
  Shield,
  Clock,
  Award,
  Users
} from 'lucide-react'

export default function Home() {
  const [activeService, setActiveService] = useState('construction')

  const services = [
    {
      id: 'construction',
      title: 'Konstruksi Bangunan',
      icon: Building,
      description: 'Jasa konstruksi bangunan profesional dengan standar kualitas tinggi',
      features: [
        'Bangunan Komersial & Residential',
        'Renovasi & Restorasi',
        'Desain Arsitektur Modern',
        'Manajemen Proyek Terpadu'
      ],
      color: 'bg-blue-600'
    },
    {
      id: 'electrical',
      title: 'Konstruksi Elektrikal',
      icon: Zap,
      description: 'Instalasi dan maintenance sistem elektrikal yang aman dan terpercaya',
      features: [
        'Instalasi Listrik Industri',
        'Maintenance Preventif',
        'Sistem Pencahayaan Modern',
        'Panel Kontrol & Otomasi'
      ],
      color: 'bg-orange-600'
    },
    {
      id: 'retail',
      title: 'Perdagangan Eceran',
      icon: ShoppingCart,
      description: 'Supplier material bangunan dan elektrikal dengan harga kompetitif',
      features: [
        'Material Berkualitas Tinggi',
        'Harga Kompetitif',
        'Pengiriman Tepat Waktu',
        'Konsultasi Material'
      ],
      color: 'bg-green-600'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Kualitas Terjamin',
      description: 'Standar kualitas tinggi dengan garansi untuk setiap proyek'
    },
    {
      icon: Clock,
      title: 'Tepat Waktu',
      description: 'Pengerjaan proyek sesuai jadwal yang telah disepakati'
    },
    {
      icon: Award,
      title: 'Berpengalaman',
      description: 'Tim profesional dengan pengalaman bertahun-tahun di industri konstruksi'
    },
    {
      icon: Users,
      title: 'Pelanggan Puas',
      description: 'Kepuasan pelanggan adalah prioritas utama kami'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-600 text-white px-4 py-2 text-sm font-semibold">
                  Konstruksi & Elektrikal Profesional
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  CV <span className="text-orange-500">PIJAR SEMBILAN</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Solusi Terpercaya untuk Konstruksi Bangunan, Elektrikal, dan Perdagangan Material Berkualitas
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4">
                  Hubungi Kami
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4">
                  Lihat Portfolio
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-700">
                <div>
                  <div className="text-3xl font-bold text-orange-500">100+</div>
                  <div className="text-blue-200">Proyek Selesai</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">50+</div>
                  <div className="text-blue-200">Klien Puas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">10+</div>
                  <div className="text-blue-200">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="CV PIJAR SEMBILAN Logo" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi komprehensif untuk kebutuhan konstruksi, elektrikal, dan material bangunan Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  activeService === service.id ? 'ring-2 ring-orange-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Active Service Details */}
          <Card className="bg-gradient-to-br from-gray-50 to-white border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${services.find(s => s.id === activeService)?.color} rounded-lg flex items-center justify-center mr-4`}>
                  {React.createElement(services.find(s => s.id === activeService)?.icon || Building, {
                    className: "h-6 w-6 text-white"
                  })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {services.find(s => s.id === activeService)?.title}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {services.find(s => s.id === activeService)?.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-orange-500">PIJAR SEMBILAN</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik dengan standar kualitas tertinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami hari ini untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan konstruksi dan elektrikal Anda
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4">
            <Phone className="mr-2 h-5 w-5" />
            Hubungi Sekarang
          </Button>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6 text-orange-500" />
              <div>
                <div className="font-semibold">Alamat</div>
                <div className="text-gray-400 text-sm">
                  PERUM KENARI ASRI BLOK Q/3, Karang Tengah, Sananwetan, Blitar
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-orange-500" />
              <div>
                <div className="font-semibold">Telepon</div>
                <div className="text-gray-400 text-sm">085353874912</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-orange-500" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-400 text-sm">info@pijarsemblan.co.id</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
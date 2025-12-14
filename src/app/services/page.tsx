'use client'

import { useState } from 'react'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building, 
  Zap, 
  ShoppingCart,
  CheckCircle,
  Clock,
  Shield,
  Award,
  ChevronRight,
  ArrowRight,
  Wrench,
  Home,
  Factory,
  Lightbulb,
  Battery,
  Cpu,
  Package,
  Truck,
  Users
} from 'lucide-react'

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('construction')

  const categories = [
    {
      id: 'construction',
      title: 'Konstruksi Bangunan',
      icon: Building,
      color: 'bg-blue-600',
      description: 'Solusi konstruksi komprehensif untuk berbagai kebutuhan bangunan'
    },
    {
      id: 'electrical',
      title: 'Konstruksi Elektrikal',
      icon: Zap,
      color: 'bg-orange-600',
      description: 'Instalasi dan maintenance sistem elektrikal profesional'
    },
    {
      id: 'retail',
      title: 'Perdagangan Eceran',
      icon: ShoppingCart,
      color: 'bg-green-600',
      description: 'Supplier material bangunan dan elektrikal berkualitas'
    }
  ]

  const constructionServices = [
    {
      title: 'Bangunan Komersial',
      icon: Building,
      description: 'Konstruksi gedung perkantoran, ruko, dan fasilitas komersial lainnya dengan desain modern dan fungsional.',
      features: [
        'Desain arsitektur custom',
        'Struktur bangunan kokoh',
        'Finishing berkualitas premium',
        'Sertifikasi bangunan lengkap'
      ],
      timeline: '6-12 bulan',
      warranty: '5 tahun'
    },
    {
      title: 'Bangunan Residential',
      icon: Home,
      description: 'Pembangunan rumah tinggal, villa, dan kompleks perumahan dengan perhatian khusus pada detail dan kenyamanan.',
      features: [
        'Desain interior & eksterior',
        'Tata ruang optimal',
        'Material ramah lingkungan',
        'Sistem keamanan terpadu'
      ],
      timeline: '4-8 bulan',
      warranty: '3 tahun'
    },
    {
      title: 'Bangunan Industri',
      icon: Factory,
      description: 'Konstruksi pabrik, gudang, dan fasilitas industri dengan standar keselamatan tinggi.',
      features: [
        'Struktur baja berkualitas',
        'Sistem ventilasi optimal',
        'Lantai beton khusus industri',
        'Akses kendaraan berat'
      ],
      timeline: '8-15 bulan',
      warranty: '7 tahun'
    },
    {
      title: 'Renovasi & Restorasi',
      icon: Wrench,
      description: 'Jasa renovasi bangunan lama dan restorasi bangunan bersejarah dengan mempertahankan karakter asli.',
      features: [
        'Analisis struktur menyeluruh',
        'Material restorasi autentik',
        'Desain adaptif modern',
        'Minimal gangguan operasional'
      ],
      timeline: '2-6 bulan',
      warranty: '2 tahun'
    }
  ]

  const electricalServices = [
    {
      title: 'Instalasi Listrik Industri',
      icon: Zap,
      description: 'Instalasi sistem kelistrikan untuk bangunan industri dengan kapasitas tinggi dan sistem pengamanan lengkap.',
      features: [
        'Panel distribusi utama',
        'Sistem grounding optimal',
        'Proteksi overload & short circuit',
        'Monitoring konsumsi daya'
      ],
      timeline: '1-3 bulan',
      warranty: '2 tahun'
    },
    {
      title: 'Sistem Pencahayaan',
      icon: Lightbulb,
      description: 'Desain dan instalasi sistem pencahayaan hemat energi dengan kontrol otomatis dan suasana yang nyaman.',
      features: [
        'LED lighting system',
        'Smart lighting control',
        'Pencahayaan darurat',
        'Desain pencahayaan custom'
      ],
      timeline: '2-4 minggu',
      warranty: '1 tahun'
    },
    {
      title: 'Panel Kontrol & Otomasi',
      icon: Cpu,
      description: 'Pembuatan panel kontrol industri dan sistem otomasi untuk meningkatkan efisiensi operasional.',
      features: [
        'PLC programming',
        'HMI interface design',
        'SCADA system',
        'Remote monitoring'
      ],
      timeline: '3-6 minggu',
      warranty: '2 tahun'
    },
    {
      title: 'UPS & Generator Set',
      icon: Battery,
      description: 'Instalasi sistem backup power untuk memastikan kelangsungan operasional saat listrik padam.',
      features: [
        'Automatic transfer switch',
        'Battery monitoring system',
        'Fuel management',
        'Load testing'
      ],
      timeline: '1-2 minggu',
      warranty: '1 tahun'
    }
  ]

  const retailServices = [
    {
      title: 'Material Bangunan',
      icon: Package,
      description: 'Supplier lengkap material bangunan berkualitas dengan harga kompetitif dan pengiriman tepat waktu.',
      features: [
        'Semen & beton ready mix',
        'Baja konstruksi',
        'Material atap & dinding',
        'Cat & finishing'
      ],
      delivery: '1-3 hari',
      minOrder: 'Rp 5.000.000'
    },
    {
      title: 'Material Elektrikal',
      icon: Zap,
      description: 'Berbagai jenis komponen elektrikal dari merek ternama dengan garansi resmi.',
      features: [
        'Kabel & kabel tray',
        'MCB & MCCB',
        'Lampu & ballast',
        'Fitting & aksesoris'
      ],
      delivery: '1-2 hari',
      minOrder: 'Rp 2.000.000'
    },
    {
      title: 'Pengiriman Proyek',
      icon: Truck,
      description: 'Layanan pengiriman material langsung ke lokasi proyek dengan armada terpercaya.',
      features: [
        'Armada berkapasitas besar',
        'Driver berpengalaman',
        'Tracking pengiriman',
        'Asuransi pengiriman'
      ],
      delivery: 'Same day / Next day',
      coverage: 'Jawa Timur & sekitarnya'
    },
    {
      title: 'Konsultasi Material',
      icon: Users,
      description: 'Layanan konsultasi untuk pemilihan material yang tepat sesuai kebutuhan dan anggaran proyek.',
      features: [
        'Analisis kebutuhan proyek',
        'Rekomendasi material',
        'Perhitungan volume',
        'Optimasi biaya'
      ],
      duration: '1-2 hari',
      fee: 'Gratis untuk pembelian'
    }
  ]

  const getServices = () => {
    switch (activeCategory) {
      case 'construction':
        return constructionServices
      case 'electrical':
        return electricalServices
      case 'retail':
        return retailServices
      default:
        return constructionServices
    }
  }

  const activeCategoryData = categories.find(cat => cat.id === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge className="bg-orange-600 text-white px-4 py-2 text-sm font-semibold">
              Layanan Kami
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Solusi <span className="text-orange-500">Lengkap</span> untuk Kebutuhan Anda
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Layanan konstruksi, elektrikal, dan perdagangan material dengan standar kualitas tertinggi
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kategori Layanan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih kategori layanan yang sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  activeCategory === category.id ? 'ring-2 ring-orange-500 shadow-lg scale-105' : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Active Category Header */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-8 mb-12">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 ${activeCategoryData?.color} rounded-lg flex items-center justify-center`}>
                {React.createElement(activeCategoryData?.icon || Building, {
                  className: "h-8 w-8 text-white"
                })}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {activeCategoryData?.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {activeCategoryData?.description}
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {getServices().map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Fitur Layanan:</h5>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    {service.timeline && (
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <div>
                          <div className="text-xs text-gray-500">Timeline</div>
                          <div className="font-semibold text-gray-900">{service.timeline}</div>
                        </div>
                      </div>
                    )}
                    {service.warranty && (
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <div>
                          <div className="text-xs text-gray-500">Garansi</div>
                          <div className="font-semibold text-gray-900">{service.warranty}</div>
                        </div>
                      </div>
                    )}
                    {service.delivery && (
                      <div className="flex items-center space-x-2">
                        <Truck className="h-4 w-4 text-green-500" />
                        <div>
                          <div className="text-xs text-gray-500">Pengiriman</div>
                          <div className="font-semibold text-gray-900">{service.delivery}</div>
                        </div>
                      </div>
                    )}
                    {service.minOrder && (
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4 text-purple-500" />
                        <div>
                          <div className="text-xs text-gray-500">Min. Order</div>
                          <div className="font-semibold text-gray-900">{service.minOrder}</div>
                        </div>
                      </div>
                    )}
                    {service.duration && (
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <div>
                          <div className="text-xs text-gray-500">Durasi</div>
                          <div className="font-semibold text-gray-900">{service.duration}</div>
                        </div>
                      </div>
                    )}
                    {service.fee && (
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-500" />
                        <div>
                          <div className="text-xs text-gray-500">Biaya</div>
                          <div className="font-semibold text-gray-900">{service.fee}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Langkah-langkah sistematis untuk memastikan hasil terbaik untuk setiap proyek
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Konsultasi</h3>
              <p className="text-gray-600">Diskusi kebutuhan dan tujuan proyek Anda</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perencanaan</h3>
              <p className="text-gray-600">Desain dan perencanaan detail proyek</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eksekusi</h3>
              <p className="text-gray-600">Pelaksanaan proyek dengan tim profesional</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Handover</h3>
              <p className="text-gray-600">Serah terima dan garansi pasca-proyek</p>
            </div>
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
            Hubungi kami hari ini untuk konsultasi gratis dan penawaran terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4">
              Konsultasi Gratis
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4">
              Lihat Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
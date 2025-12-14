'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building, 
  Zap, 
  ShoppingCart,
  Award,
  Users,
  Target,
  Lightbulb,
  Shield,
  ChevronRight,
  MapPin,
  Phone,
  Mail
} from 'lucide-react'

export default function About() {
  const milestones = [
    {
      year: '2014',
      title: 'Didirikan',
      description: 'CV PIJAR SEMBILAN berdiri dengan fokus pada jasa konstruksi bangunan'
    },
    {
      year: '2016',
      title: 'Ekspansi Layanan',
      description: 'Menambah layanan konstruksi elektrikal untuk memenuhi kebutuhan pasar'
    },
    {
      year: '2018',
      title: 'Divisi Perdagangan',
      description: 'Membuka divisi perdagangan eceran material bangunan dan elektrikal'
    },
    {
      year: '2024',
      title: 'Trusted Partner',
      description: 'Menjadi mitra terpercaya untuk lebih dari 50 klien di Jawa Timur'
    }
  ]

  const team = [
    {
      name: 'Tim Proyek',
      description: 'Profesional berpengalaman dalam manajemen proyek konstruksi',
      icon: Users
    },
    {
      name: 'Tim Teknik',
      description: 'Ahli teknik elektrikal dan sipil dengan sertifikasi terstandar',
      icon: Zap
    },
    {
      name: 'Tim Support',
      description: 'Layanan pelanggan yang siap membantu kebutuhan Anda',
      icon: Shield
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge className="bg-orange-600 text-white px-4 py-2 text-sm font-semibold">
              Tentang Kami
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Tentang <span className="text-orange-500">CV PIJAR SEMBILAN</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Mitra terpercaya untuk solusi konstruksi bangunan, elektrikal, dan material berkualitas tinggi sejak 2014
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Perjalanan Kami
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  CV PIJAR SEMBILAN didirikan dengan visi untuk menjadi penyedia solusi konstruksi dan elektrikal terdepan di Indonesia. Berawal dari fokus pada jasa konstruksi bangunan, kami terus berkembang untuk memenuhi kebutuhan pasar yang semakin kompleks.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Dengan komitmen terhadap kualitas, keamanan, dan kepuasan pelanggan, kami telah menyelesaikan lebih dari 100 proyek dan membangun reputasi sebagai mitra yang dapat diandalkan untuk berbagai kebutuhan konstruksi dan elektrikal.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
                  <div className="text-gray-600 font-semibold">Tahun Pengalaman</div>
                </Card>
                <Card className="p-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                  <div className="text-gray-600 font-semibold">Proyek Selesai</div>
                </Card>
                <Card className="p-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                  <div className="text-gray-600 font-semibold">Klien Puas</div>
                </Card>
                <Card className="p-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">3</div>
                  <div className="text-gray-600 font-semibold">Layanan Utama</div>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src="/logo.png" 
                alt="CV PIJAR SEMBILAN" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Business */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bisnis Inti Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tiga pilar bisnis yang mendukung pertumbuhan dan keberhasilan kami
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Konstruksi Bangunan
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Jasa konstruksi komprehensif untuk bangunan komersial, residential, dan industri dengan standar kualitas tertinggi dan jaminan keamanan.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Bangunan Komersial & Residential
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Renovasi & Restorasi
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Manajemen Proyek
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Konstruksi Elektrikal
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Solusi elektrikal terpadu untuk instalasi, maintenance, dan upgrade sistem kelistrikan bangunan dengan teknologi terkini.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Instalasi Listrik Industri
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Maintenance Preventif
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Panel Kontrol & Otomasi
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Perdagangan Eceran
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Supplier material bangunan dan elektrikal berkualitas dengan harga kompetitif dan pengiriman tepat waktu untuk mendukung proyek Anda.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Material Berkualitas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Harga Kompetitif
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Pengiriman Tepat Waktu
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestone penting dalam sejarah CV PIJAR SEMBILAN
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="text-2xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Didukung oleh tim berpengalaman yang berkomitmen pada keunggulan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <member.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Bergabunglah dengan Klien Puas Kami
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rasakan layanan terbaik dari tim profesional yang berkomitmen pada keunggulan
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4">
            Hubungi Kami
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building,
  Users,
  CheckCircle
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Kantor',
      details: [
        'CV PIJAR SEMBILAN',
        'PERUM KENARI ASRI BLOK Q/3',
        'Desa/Kelurahan Karang Tengah',
        'Kec. Sananwetan, Kota Blitar',
        'Provinsi Jawa Timur 66137'
      ]
    },
    {
      icon: Phone,
      title: 'Kontak Telepon',
      details: [
        '085353874912',
        'Senin - Sabtu: 08:00 - 17:00',
        'Minggu: Tutup'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@pijarsemblan.co.id',
        'support@pijarsemblan.co.id',
        'Respon dalam 24 jam'
      ]
    }
  ]

  const businessHours = [
    { day: 'Senin - Jumat', hours: '08:00 - 17:00' },
    { day: 'Sabtu', hours: '08:00 - 15:00' },
    { day: 'Minggu', hours: 'Tutup' },
    { day: 'Hari Libur', hours: 'Tutup' }
  ]

  const quickServices = [
    {
      icon: Building,
      title: 'Konsultasi Konstruksi',
      description: 'Diskusi kebutuhan proyek konstruksi Anda'
    },
    {
      icon: MessageSquare,
      title: 'Penawaran Harga',
      description: 'Dapatkan penawaran terbaik untuk proyek Anda'
    },
    {
      icon: Users,
      title: 'Kerjasama Bisnis',
      description: 'Peluang kerjasama untuk kontraktor & supplier'
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
              Hubungi Kami
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Hubungi <span className="text-orange-500">PIJAR SEMBILAN</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Kami siap membantu kebutuhan konstruksi, elektrikal, dan material Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                  Kirim Pesan
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Isi formulir di bawah ini dan kami akan segera menghubungi Anda
                </CardDescription>
              </CardHeader>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-gray-600">
                    Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="08123456789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Konsultasi Proyek Konstruksi"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Jelaskan kebutuhan proyek Anda secara detail..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Mengirim...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Kirim Pesan
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </Card>

            {/* Map & Business Hours */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    Lokasi Kami
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Kunjungi kantor kami untuk konsultasi langsung
                  </CardDescription>
                </CardHeader>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Peta Lokasi</p>
                    <p className="text-sm text-gray-400 mt-2">
                      PERUM KENARI ASRI BLOK Q/3, Karang Tengah, Sananwetan, Blitar
                    </p>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                  <MapPin className="mr-2 h-5 w-5" />
                  Buka di Google Maps
                </Button>
              </Card>

              {/* Business Hours */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    Jam Operasional
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Waktu layanan kantor dan proyek
                  </CardDescription>
                </CardHeader>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-semibold text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan Cepat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih layanan yang sesuai dengan kebutuhan Anda untuk respon lebih cepat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickServices.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                  Pilih Layanan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Butuh Bantuan Darurat?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Untuk keadaan darurat terkait listrik atau struktur bangunan, hubungi kami segera
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              085353874912
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4">
              <Mail className="mr-2 h-5 w-5" />
              emergency@pijarsemblan.co.id
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
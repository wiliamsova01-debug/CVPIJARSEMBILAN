'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Scale,
  Clock,
  DollarSign,
  Users,
  Hammer,
  Zap,
  ShoppingCart,
  ChevronRight,
  Mail,
  Phone
} from 'lucide-react'

export default function Terms() {
  const sections = [
    {
      icon: FileText,
      title: 'Penerimaan Syarat dan Ketentuan',
      content: [
        {
          subtitle: 'Kesepakatan',
          description: 'Dengan menggunakan layanan CV PIJAR SEMBILAN, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan syarat ini, harap jangan menggunakan layanan kami.'
        },
        {
          subtitle: 'Perubahan Syarat',
          description: 'Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif segera setelah diposting di website kami. Penggunaan berkelanjutan layanan kami constitutes acceptance dari perubahan tersebut.'
        },
        {
          subtitle: 'Pemberitahuan',
          description: 'Perubahan material akan diberitahukan melalui email atau pemberitahuan di website kami sebelum berlaku efektif.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Layanan Kami',
      content: [
        {
          subtitle: 'Konstruksi Bangunan',
          description: 'Kami menyediakan jasa konstruksi bangunan komersial, residential, dan industri sesuai dengan spesifikasi yang disepakati dalam kontrak.'
        },
        {
          subtitle: 'Konstruksi Elektrikal',
          description: 'Layanan instalasi, maintenance, dan upgrade sistem elektrikal dengan standar keselamatan yang berlaku.'
        },
        {
          subtitle: 'Perdagangan Eceran',
          description: 'Penjualan material bangunan dan elektrikal dengan kualitas terjamin dan harga kompetitif.'
        },
        {
          subtitle: 'Konsultasi Teknis',
          description: 'Layanan konsultasi untuk perencanaan dan optimasi proyek konstruksi dan elektrikal.'
        }
      ]
    },
    {
      icon: Users,
      title: 'Kewajiban Pelanggan',
      content: [
        {
          subtitle: 'Informasi Akurat',
          description: 'Pelanggan wajib memberikan informasi yang akurat, lengkap, dan terkini untuk keperluan proyek.'
        },
        {
          subtitle: 'Pembayaran Tepat Waktu',
          description: 'Pembayaran harus dilakukan sesuai dengan jadwal yang disepakati dalam kontrak.'
        },
        {
          subtitle: 'Akses Lokasi',
          description: 'Pelanggan harus memastikan akses yang memadai ke lokasi proyek selama periode kerja.'
        },
        {
          subtitle: 'Izin dan Perizinan',
          description: 'Pelanggan bertanggung jawab untuk mendapatkan izin yang diperlukan dari pihak berwenang.'
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Batasan Tanggung Jawab',
      content: [
        {
          subtitle: 'Force Majeure',
          description: 'Kami tidak bertanggung jawab atas keterlambatan atau kegagalan pelaksanaan akibat kejadian di luar kendali kami (bencana alam, perang, pemogokan, dll).'
        },
        {
          subtitle: 'Batasan Kerugian',
          description: 'Tanggung jawab kami maksimal sebesar nilai kontrak untuk setiap proyek tertentu.'
        },
        {
          subtitle: 'Kerugian Tidak Langsung',
          description: 'Kami tidak bertanggung jawab atas kerugian tidak langsung, konsekuensial, atau hukuman yang timbul dari penggunaan layanan kami.'
        }
      ]
    },
    {
      icon: Scale,
      title: 'Hukum dan Penyelesaian Sengketa',
      content: [
        {
          subtitle: 'Hukum yang Berlaku',
          description: 'Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia.'
        },
        {
          subtitle: 'Yurisdiksi',
          description: 'Setiap sengketa akan diselesaikan melalui pengadilan di Kota Blitar, Jawa Timur.'
        },
        {
          subtitle: 'Mediasi',
          description: 'Sebelum menempuh jalur hukum, kedua belah pihak sepakat untuk melakukan mediasi terlebih dahulu.'
        }
      ]
    }
  ]

  const paymentTerms = [
    {
      title: 'Pembayaran DP',
      description: 'Uang muka minimal 30% dari total nilai kontrak harus dibayar sebelum proyek dimulai.'
    },
    {
      title: 'Pembayaran Progresif',
      description: 'Pembayaran tahap kedua 40% setelah pencapaian milestone yang disepakati.'
    },
    {
      title: 'Pelunasan',
      description: 'Sisa 30% harus dibayar setelah proyek selesai dan serah terima.'
    },
    {
      title: 'Metode Pembayaran',
      description: 'Pembayaran dapat dilakukan melalui transfer bank atau tunai dengan bukti yang sah.'
    }
  ]

  const warrantyTerms = [
    {
      service: 'Konstruksi Bangunan',
      period: '3-5 tahun',
      coverage: 'Struktur utama, kebocoran, dan kerusakan material.'
    },
    {
      service: 'Konstruksi Elektrikal',
      period: '1-2 tahun',
      coverage: 'Instalasi, komponen elektrikal, dan sistem keamanan.'
    },
    {
      service: 'Material Bangunan',
      period: 'Sesuai produsen',
      coverage: 'Cacat produksi dan kerusakan material.'
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
              Syarat dan Ketentuan
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Syarat & Ketentuan <span className="text-orange-500">PIJAR SEMBILAN</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Panduan lengkap untuk kerjasama profesional dengan perusahaan kami
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="p-8 mb-12">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Selamat datang di CV PIJAR SEMBILAN. Syarat dan Ketentuan ini ("Syarat") mengatur penggunaan layanan yang kami sediakan, termasuk konstruksi bangunan, konstruksi elektrikal, dan perdagangan eceran material.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dengan mengakses atau menggunakan layanan kami, Anda ("Pelanggan") setuju untuk terikat oleh Syarat ini. Jika Anda tidak setuju dengan bagian mana pun dari Syarat ini, Anda tidak boleh menggunakan layanan kami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Syarat ini berlaku untuk semua pelanggan, mitra bisnis, dan pengguna layanan CV PIJAR SEMBILAN.
                </p>
              </CardContent>
            </Card>

            {/* Terms Sections */}
            {sections.map((section, index) => (
              <Card key={index} className="p-8 mb-8">
                <CardHeader className="px-0 pt-0">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-6">
                    {section.content.map((item, idx) => (
                      <div key={idx} className="border-l-4 border-orange-500 pl-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.subtitle}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Payment Terms */}
            <Card className="p-8 mb-8">
              <CardHeader className="px-0 pt-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Syarat Pembayaran
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Syarat pembayaran berlaku untuk semua layanan yang disediakan oleh CV PIJAR SEMBILAN:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {paymentTerms.map((term, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{term.title}</h4>
                      <p className="text-gray-600 text-sm">{term.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Warranty Terms */}
            <Card className="p-8 mb-8">
              <CardHeader className="px-0 pt-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Garansi Layanan
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Kami memberikan garansi untuk semua layanan yang kami sediakan:
                </p>
                <div className="space-y-4">
                  {warrantyTerms.map((warranty, index) => (
                    <div key={index} className="border border-gray-200 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{warranty.service}</h4>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          {warranty.period}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{warranty.coverage}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Specific Terms */}
            <Card className="p-8 mb-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Syarat Khusus Layanan
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Hammer className="h-6 w-6 text-blue-600" />
                      <h4 className="text-lg font-semibold text-gray-900">Konstruksi Bangunan</h4>
                    </div>
                    <ul className="space-y-2 text-gray-600 ml-9">
                      <li>• Perubahan desain setelah kontrak ditandatangani akan dikenakan biaya tambahan</li>
                      <li>• Pelanggan bertanggung jawab atas perizinan IMB dan dokumen lainnya</li>
                      <li>• Waktu pengerjaan dapat berubah tergantung kondisi cuaca dan faktor eksternal</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Zap className="h-6 w-6 text-orange-600" />
                      <h4 className="text-lg font-semibold text-gray-900">Konstruksi Elektrikal</h4>
                    </div>
                    <ul className="space-y-2 text-gray-600 ml-9">
                      <li>• Semua instalasi harus memenuhi standar PLN dan SNI</li>
                      <li>• Pelanggan harus menyediakan daya listrik yang memadai selama pengerjaan</li>
                      <li>• Maintenance berkala disarankan untuk menjaga kinerja sistem</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <ShoppingCart className="h-6 w-6 text-green-600" />
                      <h4 className="text-lg font-semibold text-gray-900">Perdagangan Eceran</h4>
                    </div>
                    <ul className="space-y-2 text-gray-600 ml-9">
                      <li>• Harga dapat berubah sewaktu-waktu mengikuti kondisi pasar</li>
                      <li>• Pengembalian material hanya berlaku dalam 7 hari dengan kondisi baik</li>
                      <li>• Minimum order untuk pengiriman gratis adalah Rp 5.000.000</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="p-8 mb-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Hak Kekayaan Intelektual
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Semua konten, desain, dan materi yang ada di website CV PIJAR SEMBILAN dilindungi oleh hak cekayaan intelektual. Anda tidak boleh:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li>• Menyalin, mendistribusikan, atau memodifikasi konten tanpa izin tertulis</li>
                  <li>• Menggunakan merek, logo, atau desain milik CV PIJAR SEMBILAN</li>
                  <li>• Membuat karya turunan dari konten yang kami sediakan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="p-8 mb-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Pengakhiran Kerjasama
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pengakhiran oleh Pelanggan</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Pelanggan dapat menghentikan kerjasama dengan pemberitahuan tertulis 30 hari sebelumnya. Biaya yang telah dikeluarkan hingga tanggal pengakhiran tetap harus dibayar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pengakhiran oleh CV PIJAR SEMBILAN</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Kami dapat menghentikan kerjasama jika Pelanggan melanggar syarat dan ketentuan atau tidak memenuhi kewajiban pembayaran.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-orange-50">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>Perusahaan:</strong> CV PIJAR SEMBILAN
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>Email:</strong> legal@pijarsemblan.co.id
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>Telepon:</strong> 085353874912
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Scale className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>Alamat:</strong> PERUM KENARI ASRI BLOK Q/3, Karang Tengah, Sananwetan, Blitar, Jawa Timur 66137
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <div className="text-center mt-12">
              <p className="text-gray-500 text-sm">
                Syarat dan Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Siap Memulai Kerjasama?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mari diskusikan proyek Anda dan buat kesepakatan yang saling menguntungkan
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4">
            Hubungi Tim Legal
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
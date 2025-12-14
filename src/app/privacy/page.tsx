'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Lock, 
  Eye,
  Database,
  UserCheck,
  FileText,
  ChevronRight,
  Mail,
  Phone
} from 'lucide-react'

export default function Privacy() {
  const sections = [
    {
      icon: Shield,
      title: 'Informasi yang Kami Kumpulkan',
      content: [
        {
          subtitle: 'Informasi Pribadi',
          description: 'Kami dapat mengumpulkan informasi identifikasi pribadi seperti nama, alamat email, nomor telepon, dan alamat fisik ketika Anda menghubungi kami, mengisi formulir, atau menggunakan layanan kami.'
        },
        {
          subtitle: 'Informasi Non-Pribadi',
          description: 'Kami dapat mengumpulkan informasi non-pribadi seperti jenis browser, sistem operasi, alamat IP, dan informasi teknis lainnya untuk analisis dan peningkatan layanan.'
        },
        {
          subtitle: 'Informasi Proyek',
          description: 'Detail tentang proyek konstruksi atau elektrikal yang Anda diskusikan dengan kami, termasuk spesifikasi teknis dan kebutuhan material.'
        }
      ]
    },
    {
      icon: Database,
      title: 'Penggunaan Informasi',
      content: [
        {
          subtitle: 'Penyediaan Layanan',
          description: 'Untuk menyediakan layanan konstruksi, elektrikal, dan perdagangan material yang Anda minta.'
        },
        {
          subtitle: 'Komunikasi',
          description: 'Untuk menghubungi Anda mengenai penawaran, konfirmasi, dan pembaruan proyek.'
        },
        {
          subtitle: 'Penyempurnaan Layanan',
          description: 'Untuk menganalisis dan meningkatkan kualitas layanan yang kami berikan.'
        },
        {
          subtitle: 'Kepatuhan Hukum',
          description: 'Untuk mematuhi kewajiban hukum dan peraturan yang berlaku.'
        }
      ]
    },
    {
      icon: Lock,
      title: 'Keamanan Data',
      content: [
        {
          subtitle: 'Perlindungan Data',
          description: 'Kami menggunakan langkah-langkah keamanan teknis dan organisasi yang wajar untuk melindungi informasi Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran.'
        },
        {
          subtitle: 'Enkripsi',
          description: 'Data sensitif dienkripsi saat ditransmisikan dan disimpan menggunakan teknologi enkripsi standar industri.'
        },
        {
          subtitle: 'Akses Terbatas',
          description: 'Hanya personel yang berwenang yang memiliki akses ke informasi pribadi Anda dan hanya untuk tujuan yang sah.'
        }
      ]
    },
    {
      icon: Eye,
      title: 'Berbagi Informasi',
      content: [
        {
          subtitle: 'Pihak Ketiga Terpercaya',
          description: 'Kami dapat berbagi informasi dengan mitra bisnis tepercaya seperti supplier material, subkontraktor, dan penyedia layanan teknis yang membantu kami menyediakan layanan.'
        },
        {
          subtitle: 'Kewajiban Hukum',
          description: 'Kami dapat mengungkapkan informasi Anda jika diwajibkan oleh hukum atau untuk melindungi hak, properti, atau keselamatan kami atau pihak lain.'
        },
        {
          subtitle: 'Transfer Bisnis',
          description: 'Jika kami terlibat dalam merger, akuisisi, atau penjualan aset, informasi pelanggan dapat menjadi bagian dari aset yang ditransfer.'
        }
      ]
    },
    {
      icon: UserCheck,
      title: 'Hak Pengguna',
      content: [
        {
          subtitle: 'Akses dan Koreksi',
          description: 'Anda berhak mengakses, memperbarui, atau mengoreksi informasi pribadi yang kami simpan tentang Anda.'
        },
        {
          subtitle: 'Penghapusan Data',
          description: 'Anda dapat meminta penghapusan informasi pribadi Anda, kecuali jika kami diwajibkan menyimpannya untuk tujuan hukum atau bisnis yang sah.'
        },
        {
          subtitle: 'Opt-Out',
          description: 'Anda dapat memilih untuk tidak menerima komunikasi pemasaran dari kami dengan menghubungi kami langsung.'
        }
      ]
    }
  ]

  const cookies = [
    {
      name: 'Cookie Esensial',
      description: 'Cookie yang diperlukan untuk operasi dasar website dan keamanan.'
    },
    {
      name: 'Cookie Performa',
      description: 'Cookie yang membantu kami memahami cara pengguna berinteraksi dengan website.'
    },
    {
      name: 'Cookie Fungsional',
      description: 'Cookie yang mengingat preferensi Anda untuk pengalaman yang dipersonalisasi.'
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
              Kebijakan Privasi
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Kebijakan Privasi <span className="text-orange-500">PIJAR SEMBILAN</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Komitmen kami melindungi privasi dan data pribadi Anda
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
                  CV PIJAR SEMBILAN ("kami", "perusahaan") berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagi informasi ketika Anda menggunakan layanan kami atau mengunjungi website kami.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini. Jika Anda tidak setuju dengan praktik ini, harap jangan menggunakan layanan kami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kebijakan Privasi ini berlaku untuk semua layanan yang ditawarkan oleh CV PIJAR SEMBILAN, termasuk layanan konstruksi bangunan, konstruksi elektrikal, dan perdagangan eceran.
                </p>
              </CardContent>
            </Card>

            {/* Privacy Sections */}
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

            {/* Cookies Section */}
            <Card className="p-8 mb-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Kebijakan Cookie
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna. Cookie adalah file teks kecil yang disimpan di browser Anda. Berikut jenis cookie yang kami gunakan:
                </p>
                <div className="grid md:grid-cols-1 gap-4">
                  {cookies.map((cookie, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{cookie.name}</h4>
                      <p className="text-gray-600 text-sm">{cookie.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="p-8 mb-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Retensi Data
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami akan menyimpan informasi pribadi Anda selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini, kecuali periode penyimpanan yang lebih lama diperlukan atau diizinkan oleh hukum.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kriteria yang kami gunakan untuk menentukan periode retensi meliputi: tujuan pengumpulan data, kebutuhan hukum dan regulasi, dan kebijakan internal kami.
                </p>
              </CardContent>
            </Card>

            {/* International Data */}
            <Card className="p-8 mb-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Transfer Data Internasional
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 leading-relaxed">
                  Informasi pribadi Anda akan disimpan dan diproses di Indonesia. Kami tidak akan mentransfer informasi pribadi Anda ke luar Indonesia tanpa persetujuan Anda dan jaminan perlindungan data yang memadai.
                </p>
              </CardContent>
            </Card>

            {/* Children Privacy */}
            <Card className="p-8 mb-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Privasi Anak
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 leading-relaxed">
                  Layanan kami tidak ditujukan untuk anak di bawah 18 tahun. Kami tidak sengaja mengumpulkan informasi pribadi dari anak di bawah 18 tahun. Jika kami mengetahui bahwa kami telah mengumpulkan informasi pribadi dari anak di bawah 18 tahun, kami akan mengambil langkah-langkah untuk menghapus informasi tersebut segera.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="p-8 mb-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Perubahan Kebijakan
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau perubahan hukum yang berlaku. Versi terbaru akan selalu tersedia di website kami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Perubahan signifikan akan diberitahukan kepada Anda melalui email atau pemberitahuan di website kami sebelum perubahan tersebut berlaku.
                </p>
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
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau praktik privasi kami, silakan hubungi kami:
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
                      <strong>Email:</strong> privacy@pijarsemblan.co.id
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>Telepon:</strong> 085353874912
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-blue-600" />
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
                Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pertanyaan Tentang Privasi?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu menjawab pertanyaan Anda tentang kebijakan privasi kami
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4">
            <Mail className="mr-2 h-5 w-5" />
            Hubungi Tim Privasi
          </Button>
        </div>
      </section>
    </div>
  )
}
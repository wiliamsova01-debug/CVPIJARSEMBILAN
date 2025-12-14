'use client'

import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Building,
  Zap,
  ShoppingCart,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react'

export default function Footer() {
  const services = [
    {
      icon: Building,
      title: 'Konstruksi Bangunan',
      items: [
        'Bangunan Komersial',
        'Bangunan Residential',
        'Bangunan Industri',
        'Renovasi & Restorasi'
      ]
    },
    {
      icon: Zap,
      title: 'Konstruksi Elektrikal',
      items: [
        'Instalasi Listrik',
        'Sistem Pencahayaan',
        'Panel Kontrol',
        'Maintenance Elektrikal'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Perdagangan Eceran',
      items: [
        'Material Bangunan',
        'Material Elektrikal',
        'Pengiriman Proyek',
        'Konsultasi Material'
      ]
    }
  ]

  const quickLinks = [
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Layanan', href: '/services' },
    { name: 'Kontak', href: '/contact' },
    { name: 'Portfolio', href: '/portfolio' }
  ]

  const legalLinks = [
    { name: 'Kebijakan Privasi', href: '/privacy' },
    { name: 'Syarat & Ketentuan', href: '/terms' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="CV PIJAR SEMBILAN" 
                className="h-12 w-auto"
              />
              <div>
                <div className="text-xl font-bold">
                  CV <span className="text-orange-500">PIJAR SEMBILAN</span>
                </div>
                <div className="text-sm text-gray-400">
                  Konstruksi • Elektrikal • Perdagangan
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Mitra terpercaya untuk solusi konstruksi bangunan, elektrikal, dan material berkualitas tinggi sejak 2014.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  PERUM KENARI ASRI BLOK Q/3, Karang Tengah, Sananwetan, Blitar
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">085353874912</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@pijarsemblan.co.id</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-500">Layanan Kami</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-2">
                    <service.icon className="h-4 w-4 text-orange-500" />
                    <h4 className="font-semibold text-white">{service.title}</h4>
                  </div>
                  <ul className="space-y-1 ml-6">
                    {service.items.map((item, idx) => (
                      <li key={idx}>
                        <Link 
                          href="/services"
                          className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-500">Tautan Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">Jam Operasional</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <div>
                    <div className="text-gray-300 text-sm">Senin - Jumat</div>
                    <div className="text-gray-400 text-xs">08:00 - 17:00</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <div>
                    <div className="text-gray-300 text-sm">Sabtu</div>
                    <div className="text-gray-400 text-xs">08:00 - 15:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-500">Hubungi Kami</h3>
            
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <p className="text-gray-300 mb-4">
                Butuh konsultasi untuk proyek Anda? Tim kami siap membantu.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-300 text-sm">085353874912</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-300 text-sm">info@pijarsemblan.co.id</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Ikuti Kami</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CV PIJAR SEMBILAN. Hak Cipta Dilindungi.
            </div>
            
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
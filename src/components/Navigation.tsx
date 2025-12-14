'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown
} from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { 
      name: 'Layanan', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Konstruksi Bangunan', href: '/services#construction' },
        { name: 'Konstruksi Elektrikal', href: '/services#electrical' },
        { name: 'Perdagangan Eceran', href: '/services#retail' }
      ]
    },
    { name: 'Kontak', href: '/contact' }
  ]

  const legalLinks = [
    { name: 'Kebijakan Privasi', href: '/privacy' },
    { name: 'Syarat & Ketentuan', href: '/terms' }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>085353874912</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>info@pijarsemblan.co.id</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="hidden lg:inline">Blitar, Jawa Timur</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {legalLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="hover:text-orange-400 transition-colors text-xs"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="CV PIJAR SEMBILAN" 
              className="h-12 w-auto"
            />
            <div>
              <div className="text-xl font-bold text-gray-900">
                CV <span className="text-orange-600">PIJAR SEMBILAN</span>
              </div>
              <div className="text-xs text-gray-600 hidden sm:block">
                Konstruksi • Elektrikal • Perdagangan
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isServicesDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200"
                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="pl-8 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-600 hover:text-orange-600 text-sm transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                  Hubungi Kami
                </Button>
              </div>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center space-x-2 px-4">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-700">085353874912</span>
                </div>
                <div className="flex items-center space-x-2 px-4">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-700">info@pijarsemblan.co.id</span>
                </div>
                <div className="flex items-center space-x-2 px-4">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-700">Blitar, Jawa Timur</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
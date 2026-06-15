import React from 'react'
import { GraduationCap, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-600 p-2 rounded">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">SIT Cahaya Ilmu</h3>
                <p className="text-xs text-gray-400">Sekolah Islam Terpadu</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Membentuk generasi Islami yang berilmu dan berakhlak mulia, siap
              menghadapi tantangan zaman dengan tetap berpegang teguh pada nilai-nilai Islam.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 p-2 rounded">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4">Jenjang Pendidikan</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://cahayailmusdit.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  SD IT Cahaya Ilmu
                </a>
              </li>
              <li>
                <a
                  href="https://cahayailmusmpit.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  SMP IT Cahaya Ilmu
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4">Kontak</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@cahayailmu.sch.id</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Jl. Pendidikan No. 123, Kota Cahaya Ilmu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SIT Cahaya Ilmu. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

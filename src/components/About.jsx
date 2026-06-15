import React from 'react'
import { Heart, Target, Eye } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Tentang Kami
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Sekolah Islam Terpadu Cahaya Ilmu hadir sebagai wujud komitmen kami dalam
            mencetak generasi muslim yang unggul, berakhlak mulia, dan siap menghadapi
            tantangan zaman dengan tetap berpegang teguh pada nilai-nilai Islam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Visi</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Menjadi lembaga pendidikan Islam terdepan yang menghasilkan generasi
              berilmu, berakhlak mulia, dan berwawasan global.
            </p>
          </div>

          <div className="card text-center">
            <div className="bg-gold-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-gold-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Misi</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Menyelenggarakan pendidikan berkualitas yang mengintegrasikan ilmu
              pengetahuan umum dengan nilai-nilai Islam secara seimbang.
            </p>
          </div>

          <div className="card text-center">
            <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Nilai</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Iman, Ilmu, Amal, Akhlak mulia, dan tanggung jawab sebagai dasar
              dalam setiap aspek pendidikan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

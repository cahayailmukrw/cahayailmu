import React from 'react'
import { ArrowRight, Star, GraduationCap } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-primary-600">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <span className="ml-2 font-semibold">Terakreditasi & Terpercaya</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Membentuk Generasi{' '}
              <span className="text-primary-600">
                Islami
              </span>{' '}
              yang Berilmu dan Berakhlak Mulia
            </h1>

            <p className="text-base text-gray-600 leading-relaxed">
              Sekolah Islam Terpadu Cahaya Ilmu berkomitmen mencetak generasi muslim yang
              unggul dalam ilmu pengetahuan, teknologi, serta memiliki akhlak mulia sesuai
              dengan tuntunan Al-Quran dan As-Sunnah.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#schools"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>Pilih Jenjang Pendidikan</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#about"
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <span>Pelajari Lebih Lanjut</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600">Tahun</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">1000+</div>
                <div className="text-sm text-gray-600">Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Guru</div>
              </div>
            </div>
          </div>

          <div className="bg-primary-600 rounded-xl p-6 shadow">
            <div className="bg-white rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <GraduationCap className="h-10 w-10 text-primary-600" />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900">SIT Cahaya Ilmu</h3>
                  <p className="text-sm text-gray-600">Sekolah Islam Terpadu</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-primary-50 rounded p-4 text-center">
                  <div className="text-3xl mb-2">📚</div>
                  <div className="font-semibold text-gray-900">SD IT</div>
                  <div className="text-sm text-gray-600">Kelas 1-6</div>
                </div>
                <div className="bg-gold-50 rounded p-4 text-center">
                  <div className="text-3xl mb-2">🎓</div>
                  <div className="font-semibold text-gray-900">SMP IT</div>
                  <div className="text-sm text-gray-600">Kelas 7-9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'
import { ExternalLink, GraduationCap, BookOpen, ArrowRight } from 'lucide-react'

const SchoolLinks = () => {
  const schools = [
    {
      name: 'SD IT Cahaya Ilmu',
      description: 'Sekolah Dasar Islam Terpadu untuk kelas 1-6 dengan kurikulum terpadu antara pendidikan umum dan pendidikan agama Islam.',
      url: 'https://cahayailmusdit.vercel.app/',
      icon: BookOpen,
      bgColor: 'bg-primary-50',
      features: ['Kurikulum Terpadu', 'Tahfidz Al-Quran', 'Ekstrakurikuler Islami']
    },
    {
      name: 'SMP IT Cahaya Ilmu',
      description: 'Sekolah Menengah Pertama Islam Terpadu untuk kelas 7-9 dengan fokus pada pengembangan akademik dan karakter islami.',
      url: 'https://cahayailmusmpit.vercel.app/',
      icon: GraduationCap,
      bgColor: 'bg-gold-50',
      features: ['Program Unggulan', 'Bimbingan Karakter', 'Persiapan SMA']
    }
  ]

  return (
    <section id="schools" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Jenjang Pendidikan
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Pilih jenjang pendidikan yang sesuai dengan kebutuhan putra-putri Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {schools.map((school, index) => (
            <div
              key={index}
              className={`card ${school.bgColor}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary-600 p-3 rounded">
                  <school.icon className="h-6 w-6 text-white" />
                </div>
                <span className="bg-white px-3 py-1 rounded text-sm font-semibold text-gray-700 shadow">
                  {index === 0 ? 'Kelas 1-6' : 'Kelas 7-9'}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{school.name}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{school.description}</p>

              <div className="space-y-2 mb-4">
                {school.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary-600 text-white font-semibold py-2 px-4 rounded"
              >
                <span>Kunjungi Website</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Butuh Informasi Lebih Lanjut?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Hubungi kami untuk konsultasi mengenai pendaftaran dan program pendidikan
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Hubungi Kami</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchoolLinks

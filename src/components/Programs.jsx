import React from 'react'
import { BookOpen, Calculator, Palette, Music, Trophy, Code } from 'lucide-react'

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Tahfidz Al-Quran',
      description: 'Program hafalan Al-Quran dengan target yang terukur dan metode yang efektif.'
    },
    {
      icon: Calculator,
      title: 'Sains & Matematika',
      description: 'Pembelajaran sains dan matematika dengan pendekatan praktis dan menyenangkan.'
    },
    {
      icon: Palette,
      title: 'Seni & Kreativitas',
      description: 'Pengembangan bakat seni dan kreativitas melalui berbagai kegiatan ekstrakurikuler.'
    },
    {
      icon: Music,
      title: 'Musik Islami',
      description: 'Pembelajaran musik dengan nuansa Islami yang mendidik dan menghibur.'
    },
    {
      icon: Trophy,
      title: 'Olahraga',
      description: 'Berbagai kegiatan olahraga untuk menjaga kesehatan fisik dan mental siswa.'
    },
    {
      icon: Code,
      title: 'Teknologi & Coding',
      description: 'Pengenalan teknologi dan dasar pemrograman untuk persiapan era digital.'
    }
  ]

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Program Unggulan
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Berbagai program pendidikan dan pengembangan diri yang dirancang untuk
            mendukung tumbuh kembang siswa secara optimal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="card">
              <div className="bg-primary-600 w-12 h-12 rounded flex items-center justify-center mb-4">
                <program.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs

import React from 'react'
import { BookOpen, Users, Award, Clock, Shield, Globe } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Kurikulum Terpadu',
      description: 'Integrasi kurikulum nasional dengan pendidikan Islam yang seimbang dan komprehensif.'
    },
    {
      icon: Users,
      title: 'Guru Profesional',
      description: 'Tenaga pengajar berpengalaman, berkualifikasi, dan berdedikasi tinggi.'
    },
    {
      icon: Award,
      title: 'Prestasi Akademik',
      description: 'Raihan prestasi akademik dan non-akademik di berbagai kompetisi tingkat daerah dan nasional.'
    },
    {
      icon: Clock,
      title: 'Program Tahfidz',
      description: 'Program menghafal Al-Quran dengan metode yang sistematis dan menyenangkan.'
    },
    {
      icon: Shield,
      title: 'Lingkungan Islami',
      description: 'Suasana belajar yang kondusif dengan nilai-nilai Islam yang diaplikasikan sehari-hari.'
    },
    {
      icon: Globe,
      title: 'Fasilitas Modern',
      description: 'Sarana dan prasarana pendidikan yang lengkap dan modern untuk menunjang proses belajar.'
    }
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Keunggulan Kami
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Berbagai keunggulan yang membuat SIT Cahaya Ilmu menjadi pilihan terbaik
            untuk pendidikan putra-putri Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="bg-primary-600 w-12 h-12 rounded flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

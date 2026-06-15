import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const whatsappNumber = '6281234567890'
    const text = `Halo SIT Cahaya Ilmu,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo. Telepon: ${formData.phone}\n\nPesan:\n${formData.message}`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau
            ingin informasi lebih lanjut
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="card flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded">
                <Phone className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Telepon</h3>
                <p className="text-gray-600 text-sm">+62 812-3456-7890</p>
                <p className="text-gray-600 text-sm">+62 811-2345-6789</p>
              </div>
            </div>

            <div className="card flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded">
                <Mail className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">info@cahayailmu.sch.id</p>
                <p className="text-gray-600 text-sm">pendaftaran@cahayailmu.sch.id</p>
              </div>
            </div>

            <div className="card flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded">
                <MapPin className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Alamat</h3>
                <p className="text-gray-600 text-sm">
                  Jl. Pendidikan No. 123<br />
                  Kecamatan Sejahtera<br />
                  Kota Cahaya Ilmu 12345
                </p>
              </div>
            </div>

            <div className="card flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded">
                <Clock className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Jam Operasional</h3>
                <p className="text-gray-600 text-sm">
                  Senin - Jumat: 07:00 - 16:00<br />
                  Sabtu: 08:00 - 12:00<br />
                  Minggu: Tutup
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Kirim Pesan via WhatsApp</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Masukkan email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  No. Telepon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Masukkan nomor telepon"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Tulis pesan Anda"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

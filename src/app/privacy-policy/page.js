import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-mono bg-page">
       <Link href="/" className="fixed top-0 left-0 p-8 z-20">
        <Image
          src="/images/logo.png"
          alt="omnia"
          className="w-[150px]"
          width={154}
          height={56}
        />
      </Link>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full px-10 mt-[8rem] mb-[6rem]">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p>Selamat datang di Omnia AI – Your AI Employee. Privasi dan keamanan data Anda adalah prioritas utama kami. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda saat menggunakan layanan kami.</p>

          <h2 className="text-xl font-bold mt-7 mb-2">1. Informasi yang Kami Kumpulkan</h2>
          <p>Kami dapat mengumpulkan informasi berikut dari Anda:</p>
          <ul className="list-disc ml-4">
            <li>Informasi Identitas: nama, email, nomor WhatsApp.</li>
            <li>Informasi Bisnis: data operasional seperti penjualan, jadwal booking, database pelanggan, atau data lain yang Anda integrasikan ke AI Employee.</li>
            <li>Informasi Teknologi: alamat IP, perangkat, cookies, log aktivitas.</li>
            <li>Informasi Pembayaran: data transaksi yang diproses melalui payment gateway pihak ketiga.</li>
          </ul>

          <h2 className="text-xl font-bold mt-7 mb-2">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
          <p>Data Anda digunakan untuk:</p>
          <ul className="list-disc ml-4">
            <li>Menyediakan layanan otomatisasi AI Employee.</li>
            <li>Personalisasi pengalaman dan integrasi dengan tools Anda.</li>
            <li>Pengiriman notifikasi, reminder, dan laporan.</li>
            <li>Keperluan analisis performa dan peningkatan layanan.</li>
            <li>Tujuan keamanan dan kepatuhan hukum.</li>
          </ul>

          <h2 className="text-xl font-bold mt-7 mb-2">3. Keamanan Data Anda</h2>
          <p>Kami telah menerapkan ISO/IEC 27001 – standar internasional untuk sistem manajemen keamanan informasi (ISMS). Ini berarti:</p>
          <ul className="list-disc ml-4">
            <li>Kami memiliki prosedur keamanan ketat dan audit berkala.</li>
            <li>Semua data disimpan secara terenkripsi di server yang aman.</li>
            <li>Akses data dibatasi hanya untuk tim yang berwenang dan relevan.</li>
          </ul>

          <h2 className="text-xl font-bold mt-7 mb-2">4. Akses & Kontrol Pengguna</h2>
          <p>Anda berhak untuk:</p>
          <ul className="list-disc ml-4">
            <li>Mengakses, memperbarui, atau menghapus data pribadi Anda.</li>
            <li>Menarik persetujuan pemrosesan kapan saja.</li>
            <li>Meminta portabilitas data.</li>
            <li>Mengajukan keberatan atau keluhan atas penggunaan data.</li>
          </ul>
          <p>Hubungi kami melalui: <a href="mailto:hello@useomnia.ai">hello@useomnia.ai</a></p>

          <h2 className="text-xl font-bold mt-7 mb-2">5. Pihak Ketiga & Integrasi</h2>
          <p>Layanan Omnia AI dapat terhubung ke tools seperti WhatsApp API, Google Sheets, dan lainnya. Kami tidak menyimpan kredensial pihak ketiga Anda, dan hanya mengakses data yang diperlukan sesuai izin yang Anda berikan. <br/>
          Kami tidak akan menjual atau membagikan data Anda kepada pihak ketiga tanpa persetujuan eksplisit, kecuali diwajibkan oleh hukum.</p>

          <h2 className="text-xl font-bold mt-7 mb-2">6. Perubahan Kebijakan</h2>
          <p>Kami dapat memperbarui kebijakan ini sesuai dengan perubahan regulasi dan layanan. Semua pembaruan akan diumumkan di halaman ini dan berlaku segera setelah dipublikasikan.</p>
        </div>
      </main>
    </div>
  );
}

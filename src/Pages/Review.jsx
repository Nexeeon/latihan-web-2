import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/footer'

function Review() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex-grow">
                <h1 className='font-bold text-5xl py-7 text-center'>
                    Review dari peserta sintax
                </h1>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                        {[
                            {
                                name: "Calvin ",
                                review: "Acara Sintax sangat bermanfaat dan menambah wawasan saya tentang teknologi terbaru.",
                                rating: 5,
                            },
                            {
                                name: "aulia",
                                review: "Pembicaranya inspiratif dan materinya mudah dipahami. Sangat direkomendasikan!",
                                rating: 5,
                            },
                            {
                                name: "fajar",
                                review: "Saya mendapatkan banyak relasi baru dan pengalaman berharga di Sintax.",
                                rating: 5,
                            },
                            {
                                name: "budi",
                                review: "Acara berjalan lancar dan menyenangkan. Terima kasih Sintax!",
                                rating: 5,
                            },
                            {
                                name: "rifqi",
                                review: "Sesi workshop sangat interaktif dan membantu saya memahami materi lebih dalam.",
                                rating: 5,
                            },
                            {
                                name: "agus",
                                review: "abang mentornya ganteng banget .",
                                rating: 5,
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col min-h-[180px]">
                                <div className="flex items-center mb-2">
                                    <span className="font-semibold text-lg">{item.name}</span>
                                    <span className="ml-auto flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                                            </svg>
                                        ))}
                                    </span>
                                </div>
                                <p className="text-gray-700">{item.review}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Review

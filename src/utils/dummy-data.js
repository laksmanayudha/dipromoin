const dummy = [
    {
        image: "/images/opening-5.jpg",
        title: "Promo Hari ini beli 1 Pcs Gratis 2 Pcs!! Buruan Serbu...Promo Beli 3 Pcs Gratis!! Buruan Serbu...Promo Beli 3 Pcs Gratis!! Buruan Serbu...Promo Beli 3 Pcs Gratis!! Buruan Serbu...",
        address: "City Mall - 257 Main Street, Jakarta, Indonesia",
        description: "Dapatkan 2 potong pakaian dengan total minimal pembelian 1 pakaian secara gratis ..."
    
    },
    {
        image: "/images/KHU-style.jpg",
        title: "Promo Hari ini beli 1 Pcs Gratis 2 Pcs!! Buruan Serbu...Promo Beli 3 Pcs Gratis!! Buruan Serbu...Promo Beli 3 Pcs Gratis!! Buruan Serbu...Promo Beli 3 Pcs Gratis!! Buruan Serbu...",
        address: "City Mall - 257 Main Street, Jakarta, Indonesia",
        description: "Dapatkan 2 potong pakaian dengan total minimal pembelian 1 pakaian secara gratis ..."
    
    },
    {
        image: "/images/chef.jpg",
        title: "Promo Beli 2 Pcs Gratis!! Buruan Serbu...Promo Beli 3 Pcs Gratis!! Buruan Serbu...Promo Beli 3 Pcs Gratis!! Buruan Serbu...Promo Beli 3 Pcs Gratis!! Buruan Serbu...",
        address: "KHU Style - Jl. DR. Cipto Mangunkusumo No.26, Kesambi, Kec. Kesambi, Kota Cirebon KHU Style - Jl. DR. Cipto Mangunkusumo No.26, Kesambi, Kec. Kesambi, Kota CirebonKHU Style - Jl. DR. Cipto Mangunkusumo No.26, Kesambi, Kec. Kesambi, Kota Cirebon",
        description: "Beli 3 potong pakaian dengan total minimal pembelian Rp 120.000 dapatkan gratis 1 baju bebas pilih berdasarkan..."
    
    }
];

const dummyPromo = [
    {
        image: "/images/opening-5.jpg",
        title: "Soft Promo Diskon 20% Off !! Buruan Daftar...",
        subtitle: "Pondok Indah - 3 menit yang lalu",
        description: "Dapatkan 2 potong pakaian dengan total minimal pembelian 1 pakaian secara gratis ..."
    },
    {
        image: "/images/KHU-style.jpg",
        title: "Soft Promo Diskon 20% Off !! Buruan Daftar...",
        subtitle: "Pondok Indah - 3 menit yang lalu",
        description: "Dapatkan 2 potong pakaian dengan total minimal pembelian 1 pakaian secara gratis ..."
    },
    {
        image: "/images/chef.jpg",
        title: "Soft Promo Diskon 20% Off !! Buruan Daftar...",
        subtitle: "Gatau - 16 Agustus 2021",
        description: "Beli 3 potong pakaian dengan total minimal pembelian Rp 120.000 dapatkan gratis 1 baju bebas pilih berdasarkan..."
    }
]

const dummyUMKM = [
    {
        image: "/images/umkm-4.png",
        title: "Toko Kue Mbak Rina",
        subtitle: "Kota Denpasar - Jalan Sudirman ...",
        description: "Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue"
    },
    {
        image: "/images/umkm-3.png",
        title: "SRC Pojok Lokal",
        subtitle: "Kota Jakarta - Jalan Sudriman ...",
        description: "Menjual beraman jenis makanan kering. Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue"
    },
    {
        image: "/images/umkm-1.jpg",
        title: "Kerajinan Pak Nur",
        subtitle: "Kota Jakarta - Jalan Sudriman ...",
        description: "Kerajinan harga murah kualitas premium. Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue Toko kue berdiri sejak 2001. Menyediakan beragam jenis kue"
    }
]

/* something dummy
<Card
    image= "/images/chef.jpg"
    title= "Soft Promo Diskon 20% Off !! Buruan Daftar..."
    subtitle= "Gatau - 16 Agustus 2021"
    description= "Beli 3 potong pakaian dengan total minimal pembelian Rp 120.000 dapatkan gratis 1 baju bebas pilih berdasarkan..."
/>
*/ 

const dummyCities = [
    {
        id: "1",
        name: "Jakarta"
    },
    {
        id: "2",
        name: "Denpasar"
    },
    {
        id: "3",
        name: "Surabaya"
    },
    {
        id: "5",
        name: "Yogayakarta"
    },
    {
        id: "6",
        name: "Aceh"
    },
    {
        id: "7",
        name: "Bandung"
    },
];

const dummyPromos = [
    {
        id: "1",
        from: "2022-10-23",
        to: "2022-10-26",
        image: "/images/opening-3.jpg", 
        title: "Grand Opening Diskon 50%", 
        umkm: "Kiosko Restaurant", 
        city: "Kota Jakarta",
        address: "Jalan Teuku Umar No. 24", 
        time: "3 menit yang lalu", 
        description: `
            Dapatkan diskon hingga 50% dengan minimal pembelian Rp. 50.000 mulai pukul 17.00 WIB - 21.000 WIB. Ketentuan Diskon:
            1. Minimal membeli 3 jenis item yang berbeda
            2. Ajak teman kamu 2 orang atau lebih
            3. Warga negara indonesia                             
            
            Dapatkan diskon hingga 50% dengan minimal pembelian Rp. 50.000 mulai pukul 17.00 WIB - 21.000 WIB. Ketentuan Diskon:
            1. Minimal membeli 3 jenis item yang berbeda
            2. Ajak teman kamu 2 orang atau lebih
            3. Warga negara indonesia                            
                                                      
            Dapatkan diskon hingga 50% dengan minimal pembelian Rp. 50.000 mulai pukul 17.00 WIB - 21.000 WIB. Ketentuan Diskon:
            1. Minimal membeli 3 jenis item yang berbeda
            2. Ajak teman kamu 2 orang atau lebih
            3. Warga negara indonesia
        `, 
        link: "https://www.instagram.com/laksmanayudha_/?hl=en", 
        phone: "https://wa.me/6282235537167",
        urlDetail: "/",
        urlUMKM: "/umkm" 
    },
    {
        id: "2",
        from: "2022-10-23",
        to: "2022-10-26",
        image: "/images/opening-2.jpg", 
        title: "Soft Diskon 20% off", 
        umkm: "Pondok Indah", 
        city: "Kota Denpasar",
        address: "Jalan Nangka Umar No. 278", 
        time: "4 menit yang lalu", 
        description: `
            Dapatkan diskon hingga 20% dengan minimal pembelian Rp. 40.000 dengan item yang berbeda - beda                            
        `, 
        link: "https://www.instagram.com/laksmanayudha_/?hl=en", 
        phone: "https://wa.me/6282235537167",
        urlDetail: "/",
        urlUMKM: "/umkm" 
    },
    {
        id: "3",
        from: "2022-10-23",
        to: "2022-10-26",
        image: "/images/opening-1.jpg", 
        title: "Beli 1 Gratis 1", 
        umkm: "MeeNUM", 
        city: "Kota Surabaya",
        address: "Jalan Teuku Umar No. 26", 
        time: "16 Agustus 2022", 
        description: `
            Beli 1 Gratis 1 Ayoo Beli silahkan ambil sempuasnya semasih ada kesmatan hingga sore nanti.
        `, 
        link: "https://www.instagram.com/laksmanayudha_/?hl=en", 
        phone: "https://wa.me/6282235537167",
        urlDetail: "/",
        urlUMKM: "/umkm" 
    },
    {
        id: "4",
        from: "2022-10-23",
        to: "2022-10-26",
        image: "/images/opening-2.jpg", 
        title: "Soft Diskon 20% off", 
        umkm: "Pondok Indah", 
        city: "Kota Denpasar",
        address: "Jalan Nangka Umar No. 278", 
        time: "4 menit yang lalu", 
        description: `
            Dapatkan diskon hingga 20% dengan minimal pembelian Rp. 40.000 dengan item yang berbeda - beda                            
        `, 
        link: "https://www.instagram.com/laksmanayudha_/?hl=en", 
        phone: "https://wa.me/6282235537167",
        urlDetail: "/",
        urlUMKM: "/umkm" 
    },
    {
        id: "5",
        from: "2022-10-23",
        to: "2022-10-26",
        image: "/images/opening-3.jpg", 
        title: "Grand Opening Diskon 50%", 
        umkm: "Kiosko Restaurant", 
        city: "Kota Jakarta",
        address: "Jalan Teuku Umar No. 24", 
        time: "3 menit yang lalu", 
        description: `
            Dapatkan diskon hingga 50% dengan minimal pembelian Rp. 50.000 mulai pukul 17.00 WIB - 21.000 WIB. Ketentuan Diskon:
            1. Minimal membeli 3 jenis item yang berbeda
            2. Ajak teman kamu 2 orang atau lebih
            3. Warga negara indonesia                             
            
            Dapatkan diskon hingga 50% dengan minimal pembelian Rp. 50.000 mulai pukul 17.00 WIB - 21.000 WIB. Ketentuan Diskon:
            1. Minimal membeli 3 jenis item yang berbeda
            2. Ajak teman kamu 2 orang atau lebih
            3. Warga negara indonesia                            
                                                      
            Dapatkan diskon hingga 50% dengan minimal pembelian Rp. 50.000 mulai pukul 17.00 WIB - 21.000 WIB. Ketentuan Diskon:
            1. Minimal membeli 3 jenis item yang berbeda
            2. Ajak teman kamu 2 orang atau lebih
            3. Warga negara indonesia
        `, 
        link: "https://www.instagram.com/laksmanayudha_/?hl=en", 
        phone: "https://wa.me/6282235537167",
        urlDetail: "/",
        urlUMKM: "/umkm" 
    },
]

const dummyUMKMProfile = [
    {
        id: "1",
        name: "Kerajinan Pak Nur",
        profileImage: "/images/umkm-1.jpg",
        description: "Kerajinan Tangan Pak Nur adalah kerajinan asli dan khas indonesia. Berdiri tahun 1998 oleh Bapak Nur Hidayat Pramana. Sebagian besar kerajinan dibuat dengan bahan lokal yang di ambil dari ...",
        phone: "https://wa.me/6282235537167",
        link: "https://www.instagram.com/laksmanayudha_/?hl=en",
        city: "Denpasar",
        address: "Jalan Nangka No. 23",
    },
    {
        id: "2",
        name: "KHS Style",
        profileImage: "/images/umkm-2.jpg",
        description: "KHS Style adalah fashion asli dan khas indonesia. Berdiri tahun 1998 oleh Bapak Nur Hidayat Pramana. Sebagian besar kerajinan dibuat dengan bahan lokal yang di ambil dari ...",
        phone: "https://wa.me/6282235537167",
        link: "https://www.instagram.com/laksmanayudha_/?hl=en",
        city: "Denpasar",
        address: "Jalan Nangka No. 236",
    },
]

const getUMKM = (id) => {
    const user = dummyUMKMProfile.find(umkm => umkm.id === id);
    if (!user) {
        return { error: true, data: null };
    }
    return { error: false, data: user };
}

const getPromo = (id) => {
    const promo = dummyPromos.find(promo => promo.id === id);
    if (!promo) {
        return { error: true, data: null };
    }
    return { error: false, data: promo };
}

export { 
    dummy, 
    dummyPromo, 
    dummyUMKM, 
    dummyPromos,
    dummyUMKMProfile,
    getUMKM,
    getPromo 
};
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
        id: "4",
        name: "Tangerang"
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
        from: "2022-10-18",
        to: "2022-10-26",
        image: "/images/opening-3.jpg", 
        title: "Grand Opening Diskon 50%", 
        umkm: "3", 
        city: "6",
        address: "Jalan Teuku Umar No. 24", 
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
        phone: "6282235537167",
    },
    {
        id: "2",
        from: "2022-08-20",
        to: "2022-10-26",
        image: "/images/opening-2.jpg", 
        title: "Soft Diskon 20% off", 
        umkm: "4", 
        city: "5",
        address: "Jalan Nangka Umar No. 278", 
        description: `
            Dapatkan diskon hingga 20% dengan minimal pembelian Rp. 40.000 dengan item yang berbeda - beda                            
        `, 
        link: "https://www.instagram.com/laksmanayudha_/?hl=en", 
        phone: "6282235537167",
        urlDetail: "/",
        urlUMKM: "/umkm" 
    },
    {
        id: "3",
        from: "2022-10-23",
        to: "2022-10-26",
        image: "/images/opening-1.jpg", 
        title: "Beli 1 Gratis 1", 
        umkm: "3", 
        city: "4",
        address: "Jalan Teuku Umar No. 26",  
        description: `
            Beli 1 Gratis 1 Ayoo Beli silahkan ambil sempuasnya semasih ada kesmatan hingga sore nanti.
        `, 
        link: "https://www.instagram.com/laksmanayudha_/?hl=en", 
        phone: "6282235537167",
    },
    {
        id: "4",
        from: "2022-10-23",
        to: "2022-10-26",
        image: "/images/opening-4.jpg", 
        title: "Grand Opening Diskon 35% off", 
        umkm: "2", 
        city: "2",
        address: "Jalan Nangka Umar No. 278", 
        description: `
            Dapatkan diskon hingga 20% dengan minimal pembelian Rp. 40.000 dengan item yang berbeda - beda                            
        `, 
        link: "https://www.instagram.com/laksmanayudha_/?hl=en", 
        phone: "6282235537167",
    },
    {
        id: "5",
        from: "2022-10-24",
        to: "2022-10-27",
        image: "/images/wardani.jpg", 
        title: "Festival Nasi Campur Diskon hingga 60%", 
        umkm: "3", 
        city: "2",
        address: "Jalan Teuku Umar No. 24",  
        description: `
            Dapatkan diskon hingga 50% dengan minimal pembelian Rp. 50.000 mulai pukul 17.00 WIB - 21.000 WIB. Ketentuan Diskon:
            1. Minimal membeli 3 jenis item yang berbeda
            2. Ajak teman kamu 2 orang atau lebih                          
        `, 
        link: "https://www.instagram.com/laksmanayudha_/?hl=en", 
        phone: "6282235537167",
    },
    {
        id: "6",
        from: "2022-10-25",
        to: "2022-10-27",
        image: "/images/promo-lunch.jpg", 
        title: "Promo Luch Diskon 50%", 
        umkm: "1", 
        city: "1",
        address: "Jalan Teuku Umar No. 24", 
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
        phone: "6282235537167",
    },
    {
        id: "7",
        from: "2022-10-23",
        to: "2022-10-26",
        image: "/images/opening-3.jpg", 
        title: "Grand Opening Diskon 50%", 
        umkm: "1", 
        city: "6",
        address: "Jalan Teuku Umar No. 24", 
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
        phone: "6282235537167",
    },
]

const dummyUMKMProfile = [
    {
        id: "1",
        name: "Kerajinan Pak Nur",
        email: "paknur@email.com",
        password: "12345678",
        profileImage: "/images/umkm-1.jpg",
        description: "Kerajinan Tangan Pak Nur adalah kerajinan asli dan khas indonesia. Berdiri tahun 1998 oleh Bapak Nur Hidayat Pramana. Sebagian besar kerajinan dibuat dengan bahan lokal yang di ambil dari ...",
        phone: "6282235537167",
        link: "https://www.instagram.com/laksmanayudha_/?hl=en",
        city: "4",
        address: "Jalan Nangka No. 235 Bedahulu",
    },
    {
        id: "2",
        name: "KHS Style",
        email: "khsstyle@email.com",
        password: "12345678",
        profileImage: "/images/umkm-2.jpg",
        description: "KHS Style adalah fashion asli dan khas indonesia. Berdiri tahun 1998 oleh Bapak Nur Hidayat Pramana. Sebagian besar kerajinan dibuat dengan bahan lokal yang di ambil dari ...",
        phone: "6282235537167",
        link: "https://www.instagram.com/laksmanayudha_/?hl=en",
        city: "3",
        address: "Jalan Teukur Umar No. 236",
    },
    {
        id: "3",
        name: "Warung Wardani",
        email: "wardani@email.com",
        password: "12345678",
        profileImage: "/images/umkm-3.png",
        description: "Warung Wardani adalah warung makan Bali asli dan khas indonesia. Berdiri tahun 1998 oleh Ibu Wardani Sukawati. Menjual berbagai makanan dengan harga yang pas dikantong",
        phone: "6282235537167",
        link: "https://www.instagram.com/laksmanayudha_/?hl=en",
        city: "2",
        address: "Jalan Nangka No. 236",
    },
    {
        id: "4",
        name: "Rina Bakery",
        email: "tawan@email.com",
        password: "12345678",
        profileImage: "/images/umkm-4.png",
        description: "Rina Bakery adalah Toko Roti asli dan khas indonesia. Berdiri tahun 2001 oleh Rina AW. Menjual berbagai jenis roti dengan harga yang pas pasan",
        phone: "6282235537167",
        link: "https://www.instagram.com/laksmanayudha_/?hl=en",
        city: "5",
        address: "Jalan Angelir No. 236",
    },
]

const getUMKM = (id) => {
    const umkm = dummyUMKMProfile.find(umkm => umkm.id === id);
    if (!umkm) {
        return { error: true, data: null };
    }
    return { error: false, data: umkm };
}

const getUMKMs = (currentPage = 1, keyword = "") => {
    let umkms = filterByProperty(dummyUMKMProfile, "name", keyword);
    umkms = paginate(umkms, currentPage);
    if (!umkms) {
        return { error: true, data: null };
    }
    return { error: false, data: umkms };
}

const getPromo = (id) => {
    const promo = dummyPromos.find(promo => promo.id === id);
    if (!promo) {
        return { error: true, data: null };
    }
    return { error: false, data: promo };
}

const filterByProperty = (data, prop, value) => {
    return data.filter(item => item[prop].toLowerCase().includes(value.toLowerCase()));
}

const getPromos = (currentPage = 1, keyword = "", city = "0") => {
    let promos = filterByProperty(dummyPromos, "title", keyword);
    if (city != "0") promos = filterByProperty(promos, "city", city);
    promos = paginate(promos, currentPage);
    if (!promos) {
        return { error: true, data: null }
    }
    return { error: false, data: promos }
}

const paginate = (datas, currentPage = 1, maxItem = 5) => {
    currentPage = parseInt(currentPage);
    const startIndex = (currentPage*maxItem) - maxItem;
    const items = [];
    for(let count = 0; count < maxItem; count++) {
        if ((startIndex + count) > datas.length - 1) {
            break;
        }
        items.push(datas[startIndex + count]);
    }

    const maxPage = Math.ceil(datas.length / maxItem);
    const nextPage = currentPage === maxPage ? currentPage : currentPage + 1;
    const prevPage = currentPage === 1 ? currentPage : currentPage - 1
    return { items, maxPage, nextPage, prevPage };
}

const getUMKMPromos = (umkmId) => {
    const promos = dummyPromos.filter(promo => promo.umkm === umkmId);
    if (!promos) {
        return { error: true, data: null }
    }
    return { error: false, data: promos };
}

const getCity = (id) => {
    const city = dummyCities.find(city => city.id === id).name;
    return city;
}

const getTime = (date) => {
    return new Date(date).toLocaleString("id-ID", {day: "numeric", month: "long", year: "numeric"});
}

const getCities = () => {
    return dummyCities;
}

export { 
    getUMKM,
    getPromo,
    getPromos,
    getUMKMs,
    getCity,
    getTime,
    getCities,
    getUMKMPromos 
};
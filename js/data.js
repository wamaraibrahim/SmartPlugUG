// data.js

const APP_DATA = {
    business: {
        name: "Smart Plug UG",
        whatsapp: "256755033154",
        currency: "UGX",
    },

    categories: [
        {
            id: "Phones",
            name: "Phones",
            color: "#0A4174",
            textColor: "#ffffff"
        },
        {
            id: "Smartwatches",
            name: "Smartwatches",
            color: "#49769F",
            textColor: "#001D39"
        },
        {
            id: "Tablets",
            name: "Tablets",
            color: "#4E8EA2",
            textColor: "#001D39"
        },
        {
            id: "Accessories",
            name: "Accessories",
            color: "#6EA2B3",
            textColor: "#001D39"
        },
        {
            id: "Speakers",
            name: "Speakers",
            color: "#7BBDE8",
            textColor: "#001D39"
        }
    ],

    phoneBrands: [
        { id: "iPhone", name: "iPhone" },
        { id: "Samsung", name: "Samsung" },
        { id: "Tecno", name: "Tecno" },
        { id: "Huawei", name: "Huawei" },
        { id: "Google Pixel", name: "Google Pixel" },
        { id: "Others", name: "Others" }
    ],

    products: [
        {
            id: 1,
            category: "Phones",
            brand: "iPhone",
            name: "iphone 11",
            description: "12MP Camera, 6.1 inch Display, 64GB Storage",
            price: 700000,
            image: "images/iphone 11.jpg"
        },
        {
            id: 2,
            category: "Phones",
            brand: "iPhone",
            name: "iphone 11 pro",
            description: "Dual 12MP Camera, 6.1 inch Display, 64GB Storage",
            price: 850000,
            image: "images/iphone 11 pro.jpg"
        },
        {
            id: 3,
            category: "Phones",
            brand: "iPhone",
            name: "iphone 11 promax",
            description: "Triple 12MP Camera, 6.5 inch Display, 64GB Storage",
            price: 899000,
            image: "images/iphone 11pm.jpg"
        },
        {
            id: 16,
            category: "Phones",
            brand: "Samsung",
            name: "Samsung Galaxy S24",
            description: "6.2 inch AMOLED, 256GB, 50MP Camera",
            price: 1200000,
            image: "https://picsum.photos/seed/galaxys24/300/200"
        },
        {
            id: 17,
            category: "Phones",
            brand: "Samsung",
            name: "Samsung Galaxy A54",
            description: "6.4 inch Display, 128GB, Triple Camera",
            price: 750000,
            image: "https://picsum.photos/seed/galaxya54/300/200"
        },
        {
            id: 18,
            category: "Phones",
            brand: "Samsung",
            name: "Samsung Galaxy Note 20",
            description: "6.7 inch Display, S Pen, 256GB",
            price: 950000,
            image: "https://picsum.photos/seed/galaxynote20/300/200"
        },
        {
            id: 19,
            category: "Phones",
            brand: "Tecno",
            name: "Tecno Spark 20",
            description: "6.6 inch Display, 256GB, 50MP Camera",
            price: 450000,
            image: "https://picsum.photos/seed/tecnospark20/300/200"
        },
        {
            id: 20,
            category: "Phones",
            brand: "Tecno",
            name: "Tecno Camon 30",
            description: "6.78 inch AMOLED, 256GB, 64MP Camera",
            price: 650000,
            image: "https://picsum.photos/seed/tecnocamon30/300/200"
        },
        {
            id: 21,
            category: "Phones",
            brand: "Tecno",
            name: "Tecno Pop 8",
            description: "6.6 inch Display, 64GB, Dual Camera",
            price: 280000,
            image: "https://picsum.photos/seed/tecnopop8/300/200"
        },
        {
            id: 22,
            category: "Phones",
            brand: "Huawei",
            name: "Huawei P60 Pro",
            description: "6.67 inch OLED, 256GB, Ultra Lighting Camera",
            price: 1100000,
            image: "https://picsum.photos/seed/huaweip60/300/200"
        },
        {
            id: 23,
            category: "Phones",
            brand: "Huawei",
            name: "Huawei Nova 12",
            description: "6.7 inch Display, 256GB, 50MP Camera",
            price: 680000,
            image: "https://picsum.photos/seed/huaweinova12/300/200"
        },
        {
            id: 24,
            category: "Phones",
            brand: "Huawei",
            name: "Huawei Y9 Prime",
            description: "6.59 inch Display, 128GB, Triple Camera",
            price: 420000,
            image: "https://picsum.photos/seed/huaweiy9/300/200"
        },
        {
            id: 25,
            category: "Phones",
            brand: "Google Pixel",
            name: "Google Pixel 8",
            description: "6.2 inch Display, 128GB, Pure Android",
            price: 980000,
            image: "https://picsum.photos/seed/pixel8/300/200"
        },
        {
            id: 26,
            category: "Phones",
            brand: "Google Pixel",
            name: "Google Pixel 8 Pro",
            description: "6.7 inch LTPO OLED, 256GB, AI Camera",
            price: 1350000,
            image: "https://picsum.photos/seed/pixel8pro/300/200"
        },
        {
            id: 27,
            category: "Phones",
            brand: "Google Pixel",
            name: "Google Pixel 7a",
            description: "6.1 inch Display, 128GB, Great Value",
            price: 720000,
            image: "https://picsum.photos/seed/pixel7a/300/200"
        },
        {
            id: 28,
            category: "Phones",
            brand: "Others",
            name: "Nokia G42",
            description: "6.56 inch Display, 128GB, 5G Ready",
            price: 520000,
            image: "https://picsum.photos/seed/nokiag42/300/200"
        },
        {
            id: 29,
            category: "Phones",
            brand: "Others",
            name: "Infinix Hot 40",
            description: "6.78 inch Display, 256GB, Fast Charging",
            price: 480000,
            image: "https://picsum.photos/seed/infinixhot40/300/200"
        },
        {
            id: 30,
            category: "Phones",
            brand: "Others",
            name: "Oppo A78",
            description: "6.43 inch Display, 256GB, 50MP Camera",
            price: 550000,
            image: "https://picsum.photos/seed/oppoa78/300/200"
        },
        {
            id: 4,
            category: "Smartwatches",
            name: "FitTrack S",
            description: "Heart Rate, GPS",
            price: 199,
            image: "https://picsum.photos/seed/fittracks/300/200"
        },
        {
            id: 5,
            category: "Smartwatches",
            name: "OrbWatch 2",
            description: "AMOLED Display, 7 Day Battery",
            price: 249,
            image: "https://picsum.photos/seed/orbwatch2/300/200"
        },
        {
            id: 6,
            category: "Smartwatches",
            name: "PulseBand",
            description: "Sleep Tracking",
            price: 129,
            image: "https://picsum.photos/seed/pulseband/300/200"
        },
        {
            id: 7,
            category: "Tablets",
            name: "SlateBook 10",
            description: "10.5 inch Display",
            price: 449,
            image: "https://picsum.photos/seed/slatebook10/300/200"
        },
        {
            id: 8,
            category: "Tablets",
            name: "CanvasPad Air",
            description: "11 inch Tablet with Stylus",
            price: 599,
            image: "https://picsum.photos/seed/canvaspadair/300/200"
        },
        {
            id: 9,
            category: "Tablets",
            name: "TabLite 8",
            description: "8 inch Display",
            price: 249,
            image: "https://picsum.photos/seed/tablite8/300/200"
        },
        {
            id: 10,
            category: "Accessories",
            name: "Smart Plug",
            description: "Wi-Fi Smart Plug",
            price: 19,
            image: "https://picsum.photos/seed/smartplug/300/200"
        },
        {
            id: 11,
            category: "Accessories",
            name: "USB-C Hub",
            description: "7 in 1 Adapter",
            price: 39,
            image: "https://picsum.photos/seed/usbchub/300/200"
        },
        {
            id: 12,
            category: "Accessories",
            name: "Wireless Charger",
            description: "15W Fast Charging",
            price: 29,
            image: "https://picsum.photos/seed/wirelesscharger/300/200"
        },
        {
            id: 13,
            category: "Speakers",
            name: "BoomCube Mini",
            description: "Bluetooth Speaker",
            price: 59,
            image: "https://picsum.photos/seed/boomcubemini/300/200"
        },
        {
            id: 14,
            category: "Speakers",
            name: "EchoDome",
            description: "Smart Assistant",
            price: 149,
            image: "https://picsum.photos/seed/echodome/300/200"
        },
        {
            id: 15,
            category: "Speakers",
            name: "WaveBar",
            description: "HDMI ARC Soundbar",
            price: 219,
            image: "https://picsum.photos/seed/wavebar/300/200"
        }
    ]
};

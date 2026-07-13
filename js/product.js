// products.js

const PRODUCTS = {
  phones: {
    icon: "ti-device-mobile",
    label: "Phones",
    color: "#0A4174",
    text: "#BDD8E9",
    items: [
      {
        id: 1,
        name: "Pulse X12",
        description: "6.5 inch Display, 128GB Storage",
        price: 699,
        image: "https://picsum.photos/seed/pulsex12/300/200"
      },
      {
        id: 2,
        name: "Aria Lite",
        description: "5.8 inch Display, 64GB Storage",
        price: 399,
        image: "https://picsum.photos/seed/arialite/300/200"
      },
      {
        id: 3,
        name: "Nova Max",
        description: "6.7 inch Display, 256GB Storage",
        price: 899,
        image: "https://picsum.photos/seed/novamax/300/200"
      }
    ]
  },

  watches: {
    icon: "ti-device-watch",
    label: "Smart Watches",
    color: "#49769F",
    text: "#001D39",
    items: [
      {
        id: 4,
        name: "FitTrack S",
        description: "Heart Rate, GPS",
        price: 199,
        image: "https://picsum.photos/seed/fittracks/300/200"
      },
      {
        id: 5,
        name: "OrbWatch 2",
        description: "AMOLED Display, 7 Days Battery",
        price: 249,
        image: "https://picsum.photos/seed/orbwatch2/300/200"
      },
      {
        id: 6,
        name: "PulseBand",
        description: "Sleep Tracking",
        price: 129,
        image: "https://picsum.photos/seed/pulseband/300/200"
      }
    ]
  },

  tablets: {
    icon: "ti-device-tablet",
    label: "Tablets",
    color: "#4E8EA2",
    text: "#001D39",
    items: [
      {
        id: 7,
        name: "SlateBook 10",
        description: "10.5 inch Display, 128GB",
        price: 449,
        image: "https://picsum.photos/seed/slatebook10/300/200"
      },
      {
        id: 8,
        name: "CanvasPad Air",
        description: "11 inch Display with Stylus",
        price: 599,
        image: "https://picsum.photos/seed/canvaspadair/300/200"
      },
      {
        id: 9,
        name: "TabLite 8",
        description: "8 inch Display, 64GB",
        price: 249,
        image: "https://picsum.photos/seed/tablite8/300/200"
      }
    ]
  },

  accessories: {
    icon: "ti-headphones",
    label: "Accessories",
    color: "#6EA2B3",
    text: "#001D39",
    items: [
      {
        id: 10,
        name: "Smart Plug",
        description: "Wi-Fi Smart Plug",
        price: 19,
        image: "https://picsum.photos/seed/smartplug/300/200"
      },
      {
        id: 11,
        name: "USB-C Hub",
        description: "7 in 1 Adapter",
        price: 39,
        image: "https://picsum.photos/seed/usbchub/300/200"
      },
      {
        id: 12,
        name: "Wireless Charger",
        description: "15W Fast Charging",
        price: 29,
        image: "https://picsum.photos/seed/wirelesscharger/300/200"
      }
    ]
  },

  speakers: {
    icon: "ti-device-speaker",
    label: "Speakers",
    color: "#7BBDE8",
    text: "#001D39",
    items: [
      {
        id: 13,
        name: "BoomCube Mini",
        description: "Bluetooth Speaker, 10 Hours",
        price: 59,
        image: "https://picsum.photos/seed/boomcubemini/300/200"
      },
      {
        id: 14,
        name: "EchoDome",
        description: "Smart Assistant Built In",
        price: 149,
        image: "https://picsum.photos/seed/echodome/300/200"
      },
      {
        id: 15,
        name: "WaveBar",
        description: "HDMI ARC Sound Bar",
        price: 219,
        image: "https://picsum.photos/seed/wavebar/300/200"
      }
    ]
  }
};
function loadProducts(categoryId) {

    console.log("Category selected:", categoryId);

    const products = APP_DATA.products.filter(product =>
        product.category === categoryId
    );

    console.log("Products found:", products);

    // rest of your code...
}
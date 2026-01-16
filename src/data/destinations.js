// src/data/destinations.js
export default [
  {
    name: "Agra",
    slug: "agra",
    description: "Agra — home of the Taj Mahal and rich Mughal heritage.",
    famous_places: [
      {
        name: "Taj Mahal",
        description: "17th-century white marble mausoleum built by Shah Jahan for Mumtaz Mahal.",
        image: "agra_taj",
        image_search: "Taj Mahal Agra"
      },
      {
        name: "Agra Fort",
        description: "A UNESCO World Heritage site — red sandstone fort that was the main residence of Mughal emperors.",
        image: "agra_fort",
        image_search: "Agra Fort"
      },
      {
        name: "Fatehpur Sikri",
        description: "A nearby deserted Mughal city with stunning palaces and mosques, built by Emperor Akbar.",
        image: "fatehpur_sikri",
        image_search: "Fatehpur Sikri"
      },
      {
        name: "Mehtab Bagh",
        description: "Gardens across the Yamuna with excellent sunset views of the Taj Mahal.",
        image: "mehtab_bagh",
        image_search: "Mehtab Bagh sunset Taj Mahal view"
      },
      {
        name: "Itmad-ud-Daulah (Baby Taj)",
        description: "Smaller marble tomb known for detailed pietra dura inlay work — often called the Baby Taj.",
        image: "baby_taj",
        image_search: "Itmad-ud-Daulah Baby Taj Agra"
      }
    ],
    transport: {
      train: {
        name: "Agra Cantt",
        description: "Main railway station with good connectivity to Delhi, Mumbai and other cities.",
        image: "agra_station",
        image_search: "Agra Cantt railway station"
      },
      bus: {
        name: "Idgah Bus Stand (ISBT)",
        description: "Major bus terminal serving intercity buses and local routes.",
        image: "agra_bus",
        image_search: "Agra bus stand Idgah ISBT"
      },
      flight: {
        name: "Kheria (Agra) Airport",
        description: "Small domestic airport (IATA: AGR) with limited flights; New Delhi airport is the nearest major hub.",
        image: "agra_airport",
        image_search: "Agra Kheria airport"
      }
    },
    foods: [
      {
        name: "Petha",
        description: "A famous sweet made from ash gourd, often crystal-clear and flavored with saffron or nuts.",
        image: "petha",
        image_search: "Agra petha sweet"
      },
      {
        name: "Bedai & Jalebi",
        description: "Popular breakfast combo — deep-fried bread (bedai) and sweet jalebi.",
        image: "bedai_jalebi",
        image_search: "Bedai Jalebi Agra"
      },
      {
        name: "Mughlai Biryani",
        description: "Aromatic rice dish with rich spices, meat and Mughal-style preparation.",
        image: "mughlai_biryani",
        image_search: "Mughlai biryani"
      },
      {
        name: "Kebabs (Sheekh / Galouti)",
        description: "Succulent kebabs influenced by Mughal cuisine, common at local eateries.",
        image: "kabab",
        image_search: "Indian kebab Sheekh Galouti"
      },
      {
        name: "Dalmoth",
        description: "Spicy crunchy snack of lentils and nuts — a local favorite to munch on.",
        image: "dalmoth",
        image_search: "dalmoth snack"
      }
  ]
  },

  {
    name: "Delhi",
    slug: "delhi",
    description: "India’s capital — a vibrant mix of history, markets, and food scenes across New and Old Delhi.",
    famous_places: [
      { name: "Red Fort", description: "Historic Mughal fort and UNESCO site.", image: "assets/delhi_redfort.jpg", image_search: "Red Fort Delhi" },
      { name: "Qutub Minar", description: "Tall minaret and UNESCO site with Afghan architecture.", image: "assets/delhi_qutub.jpg", image_search: "Qutub Minar" },
      { name: "India Gate", description: "War memorial and popular evening lawn.", image: "assets/india_gate.jpg", image_search: "India Gate Delhi" },
      { name: "Humayun's Tomb", description: "Mughal tomb that inspired the Taj Mahal's architecture.", image: "assets/humayun_tomb.jpg", image_search: "Humayun's Tomb Delhi" },
      { name: "Lotus Temple", description: "Baha'i house of worship with distinctive lotus shape.", image: "assets/lotus_temple.jpg", image_search: "Lotus Temple Delhi" }
    ],
    transport: {
      train: { name: "New Delhi Railway Station", description: "One of the main rail terminals in Delhi.", image: "assets/delhi_train.jpg", image_search: "New Delhi Railway Station" },
      bus: { name: "Kashmere Gate ISBT", description: "Major interstate bus terminal.", image: "assets/delhi_bus.jpg", image_search: "Kashmere Gate ISBT bus terminal" },
      flight: { name: "Indira Gandhi International Airport (DEL)", description: "Major international airport serving Delhi.", image: "assets/delhi_airport.jpg", image_search: "Indira Gandhi International Airport DEL" }
    },
    foods: [
      { name: "Chaat (Paranthe Wali Gali)", description: "Street-food snacks — tangy, spicy and sweet.", image: "assets/delhi_chaat.jpg", image_search: "Delhi chaat Paranthe Wali Gali" },
      { name: "Butter Chicken", description: "Creamy tomato-based chicken curry, world-famous from Delhi restaurants.", image: "assets/butter_chicken.jpg", image_search: "butter chicken Delhi" },
      { name: "Kebabs", description: "Mughal-style grilled meats from Old Delhi.", image: "assets/delhi_kebab.jpg", image_search: "Old Delhi kebab" },
      { name: "Chole Bhature", description: "Spicy chickpea curry with fried bread.", image: "assets/chole_bhature.jpg", image_search: "Chole Bhature Delhi" },
      { name: "Paratha", description: "Stuffed breads (Paranthe Wali Gali famous variety).", image: "assets/paratha.jpg", image_search: "Paranthe Wali Gali paratha" }
    ]
  },

  {
    name: "Mumbai",
    slug: "mumbai",
    description: "The financial capital — coastal city with colonial-era gateways, vibrant street-food and nightlife.",
    famous_places: [
      { name: "Gateway of India", description: "Iconic waterfront monument built during the British era.", image: "assets/mumbai_gateway.jpg", image_search: "Gateway of India Mumbai" },
      { name: "Marine Drive", description: "Seafront promenade known as the Queen's Necklace at night.", image: "assets/marine_drive.jpg", image_search: "Marine Drive Mumbai" },
      { name: "Elephanta Caves", description: "Rock-cut cave temples on an island near Mumbai.", image: "assets/elephanta.jpg", image_search: "Elephanta Caves" },
      { name: "Chhatrapati Shivaji Terminus", description: "Victorian Gothic railway station and UNESCO site.", image: "assets/cst.jpg", image_search: "Chhatrapati Shivaji Terminus" },
      { name: "Bandra-Worli Sea Link", description: "Modern cable-stayed bridge linking suburbs.", image: "assets/sea_link.jpg", image_search: "Bandra Worli Sea Link" }
    ],
    transport: {
      train: { name: "Chhatrapati Shivaji Maharaj Terminus (CSTM/CST)", description: "Heritage railway station connecting local and long-distance trains.", image: "assets/mumbai_station.jpg", image_search: "CST Mumbai station" },
      bus: { name: "Mumbai Central Bus Depots / BEST", description: "Local bus network and major bus depots.", image: "assets/mumbai_bus.jpg", image_search: "Mumbai BEST bus depot" },
      flight: { name: "Chhatrapati Shivaji Maharaj International Airport (BOM)", description: "Major international airport for Mumbai.", image: "assets/mumbai_airport.jpg", image_search: "Chhatrapati Shivaji International Airport BOM" }
    },
    foods: [
      { name: "Vada Pav", description: "Classic Mumbai street snack — spiced potato fritter in a bun.", image: "assets/vada_pav.jpg", image_search: "Vada Pav Mumbai" },
      { name: "Pav Bhaji", description: "Mashed vegetable curry served with buttered rolls.", image: "assets/pav_bhaji.jpg", image_search: "Pav Bhaji Mumbai" },
      { name: "Bhel Puri", description: "Tangy-puffed rice snack from the beaches of Mumbai.", image: "assets/bhel_puri.jpg", image_search: "Bhel Puri Mumbai" },
      { name: "Bombay Sandwich", description: "Street sandwich packed with veggies and chutneys.", image: "assets/bombay_sandwich.jpg", image_search: "Bombay sandwich" },
      { name: "Seafood (Bombil / Pomfret)", description: "Fresh coastal seafood prepared in Malvani style.", image: "assets/mumbai_seafood.jpg", image_search: "Mumbai seafood Bombil pomfret" }
    ]
  },

  {
    name: "Jaipur",
    slug: "jaipur",
    description: "Pink City of Rajasthan — forts, palaces, and colorful markets.",
    famous_places: [
      { name: "Amber Fort", description: "Large hilltop fort with ornate halls and views of Maota Lake.", image: "assets/amber_fort.jpg", image_search: "Amber Fort Jaipur" },
      { name: "Hawa Mahal", description: "Palace of winds — facade with many small windows.", image: "assets/hawa_mahal.jpg", image_search: "Hawa Mahal Jaipur" },
      { name: "City Palace", description: "Historic royal residence with museums and courtyards.", image: "assets/city_palace.jpg", image_search: "City Palace Jaipur" },
      { name: "Jantar Mantar", description: "Astronomical observatory with large stone instruments.", image: "assets/jantar_mantar.jpg", image_search: "Jantar Mantar Jaipur" },
      { name: "Nahargarh Fort", description: "Fort on the Aravalli hills with panoramic views of Jaipur.", image: "assets/nahargarh.jpg", image_search: "Nahargarh Fort Jaipur" }
    ],
    transport: {
      train: { name: "Jaipur Junction", description: "Major railhead in Rajasthan with interstate connections.", image: "assets/jaipur_station.jpg", image_search: "Jaipur Junction railway station" },
      bus: { name: "Sindhi Camp Bus Stand", description: "Large bus terminal for state and interstate buses.", image: "assets/jaipur_bus.jpg", image_search: "Sindhi Camp bus stand Jaipur" },
      flight: { name: "Jaipur International Airport (JAI)", description: "Airport connecting Jaipur to major Indian cities.", image: "assets/jaipur_airport.jpg", image_search: "Jaipur International Airport JAI" }
    },
    foods: [
      { name: "Dal Baati Churma", description: "Rajasthani meal of baked wheat balls, dal and sweet churma.", image: "assets/dal_baati.jpg", image_search: "Dal Baati Churma Jaipur" },
      { name: "Ker Sangri", description: "Traditional Rajasthani vegetable made with desert beans and berries.", image: "assets/ker_sangri.jpg", image_search: "Ker Sangri dish" },
      { name: "Laal Maas", description: "Spicy mutton curry with red chilies, a Rajasthani specialty.", image: "assets/laal_maas.jpg", image_search: "Laal Maas Rajasthan" },
      { name: "Ghewar", description: "Traditional sweet deep-fried and soaked in syrup especially during festivals.", image: "assets/ghewar.jpg", image_search: "Ghewar Rajasthan sweet" },
      { name: "Pyaaz Kachori", description: "Crispy pastry stuffed with spicy onion mixture.", image: "assets/pyaaz_kachori.jpg", image_search: "Pyaaz Kachori Jaipur" }
    ]
  },

  {
    name: "Varanasi",
    slug: "varanasi",
    description: "One of the world’s oldest living cities — spiritual ghats on the Ganges, evening aarti and temples.",
    famous_places: [
      { name: "Dashashwamedh Ghat", description: "Main ghat known for grand evening Ganga aarti ceremonies.", image: "assets/dashashwamedh.jpg", image_search: "Dashashwamedh Ghat Varanasi" },
      { name: "Kashi Vishwanath Temple", description: "Famous Hindu shrine dedicated to Lord Shiva.", image: "assets/kashi_vishwanath.jpg", image_search: "Kashi Vishwanath Temple" },
      { name: "Manikarnika Ghat", description: "Historic cremation ghat with spiritual significance.", image: "assets/manikarnika.jpg", image_search: "Manikarnika Ghat Varanasi" },
      { name: "Sarnath", description: "Nearby Buddhist site where Buddha gave his first sermon.", image: "assets/sarnath.jpg", image_search: "Sarnath Varanasi" },
      { name: "Assi Ghat", description: "Popular ghat for morning rituals and boat rides.", image: "assets/assi_ghat.jpg", image_search: "Assi Ghat Varanasi" }
    ],
    transport: {
      train: { name: "Varanasi Junction (BSB)", description: "Main railway station connecting to major Indian cities.", image: "assets/varanasi_station.jpg", image_search: "Varanasi Junction BSB" },
      bus: { name: "Varanasi Bus Depot", description: "Interstate and local bus services.", image: "assets/varanasi_bus.jpg", image_search: "Varanasi bus stand" },
      flight: { name: "Lal Bahadur Shastri Airport (VNS)", description: "Domestic airport serving Varanasi.", image: "assets/varanasi_airport.jpg", image_search: "Lal Bahadur Shastri Airport Varanasi VNS" }
    },
    foods: [
      { name: "Kachori Sabzi", description: "Spicy kachori with potato curry — popular breakfast.", image: "assets/kachori.jpg", image_search: "Kachori Sabzi Varanasi" },
      { name: "Banarasi Paan", description: "Famous betel leaf preparation from Varanasi.", image: "assets/banarasi_paan.jpg", image_search: "Banarasi Paan" },
      { name: "Malaiyo", description: "Seasonal winter dessert — light, frothy sweet.", image: "assets/malaiyo.jpg", image_search: "Malaiyo Varanasi sweet" },
      { name: "Lassi", description: "Thick sweet or salted yogurt drink popular across the city.", image: "assets/lassi.jpg", image_search: "Varanasi lassi" },
      { name: "Tamatar Chaat", description: "Tangy tomato-based street chaat unique to the region.", image: "assets/tamatar_chaat.jpg", image_search: "Tamatar Chaat Varanasi" }
    ]
  }
];

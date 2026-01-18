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
        image: "agra",
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
      { name: "Red Fort", description: "Historic Mughal fort and UNESCO site.", image: "delhi", image_search: "Red Fort Delhi" },
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
      { name: "Gateway of India", description: "Iconic waterfront monument built during the British era.", image: "mumbai", image_search: "Gateway of India Mumbai" },
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
      { name: "Amber Fort", description: "Large hilltop fort with ornate halls and views of Maota Lake.", image: "jaipur", image_search: "Amber Fort Jaipur" },
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
      { name: "Dashashwamedh Ghat", description: "Main ghat known for grand evening Ganga aarti ceremonies.", image: "varanasi", image_search: "Dashashwamedh Ghat Varanasi" },
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
  },
  {
  name: "Jaipur",
  slug: "jaipur",
  description: "The Pink City of India — royal forts, palaces, vibrant bazaars and rich Rajasthani culture.",
  famous_places: [
    { name: "Hawa Mahal", description: "Iconic Palace of Winds with honeycomb-style windows.", image: "jaipur", image_search: "Hawa Mahal Jaipur" },
    { name: "Amber Fort", description: "Majestic hilltop fort known for its artistic Hindu-style elements.", image: "Jaipur", image_search: "Amber Fort Jaipur" },
    { name: "City Palace", description: "Royal residence with courtyards, museums and gardens.", image: "assets/city_palace.jpg", image_search: "City Palace Jaipur" },
    { name: "Jantar Mantar", description: "UNESCO-listed astronomical observatory.", image: "assets/jantar_mantar.jpg", image_search: "Jantar Mantar Jaipur" },
    { name: "Nahargarh Fort", description: "Fort offering panoramic views of Jaipur city.", image: "assets/nahargarh.jpg", image_search: "Nahargarh Fort Jaipur" }
  ],
  transport: {
    train: { name: "Jaipur Junction", description: "Main railway station with nationwide connectivity.", image: "assets/jaipur_station.jpg", image_search: "Jaipur Junction railway station" },
    bus: { name: "Sindhi Camp Bus Stand", description: "Major bus terminal for state and interstate routes.", image: "assets/jaipur_bus.jpg", image_search: "Sindhi Camp Bus Stand Jaipur" },
    flight: { name: "Jaipur International Airport (JAI)", description: "Airport connecting Jaipur to major Indian cities.", image: "assets/jaipur_airport.jpg", image_search: "Jaipur Airport JAI" }
  },
  foods: [
    { name: "Dal Baati Churma", description: "Traditional Rajasthani meal of baked wheat balls and sweet churma.", image: "assets/dal_baati.jpg", image_search: "Dal Baati Churma Jaipur" },
    { name: "Pyaaz Kachori", description: "Deep-fried snack stuffed with spicy onion filling.", image: "assets/pyaaz_kachori.jpg", image_search: "Pyaaz Kachori Jaipur" },
    { name: "Ghewar", description: "Popular disc-shaped Rajasthani sweet.", image: "assets/ghewar.jpg", image_search: "Ghewar Jaipur" },
    { name: "Laal Maas", description: "Spicy red mutton curry made with chilies.", image: "assets/laal_maas.jpg", image_search: "Laal Maas Rajasthan" },
    { name: "Ker Sangri", description: "Traditional desert bean and berry vegetable dish.", image: "assets/ker_sangri.jpg", image_search: "Ker Sangri Rajasthan" }
  ]
},
{
  name: "Goa",
  slug: "goa",
  description: "India’s beach paradise — golden beaches, nightlife, Portuguese heritage and seafood.",
  famous_places: [
    { name: "Baga Beach", description: "Popular beach known for nightlife and water sports.", image: "goa", image_search: "Baga Beach Goa" },
    { name: "Calangute Beach", description: "Largest beach in North Goa with lively atmosphere.", image: "assets/calangute.jpg", image_search: "Calangute Beach Goa" },
    { name: "Basilica of Bom Jesus", description: "UNESCO-listed church with Baroque architecture.", image: "assets/bom_jesus.jpg", image_search: "Basilica of Bom Jesus Goa" },
    { name: "Fort Aguada", description: "17th-century Portuguese fort overlooking the sea.", image: "assets/fort_aguada.jpg", image_search: "Fort Aguada Goa" },
    { name: "Dudhsagar Waterfalls", description: "Spectacular four-tiered waterfall on Mandovi river.", image: "assets/dudhsagar.jpg", image_search: "Dudhsagar Waterfalls Goa" }
  ],
  transport: {
    train: { name: "Madgaon Railway Station", description: "Major railhead connecting Goa to other states.", image: "assets/madgaon_station.jpg", image_search: "Madgaon Railway Station Goa" },
    bus: { name: "Kadamba Bus Stand", description: "State-run bus terminal for local and interstate travel.", image: "assets/goa_bus.jpg", image_search: "Kadamba Bus Stand Goa" },
    flight: { name: "Goa International Airport (GOI)", description: "Airport serving domestic and international flights.", image: "assets/goa_airport.jpg", image_search: "Goa International Airport Dabolim" }
  },
  foods: [
    { name: "Goan Fish Curry", description: "Spicy coconut-based curry with local spices.", image: "assets/goan_fish_curry.jpg", image_search: "Goan Fish Curry" },
    { name: "Pork Vindaloo", description: "Famous spicy-sour pork dish with Portuguese influence.", image: "assets/vindaloo.jpg", image_search: "Goan Vindaloo" },
    { name: "Bebinca", description: "Traditional layered Goan dessert.", image: "assets/bebinca.jpg", image_search: "Bebinca Goan dessert" },
    { name: "Xacuti", description: "Rich curry made with roasted coconut and spices.", image: "assets/xacuti.jpg", image_search: "Goan Xacuti" },
    { name: "Prawn Balchao", description: "Fiery prawn pickle-style dish.", image: "assets/prawn_balchao.jpg", image_search: "Prawn Balchao Goa" }
  ]
},
{
  name: "Amritsar",
  slug: "amritsar",
  description: "Holy city of the Sikhs — home to the Golden Temple and vibrant Punjabi culture.",
  famous_places: [
    { name: "Golden Temple", description: "Most sacred Sikh shrine with serene holy pool.", image: "amritsar", image_search: "Golden Temple Amritsar" },
    { name: "Jallianwala Bagh", description: "Historic memorial of India’s freedom struggle.", image: "assets/jallianwala_bagh.jpg", image_search: "Jallianwala Bagh Amritsar" },
    { name: "Wagah Border", description: "Famous daily retreat ceremony at India–Pakistan border.", image: "assets/wagah_border.jpg", image_search: "Wagah Border ceremony" },
    { name: "Ram Bagh Gardens", description: "Historic garden built by Maharaja Ranjit Singh.", image: "assets/ram_bagh.jpg", image_search: "Ram Bagh Amritsar" },
    { name: "Akal Takht", description: "One of the five seats of Sikh religious authority.", image: "assets/akal_takht.jpg", image_search: "Akal Takht Amritsar" }
  ],
  transport: {
    train: { name: "Amritsar Junction", description: "Major railway station with extensive connectivity.", image: "assets/amritsar_station.jpg", image_search: "Amritsar Junction railway station" },
    bus: { name: "Amritsar Bus Stand", description: "Bus terminal for interstate and local routes.", image: "assets/amritsar_bus.jpg", image_search: "Amritsar Bus Stand" },
    flight: { name: "Sri Guru Ram Dass Jee Airport (ATQ)", description: "International airport serving Amritsar.", image: "assets/amritsar_airport.jpg", image_search: "Amritsar Airport ATQ" }
  },
  foods: [
    { name: "Amritsari Kulcha", description: "Stuffed bread served with chole and butter.", image: "assets/kulcha.jpg", image_search: "Amritsari Kulcha" },
    { name: "Lassi", description: "Thick sweet yogurt drink served in large glasses.", image: "assets/amritsar_lassi.jpg", image_search: "Amritsar Lassi" },
    { name: "Chole Bhature", description: "Spicy chickpea curry with fried bread.", image: "assets/chole_bhature.jpg", image_search: "Chole Bhature Punjab" },
    { name: "Paneer Tikka", description: "Grilled cottage cheese with spices.", image: "assets/paneer_tikka.jpg", image_search: "Paneer Tikka Amritsar" },
    { name: "Langar Meal", description: "Free community meal served at Golden Temple.", image: "assets/langar.jpg", image_search: "Golden Temple Langar" }
  ]
},
{
  name: "Udaipur",
  slug: "udaipur",
  description: "The City of Lakes — romantic palaces, serene waters and royal heritage.",
  famous_places: [
    { name: "City Palace", description: "Massive palace complex overlooking Lake Pichola.", image: "udaipur", image_search: "City Palace Udaipur" },
    { name: "Lake Pichola", description: "Scenic artificial lake with boat rides.", image: "assets/lake_pichola.jpg", image_search: "Lake Pichola Udaipur" },
    { name: "Jag Mandir", description: "Island palace located on Lake Pichola.", image: "assets/jag_mandir.jpg", image_search: "Jag Mandir Udaipur" },
    { name: "Saheliyon Ki Bari", description: "Garden built for royal ladies with fountains.", image: "assets/saheliyon_ki_bari.jpg", image_search: "Saheliyon Ki Bari Udaipur" },
    { name: "Monsoon Palace", description: "Hilltop palace offering sunset views.", image: "assets/monsoon_palace.jpg", image_search: "Monsoon Palace Udaipur" }
  ],
  transport: {
    train: { name: "Udaipur City Railway Station", description: "Main railhead for the city.", image: "assets/udaipur_station.jpg", image_search: "Udaipur City railway station" },
    bus: { name: "Udaipur Bus Stand", description: "Intercity and local bus terminal.", image: "assets/udaipur_bus.jpg", image_search: "Udaipur Bus Stand" },
    flight: { name: "Maharana Pratap Airport (UDR)", description: "Airport connecting Udaipur to major cities.", image: "assets/udaipur_airport.jpg", image_search: "Udaipur Airport UDR" }
  },
  foods: [
    { name: "Dal Baati Churma", description: "Traditional Rajasthani meal popular in Udaipur.", image: "assets/dal_baati.jpg", image_search: "Dal Baati Churma Udaipur" },
    { name: "Gatte Ki Sabzi", description: "Gram flour dumplings in spicy gravy.", image: "assets/gatte_ki_sabzi.jpg", image_search: "Gatte Ki Sabzi Rajasthan" },
    { name: "Kachori", description: "Deep-fried spicy snack served hot.", image: "assets/udaipur_kachori.jpg", image_search: "Udaipur Kachori" },
    { name: "Rabri", description: "Sweet thickened milk dessert.", image: "assets/rabri.jpg", image_search: "Rabri Udaipur" },
    { name: "Mirchi Bada", description: "Chili fritter stuffed with spicy filling.", image: "assets/mirchi_bada.jpg", image_search: "Mirchi Bada Rajasthan" }
  ]
},

];

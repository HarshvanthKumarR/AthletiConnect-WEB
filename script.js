function showSection(id) {
  document.querySelectorAll('main section').forEach(section => {
    section.classList.remove('active');
  });
  // The product-modal is a special case, handled separately
  if (id !== 'product-modal') {
      document.getElementById(id).classList.add('active');
  }
}

function contactCare(e) {
  e.preventDefault();
  const responseEl = document.getElementById('care_response');
  responseEl.innerText = "Thank you for reaching out! Our team will contact you within 24 hours.";
  e.target.reset(); // Clear the form
}

const products = [
  {
    id: 1,
    name: "Nike Revolution 6 Running Shoes",
    price: 75,
    desc: "Lightweight, comfortable running shoes ideal for everyday workouts.",
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f7b1bad6-043b-4808-afe7-900a0e7cbc43/revolution-6-road-running-shoes-T7nC5p.png",
    buy: "https://www.nike.com/in/t/revolution-6-road-running-shoes-NC0P7k",
    reviews: []
  },
  {
    id: 2,
    name: "Yonex Muscle Power 29 Lite Badminton Racket",
    price: 40,
    desc: "Popular badminton racket for intermediate and beginner players.",
    img: "https://www.yonex.com/media/catalog/product/cache/1/small_image/230x/040ec09b1e35df139433887a97daa66f/b/a/badminton_musclepower_29.png",
    buy: "https://www.khelmart.com/yonex-muscle-power-29-lite-30-lbs-badminton-racket",
    reviews: []
  },
  {
    id: 3,
    name: "Nivia Classic Football",
    price: 20,
    desc: "Durable and classic football for all surfaces.",
    img: "https://www.niviasports.com/cdn/shop/products/FB-278_1_1024x1024.jpg",
    buy: "https://www.flipkart.com/nivia-classic-football-size-5/p/itmf9ghsdtb877zy",
    reviews: []
  },
  {
    id: 4,
    name: "Adidas Predator Soccer Jersey",
    price: 38,
    desc: "Breathable, sweat-wicking jersey for optimal athletic performance.",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/30e5fd4fc3864a118de8ac8100a2f27e_9366/Predator_Training_Jersey_Black.png",
    buy: "https://www.prodirectsport.com/soccer/p/adidas-predator-t-shirt-white-mens-clothing-1009422/",
    reviews: []
  },
  {
    id: 5,
    name: "Cosco Cricket Bat",
    price: 60,
    desc: "Lightweight Kashmir willow cricket bat for all levels.",
    img: "https://cosco.in/cdn/shop/products/CRICKETBAT-PROFESSIONAL.png",
    buy: "https://www.bigvalueshop.com/product/cosco-double-century-kashmir-willow-cricket-bat/",
    reviews: []
  },
  {
    id: 6,
    name: "Spalding NBA Indoor/Outdoor Basketball",
    price: 33,
    desc: "Durable, all-surface basketball perfect for both indoor and outdoor play.",
    img: "https://m.media-amazon.com/images/I/81gLcw51MEL._AC_SL1500_.jpg",
    buy: "https://www.prodirectsport.com/basketball/p/basketballs-spalding-nba-silver-indoor-outdoor-size-7-brown-30-01595-01-0017-125446/",
    reviews: []
  },
  {
    id: 7,
    name: "Yonex MAVIS 350 Shuttlecock Pack",
    price: 18,
    desc: "Pack of 6 highly durable nylon shuttlecocks for training and matches.",
    img: "https://m.media-amazon.com/images/I/712jQjd7obL._AC_SL1500_.jpg",
    buy: "https://prokicksports.com/products/3-10002",
    reviews: []
  },
  {
    id: 8,
    name: "Adidas Predator Soccer Ball",
    price: 29,
    desc: "Size 5 durable, water-resistant soccer ball for all weather conditions.",
    img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/7282f85cf7f74e6e8b8cac6d01355ace_9366/Soccer_Ball_White_H57800_01_standard.jpg",
    buy: "https://www.ubuy.co.in/product/7NE59IRKE-adidas-predator-training-soccer-ball-hg7748",
    reviews: []
  },
  {
    id: 9,
    name: "USPA Pro Training Cricket Bat",
    price: 53,
    desc: "Willow bat with strong grip and large sweet spot for better shots.",
    img: "https://m.media-amazon.com/images/I/71j4t4MSMtL._AC_SL1500_.jpg",
    buy: "https://shopee.ph/search?category=11044844",
    reviews: []
  },
  {
    id: 10,
    name: "Nike Dri-FIT Headband",
    price: 13,
    desc: "Sweat-absorbent, stretchable headband for all sports.",
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f2677ae2-5588-41be-b0ee-deb5c11f82b1/dri-fit-headband-QJChCL.png",
    buy: "https://www.nike.com/in/w/running-accessories-6ymx6z9y6hkz93e8pt",
    reviews: []
  },
  {
    id: 11,
    name: "Reebok Soft Grip Dumbbells (2kg pair)",
    price: 22,
    desc: "Pair of 2kg dumbbells for muscle toning and core training.",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/6/PW/SC/KA/159646698/reebok-dumbbells-500x500.jpg",
    buy: "https://www.amazon.in/Reebok-Non-Slip-Dumbbells-Pair/dp/B00ZVF573K",
    reviews: []
  },
  {
    id: 12,
    name: "Cosco Tennis Trainer Kit",
    price: 25,
    desc: "Solo tennis practice set for improving consistency and skills.",
    img: "https://cosco.in/cdn/shop/files/TennisTrainerKit_700x.jpg",
    buy: "https://cosco.in/products/india/tennis/trainer-kits",
    reviews: []
  },
  {
    id: 13,
    name: "Decathlon Quechua Hiking Backpack 20L",
    price: 32,
    desc: "Lightweight, water-resistant, comfortable hiking and gym backpack.",
    img: "https://contents.mediadecathlon.com/p2151651/k$1cf2cf360980e283f045c62e2592c63b/sq/backpack-hiking-20-liters.jpg",
    buy: "https://www.decathlon.in/p/8718213/backpack-20-litres-hiking-navy-blue.html",
    reviews: []
  },
  {
    id: 14,
    name: "Adidas Men’s Sports Vest",
    price: 16,
    desc: "Moisture-absorbing, sleeveless vest with classic design.",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/67028be0a9e641c6a754ada300c92b6b_9366/Seamless_Training_Vest_Black_FJ6404_21_model.jpg",
    buy: "https://www.adidas.co.in/men-tanks-vests",
    reviews: []
  },
  {
    id: 15,
    name: "HEAD Radical Tennis Overgrip (Pack of 3)",
    price: 10,
    desc: "Super-absorbent, grippy overgrip for all tennis racquets.",
    img: "https://www.tennisnuts.com/images/thumbs/003/0039044_head-radical-overgrip-3-pack-white.jpeg",
    buy: "https://www.tennisnuts.com/head-radical-overgrip-pack-of-3.html",
    reviews: []
  },
  {
    id: 16,
    name: "Puma One8 Virat Kohli Cap",
    price: 18,
    desc: "Classic cricket cap with moisture-wicking and adjustable fit.",
    img: "https://in.puma.com/media/catalog/product/cache/a9264551b9ea95b85ab28ad1b9cea3cc/2/2/021909_01.jpeg",
    buy: "https://in.puma.com/men-headwear",
    reviews: []
  },
  {
    id: 17,
    name: "Nike Everyday Max Training Crew Socks",
    price: 17,
    desc: "Thick, supportive socks for gym, running, and sports.",
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d84c1e0d-1520-4a6a-96da-16dbb989b1d9/everyday-max-cushioned-training-crew-socks-3-pairs-FChZxH.png",
    buy: "https://www.nike.com/in/w/socks-1ko9yz6ymx6z9y6hkz93e8pt",
    reviews: []
  },
  {
    id: 18,
    name: "Li-Ning Power Cushion Indoor Shoes",
    price: 44,
    desc: "Ergonomic foot support and non-marking badminton shoes.",
    img: "https://www.sunandsandsports.com/on/demandware.static/-/Sites-master-catalog/default/dwfab76a68/products/83/NV286SUP2/45/83NV286SUP2_45_main.jpg",
    buy: "https://sunandsandsports.com/li-ning-power-cushion-indoor-shoes",
    reviews: []
  },
  {
    id: 19,
    name: "Decathlon Domyos Weighted Skipping Rope",
    price: 13,
    desc: "Adjustable, weighted skipping rope for agility and cardio.",
    img: "https://contents.mediadecathlon.com/p2133874/k$f2190fb734dbb2e3f0a350523024cfe0/sq/weighted-skipping-rope.jpg",
    buy: "https://www.decathlon.in/p/8526931/weighted-skipping-rope-red.html",
    reviews: []
  },
  {
    id: 20,
    name: "Yonex Nanoray 7000I Badminton Kit",
    price: 39,
    desc: "Lightweight graphite racket kit for fast swinging.",
    img: "https://m.media-amazon.com/images/I/61Fo+RkFOsL._AC_SL1000_.jpg",
    buy: "https://www.amazon.in/Yonex-Nanoray-7000i-Badminton-Racket/dp/B075VZG8C9",
    reviews: []
  },
  {
    id: 21,
    name: "Speedo Plain Swimming Cap",
    price: 12,
    desc: "Stretchy, snug, chlorine-resistant swimming cap.",
    img: "https://www.speedo.com/dw/image/v2/BFFQ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw05ae2e86/images/large/White.jpg",
    buy: "https://www.speedo.com/in/en/swimming/caps-7287.html",
    reviews: []
  },
  {
    id: 22,
    name: "USPA Sports Water Bottle 750ml",
    price: 8,
    desc: "Unbreakable, BPA-free bottle for workouts and training.",
    img: "https://uspa.in/cdn/shop/products/753250-1_1800x1800.jpg",
    buy: "https://uspa.in/collections/sports-bottles",
    reviews: []
  },
  {
    id: 23,
    name: "Nivia Classic Volleyball Knee Pads",
    price: 11,
    desc: "Padded, breathable knee protectors for volleyball and floor sports.",
    img: "https://www.niviasports.com/cdn/shop/products/KNEEPADSNV-319_1_1024x1024.jpg",
    buy: "https://www.niviasports.com/collections/knee-pads-volleyball",
    reviews: []
  },
  {
    id: 24,
    name: "Cosco Jump Rope",
    price: 7,
    desc: "Speed rope with foam handle, perfect for boxing and HIIT.",
    img: "https://cosco.in/cdn/shop/products/JumpRopeFoamHandle.jpg",
    buy: "https://cosco.in/products/jump-rope-foam-handle/",
    reviews: []
  },
  {
    id: 25,
    name: "Asics Men’s Gel-Rocket Volleyball Shoes",
    price: 56,
    desc: "Comfortable, shock-absorbing shoes for volleyball and indoor sports.",
    img: "https://m.media-amazon.com/images/I/61v8CM6nu7L._AC_UL1500_.jpg",
    buy: "https://www.amazon.in/ASICS-Gel-Rocket-Volleyball-Shoes/dp/B07ZMGD4PJ",
    reviews: []
  }
];

// Render Product List
function renderProducts() {
  let html = '<div class="store-grid">';
  for (let p of products) {
    html += `<div class="product-card" onclick="openProduct(${p.id})">
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button>View</button>
    </div>`;
  }
  html += '</div>';
  document.getElementById('product-list').innerHTML = html;
}

// Open Modal for Individual Product
function openProduct(id) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;
  
  let starsDisplay = avgStars(prod.reviews);
  let reviewsHtml = prod.reviews.map(r =>
    `<div>${"★".repeat(r.stars)}<span style="color:#aaa">${"☆".repeat(5-r.stars)}</span> - ${r.comment}</div>`
  ).join('');

  let detail = `
    <h3>${prod.name}</h3>
    <img src="${prod.img}" alt="${prod.name}" style="width:180px;">
    <p style="font-size: 1.5em; color: var(--purple-accent);">$${prod.price}</p>
    <a href="${prod.buy}" target="_blank" class="buy-link">Buy Now</a>
    <p style="margin-top: 1em;">${prod.desc}</p>
    <div style="margin-top: 1.5em;">
      <h4>Reviews (${starsDisplay})</h4>
      ${reviewsHtml || '<p>No reviews yet.</p>'}
      <div style="margin-top: 1em;">
        <input type="number" id="starInput" min="1" max="5" placeholder="Stars (1-5)">
        <input type="text" id="commentInput" placeholder="Leave a comment">
        <button onclick="addReview(${prod.id})">Submit Review</button>
      </div>
    </div>
  `;
  document.getElementById('product-detail').innerHTML = detail;
  document.getElementById('product-modal').style.display = 'grid'; // Changed for centering
}

function closeProduct() {
  document.getElementById('product-modal').style.display = 'none';
}

function addReview(id) {
  const prod = products.find(p => p.id === id);
  const stars = parseInt(document.getElementById('starInput').value);
  const comment = document.getElementById('commentInput').value.trim();
  if (!stars || stars < 1 || stars > 5 || !comment) {
    alert('Please provide a valid star rating (1-5) and a comment.');
    return;
  }
  prod.reviews.push({ stars, comment });
  openProduct(id); // Refresh the modal to show the new review
}

function avgStars(reviews) {
  if (!reviews.length) return 'No reviews yet';
  let sum = reviews.reduce((a, r) => a + r.stars, 0);
  return (sum / reviews.length).toFixed(1) + "★";
}

const trainingCategories = [
  {
    id: 'basketball',
    name: 'Basketball',
    background: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80',
    videos: [
      {title: 'Basketball Dribbling Tutorial', url: 'https://www.youtube.com/embed/r9pZy_pBOt0'},
      {title: 'How to Shoot a Basketball', url: 'https://www.youtube.com/embed/mP7xVpIh2xg'},
      {title: 'Basketball Defensive Skills', url: 'https://www.youtube.com/embed/zD3BMVqfjPk'},
      {title: 'NBA Training Workout', url: 'https://www.youtube.com/embed/12NnCvW4e4o'},
      {title: 'Ball Handling Drills for Beginners', url: 'https://www.youtube.com/embed/y7eGzW2T2Z4'},
      {title: 'Shooting Basics for Basketball', url: 'https://www.youtube.com/embed/vLGoS6_ReE4'},
      {title: 'Professional Player Drills', url: 'https://www.youtube.com/embed/3AV6kW5EX8A'},
      {title: 'Conditioning for Basketball', url: 'https://www.youtube.com/embed/WOifh8fo0NQ'},
      {title: 'Basketball Passing Drills', url: 'https://www.youtube.com/embed/2vLdILMHooQ'},
      {title: 'Agility and Quickness Workout', url: 'https://www.youtube.com/embed/Ru3w8UhTzLc'}
    ]
  },
  {
    id: 'football',
    name: 'Football',
    background: 'https://tse2.mm.bing.net/th/id/OIP.vNArNUIX5yYFfVW-AGFuqgHaE8?pid=Api&P=0&h=180',
    videos: [
      {title: 'Football Dribbling Skills', url: 'https://www.youtube.com/embed/3q3fQeRzvB8'},
      {title: 'Passing Drills for Football', url: 'https://www.youtube.com/embed/JDq1Lz8jrwU'},
      {title: 'Soccer Shooting Drills', url: 'https://www.youtube.com/embed/yCvNLMWDGjo'},
      {title: 'Pro Football Workout', url: 'https://www.youtube.com/embed/9wtmo_q3vxM'},
      {title: 'Speed and Agility for Football', url: 'https://www.youtube.com/embed/C1hvqidVL1o'},
      {title: 'Football Defensive Techniques', url: 'https://www.youtube.com/embed/L7mNs4amxDU'},
      {title: 'Ball Control Drills', url: 'https://www.youtube.com/embed/hC0SgmtQodE'},
      {title: 'Football Conditioning', url: 'https://www.youtube.com/embed/sFpE8Fyy8t8'},
      {title: 'Beginner Football Training', url: 'https://www.youtube.com/embed/K-KFZZg6-dQ'},
      {title: 'Tactical Football Practices', url: 'https://www.youtube.com/embed/_ZeEC2_MKfM'}
    ]
  },
  {
    id: 'tennis',
    name: 'Tennis',
    background: 'https://static.vecteezy.com/system/resources/previews/003/491/993/non_2x/three-tennis-balls-and-racket-on-hard-court-under-sunlight-free-photo.jpg',
    videos: [
      {title: 'Tennis Forehand Training', url: 'https://www.youtube.com/embed/D7Rz3ibhxrc'},
      {title: 'Backhand Technique', url: 'https://www.youtube.com/embed/Rv0hV43piKA'},
      {title: 'Tennis Serve Tips', url: 'https://www.youtube.com/embed/hP1RsS46GHc'},
      {title: 'Footwork Drills', url: 'https://www.youtube.com/embed/oDQBSRtBB9c'},
      {title: 'Tennis Fitness Workout', url: 'https://www.youtube.com/embed/kh9r3tg1bXY'},
      {title: 'Volley and Net Play', url: 'https://www.youtube.com/embed/rflTeMIRJco'},
      {title: 'Slice Shot Tutorial', url: 'https://www.youtube.com/embed/seeaG28E6xc'},
      {title: 'Shadow Tennis Drills', url: 'https://www.youtube.com/embed/6m5_Fhcmq3Q'},
      {title: 'Tournament Preparation', url: 'https://www.youtube.com/embed/hsGU1y3Gv7c'},
      {title: 'Mental Tennis Tips', url: 'https://www.youtube.com/embed/xHgT7id5Eeg'}
    ]
  },
  {
    id: 'cricket',
    name: 'Cricket',
    background: 'https://media.gettyimages.com/id/1292871532/photo/cricket-ball-hitting-the-stumps.jpg?s=612x612&w=0&k=20&c=i3_-rTUj3CEIsgslJFfc-ZEzCxTHPWkmlGYw_qtnQjE=',
    videos: [
      {title: 'Batting Drills', url: 'https://www.youtube.com/embed/d6TF4TGQnGc'},
      {title: 'Bowling Practice Tips', url: 'https://www.youtube.com/embed/Fv9WcbUVhHo'},
      {title: 'Fielding Skills Training', url: 'https://www.youtube.com/embed/u_okDYavveQ'},
      {title: 'Fitness for Cricketers', url: 'https://www.youtube.com/embed/wKUszQKc245'},
      {title: 'Wicket Keeping Drills', url: 'https://www.youtube.com/embed/q5e0GauHbss'},
      {title: 'Spin Bowling Tips', url: 'https://www.youtube.com/embed/3mcmShtRSoQ'},
      {title: 'Power Hitting Coaching', url: 'https://www.youtube.com/embed/yPAySOqOo48'},
      {title: 'Cricket Agility Training', url: 'https://www.youtube.com/embed/akBofVPuAio'},
      {title: 'Shot Selection Strategies', url: 'https://www.youtube.com/embed/7pZ6H2D6WlQ'},
      {title: 'Advanced Batting Techniques', url: 'https://www.youtube.com/embed/TVIjpAdUjzc'}
    ]
  },
  {
    id: 'swimming',
    name: 'Swimming',
    background: 'https://thumbs.dreamstime.com/b/competitive-swimming-2282607.jpg',
    videos: [
      {title: 'Freestyle Swimming Technique', url: 'https://www.youtube.com/embed/oPhlCHTpFJY'},
      {title: 'Butterfly Stroke Basics', url: 'https://www.youtube.com/embed/jfY_Xx66GsY'},
      {title: 'Backstroke Drills', url: 'https://www.youtube.com/embed/KgON3OD2vxk'},
      {title: 'Swim Speed Workouts', url: 'https://www.youtube.com/embed/6_BHtL6-i3Q'},
      {title: 'Swimming Endurance Training', url: 'https://www.youtube.com/embed/q6EoRBvdVPQ'},
      {title: 'Flip Turn Techniques', url: 'https://www.youtube.com/embed/lXG3yIKmznA'},
      {title: 'Breathing Techniques', url: 'https://www.youtube.com/embed/1gTpPGIRWtU'},
      {title: 'Kick Drills for Beginners', url: 'https://www.youtube.com/embed/3kzrFSzlxe8'},
      {title: 'Swimming Workout Plan', url: 'https://www.youtube.com/embed/qwQF2A69nYA'},
      {title: 'Improve Swimming Efficiency', url: 'https://www.youtube.com/embed/t69aXtFJzMg'}
    ]
  },
  {
    id: 'cycling',
    name: 'Cycling',
    background: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60',
    videos: [
      {title: 'Cycling Endurance Training', url: 'https://www.youtube.com/embed/aOZqgq-5oFg'},
      {title: 'Interval Training for Cyclists', url: 'https://www.youtube.com/embed/M7-RMy3t3fY'},
      {title: 'Cycling Speed Tips', url: 'https://www.youtube.com/embed/UtwpsQ8vYfo'},
      {title: 'Bike Handling Skills', url: 'https://www.youtube.com/embed/9UWGXms0HNg'},
      {title: 'Hill Climbing Techniques', url: 'https://www.youtube.com/embed/iYj-0P-LIX4'},
      {title: 'Warm-up and Cool Down', url: 'https://www.youtube.com/embed/K7tnE3JdGqE'},
      {title: 'Cadence Training', url: 'https://www.youtube.com/embed/0eDQA2AlA2k'},
      {title: 'Cycling Strength Workouts', url: 'https://www.youtube.com/embed/4mf52yov7ec'},
      {title: 'Group Ride Tips', url: 'https://www.youtube.com/embed/O3sKwtzPCXY'},
      {title: 'Bike Setup Basics', url: 'https://www.youtube.com/embed/3Ey2bCQ_ktQ'}
    ]
  },
  {
    id: 'boxing',
    name: 'Boxing',
    background: 'https://media.istockphoto.com/photos/red-boxing-glove-picture-id1006291908?k=6&m=1006291908&s=170667a&w=0&h=h1d40krbpTjRZ6Rgt9Fryf-OwXdU3ea79I4PxwXc0v0=',
    videos: [
      {title: 'Boxing Basics for Beginners', url: 'https://www.youtube.com/embed/f1qO3L9S-pg'},
      {title: 'Punching Techniques', url: 'https://www.youtube.com/embed/e9w9-fE1oHY'},
      {title: 'Boxing Footwork Drills', url: 'https://www.youtube.com/embed/GDpitTp_lmE'},
      {title: 'Defensive Boxing Skills', url: 'https://www.youtube.com/embed/p9hzD2CFHdY'},
      {title: 'Conditioning for Boxing', url: 'https://www.youtube.com/embed/I8MTpXmF7Zg'},
      {title: 'Shadow Boxing Workout', url: 'https://www.youtube.com/embed/qKXv4SsCt7g'},
      {title: 'Heavy Bag Training', url: 'https://www.youtube.com/embed/fq1kflwC9NI'},
      {title: 'Combination Punches', url: 'https://www.youtube.com/embed/5dVp6Dn5yAw'},
      {title: 'Speed and Agility Training', url: 'https://www.youtube.com/embed/c0sh7dAB6wQ'},
      {title: 'Boxing Strength Exercises', url: 'https://www.youtube.com/embed/4Q1OGnqaReA'}
    ]
  },
  {
    id: 'athletics',
    name: 'Athletics',
    background: 'https://tse1.mm.bing.net/th/id/OIP.Y5IkMvWgOPaTiXvx6QEUuAHaEo?pid=Api&P=0&h=180',
    videos: [
      {title: 'Sprint Training Drills', url: 'https://www.youtube.com/embed/TG9s_4kuEro'},
      {title: 'Long Distance Running Form', url: 'https://www.youtube.com/embed/pGRMjzBbALS'},
      {title: 'Jump Training Techniques', url: 'https://www.youtube.com/embed/TgLFEfee4p8'},
      {title: 'Endurance Running Workouts', url: 'https://www.youtube.com/embed/dNz_U2oQ4os'},
      {title: 'Strength Training for Runners', url: 'https://www.youtube.com/embed/IdAGXNVy0lk'},
      {title: 'Flexibility Exercises for Athletes', url: 'https://www.youtube.com/embed/W1gzVXR_v9c'},
      {title: 'Dynamic Warm-up for Track and Field', url: 'https://www.youtube.com/embed/m2aXrJH4LjI'},
      {title: 'Mental Preparation for Competitions', url: 'https://www.youtube.com/embed/k4KZnRgu1ZI'},
      {title: 'Speed and Agility Ladder Drills', url: 'https://www.youtube.com/embed/w5Lg880q_20'},
      {title: 'Injury Prevention Exercises', url: 'https://www.youtube.com/embed/NSv67CIq_14'}
    ]
  },
  {
    id: 'gymnastics',
    name: 'Gymnastics',
    background: 'https://tse1.mm.bing.net/th/id/OIP.QcbjOIw3iSzE6A05L06B5QHaE7?pid=Api&P=0&h=180',
    videos: [
      {title: 'Gymnastics Basics for Beginners', url: 'https://www.youtube.com/embed/zh0-cH0SNvQ'},
      {title: 'Handstand Techniques', url: 'https://www.youtube.com/embed/w7yJUPWvXDs'},
      {title: 'Floor Routine Tips', url: 'https://www.youtube.com/embed/vJSDhPxyqEU'},
      {title: 'Balance Beam Exercises', url: 'https://www.youtube.com/embed/UVQ0WWzi0Qg'},
      {title: 'Strength Training for Gymnasts', url: 'https://www.youtube.com/embed/sLygaQ5BdlY'},
      {title: 'Flexibility and Stretching', url: 'https://www.youtube.com/embed/fv-UQDQvHhs'},
      {title: 'Cartwheel Progression', url: 'https://www.youtube.com/embed/shEXrAQcTXQ'},
      {title: 'Backflip Tutorial', url: 'https://www.youtube.com/embed/Awq0JYzx5vA'},
      {title: 'Vault Training Basics', url: 'https://www.youtube.com/embed/v3MlGc9eB_E'},
      {title: 'Gymnastics Conditioning', url: 'https://www.youtube.com/embed/AMDPMPWLHeM'}
    ]
  }
];

const categoryContainer = document.getElementById('category-container');
const videosContainer = document.getElementById('videos-container');

function renderCategories() {
  categoryContainer.innerHTML = '';
  trainingCategories.forEach(cat => {
    const card = document.createElement('div');
    card.classList.add('category-card');
    card.style.backgroundImage = `url(${cat.background})`;
    card.innerHTML = `<div class="overlay"></div><h2>${cat.name}</h2>`;
    card.addEventListener('click', () => showVideos(cat.id));
    categoryContainer.appendChild(card);
  });
  categoryContainer.style.display = 'grid'; // Changed to grid
  videosContainer.style.display = 'none';
}

function showVideos(catId) {
  const category = trainingCategories.find(c => c.id === catId);
  if (!category) return;
  
  categoryContainer.style.display = 'none';
  videosContainer.style.display = 'block';
  videosContainer.style.animation = 'fadeIn 0.5s ease-in-out';
  
  // Heading
  videosContainer.innerHTML = `<h2>${category.name} Training Videos</h2><button onclick="backToCategories()">Back to Categories</button><div id="video-list"></div>`;
  
  const videoList = document.getElementById('video-list');
  
  category.videos.forEach(video => {
    const vidDiv = document.createElement('div');
    vidDiv.innerHTML = `
      <iframe src="${video.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="${video.title}"></iframe>
      <p>${video.title}</p>
    `;
    videoList.appendChild(vidDiv);
  });
}

function backToCategories() {
  videosContainer.style.display = 'none';
  categoryContainer.style.display = 'grid'; // Changed to grid
  categoryContainer.style.animation = 'fadeIn 0.5s ease-in-out';
}

// Initial Render Calls on document load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCategories();
});
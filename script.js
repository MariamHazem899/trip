/* =====================================================
   TRIPIFY DATA
===================================================== */

const destinations = [
    {
        id: 1,
        name: "دبي",
        country: "الإمارات",
        type: "عائلية",
        price: 850,
        rating: 4.8,
        days: 5,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
        description: "استمتع بناطحات السحاب والشواطئ والتسوق والمغامرات.",
        activities: [
            "برج خليفة",
            "دبي مول",
            "رحلة سفاري",
            "شاطئ جميرا",
            "مارينا دبي"
        ]
    },

    {
        id: 2,
        name: "شرم الشيخ",
        country: "مصر",
        type: "شاطئية",
        price: 450,
        rating: 4.7,
        days: 4,
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
        description: "رحلة رائعة للاستمتاع بالبحر الأحمر والشعاب المرجانية.",
        activities: [
            "الغوص",
            "رحلة بحرية",
            "خليج نعمة",
            "رأس محمد",
            "السفاري"
        ]
    },

    {
        id: 3,
        name: "إسطنبول",
        country: "تركيا",
        type: "ثقافية",
        price: 700,
        rating: 4.6,
        days: 6,
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
        description: "اكتشف التاريخ والأسواق والمساجد والطبيعة في إسطنبول.",
        activities: [
            "آيا صوفيا",
            "البازار الكبير",
            "مضيق البوسفور",
            "قصر توبكابي",
            "شارع الاستقلال"
        ]
    },

    {
        id: 4,
        name: "باريس",
        country: "فرنسا",
        type: "رومانسية",
        price: 1200,
        rating: 4.9,
        days: 7,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
        description: "مدينة الفن والجمال وبرج إيفل والشوارع الساحرة.",
        activities: [
            "برج إيفل",
            "اللوفر",
            "الشانزليزيه",
            "قوس النصر",
            "نهر السين"
        ]
    },

    {
        id: 5,
        name: "بالي",
        country: "إندونيسيا",
        type: "استرخاء",
        price: 1100,
        rating: 4.8,
        days: 7,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
        description: "الشواطئ والطبيعة والمنتجعات في جزيرة بالي.",
        activities: [
            "شواطئ بالي",
            "غابات أوبود",
            "المعابد",
            "ركوب الأمواج",
            "الشلالات"
        ]
    },

    {
        id: 6,
        name: "لندن",
        country: "بريطانيا",
        type: "ثقافية",
        price: 1450,
        rating: 4.7,
        days: 7,
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
        description: "اكتشف لندن ومعالمها التاريخية وأسواقها الشهيرة.",
        activities: [
            "بيج بن",
            "قصر باكنغهام",
            "عين لندن",
            "برج لندن",
            "هايد بارك"
        ]
    },

    {
        id: 7,
        name: "كابادوكيا",
        country: "تركيا",
        type: "مغامرات",
        price: 900,
        rating: 4.9,
        days: 5,
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
        description: "مناظر طبيعية مذهلة ورحلات المناطيد والمغامرات.",
        activities: [
            "رحلة المنطاد",
            "المدينة تحت الأرض",
            "وادي الحب",
            "ركوب الخيل",
            "غوريم"
        ]
    },

    {
        id: 8,
        name: "اليابان",
        country: "اليابان",
        type: "ثقافية",
        price: 1800,
        rating: 4.9,
        days: 10,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
        description: "رحلة مميزة تجمع بين التكنولوجيا والتاريخ والطبيعة.",
        activities: [
            "طوكيو",
            "كيوتو",
            "جبل فوجي",
            "المعابد",
            "حدائق اليابان"
        ]
    }
];


const hotels = [
    {
        id: 101,
        name: "Burj View Hotel",
        city: "دبي",
        price: 120,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
        description: "فندق فاخر بإطلالة رائعة على المدينة."
    },

    {
        id: 102,
        name: "Red Sea Resort",
        city: "شرم الشيخ",
        price: 80,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80",
        description: "منتجع قريب من البحر مع خدمات متكاملة."
    },

    {
        id: 103,
        name: "Bosphorus Palace",
        city: "إسطنبول",
        price: 95,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
        description: "إقامة مميزة بالقرب من مضيق البوسفور."
    },

    {
        id: 104,
        name: "Paris Central",
        city: "باريس",
        price: 160,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
        description: "فندق أنيق في قلب باريس."
    },

    {
        id: 105,
        name: "Bali Paradise",
        city: "بالي",
        price: 110,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=900&q=80",
        description: "منتجع استوائي رائع للاسترخاء."
    },

    {
        id: 106,
        name: "London Royal",
        city: "لندن",
        price: 180,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=900&q=80",
        description: "فندق راقٍ بالقرب من أهم معالم لندن."
    }
];


const testimonials = [
    {
        name: "سارة",
        text: "Tripify سهل عليا اختيار الرحلة وحجز الفندق."
    },
    {
        name: "أحمد",
        text: "مخطط الرحلة فكرة ممتازة وساعدني في تنظيم وقتي."
    },
    {
        name: "نور",
        text: "التصميم جميل وسهل الاستخدام جدًا."
    }
];


/* =====================================================
   LOCAL STORAGE
===================================================== */

let bookings =
    JSON.parse(localStorage.getItem("tripifyBookings")) || [];

let posts =
    JSON.parse(localStorage.getItem("tripifyPosts")) || [
        {
            id: 1,
            name: "مريم",
            text: "مين جرب السفر إلى إسطنبول؟ 🇹🇷",
            image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
            likes: 4,
            comments: ["رحلة جميلة جدًا!"]
        },

        {
            id: 2,
            name: "سارة",
            text: "بالي من أجمل الأماكن اللي زرتها 🌴",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
            likes: 8,
            comments: []
        }
    ];

let currentUser =
    JSON.parse(localStorage.getItem("tripifyUser")) || null;


/* =====================================================
   HELPERS
===================================================== */

function saveBookings() {
    localStorage.setItem(
        "tripifyBookings",
        JSON.stringify(bookings)
    );
}

function savePosts() {
    localStorage.setItem(
        "tripifyPosts",
        JSON.stringify(posts)
    );
}

function saveUser() {
    localStorage.setItem(
        "tripifyUser",
        JSON.stringify(currentUser)
    );
}

function showToast(message) {

    const toast = document.getElementById("toast");
    const toastMessage =
        document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


/* =====================================================
   ROUTER
===================================================== */

function router() {

    const hash =
        location.hash.replace("#", "") || "home";

    const routeName =
        hash.split("?")[0];

    const routes = {

        home: renderHome,

        destinations: renderDestinations,

        "destination-details":
            renderDestinationDetails,

        hotels: renderHotels,

        bookings: renderBookings,

        cart: renderBookings,

        planner: renderPlanner,

        community: renderCommunity,

        profile: renderProfile,

        auth: renderAuth
    };

    const render =
        routes[routeName] || renderHome;

    render();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    document
        .getElementById("navLinks")
        .classList.remove("show");
}

window.addEventListener(
    "hashchange",
    router
);

window.addEventListener(
    "DOMContentLoaded",
    router
);


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    document
        .getElementById("navLinks")
        .classList.toggle("show");
}


/* =====================================================
   HOME
===================================================== */

function renderHome() {

    const popular =
        destinations.slice(0, 6);

    document.getElementById("app").innerHTML = `

        <section class="hero">

            <div class="container">

                <div class="hero-content">

                    <h1>
                    اهلا بكم فيTripify ♥️
                    </h1>

                    <p>
                        خطط رحلتك، اكتشف أجمل الوجهات
                        واحجز الفندق المناسب لك بسهولة.
                    </p>

                    <div class="search-box">

                        <div class="search-field">

                            <label>
                                أين تريد الذهاب؟
                            </label>

                            <input
                                id="homeDestination"
                                placeholder="مثال: دبي"
                            >

                        </div>


                        <div class="search-field">

                            <label>
                                نوع الرحلة
                            </label>

                            <select id="homeType">

                                <option value="">
                                    كل الأنواع
                                </option>

                                <option value="شاطئية">
                                    شاطئية
                                </option>

                                <option value="ثقافية">
                                    ثقافية
                                </option>

                                <option value="مغامرات">
                                    مغامرات
                                </option>

                                <option value="عائلية">
                                    عائلية
                                </option>

                                <option value="رومانسية">
                                    رومانسية
                                </option>

                                <option value="استرخاء">
                                    استرخاء
                                </option>

                            </select>

                        </div>


                        <div class="search-field">

                            <label>
                                عدد الأيام
                            </label>

                            <input
                                id="homeDays"
                                type="number"
                                min="1"
                                placeholder="5"
                            >

                        </div>


                        <button
                            class="btn btn-primary"
                            onclick="homeSearch()"
                        >
                            <i class="fa-solid fa-magnifying-glass"></i>
                            بحث
                        </button>

                    </div>

                </div>

            </div>

        </section>


        <section class="section">

            <div class="container">

                <div class="section-header">

                    <h2>
                        الوجهات الأكثر شعبية
                    </h2>

                    <p>
                        اكتشف أماكن رائعة حول العالم
                    </p>

                </div>

                <div class="grid">

                    ${popular
                        .map(destinationCard)
                        .join("")}

                </div>

            </div>

        </section>


        <section class="section">

            <div class="container">

                <div class="section-header">

                    <h2>
                        ماذا يقول المسافرون؟
                    </h2>

                </div>

                <div class="grid">

                    ${testimonials.map(t => `

                        <div class="card">

                            <div class="card-body">

                                <div class="rating">
                                    ★★★★★
                                </div>

                                <p>
                                    "${t.text}"
                                </p>

                                <br>

                                <strong>
                                    ${t.name}
                                </strong>

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>

        </section>
    `;
}


/* =====================================================
   DESTINATION CARD
===================================================== */

function destinationCard(d) {

    return `

        <div class="card destination-card">

            <span class="destination-badge">
                ${d.type}
            </span>

            <img
                src="${d.image}"
                class="card-img"
                alt="${d.name}"
            >

            <div class="card-body">

                <h3>
                    ${d.name}
                </h3>

                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    ${d.country}
                </p>

                <p>
                    ${d.description}
                </p>

                <div class="rating">
                    ⭐ ${d.rating}
                </div>

            </div>

            <div class="card-footer">

                <div class="price">
                    $${d.price}
                    <small>/ ${d.days} أيام</small>
                </div>

                <a
                    class="btn btn-primary"
                    href="#destination-details?id=${d.id}"
                >
                    التفاصيل
                </a>

            </div>

        </div>
    `;
}


/* =====================================================
   HOME SEARCH
===================================================== */

function homeSearch() {

    const destination =
        document.getElementById("homeDestination").value;

    const type =
        document.getElementById("homeType").value;

    const days =
        document.getElementById("homeDays").value;

    location.hash =
        `destinations?q=${encodeURIComponent(destination)}&type=${encodeURIComponent(type)}&days=${days}`;
}


/* =====================================================
   DESTINATIONS
===================================================== */

function renderDestinations() {

    const params =
        new URLSearchParams(
            location.hash.split("?")[1] || ""
        );

    const initialQuery =
        params.get("q") || "";

    const initialType =
        params.get("type") || "";

    document.getElementById("app").innerHTML = `

        <section class="section">

            <div class="container">

                <div class="section-header">

                    <h2>
                        اكتشف الوجهات
                    </h2>

                    <p>
                        اختر الرحلة المناسبة لك
                    </p>

                </div>


                <div class="filters">

                    <input
                        class="form-control"
                        id="destinationSearch"
                        placeholder="ابحث عن مدينة..."
                        value="${initialQuery}"
                        oninput="filterDestinations()"
                    >


                    <select
                        class="form-control"
                        id="destinationType"
                        onchange="filterDestinations()"
                    >

                        <option value="">
                            كل أنواع الرحلات
                        </option>

                        <option value="شاطئية">
                            شاطئية
                        </option>

                        <option value="ثقافية">
                            ثقافية
                        </option>

                        <option value="مغامرات">
                            مغامرات
                        </option>

                        <option value="عائلية">
                            عائلية
                        </option>

                        <option value="رومانسية">
                            رومانسية
                        </option>

                        <option value="استرخاء">
                            استرخاء
                        </option>

                    </select>


                    <select
                        class="form-control"
                        id="destinationRating"
                        onchange="filterDestinations()"
                    >

                        <option value="0">
                            كل التقييمات
                        </option>

                        <option value="4">
                            4+ ⭐
                        </option>

                        <option value="4.5">
                            4.5+ ⭐
                        </option>

                        <option value="4.8">
                            4.8+ ⭐
                        </option>

                    </select>


                    <select
                        class="form-control"
                        id="destinationPrice"
                        onchange="filterDestinations()"
                    >

                        <option value="0">
                            كل الأسعار
                        </option>

                        <option value="600">
                            أقل من $600
                        </option>

                        <option value="1000">
                            أقل من $1000
                        </option>

                        <option value="1500">
                            أقل من $1500
                        </option>

                    </select>

                </div>


                <div
                    class="grid"
                    id="destinationsGrid"
                ></div>

            </div>

        </section>
    `;


    document.getElementById("destinationType").value =
        initialType;

    filterDestinations();
}


/* =====================================================
   FILTER DESTINATIONS
===================================================== */

function filterDestinations() {

    const search =
        document
            .getElementById("destinationSearch")
            .value
            .toLowerCase();

    const type =
        document.getElementById("destinationType").value;

    const rating =
        Number(
            document.getElementById("destinationRating").value
        );

    const price =
        Number(
            document.getElementById("destinationPrice").value
        );


    const filtered =
        destinations.filter(d => {

            const matchesSearch =
                d.name
                    .toLowerCase()
                    .includes(search) ||
                d.country
                    .toLowerCase()
                    .includes(search);

            const matchesType =
                !type || d.type === type;

            const matchesRating =
                d.rating >= rating;

            const matchesPrice =
                !price || d.price <= price;

            return (
                matchesSearch &&
                matchesType &&
                matchesRating &&
                matchesPrice
            );
        });


    const grid =
        document.getElementById("destinationsGrid");


    if (!filtered.length) {

        grid.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-map-location-dot"></i>

                <h3>
                    لم نجد نتائج
                </h3>

                <p>
                    جربي تغيير الفلاتر أو كلمة البحث.
                </p>

            </div>
        `;

        return;
    }


    grid.innerHTML =
        filtered.map(destinationCard).join("");
}


/* =====================================================
   DESTINATION DETAILS
===================================================== */

function renderDestinationDetails() {

    const params =
        new URLSearchParams(
            location.hash.split("?")[1] || ""
        );

    const id =
        Number(params.get("id"));

    const destination =
        destinations.find(d => d.id === id);


    if (!destination) {

        document.getElementById("app").innerHTML = `

            <section class="section">

                <div class="container empty-state">

                    <h2>
                        الوجهة غير موجودة
                    </h2>

                    <a
                        href="#destinations"
                        class="btn btn-primary"
                    >
                        العودة للوجهات
                    </a>

                </div>

            </section>
        `;

        return;
    }


    document.getElementById("app").innerHTML = `

        <section class="details-hero">

            <img
                src="${destination.image}"
                alt="${destination.name}"
            >

            <div class="details-overlay">

                <div class="container">

                    <div class="details-content">

                        <h1>
                            ${destination.name}
                        </h1>

                        <p>
                            ${destination.country}
                            • ${destination.days} أيام
                            • ⭐ ${destination.rating}
                        </p>

                    </div>

                </div>

            </div>

        </section>


        <section class="section">

            <div class="container">

                <div class="card">

                    <div class="card-body">

                        <h2>
                            عن الوجهة
                        </h2>

                        <p>
                            ${destination.description}
                        </p>

                        <br>

                        <button
                            class="btn btn-primary"
                            onclick="bookDestination(${destination.id})"
                        >
                            <i class="fa-solid fa-calendar-check"></i>
                            احجز الرحلة
                        </button>

                    </div>

                </div>


                <br><br>


                <div class="section-header">

                    <h2>
                        الأنشطة المقترحة
                    </h2>

                </div>


                <div class="activities">

                    ${destination.activities.map(
                        (activity, index) => `

                        <div class="activity">

                            <i class="fa-solid ${
                                [
                                    "fa-camera",
                                    "fa-water",
                                    "fa-mountain-sun",
                                    "fa-utensils",
                                    "fa-location-dot"
                                ][index % 5]
                            }"></i>

                            <h3>
                                ${activity}
                            </h3>

                            <p>
                                تجربة مميزة يمكنك إضافتها
                                إلى جدول رحلتك.
                            </p>

                        </div>

                    `).join("")}

                </div>


                <br><br>


                <div class="section-header">

                    <h2>
                        برنامج الرحلة المقترح
                    </h2>

                </div>


                <div class="itinerary">

                    ${Array.from(
                        { length: destination.days },
                        (_, index) => `

                            <div class="day-card">

                                <h3>
                                    اليوم ${index + 1}
                                </h3>

                                <p>
                                    ${destination.activities[
                                        index %
                                        destination.activities.length
                                    ]}
                                </p>

                            </div>

                        `
                    ).join("")}

                </div>

            </div>

        </section>
    `;
}


/* =====================================================
   BOOKINGS
===================================================== */

function bookDestination(id) {

    const destination =
        destinations.find(d => d.id === id);

    if (!destination) return;


    const booking = {

        id: Date.now(),

        type: "رحلة",

        itemId: destination.id,

        name: destination.name,

        image: destination.image,

        price: destination.price,

        status: "في الانتظار",

        date: new Date().toLocaleDateString("ar-EG")
    };


    bookings.push(booking);

    saveBookings();

    showToast("تمت إضافة الرحلة إلى حجوزاتك");

    openCheckout(booking);
}


function bookHotel(id) {

    const hotel =
        hotels.find(h => h.id === id);

    if (!hotel) return;


    const booking = {

        id: Date.now(),

        type: "فندق",

        itemId: hotel.id,

        name: hotel.name,

        image: hotel.image,

        price: hotel.price,

        status: "في الانتظار",

        date: new Date().toLocaleDateString("ar-EG")
    };


    bookings.push(booking);

    saveBookings();

    showToast("تمت إضافة الفندق إلى حجوزاتك");

    openCheckout(booking);
}


/* =====================================================
   RENDER BOOKINGS
===================================================== */

function renderBookings() {

    const total =
        bookings.reduce(
            (sum, booking) =>
                sum + Number(booking.price),
            0
        );


    document.getElementById("app").innerHTML = `

        <section class="section">

            <div class="container">

                <div class="section-header">

                    <h2>
                        حجوزاتي
                    </h2>

                    <p>
                        إدارة الرحلات والفنادق الخاصة بك
                    </p>

                </div>


                ${
                    !bookings.length
                    ?
                    `
                    <div class="empty-state">

                        <i class="fa-solid fa-suitcase-rolling"></i>

                        <h3>
                            لا توجد حجوزات
                        </h3>

                        <p>
                            ابدأ باكتشاف رحلة جديدة.
                        </p>

                        <br>

                        <a
                            href="#destinations"
                            class="btn btn-primary"
                        >
                            اكتشف الوجهات
                        </a>

                    </div>
                    `
                    :
                    `
                    ${bookings.map(booking => `

                        <div class="booking-card">

                            <div class="booking-info">

                                <img
                                    src="${booking.image}"
                                    alt="${booking.name}"
                                >

                                <div>

                                    <h3>
                                        ${booking.name}
                                    </h3>

                                    <p>
                                        ${booking.type}
                                        • ${booking.date}
                                    </p>

                                    <span class="status">
                                        ${booking.status}
                                    </span>

                                </div>

                            </div>


                            <div>

                                <strong class="price">
                                    $${booking.price}
                                </strong>

                                <br>

                                ${
                                    booking.status !== "مؤكد"
                                    ?
                                    `
                                    <button
                                        class="btn btn-primary"
                                        onclick='openCheckoutById(${booking.id})'
                                    >
                                        إتمام الحجز
                                    </button>
                                    `
                                    :
                                    `
                                    <span class="btn btn-success">
                                        <i class="fa-solid fa-check"></i>
                                        مؤكد
                                    </span>
                                    `
                                }


                                <button
                                    class="btn btn-danger"
                                    onclick="deleteBooking(${booking.id})"
                                >
                                    <i class="fa-solid fa-trash"></i>
                                </button>

                            </div>

                        </div>

                    `).join("")}


                    <div class="card">

                        <div class="card-body">

                            <h3>
                                الإجمالي:
                            </h3>

                            <div class="price">
                                $${total}
                            </div>

                        </div>

                    </div>
                    `
                }

            </div>

        </section>
    `;
}


function deleteBooking(id) {

    bookings =
        bookings.filter(
            booking => booking.id !== id
        );

    saveBookings();

    showToast("تم حذف الحجز");

    renderBookings();
}


/* =====================================================
   HOTELS
===================================================== */

function renderHotels() {

    document.getElementById("app").innerHTML = `

        <section class="section">

            <div class="container">

                <div class="section-header">

                    <h2>
                        الفنادق والإقامات
                    </h2>

                    <p>
                        اختر الفندق المناسب لرحلتك
                    </p>

                </div>


                <div class="filters">

                    <input
                        id="hotelSearch"
                        class="form-control"
                        placeholder="ابحث عن فندق أو مدينة..."
                        oninput="filterHotels()"
                    >

                    <select
                        id="hotelRating"
                        class="form-control"
                        onchange="filterHotels()"
                    >

                        <option value="0">
                            كل التقييمات
                        </option>

                        <option value="4">
                            4+ ⭐
                        </option>

                        <option value="4.7">
                            4.7+ ⭐
                        </option>

                    </select>

                    <select
                        id="hotelPrice"
                        class="form-control"
                        onchange="filterHotels()"
                    >

                        <option value="0">
                            كل الأسعار
                        </option>

                        <option value="100">
                            أقل من $100
                        </option>

                        <option value="150">
                            أقل من $150
                        </option>

                        <option value="200">
                            أقل من $200
                        </option>

                    </select>

                </div>


                <div
                    class="grid"
                    id="hotelsGrid"
                ></div>

            </div>

        </section>
    `;


    filterHotels();
}


/* =====================================================
   FILTER HOTELS
===================================================== */

function filterHotels() {

    const search =
        document.getElementById("hotelSearch")
            .value
            .toLowerCase();

    const rating =
        Number(
            document.getElementById("hotelRating").value
        );

    const price =
        Number(
            document.getElementById("hotelPrice").value
        );


    const filtered =
        hotels.filter(hotel => {

            const matchesSearch =
                hotel.name
                    .toLowerCase()
                    .includes(search) ||
                hotel.city
                    .toLowerCase()
                    .includes(search);

            return (
                matchesSearch &&
                hotel.rating >= rating &&
                (!price || hotel.price <= price)
            );
        });


    const grid =
        document.getElementById("hotelsGrid");


    if (!filtered.length) {

        grid.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-hotel"></i>

                <h3>
                    لا توجد فنادق مطابقة
                </h3>

            </div>
        `;

        return;
    }


    grid.innerHTML =
        filtered.map(hotel => `

            <div class="card hotel-card">

                <img
                    class="card-img"
                    src="${hotel.image}"
                    alt="${hotel.name}"
                >

                <div class="hotel-info">

                    <h2>
                        ${hotel.name}
                    </h2>

                    <div class="hotel-meta">

                        <span>
                            <i class="fa-solid fa-location-dot"></i>
                            ${hotel.city}
                        </span>

                        <span class="rating">
                            ⭐ ${hotel.rating}
                        </span>

                    </div>

                    <p>
                        ${hotel.description}
                    </p>

                    <br>

                    <div class="price">
                        $${hotel.price}
                        <small>/ ليلة</small>
                    </div>

                    <br>

                    <button
                        class="btn btn-primary"
                        onclick="bookHotel(${hotel.id})"
                    >
                        <i class="fa-solid fa-calendar-check"></i>
                        احجز الفندق
                    </button>

                </div>

            </div>

        `).join("");
}


/* =====================================================
   CHECKOUT
===================================================== */

let checkoutBooking = null;
let checkoutStep = 1;


function openCheckout(booking) {

    checkoutBooking = booking;

    checkoutStep = 1;

    renderCheckout();

    document
        .getElementById("modal")
        .classList.add("show");
}


function openCheckoutById(id) {

    const booking =
        bookings.find(
            booking => booking.id === id
        );

    if (booking) {
        openCheckout(booking);
    }
}


function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("show");
}


function renderCheckout() {

    const content =
        document.getElementById("modalContent");


    content.innerHTML = `

        <h2>
            إتمام الحجز
        </h2>

        <p>
            ${checkoutBooking.name}
        </p>

        <br>

        <div class="stats">

            <div class="stat">
                <strong>1</strong>
                الاختيار
            </div>

            <div class="stat">
                <strong>2</strong>
                بيانات المسافر
            </div>

            <div class="stat">
                <strong>3</strong>
                الدفع
            </div>

        </div>

        <br>

        ${checkoutStepHTML()}

    `;
}


function checkoutStepHTML() {

    if (checkoutStep === 1) {

        return `

            <h3>
                اختر نوع الحجز
            </h3>

            <br>

            <label class="card">

                <div class="card-body">

                    <input
                        type="radio"
                        name="package"
                        value="economic"
                        checked
                    >

                    اقتصادي

                    <strong>
                        $${checkoutBooking.price}
                    </strong>

                </div>

            </label>

            <br>

            <label class="card">

                <div class="card-body">

                    <input
                        type="radio"
                        name="package"
                        value="premium"
                    >

                    Premium

                    <strong>
                        $${checkoutBooking.price + 150}
                    </strong>

                </div>

            </label>

            <br>

            <button
                class="btn btn-primary"
                onclick="nextCheckout()"
            >
                التالي
                <i class="fa-solid fa-arrow-left"></i>
            </button>
        `;
    }


    if (checkoutStep === 2) {

        return `

            <h3>
                بيانات المسافر
            </h3>

            <br>

            <div class="form-group">

                <label>
                    الاسم الكامل
                </label>

                <input
                    class="form-control"
                    id="travelerName"
                    placeholder="اكتب اسمك"
                >

            </div>


            <div class="form-group">

                <label>
                    البريد الإلكتروني
                </label>

                <input
                    class="form-control"
                    id="travelerEmail"
                    type="email"
                    placeholder="example@email.com"
                >

            </div>


            <div class="form-group">

                <label>
                    رقم الهاتف
                </label>

                <input
                    class="form-control"
                    id="travelerPhone"
                    placeholder="01xxxxxxxxx"
                >

            </div>


            <button
                class="btn btn-primary"
                onclick="nextCheckout()"
            >
                التالي
                <i class="fa-solid fa-arrow-left"></i>
            </button>
        `;
    }


    return `

        <h3>
            الدفع
        </h3>

        <p>
            هذه نسخة تجريبية، لا يتم تنفيذ عملية دفع حقيقية.
        </p>

        <br>

        <div class="form-group">

            <label>
                رقم البطاقة
            </label>

            <input
                class="form-control"
                placeholder="0000 0000 0000 0000"
            >

        </div>


        <div class="planner-form">

            <input
                class="form-control"
                placeholder="MM/YY"
            >

            <input
                class="form-control"
                placeholder="CVV"
            >

        </div>

        <br>

        <button
            class="btn btn-success"
            onclick="completeCheckout()"
        >
            <i class="fa-solid fa-check"></i>
            تأكيد الحجز
        </button>
    `;
}


function nextCheckout() {

    if (checkoutStep === 2) {

        const name =
            document.getElementById("travelerName").value.trim();

        const email =
            document.getElementById("travelerEmail").value.trim();

        const phone =
            document.getElementById("travelerPhone").value.trim();


        if (name.length < 3) {

            showToast("اكتب الاسم بشكل صحيح");

            return;
        }


        if (!email.includes("@")) {

            showToast("اكتب بريد إلكتروني صحيح");

            return;
        }


        if (phone.length < 8) {

            showToast("اكتب رقم الهاتف بشكل صحيح");

            return;
        }
    }


    checkoutStep++;

    renderCheckout();
}


function completeCheckout() {

    const booking =
        bookings.find(
            b => b.id === checkoutBooking.id
        );

    if (booking) {

        booking.status = "مؤكد";

        saveBookings();
    }


    closeModal();

    showToast("تم تأكيد الحجز بنجاح 🎉");

    setTimeout(() => {

        location.hash = "bookings";

    }, 700);
}


/* =====================================================
   PLANNER
===================================================== */

function renderPlanner() {

    document.getElementById("app").innerHTML = `

        <section class="section">

            <div class="container">

                <div class="section-header">

                    <h2>
                        مخطط الرحلة الذكي ✈️
                    </h2>

                    <p>
                        أدخل ميزانيتك وعدد الأيام
                        وسنقترح لك رحلة مناسبة.
                    </p>

                </div>


                <div class="planner-box">

                    <div class="planner-form">

                        <div class="form-group">

                            <label>
                                الميزانية بالدولار
                            </label>

                            <input
                                id="plannerBudget"
                                class="form-control"
                                type="number"
                                placeholder="1000"
                            >

                        </div>


                        <div class="form-group">

                            <label>
                                عدد الأيام
                            </label>

                            <input
                                id="plannerDays"
                                class="form-control"
                                type="number"
                                min="1"
                                max="15"
                                placeholder="5"
                            >

                        </div>

                    </div>

                    <br>

                    <button
                        class="btn btn-primary"
                        onclick="generatePlan()"
                    >
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                        إنشاء خطتي
                    </button>


                    <div
                        id="plannerResult"
                        class="itinerary"
                    ></div>

                </div>

            </div>

        </section>
    `;
}


function generatePlan() {

    const budget =
        Number(
            document.getElementById("plannerBudget").value
        );

    const days =
        Number(
            document.getElementById("plannerDays").value
        );


    if (!budget || !days || days < 1) {

        showToast("أدخل الميزانية وعدد الأيام");

        return;
    }


    let destination;


    if (budget < 600) {

        destination =
            destinations.find(
                d => d.name === "شرم الشيخ"
            );

    } else if (budget < 900) {

        destination =
            destinations.find(
                d => d.name === "إسطنبول"
            );

    } else if (budget < 1200) {

        destination =
            destinations.find(
                d => d.name === "دبي"
            );

    } else if (budget < 1600) {

        destination =
            destinations.find(
                d => d.name === "لندن"
            );

    } else {

        destination =
            destinations.find(
                d => d.name === "اليابان"
            );
    }


    const result =
        document.getElementById("plannerResult");


    result.innerHTML = `

        <div class="card">

            <div class="card-body">

                <h2>
                    ${destination.name} 🌍
                </h2>

                <p>
                    الميزانية المناسبة:
                    $${destination.price}
                </p>

                <p>
                    مدة الرحلة:
                    ${days} أيام
                </p>

            </div>

        </div>

        <br>

        ${Array.from(
            { length: days },
            (_, index) => `

                <div class="day-card">

                    <h3>
                        اليوم ${index + 1}
                    </h3>

                    <p>
                        ${destination.activities[
                            index %
                            destination.activities.length
                        ]}
                    </p>

                </div>

            `
        ).join("")}
    `;

    showToast("تم إنشاء خطة رحلتك 🎉");
}


/* =====================================================
   COMMUNITY
===================================================== */

function renderCommunity() {

    document.getElementById("app").innerHTML = `

        <section class="section">

            <div class="container">

                <div class="section-header">

                    <h2>
                        مجتمع المسافرين 🌍
                    </h2>

                    <p>
                        شارك تجاربك ونصائحك مع الآخرين.
                    </p>

                </div>


                <div class="post-form">

                    <textarea
                        id="postText"
                        class="form-control"
                        placeholder="اكتب تجربتك..."
                    ></textarea>

                    <br>

                    <input
                        id="postImage"
                        class="form-control"
                        placeholder="رابط صورة اختياري"
                    >

                    <br>

                    <button
                        class="btn btn-primary"
                        onclick="addPost()"
                    >
                        نشر
                    </button>

                </div>


                <div id="postsContainer">

                    ${posts.map(postHTML).join("")}

                </div>

            </div>

        </section>
    `;
}


function postHTML(post) {

    return `

        <article class="post">

            ${
                post.image
                ?
                `
                <img
                    class="post-image"
                    src="${post.image}"
                    alt="post"
                >
                `
                :
                ""
            }


            <div class="post-content">

                <h3>
                    ${post.name}
                </h3>

                <p>
                    ${post.text}
                </p>


                <div class="post-actions">

                    <button
                        class="btn btn-secondary"
                        onclick="likePost(${post.id})"
                    >
                        ❤️ ${post.likes}
                    </button>

                </div>


                <br>


                <div>

                    ${
                        post.comments.length
                        ?
                        post.comments.map(
                            comment => `
                                <div class="comment">
                                    💬 ${comment}
                                </div>
                            `
                        ).join("")
                        :
                        "<p>لا توجد تعليقات بعد.</p>"
                    }

                </div>


                <br>


                <div style="display:flex;gap:8px;">

                    <input
                        id="comment-${post.id}"
                        class="form-control"
                        placeholder="اكتب تعليقًا..."
                    >

                    <button
                        class="btn btn-primary"
                        onclick="addComment(${post.id})"
                    >
                        إرسال
                    </button>

                </div>

            </div>

        </article>
    `;
}


function addPost() {

    const text =
        document
            .getElementById("postText")
            .value
            .trim();

    const image =
        document
            .getElementById("postImage")
            .value
            .trim();


    if (!text) {

        showToast("اكتب محتوى المنشور أولًا");

        return;
    }


    posts.unshift({

        id: Date.now(),

        name:
            currentUser?.name || "مسافر",

        text,

        image,

        likes: 0,

        comments: []
    });


    savePosts();

    showToast("تم نشر المنشور");

    renderCommunity();
}


function likePost(id) {

    const post =
        posts.find(
            post => post.id === id
        );

    if (!post) return;

    post.likes++;

    savePosts();

    renderCommunity();
}


function addComment(id) {

    const input =
        document.getElementById(
            `comment-${id}`
        );

    const comment =
        input.value.trim();


    if (!comment) return;


    const post =
        posts.find(
            post => post.id === id
        );


    if (post) {

        post.comments.push(comment);

        savePosts();

        renderCommunity();
    }
}


/* =====================================================
   PROFILE
===================================================== */

function renderProfile() {

    if (!currentUser) {

        document.getElementById("app").innerHTML = `

            <section class="section">

                <div class="container empty-state">

                    <i class="fa-solid fa-user-lock"></i>

                    <h2>
                        يجب تسجيل الدخول
                    </h2>

                    <p>
                        سجل دخولك للوصول إلى حسابك.
                    </p>

                    <br>

                    <a
                        href="#auth"
                        class="btn btn-primary"
                    >
                        تسجيل الدخول
                    </a>

                </div>

            </section>
        `;

        return;
    }


    const confirmed =
        bookings.filter(
            b => b.status === "مؤكد"
        ).length;


    document.getElementById("app").innerHTML = `

        <section class="section">

            <div class="container">

                <div class="profile-header">

                    <div class="avatar">
                        ${currentUser.name.charAt(0)}
                    </div>

                    <div>

                        <h1>
                            ${currentUser.name}
                        </h1>

                        <p>
                            ${currentUser.email}
                        </p>

                    </div>

                </div>


                <div class="stats">

                    <div class="stat">

                        <strong>
                            ${bookings.length}
                        </strong>

                        الحجوزات

                    </div>


                    <div class="stat">

                        <strong>
                            ${confirmed}
                        </strong>

                        الحجوزات المؤكدة

                    </div>


                    <div class="stat">

                        <strong>
                            ${bookings.length >= 3 ? "🏆" : "⭐"}
                        </strong>

                        الشارات

                    </div>

                </div>


                <br>


                <div class="card">

                    <div class="card-body">

                        <h2>
                            تعديل الملف الشخصي
                        </h2>

                        <br>

                        <div class="form-group">

                            <label>
                                الاسم
                            </label>

                            <input
                                id="profileName"
                                class="form-control"
                                value="${currentUser.name}"
                            >

                        </div>


                        <div class="form-group">

                            <label>
                                البريد الإلكتروني
                            </label>

                            <input
                                id="profileEmail"
                                class="form-control"
                                value="${currentUser.email}"
                            >

                        </div>


                        <button
                            class="btn btn-primary"
                            onclick="updateProfile()"
                        >
                            حفظ التغييرات
                        </button>


                        <button
                            class="btn btn-danger"
                            onclick="logout()"
                        >
                            تسجيل الخروج
                        </button>

                    </div>

                </div>

            </div>

        </section>
    `;
}


function updateProfile() {

    const name =
        document
            .getElementById("profileName")
            .value
            .trim();

    const email =
        document
            .getElementById("profileEmail")
            .value
            .trim();


    if (name.length < 3) {

        showToast("الاسم قصير جدًا");

        return;
    }


    if (!email.includes("@")) {

        showToast("البريد الإلكتروني غير صحيح");

        return;
    }


    currentUser.name = name;
    currentUser.email = email;

    saveUser();

    showToast("تم تحديث البيانات");

    renderProfile();
}


function logout() {

    currentUser = null;

    localStorage.removeItem("tripifyUser");

    showToast("تم تسجيل الخروج");

    setTimeout(() => {

        location.hash = "home";

    }, 500);
}


/* =====================================================
   AUTH
===================================================== */

function renderAuth() {

    document.getElementById("app").innerHTML = `

        <section class="section">

            <div class="container auth-container">

                <div class="auth-card" id="authCard">

                    ${loginHTML()}

                </div>

            </div>

        </section>
    `;
}


function loginHTML() {

    return `

        <h2>
            تسجيل الدخول
        </h2>

        <div class="form-group">

            <label>
                الاسم
            </label>

            <input
                id="loginName"
                class="form-control"
                placeholder="اكتب اسمك"
            >

        </div>


        <div class="form-group">

            <label>
                البريد الإلكتروني
            </label>

            <input
                id="loginEmail"
                class="form-control"
                type="email"
                placeholder="example@email.com"
            >

        </div>


        <div class="form-group">

            <label>
                كلمة المرور
            </label>

            <input
                id="loginPassword"
                class="form-control"
                type="password"
                placeholder="********"
            >

        </div>


        <button
            class="btn btn-primary"
            style="width:100%;"
            onclick="login()"
        >
            تسجيل الدخول
        </button>


        <br><br>

        <p style="text-align:center;">

            ليس لديك حساب؟

            <button
                class="btn btn-secondary"
                onclick="showRegister()"
            >
                إنشاء حساب
            </button>

        </p>
    `;
}


function registerHTML() {

    return `

        <h2>
            إنشاء حساب
        </h2>

        <div class="form-group">

            <label>
                الاسم
            </label>

            <input
                id="registerName"
                class="form-control"
                placeholder="اسمك"
            >

        </div>


        <div class="form-group">

            <label>
                البريد الإلكتروني
            </label>

            <input
                id="registerEmail"
                class="form-control"
                type="email"
                placeholder="example@email.com"
            >

        </div>


        <div class="form-group">

            <label>
                كلمة المرور
            </label>

            <input
                id="registerPassword"
                class="form-control"
                type="password"
                placeholder="********"
            >

        </div>


        <button
            class="btn btn-primary"
            style="width:100%;"
            onclick="register()"
        >
            إنشاء الحساب
        </button>


        <br><br>

        <p style="text-align:center;">

            لديك حساب بالفعل؟

            <button
                class="btn btn-secondary"
                onclick="showLogin()"
            >
                تسجيل الدخول
            </button>

        </p>
    `;
}


function showLogin() {

    document.getElementById("authCard").innerHTML =
        loginHTML();
}


function showRegister() {

    document.getElementById("authCard").innerHTML =
        registerHTML();
}


function login() {

    const name =
        document
            .getElementById("loginName")
            .value
            .trim();

    const email =
        document
            .getElementById("loginEmail")
            .value
            .trim();

    const password =
        document
            .getElementById("loginPassword")
            .value;


    if (name.length < 3) {

        showToast("اكتب الاسم");

        return;
    }


    if (!email.includes("@")) {

        showToast("اكتب بريد صحيح");

        return;
    }


    if (password.length < 4) {

        showToast("كلمة المرور قصيرة");

        return;
    }


    currentUser = {
        name,
        email
    };


    saveUser();

    showToast("تم تسجيل الدخول بنجاح");

    setTimeout(() => {

        location.hash = "profile";

    }, 600);
}


function register() {

    const name =
        document
            .getElementById("registerName")
            .value
            .trim();

    const email =
        document
            .getElementById("registerEmail")
            .value
            .trim();

    const password =
        document
            .getElementById("registerPassword")
            .value;


    if (name.length < 3) {

        showToast("الاسم قصير جدًا");

        return;
    }


    if (!email.includes("@")) {

        showToast("البريد الإلكتروني غير صحيح");

        return;
    }


    if (password.length < 4) {

        showToast("كلمة المرور يجب أن تكون 4 أحرف على الأقل");

        return;
    }


    currentUser = {
        name,
        email
    };


    saveUser();

    showToast("تم إنشاء الحساب 🎉");

    setTimeout(() => {

        location.hash = "profile";

    }, 600);
}


/* =====================================================
   DARK MODE
===================================================== */

function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "tripifyTheme",
        isDark ? "dark" : "light"
    );

    updateThemeIcon();
}


function updateThemeIcon() {

    const button =
        document.getElementById("themeBtn");

    if (!button) return;


    const isDark =
        document.body.classList.contains("dark");


    button.innerHTML = isDark
        ?
        `<i class="fa-solid fa-sun"></i>`
        :
        `<i class="fa-solid fa-moon"></i>`;
}


function loadTheme() {

    const theme =
        localStorage.getItem("tripifyTheme");


    if (theme === "dark") {

        document.body.classList.add("dark");
    }

    updateThemeIcon();
}


loadTheme();
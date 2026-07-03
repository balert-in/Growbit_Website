import logoAirtel from '../assets/airtel.webp';
import logoAirtelPayment from '../assets/airtelpayment.webp';
import logoAmazonPay from '../assets/amazonpay.webp';
import logoAmnex from '../assets/amnex.webp';
import logoApolloHospital from '../assets/apollohospital.webp';
import logoCafeCoffeeDay from '../assets/cafecoffeeday.webp';
import logoCashe from '../assets/cashe.webp';
import logoGhmc from '../assets/ghmc.webp';
import logoIiflFinance from '../assets/iiflfinance.webp';
import logoJio from '../assets/jio.webp';
import logoNeoGeo from '../assets/neogeo.webp';
import logoNinjaKart from '../assets/ninjakart.webp';
import logoNiyo from '../assets/niyo.webp';
import logoPagarBook from '../assets/pagarbook.webp';
import logoPayswiff from '../assets/payswiff.webp';
import logoPaytm from '../assets/paytm.webp';
import logoPhonePe from '../assets/phonepe.webp';
import logoRapido from '../assets/rapido.webp';
import logoRsiSoftech from '../assets/rsisoftech.webp';
import logoShriChaitanya from '../assets/shrichaitanya.webp';
import logoOla from '../assets/ola.webp';
import logoIndusInd from '../assets/indusind.webp';
import logoSubway from '../assets/subway.webp';
import logoSwiggy from '../assets/swiggy.webp';
import logoKaram from '../assets/karam.webp';
import logoVyapar from '../assets/vyapar.webp';
import logoNamanYatri from '../assets/namanyatri.webp';
import logoWhatsApp from '../assets/whatsapp.webp';

export const INITIAL_FEATURES = [
    {
        id: '1',
        title: 'GIS Survey & Operations',
        description: 'Take the guesswork out of field operations with precise GPS-enabled mapping and real-time location tracking. Our teams capture accurate ground data that helps you plan better, execute faster, and make smarter decisions based on what\'s actually happening on-site.',
        keyPoints: [
            'GPS-Tagged Data Collection',
            'Real-Time Field Tracking',
            'Custom Survey Forms & Checklists',
            'Offline Mode for Remote Areas'
        ],
        imageUrl: '/gissurvey.webp',
        themeColor: '#9cd4af'
    },
    {
        id: '2',
        title: 'Payroll & Workforce Management',
        description: 'Simplify your HR operations with our complete end-to-end outsourcing solutions. From managing payroll to workforce administration for distributed teams, we handle the complexities so you can focus on scaling your core business.',
        keyPoints: [
            'End-to-End Payroll Processing',
            'Distributed Team Management',
            'Employee Benefits & Compliance',
            'Seamless Onboarding & Offboarding'
        ],
        imageUrl: '/bgv.webp',
        themeColor: '#75ccc3'
    },
    {
        id: '3',
        title: 'Merchant & Customer Acquisition',
        description: 'Growing your network shouldn\'t feel like a grind. From finding the right merchants to onboarding customers in new territories, we put boots on the ground and handle the heavy lifting activation, documentation, and ongoing relationship building.',
        keyPoints: [
            'Territory-Based Lead Generation',
            'End-to-End Merchant Onboarding',
            'KYC Documentation & Verification',
            'Retention & Reactivation Campaigns'
        ],
        imageUrl: '/merchant.webp',
        themeColor: '#d7e48a'
    },
    {
        id: '4',
        title: 'Research & Surveys',
        description: 'Want to know what people really think? Our verified field teams collect ground-level insights straight from your target audience whether it\'s market research, customer feedback, or product testing. Real people, real answers, real data.',
        keyPoints: [
            'Consumer & Market Research',
            'Brand Perception Studies',
            'Product Feedback Collection',
            'Competitor Analysis on Ground'
        ],
        imageUrl: '/business.webp',
        themeColor: '#9cd4af'
    }
];

export const FOOTER_DATA = {
    company: {
        logo: '/logo-light.webp',
        description: 'Empowering businesses with technology, talent, and strategy. Your partner in sustainable growth.',
    },
    social: [
        { name: 'Facebook', icon: 'Facebook', url: 'https://www.facebook.com/growbit.in/' },
        { name: 'YouTube', icon: 'Youtube', url: 'https://www.youtube.com/@growbit' },
        { name: 'Instagram', icon: 'Instagram', url: 'https://www.instagram.com/growbit.in/?hl=en' },
        { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/company/thegrowbit' }
    ],
    sections: [
        {
            title: 'Services',
            links: [
                { label: 'Home', url: '/' },
                { label: 'About', url: '/about' },
                { label: 'Contact', url: '/contact' }
            ]
        },
        {
            title: 'Company',
            links: [
                { label: 'Terms & Condition', url: '/TermsAndConditions' },
                { label: 'Privacy Policy', url: '/PrivacyPolicy' }
            ]
        },
        {
            title: 'Contact',
            links: [
                { label: 'hello@growbit.in', url: 'mailto:hello@growbit.in', type: 'email' },
                { label: '+91 90638 90638', url: 'tel:+919063890638', type: 'phone' },
                {
                    label: 'Growbit Business Services Private Limited\nThe Mayflower, Plot No.72, P & T Colony,\nKarkhana, Secunderabad, Telangana – 500009',
                    type: 'address'
                }
            ]
        }
    ],
    tagline: "LET'S GROW\nTOGETHER"
};

export const ABOUT_DATA = {
    hero: {
        title: "From Strategy to Street-Level Execution",
        subtitle: "GrowBit is a field-operations powerhouse with a nationwide feet-on-street network. We help businesses expand faster, reach every customer segment, and turn plans into measurable results powered by technology, data, and real people on the ground."
    },
    stats: [
        {
            label: "Years of Excellence",
            value: "5+",
            description: "Delivering innovative solutions"
        },
        {
            label: "Happy Clients",
            value: "150+",
            description: "Across multiple industries"
        },
        {
            label: "Users Reached",
            value: "1K+",
            description: "Through our platforms"
        },
        {
            label: "Projects Completed",
            value: "200+",
            description: "With 100% satisfaction"
        }
    ],
    journey: {
        title: "Our Journey",
        paragraphs: [
            "GrowBit started in 2021 with a simple belief the best way to grow a business is to stay as close as possible to your customers. We saw companies struggling to reach audiences beyond metro cities, facing coordination gaps, and dealing with unreliable on-ground data. So we built a solution that puts real people where they're needed most.",
            "Today, we operate a nationwide feet-on-street network of 5000+ verified field professionals. Our teams handle everything from market expansion and customer acquisition to GIS surveys and compliance verification. Every task is tracked in real-time through our proprietary platform, giving you complete visibility and control over field operations.",
            "What sets us apart is how we combine human execution with intelligent data. Our technology-enabled approach ensures transparency, accountability, and measurable impact on every project. Whether you're launching in a new region or scaling operations across India, GrowBit makes sure your plans don't just stay on paper they get executed with speed and precision."
        ],
        imageUrl: "/journey.webp"
    },
    timeline: [
        {
            year: "2021",
            title: "The Foundation",
            description: "GrowBit was born with a clear mission to help businesses stay closer to their customers. We started with a small team focused on feet-on-street services and customer acquisition.",
            side: "left"
        },
        {
            year: "2022",
            title: "Building the Network",
            description: "Expanded our field workforce across 50+ cities. Onboarded enterprise clients for merchant acquisition and retention campaigns. Established our presence in key markets across India.",
            side: "right"
        },
        {
            year: "2023",
            title: "New Service Lines",
            description: "Launched GIS Survey operations and BGV compliance verification services. Introduced real-time tracking and geo-tagged task management for complete operational visibility.",
            side: "left"
        },
        {
            year: "2024",
            title: "Technology at Scale",
            description: "Built our proprietary field operations platform with live dashboards and performance analytics. Grew to 5000+ verified field professionals and 150+ enterprise clients nationwide.",
            side: "right"
        },
        {
            year: "2025",
            title: "Nationwide Impact",
            description: "Partnered with geospatial industry leaders at GeoSmart India. Expanding into new verticals and aiming to become India's most trusted growth partner for on-ground execution.",
            side: "left"
        }
    ],
    ceoNote: {
        message: "Building Growbit has been the most rewarding journey of my life. Every challenge we've overcome, every client we've helped succeed, and every team member who's joined our mission has been a stepping stone toward our vision of making technology accessible and impactful for all businesses. Thank you for being part of our story.",
        author: "Shailendra Kumar Thalluri",
        role: "Founder & CEO, Growbit"
    }
};

export const FAQ_DATA = [
    {
        question: "Which regions can you cover for merchant and customer acquisition?",
        answer: "We have a nationwide presence with thousands of verified field professionals. Whether you are targeting metro cities or deep rural markets, we can deploy teams to onboard, activate, and retain your merchant or customer base across any region in India."
    },
    {
        question: "How do you ensure the quality of merchants or customers onboarded?",
        answer: "Our field executives use a proprietary app with geo-tagging, live image capture, and real-time verification. Every onboarding goes through a stringent digital audit process to ensure you only get genuine, high-quality acquisitions."
    },
    {
        question: "What kind of research and surveys can your field teams conduct?",
        answer: "We handle a wide range of on-ground research, including retail audits, consumer sentiment analysis, competitor benchmarking, and product sampling. Our teams gather verified ground-level insights directly from your target audiences and merchant partners."
    },
    {
        question: "How do you guarantee the authenticity of the survey data collected?",
        answer: "All survey data is collected via our centralized platform, which enforces strict validation rules, captures GPS coordinates, and requires timestamped photographic evidence. This completely eliminates data falsification and ensures 100% accuracy."
    },
    {
        question: "Can you manage payroll and compliance for a distributed field workforce?",
        answer: "Yes, we offer complete HR outsourcing for your distributed teams. We handle end-to-end payroll processing, tax deductions, statutory compliance (PF/ESI), and employee queries, allowing you to focus purely on your core business goals."
    },
    {
        question: "Does your workforce management service include hiring and replacement?",
        answer: "Absolutely. We don't just manage payroll; we handle the entire employee lifecycle. If a field agent leaves, our rapid-deployment model ensures an immediate replacement so your on-ground operations continue without any downtime."
    },
    {
        question: "What technologies do you use for GIS surveys and field mapping?",
        answer: "Our teams are equipped with advanced spatial data collection tools that integrate seamlessly with modern GIS platforms. We capture precise coordinates, structural details, and high-resolution media for integrated field mapping and operational accuracy."
    },
    {
        question: "How quickly can you deploy a team for large-scale operations?",
        answer: "Thanks to our extensive nationwide network, we can mobilize specialized field teams within 7 to 10 days for large-scale operations. For urgent pilot projects across any of our service verticals, we can often deploy resources in as little as 3 to 4 days."
    }
];

export const TESTIMONIALS_DATA = [
    {
        id: 1,
        name: "Rajesh Menon",
        role: "Head of Operations, FinEdge",
        image: "https://api.dicebear.com/9.x/notionists/svg?seed=Rajesh",
        feedback: "We needed to onboard 2000+ merchants across 5 states in under a month. GrowBit pulled it off without a single hiccup. Their tracking dashboard made it easy to monitor progress daily.",
        rating: 5
    },
    {
        id: 2,
        name: "Sneha Kulkarni",
        role: "Project Manager, UrbanSurvey Co.",
        image: "https://api.dicebear.com/9.x/notionists/svg?seed=Sneha",
        feedback: "The GIS survey team was thorough and professional. Every data point was geo-tagged and verified exactly what we needed for our municipal mapping project.",
        rating: 5
    },
    {
        id: 3,
        name: "Amit Deshmukh",
        role: "HR Director, TrustHire",
        image: "https://api.dicebear.com/9.x/notionists/svg?seed=Amit",
        feedback: "Background verification used to take us weeks. With GrowBit, we get accurate reports in 3-4 days. It's made our hiring process so much faster and more reliable.",
        rating: 5
    },
    {
        id: 4,
        name: "Kavitha Rajan",
        role: "Regional Head, QuickRetail",
        image: "https://api.dicebear.com/9.x/notionists/svg?seed=Kavitha",
        feedback: "Expanding into tier-2 cities was tough until we partnered with GrowBit. Their feet-on-street network helped us acquire 800+ new customers in just 6 weeks.",
        rating: 5
    },
    {
        id: 5,
        name: "Nikhil Agarwal",
        role: "Founder, InsightLoop",
        image: "https://api.dicebear.com/9.x/notionists/svg?seed=Nikhil",
        feedback: "We ran a consumer research study through GrowBit and the quality of responses was fantastic. Real people, real insights not just checkbox surveys.",
        rating: 5
    }
];

export const CLIENTS_DATA = [
    { name: "Airtel", logo: logoAirtel },
    { name: "Airtel Payments Bank", logo: logoAirtelPayment },
    { name: "Amazon Pay", logo: logoAmazonPay },
    { name: "Amnex", logo: logoAmnex },
    { name: "Apollo Hospitals", logo: logoApolloHospital },
    { name: "Cafe Coffee Day", logo: logoCafeCoffeeDay },
    { name: "CASHe", logo: logoCashe },
    { name: "GHMC", logo: logoGhmc },
    { name: "IIFL Finance", logo: logoIiflFinance },
    { name: "IndusInd Bank", logo: logoIndusInd },
    { name: "Jio", logo: logoJio },
    { name: "Karam", logo: logoKaram },
    { name: "Namma Yatri", logo: logoNamanYatri },
    { name: "NeoGeo", logo: logoNeoGeo },
    { name: "Ninjacart", logo: logoNinjaKart },
    { name: "Niyo", logo: logoNiyo },
    { name: "Ola", logo: logoOla },
    { name: "PagarBook", logo: logoPagarBook },
    { name: "Payswiff", logo: logoPayswiff },
    { name: "Paytm", logo: logoPaytm },
    { name: "PhonePe", logo: logoPhonePe },
    { name: "Rapido", logo: logoRapido },
    { name: "RSI Softech", logo: logoRsiSoftech },
    { name: "Sri Chaitanya", logo: logoShriChaitanya },
    { name: "Subway", logo: logoSubway },
    { name: "Swiggy", logo: logoSwiggy },
    { name: "Vyapar", logo: logoVyapar },
    { name: "WhatsApp", logo: logoWhatsApp }
];

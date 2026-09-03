// ============================================================
// DATA.JS — Centralized Data Store
// To add a new project or service, just add an object to the array!
// ============================================================

const SITE_INFO = {
  name: "Muhammad Zulyan Fakih",
  title: "CREATIVE DESIGNER",
  greeting: "Hello, I'm Zulyan",
  tagline: "Turning late-night coffee, chaotic briefs, and random ideas into pixel-perfect designs that actually work.",
  traits: "Adaptable, good communication, good teamwork, and good night.",
  bio: "A Creative Designer with a strong foundation in visual communication, dedicated to crafting impactful digital experiences. Specializing in the intersection of aesthetic design and strategic content creation, the professional focus ranges from conceptualizing promotional campaigns to developing engaging video narratives. Driven by modern internet culture and dynamic digital engagement, the ultimate goal is to transform complex ideas into compelling, relatable visual solutions for contemporary audiences.",
  email: "mzulyanfakih90@gmail.com",
};

const SOCIAL_LINKS = [
  { name: "Instagram", icon: "ri-instagram-line", url: "https://www.instagram.com/muzakiboi" },
  { name: "Behance", icon: "ri-behance-line", url: "https://www.behance.net/zulyanfakih90" },
  { name: "Discord", icon: "ri-discord-line", url: "https://discordapp.com/users/662643259272593428" },
  { name: "LinkedIn", icon: "ri-linkedin-line", url: "https://www.linkedin.com/in/muhammad-zulyan-fakih-a91287174/" },
  { name: "Email", icon: "ri-mail-line", url: "mailto:mzulyanfakih90@gmail.com" },
];

const NAV_LINKS = [
  { name: "Home", href: "index.html", page: "index.html" },
  { name: "Project", href: "projects.html", page: "projects.html" },
  { name: "About", href: "about.html", page: "about.html" },
  { name: "Services", href: "services.html", page: "services.html" },
  { name: "Contact", href: "contact.html", page: "contact.html" },
];

// ============================================================
// CLIENTS — Dual-direction animated client logos marquee
// ============================================================
const CLIENTS_ROW_1 = [
  { name: "Sinar Mas Land", logo: "assets/images/logo client/sinarmas-land.png", subtext: "SINARMAS GROUP" },
  { name: "Universitas Pembangunan Jaya", logo: "assets/images/logo client/universitas-pembangunan-jaya.png", subtext: "UPJ CAMPUS" },
  { name: "Binkei", logo: "assets/images/logo client/binkei.png", subtext: "CREATIVE STUDIO" },
  { name: "Asteka", logo: "assets/images/logo client/asteka.png", subtext: "PRODUCTION" },
  { name: "TOKI", logo: "assets/images/logo client/tim-olimpiade-komputer-indonesia.png", subtext: "TIM OLIMPIADE KOMPUTER" },
  { name: "Women Moment", logo: "assets/images/logo client/women-moment.png", subtext: "CREATIVE MOVEMENT" },
];

const CLIENTS_ROW_2 = [
  { name: "Amoora Travel", logo: "assets/images/logo client/amoora-travel.png", subtext: "BEAUTY & TRAVEL" },
  { name: "Rynest Tech", logo: "assets/images/logo client/rynest-tech.png", subtext: "TECHNOLOGY" },
  { name: "ON Studio", logo: "assets/images/logo client/on-studio.png", subtext: "VISUAL ARTS" },
  { name: "Universitas Terbuka", logo: "assets/images/logo client/universitas-terbuka.png", subtext: "EDUCATION" },
  { name: "Seleris", logo: "assets/images/logo client/seleris.png", subtext: "DIGITAL PLATFORM" },
];

// ============================================================
// PROJECTS — Featured Projects & Case Studies
// ============================================================
const PROJECTS = [
  {
    id: "dies-natalis-upj-14th-11th-graduation",
    title: "Dies Natalis UPJ 14th & 11th Graduation",
    subtitle: "Identity Design & Event Branding",
    description: "Universitas Pembangunan Jaya (UPJ) celebrated its 14th Dies Natalis and 11th Graduation Ceremony with a distinguished, culturally enriched visual identity. This project represents the comprehensive design and visual execution across traditional print, large-scale stage architecture, digital promotional materials, and official academic collaterals.",
    image: "assets/images/graduation-upj-2025/upj-hero.png",
    placeholderColor: "#1B3B2B",
    category: "Identity Design",
    documentationHeading: "Final Design & Event Documentation",
    designProcess: "The creative process started with extensive cultural research into Dayak ethnic heritage. The primary motifs selected were the Kuntul Perak (representing elegance, wisdom, and the soaring ambition of graduates) and the Talawang shield (symbolizing resilience and cultural pride). These were harmoniously merged into contemporary geometric layouts, stage backdrops, and academic regalia guidelines.",
    challenge: "Balancing strict academic formality and ceremonial prestige with vibrant, authentic Dayak cultural motifs. The designs had to scale seamlessly from tiny graduation invitation badges to massive 20-meter stage backdrops without visual distortion.",
    solution: "Developed an adaptable grid-based vector ornament system and a cohesive color palette of Emerald Green, Ceremonial Gold, and Pearl Ivory. A unified design manual guided the production of all physical and digital touchpoints.",
    documentation: "The identity system was deployed across the main university auditorium, printed diplomas, graduate photobooths, VIP ceremonial books, and official live-stream broadcasts, creating an unforgettable milestone for thousands of graduates.",
    processImages: [
      { title: "Dayak Motif Research — Batik Kuntul Perak & Talawang", image: "assets/images/graduation-upj-2025/upj-process-1.png" },
      { title: "Vector Construction, Grid & Color Standards", image: "assets/images/graduation-upj-2025/upj-process-2.png" },
    ],
    documentationImages: [
      { title: "Dayak Cultural Motif & Core Identity System", image: "assets/images/graduation-upj-2025/final-design-1-2025-upj.png" },
      { title: "Batik Sketch to Final Vector Construction", image: "assets/images/graduation-upj-2025/final-design-2-2025-upj.png" },
      { title: "Color Palette & Academic Typography Guidelines", image: "assets/images/graduation-upj-2025/final-design-3-2025-upj.png" },
      { title: "Stage Ceremony & Visual Ambience Architecture", image: "assets/images/graduation-upj-2025/final-design-4-2025-upj.png" },
      { title: "Promotional Materials & Academic Collaterals", image: "assets/images/graduation-upj-2025/final-design-5-2025-upj.png" },
      { title: "Stage Backdrops & Main Auditorium Ambiance 1", image: "assets/images/graduation-upj-2025/documentation-1.png" },
      { title: "Stage Backdrops & Main Auditorium Ambiance 2", image: "assets/images/graduation-upj-2025/documentation-2.png" },
      { title: "Stage Backdrops & Main Auditorium Ambiance 3", image: "assets/images/graduation-upj-2025/documentation-3.png" },
      { title: "VIP Ceremonial Booklets & Invitations", image: "assets/images/graduation-upj-2025/documentation-4.png" },
      { title: "Official Academic Signage & Directional Displays", image: "assets/images/graduation-upj-2025/documentation-5.png" },
      { title: "Cultural Pattern & Ornamentation Details", image: "assets/images/graduation-upj-2025/documentation-6.png" },
      { title: "Graduate Photobooth & Commemorative Wall", image: "assets/images/graduation-upj-2025/documentation-7.png" },
    ],
    externalLink: "https://behance.net/",
  },
  {
    id: "telkom-indonesia",
    title: "Telkom Indonesia Brand Identity Redesign",
    subtitle: "Conceptual Rebranding & Visual Identity System",
    description: "A comprehensive conceptual brand identity redesign created as a university Final Assignment / UAS (Ujian Akhir Semester) in Visual Communication Design (DKV) at Universitas Pembangunan Jaya. This project reimagines Telkom Indonesia's national telecommunications visual identity through a modern, tech-forward, and agile design system.",
    image: "assets/images/project-redesign-telkom-indonesia/hero-redesign-telkom-indonesia.png",
    placeholderColor: "#E41E2C",
    category: "Rebranding & Identity Design",
    documentationHeading: "Project Showcase",
    designProcess: "The redesign began with thorough research into Telkom Indonesia's brand equity, historical identity symbols, and competitive landscape in digital telecommunications. The visual directions were formulated through geometric grid construction, modern Syne typography pairing, dynamic red-and-white color theory, and full corporate collateral testing.",
    challenge: "Telkom Indonesia possesses massive brand recognition across Indonesia. The primary design challenge was to modernize its corporate identity without losing the trustworthiness, heritage, and familiarity built over decades, while creating a flexible visual language that excels on both digital screens and physical architecture.",
    solution: "Developed a streamlined geometric logo mark and versatile visual identity system featuring custom Syne typography, dynamic stationery sets, corporate collateral, and a complete Graphic Standard Manual (GSM / Brand Guidelines) book defining usage rules, grid systems, and color standards.",
    documentation: "Explore the complete logo exploration, stationery collaterals, and Graphic Standard Manual (GSM) brand guidelines book published on Behance.",
    processImages: [
      { title: "Logo Construction & Grid System", image: "assets/images/project-redesign-telkom-indonesia/redesign-telkom-indonesia-design-process-1.png" },
      { title: "Typography & Color Harmony", image: "assets/images/project-redesign-telkom-indonesia/redesign-telkom-indonesia-design-process-2.png" },
    ],
    documentationImages: [
      { title: "Logo Exploration & Syne Typography 1", image: "assets/images/project-redesign-telkom-indonesia/syne-logo-1.png" },
      { title: "Logo Exploration & Syne Typography 2", image: "assets/images/project-redesign-telkom-indonesia/syne-logo-2.png" },
      { title: "Logo Exploration & Syne Typography 3", image: "assets/images/project-redesign-telkom-indonesia/syne-logo-3.png" },
      { title: "Logo Exploration & Syne Typography 4", image: "assets/images/project-redesign-telkom-indonesia/syne-logo-4.png" },
      { title: "Logo Exploration & Syne Typography 5", image: "assets/images/project-redesign-telkom-indonesia/syne-logo-5.png" },
      { title: "Corporate Stationery & Collaterals 1", image: "assets/images/project-redesign-telkom-indonesia/stationary-syne-1.png" },
      { title: "Corporate Stationery & Collaterals 2", image: "assets/images/project-redesign-telkom-indonesia/stationary-syne-2.png" },
      { title: "Corporate Stationery Suite 3", image: "assets/images/project-redesign-telkom-indonesia/stationary-syne-3.png" },
      { title: "Graphic Standard Manual (GSM) Book 1", image: "assets/images/project-redesign-telkom-indonesia/book-gsm-redesign-telkom-indonesia-1.png" },
      { title: "Graphic Standard Manual (GSM) Book 2", image: "assets/images/project-redesign-telkom-indonesia/book-gsm-redesign-telkom-indonesia-2.png" },
    ],
    externalLink: "https://www.behance.net/gallery/216954709/Rebranding-Telkom-Indonesia-(Final-Assignment)",
  },
  {
    id: "women-moment",
    title: "Women Moment",
    subtitle: "Short-Form Video Editing, Social Feeds & Live Streaming Production",
    description: "Women Moment (Selasar Cerita) is an inspiring digital community and storytelling platform dedicated to women's empowerment, personal narratives, and daily self-reflection. This project involved producing high-retention short-form video reels, aesthetic carousel & feed graphics, and coordinating live streaming productions as a safe storytelling space for the community.",
    image: "assets/images/project-womenmoment/hero-womenmoment.png",
    placeholderColor: "#6A2C70",
    category: "Video Editing & Social Media",
    documentationHeading: "Project Showcase",
    designProcess: "The creative workflow focused on empathetic visual storytelling, warm aesthetic color palettes, and emotional pacing. Video reels and TikTok shorts were edited using CapCut, Premiere Pro, and After Effects with custom captioning, soft ambient audio design, and engaging hook structures. Carousel feeds were crafted in Figma and Photoshop with cohesive minimalist typography and comforting palettes. Live streaming sessions on TikTok ('Selasar Cerita') were produced with custom interactive OBS overlays and viewer engagement graphics.",
    challenge: "Crafting visual content and live stream experiences that feel genuine, intimate, and comforting while maintaining high algorithmic retention and organic audience engagement across fast-scrolling platforms like TikTok and Instagram.",
    solution: "Implemented a consistent warm visual tone, emotionally resonant video hooks, interactive carousel storytelling formats, and live stream visual production that encouraged active audience sharing, turning followers into an engaged supportive community.",
    documentation: "Explore the reels, feeds, and live stream assets produced for Women Moment across TikTok (@women.moment_) and Instagram (@womenmoment.id).",
    processImages: [
      { title: "Visual Storytelling & Narrative Pacing Strategy", image: "assets/images/project-womenmoment/womenmoment-design-process-1.png" },
      { title: "Typography, Warm Color Palettes & Feed Templates", image: "assets/images/project-womenmoment/womenmoment-design-process-2.png" },
    ],
    documentationImages: [
      { 
        title: "Women Moment Reels 1 — Selasar Cerita & Self Reflection", 
        video: "assets/videos/project-womenmoment/womenmoment-reels-1.mp4",
        type: "video"
      },
      { 
        title: "Women Moment Reels 2 — Emotional Narrative & Voiceover", 
        video: "assets/videos/project-womenmoment/womenmoment-reels-2.mp4",
        type: "video"
      },
      { 
        title: "Women Moment Reels 3 — Community Sharing & Quotes", 
        video: "assets/videos/project-womenmoment/womenmoment-reels-3.mp4",
        type: "video"
      },
      { 
        title: "Women Moment Reels 4 — Warm Lifestyle & Thought Pieces", 
        video: "assets/videos/project-womenmoment/womenmoment-reels-4.mp4",
        type: "video"
      },
      { 
        title: "TikTok Live Streaming Production — Selasar Cerita", 
        image: "assets/images/project-womenmoment/womenmomnet-livestream-1.png",
        type: "image"
      },
      { 
        title: "Social Media Carousel & Feed Design 1", 
        image: "assets/images/project-womenmoment/womenmoment-feed-1.png",
        type: "image"
      },
      { 
        title: "Social Media Carousel & Feed Design 2", 
        image: "assets/images/project-womenmoment/womenmoment-feed-2.png",
        type: "image"
      },
    ],
    socialLinks: [
      { name: "TikTok @women.moment_", url: "https://www.tiktok.com/@women.moment_", icon: "ri-tiktok-line" },
      { name: "Instagram @womenmoment.id", url: "https://www.instagram.com/womenmoment.id/", icon: "ri-instagram-line" }
    ],
    externalLink: "https://www.tiktok.com/@women.moment_",
  },
  {
    id: "rynest-technology",
    title: "Rynest Technology Indomedia",
    subtitle: "Video Editing, Motion Graphics & Social Media Design",
    description: "PT Rynest Technology Indomedia is an innovative enterprise software and IT solutions company. This project encompasses end-to-end creative digital media production, including dynamic short-form video narratives (Instagram Reels & TikTok), kinetic typography, feature promotional assets, and tech-branded social media templates.",
    image: "assets/images/project-rynest/rynest-hero.png",
    placeholderColor: "#0A3D62",
    category: "Video Editing & Social Media",
    documentationHeading: "Project Showcase",
    designProcess: "The creative process started with strategic content planning based on modern internet culture, tech-audience trends, and software highlights. High-energy video storyboards, fast-paced transitions, custom sound design, color grading, and motion graphics were executed using Adobe Premiere Pro, After Effects, and CapCut.",
    challenge: "Translating technical IT concepts, software capabilities, and office team dynamics into engaging, highly relatable visual stories that hook viewers within the first 3 seconds and maintain retention across fast-scrolling social feeds.",
    solution: "Developed a cohesive social media design system and high-retention short-form video style featuring bold kinetic text overlays, snappy pacing, tech-aesthetic neon gradients, and branded graphic carousels tailored for Instagram Reels and TikTok.",
    documentation: "Explore the live social media content, viral reels, and creative assets produced for Rynest Technology Indomedia across official channels.",
    processImages: [
      { title: "Video Storyboarding & Motion Hook Strategy", image: "assets/images/project-rynest/rynest-design-process-1.png" },
      { title: "Visual Asset Production & Tech Guidelines", image: "assets/images/project-rynest/rynest-design-process-2.png" },
    ],
    documentationImages: [
      { 
        title: "Rynest Tech Reels 1 — IT & Workplace Dynamics", 
        video: "assets/videos/project-rynest/rynest-reels-1.mp4",
        type: "video"
      },
      { 
        title: "Rynest Tech Reels 2 — Software Solutions & Culture", 
        video: "assets/videos/project-rynest/rynest-reels-2.mp4",
        type: "video"
      },
      { 
        title: "Rynest Tech Reels 3 — High-Retention Motion & Hooks", 
        video: "assets/videos/project-rynest/rynest-reels-3.mp4",
        type: "video"
      },
      { 
        title: "Rynest Tech Reels 4 — Fast-Paced Tech Highlights", 
        video: "assets/videos/project-rynest/rynest-reels-4.mp4",
        type: "video"
      },
      { 
        title: "Rynest Social Media Feed Design 1", 
        image: "assets/images/project-rynest/rynest-feed-1.png",
        type: "image"
      },
      { 
        title: "Rynest Social Media Feed Design 2", 
        image: "assets/images/project-rynest/rynest-feed-2.png",
        type: "image"
      },
    ],
    socialLinks: [
      { name: "Instagram @rynest.it", url: "https://www.instagram.com/rynest.it/", icon: "ri-instagram-line" },
      { name: "TikTok @rynest_tec", url: "https://www.tiktok.com/@rynest_tec", icon: "ri-tiktok-line" }
    ],
    externalLink: "https://www.instagram.com/rynest.it/",
  },
  {
    id: "onstudio-kreatif-digital",
    title: "Onstudio Kreatif Digital",
    subtitle: "Brand Campaign & Creative Direction",
    description: "Creative Lead work for PT Onstudio Kreatif Digital — overseeing visual direction, brand campaigns, and design production for notable clients including Sinar Mas, Asteka, Binkei, TOKI, Amoora, and Universitas Terbuka.",
    image: "",
    placeholderColor: "#6C3483",
    category: "Creative Direction",
    designProcess: "Coming soon — project details are being prepared.",
    challenge: "Coming soon.",
    solution: "Coming soon.",
    documentation: "Coming soon.",
    processImages: [],
    documentationImages: [],
  },
  {
    id: "dekalcer-design-exhibition",
    title: "Dekalcer UPJ — Design Space Exhibition 2023",
    subtitle: "Exhibition Identity, Space Design & Creative Campaign",
    description: "Dekalcer is an annual flagship culture and design exhibition organized by Visual Communication Design (DKV) Universitas Pembangunan Jaya (UPJ). Serving as a Design Team Specialist, the role focused on developing the visual identity system, creative exhibition posters, environmental signage, and digital promotional campaigns that celebrated contemporary youth culture and artistic exploration.",
    image: "assets/images/project-dekalcer/hero-decalcer.png",
    placeholderColor: "#1A5276",
    category: "Exhibition & Event Design",
    documentationHeading: "Exhibition Showcase & Documentation",
    designProcess: "The design exploration centered around blending youth pop-culture aesthetics with dynamic spatial storytelling. We developed an expressive visual branding system utilizing high-contrast typography, gritty cultural motifs, and versatile color palettes. The identity was systematically applied across social media announcements, physical exhibition collaterals, directional signages, and digital teasers to build anticipation and guide visitors through the multi-zone gallery experience.",
    challenge: "Creating an exhibition identity that felt raw, contemporary, and culturally resonant with Gen-Z art students and the broader creative public, while ensuring practical legibility and spatial cohesion across various physical formats and digital channels.",
    solution: "Implemented an agile, multi-asset design system featuring distinctive poster variants, bold graphic compositions, and high-energy motion recaps. The campaign successfully unified the physical gallery walkthrough with an engaging social media presence, driving record visitor turnout and widespread creative recognition across the design community.",
    documentation: "Explore the official promotional posters, event recaps, and video documentation from the Dekalcer 2023 Exhibition.",
    processImages: [],
    documentationImages: [
      { 
        title: "Dekalcer 2023 — Event Recap & Atmosphere Documentation", 
        video: "assets/videos/project-dekalcer/dekalcer-rekap-documentation.mp4",
        type: "video"
      },
      { 
        title: "Dekalcer 2023 — Official Exhibition Poster (Artwork 1)", 
        image: "assets/images/project-dekalcer/dekalcer-poster-1.png",
        type: "image"
      },
      { 
        title: "Dekalcer 2023 — Official Exhibition Poster (Artwork 2)", 
        image: "assets/images/project-dekalcer/dekalcer-poster-2.png",
        type: "image"
      },
      { 
        title: "Dekalcer 2023 — Official Exhibition Poster (Artwork 3)", 
        image: "assets/images/project-dekalcer/dekalcer-poster-3.png",
        type: "image"
      },
    ],
    socialLinks: [
      { name: "Behance Case Study", url: "https://www.behance.net/gallery/207939973/DEKALCER-2023-Culture-Exhibition", icon: "ri-behance-line" },
      { name: "Instagram @dekalcerupj", url: "https://www.instagram.com/dekalcerupj/", icon: "ri-instagram-line" }
    ],
    externalLink: "https://www.behance.net/gallery/207939973/DEKALCER-2023-Culture-Exhibition",
  },
  {
    id: "asteka-insurance",
    title: "ASTEKA — Asuransi Tenaga Kerja Asing",
    subtitle: "Social Media Design & Brand Visual Content",
    description: "ASTEKA is an online insurance platform designed to support foreign workers (TKA) in Indonesia with short-term coverage programs. This project involved creating engaging social media content, branded visual assets, promotional graphics, and digital campaign materials across Instagram and TikTok to build brand awareness and trust within the insurance & HR industry.",
    image: "assets/images/project-asteka/hero-asteka.png",
    placeholderColor: "#1B4F72",
    category: "Social Media & Brand Design",
    documentationHeading: "Project Showcase",
    designProcess: "The creative process began with researching ASTEKA's brand identity, target audience (HR managers, employers of foreign workers), and competitor visual benchmarks. A clean, professional, and trustworthy visual language was developed using ASTEKA's brand colors, featuring clear infographics, benefit highlights, and regulatory information presented in scroll-stopping social formats.",
    challenge: "Communicating complex insurance regulations and foreign worker policies in a visually engaging, easy-to-digest format that appeals to both corporate HR decision-makers and individual foreign workers across diverse cultural backgrounds.",
    solution: "Designed a modular social media template system with consistent brand elements — featuring bilingual content layouts (Indonesian & English), infographic carousel posts, short-form video thumbnails, and story highlight covers that simplify insurance information while maintaining ASTEKA's professional credibility.",
    documentation: "Explore the live social media content, video reels, and creative assets produced for ASTEKA across official channels.",
    processImages: [],
    documentationImages: [
      { 
        title: "ASTEKA Reels 1 — Layanan & Perlindungan TKA", 
        video: "assets/videos/project-asteka/asteka-reels-1.mp4",
        type: "video"
      },
      { 
        title: "ASTEKA Reels 2 — Edukasi & Regulasi Program Asuransi", 
        video: "assets/videos/project-asteka/asteka-reels-2.mp4",
        type: "video"
      },
      { 
        title: "ASTEKA Reels 3 — Panduan & Solusi HR Perusahaan", 
        video: "assets/videos/project-asteka/asteka-reels-3.mp4",
        type: "video"
      },
      { 
        title: "ASTEKA Reels 4 — Fitur & Kemudahan Platform Digital", 
        video: "assets/videos/project-asteka/asteka-reels-4.mp4",
        type: "video"
      },
      { 
        title: "ASTEKA Feed & Carousel Design 1", 
        image: "assets/images/project-asteka/asteka-desan-1.jpg",
        type: "image"
      },
      { 
        title: "ASTEKA Feed & Carousel Design 2", 
        image: "assets/images/project-asteka/asteka-desain 2.jpg",
        type: "image"
      },
      { 
        title: "ASTEKA Feed & Carousel Design 3", 
        image: "assets/images/project-asteka/asteka-desain 3.jpg",
        type: "image"
      },
    ],
    socialLinks: [
      { name: "Instagram @asteka_net", url: "https://www.instagram.com/asteka_net/", icon: "ri-instagram-line" },
      { name: "TikTok @asteka.net", url: "https://www.tiktok.com/@asteka.net", icon: "ri-tiktok-line" }
    ],
    externalLink: "https://www.instagram.com/asteka_net/",
  },
  {
    id: "typecaster-meme-advertising",
    title: "TYPECASTER — A Meme Driven Advertising Campaign",
    subtitle: "Undergraduate Thesis Project · Digital Advertising & Meme Marketing",
    description: "An independent undergraduate thesis project (Tugas Akhir DKV UPJ) focused on designing a digital advertising campaign for 'TypeCaster' — an innovative indie typing-spellcaster PC game. Facing low organic brand awareness despite its unique gameplay mechanics, the project designed a dedicated supporting social media presence (Instagram & TikTok) driven by meme marketing, relatable gaming culture, and contextual short-form video hooks to capture organic gaming audiences.",
    image: "assets/images/project-typecaster-campaign/hero-typecaster-campaign.png",
    placeholderColor: "#8E44AD",
    category: "Digital Advertising & Campaign",
    documentationHeading: "Campaign Showcase & Academic Research",
    designProcess: "The project employed a research-based creative methodology combining qualitative audience analysis of indie game communities on Reddit, TikTok, and Instagram with viral meme marketing frameworks. Key deliverables included designing a high-relatability meme content matrix, humorous gameplay skits, typography-driven social banners, and kinetic short-form videos tailored for the algorithmic feeds of Gen-Z PC gamers.",
    challenge: "Promoting an obscure indie game with zero initial marketing budget, breaking through oversaturated gaming social feeds, and converting passive meme-scrollers into engaged players without sounding like a corporate advertisement.",
    solution: "Leveraged native internet culture and self-deprecating gaming humor through a dedicated supporting campaign account. By reframing fast typing frustrations and wizard spellcasting into shareable memes, the campaign generated authentic engagement, increased viral impressions, and successfully funneled curious players toward the game's official channels.",
    documentation: "Explore the social media campaign feeds, short-form video reels, and the official university thesis repository documentation for TypeCaster.",
    processImages: [
      { title: "Design Process 1", image: "assets/images/project-typecaster-campaign/typecaster-campaign-design-process-1.png" },
      { title: "Design Process 2", image: "assets/images/project-typecaster-campaign/typecaster-campaign-design-process-2.png" },
    ],
    documentationImages: [
      { title: "Campaign Deck", image: "assets/images/project-typecaster-campaign/typecaster-campaign-deck.png" },
      { title: "Feed Design 1", image: "assets/images/project-typecaster-campaign/typecaster-campaign-feed-1.png" },
      { title: "Feed Design 2", image: "assets/images/project-typecaster-campaign/typecaster-campaign-feed-2.png" },
      { title: "Reels 1", video: "assets/videos/project-typecaster-campaign/typecaster-campaign-reels-1.mp4", type: "video" },
      { title: "Reels 2", video: "assets/videos/project-typecaster-campaign/typecaster-campaign-reels-2.mp4", type: "video" },
      { title: "Reels 3", video: "assets/videos/project-typecaster-campaign/typecaster-campaign-reels-3.mp4", type: "video" },
      { title: "Reels 4", video: "assets/videos/project-typecaster-campaign/typecaster-campaign-reels-4.mp4", type: "video" },
    ],
    socialLinks: [
      { name: "Repository UPJ (Thesis)", url: "https://eprints.upj.ac.id/id/eprint/14255/", icon: "ri-book-open-line" },
      { name: "Campaign Deck", url: "https://www.behance.net/gallery/255139809/TypeCaster-Social-Media-Campaign-Deck", icon: "ri-behance-line" },
      { name: "Instagram @typecaster_ta", url: "https://www.instagram.com/typecaster_ta/", icon: "ri-instagram-line" },
      { name: "TikTok @typecaster_ta", url: "https://www.tiktok.com/@typecaster_ta", icon: "ri-tiktok-line" }
    ],
    externalLink: "https://eprints.upj.ac.id/id/eprint/14255/",
  },
];

// ============================================================
// HOME SERVICES — Interactive Slide Rows for Homepage
// ============================================================
const HOME_SERVICES = [
  {
    num: "01",
    title: "Branding & Visual Identity",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
    link: "services.html#brand-identity"
  },
  {
    num: "02",
    title: "Art Direction & Production",
    image: "https://picsum.photos/seed/art-direction/600/400",
    link: "services.html#art-direction"
  },
  {
    num: "03",
    title: "Social Media Graphics",
    image: "https://picsum.photos/seed/social-media/600/400",
    link: "services.html#social-media"
  },
  {
    num: "04",
    title: "Digital Illustration",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    link: "services.html#digital-illustration"
  },
  {
    num: "05",
    title: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    link: "services.html#uiux-design"
  },
  {
    num: "06",
    title: "Print & Merchs",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    link: "services.html#print-merchs"
  }
];

// ============================================================
// SERVICES — The 6 service offerings with pricing (services.html)
// ============================================================
const SERVICE_OFFERINGS = [
  {
    id: "brand-identity",
    title: "Branding & Visual Identity",
    price: "Rp 3.500.000",
    description: "Creating comprehensive brand identity systems, logo marks, typography standards, and cohesive visual guidelines.",
    bonuses: ["Complete brand guidelines PDF", "Full vector master files (AI, SVG, PDF)", "Stationery & social media starter kit"],
    ctaText: "Start Now",
    icon: "ri-palette-line",
  },
  {
    id: "art-direction",
    title: "Art Direction & Production",
    price: "Rp 4.500.000",
    description: "Guiding end-to-end creative direction, video narrative pacing, live stream production, and multimedia visual standards.",
    bonuses: ["Storyboarding & moodboards", "Production supervision & styling", "Multi-platform export deliverables"],
    ctaText: "Start Now",
    icon: "ri-clapperboard-line",
  },
  {
    id: "social-media",
    title: "Social Media Graphics",
    price: "Rp 1.250.000",
    description: "Developing high-retention feeds, viral short-form video assets, motion reels, and carousel graphics tailored for modern algorithms.",
    bonuses: ["10 editable carousel/story templates", "Custom highlight icons & banners", "Engagement & hook strategy tips"],
    ctaText: "Start Now",
    icon: "ri-smartphone-line",
  },
  {
    id: "digital-illustration",
    title: "Digital Illustration",
    price: "Rp 1.500.000",
    description: "Crafting bespoke digital illustrations, cultural ornament motifs, custom character artwork, and creative digital imaging.",
    bonuses: ["High-res 300+ DPI print files", "Transparent PNG & vector SVG assets", "Commercial use license included"],
    ctaText: "Start Now",
    icon: "ri-brush-line",
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    price: "Rp 5.000.000",
    description: "Designing user-centric digital interfaces, web design systems, interactive Figma prototypes, and responsive digital products.",
    bonuses: ["Interactive Figma prototype", "Responsive mobile & desktop design", "Component design tokens & UI kit"],
    ctaText: "Start Now",
    icon: "ri-layout-line",
  },
  {
    id: "print-merchs",
    title: "Print & Merchs",
    price: "Rp 1.800.000",
    description: "Producing print-ready editorial layouts, event stage ambiance, brand merchandise, packaging, and Graphic Standard Manual books.",
    bonuses: ["Print-ready CMYK files with bleed", "Vendor-ready production specs", "3D photorealistic mockups"],
    ctaText: "Start Now",
    icon: "ri-printer-line",
  },
];

// ============================================================
// GALLERY ITEMS — Another Gallery: creative side projects
// Add new gallery items here!
// ============================================================
const GALLERY_ITEMS = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Graphic Design",
    tools: "Figma, Adobe Illustrator, Adobe Photoshop",
    image: "assets/images/gallery/graphic-design/banner-potrait-onstudio.png",
    placeholderColor: "#FF6B6B",
    description: "A collection of brand identity designs, marketing collaterals, promotional posters, apparel merchandise, and digital layouts crafted for various creative projects.",
    photos: [
      { title: "Banner Portrait — ON Studio", image: "assets/images/gallery/graphic-design/banner-potrait-onstudio.png" },
      { title: "Cover Book Graduation SMKN 4", image: "assets/images/gallery/graphic-design/cover-book-graduation-smkn4.png" },
      { title: "Live Painting Poster Digital A3", image: "assets/images/gallery/graphic-design/poster-digital-a3-onstudio.png" },
      { title: "Dekalcer UPJ Poster 1", image: "assets/images/gallery/graphic-design/dekalcer-poster-1.png" },
      { title: "Dekalcer UPJ Poster 2", image: "assets/images/gallery/graphic-design/dekalcer-poster-2.png" },
      { title: "Dekalcer UPJ Poster 3", image: "assets/images/gallery/graphic-design/dekalcer-poster-3.png" },
      { title: "Destruction Art Joker", image: "assets/images/gallery/graphic-design/destruction-art-joker.png" },
      { title: "Fishing Old — Vintage Poster", image: "assets/images/gallery/graphic-design/fishing-old.png" },
      { title: "Expression of the Beauty of Bali", image: "assets/images/gallery/graphic-design/poster-expression-of-the-beauty-of-bali.png" },
      { title: "Design T-Shirt Merchandise", image: "assets/images/gallery/graphic-design/design-tshirt.png" },
      { title: "Mini X-Banner — ON Studio", image: "assets/images/gallery/graphic-design/mini-xbanner-onstudio.png" },
      { title: "Name Card — ON Studio", image: "assets/images/gallery/graphic-design/name-card-onstudio.png" },
      { title: "Lanyard Design Collateral", image: "assets/images/gallery/graphic-design/lanyard-design.png" },
      { title: "ID Card System Design", image: "assets/images/gallery/graphic-design/id-card-design.png" },
      { title: "Kopi Kenangan Concept Design", image: "assets/images/gallery/graphic-design/kopi-kenangan-concept-design.png" },
      { title: "Warung Almatiinu Tingting Kacang", image: "assets/images/gallery/graphic-design/warung-almatiinu-tingting-kacang.png" },
      { title: "Invitation Baby Shower", image: "assets/images/gallery/graphic-design/invitation-baby-shower.png" },
      { title: "Social Media Carousel Post", image: "assets/images/gallery/graphic-design/social-media-carousel-1.png" },
      { title: "Typography Freedom", image: "assets/images/gallery/graphic-design/typography-freedom.png" },
    ],
  },
  {
    id: "illustration",
    title: "Illustration",
    category: "Illustration",
    tools: "Procreate, Adobe Photoshop, Clip Studio Paint",
    image: "assets/images/gallery/illustration/Mask group.png",
    placeholderColor: "#F0A500",
    description: "A series of digital illustrations, character designs, cultural mask artworks, book covers, and visual storytelling explorations.",
    photos: [
      { title: "Cultural Mask Artwork 1", image: "assets/images/gallery/illustration/Mask group.png" },
      { title: "Cultural Mask Artwork 2", image: "assets/images/gallery/illustration/Mask group-1.png" },
      { title: "Beauty of Bali — A3 Illustration", image: "assets/images/gallery/illustration/bali-a3.png" },
      { title: "Book Cover Illustration", image: "assets/images/gallery/illustration/cover-book-1.png" },
      { title: "Character & Outfit Concept", image: "assets/images/gallery/illustration/Frame 1171275602.png" },
      { title: "Digital Illustration 01", image: "assets/images/gallery/illustration/illustration-1.png" },
      { title: "Digital Illustration 02", image: "assets/images/gallery/illustration/illustration-2.png" },
      { title: "Digital Illustration 03", image: "assets/images/gallery/illustration/illustration-3.png" },
      { title: "Digital Illustration 04", image: "assets/images/gallery/illustration/illustration-4.png" },
      { title: "Digital Illustration 05", image: "assets/images/gallery/illustration/illustration-5.png" },
      { title: "Digital Illustration 06", image: "assets/images/gallery/illustration/illustration-6.png" },
      { title: "Digital Illustration 07", image: "assets/images/gallery/illustration/illustration-7.png" },
      { title: "Digital Illustration 08", image: "assets/images/gallery/illustration/illustration-8.png" },
      { title: "Digital Illustration 09", image: "assets/images/gallery/illustration/illustration-9.png" },
      { title: "Digital Illustration 10", image: "assets/images/gallery/illustration/illustration-10.png" },
      { title: "Digital Illustration 11", image: "assets/images/gallery/illustration/illustration-11.png" },
      { title: "Digital Illustration 12", image: "assets/images/gallery/illustration/illustration-12.png" },
    ],
  },
  {
    id: "logo-design",
    title: "Logo Design",
    category: "Logo Design",
    tools: "Adobe Illustrator, Figma",
    image: "assets/images/gallery/logo-design/muzaki-logo.png",
    placeholderColor: "#A29BFE",
    description: "Custom logo marks, brand symbols, and conceptual identities for organizations, events, and commercial brands.",
    photos: [
      { title: "Muzaki Monogram Logo", image: "assets/images/gallery/logo-design/muzaki-logo.png" },
      { title: "HUT Tangsel 15th Concept Logo", image: "assets/images/gallery/logo-design/hut-tangsel-15-concept-logo.png" },
      { title: "Kementerian Kebudayaan Concept Logo", image: "assets/images/gallery/logo-design/kementerian-kebudayaan-concept-logo.png" },
      { title: "Kementerian Koperasi Concept Logo", image: "assets/images/gallery/logo-design/kementerian-koperasi-concept-logo.png" },
      { title: "La Delis Batter Logo", image: "assets/images/gallery/logo-design/la-delis-batter-logo.png" },
      { title: "Syne Telkom Indonesia Concept Logo", image: "assets/images/gallery/logo-design/syne-telkom-indonesia-concept-logo.png" },
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    category: "UI/UX",
    tools: "Figma, Framer, Adobe XD",
    image: "assets/images/gallery/ui-ux/rynest-hero.png",
    placeholderColor: "#6C5CE7",
    description: "User interface and experience design explorations, mobile applications, interactive web designs, design systems, and wireframing.",
    photos: [
      { title: "Rynest Tech Web & Mobile UI", image: "assets/images/gallery/ui-ux/rynest-hero.png" },
      { title: "Mobile App Interface Exploration", image: "assets/images/gallery/ui-ux/hero-phone.png" },
      { title: "UI Design System & Process", image: "assets/images/gallery/ui-ux/ui-design-process-1.png" },
      { title: "Responsive Layout Architecture", image: "assets/images/gallery/ui-ux/ui-design-process-2.png" },
      { title: "Dashboard & Interaction Design", image: "assets/images/gallery/ui-ux/ui-feed-1.png" },
      { title: "App Prototype & Screens Flow", image: "assets/images/gallery/ui-ux/ui-feed-2.png" },
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    category: "Video Editing",
    tools: "CapCut, Adobe Premiere Pro, Adobe After Effects",
    image: "",
    placeholderColor: "#FF4757",
    description: "Creative video editing, motion graphics, short-form content creation, promotional videos, and dynamic visual storytelling.",
    photos: [],
  },
];

// ============================================================
// STACKS — Tools & technologies
// ============================================================
const STACKS = [
  { name: "Framer", description: "Website builder", icon: "ri-layout-masonry-line" },
  { name: "Figma", description: "Graphics design", icon: "ri-pencil-ruler-line" },
  { name: "Zapier", description: "Automation", icon: "ri-flashlight-line" },
  { name: "Lemon Squeezy", description: "Payment", icon: "ri-money-dollar-circle-line" },
  { name: "Contra", description: "Freelance jobs", icon: "ri-briefcase-line" },
];

// ============================================================
// TESTIMONIALS
// ============================================================
const TESTIMONIALS = [
  {
    quote: "It is highly scalable! I essentially have a completely functional and adjustable design system today.",
    author: "Dean Kresh",
    role: "Manager",
  },
];

// ============================================================
// ABOUT ME PAGE DATA — Easily editable!
// ============================================================
const ABOUT_DATA = {
  aboutStory: [
    "A Creative Designer with a strong foundation in visual communication, dedicated to crafting impactful digital experiences. Specializing in the intersection of aesthetic design and strategic content creation, the professional focus ranges from conceptualizing promotional campaigns to developing engaging video narratives.",
    "Driven by modern internet culture and dynamic digital engagement, the ultimate goal is to transform complex ideas into compelling, relatable visual solutions for contemporary audiences. Every project is approached with passion, strategic thinking, and meticulous attention to detail."
  ],
  // Skills & Tools (Pills & Logo Boxes format)
  skillsList: [
    "Graphic Design",
    "Brand & Identity",
    "Digital Illustration",
    "Video Editing",
    "Art Direction",
    "UI/UX Design",
    "Web Design",
    "Campaign & Promotion",
    "Typography",
    "Digital Imaging",
    "Storyboarding",
    "Content Creation",
    "AI-Assisted Design",
  ],
  toolsList: [
    { name: "Adobe", type: "adobe", subbadges: ["Ai", "Ps", "Ae", "Pr", "Id"] },
    { name: "Figma", type: "figma" },
    { name: "Framer", type: "framer" },
    { name: "Clip Studio Paint", type: "csp" },
    { name: "CapCut", type: "capcut" },
    { name: "Canva", type: "canva" },
    { name: "ChatGPT", type: "chatgpt" },
    { name: "Gemini", type: "gemini" },
    { name: "Magnific AI", type: "magnific" },
    { name: "Trello", type: "trello" },
    { name: "Google Workspace", type: "google" },
    { name: "Microsoft Office", type: "office" },
  ],
  experiences: [
    {
      role: "Creative Lead",
      company: "PT Onstudio Kreatif Digital",
      period: "2024 — Present",
      description: "Directing creative vision, brand identity systems, digital illustration, and multimedia campaigns for prominent clients including Sinar Mas, Rynest Tech, Asteka, and Binkei. Managing design workflows and cross-functional creative collaboration.",
      tags: ["Creative Direction", "Brand Strategy", "Art Direction", "Team Leadership"]
    },
    {
      role: "Graphic & Identity Designer",
      company: "Dies Natalis UPJ 14th & 11th Graduation",
      period: "2024 — 2025",
      description: "Formulated the comprehensive cultural visual identity, stage ambiance, and traditional ornament system (Kuntul Perak & Talawang) for Universitas Pembangunan Jaya's 14th Dies Natalis & 11th Graduation Ceremony.",
      tags: ["Identity Design", "Cultural Ornaments", "Event Branding", "Print & Stage"]
    },
    {
      role: "Design Team Specialist",
      company: "Dekalcer UPJ (Design Space Exhibition)",
      period: "Feb 2023 — Oct 2023",
      description: "Contributed to graphic design, ideas development, and visual assets production for the Design Space Exhibition Dekalcer 2023 (The Harmony of Bali), supporting exhibition identity and digital promotional collaterals.",
      tags: ["Graphic Design", "Ideas Development", "Exhibition Design", "Visual Assets"]
    },
    {
      role: "Freelance Creative Designer & Video Editor",
      company: "Self-Employed (Zulyanify)",
      period: "2022 — Present",
      description: "Delivering bespoke branding, viral short-form video editing (Reels & TikTok), motion graphics, and digital marketing assets for independent creative projects and businesses.",
      tags: ["Video Editing", "Motion Graphics", "Branding", "Digital Illustration"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Visual Communication Design (DKV / VCD)",
      institution: "Universitas Pembangunan Jaya (UPJ)",
      period: "2022 — Present",
      description: "Focusing on brand identity, digital media innovation, visual semiotics, motion graphics, and interactive media design. Active in creative entrepreneurship, academic research, and campus-wide visual production."
    }
  ],
  awards: [
    {
      title: "P2MW Entrepreneurship Grant Awardee",
      issuer: "Kemendikbudristek / Directorate of Higher Education",
      year: "2025",
      description: "Selected and funded for outstanding creative business innovation and digital design studio development (Onstudio)."
    },
    {
      title: "Best Cultural Visual Identity Integration",
      issuer: "Universitas Pembangunan Jaya",
      year: "2025",
      description: "Commended for the exemplary fusion of Indonesian cultural motifs with contemporary event branding for UPJ 2025 Graduation Ceremony."
    },
    {
      title: "Published Academic Contributor in Visual Semiotics",
      issuer: "Academic Research & Cultural Media",
      year: "2025",
      description: "Recognized for research contribution and published scholarly work analyzing visual communication, semiotics, and community identity."
    }
  ]
};

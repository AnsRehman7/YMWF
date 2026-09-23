// Central content store for the YMWF site.
// Everything the pages render comes from here, so the team can update copy,
// numbers and photo assignments without touching component code.

// Photographs are served from public/img/ as WebP in two sizes, generated from
// the raw archive in public/images/ by `npm run images`.
const img = (n) => `/img/IMG-20260829-WA${n}.webp`;

/** Small (720px) variant of any image path, for grids and cards. */
export const thumbOf = (src) => src.replace(/\.webp$/, '-sm.webp');

export const org = {
  name: "Young Merit Welfare Foundation",
  short: "YMWF",
  motto: "Ehsas",
  tagline: "Youth serving humanity, with dignity at the centre.",
  founded: 2017,
  positioning:
    "A non-political, non-religious, non-profit organisation committed to the service of humanity.",
  urduMotto: "نوجوانوں کے ہاتھ میں قلم، دل میں خدمت اور عزم میں تبدیلی",
  urduMottoEn:
    "A pen in the hands of youth, service in the heart, and change in resolve.",
  address: "Lower Mall, Near GCU, Lahore",
  phones: [
    { label: "General & Convention queries", value: "0303-2344448" },
    { label: "Rana Ahsan — President", value: "0303-5078837" },
  ],
  bloodDeskPhone: "0303-2344448",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/YMWF.org.pk" },
    { label: "Instagram", href: "https://www.instagram.com/ymwfoundation" },
    {
      label: "LinkedIn",
      href: "https://pk.linkedin.com/company/young-merit-welfare-foundation",
    },
    { label: "TikTok", href: "https://www.tiktok.com/@ymwfoundation" },
  ],
  handle: "@ymwfoundation",
};

// ---------------------------------------------------------------------------
// Impact figures. These are placeholders drawn from what the photo archive
// shows — replace each `value` with an audited number before launch.
// ---------------------------------------------------------------------------
export const impact = {
  year: 2025,
  needsVerification: true,
  stats: [
    { value: 13, suffix: "", label: "Chapters established or forming" },
    { value: 9, suffix: "", label: "University chapters across Punjab" },
    { value: 6, suffix: "+", label: "Partner organisations and institutions" },
    { value: 7, suffix: "", label: "Programme areas running year-round" },
  ],
};

// ---------------------------------------------------------------------------
// The seven objectives, grouped into four programme areas.
// ---------------------------------------------------------------------------
export const programs = [
  {
    slug: "education",
    title: "Literary Wonder Club",
    kicker: "Objective 1 & 2",
    summary:
      "Fee assistance, learning materials and study circles so that money is never the reason a capable student stops.",
    accent: "navy",
    icon: "book",
    hero: img("0110"),
    points: [
      {
        title: "Fee assistance",
        body: "Full or partial school, college and university fees for students from low-income households who have the merit but not the means.",
      },
      {
        title: "Books, stationery and uniforms",
        body: "School bags, shoes, stationery kits and Eid clothes, distributed with our partner Waduha Welfare Organization so that children start the year properly equipped.",
      },
      {
        title: "Study circles",
        body: "Free, open peer-learning circles — often held in public parks — where students teach and revise together instead of paying for academies.",
      },
     
    ],
    gallery: [img("0110"), img("0106"), img("0090"), img("0076")],
    asks: [
      "A books and stationery kit for one student",
      "A month of school fees for a worker's child",
      "A study circle running for a month",
    ],
  },
  {
    slug: "health-and-wellbeing",
    title: "Health & Wellbeing",
    kicker: "Objective 3 & 4",
    summary:
      "Blood donation drives, free medical camps, and — rare in this sector — free psychological and career counselling.",
    accent: "coral",
    icon: "heart",
    hero: img("0113"),
    points: [
      {
        title: "Blood Donation Drives",
        body: "A standing donor register and regular drives, marked each year on World Blood Donor Day, 14 June. Our own team members are among the committed donors.",
      },
      {
        title: "Psychological Counselling",
        body: "Regular, confidential counselling sessions covering stress, anxiety, depression and trauma. Almost no welfare foundation in Pakistan offers this — we think it matters most.",
      },
      {
        title: "Career Counselling",
        body: "Guidance sessions helping students and young people make informed academic and professional choices, rather than guessing at them.",
      },
      {
        title: "Free Medical Camps and Dispensary",
        body: "Free screening camps run with diagnostic partners, and a free dispensary serving the Shahdara community.",
      },
    ],
    gallery: [img("0113"), img("0114"), img("0115"), img("0116")],
    asks: [
      "One counselling session for a young person",
      "Supplies for one community medical camp",
    ],
    urdu: {
      heading: "خون کا عطیہ",
      lines: [
        "خون کا عطیہ ایک عظیم انسانی خدمت ہے، جو کسی کی زندگی بچانے کا ذریعہ بنتا ہے۔",
        "ایک خون کا قطرہ، کئی زندگیوں کی امید۔",
      ],
      translation:
        "Donating blood is a great act of human service — it becomes the means of saving a life. One drop of blood, hope for many lives.",
    },
  },
  {
    slug: "youth-and-innovation",
    title: "Youth & Innovation",
    kicker: "Objective 5 & 7",
    summary:
      "The Fellowship Programme, leadership training, workshops and mentorship that turn students into organisers.",
    accent: "sky",
    icon: "spark",
    hero: img("0103"),
    points: [
      {
        title: "The Fellowship Programme",
        body: "Our flagship: a structured programme for college and university students built on five pillars — Leadership, Communication, Technology, Innovation and Growth.",
      },
      {
        title: "Leadership and skill-building workshops",
        body: "Practical training in public speaking, organising, and running a project end to end, so volunteers graduate into people who can lead their own chapters.",
      },
      {
        title: "Science, research and critical thinking",
        body: "Workshops, science fairs and mentorship that encourage young people to investigate, build and question rather than memorise.",
      },
      {
        title: "Volunteering that counts",
        body: "Every drive, camp and visit is run by student volunteers. Civic responsibility is taught by doing it, not by lecturing about it.",
      },
    ],
    gallery: [img("0103"), img("0077"), img("0112"), img("0106")],
    asks: [
      "Sponsor one fellow through the programme",
      "Fund a leadership workshop for a chapter",
    ],
  },
  {
    slug: "community-and-inclusion",
    title: "Community & Inclusion",
    kicker: "Objective 2 & 6",
    summary:
      "Disability rights, support for working-class families, elders and orphans, and campaigns on the issues people would rather not discuss.",
    accent: "amber",
    icon: "hands",
    hero: img("0083"),
    points: [
      {
        title: "Disability rights and dignity",
        body: "Our largest public campaign. We convene stakeholders, distribute wheelchairs and white canes, and press the case for equality, access and inclusion — a cause our founder carries personally.",
      },
      {
        title: "Support for working-class families",
        body: "Financial and material assistance for gardeners, waiters and other low-income workers, including ration drives and winter blankets for people sleeping rough.",
      },
      {
        title: "Elders and orphans",
        body: "Regular visits, meals and company at old age homes and orphanages across Lahore — because isolation is its own kind of poverty.",
      },
      {
        title: "Awareness campaigns",
        body: "Public campaigns on literacy, gender equality and environmental responsibility, including park clean-up and clean water drives run by our volunteers.",
      },
    ],
    gallery: [img("0083"), img("0079"), img("0087"), img("0102")],
    asks: [
      "A wheelchair for someone who needs one",
      "A winter blanket for someone sleeping rough",
      "A month's ration for one family",
    ],
  },
];

// ---------------------------------------------------------------------------
// Events, newest first. `status` drives the badge in the UI.
// ---------------------------------------------------------------------------
export const events = [
  {
    slug: "disability-rights-dignity-convention-2025",
    title: "Disability Rights & Dignity Convention 2025",
    date: "2025-12-05",
    dateLabel: "5 December 2025 · Friday, 2:00–5:00 pm",
    venue: "Javed Iqbal Auditorium, Lahore High Court",
    status: "flagship",
    program: "community-and-inclusion",
    cover: img("0107"),
    images: [img("0107"), img("0083")],
    summary:
      "A landmark convention on the rights, dignity, equality and inclusion of persons with disabilities, bringing every stakeholder onto one platform.",
    body: [
      "Young Merit Welfare Foundation convened a historic convention on the rights, dignity, equality and inclusion of persons with disabilities, held at the Javed Iqbal Auditorium inside the Lahore High Court.",
      "Wheelchairs were distributed to people who needed them, and white canes were given to blind participants. The struggle, courage and rights of persons with disabilities were placed squarely in front of the public.",
      "The programme brought together all stakeholders on a single platform to push for positive change, public awareness, and policy that actually reaches people.",
    ],
    partners: [
      "Alkhidmat Foundation Pakistan",
      "Aleem Dar Foundation",
      "Allah Walay Trust",
      "Bargad Youth Organization",
      "Lahore High Court",
    ],
    urdu: [
      "ہمیں خوشی ہے کہ ینگ میرٹ ویلفیئر فاؤنڈیشن معذور افراد کے حقوق، عزتِ نفس، مساوات اور شمولیت کے موضوع پر ایک انتہائی اہم اور تاریخی کنونشن منعقد کر رہی ہے۔",
      "آئیں، معذور افراد کی آواز بنیں اور ایک بہتر معاشرے کے لیے ساتھ کھڑے ہوں۔",
    ],
    contact: "0303-2344448",
  },
  {
    slug: "world-blood-donor-day",
    title: "World Blood Donor Day",
    date: "2025-06-14",
    dateLabel: "14 June, every year",
    venue: "Lahore and chapter cities",
    status: "annual",
    program: "health-and-wellbeing",
    cover: img("0113"),
    images: [img("0113"), img("0114"), img("0115"), img("0116")],
    summary:
      "Our annual blood drive and awareness campaign — one drop of blood, hope for many lives.",
    body: [
      "Every 14 June we mark World Blood Donor Day with drives and awareness campaigns supporting hospitals and patients who need blood urgently.",
      "Donating blood is a great act of human service — it becomes the means of saving someone's life. Step forward and play your part in serving humanity.",
      "Our own volunteers and office-bearers are among the committed donors on the register, and the Blood Donation department maintains the standing donor list year-round.",
    ],
    urdu: [
      "خون کا عطیہ ایک عظیم انسانی خدمت ہے، جو کسی کی زندگی بچانے کا ذریعہ بنتا ہے۔",
      "14 جون – بلڈ ڈے: آئیں خون کا عطیہ دے کر کسی کی زندگی بچائیں۔",
    ],
    contact: "0303-2344448",
  },
  {
    slug: "international-youth-day-2025",
    title: "International Youth Day 2025",
    date: "2025-08-12",
    dateLabel: "12 August 2025",
    venue: "Lahore",
    status: "past",
    program: "youth-and-innovation",
    cover: img("0112"),
    images: [img("0112"), img("0111")],
    summary:
      "Empowering youth for service, leadership and change — our annual gathering marking International Youth Day.",
    body: [
      "On International Youth Day we pay tribute to the courage, creative ability and leadership of young people.",
      "At Young Merit Welfare Foundation we equip young people to rise above their challenges and to shape a fair and compassionate future. Every obstacle is an opportunity to grow stronger — dream boldly, work fearlessly, and lead with heart.",
      "The world is waiting for the light that only you can bring.",
    ],
  },
  {
    slug: "umt-mou-donation-collection",
    title: "MOU with the University of Management & Technology",
    date: "2025-01-20",
    dateLabel: "Signed 2025",
    venue: "UMT, Lahore",
    status: "partnership",
    program: "education",
    cover: img("0109"),
    images: [img("0109"), img("0078"), img("0081")],
    summary:
      "YMWF and UMT signed a Memorandum of Understanding for official donation collection to support people in need.",
    body: [
      "Young Merit Welfare Foundation and the University of Management and Technology signed a Memorandum of Understanding establishing official donation collection on campus to aid those in need.",
      "The agreement was signed in the presence of the UMT leadership and gives students a recognised, accountable route to contribute to welfare work.",
    ],
  },
  {
    slug: "yla-mou-free-legal-aid",
    title: "MOU with Pakistan National Young Lawyers Association",
    date: "2025-03-10",
    dateLabel: "Signed 2025",
    venue: "Lahore",
    status: "partnership",
    program: "community-and-inclusion",
    cover: img("0105"),
    images: [img("0105")],
    summary:
      "Free legal representation for poor and needy people in their cases, at no cost, through our partnership with the YLA.",
    body: [
      "YMWF and the Pakistan National Young Lawyers Association signed an MOU to help poor and needy people with their legal cases free of cost.",
      "Signed by Rana Ahsan for YMWF and Ahsan Naseer Butt for the YLA, the agreement gives families who could never afford representation a route to legal help.",
    ],
  },
  {
    slug: "alkhidmat-empowering-youth-through-education",
    title: "Recognised at Alkhidmat's 'Empowering Youth through Education'",
    date: "2025-02-15",
    dateLabel: "2025",
    venue: "Lahore",
    status: "recognition",
    program: "education",
    cover: img("0089"),
    images: [img("0089")],
    summary:
      "YMWF was recognised at Alkhidmat Foundation Pakistan's 'Empowering Youth through Education — Bridging the Skills Gap for a Sustainable Tomorrow'.",
    body: [
      "Young Merit Welfare Foundation received recognition at Alkhidmat Foundation Pakistan's education convening, honouring our work bridging the skills gap for young people.",
    ],
  },
  {
    slug: "sar-buland-alkhidmat-youth-gathering",
    title: "Special Guest at 'Sar Buland' — Alkhidmat Youth Gathering",
    date: "2025-02-20",
    dateLabel: "2025",
    venue: "Lahore",
    status: "recognition",
    program: "youth-and-innovation",
    cover: img("0104"),
    images: [img("0104")],
    summary:
      "YMWF was invited as special guest at Sar Buland, the tenth Alkhidmat Youth Gathering.",
    body: [
      "Our founder was honoured as a special guest at 'Sar Buland', the tenth Alkhidmat Youth Gathering — a recognition of YMWF's growing role in youth-led welfare work in Punjab.",
    ],
  },
  {
    slug: "special-iftar-for-special-children",
    title: "Special Iftar for Special Children",
    date: "2025-03-25",
    dateLabel: "Ramadan 2025",
    venue: "VOICE Society for the Rehabilitation of Special Persons, Lahore",
    status: "past",
    program: "community-and-inclusion",
    cover: img("0108"),
    images: [img("0108")],
    summary:
      "An iftar arranged by YMWF at the VOICE Society for the Rehabilitation of Special Persons.",
    body: [
      "Young Merit Welfare Foundation arranged a special iftar for special children at the VOICE Society for the Rehabilitation of Special Persons in Lahore.",
      "All were welcome to join in sharing the blessings of Ramadan — for ehsas, and for rehabilitation.",
    ],
  },
  {
    slug: "khushiyan-bantain-khushhal-rahain",
    title: "Khushiyan Bantain, Khushhal Rahain",
    date: "2025-05-10",
    dateLabel: "Ongoing campaign",
    venue: "Orphanages and children's homes, Lahore",
    status: "ongoing",
    program: "community-and-inclusion",
    cover: img("0088"),
    images: [img("0088"), img("0092"), img("0090"), img("0100"), img("0101"), img("0087")],
    summary:
      "Together, let's spread hope — visits, gifts and stationery for children in orphanages and care homes.",
    body: [
      "'Khushiyan Bantain, Khushhal Rahain' — share happiness, stay happy — is our standing campaign of visits to orphanages and children's homes across Lahore.",
      "Volunteers bring storybooks, stationery kits and an afternoon of company. The visits run under strict visitor guidelines that protect the children's dignity and privacy.",
    ],
  },
  {
    slug: "old-age-home-visits",
    title: "A Day at the Old Age Home",
    date: "2025-06-20",
    dateLabel: "Ongoing programme",
    venue: "Khursheed Welfare Foundation Old Age Home, Lahore",
    status: "ongoing",
    program: "community-and-inclusion",
    cover: img("0079"),
    images: [img("0079"), img("0091")],
    summary:
      "Regular visits to spend the day with residents at old age homes across Lahore.",
    body: [
      "Our volunteers make regular visits to old age homes in Lahore, spending unhurried time with residents who rarely get visitors.",
      "There is no distribution photograph worth more than an afternoon of actual company. That is the point of the programme.",
    ],
  },
  {
    slug: "park-cleanliness-and-water-drive",
    title: "Park Clean-Up and Clean Water Drives",
    date: "2025-04-05",
    dateLabel: "Ongoing",
    venue: "Public parks, Lahore",
    status: "ongoing",
    program: "community-and-inclusion",
    cover: img("0102"),
    images: [img("0102"), img("0096"), img("0097"), img("0076")],
    summary:
      "Volunteer-run clean-up drives in Lahore's public parks, and cold water for rickshaw drivers and labourers in summer.",
    body: [
      "Our environmental awareness work is practical: volunteers clear litter from public parks, and hand out cold water to rickshaw drivers, labourers and commuters during Lahore's worst summer heat.",
    ],
  },
  {
    slug: "fellowship-programme",
    title: "The YMWF Fellowship Programme",
    date: "2026-01-15",
    dateLabel: "2026 cohort",
    venue: "Lahore",
    status: "open",
    program: "youth-and-innovation",
    cover: img("0077"),
    images: [img("0077"), img("0103")],
    summary:
      "Leadership, Communication, Technology, Innovation and Growth — our structured programme for students who want to lead.",
    body: [
      "The Fellowship Programme is YMWF's flagship youth initiative, built on five pillars: Leadership, Communication, Technology, Innovation and Growth.",
      "Fellows are college and university students who want to do serious social-impact work. They run sessions, lead drives, and take responsibility for real projects rather than shadowing them.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Chapters
// ---------------------------------------------------------------------------
export const chapters = {
  intro:
    "We work through student- and volunteer-led chapters in cities and on university campuses, promoting youth leadership, educational development and the spirit of welfare.",
  groups: [
    {
      title: "Central & Major City Chapters",
      note: "Our operating base and the city chapters that run drives directly.",
      items: [
        { name: "Lahore", note: "Base / Central Hub" },
        { name: "Gujranwala" },
        { name: "Narowal" },
      ],
    },
    {
      title: "University Chapters",
      note: "Student cabinets running programmes on their own campuses across Lahore and central Punjab.",
      items: [
        { name: "GC University Lahore" },
        { name: "University of the Punjab" },
        { name: "UET Lahore" },
        { name: "University of Management & Technology" },
        { name: "University of Lahore" },
        { name: "University of Central Punjab" },
        { name: "University of Education" },
        { name: "Bahria University Lahore" },
        { name: "COMSATS University Lahore" },
      ],
    },
    {
      title: "South Punjab Region",
      note: "Our newest chapters, extending the network beyond central Punjab.",
      items: [{ name: "Dera Ghazi Khan" }, { name: "Bahawalpur" }],
    },
    {
      title: "Overseas Chapter",
      note: "Volunteers and supporters coordinating from outside Pakistan.",
      items: [{ name: "Overseas Chapter", note: "Europe and beyond" }],
    },
  ],
};

// ---------------------------------------------------------------------------
// Partners
// ---------------------------------------------------------------------------
export const partners = [
  { name: "Alkhidmat Foundation Pakistan", kind: "Welfare" },
  { name: "Lahore High Court", kind: "Institution" },
  { name: "University of Management & Technology", kind: "University" },
  { name: "GC University Lahore", kind: "University" },
  { name: "Aleem Dar Foundation", kind: "Welfare" },
  { name: "Allah Walay Trust", kind: "Welfare" },
  { name: "Bargad Youth Organization", kind: "Youth" },
  { name: "Pakistan National Young Lawyers Association", kind: "Legal" },
  { name: "VOICE Society for Rehabilitation of Special Persons", kind: "Disability" },
  { name: "Waduha Welfare Organization", kind: "Welfare" },
];

// ---------------------------------------------------------------------------
// People. Photographs are deliberately not attached to individual names —
// send headshots and we will place them.
// ---------------------------------------------------------------------------
export const leadership = [
  {
    name: "Rana Ahsan",
    role: "Founder & President",
    bio: [
      "Rana Ahsan is a passionate youth leader, social activist, and development advocate with over 11 years of experience in social work and community service. He is the Founder & President of the Young Merit Welfare Foundation (YMWF), an organization dedicated to youth empowerment, education, leadership development, and community welfare.",
      "He has been associated with Government College University Lahore (GCU Lahore), where his academic journey has further strengthened his understanding of society, youth, and social development.",
      "With a strong commitment to serving humanity and empowering young people, Rana Ahsan has initiated and led various community-based programs, youth activities, welfare initiatives, and leadership opportunities. His vision is to create a platform where young people can develop their potential and become responsible contributors to society.",
    ],
    photo: "/img/ahsan.webp",
  },
  {
    name: "Muhammad Afzal",
    role: "Advisor",
    bio: [
      "Muhammad Afzal is a dedicated educationist, experienced teacher, and passionate advocate for youth development, with over 20 years of teaching experience. He also runs an educational institution, where he is committed to providing quality education and guiding students toward a brighter future.",
      "Alongside his dedication to education, he has a deep sense of compassion for humanity and a strong belief in serving others. As an Advisor to the Young Merit Welfare Foundation (YMWF), he brings his knowledge, experience, and vision to support the Foundation's work in education, youth empowerment, character building, and community service.",
      "His commitment to education and Khidmat-e-Khalq reflects his belief that true success lies not only in personal growth but also in making a positive difference in the lives of others.",
    ],
    photo: "/img/afzal.webp",
    photoPosition: "center 35%",
  },
];

// ---------------------------------------------------------------------------
// Ways to give. Amounts marked `needsPricing` must be confirmed before launch.
// ---------------------------------------------------------------------------
export const givingOptions = [
  {
    title: "Ration bag for a family",
    amount: 4500,
    unit: "one bag",
    body: "A month's essential groceries for a household, packed and delivered by our volunteers during Ramadan and through the year.",
    program: "community-and-inclusion",
  },
  {
    title: "Winter blanket",
    amount: 1500,
    unit: "one blanket",
    body: "A blanket for someone sleeping rough during Lahore's cold months.",
    program: "community-and-inclusion",
  },
  {
    title: "School kit for a child",
    amount: null,
    needsPricing: true,
    unit: "bag, shoes, stationery",
    body: "School bag, shoes and a stationery kit so a child starts the year properly equipped.",
    program: "education",
  },
  {
    title: "A term of fee assistance",
    amount: null,
    needsPricing: true,
    unit: "one student, one term",
    body: "Full or partial fees for a student with the merit but not the means.",
    program: "education",
  },
];

export const bankDetails = {
  note: "Confirm and replace these before the site goes live. Wallet numbers below appear on YMWF campaign material.",
  wallets: [
    { provider: "JazzCash", number: "0303-2344448", title: "YMWF — Ration Drive" },
    { provider: "EasyPaisa", number: "0317-4041279", title: "YMWF — Ration Drive" },
  ],
  bank: {
    title: null,
    accountNumber: null,
    iban: null,
    bankName: null,
    branch: null,
  },
};

// ---------------------------------------------------------------------------
// Gallery. Every photograph in the archive, tagged so it can be filtered.
// ---------------------------------------------------------------------------
const g = (n, category, caption) => ({
  src: img(n),
  thumb: img(n).replace(/\.webp$/, '-sm.webp'),
  category,
  caption,
});

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "disability", label: "Disability Rights" },
  { id: "education", label: "Education" },
  { id: "health", label: "Health & Blood" },
  { id: "youth", label: "Youth & Fellowship" },
  { id: "community", label: "Community" },
  { id: "partnerships", label: "Partnerships" },
  { id: "team", label: "Our Team" },
];

export const gallery = [
  g("0083", "disability", "Disability Rights & Dignity Convention 2025, Lahore High Court"),
  g("0107", "disability", "Disability Rights & Dignity Convention 2025"),
  g("0108", "disability", "Special Iftar for Special Children at VOICE Society"),
  g("0034", "disability", "Convention proceedings"),
  g("0035", "disability", "Convention proceedings"),
  g("0036", "disability", "Convention proceedings"),
  g("0037", "disability", "Convention proceedings"),
  g("0038", "disability", "Convention proceedings"),
  g("0039", "disability", "Convention proceedings"),
  g("0040", "disability", "Convention proceedings"),
  g("0041", "disability", "Convention proceedings"),
  g("0042", "disability", "Convention proceedings"),
  g("0043", "disability", "Convention proceedings"),

  g("0110", "education", "Education essentials drive with Waduha Welfare Organization"),
  g("0090", "education", "Stationery kits for children"),
  g("0106", "education", "A study circle in a Lahore park"),
  g("0045", "education", "Learning session"),
  g("0046", "education", "Learning session"),
  g("0047", "education", "Certificate distribution"),
  g("0048", "education", "Certificate distribution"),
  g("0049", "education", "Students supported"),
  g("0050", "education", "Students supported"),

  g("0113", "health", "World Blood Donor Day"),
  g("0114", "health", "A committed donor"),
  g("0115", "health", "A committed donor"),
  g("0116", "health", "A committed donor"),
  g("0016", "health", "Free medical screening camp"),
  g("0017", "health", "Free medical screening camp"),
  g("0018", "health", "Health awareness drive"),

  g("0103", "youth", "Fellowship Programme session"),
  g("0077", "youth", "Fellowship Programme — Leadership, Communication, Technology, Innovation, Growth"),
  g("0112", "youth", "International Youth Day 2025"),
  g("0111", "youth", "International Youth Day 2025"),
  g("0051", "youth", "Workshop session"),
  g("0052", "youth", "Workshop session"),
  g("0053", "youth", "Chapter meeting"),
  g("0054", "youth", "Chapter meeting"),

  g("0102", "community", "Volunteers at a park clean-up drive"),
  g("0096", "community", "Park clean-up drive"),
  g("0097", "community", "Volunteers in the field"),
  g("0076", "community", "Clean water distribution on a Lahore roadside"),
  g("0079", "community", "A day at the old age home"),
  g("0091", "community", "With residents at the old age home"),
  g("0087", "community", "Ramadan visit to a children's home"),
  g("0100", "community", "Khushiyan Bantain, Khushhal Rahain"),
  g("0101", "community", "Khushiyan Bantain, Khushhal Rahain"),
  g("0055", "community", "Ration distribution"),
  g("0056", "community", "Ration distribution"),
  g("0057", "community", "Blanket distribution drive"),
  g("0058", "community", "Blanket distribution drive"),
  g("0059", "community", "Community outreach"),
  g("0060", "community", "Community outreach"),
  g("0061", "community", "Community outreach"),
  g("0062", "community", "Community outreach"),
  g("0063", "community", "Community outreach"),
  g("0064", "community", "Community outreach"),
  g("0065", "community", "Community outreach"),
  g("0066", "community", "Community outreach"),
  g("0067", "community", "Community outreach"),
  g("0068", "community", "Community outreach"),
  g("0069", "community", "Community outreach"),
  g("0070", "community", "Community outreach"),
  g("0071", "community", "Community outreach"),
  g("0072", "community", "Community outreach"),
  g("0073", "community", "Community outreach"),
  g("0074", "community", "Community outreach"),
  g("0075", "community", "Community outreach"),

  g("0109", "partnerships", "MOU with the University of Management & Technology"),
  g("0078", "partnerships", "Signing the UMT Memorandum of Understanding"),
  g("0081", "partnerships", "Signing the UMT Memorandum of Understanding"),
  g("0105", "partnerships", "MOU with Pakistan National Young Lawyers Association"),
  g("0089", "partnerships", "Recognised at Alkhidmat's Empowering Youth through Education"),
  g("0104", "partnerships", "Special guest at Sar Buland, Alkhidmat Youth Gathering"),
  g("0093", "partnerships", "Visit to Alkhidmat Foundation Pakistan"),
  g("0094", "partnerships", "Visit to Alkhidmat Health Foundation"),
  g("0084", "partnerships", "Institutional visit"),
  g("0085", "partnerships", "Institutional visit"),
  g("0086", "partnerships", "Institutional visit"),
  g("0080", "partnerships", "Team briefing at the Shahdara office"),

  g("0088", "team", "The team behind Khushiyan Bantain, Khushhal Rahain"),
  g("0092", "team", "Volunteers and organisers"),
  g("0095", "team", "Volunteers at a chapter drive"),
  g("0019", "team", "Chapter cabinet"),
  g("0020", "team", "Chapter cabinet"),
  g("0021", "team", "Volunteer team"),
  g("0022", "team", "Volunteer team"),
  g("0023", "team", "Volunteer team"),
  g("0024", "team", "Volunteer team"),
  g("0025", "team", "Volunteer team"),
  g("0026", "team", "Volunteer team"),
  g("0027", "team", "Volunteer team"),
  g("0028", "team", "Volunteer team"),
  g("0029", "team", "Volunteer team"),
  g("0030", "team", "Volunteer team"),
  g("0031", "team", "Volunteer team"),
  g("0032", "team", "Volunteer team"),
  g("0033", "team", "Volunteer team"),
  g("0082", "team", "Volunteers on a drive"),
  g("0098", "team", "Volunteers on a drive"),

  // Campaign and announcement artwork.
  g("0002", "community", "Campaign artwork"),
  g("0003", "community", "Campaign artwork"),
  g("0004", "education", "Campaign artwork"),
  g("0005", "community", "Ramazan ration drive — Rs 4,500 per bag"),
  g("0006", "community", "Blanket drive for the homeless — Rs 1,500 per blanket"),
  g("0007", "health", "Free dispensary, Shahdara"),
  g("0008", "community", "A Day with the Flowers of the Orphanage"),
  g("0009", "youth", "Chapter announcement"),
  g("0010", "youth", "Chapter announcement"),
  g("0012", "youth", "Chapter cabinet announcement"),
  g("0013", "youth", "Chapter cabinet announcement"),
  g("0014", "partnerships", "Collaboration announcement"),
  g("0015", "youth", "Awards programme"),
];

export const getInvolvedOptions = [
  {
    title: "Become a volunteer",
    body: "Join a city or university chapter and work on drives, camps and visits. No experience needed — training is part of it.",
    action: "Volunteer",
    icon: "users",
  },
  {
    title: "Apply for the Fellowship",
    body: "A structured programme for college and university students in Leadership, Communication, Technology, Innovation and Growth.",
    action: "Apply",
    icon: "spark",
  },
  {
    title: "Register as a blood donor",
    body: "Join the standing donor register so we can reach you when a patient urgently needs your blood group.",
    action: "Register",
    icon: "drop",
  },
  {
    title: "Start a chapter",
    body: "Bring YMWF to your campus or city. We will help you build the cabinet and run your first drive.",
    action: "Get in touch",
    icon: "flag",
  },
];

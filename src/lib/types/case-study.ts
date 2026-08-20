export type Persona = {
  name: string
  role: string
  age: number
  location: string
  bio: string
  goals: string[]
  frustrations: string[]
  tint: string // css color for avatar background
}

export type JourneyStage = {
  stage: string
  action: string
  thoughts: string
  /** 1 (frustrated) .. 5 (delighted) */
  emotion: number
  touchpoints: string[]
  opportunity: string
}

export type CaseStudy = {
  slug: string
  client: string
  title: string
  summary: string
  category: string
  cardImage: string
  heroImage: string
  year: string

  overview: {
    product: string
    duration: string
    role: string[]
    deliverables: string[]
    specifications: { label: string; value: string }[]
  }

  problem: {
    statement: string
    paragraphs: string[]
    satisfaction: number
    painPoints: string[]
  }

  metrics: {
    /** grouped bar: before vs after */
    comparison: { label: string; before: number; after: number }[]
    /** donut of reported pain points */
    painDistribution: { label: string; value: number }[]
    /** line of adoption over launch weeks */
    adoption: { week: string; users: number }[]
  }

  personas: Persona[]
  journey: JourneyStage[]

  insights: { title: string; body: string }[]

  screens: { title: string; caption: string; image: string }[]

  outcomes: {
    stats: { value: string; label: string }[]
    paragraphs: string[]
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fishbowl-go',
    client: 'fishbowl go',
    title: 'Simplifying inventory management in the warehouse and in the office.',
    summary:
      'A tablet-first companion app that lets warehouse teams manage complex inventory with the speed and simplicity of a consumer product.',
    category: 'product design',
    cardImage: '/case-fishbowl.png',
    heroImage: '/case-fishbowl.png',
    year: '2024',
    overview: {
      product:
        'Fishbowl Go is an app designed for inventory management. It streamlines processes like sales orders, manufacture orders, and other inventory tasks, helping teams complete jobs in the warehouse more efficiently.',
      duration:
        'Originally, the project was roadmapped for a month, but scoping and rebuilding stretched the project across nearly six months of iterative work.',
      role: ['Project Lead', 'UX Researcher', 'UX Designer', 'Interaction Designer'],
      deliverables: [
        'User surveys & user tests',
        'Personas',
        'User journeys & site maps',
        'High-fidelity prototypes',
        'Usability tests & findings',
      ],
      specifications: [
        { label: 'Timeline', value: '6 months' },
        { label: 'Platform', value: 'iPad / tablet' },
        { label: 'Team', value: 'Product + 2 eng' },
        { label: 'Sector', value: 'Enterprise SaaS' },
      ],
    },
    problem: {
      statement:
        'Warehouse teams relied on a tablet-compatible solution that integrated seamlessly with their existing systems, but the app in place fell short of that promise.',
      paragraphs: [
        'Through competitive analysis and usability evaluation, we identified an industry-wide struggle to adapt inventory-management tools for mobile use. Many business owners rely on desktop-only software, which creates inefficiencies when managing tasks remotely.',
        'Existing mobile apps primarily focus on warehouse activities, leaving a gap for administrative tasks like reviewing inventory, managing orders, and accessing data on the go.',
      ],
      satisfaction: 52.5,
      painPoints: [
        'The UI is difficult to navigate.',
        'Difficult to sort through reports and inventory summaries.',
        'Hard to fix problems without requesting support.',
        'Not a lot of automation or bulk action capabilities.',
      ],
    },
    metrics: {
      comparison: [
        { label: 'Task success', before: 61, after: 94 },
        { label: 'Time on task', before: 48, after: 88 },
        { label: 'Error-free', before: 55, after: 91 },
        { label: 'Satisfaction', before: 52, after: 89 },
      ],
      painDistribution: [
        { label: 'Navigation', value: 34 },
        { label: 'Reporting', value: 26 },
        { label: 'Support friction', value: 22 },
        { label: 'Manual work', value: 18 },
      ],
      adoption: [
        { week: 'W1', users: 120 },
        { week: 'W2', users: 340 },
        { week: 'W3', users: 610 },
        { week: 'W4', users: 980 },
        { week: 'W5', users: 1420 },
        { week: 'W6', users: 1980 },
      ],
    },
    personas: [
      {
        name: 'Jennifer G.',
        role: 'Purchasing Manager',
        age: 42,
        location: 'Salt Lake City, UT',
        bio: 'Oversees purchasing for a mid-sized distributor and is constantly moving between the floor and the office.',
        goals: ['See live inventory anywhere', 'Approve orders quickly', 'Trust the numbers'],
        frustrations: ['Desktop-only tools', 'Slow report exports', 'Too many manual steps'],
        tint: 'oklch(0.62 0.2 15 / 0.14)',
      },
      {
        name: 'Marcus T.',
        role: 'Warehouse Lead',
        age: 35,
        location: 'Ogden, UT',
        bio: 'Runs the receiving dock and needs to update counts the moment product moves.',
        goals: ['Scan & update on the go', 'Fewer taps per task', 'Clear status at a glance'],
        frustrations: ['Tiny tap targets', 'Losing signal', 'No bulk actions'],
        tint: 'oklch(0.55 0.09 165 / 0.16)',
      },
      {
        name: 'Priya S.',
        role: 'Operations Analyst',
        age: 29,
        location: 'Remote',
        bio: 'Builds the reports leadership relies on and wants the source data to be dependable.',
        goals: ['Custom report views', 'Exportable summaries', 'Real-time accuracy'],
        frustrations: ['Data mismatches', 'Rigid filters', 'Manual reconciliation'],
        tint: 'oklch(0.72 0.14 65 / 0.16)',
      },
      {
        name: 'David R.',
        role: 'Business Owner',
        age: 51,
        location: 'Provo, UT',
        bio: 'Checks the health of the business from his phone between meetings and site visits.',
        goals: ['A high-level pulse', 'Peace of mind', 'Simple mobile access'],
        frustrations: ['Overwhelming UI', 'Needing IT for basics', 'No offline view'],
        tint: 'oklch(0.45 0.04 264 / 0.14)',
      },
    ],
    journey: [
      {
        stage: 'Discover',
        action: 'Opens the app on the warehouse floor to check stock levels.',
        thoughts: '“I just need a fast, trustworthy count without loading the desktop.”',
        emotion: 3,
        touchpoints: ['Login', 'Dashboard', 'Search'],
        opportunity: 'Surface most-used inventory front and center on open.',
      },
      {
        stage: 'Search',
        action: 'Filters inventory to find a specific SKU across locations.',
        thoughts: '“Why does it take so many taps to filter by location?”',
        emotion: 2,
        touchpoints: ['Filters', 'SKU list', 'Location'],
        opportunity: 'Persistent, smart filters with saved views.',
      },
      {
        stage: 'Act',
        action: 'Updates a count and submits a manufacture order.',
        thoughts: '“I hope this saved — I did not get any confirmation.”',
        emotion: 2,
        touchpoints: ['Edit count', 'Order form', 'Submit'],
        opportunity: 'Immediate toast + inline validation for every action.',
      },
      {
        stage: 'Confirm',
        action: 'Looks for confirmation that the order went through.',
        thoughts: '“Did that actually go through? I better double-check on desktop.”',
        emotion: 3,
        touchpoints: ['Activity log', 'Notifications'],
        opportunity: 'Clear success states and a reviewable activity feed.',
      },
      {
        stage: 'Reflect',
        action: 'Reviews daily activity before leaving the site.',
        thoughts: '“It would be great to trust this on mobile completely.”',
        emotion: 4,
        touchpoints: ['Summary', 'Reports'],
        opportunity: 'Lightweight end-of-day summary tuned for mobile.',
      },
    ],
    insights: [
      {
        title: 'Toast messages for confidence',
        body: 'Introduce toast notifications for immediate feedback after an action is completed, providing users with clear confirmation and peace of mind.',
      },
      {
        title: 'Visual confirmation indicators',
        body: 'Develop visual cues, such as check-marks or color changes, to indicate successful completion of tasks like inventory updates or data entry.',
      },
      {
        title: 'Enhanced feedback loop',
        body: 'Strengthen the app’s feedback loop by providing distinct auditory or haptic feedback for completed actions, enhancing the user experience for those relying on sensory inputs.',
      },
    ],
    screens: [
      {
        title: 'Digital wireframes',
        caption: 'Navigation, quick actions, and searching through inventory were essential features we needed to refine.',
        image: '/case-fishbowl.png',
      },
      {
        title: 'Key mockups',
        caption: 'High-fidelity iterations focused on the iPad/tablet app geared toward administrative tasks, separate from the mobile app.',
        image: '/case-fishbowl.png',
      },
    ],
    outcomes: {
      stats: [
        { value: '+70%', label: 'reported satisfaction' },
        { value: '2×', label: 'faster task completion' },
        { value: '−41%', label: 'support requests' },
      ],
      paragraphs: [
        'Usability testing of the redesigned prototype was a pivotal phase in our project, yielding crucial insights. The testing showed that our redesign markedly relieved the pain points of the existing app, significantly improving user-friendliness and efficiency.',
        'This project pushed my design process forward — the value of validating decisions with real users before committing engineering time became the biggest takeaway of the engagement.',
      ],
    },
  },
  {
    slug: 'haven-massage',
    client: 'haven massage',
    title: 'Providing professional therapeutic services through easy booking.',
    summary:
      'A calming mobile booking experience that helps clients discover services, pick a therapist, and reserve a time in under a minute.',
    category: 'product design',
    cardImage: '/case-haven.png',
    heroImage: '/case-haven.png',
    year: '2023',
    overview: {
      product:
        'Haven Massage is a booking app for a therapeutic massage practice. It helps clients understand services, choose a provider, schedule a visit, and manage upcoming appointments with a calm, low-friction flow.',
      duration:
        'A focused three-month engagement from discovery research through a tested, high-fidelity prototype ready for development.',
      role: ['UX Researcher', 'UX Designer', 'Visual Designer'],
      deliverables: [
        'Stakeholder interviews',
        'Service blueprint',
        'Booking flow & prototype',
        'Design system',
        'Usability testing',
      ],
      specifications: [
        { label: 'Timeline', value: '3 months' },
        { label: 'Platform', value: 'iOS / Android' },
        { label: 'Team', value: 'Solo designer' },
        { label: 'Sector', value: 'Wellness' },
      ],
    },
    problem: {
      statement:
        'Booking a massage meant calling during business hours or navigating a clunky web form, and clients often abandoned before choosing a time.',
      paragraphs: [
        'Clients wanted to browse services and availability the same way they browse anything else — quickly, visually, and on their phone. The existing web flow buried pricing and made choosing a therapist feel like guesswork.',
        'Meanwhile, the front desk spent hours each week on phone bookings and reschedules, time that could be spent on client care instead.',
      ],
      satisfaction: 47,
      painPoints: [
        'No clear way to see real-time availability.',
        'Pricing and services were hard to compare.',
        'Choosing a therapist felt like guesswork.',
        'Rescheduling required a phone call.',
      ],
    },
    metrics: {
      comparison: [
        { label: 'Booking rate', before: 44, after: 82 },
        { label: 'Time to book', before: 38, after: 90 },
        { label: 'Repeat visits', before: 51, after: 79 },
        { label: 'Satisfaction', before: 47, after: 88 },
      ],
      painDistribution: [
        { label: 'Availability', value: 38 },
        { label: 'Pricing clarity', value: 24 },
        { label: 'Provider choice', value: 21 },
        { label: 'Rescheduling', value: 17 },
      ],
      adoption: [
        { week: 'W1', users: 80 },
        { week: 'W2', users: 210 },
        { week: 'W3', users: 360 },
        { week: 'W4', users: 540 },
        { week: 'W5', users: 720 },
        { week: 'W6', users: 910 },
      ],
    },
    personas: [
      {
        name: 'Alicia M.',
        role: 'Busy Professional',
        age: 34,
        location: 'Denver, CO',
        bio: 'Wants to book a recovery massage between meetings without any phone calls.',
        goals: ['Book in under a minute', 'See real availability', 'Save a favorite therapist'],
        frustrations: ['Phone-only booking', 'Hidden pricing', 'No reminders'],
        tint: 'oklch(0.55 0.09 165 / 0.16)',
      },
      {
        name: 'Grace L.',
        role: 'Recurring Client',
        age: 47,
        location: 'Boulder, CO',
        bio: 'Comes in monthly and wants rebooking to be effortless.',
        goals: ['Rebook the same slot', 'Manage her plan', 'Easy rescheduling'],
        frustrations: ['Re-entering details', 'Rigid time slots', 'Slow front desk'],
        tint: 'oklch(0.72 0.14 65 / 0.16)',
      },
      {
        name: 'Tomás V.',
        role: 'First-timer',
        age: 28,
        location: 'Fort Collins, CO',
        bio: 'Nervous about what to expect and wants guidance before he commits.',
        goals: ['Understand services', 'Know what to expect', 'Feel confident booking'],
        frustrations: ['Jargon-heavy menus', 'Unclear duration', 'No provider info'],
        tint: 'oklch(0.62 0.2 15 / 0.14)',
      },
      {
        name: 'Nina P.',
        role: 'Front Desk Lead',
        age: 39,
        location: 'Denver, CO',
        bio: 'Juggles the phones and the schedule and wants fewer manual bookings.',
        goals: ['Fewer phone bookings', 'Balanced schedule', 'Fewer no-shows'],
        frustrations: ['Double-bookings', 'Last-minute cancels', 'Manual reminders'],
        tint: 'oklch(0.45 0.04 264 / 0.14)',
      },
    ],
    journey: [
      {
        stage: 'Discover',
        action: 'Opens the app looking for a same-week appointment.',
        thoughts: '“Can I actually see what times are open right now?”',
        emotion: 3,
        touchpoints: ['Home', 'Service list'],
        opportunity: 'Lead with real-time availability, not a static menu.',
      },
      {
        stage: 'Compare',
        action: 'Reviews services, durations, and pricing.',
        thoughts: '“Which service is right for me, and what does it cost?”',
        emotion: 2,
        touchpoints: ['Service detail', 'Pricing'],
        opportunity: 'Plain-language service cards with clear pricing.',
      },
      {
        stage: 'Choose',
        action: 'Picks a therapist and a time.',
        thoughts: '“I want the same therapist as last time.”',
        emotion: 4,
        touchpoints: ['Provider profiles', 'Calendar'],
        opportunity: 'Surface favorites and past providers first.',
      },
      {
        stage: 'Book',
        action: 'Confirms and pays for the appointment.',
        thoughts: '“That was easy — I hope I get a reminder.”',
        emotion: 4,
        touchpoints: ['Checkout', 'Confirmation'],
        opportunity: 'Instant confirmation plus automatic reminders.',
      },
      {
        stage: 'Return',
        action: 'Comes back to rebook or reschedule.',
        thoughts: '“Rebooking should take two taps.”',
        emotion: 5,
        touchpoints: ['Upcoming', 'Rebook'],
        opportunity: 'One-tap rebook of a previous appointment.',
      },
    ],
    insights: [
      {
        title: 'Lead with availability',
        body: 'Clients decide based on when they can come in. Putting real-time openings first turned browsing into booking.',
      },
      {
        title: 'Plain-language services',
        body: 'Replacing clinical jargon with clear descriptions and transparent pricing gave first-timers the confidence to book.',
      },
      {
        title: 'Effortless rebooking',
        body: 'A one-tap rebook of a favorite therapist and time drove repeat visits and cut front-desk phone volume.',
      },
    ],
    screens: [
      {
        title: 'Booking flow',
        caption: 'From service selection to a confirmed time, every screen removed a step from the original web form.',
        image: '/case-haven.png',
      },
      {
        title: 'Provider & schedule',
        caption: 'Therapist profiles and a legible calendar made choosing a time feel calm and certain.',
        image: '/case-haven.png',
      },
    ],
    outcomes: {
      stats: [
        { value: '+86%', label: 'more app bookings' },
        { value: '<60s', label: 'to complete a booking' },
        { value: '−52%', label: 'phone bookings' },
      ],
      paragraphs: [
        'The redesigned flow moved the majority of bookings to self-service, freeing the front desk and giving clients the fast, visual experience they expected.',
        'Testing confirmed that leading with availability and plain-language services was the difference between browsing and booking.',
      ],
    },
  },
  {
    slug: 'travelpass',
    client: 'travelpass',
    title: 'Providing the explorer at heart unforgettable adventures.',
    summary:
      'A travel companion that unifies hotels, tours, and experiences into one confident booking flow for spontaneous explorers.',
    category: 'product design',
    cardImage: '/case-travelpass.png',
    heroImage: '/case-travelpass.png',
    year: '2023',
    overview: {
      product:
        'TravelPass helps explorers discover and book hotels, tours, and experiences in one place. It brings availability, filters, and itineraries together so travelers can plan confidently on the move.',
      duration:
        'A four-month project spanning research, information architecture, and a tested high-fidelity prototype across web and mobile.',
      role: ['UX Researcher', 'UX Designer', 'Interaction Designer'],
      deliverables: [
        'Competitive analysis',
        'Information architecture',
        'Search & filter system',
        'Responsive prototype',
        'Usability testing',
      ],
      specifications: [
        { label: 'Timeline', value: '4 months' },
        { label: 'Platform', value: 'Web + mobile' },
        { label: 'Team', value: 'Designer + PM' },
        { label: 'Sector', value: 'Travel' },
      ],
    },
    problem: {
      statement:
        'Explorers stitched together hotels, tours, and experiences across separate apps, losing time and confidence every time they switched contexts.',
      paragraphs: [
        'Travelers wanted spontaneity, but the tools forced them to juggle multiple tabs and apps just to compare options for a single trip. Filters rarely matched how people actually search.',
        'When a search returned nothing, users hit dead ends with no guidance on how to adjust — so they abandoned the plan altogether.',
      ],
      satisfaction: 43,
      painPoints: [
        'Hotels, tours, and experiences lived in different apps.',
        'Filters did not match how travelers search.',
        'Empty search results offered no next step.',
        'Itineraries were hard to keep in one place.',
      ],
    },
    metrics: {
      comparison: [
        { label: 'Search success', before: 49, after: 90 },
        { label: 'Bookings/session', before: 40, after: 84 },
        { label: 'Return rate', before: 46, after: 77 },
        { label: 'Satisfaction', before: 43, after: 87 },
      ],
      painDistribution: [
        { label: 'Fragmented apps', value: 33 },
        { label: 'Poor filters', value: 27 },
        { label: 'Dead-end results', value: 23 },
        { label: 'Scattered plans', value: 17 },
      ],
      adoption: [
        { week: 'W1', users: 150 },
        { week: 'W2', users: 420 },
        { week: 'W3', users: 780 },
        { week: 'W4', users: 1250 },
        { week: 'W5', users: 1810 },
        { week: 'W6', users: 2470 },
      ],
    },
    personas: [
      {
        name: 'Maya R.',
        role: 'Spontaneous Explorer',
        age: 27,
        location: 'Austin, TX',
        bio: 'Books last-minute weekend trips and wants everything in one place.',
        goals: ['Plan on the fly', 'One place for everything', 'Discover local experiences'],
        frustrations: ['Too many apps', 'Confusing filters', 'Dead-end searches'],
        tint: 'oklch(0.62 0.2 15 / 0.14)',
      },
      {
        name: 'Jordan K.',
        role: 'Budget Traveler',
        age: 24,
        location: 'Portland, OR',
        bio: 'Optimizes every trip for value and hates hidden fees.',
        goals: ['Compare total cost', 'Filter by budget', 'Find deals'],
        frustrations: ['Hidden fees', 'Rigid price filters', 'Scattered pricing'],
        tint: 'oklch(0.55 0.09 165 / 0.16)',
      },
      {
        name: 'Elena D.',
        role: 'Family Planner',
        age: 41,
        location: 'San Diego, CA',
        bio: 'Coordinates trips for four and needs everything in one itinerary.',
        goals: ['Family-friendly options', 'One shared itinerary', 'Flexible booking'],
        frustrations: ['Juggling bookings', 'No shared plan', 'Unclear cancellation'],
        tint: 'oklch(0.72 0.14 65 / 0.16)',
      },
      {
        name: 'Sam O.',
        role: 'Business + Leisure',
        age: 36,
        location: 'Chicago, IL',
        bio: 'Extends work trips into short adventures when time allows.',
        goals: ['Quick add-on experiences', 'Reliable availability', 'Easy expensing'],
        frustrations: ['Time pressure', 'Unreliable listings', 'Manual receipts'],
        tint: 'oklch(0.45 0.04 264 / 0.14)',
      },
    ],
    journey: [
      {
        stage: 'Dream',
        action: 'Browses destinations for an upcoming trip.',
        thoughts: '“Where can I go this weekend that fits my budget?”',
        emotion: 4,
        touchpoints: ['Explore', 'Destinations'],
        opportunity: 'Inspire with curated, budget-aware collections.',
      },
      {
        stage: 'Search',
        action: 'Filters hotels and experiences for the dates.',
        thoughts: '“These filters do not match how I actually search.”',
        emotion: 2,
        touchpoints: ['Search', 'Filters'],
        opportunity: 'Flexible, human filters (budget, vibe, dates).',
      },
      {
        stage: 'Adjust',
        action: 'Hits an empty result and tries to recover.',
        thoughts: '“No results — now what do I even change?”',
        emotion: 1,
        touchpoints: ['Empty state', 'Suggestions'],
        opportunity: 'Helpful empty states that suggest the next move.',
      },
      {
        stage: 'Book',
        action: 'Reserves a hotel and adds a tour.',
        thoughts: '“Nice — I can book both without leaving the app.”',
        emotion: 4,
        touchpoints: ['Booking', 'Itinerary'],
        opportunity: 'Unified cart across hotels, tours, and experiences.',
      },
      {
        stage: 'Travel',
        action: 'Follows the itinerary during the trip.',
        thoughts: '“Everything I booked is right here in one plan.”',
        emotion: 5,
        touchpoints: ['Itinerary', 'Reminders'],
        opportunity: 'A living itinerary with timely, on-trip nudges.',
      },
    ],
    insights: [
      {
        title: 'One place to book it all',
        body: 'Unifying hotels, tours, and experiences into a single cart removed the app-juggling that made planning exhausting.',
      },
      {
        title: 'Filters that match intent',
        body: 'Rebuilding filters around how travelers actually search — budget, vibe, and flexible dates — turned browsing into confident booking.',
      },
      {
        title: 'Recover from empty states',
        body: 'Turning dead-end results into helpful suggestions kept explorers moving instead of abandoning the plan.',
      },
    ],
    screens: [
      {
        title: 'Search & filters',
        caption: 'Human filters and a legible results layout made comparing options feel effortless.',
        image: '/case-travelpass.png',
      },
      {
        title: 'Booking & itinerary',
        caption: 'A unified cart and living itinerary kept every hotel, tour, and experience in one plan.',
        image: '/case-travelpass.png',
      },
    ],
    outcomes: {
      stats: [
        { value: '+84%', label: 'search success' },
        { value: '2.1×', label: 'bookings per session' },
        { value: '+31%', label: 'return rate' },
      ],
      paragraphs: [
        'Bringing every part of the trip into one confident flow doubled bookings per session and turned first-time explorers into repeat travelers.',
        'The biggest lever was empathy for the search: matching filters to real intent and never leaving a traveler at a dead end.',
      ],
    },
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function getOtherCaseStudies(slug: string): CaseStudy[] {
  return caseStudies.filter((c) => c.slug !== slug)
}

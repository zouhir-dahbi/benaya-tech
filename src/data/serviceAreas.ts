export type FAQ = { q: string; a: string };

export type ServiceArea = {
  slug: string;
  city: string;
  group: 'Loudoun County' | 'Fairfax County & Area' | 'Arlington';
  metaDescription: string;
  intro: string;
  residential: string;
  commercial: string;
  nearby: string[]; // slugs
  faqs: FAQ[];
};

export const groupBlurbs: Record<ServiceArea['group'], string> = {
  'Loudoun County':
    'Fast-growing communities northwest of the Dulles corridor, including large new-construction subdivisions and a significant data-center and logistics footprint.',
  'Fairfax County & Area':
    'Established suburban communities, corporate corridors, and town centers across central Northern Virginia.',
  Arlington:
    'A dense, urban mix of high-rise residential buildings, government offices, and business corridors.',
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'ashburn-va',
    city: 'Ashburn',
    group: 'Loudoun County',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation for homes and businesses in Ashburn, VA. Serving Ashburn and surrounding Loudoun County areas.',
    intro:
      "Ashburn has grown fast, and a lot of that growth is newer subdivisions and townhome communities where homeowners want coverage that looks intentional, not improvised. We design and install professional camera and access-control systems for Ashburn homes and businesses — including the offices and facilities along the Route 7 and Dulles Greenway corridors.",
    residential:
      "Many Ashburn homes sit in HOA-governed communities with newer construction, which usually means clean cable routing is achievable and camera placement can be planned around driveways, front entries, and shared property lines thoughtfully. We handle that planning for you rather than leaving you with a box of cameras to figure out.",
    commercial:
      "Ashburn's commercial base runs from retail and professional offices to the data-center and logistics footprint the area is known for. We design coverage and access control around how a specific business actually operates — entrances, sensitive areas, parking — and build in reliable recording and user management.",
    nearby: ['sterling-va', 'leesburg-va'],
    faqs: [
      {
        q: 'Do you work with HOA-governed communities?',
        a: 'Yes — many Ashburn neighborhoods are HOA-governed. We plan installations to be clean and unobtrusive, and we’re happy to work within reasonable placement guidelines for exterior equipment.',
      },
      {
        q: 'Is it easier to wire cameras in newer Ashburn construction?',
        a: 'Often, yes. Newer homes tend to have accessible attic and garage runs that make clean PoE cabling straightforward, though we can also work with finished spaces — it just means a bit more planning around routing.',
      },
      {
        q: 'Can you cover a townhome, not just a large single-family lot?',
        a: 'Absolutely. Townhomes have their own coverage priorities — shared entries, rear access, and garages — and we scale the design accordingly rather than over-building.',
      },
    ],
  },
  {
    slug: 'leesburg-va',
    city: 'Leesburg',
    group: 'Loudoun County',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation in Leesburg, VA — serving historic Old Town Leesburg and surrounding neighborhoods.',
    intro:
      "Leesburg mixes a historic Old Town core of small shops and restaurants with newer suburban subdivisions and the rural edge of Loudoun's wine country. As the county seat, it also has a steady base of professional and government-adjacent offices. We serve homeowners and businesses across all of it.",
    residential:
      "From older homes near the historic district to newer subdivisions on the town's edges, Leesburg properties vary widely in age and layout. That range is exactly why we start with an assessment — an established home and a five-year-old build call for different wiring and placement approaches.",
    commercial:
      "Old Town's independent shops and restaurants have different security needs than an office park on the outskirts. We plan camera coverage and access control around each property, whether that's storefront and register visibility or controlled entry for a professional office.",
    nearby: ['ashburn-va', 'sterling-va'],
    faqs: [
      {
        q: 'Can you install cameras on an older home near Old Town?',
        a: 'Yes. Older construction sometimes needs more careful cable routing, and we plan for that during the assessment so the finished install stays clean and unobtrusive.',
      },
      {
        q: 'Do you serve small shops and restaurants in downtown Leesburg?',
        a: 'We do. Storefront and point-of-sale coverage, back-entry visibility, and simple access control are common requests for Old Town businesses.',
      },
      {
        q: 'Do you cover properties on the more rural edges of Leesburg?',
        a: 'Where they fall within our Northern Virginia service territory, yes — larger or rural properties just need coverage and storage planned around the distances involved. Confirm your specific location with us.',
      },
    ],
  },
  {
    slug: 'sterling-va',
    city: 'Sterling',
    group: 'Loudoun County',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation in Sterling, VA, near Route 28 and Dulles Airport, for homes, offices, and warehouses.',
    intro:
      "Sterling sits right next to Washington Dulles International Airport, with a strong logistics, warehouse, and data-center corridor along Route 28 alongside established residential neighborhoods built from the 1980s onward. We handle both the commercial and residential sides.",
    residential:
      "Sterling's established neighborhoods often already have some form of security in place, so upgrades and replacements are common here — swapping aging cameras, improving coverage, and modernizing recording and remote viewing on homes that were wired years ago.",
    commercial:
      "The Route 28 and airport-adjacent corridor means warehouses, distribution, and light-industrial properties are a big part of Sterling's commercial mix. These sites need dependable coverage of loading areas, yards, and entry points, plus access control that scales across larger footprints.",
    nearby: ['ashburn-va', 'herndon-va'],
    faqs: [
      {
        q: 'Do you handle warehouse and light-industrial properties?',
        a: 'Yes — larger sites near the Route 28 corridor are a common request. We plan coverage for loading areas, yards, and entry points, with recording and access control sized to the property.',
      },
      {
        q: 'Can you upgrade the aging cameras on my Sterling home?',
        a: 'Definitely. Many Sterling homes were wired years ago; we assess what’s there and recommend what to keep, replace, or re-cable rather than starting from scratch unnecessarily.',
      },
      {
        q: 'Does proximity to the airport affect installation?',
        a: 'For standard camera and access-control work, no — it mainly shapes the commercial character of the area. We plan each system around the specific property regardless.',
      },
    ],
  },
  {
    slug: 'herndon-va',
    city: 'Herndon',
    group: 'Fairfax County & Area',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation for homes and businesses in Herndon, VA, near the Dulles Tech Corridor and Metro Silver Line.',
    intro:
      "Herndon pairs a historic small-town downtown with the tech and software office corridor along the Dulles Toll Road, and Metro Silver Line access has brought more density and development. We serve both the residential neighborhoods and the business corridor.",
    residential:
      "Herndon's housing runs from older homes near the town center to newer developments, so residential work here spans fresh installations and upgrades alike. We plan coverage around entries, driveways, and the specifics of each property.",
    commercial:
      "The Dulles Tech Corridor gives Herndon a concentration of office and technology tenants who often care about controlled entry, visitor management, and reliable coverage of shared building areas. We design access control and cameras to match how a workplace actually runs.",
    nearby: ['reston-va', 'sterling-va'],
    faqs: [
      {
        q: 'Do you work with office and tech-corridor tenants?',
        a: 'Yes — controlled entry, visitor management, and coverage of shared areas are common for Herndon offices. We design access and camera systems around your team structure and hours.',
      },
      {
        q: 'Can you install near downtown Herndon’s older homes?',
        a: 'We can. Older homes near the town center sometimes need more careful routing, which we plan for during the assessment.',
      },
      {
        q: 'Do you support remote viewing for a business with staff off-site?',
        a: 'Yes — remote and mobile viewing is standard in the systems we design, so you can check coverage across locations from wherever you are.',
      },
    ],
  },
  {
    slug: 'reston-va',
    city: 'Reston',
    group: 'Fairfax County & Area',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation for Reston, VA homes and businesses — townhomes, condos, and Reston Town Center offices and retail.',
    intro:
      "Reston is a master-planned community with a high share of townhomes and condos, walkable village centers, and the mixed-use hub of Reston Town Center with its offices and retail. Metro Silver Line stations have added to the density. We serve homeowners and businesses throughout.",
    residential:
      "With so many townhomes and condos, Reston residential work is often about smart coverage of shared entries, rear access, and garages rather than sprawling perimeters — and about respecting the community's design standards. We plan installs to be clean and appropriately scaled.",
    commercial:
      "Reston Town Center and the surrounding corridors host offices, retail, and restaurants that need dependable coverage and, frequently, access control for staff and after-hours entry. We design systems that fit multi-tenant and mixed-use realities.",
    nearby: ['herndon-va', 'vienna-va'],
    faqs: [
      {
        q: 'Do you install in condos and townhomes with shared walls?',
        a: 'Yes — this is common in Reston. We focus coverage on entries, rear access, and garages, and plan cabling that respects shared structures and community guidelines.',
      },
      {
        q: 'Can you work with Reston Town Center-area businesses?',
        a: 'We do — retail, office, and restaurant tenants in and around Town Center often need storefront coverage plus staff and after-hours access control.',
      },
      {
        q: 'Will an install comply with community design standards?',
        a: 'We aim for clean, unobtrusive installations and are glad to work within reasonable placement guidelines that master-planned communities like Reston often have.',
      },
    ],
  },
  {
    slug: 'chantilly-va',
    city: 'Chantilly',
    group: 'Fairfax County & Area',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation in Chantilly, VA for homes and light-industrial properties near Dulles Airport.',
    intro:
      "Chantilly combines suburban residential subdivisions with a light-industrial and warehouse corridor, helped by its proximity to Dulles Airport. We serve both the neighborhoods and the commercial and light-industrial properties in the area.",
    residential:
      "Chantilly's subdivisions are largely family neighborhoods where homeowners want reliable coverage of entries, driveways, and yards. We plan and install systems that fit the property rather than a generic package.",
    commercial:
      "The area's light-industrial and warehouse properties need coverage of larger footprints — loading and storage areas, yards, and entry points — with access control that can grow. We design for that scale while keeping recording and management straightforward.",
    nearby: ['centreville-va', 'sterling-va'],
    faqs: [
      {
        q: 'Do you cover light-industrial and warehouse sites in Chantilly?',
        a: 'Yes — larger properties are common here. We plan coverage of storage and loading areas, yards, and entries, with scalable access control.',
      },
      {
        q: 'Can you design a system for a standard Chantilly subdivision home?',
        a: 'Of course. Entry, driveway, and yard coverage tailored to your lot is a typical residential request, and we size the system to match.',
      },
      {
        q: 'Do you handle both cameras and access control on one project?',
        a: 'Yes — we design and install both, and having one team handle the whole system keeps configuration and documentation consistent.',
      },
    ],
  },
  {
    slug: 'centreville-va',
    city: 'Centreville',
    group: 'Fairfax County & Area',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation for Centreville, VA homes and businesses along the Route 29 and Route 28 corridors.',
    intro:
      "Centreville is largely a family-oriented community of single-family homes and townhome neighborhoods, with commercial activity along the Route 29 and Route 28 corridors and a historic Centreville area. We serve homeowners and local businesses throughout.",
    residential:
      "Most residential work in Centreville is about giving families dependable visibility around the home — entries, driveways, play areas, and rear access — with remote viewing so you can check in from anywhere. We plan placement around how you use the property.",
    commercial:
      "Centreville's businesses along the main corridors — retail, service, and office — typically want storefront and entry coverage plus straightforward access control. We design systems that fit smaller commercial footprints without over-complicating them.",
    nearby: ['chantilly-va', 'fairfax-va'],
    faqs: [
      {
        q: 'Do you focus on family-home coverage in Centreville?',
        a: 'A lot of our Centreville residential work is exactly that — reliable entry, driveway, and yard coverage with easy remote viewing for busy households.',
      },
      {
        q: 'Can you keep a small-business system simple?',
        a: 'Yes — for smaller Centreville storefronts and offices we right-size the system so it covers what matters without unnecessary complexity or cost.',
      },
      {
        q: 'Do you offer ongoing support after installation?',
        a: 'We do. Support and maintenance keep cameras online and access permissions current as your household or business changes.',
      },
    ],
  },
  {
    slug: 'fairfax-va',
    city: 'Fairfax',
    group: 'Fairfax County & Area',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation in the City of Fairfax, VA — Old Town Fairfax and George Mason University-area properties.',
    intro:
      "The City of Fairfax is an independent city with its own established single-family neighborhoods, the Old Town Fairfax historic district, and a notable base of off-campus rental housing near George Mason University. We serve homeowners, landlords, and businesses across the city.",
    residential:
      "Fairfax residential needs range from long-held family homes to rental properties near GMU, where owners often want reliable exterior coverage and simple, manageable access for tenants. We tailor each system to whether it's an owner-occupied home or a managed rental.",
    commercial:
      "Old Town Fairfax businesses and the city's offices and services need storefront and entry coverage plus access control suited to their hours and staff. We design around each property rather than applying a one-size template.",
    nearby: ['centreville-va', 'vienna-va'],
    faqs: [
      {
        q: 'Is the City of Fairfax part of Fairfax County?',
        a: 'No — the City of Fairfax is an independent city under Virginia law, even though the county shares the name and its government seat is located there. We serve the city and nearby communities alike.',
      },
      {
        q: 'Do you work with rental properties near George Mason University?',
        a: 'Yes — rental housing near GMU is common here. We design coverage and tenant-appropriate access control that owners and property managers can administer easily.',
      },
      {
        q: 'Can you install in the Old Town Fairfax historic area?',
        a: 'We can, with attention to clean routing and unobtrusive placement that suits older and historic properties.',
      },
    ],
  },
  {
    slug: 'vienna-va',
    city: 'Vienna',
    group: 'Fairfax County & Area',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation in Vienna, VA — established neighborhoods near Tysons and the Vienna Main Street business district.',
    intro:
      "Vienna is a quieter, established town of larger residential lots with the W&OD Trail running through it and a small-town Main Street business district — all right next to the major commercial hub of Tysons. We serve Vienna's homeowners and local businesses.",
    residential:
      "With larger lots and established homes, Vienna residential work often involves perimeter and yard coverage across more ground, plus thoughtful placement for homes that were built before structured cabling was common. We plan wiring and coverage carefully for these properties.",
    commercial:
      "Vienna's Main Street district and its proximity to Tysons mean a mix of independent local businesses and professional offices. We design storefront coverage and access control for smaller businesses, and can scale up for offices near the Tysons corridor.",
    nearby: ['fairfax-va', 'mclean-va'],
    faqs: [
      {
        q: 'Can you cover a larger lot with more ground to monitor?',
        a: 'Yes — larger Vienna properties often need perimeter and yard coverage planned around distances and sight lines, along with storage sized for more cameras. We handle that in the design.',
      },
      {
        q: 'Do you install in older Vienna homes without existing wiring?',
        a: 'We do. Homes built before structured cabling was common just need more deliberate routing, which we plan during the assessment.',
      },
      {
        q: 'Do you serve businesses on Vienna’s Main Street?',
        a: 'Yes — storefront and entry coverage plus simple access control are common requests for the independent businesses in the Main Street district.',
      },
    ],
  },
  {
    slug: 'mclean-va',
    city: 'McLean',
    group: 'Fairfax County & Area',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation in McLean, VA, near the Tysons corporate and retail hub.',
    intro:
      "McLean is home to some of the region's most substantial residential properties and sits immediately next to the Tysons corporate and retail hub, giving it a mix of large executive homes and professional-services offices. We serve both ends of that spectrum.",
    residential:
      "Larger McLean homes often call for comprehensive, discreet coverage — multiple entries, grounds, and outbuildings — configured to be reliable and easy to manage. We plan and install systems that match the property without looking heavy-handed, and integrate access control where it fits.",
    commercial:
      "The proximity to Tysons means professional offices and corporate-adjacent businesses that value controlled access, visitor management, and dependable recording. We design systems that fit a professional environment and scale with the organization.",
    nearby: ['vienna-va', 'falls-church-va'],
    faqs: [
      {
        q: 'Can you provide discreet coverage for a larger McLean property?',
        a: 'Yes — comprehensive coverage of multiple entries, grounds, and outbuildings, planned to be effective while staying visually unobtrusive, is a common McLean request.',
      },
      {
        q: 'Do you integrate cameras and access control together?',
        a: 'We do — a unified design keeps a larger property’s system coherent, with consistent configuration, user management, and documentation.',
      },
      {
        q: 'Do you work with professional offices near Tysons?',
        a: 'Yes — controlled entry, visitor management, and reliable recording for professional environments near the Tysons corridor are within our commercial work.',
      },
    ],
  },
  {
    slug: 'falls-church-va',
    city: 'Falls Church',
    group: 'Fairfax County & Area',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation in Falls Church, VA — walkable neighborhoods, local shops, and small businesses.',
    intro:
      "Falls Church is a compact independent city — nicknamed “The Little City” — of roughly two square miles, with a walkable downtown of local shops and restaurants and ongoing mixed-use redevelopment along Route 7. It sits between Arlington and Fairfax County. We serve its homeowners and small businesses.",
    residential:
      "Falls Church's compact, walkable neighborhoods often mean homes close to the street and to neighbors, so thoughtful camera placement and privacy-aware coverage matter. We plan systems that give you visibility of your own property cleanly.",
    commercial:
      "The downtown and Route 7 redevelopment areas host local shops, restaurants, and small businesses that typically want storefront, entry, and register coverage plus manageable access control. We size systems to fit small-business realities.",
    nearby: ['mclean-va', 'arlington-va'],
    faqs: [
      {
        q: 'Is Falls Church part of a county?',
        a: 'No — Falls Church is a small independent city under Virginia law, not part of a county, even though it sits between Arlington and Fairfax County. We serve the city directly.',
      },
      {
        q: 'How do you handle privacy on closely spaced properties?',
        a: 'In compact neighborhoods we plan camera angles to cover your own property and entries while being considerate of neighbors — something we walk through during the assessment.',
      },
      {
        q: 'Do you serve the small businesses downtown?',
        a: 'Yes — storefront, entry, and point-of-sale coverage plus simple access control are common for Falls Church’s local shops and restaurants.',
      },
    ],
  },
  {
    slug: 'arlington-va',
    city: 'Arlington',
    group: 'Arlington',
    metaDescription:
      'Smart home, Wi-Fi, security, and technology installation in Arlington, VA for condos, offices, and properties across Rosslyn-Ballston and National Landing.',
    intro:
      "Arlington is a dense, urban jurisdiction just across the Potomac from Washington, D.C., with high-rise condo and apartment corridors like Rosslyn-Ballston and National Landing, extensive Metro access, and a large office and government-adjacent employment base. Its housing skews heavily toward condos and apartments rather than detached homes.",
    residential:
      "Because so much of Arlington living is condos and apartments, residential work here often centers on unit-level entry, smart locks, and coverage of private entrances within shared buildings — planned to respect building rules. We tailor systems to urban, multi-unit living rather than sprawling single-family lots.",
    commercial:
      "Given the concentration of offices and government- and defense-related employers, Arlington commercial work frequently emphasizes controlled entry, visitor management, and dependable coverage for professional and multi-tenant environments. We design access and camera systems to match those priorities.",
    nearby: ['falls-church-va'],
    faqs: [
      {
        q: 'Do you install in Arlington condos and apartment buildings?',
        a: 'Yes — much of Arlington is multi-unit living. We focus on unit entries, smart locks, and private-entrance coverage, and plan work to respect building management rules.',
      },
      {
        q: 'Do you serve Washington, D.C. or Maryland too?',
        a: 'No — our service territory is Northern Virginia only. We do not currently serve Washington, D.C. or Maryland.',
      },
      {
        q: 'Can you work with office and multi-tenant commercial buildings?',
        a: 'Yes — controlled entry, visitor management, and reliable coverage for professional and multi-tenant environments are core to our Arlington commercial work.',
      },
    ],
  },
];

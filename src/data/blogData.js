import blogCyberImg from '../assets/images/blog_cybersecurity_soc_1794555233056.jpg';
import blogDatacenterImg from '../assets/images/banner_datacenter_infra_1794555231394.jpg';
import blogDigitalImg from '../assets/images/blog_digital_growth_1794555251015.jpg';
import blogItadImg from '../assets/images/blog_itad_warehouse_1794630831125.jpg';

export const blogData = [
  {
    id: 'post-1',
    slug: 'zero-trust-network-architecture-for-distributed-enterprises',
    title: 'Implementing Zero-Trust Network Architecture Across Distributed Branch Offices',
    category: 'Cybersecurity',
    date: 'October 18, 2026',
    readTime: '6 min read',
    author: {
      name: 'Arjun Mehta',
      role: 'Principal Network Security Architect',
    },
    image: blogCyberImg,
    excerpt:
      'How modern enterprises replace legacy perimeter VPN bottlenecks with identity-aware micro-segmentation, continuous posture checks, and unified SD-WAN security.',
    sections: [
      {
        heading: 'Why Perimeter-Only Security No Longer Holds',
        body: 'Distributed SaaS workloads and hybrid workforces mean corporate traffic no longer travels cleanly through a single headquarters firewall. When a branch endpoint or remote credential is compromised, flat internal networks allow rapid lateral movement across critical servers.',
      },
      {
        heading: 'Three Pillars of Practical Zero-Trust Rollout',
        body: 'Rather than disrupting operations with a rip-and-replace overhaul, enterprise IT teams succeed by phasing identity verification, VLAN micro-segmentation, and managed Endpoint Detection & Response (EDR) alongside existing Cisco and next-gen firewall infrastructure.',
      },
      {
        heading: 'Measurable Operational Outcomes',
        body: 'Organizations adopting segmented Zero-Trust topologies consistently reduce threat dwell time from days to minutes while accelerating remote user onboarding with policy-driven access templates.',
      },
    ],
  },
  {
    id: 'post-2',
    slug: 'structured-cabling-and-data-center-readiness-checklist',
    title: 'Data Center Readiness: Why Physical Layer Cabling Dictates Cloud-Scale Uptime',
    category: 'Infrastructure',
    date: 'October 04, 2026',
    readTime: '5 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Director of Infrastructure Operations',
    },
    image: blogDatacenterImg,
    excerpt:
      'From Cat6A shielding and OM4 fiber optic backbones to Fluke certification and airflow management, discover what separates resilient racks from hidden outages.',
    sections: [
      {
        heading: 'The Overlooked Foundation of Network Reliability',
        body: 'Even the most sophisticated routing core cannot compensate for uncertified terminations, congested patch panels, or undocumented cross-connects inside MDF and IDF closets.',
      },
      {
        heading: 'Standards-Based Dressing and Certification',
        body: 'Fluke Networks port certification, disciplined bend-radius management, and color-coded trunk labeling enable rapid fault isolation during urgent maintenance windows.',
      },
      {
        heading: 'Coordinating Smart Hands Inside Colocation Facilities',
        body: 'Standardized rack elevations and photographic runbooks allow regional Smart Hands engineers to execute server swaps and optic replacements safely without dispatching senior architects.',
      },
    ],
  },
  {
    id: 'post-3',
    slug: 'technical-seo-and-core-web-vitals-for-b2b-growth',
    title: 'Technical SEO & Web Performance: Turning Corporate Sites into Pipeline Engines',
    category: 'Digital Growth',
    date: 'September 21, 2026',
    readTime: '7 min read',
    author: {
      name: 'David Chen',
      role: 'Head of Digital Strategy',
    },
    image: blogDigitalImg,
    excerpt:
      'Aligning semantic architecture, sub-second Core Web Vitals, and structured buyer-intent content to capture measurable B2B inbound opportunities.',
    sections: [
      {
        heading: 'Performance as an Acquisition Multiplier',
        body: 'Enterprise buyers evaluate technical credibility within seconds of landing on your site. Bloated scripts and slow Largest Contentful Paint directly erode both search visibility and form conversion rates.',
      },
      {
        heading: 'Structuring Content for Commercial Intent',
        body: 'High-performing B2B portals pair crisp service taxonomy with technical proof points, clear SLAs, and friction-free consultation workflows.',
      },
      {
        heading: 'Continuous Measurement & Governance',
        body: 'Combining server-side conversion tracking with ongoing website maintenance ensures search equity compounds quarter after quarter without regression.',
      },
    ],
  },
  {
    id: 'post-4',
    slug: 'nist-800-88-compliant-itad-and-hardware-lifecycle',
    title: 'Closing the Hardware Loop: NIST 800-88 ITAD & Stock Storage Best Practices',
    category: 'IT Operations',
    date: 'September 09, 2026',
    readTime: '5 min read',
    author: {
      name: 'Priya Nair',
      role: 'IT Lifecycle & Compliance Lead',
    },
    image: blogItadImg,
    excerpt:
      'How centralized IT stock warehousing and certified IT Asset Disposition protect sensitive corporate data while recovering capital on retired equipment.',
    sections: [
      {
        heading: 'Managing Distributed Endpoint Returns',
        body: 'With remote teams spanning multiple cities, unreturned or un-wiped laptops create simultaneous security exposure and unnecessary procurement spend.',
      },
      {
        heading: 'Auditable Chain of Custody',
        body: 'Centralized stock storage hubs paired with NIST 800-88 media sanitization provide serialized proof of data destruction and rapid re-kitting for healthy hardware.',
      },
      {
        heading: 'Environmental & Financial Recovery',
        body: 'Certified remarketing offsets new hardware refresh cycles while keeping retired electronics out of landfills under R2 compliance.',
      },
    ],
  },
];

export const getPostBySlug = (slug) =>
  blogData.find((post) => post.slug === slug);

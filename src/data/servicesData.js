export const SERVICE_CATEGORIES = {
  IT_SUPPORT: 'IT Support Services',
  DIGITAL_MARKETING: 'Digital Marketing Services',
};

export const servicesData = [
  // IT SUPPORT SERVICES (15)
  {
    id: 'it-1',
    slug: 'break-fix-support',
    title: 'Break-Fix Support',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'Wrench',
    shortDescription:
      'Rapid on-demand hardware diagnostics, component replacement, and emergency incident restoration without long-term retainers.',
    heroSummary:
      'Minimize unplanned operational downtime with certified field technicians dispatched on strict SLA response windows for workstation, server, and peripheral hardware failures.',
    slaMetric: '4-Hour Onsite Dispatch',
    deliverables: [
      'Hardware fault isolation and root-cause diagnostics',
      'Server, switch, and endpoint component replacement',
      'OS recovery, firmware patching, and BIOS restoration',
      'Post-incident verification and preventive check report',
    ],
    benefits: [
      'Pay-as-you-go operational flexibility with zero idle overhead',
      'Multi-vendor hardware coverage across Dell, HPE, Lenovo, and Cisco',
      'Seamless escalation path into managed infrastructure care',
    ],
    faqs: [
      {
        q: 'How fast can a break-fix engineer arrive onsite?',
        a: 'In major metro corridors, our priority SLA dispatches a certified technician within 4 hours of ticket triage.',
      },
      {
        q: 'Do you support legacy server and workstation hardware?',
        a: 'Yes. We maintain regional spares inventories for both current-generation and legacy enterprise hardware platforms.',
      },
    ],
  },
  {
    id: 'it-2',
    slug: 'managed-it-services',
    title: 'Managed IT Services',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'ServerCog',
    shortDescription:
      'Proactive 24/7 infrastructure monitoring, automated patch governance, and predictable SLA-backed IT operations.',
    heroSummary:
      'Transition from reactive firefighting to continuous operational stability with dedicated remote monitoring, automated remediation, and strategic vCIO roadmapping.',
    slaMetric: '99.98% Uptime Target',
    deliverables: [
      '24/7/365 NOC monitoring for servers, endpoints, and cloud workloads',
      'Automated OS, third-party application, and security patching',
      'Backup verification, disaster recovery drills, and capacity planning',
      'Monthly executive health scorecards and lifecycle budgeting',
    ],
    benefits: [
      'Predictable fixed monthly operational expenditure',
      'Early anomaly detection prior to business-hour disruption',
      'Unified visibility across hybrid cloud and on-premise environments',
    ],
    faqs: [
      {
        q: 'Can Managed IT Services co-exist with our internal IT team?',
        a: 'Yes. Our co-managed model augments your internal staff with 24/7 NOC coverage, tier-3 escalations, and automated tooling.',
      },
      {
        q: 'How do you onboard an existing multi-site environment?',
        a: 'We conduct a structured 14-day discovery audit, deploy lightweight RMM agents, document topologies, and establish baseline SLAs.',
      },
    ],
  },
  {
    id: 'it-3',
    slug: 'network-security',
    title: 'Network Security',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'ShieldCheck',
    shortDescription:
      'Perimeter firewalls, micro-segmentation, VPN architecture, and continuous intrusion prevention for distributed offices.',
    heroSummary:
      'Harden every ingress and egress pathway across corporate campuses, branch offices, and remote workforces with defense-in-depth network controls.',
    slaMetric: 'Zero-Trust Perimeter',
    deliverables: [
      'Next-generation firewall (NGFW) deployment and rule optimization',
      'VLAN micro-segmentation and Zero-Trust Network Access (ZTNA)',
      'Encrypted site-to-site SD-WAN and remote VPN architecture',
      'Continuous packet inspection and intrusion prevention tuning',
    ],
    benefits: [
      'Prevents lateral threat movement across corporate subnets',
      'Maintains regulatory compliance for ISO 27001, SOC 2, and PCI-DSS',
      'Eliminates single points of failure with redundant HA firewall pairs',
    ],
    faqs: [
      {
        q: 'Which firewall vendors do your network security engineers manage?',
        a: 'Our certified team supports Cisco Secure Firewall, Fortinet FortiGate, Palo Alto Networks, and Meraki MX appliances.',
      },
      {
        q: 'Do you audit existing firewall rules for security gaps?',
        a: 'Yes, every engagement begins with a shadow-rule and unused-port cleanup to reduce your attack surface immediately.',
      },
    ],
  },
  {
    id: 'it-4',
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'LockKeyhole',
    shortDescription:
      'Managed EDR, SOC threat hunting, vulnerability assessments, and compliance readiness against modern cyber threats.',
    heroSummary:
      'Protect critical enterprise data and intellectual property with continuous endpoint detection, rapid containment playbooks, and proactive vulnerability management.',
    slaMetric: '< 15 Min Threat Triage',
    deliverables: [
      'Managed Endpoint Detection & Response (EDR/XDR) across all devices',
      'Scheduled external/internal vulnerability scanning and remediation',
      'Email security, DMARC enforcement, and phishing simulation programs',
      'Incident response readiness and immutable ransomware recovery backups',
    ],
    benefits: [
      '24/7 containment stops ransomware encryption before spread',
      'Audit-ready compliance evidence for insurers and enterprise clients',
      'Reduces human-factor risk through targeted security hygiene training',
    ],
    faqs: [
      {
        q: 'What happens if an endpoint triggers a high-severity alert at night?',
        a: 'Our SOC isolates the compromised host from the network immediately, terminates malicious processes, and notifies your escalation lead.',
      },
      {
        q: 'Can you assist with cyber insurance security questionnaires?',
        a: 'Yes. We map and implement MFA, EDR, and immutable backup controls required by major underwriters.',
      },
    ],
  },
  {
    id: 'it-5',
    slug: 'structured-cabling',
    title: 'Structured Cabling',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'Cable',
    shortDescription:
      'Certified Cat6A copper, fiber optic backbones, IDF/MDF rack dressing, and Fluke-tested physical layer builds.',
    heroSummary:
      'Build a clean, standards-compliant physical network foundation engineered for high-density Wi-Fi, VoIP, and multi-gigabit data center throughput.',
    slaMetric: '100% Fluke Certified',
    deliverables: [
      'Cat6 / Cat6A horizontal cabling and OM4/OS2 fiber optic backbones',
      'MDF and IDF server cabinet build-outs, patch panels, and cable dressing',
      'Fluke Networks certification testing with port-by-port documentation',
      'Decommissioning of legacy abandoned plenum cabling',
    ],
    benefits: [
      'Eliminates intermittent packet loss caused by poor terminations',
      'Clean color-coded labeling cuts future troubleshooting time in half',
      'Built to TIA/EIA-568 commercial building standards',
    ],
    faqs: [
      {
        q: 'Do you provide full test reports after installation?',
        a: 'Every drop is Fluke-certified and delivered with a PDF port map and attenuation certification bundle.',
      },
      {
        q: 'Can cabling work be scheduled outside business hours?',
        a: 'Yes, we routinely perform overnight and weekend cabling cutovers to avoid disrupting active office staff.',
      },
    ],
  },
  {
    id: 'it-6',
    slug: 'cisco-support',
    title: 'Cisco Support',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'Network',
    shortDescription:
      'Specialized Cisco Catalyst, Nexus, Meraki, and ASA engineering, IOS upgrades, and high-availability routing.',
    heroSummary:
      'Optimize mission-critical Cisco switching, routing, wireless, and collaboration infrastructure with CCNP and CCIE-caliber engineering expertise.',
    slaMetric: 'CCNP / CCIE Escalation',
    deliverables: [
      'Catalyst and Nexus core/distribution switch configuration and stacking',
      'Cisco Meraki cloud-managed SD-WAN and Wi-Fi 6E deployments',
      'IOS-XE firmware lifecycle management and security advisory patching',
      'BGP, OSPF, and HSRP/VRRP redundancy architecture optimization',
    ],
    benefits: [
      'Rapid resolution of complex routing loops and spanning-tree bottlenecks',
      'Consistent golden configuration templates across global branches',
      'Proactive SmartNet lifecycle tracking and hardware refresh planning',
    ],
    faqs: [
      {
        q: 'Do you support both traditional Cisco CLI and Meraki dashboards?',
        a: 'Yes, our network engineers manage classic IOS/NX-OS environments as well as full-stack Meraki cloud topologies.',
      },
      {
        q: 'Can you assist with a live core switch migration?',
        a: 'We write detailed MOPs (Methods of Procedure) with instant rollback plans and execute cutovers during maintenance windows.',
      },
    ],
  },
  {
    id: 'it-7',
    slug: 'data-center-support',
    title: 'Data Center Support',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'Database',
    shortDescription:
      'Remote Hands & Eyes, rack-and-stack deployments, power/cooling audits, and colocation maintenance.',
    heroSummary:
      'Extend your infrastructure engineering reach directly inside Tier III and Tier IV colocation facilities with disciplined Smart Hands execution.',
    slaMetric: '24/7 Smart Hands',
    deliverables: [
      'Server, SAN storage, and top-of-rack switch rack-and-stack',
      'Fiber cross-connect patching, SFP optics swaps, and loop testing',
      'PDU power balancing, hot-aisle airflow checks, and KVM console access',
      'Escorted vendor access and real-time photographic verification',
    ],
    benefits: [
      'Eliminates costly engineering travel to remote colocation cages',
      'Strict change-control adherence with detailed visual sign-off',
      'Faster hardware RMA swaps inside locked server racks',
    ],
    faqs: [
      {
        q: 'How do you document physical work inside a colocation cage?',
        a: 'Technicians upload high-resolution before/after rack photos, serial scans, and port verification logs to your ticket.',
      },
      {
        q: 'Do you coordinate directly with colocation facility security?',
        a: 'Yes, we manage access tickets, LOAs, and badge clearances prior to scheduled maintenance windows.',
      },
    ],
  },
  {
    id: 'it-8',
    slug: 'end-user-support',
    title: 'End User Support',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'Laptop',
    shortDescription:
      'Deskside white-glove support, endpoint provisioning, Microsoft 365 administration, and onboarding kits.',
    heroSummary:
      'Keep hybrid and in-office employees productive from day one with responsive deskside assistance, zero-touch laptop imaging, and SaaS identity management.',
    slaMetric: '96% CSAT Rating',
    deliverables: [
      'Windows and macOS Autopilot / MDM zero-touch provisioning',
      'Onsite deskside troubleshooting for laptops, docks, and AV rooms',
      'Microsoft 365, Google Workspace, and SSO/MFA administration',
      'Structured new-hire onboarding and offboarding access revocation',
    ],
    benefits: [
      'New hires receive ready-to-work devices before their start date',
      'Reduces employee downtime from conference room or VPN glitches',
      'Clear communication in plain language without technical jargon',
    ],
    faqs: [
      {
        q: 'Do you support mixed Windows and Apple macOS fleets?',
        a: 'Yes, we manage Intune, Jamf Pro, and Kandji policies across hybrid Windows and macOS enterprise fleets.',
      },
      {
        q: 'Can you provide dedicated onsite deskside technicians?',
        a: 'Yes, we offer both scheduled recurring onsite days and full-time embedded deskside engineers.',
      },
    ],
  },
  {
    id: 'it-9',
    slug: 'outsourced-it-resources',
    title: 'Outsourced IT Resources',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'Users',
    shortDescription:
      'Dedicated L1–L3 engineers, project leads, and certified technicians integrated directly into your IT organization.',
    heroSummary:
      'Scale technical capacity rapidly for strategic initiatives, regional coverage gaps, or ongoing operations without lengthy recruitment cycles.',
    slaMetric: '10-Day Deployment',
    deliverables: [
      'Vetted L1, L2, and L3 systems and network engineering talent',
      'Short-term project augmentation or multi-year embedded staffing',
      'Aligned reporting, ticketing, and escalation inside your ITSM',
      'Continuous bench backup ensuring zero coverage gaps during PTO',
    ],
    benefits: [
      'Eliminates recruiting overhead and long-term HR liabilities',
      'Flexible scaling up or down alongside business expansion',
      'Resources backed by AVITAJ SOLUTIONS senior engineering architects',
    ],
    faqs: [
      {
        q: 'How are outsourced engineers vetted before placement?',
        a: 'Every candidate passes technical lab assessments, background screening, and communication evaluations matched to your stack.',
      },
      {
        q: 'Can outsourced engineers work directly inside our ServiceNow or Jira?',
        a: 'Yes, our resources adopt your internal ITSM workflows, documentation standards, and security policies.',
      },
    ],
  },
  {
    id: 'it-10',
    slug: 'remote-it-support',
    title: 'Remote IT Support',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'Headphones',
    shortDescription:
      'Instant encrypted remote troubleshooting, rapid ticket resolution, and continuous support for distributed teams.',
    heroSummary:
      'Resolve over 85% of daily technical incidents on the first contact with secure, audited remote session tooling for distributed and remote personnel.',
    slaMetric: '85% First-Contact Fix',
    deliverables: [
      'Encrypted, permission-based remote desktop troubleshooting',
      'Software deployment, license assignment, and VPN diagnostics',
      'Multi-channel intake via phone, portal, email, and Slack/Teams',
      'Full session audit logs and knowledge-base ticket tagging',
    ],
    benefits: [
      'Immediate support regardless of employee geography or time zone',
      'Faster mean-time-to-resolution without waiting for onsite visits',
      'Transparent ticket status updates at every stage',
    ],
    faqs: [
      {
        q: 'Is remote access secure and compliant with enterprise privacy policies?',
        a: 'Yes. Sessions require explicit user consent or MFA-authenticated admin approval and are encrypted end-to-end.',
      },
      {
        q: 'What hours does your remote support desk operate?',
        a: 'We offer extended business-hour plans as well as true 24/7/365 follow-the-sun coverage.',
      },
    ],
  },
  {
    id: 'it-11',
    slug: 'it-rollouts',
    title: 'IT Rollouts',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'Layers',
    shortDescription:
      'Multi-site hardware refreshes, branch office openings, POS upgrades, and coordinated national deployments.',
    heroSummary:
      'Execute synchronized technology refreshes across dozens or hundreds of locations on schedule, on budget, and with unified configuration standards.',
    slaMetric: 'Multi-Site Precision',
    deliverables: [
      'Pre-staging, asset tagging, and golden image configuration',
      'Coordinated dispatch of regional field teams across all sites',
      'POS, digital signage, Wi-Fi, and workstation swap cutovers',
      'Daily rollout command dashboard and site sign-off packets',
    ],
    benefits: [
      'Single point of project accountability from warehouse to go-live',
      'Consistent store or branch configurations across every geography',
      'Zero disruption to daytime retail or corporate operations',
    ],
    faqs: [
      {
        q: 'How many locations can you support during a synchronized rollout?',
        a: 'Our project management office coordinates rollouts ranging from 5 regional offices to 200+ national retail sites.',
      },
      {
        q: 'Do you handle legacy equipment removal during the rollout?',
        a: 'Yes, we pack, manifest, and route decommissioned devices straight into our ITAD or stock storage pipeline.',
      },
    ],
  },
  {
    id: 'it-12',
    slug: 'it-stock-storage',
    title: 'IT Stock Storage',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'Warehouse',
    shortDescription:
      'Climate-controlled hardware warehousing, serial-level inventory tracking, pre-imaging, and rapid courier dispatch.',
    heroSummary:
      'Eliminate office closet clutter and speed up employee provisioning by storing, imaging, and dispatching your IT hardware from our secure logistics hubs.',
    slaMetric: 'Same-Day Kitting',
    deliverables: [
      'Secure, climate-controlled, CCTV-monitored warehousing',
      'Real-time asset inventory portal tracked by serial and MAC ID',
      'Pre-deployment BIOS updates, OS imaging, and accessory kitting',
      'Tracked return-box logistics for offboarding employees',
    ],
    benefits: [
      'Ready-to-ship spare units reduce employee downtime to 24 hours',
      'Accurate asset accountability across distributed remote workforces',
      'Consolidates bulk procurement savings without office storage limits',
    ],
    faqs: [
      {
        q: 'Can we view real-time stock counts across our hardware models?',
        a: 'Yes. You receive live inventory visibility with automated low-stock reorder alerts.',
      },
      {
        q: 'Do you clean and sanitize returned laptops before restocking?',
        a: 'Every returned unit undergoes hardware diagnostics, cosmetic cleaning, secure wipe/re-image, and grading.',
      },
    ],
  },
  {
    id: 'it-13',
    slug: 'service-desk-support',
    title: 'Service Desk Support',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'LifeBuoy',
    shortDescription:
      'ITIL-aligned L1–L3 ticketing operations, SLA governance, knowledge-base curation, and root-cause trend reduction.',
    heroSummary:
      'Deliver a structured, metrics-driven IT service desk that elevates employee satisfaction while systematically driving down recurring ticket volume.',
    slaMetric: 'ITIL v4 Aligned',
    deliverables: [
      'Multi-tier L1/L2/L3 incident and service request fulfillment',
      'Custom SLA escalation matrices and VIP executive support queues',
      'Self-service portal optimization and FAQ knowledge-base authoring',
      'Monthly Pareto ticket-trend analysis to eliminate root causes',
    ],
    benefits: [
      'Measurable reduction in repeat incidents quarter over quarter',
      'Consistent, courteous support experiences for every department',
      'Executive SLA compliance dashboards with zero blind spots',
    ],
    faqs: [
      {
        q: 'Are your service desk workflows ITIL-compliant?',
        a: 'Yes, our incident, problem, and change management processes follow ITIL v4 best practices.',
      },
      {
        q: 'Can the service desk integrate with our existing Microsoft Teams?',
        a: 'Yes, employees can log and track tickets directly inside Teams, Slack, email, or a branded web portal.',
      },
    ],
  },
  {
    id: 'it-14',
    slug: 'it-asset-disposition',
    title: 'IT Asset Disposition (ITAD)',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'Recycle',
    shortDescription:
      'NIST 800-88 certified data sanitization, physical drive destruction, remarketing value recovery, and eco-recycling.',
    heroSummary:
      'Retire end-of-life IT hardware securely and sustainably with auditable chain-of-custody documentation, verified data destruction, and capital recovery.',
    slaMetric: 'NIST 800-88 Certified',
    deliverables: [
      'Onsite or facility-based NIST 800-88 data wiping and shredding',
      'Serialized Certificates of Data Destruction for compliance audits',
      'Hardware refurbishment and remarketing credit recovery',
      'R2 / e-Stewards compliant zero-landfill environmental recycling',
    ],
    benefits: [
      'Eliminates data breach liability from retired servers and laptops',
      'Recovers residual hardware value to offset new refresh budgets',
      'Supports corporate ESG sustainability reporting targets',
    ],
    faqs: [
      {
        q: 'Do we receive serial-numbered certificates of destruction?',
        a: 'Yes. Every drive and asset receives a serialized certificate verifying wipe or physical destruction compliance.',
      },
      {
        q: 'Can you perform onsite hard-drive shredding at our facility?',
        a: 'Yes, mobile shredding units can process drives directly at your premises under your team’s supervision.',
      },
    ],
  },
  {
    id: 'it-15',
    slug: 'it-data-center-hardware-solutions',
    title: 'IT Data Center Hardware Solutions',
    category: SERVICE_CATEGORIES.IT_SUPPORT,
    iconName: 'Cpu',
    shortDescription:
      'Enterprise server, SAN/NAS storage, networking hardware sourcing, configuration, and lifecycle extensions.',
    heroSummary:
      'Procure, configure, and extend mission-critical compute, storage, and networking hardware tailored to workload performance and budget objectives.',
    slaMetric: 'Multi-OEM Architecture',
    deliverables: [
      'Server, hyperconverged, and enterprise storage sizing & procurement',
      'Pre-delivery RAID, hypervisor, and rack integration staging',
      'Third-party maintenance (TPM) to extend post-warranty hardware life',
      'High-speed optics, memory, and drive expansion upgrades',
    ],
    benefits: [
      'Vendor-neutral guidance avoids costly over-provisioning',
      'Significantly lower TCO via certified hardware & TPM options',
      'Faster lead times through established distributor partnerships',
    ],
    faqs: [
      {
        q: 'Do you supply both new OEM and certified refurbished enterprise gear?',
        a: 'Yes, we source brand-new OEM systems as well as rigorously tested, warrantied enterprise spares for legacy expansions.',
      },
      {
        q: 'Can you stage and burn-in servers before shipping to our data center?',
        a: 'Yes, our integration lab configures firmware, RAID arrays, and management IPs prior to final rack delivery.',
      },
    ],
  },

  // DIGITAL MARKETING SERVICES (7)
  {
    id: 'dm-1',
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimization',
    category: SERVICE_CATEGORIES.DIGITAL_MARKETING,
    iconName: 'Search',
    shortDescription:
      'Technical SEO audits, Core Web Vitals optimization, authority link building, and high-intent organic search growth.',
    heroSummary:
      'Capture qualified enterprise and B2B buyer demand with technically sound architecture, structured schema markup, and authoritative search strategies.',
    slaMetric: 'Core Web Vitals First',
    deliverables: [
      'Deep technical crawl diagnostics, indexing, and schema architecture',
      'High-intent keyword taxonomy and competitor gap mapping',
      'On-page semantic optimization and internal link engineering',
      'Transparent monthly organic pipeline and ranking attribution',
    ],
    benefits: [
      'Compounding inbound lead acquisition with lower long-term CAC',
      'Clean crawlability aligned with modern search engine standards',
      'Measurable authority growth across commercial and local queries',
    ],
    faqs: [
      {
        q: 'How long before SEO improvements show measurable traffic gains?',
        a: 'Technical fixes yield indexing lifts within 30–60 days, while competitive commercial rankings typically compound over 3–6 months.',
      },
      {
        q: 'Do you handle both B2B national SEO and multi-location local SEO?',
        a: 'Yes, we architect dedicated strategies for enterprise national visibility and multi-branch local map packs.',
      },
    ],
  },
  {
    id: 'dm-2',
    slug: 'website-development',
    title: 'Website Development',
    category: SERVICE_CATEGORIES.DIGITAL_MARKETING,
    iconName: 'Code2',
    shortDescription:
      'Fast, accessible, conversion-focused corporate websites and custom web applications built on modern architectures.',
    heroSummary:
      'Engineer high-performance digital flagships that combine crisp corporate UX, WCAG accessibility, and rock-solid security.',
    slaMetric: '95+ Lighthouse Score',
    deliverables: [
      'Custom responsive UI/UX design and interactive prototyping',
      'Modern React, headless CMS, or enterprise WordPress engineering',
      'CRM, marketing automation, and analytics event integrations',
      'SSL hardening, CDN edge caching, and automated QA testing',
    ],
    benefits: [
      'Sub-second page transitions boost conversion rates and SEO signals',
      'Modular component architecture allows effortless future scaling',
      'Built for WCAG 2.1 AA accessibility across all devices',
    ],
    faqs: [
      {
        q: 'Can our marketing team edit content without developer assistance?',
        a: 'Yes, we build intuitive headless or structured CMS workflows with reusable page blocks.',
      },
      {
        q: 'Do you migrate existing URLs without losing search rankings?',
        a: 'Every launch includes a complete 301 redirect matrix and post-launch search console monitoring.',
      },
    ],
  },
  {
    id: 'dm-3',
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    category: SERVICE_CATEGORIES.DIGITAL_MARKETING,
    iconName: 'ShieldAlert',
    shortDescription:
      'Continuous uptime monitoring, security patching, daily off-site backups, and priority content/UI updates.',
    heroSummary:
      'Keep your public-facing digital properties fast, patched, and resilient against downtime or vulnerabilities with dedicated engineering care.',
    slaMetric: 'Daily Offsite Backups',
    deliverables: [
      '24/7 uptime, SSL expiration, and malware integrity monitoring',
      'Core, plugin, and dependency security updates tested in staging',
      'Automated daily encrypted backups with 1-click rollback',
      'Dedicated monthly engineering hours for UI & content enhancements',
    ],
    benefits: [
      'Eliminates security breaches from outdated CMS plugins or packages',
      'Zero unexpected site outages during high-traffic campaigns',
      'Predictable ongoing support without hiring full-time web devs',
    ],
    faqs: [
      {
        q: 'Do you test updates before applying them to the live site?',
        a: 'Yes. All code and plugin updates are validated in an isolated staging environment before production deployment.',
      },
      {
        q: 'How quickly can urgent text or banner edits be published?',
        a: 'Standard content and layout requests are completed within 1 business day.',
      },
    ],
  },
  {
    id: 'dm-4',
    slug: 'content-services',
    title: 'Content Services',
    category: SERVICE_CATEGORIES.DIGITAL_MARKETING,
    iconName: 'FileText',
    shortDescription:
      'Authoritative technical whitepapers, conversion copywriting, case studies, and SEO-aligned editorial programs.',
    heroSummary:
      'Translate complex technical capabilities into clear, persuasive narratives that earn executive buyer confidence across every funnel stage.',
    slaMetric: 'SME-Reviewed Copy',
    deliverables: [
      'Website conversion messaging and solution landing-page copy',
      'Technical blogs, industry whitepapers, and client case studies',
      'Editorial calendars aligned to buyer-journey search intent',
      'Email nurture sequences and sales enablement collateral',
    ],
    benefits: [
      'Establishes credible thought leadership in competitive B2B niches',
      'Consistent brand voice across web, social, and sales decks',
      'Supports organic search growth with original, deeply researched assets',
    ],
    faqs: [
      {
        q: 'How do you ensure accuracy when writing about technical IT topics?',
        a: 'Our writers collaborate directly with solutions architects and technical editors before final delivery.',
      },
      {
        q: 'Can you refresh outdated website copy without a full redesign?',
        a: 'Yes, we frequently perform messaging audits and rewrite high-traffic pages to boost lead conversion.',
      },
    ],
  },
  {
    id: 'dm-5',
    slug: 'social-media-management',
    title: 'Social Media Management',
    category: SERVICE_CATEGORIES.DIGITAL_MARKETING,
    iconName: 'Share2',
    shortDescription:
      'B2B LinkedIn authority, executive brand positioning, visual campaign production, and audience growth analytics.',
    heroSummary:
      'Build measurable brand presence across LinkedIn, X, and corporate digital channels with strategic editorial calendars and data-backed creative.',
    slaMetric: 'Executive B2B Focus',
    deliverables: [
      'Channel strategy, brand visual templates, and monthly content calendars',
      'Executive LinkedIn ghostwriting and company page growth programs',
      'Community engagement monitoring and reputation management',
      'Monthly engagement, reach, and referral-traffic attribution reports',
    ],
    benefits: [
      'Strengthens employer brand for technical recruitment and client trust',
      'Keeps your solutions visible throughout long B2B buying cycles',
      'Coordinated campaign launches across paid and organic channels',
    ],
    faqs: [
      {
        q: 'Do we approve all social posts prior to publishing?',
        a: 'Yes, we deliver monthly content calendars for your team’s review and sign-off ahead of scheduling.',
      },
      {
        q: 'Which platforms do you prioritize for B2B technology firms?',
        a: 'LinkedIn is our primary B2B pipeline driver, complemented by X, YouTube, and Instagram based on audience fit.',
      },
    ],
  },
  {
    id: 'dm-6',
    slug: 'e-commerce-solutions',
    title: 'E-commerce Solutions',
    category: SERVICE_CATEGORIES.DIGITAL_MARKETING,
    iconName: 'ShoppingCart',
    shortDescription:
      'Scalable B2B/B2C storefronts, ERP inventory sync, checkout optimization, and secure payment integrations.',
    heroSummary:
      'Launch and scale frictionless digital commerce platforms engineered for high-volume SKUs, multi-tier B2B pricing, and seamless backend fulfillment.',
    slaMetric: 'PCI-Compliant Flow',
    deliverables: [
      'Custom Shopify Plus, WooCommerce, or headless commerce builds',
      'ERP, warehouse inventory, and shipping carrier API integrations',
      'Checkout funnel optimization and multi-currency tax configuration',
      'Product catalog structuring, search filtering, and performance tuning',
    ],
    benefits: [
      'Higher checkout completion rates across mobile and desktop buyers',
      'Eliminates manual order re-entry with real-time ERP synchronization',
      'Built to handle peak seasonal traffic surges reliably',
    ],
    faqs: [
      {
        q: 'Can you implement B2B wholesale pricing tiers and quote workflows?',
        a: 'Yes, we build customer-group price lists, net-terms invoicing, and bulk SKU order forms.',
      },
      {
        q: 'Do you migrate existing product catalogs and customer order histories?',
        a: 'Yes, we run verified test migrations preserving SKUs, metadata, and historical order records.',
      },
    ],
  },
  {
    id: 'dm-7',
    slug: 'digital-consulting',
    title: 'Digital Consulting',
    category: SERVICE_CATEGORIES.DIGITAL_MARKETING,
    iconName: 'Compass',
    shortDescription:
      'Go-to-market digital roadmaps, martech stack audits, conversion rate optimization, and analytics governance.',
    heroSummary:
      'Align marketing technology, attribution analytics, and customer acquisition strategy into a single accountable growth blueprint.',
    slaMetric: 'ROI-Driven Roadmap',
    deliverables: [
      'Full-funnel conversion audit and martech stack consolidation',
      'GA4, server-side tracking, and CRM pipeline attribution setup',
      '90-day prioritized growth experimentation roadmap',
      'Vendor selection guidance and internal team enablement workshops',
    ],
    benefits: [
      'Stops wasted ad spend caused by broken attribution or leaky funnels',
      'Gives leadership clear unit-economics visibility across channels',
      'Objective, vendor-agnostic advisory tailored to your growth stage',
    ],
    faqs: [
      {
        q: 'What does a typical Digital Consulting engagement deliver first?',
        a: 'Within the first 3 weeks, we deliver a comprehensive technical, analytics, and funnel diagnostic paired with a 90-day execution plan.',
      },
      {
        q: 'Can AVITAJ SOLUTIONS execute the roadmap after consulting?',
        a: 'Yes. Your internal team can run the playbook independently, or our web, SEO, and content teams can execute it turnkey.',
      },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  servicesData.find((service) => service.slug === slug);

export const getServicesByCategory = (category) =>
  servicesData.filter((service) => service.category === category);

import breakFixImg from '../assets/images/service_break_fix_1794635641716.jpg';
import managedItImg from '../assets/images/service_managed_it_1794635641133.jpg';
import networkSecurityImg from '../assets/images/service_network_security_1794635641382.jpg';
import cybersecurityImg from '../assets/images/service_cybersecurity_1794635642155.jpg';
import structuredCablingImg from '../assets/images/banner_it_engineering_1794630829351.jpg';
import ciscoSupportImg from '../assets/images/service_cisco_support_1794635643007.jpg';
import dataCenterSupportImg from '../assets/images/service_data_center_1794635642619.jpg';
import endUserSupportImg from '../assets/images/service_end_user_1794635643479.jpg';
import outsourcedItImg from '../assets/images/service_outsourced_it_1794635643841.jpg';
import remoteSupportImg from '../assets/images/service_remote_support_1794635644396.jpg';
import itRolloutsImg from '../assets/images/service_it_rollouts_1794635645505.jpg';
import stockStorageImg from '../assets/images/service_stock_storage_1794635645390.jpg';
import serviceDeskImg from '../assets/images/service_service_desk_1794635645883.jpg';
import itadDisposalImg from '../assets/images/service_itad_disposal_1794635645687.jpg';
import datacenterHardwareImg from '../assets/images/service_datacenter_hardware_1794635646549.jpg';
import seoGrowthImg from '../assets/images/service_seo_growth_1794635646747.jpg';
import webDevImg from '../assets/images/service_web_dev_1794635648633.jpg';
import webMaintenanceImg from '../assets/images/service_web_maintenance_1794635648878.jpg';
import contentCopyImg from '../assets/images/service_content_copy_1794635706967.jpg';
import socialMediaImg from '../assets/images/service_social_media_1794635706163.jpg';
import ecommerceImg from '../assets/images/service_ecommerce_1794635706179.jpg';
import digitalConsultingImg from '../assets/images/banner_digital_studio_1794630831385.jpg';
import fallbackBannerImg from '../assets/images/banner_services_it_1794630829635.jpg';

const SERVICE_BANNERS = {
  'break-fix-support': {
    src: breakFixImg,
    alt: 'IT technician performing workstation and hardware diagnostics on a repair bench',
  },
  'managed-it-services': {
    src: managedItImg,
    alt: 'Managed IT specialist monitoring 24/7 server uptime and infrastructure health dashboards',
  },
  'network-security': {
    src: networkSecurityImg,
    alt: 'Enterprise rack-mounted firewall security appliances with redundant fiber optic uplinks',
  },
  cybersecurity: {
    src: cybersecurityImg,
    alt: 'Cybersecurity operations analyst reviewing endpoint detection and threat telemetry',
  },
  'structured-cabling': {
    src: structuredCablingImg,
    alt: 'Neatly dressed Cat6A copper and fiber optic structured cabling patch panels',
  },
  'cisco-support': {
    src: ciscoSupportImg,
    alt: 'Network engineer configuring stacked enterprise switches in an IDF closet',
  },
  'data-center-support': {
    src: dataCenterSupportImg,
    alt: 'Certified Smart Hands technician inspecting server hardware inside a Tier III data center',
  },
  'end-user-support': {
    src: endUserSupportImg,
    alt: 'IT support specialist provisioning a business laptop and workstation dock for an employee',
  },
  'outsourced-it-resources': {
    src: outsourcedItImg,
    alt: 'Dedicated systems engineers collaborating on enterprise network architecture',
  },
  'remote-it-support': {
    src: remoteSupportImg,
    alt: 'Remote IT engineer wearing a headset delivering live workstation troubleshooting',
  },
  'it-rollouts': {
    src: itRolloutsImg,
    alt: 'Pre-staged enterprise laptops undergoing imaging and asset tagging for multi-site rollout',
  },
  'it-stock-storage': {
    src: stockStorageImg,
    alt: 'Climate-controlled IT hardware warehouse with barcoded inventory shelving and scanner',
  },
  'service-desk-support': {
    src: serviceDeskImg,
    alt: 'ITIL service desk engineers managing multi-tier incident tickets across dual monitors',
  },
  'it-asset-disposition': {
    src: itadDisposalImg,
    alt: 'ITAD specialist scanning serialized enterprise drives for certified data destruction and recycling',
  },
  'it-data-center-hardware-solutions': {
    src: datacenterHardwareImg,
    alt: 'Enterprise 2U rack server chassis with NVMe storage, optical transceivers, and DIMMs',
  },
  'search-engine-optimization': {
    src: seoGrowthImg,
    alt: 'Technical SEO strategist analyzing organic search growth metrics and Core Web Vitals',
  },
  'website-development': {
    src: webDevImg,
    alt: 'Web engineer building responsive user interfaces and modular code components',
  },
  'website-maintenance': {
    src: webMaintenanceImg,
    alt: 'Web reliability engineer monitoring automated site uptime and cloud backup status',
  },
  'content-services': {
    src: contentCopyImg,
    alt: 'B2B editorial strategists reviewing technical whitepaper manuscripts and campaign briefs',
  },
  'social-media-management': {
    src: socialMediaImg,
    alt: 'Social media strategist planning B2B LinkedIn campaign schedules and visual calendars',
  },
  'e-commerce-solutions': {
    src: ecommerceImg,
    alt: 'E-commerce architect reviewing a B2B product catalog, checkout flow, and order analytics',
  },
  'digital-consulting': {
    src: digitalConsultingImg,
    alt: 'Digital consulting team reviewing omnichannel performance and conversion strategy',
  },
};

export function getServiceBanner(service) {
  if (!service) {
    return {
      src: fallbackBannerImg,
      alt: 'AVITAJ SOLUTIONS enterprise IT operations center',
    };
  }
  return (
    SERVICE_BANNERS[service.slug] || {
      src: fallbackBannerImg,
      alt: `${service.title} - ${service.category}`,
    }
  );
}

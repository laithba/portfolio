import React from 'react';
import './Projects.css';
import habibaImg from '../../assets/h_organic_box_03.png';
import solarLinkImg from '../../assets/web9-01_orig.jpg';
import deliveryImg from '../../assets/fast-delivery-truck-icon-shipping-260nw-1917921599.webp';
import shopyardImg from '../../assets/Shopyard.png';
import dashboardImg from '../../assets/7189e45b-536e-49d2-b7aa-8a46b66d6124.png';
import pricingImg from '../../assets/982a8d5e-2f27-4c3e-b9cd-09dae78bec74.png';

const projectsData = [
  {
    id: 1,
    image: habibaImg,
    title: 'Habiba Natural Products Store',
    tools: 'Magento 2, React, MySQL, AWS',
    description:
      'Delivered Habiba’s bilingual e-commerce revamp with subscription boxes, loyalty programs, and a headless checkout that boosted repeat purchases.'
  },
  {
    id: 2,
    image: solarLinkImg,
    title: 'SolarLink Field Operations',
    tools: 'React Native, Node.js, PostgreSQL, AWS',
    description:
      'Built SolarLink’s solar projects portal with quote builder, site-survey checklist, and CRM integrations tailored for field engineers and sales teams.'
  },
  {
    id: 3,
    image: deliveryImg,
    title: 'ExpressDrop Delivery Platform',
    tools: 'React, NestJS, MongoDB, Socket.IO',
    description:
      'Launched a Talabat-style ordering experience covering menu management, live courier tracking, and automated dispatch workflows for groceries and meals.'
  },
  {
    id: 4,
    image: shopyardImg,
    title: 'Shopyard Marketplace Revamp',
    tools: 'Magento 2, React, GraphQL, AWS',
    description:
      'Led the end-to-end rebuild of the B2B marketplace. Delivered a headless storefront, revamped checkout, and automated deployments that cut release time from days to hours.'
  },
  {
    id: 5,
    image: pricingImg,
    title: 'Magento Dynamic Pricing Engine',
    tools: 'Magento 2, PHP, Redis, Elasticsearch',
    description:
      'Engineered a pricing rules engine with region-based catalogs, quantity tiers, and scheduled promotions managed through a custom Magento admin UI.'
  },
  {
    id: 6,
    image: dashboardImg,
    title: 'Merchant Analytics Dashboard',
    tools: 'React, Node.js, Tailwind CSS, REST APIs',
    description:
      'Built a self-service analytics dashboard so merchant partners could track conversion, inventory aging, and marketing ROI with real-time visualizations.'
  }
];

function Projects() {
  return (
    <section id='projects'>
      <h5>Some of My Work</h5>
      <h2>Projects</h2>

      <div className="projects_container">
        {projectsData.map(({ id, image, title, tools, description, demo }) => (
          <div key={id} className="project_card">
            <div className="project_img">
              <img src={image} alt={title} />
            </div>
            <div className="project_content">
              <h3>{title}</h3>
              <p className="project_tools">{tools}</p>
              {description && <p className="project_description">{description}</p>}
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer" className="btn btn-demo">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

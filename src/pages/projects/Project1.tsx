import React, { useState, useEffect } from "react";
import { Card, Annotation, AnimationSequence } from '../../components/index';
import { BackgroundImages, Hero, Goal, Overview, BlogCard, Problem, Insights, Understand, PainPoints, Journey, SiteMap, Outcomes, SprintImg } from "../sections/index";
import '../../components/Data/BarChart.css'

const Project1: React.FC = () => {
  console.log('Home component is rendering');
  const cards = [
    {
      image:
        "/images/cheyenne.webp",
      title: "Jennifer G",
      job: "Purchasing Manager",
      quote: "Efficiency is key!",
      bio: "A passionate manager with a knack for problem solving.",
      age: "29, MBA, San Francisco",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
    {
      image:
        "/images/ammon.webp",
      title: "Kai T",
      job: "Sales Rep",
      quote: "Efficiency is key!",
      bio: "A passionate manager with a knack for problem solving.",
      age: "34, High School, Denver",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
    {
      image:
        "/images/ana.webp",
      title: "Ana M",
      job: "Warehouse Worker",
      quote: "Efficiency is key!",
      bio: "A passionate manager with a knack for problem solving.",
      age: "42, BS, Atlanta",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
    {
      image:
        "/images/tan.webp",
      title: "Darien T",
      job: "Administrator",
      quote: "Efficiency is key!",
      bio: "A passionate manager with a knack for problem solving.",
      age: "56, MBA, Portland",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
  ];
  const questionCards = [
    {
      image: "/images/whoCard.jpg",
      title: "Who is experiencing the problem?",
      job: "The average business owners",
    },
    {
      image: "/images/whereCard.jpg",
      title: "Where does the user experience the problem?",
      job: "Outside of the office",
    },
    {
      image: "/images/whenCard.jpg",
      title: "When does the problem occur?",
      job: "No access to a desktop and on-the-go",
    },
    {
      image: "/images/whyCard.jpg",
      title: "Why does the problem matter?",
      job: "Affects productivity and efficiency",
    },
  ]
  const images = {
    imageSM: "/images/sm_bg-proj1-hero.webp",
    imageMD: "/images/md_bg-proj1-hero.webp",
    imageLG: "/images/lg_bg-proj1-hero.webp",
  };
  const sprint = {
    imageSM: "/images/fbgo-sprint-sm.jpg",
    imageMD: "/images/fbgo-sprint-md.jpg",
    imageLG: "/images/fbgo-sprint-lg.jpg",
    problem: "Fishbowl Inventory clients specifically need a tablet-compatible solution that integrates seamlessly with their existing systems. This would enable them to manage tasks efficiently while on the go. Competitor solutions, while informative, often appeared over-engineered and introduced complexity that alienates non-technical users.",
    approach: "Our approach prioritized simplicity and alignment with the desktop client’s functionality, ensuring users could manage tasks intuitively while still benefiting from automation features. This focus aimed to empower users without overwhelming them, creating a solution that bridges the gap between desktop and mobile inventory management."
  };
  const chartData = {
    data: [
      { id: "1", label: "fishbowl", height: 312, color: "#5E89DC" },
      { id: "2", label: "quickbooks", height: 481, color: "#E8AB91" },
      { id: "3", label: "netsuite", height: 137, color: "#81B29A" },
    ],
    caption: "# of pain points",
    legend: [
      { label: "fishbowl", color: "#5E89DC" },
      { label: "quickbooks", color: "#E8AB91" },
      { label: "netsuite", color: "#81B29A" },
    ],
  };
  const hero = {
    product: "fishbowl go",
    tagline: "simplifying inventory management in the warehouse and in the office.",
    primary: "prototype",
    secondary: "website"
  }
  const overview = {
    overview: "Fishbowl Go is an app designed for inventory management. It streamlines processes like sales orders, manufacture orders, and other inventory tasks, helping workers complete jobs in the warehouse more efficiently. Many users switch from competitors like NetSuite or QuickBooks after finding those tools either too complex or unable to meet their needs.",
    duration: "Originally, the project was roadmapped for a month reskinning of the mobile native app. Through research and brainstorming, the project specs changed. We worked on it from January 2021 to September 2021.",
    product: "/images/fishbowl.png",
    role: ["Project Lead", "User Researcher", "User Experience Designer", "User Interface Designer", "Interaction Designer"],
    deliverables: ["User surveys & user tests", "Personas", "User journeys & site maps", "High-fidelity prototype", "Usability tests & findings"
    ],
    specs: ["8 months", "Figma", "Userbrain", "Miro"]
  }
  const insights = {
    description: "During the Fishbowl Go project, we identified a crucial user experience issue: several actions within the app were ambiguous regarding their completion status. Users frequently expressed uncertainty about whether their actions, such as inventory updates or order processing, were successfully executed. To enhance clarity and user confidence, we propose integrating more explicit feedback mechanisms into the app's workflow. This approach includes the implementation of toast messages and clear visual indicators to affirm that an action has been successfully completed. These additions are aimed at reducing user frustration and improving the overall efficiency and user satisfaction with the app.",
    point1: "implement toast messages",
    note1: "Introduce toast notifications for immediate feedback after an action is completed, providing users with clear confirmation and peace of mind.",
    point2: "visual confirmation indicators",
    note2: "Develop visual cues, such as checkmarks or color changes, to indicate successful completion of tasks like inventory updates or data entry.",
    point3: "enhanced feedback loop",
    note3: "Strengthen the app’s feedback loop by providing distinct auditory or haptic feedback for completed actions, enhancing the user experience for those relying on different sensory inputs.",
  }
  const blogData = [
    {
      image: "/images/project-image-tpg.jpg",
      link: "/projects/Project3",
      product: "Travelpass",
      type: "booking",
      date: "July 17, 2022 - Current",
      description:
        "A platform offering curated travel guides and tools to help users plan trips.",
    },
    {
      image: "/images/spectacle.jpg",
      link: "/projects/Project4",
      product: "Spectacle",
      type: "plugins",
      date: "July 7, 2024",
      description:
        "A Figma plugin that streamlines design documentation, enhancing collaboration.",
    },
    {
      image: "/images/project-image-hm.jpg", // Example placeholder image
      link: "/projects/Project2",
      product: "Haven Massage",
      type: "tooling",
      date: "August 15, 2024",
      description: "An exciting new tool for improving team productivity.",
    },
  ];
  const painPoints = [
    {
      problem: "Errors",
      description: "Manual methods and desktop-bound software contribute to data inaccuracies and operational inefficiencies, especially in real-time inventory tracking.",
      number: "1"
    },
    {
      problem: "Limited Access",
      description: "The inability to access and manage inventory data on the move hinders effective remote work, causing delays and decision-making challenges.",
      number: "2"
    },
    {
      problem: "Inaccuracy",
      description: "Managing inventory across various locations is cumbersome with traditional methods, leading to issues in synchronization and record accuracy.",
      number: "3"
    },
    {
      problem: "Simplicity",
      description: "There's a significant demand for a user-friendly, mobile platform that integrates with existing systems, allowing efficient and flexible management of inventory tasks.",
      number: "4"
    }

  ]
  const journey = [
    {
      user: "Jennifer G",
      story: "Optimize inventory management process.",
      step: ["Discover tool", "Create", "Manage", "Track", "Feedback"],
      task: ["Log into inventory system", "Check inventory levels", "Update orders and customer info", "Track orders and review reports", "Check app updates and training videos"],
      feeling: ["Hopeful", "Overwhelmed", "Frustrated", "Anticipation", "Invested"],
      feedback: ["Simplify login process and training", "Improve dashboard clarity", "Streamline the integration process", "Continuous improvement based on user feedback, focusing on usability enhancements", "Develop a structured system for collecting and prioritizing user suggestions"]
    },
  ]
  const sitemap = [
    {
      page: "Home",
      sections: [
        { section: "Overview", details: ["Introduction", "Modules", "Settings", "Stats/info of company"] },
        { section: "Notifications", details: ["Updates", "Messages", "Calendar events"] },
        { section: "Settings", details: ["Preferences", "Permissions", "Module settings"], }
      ],
    },
    {
      page: "Inventory",
      sections: [
        { section: "Parts", details: ["Add/edit parts", "View/edit general info", "Add to inventory"] },
        { section: "Inventory", details: ["Add/edit inventory", "View/edit general info", "View/edit inventory details (tracking, BOM, etc", "Inventory event actions (add, scrap, cycle, move"] },
      ],
    },
    {
      page: "Manufacturing",
      sections: [
        { section: "Manufacture Order", details: ["Create new MO", "Issue/unissue orders", "Mo to PO", "Quick Build/Fulfill", "Editable general info: number, date scheduled, location group, class"] },
        { section: "Work Order", details: ["Creat new WO", "Issue/unissue orders", "WO to Pick", "WO to MO", "Quick Build/Fulfill", "Editable general info: scheduled start/finish, class, priority, category, location, customer/job"] },
        { section: "Bill of Materials", details: ["View scheduling, details, assigned users, and notes of each WO item", "View/edit instructions"] }
      ]
    },
    {
      page: "Sales",
      sections: [
        { section: "Sales Order", details: ["Add new sales order", "View/edit sales order", "Change status of SO", "Change date scheduled", "Change customer or shipping address", "Change carrier/service", "View totals", "View Tax info", "View SO items"] },
        { section: "Customers", details: ["View list of customers", "Add/edit customers", "Search customers by status, name, account number, location, contact, salesrep", "Edit general info (name, status, address, date created/last changed, user ID, contact info)"] },
        { section: "Picking", details: ["Add/delete items", "Add item by type", "Quick add product to item list", "Start, finish, void, commit, group orders"] },
        { section: "Packing", details: ["Add/delete items", "Add item by type", "Quick add product to item list", "Start, finish, void, commit, group orders"] },
        { section: "Shipping", details: ["Send to ship"] },
        { section: "Delivery", details: ["Signature"] }
      ]
    },
    {
      page: "Purchasing",
      sections: [
        { section: "Purchase Order", details: ["Add new purchase order", "View/edit PO", "Change date scheduled"] },
        { section: "Vendor", details: ["Change customer or shipping address", "Change carrier/service", "View list of vendors", "Search vendor by status, name, account number, location", "Edit general info (name, status, address, date entered/last changed, userID, contact info"] },
        { section: "Receiving", details: ["Receive, void, reconcile, fulfill orders"] }
      ]
    }
  ]
  const outcomes = [
    {
      description: "Usability testing of the Fishbowl Go prototype was a pivotal phase in our project, yielding crucial insights. The testing showed that our redesigned prototype markedly enhanced the existing app, significantly improving user-friendliness and efficiency, thereby addressing key user challenges. However, as we were preparing for the development phase, unforeseen organizational changes occurred. The acquisition of Fishbowl Inventory by another company led to a realignment of priorities and the eventual departure of our development team. This resulted in the project being shelved, despite the prototype&#39s demonstrated potential to meet and exceed user needs.",
      link: "",
      linkLabel: "prototype",
      image: "/images/fishbowl.png",
      points: [
        { label: "process and development", details: "Over the course of the project, our team worked diligently to understand and integrate user feedback into a comprehensive redesign of the Fishbowl Go app. My role involved closely collaborating with the development team, the Head of Product, and the UX Director to ensure that the new design addressed user needs effectively." },
        { label: "impact", details: "Though the redesigned Fishbowl Go app did not see the light of day in its intended form, the project left an indelible mark. It demonstrated the value of listening to user feedback and the need for continuous evolution in software design to meet changing user requirements. The insights gained from this project can serve as a valuable reference for future endeavors in similar domains." },
        { label: "considerations", details: "Following these developments, I made the decision to leave Fishbowl. Despite the project not reaching its final stages of development and deployment, the journey was filled with learning experiences and professional growth. The process underscored the importance of user-centered design and the impact it can have on product development." },
      ]
    }
  ]

  const annotationAnimation = [
    {
      page: "Scanning inventory",
      image: "/images/fb-w-inventory.png",
      step: "1/5",
      explanation: "Scan a barcode of a product to add or edit details in inventory or parts module.",
      imgTranslateX: 860,
      imgTranslateY: 220,
      imgScale: 150,
      svgContainerX: 300,
      svgContainerY: 92,
      ringWidth: 120,
      ringHeight: 120,
      svgWidth: 120,
      svgHeight: 120,
      svgPath: `
<path d="M41.9515 21.0114V8.83484H41.8905L38.0961 11.439V9.02812L41.9312 6.3324H44.5251V21.0114H41.9515Z" fill="#8C8C8C"/>
<path d="M30.66 21.2657C27.0589 21.2657 24.8922 18.3462 24.8922 13.677V13.6566C24.8922 8.98743 27.0589 6.07808 30.66 6.07808C34.2509 6.07808 36.4278 8.98743 36.4278 13.6566V13.677C36.4278 18.3462 34.2509 21.2657 30.66 21.2657ZM30.66 19.1193C32.6335 19.1193 33.783 17.0644 33.783 13.677V13.6566C33.783 10.2692 32.6335 8.23466 30.66 8.23466C28.6764 8.23466 27.537 10.2692 27.537 13.6566V13.677C27.537 17.0644 28.6764 19.1193 30.66 19.1193Z" fill="#8C8C8C"/>
<path d="M12.8581 21.0114V19.221L18.0461 14.1652C19.9687 12.2833 20.3857 11.5407 20.3857 10.4523V10.4319C20.3756 9.11967 19.3888 8.1838 17.9749 8.1838C16.3472 8.1838 15.2079 9.27226 15.1774 10.6862V10.7574H12.7157V10.6862C12.7157 8.00069 14.974 6.07808 17.9545 6.07808C20.8944 6.07808 22.9492 7.85828 22.9492 10.2793V10.2997C22.9492 12.029 22.1456 13.1989 19.5618 15.6809L16.3269 18.7531V18.865H23.173V21.0114H12.8581Z" fill="#8C8C8C"/>
<path d="M0 21.0114V6.3324H6.09334C8.76872 6.3324 10.4879 7.7769 10.4879 10.0047V10.025C10.4879 11.6018 9.29769 13.0157 7.72095 13.2294V13.2802C9.78597 13.4633 11.1898 14.9078 11.1898 16.8406V16.861C11.1898 19.4244 9.28752 21.0114 6.15438 21.0114H0ZM5.43213 8.37708H2.62451V12.5376H4.98454C6.87663 12.5376 7.89388 11.7645 7.89388 10.3811V10.3607C7.89388 9.08915 6.98853 8.37708 5.43213 8.37708ZM5.40161 14.4399H2.62451V18.9667H5.5542C7.47681 18.9667 8.5144 18.1834 8.5144 16.7084V16.688C8.5144 15.213 7.45646 14.4399 5.40161 14.4399Z" fill="#8C8C8C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M60.1501 27.3438L60.1502 0L61.4522 5.69162e-08V27.3438H60.1501Z" fill="#8C8C8C"/>
<path d="M246.033 21.3114C243.205 21.3114 241.587 19.9687 241.364 17.9647L241.353 17.8731H243.846L243.866 17.9647C244.059 18.8904 244.761 19.4397 246.043 19.4397C247.274 19.4397 248.016 18.9412 248.016 18.1478V18.1376C248.016 17.4866 247.64 17.1204 246.521 16.866L244.731 16.4693C242.666 16.0116 241.628 15.0045 241.628 13.4074V13.3972C241.628 11.4237 243.347 10.0911 245.951 10.0911C248.637 10.0911 250.203 11.5662 250.295 13.4277L250.305 13.5396H247.945L247.935 13.4583C247.823 12.5936 247.131 11.9629 245.951 11.9629C244.832 11.9629 244.13 12.4817 244.13 13.2751V13.2853C244.13 13.9058 244.548 14.3127 245.667 14.5671L247.467 14.9638C249.695 15.4622 250.56 16.3371 250.56 17.9036V17.9138C250.56 19.9483 248.678 21.3114 246.033 21.3114Z" fill="#8C8C8C"/>
<path d="M235.311 21.3114C232.076 21.3114 230.123 19.165 230.123 15.7369V15.7267C230.123 12.3291 232.107 10.0911 235.189 10.0911C238.271 10.0911 240.184 12.2579 240.184 15.5131V16.3269H232.635C232.676 18.219 233.714 19.338 235.362 19.338C236.623 19.338 237.447 18.6666 237.691 17.9443L237.712 17.8731H240.082L240.051 17.985C239.716 19.6431 238.129 21.3114 235.311 21.3114ZM235.219 12.0748C233.877 12.0748 232.869 12.9801 232.666 14.6383H237.722C237.539 12.9293 236.562 12.0748 235.219 12.0748Z" fill="#8C8C8C"/>
<path d="M225.881 21.0978V6.41886H228.414V21.0978H225.881Z" fill="#8C8C8C"/>
<path d="M219.727 21.3114C218.17 21.3114 216.98 20.5383 216.37 19.2668H216.309V21.0978H213.776V6.41886H216.309V12.1663H216.37C216.98 10.8744 218.211 10.0911 219.737 10.0911C222.443 10.0911 224.182 12.2172 224.182 15.6962V15.7064C224.182 19.1752 222.453 21.3114 219.727 21.3114ZM218.964 19.1752C220.591 19.1752 221.598 17.8528 221.598 15.7064V15.6962C221.598 13.5498 220.581 12.2274 218.964 12.2274C217.407 12.2274 216.309 13.5905 216.309 15.6962V15.7064C216.309 17.8223 217.397 19.1752 218.964 19.1752Z" fill="#8C8C8C"/>
<path d="M205.821 21.2809C203.664 21.2809 202.209 19.9483 202.209 18.0257V18.0054C202.209 16.0929 203.695 14.9434 206.309 14.7807L209.127 14.6077V13.8652C209.127 12.7767 208.415 12.1155 207.133 12.1155C205.933 12.1155 205.2 12.675 205.037 13.4684L205.017 13.56H202.667L202.677 13.4379C202.83 11.5255 204.488 10.0911 207.225 10.0911C209.92 10.0911 211.66 11.5153 211.66 13.682V21.0978H209.127V19.4397H209.066C208.445 20.5688 207.245 21.2809 205.821 21.2809ZM204.732 17.924C204.732 18.809 205.465 19.3481 206.573 19.3481C208.028 19.3481 209.127 18.3818 209.127 17.1V16.2862L206.665 16.4388C205.414 16.5202 204.732 17.0593 204.732 17.9138V17.924Z" fill="#8C8C8C"/>
<path d="M194.672 21.3521C190.45 21.3521 187.785 18.4428 187.785 13.7533V13.7431C187.785 9.05355 190.46 6.16455 194.672 6.16455C198.049 6.16455 200.531 8.27026 200.918 11.261L200.928 11.3627H198.354L198.303 11.1694C197.876 9.49097 196.584 8.4432 194.672 8.4432C192.108 8.4432 190.47 10.4879 190.47 13.7431V13.7533C190.47 17.0186 192.118 19.0735 194.672 19.0735C196.543 19.0735 197.856 18.0664 198.334 16.2557L198.364 16.154H200.938L200.918 16.2557C200.541 19.2668 198.049 21.3521 194.672 21.3521Z" fill="#8C8C8C"/>
<path d="M177.348 21.3114C174.113 21.3114 172.16 19.165 172.16 15.7369V15.7267C172.16 12.3291 174.143 10.0911 177.226 10.0911C180.308 10.0911 182.22 12.2579 182.22 15.5131V16.3269H174.672C174.713 18.219 175.751 19.338 177.399 19.338C178.66 19.338 179.484 18.6666 179.728 17.9443L179.749 17.8731H182.119L182.088 17.985C181.753 19.6431 180.166 21.3114 177.348 21.3114ZM177.256 12.0748C175.913 12.0748 174.906 12.9801 174.703 14.6383H179.759C179.576 12.9293 178.599 12.0748 177.256 12.0748Z" fill="#8C8C8C"/>
<path d="M162.425 21.0978V6.41886H164.958V14.7909H165.009L169.037 10.3149H171.967L167.694 14.9536L172.139 21.0978H169.22L165.812 16.4591L164.958 17.3543V21.0978H162.425Z" fill="#8C8C8C"/>
<path d="M154.429 21.2809C152.273 21.2809 150.818 19.9483 150.818 18.0257V18.0054C150.818 16.0929 152.303 14.9434 154.917 14.7807L157.735 14.6077V13.8652C157.735 12.7767 157.023 12.1155 155.741 12.1155C154.541 12.1155 153.809 12.675 153.646 13.4684L153.625 13.56H151.276L151.286 13.4379C151.438 11.5255 153.097 10.0911 155.833 10.0911C158.529 10.0911 160.268 11.5153 160.268 13.682V21.0978H157.735V19.4397H157.674C157.054 20.5688 155.853 21.2809 154.429 21.2809ZM153.341 17.924C153.341 18.809 154.073 19.3481 155.182 19.3481C156.637 19.3481 157.735 18.3818 157.735 17.1V16.2862L155.273 16.4388C154.022 16.5202 153.341 17.0593 153.341 17.9138V17.924Z" fill="#8C8C8C"/>
<path d="M144.328 21.0978V10.3149H146.861V12.1765H146.912C147.247 10.8744 148.142 10.0911 149.384 10.0911C149.699 10.0911 149.994 10.142 150.187 10.1929V12.4817C149.974 12.4003 149.587 12.3393 149.16 12.3393C147.725 12.3393 146.861 13.2446 146.861 14.8417V21.0978H144.328Z" fill="#8C8C8C"/>
<path d="M131.521 21.0978V6.41886H137.614C140.289 6.41886 142.008 7.86336 142.008 10.0911V10.1115C142.008 11.6882 140.818 13.1022 139.242 13.3158V13.3667C141.307 13.5498 142.71 14.9943 142.71 16.9271V16.9474C142.71 19.5109 140.808 21.0978 137.675 21.0978H131.521ZM136.953 8.46354H134.145V12.6241H136.505C138.397 12.6241 139.414 11.851 139.414 10.4675V10.4472C139.414 9.17562 138.509 8.46354 136.953 8.46354ZM136.922 14.5264H134.145V19.0531H137.075C138.997 19.0531 140.035 18.2699 140.035 16.7948V16.7745C140.035 15.2995 138.977 14.5264 136.922 14.5264Z" fill="#8C8C8C"/>
<path d="M120.829 21.3114C117.625 21.3114 115.621 19.1549 115.621 15.6962V15.686C115.621 12.2477 117.655 10.0911 120.799 10.0911C123.637 10.0911 125.407 11.8917 125.559 14.0483L125.57 14.1296H123.179L123.159 14.0381C122.945 12.9903 122.172 12.146 120.829 12.146C119.232 12.146 118.205 13.4989 118.205 15.7064V15.7166C118.205 17.9647 119.242 19.2668 120.839 19.2668C122.121 19.2668 122.935 18.5038 123.169 17.3747L123.189 17.2831H125.58L125.57 17.3543C125.376 19.6025 123.556 21.3114 120.829 21.3114Z" fill="#8C8C8C"/>
<path d="M112.651 8.76872C111.857 8.76872 111.237 8.13802 111.237 7.38525C111.237 6.61214 111.857 5.99162 112.651 5.99162C113.444 5.99162 114.054 6.61214 114.054 7.38525C114.054 8.13802 113.444 8.76872 112.651 8.76872ZM111.379 21.0978V10.3149H113.912V21.0978H111.379Z" fill="#8C8C8C"/>
<path d="M105.164 21.3114C102.336 21.3114 100.718 19.9687 100.494 17.9647L100.484 17.8731H102.976L102.997 17.9647C103.19 18.8904 103.892 19.4397 105.174 19.4397C106.405 19.4397 107.147 18.9412 107.147 18.1478V18.1376C107.147 17.4866 106.771 17.1204 105.652 16.866L103.861 16.4693C101.796 16.0116 100.759 15.0045 100.759 13.4074V13.3972C100.759 11.4237 102.478 10.0911 105.082 10.0911C107.768 10.0911 109.334 11.5662 109.426 13.4277L109.436 13.5396H107.076L107.066 13.4583C106.954 12.5936 106.262 11.9629 105.082 11.9629C103.963 11.9629 103.261 12.4817 103.261 13.2751V13.2853C103.261 13.9058 103.678 14.3127 104.797 14.5671L106.598 14.9638C108.826 15.4622 109.69 16.3371 109.69 17.9036V17.9138C109.69 19.9483 107.808 21.3114 105.164 21.3114Z" fill="#8C8C8C"/>
<path d="M93.0684 21.2809C90.9119 21.2809 89.4572 19.9483 89.4572 18.0257V18.0054C89.4572 16.0929 90.9424 14.9434 93.5567 14.7807L96.3745 14.6077V13.8652C96.3745 12.7767 95.6624 12.1155 94.3807 12.1155C93.1803 12.1155 92.4479 12.675 92.2852 13.4684L92.2648 13.56H89.915L89.9251 13.4379C90.0777 11.5255 91.7358 10.0911 94.4723 10.0911C97.168 10.0911 98.9075 11.5153 98.9075 13.682V21.0978H96.3745V19.4397H96.3135C95.693 20.5688 94.4926 21.2809 93.0684 21.2809ZM91.98 17.924C91.98 18.809 92.7124 19.3481 93.8212 19.3481C95.2759 19.3481 96.3745 18.3818 96.3745 17.1V16.2862L93.9128 16.4388C92.6615 16.5202 91.98 17.0593 91.98 17.9138V17.924Z" fill="#8C8C8C"/>
<path d="M77.0772 21.0978V6.41886H83.1706C85.846 6.41886 87.5651 7.86336 87.5651 10.0911V10.1115C87.5651 11.6882 86.3749 13.1022 84.7982 13.3158V13.3667C86.8632 13.5498 88.267 14.9943 88.267 16.9271V16.9474C88.267 19.5109 86.3648 21.0978 83.2316 21.0978H77.0772ZM82.5094 8.46354H79.7017V12.6241H82.0618C83.9539 12.6241 84.9711 11.851 84.9711 10.4675V10.4472C84.9711 9.17562 84.0658 8.46354 82.5094 8.46354ZM82.4788 14.5264H79.7017V19.0531H82.6314C84.554 19.0531 85.5916 18.2699 85.5916 16.7948V16.7745C85.5916 15.2995 84.5337 14.5264 82.4788 14.5264Z" fill="#8C8C8C"/>
<path d="M47.3086 51.0156C44.3891 51.0156 42.6178 49.1197 42.6178 46.0667V46.0578C42.6178 43.0226 44.4069 41.0822 47.2018 41.0822C49.9967 41.0822 51.7502 42.9781 51.7502 45.862V46.6631H45.1813C45.208 48.1851 46.0358 49.0752 47.362 49.0752C48.4301 49.0752 49.0799 48.4878 49.2668 47.9537L49.2846 47.9003H51.6701L51.6434 47.9982C51.3496 49.4046 50.0323 51.0156 47.3086 51.0156ZM47.2463 43.0226C46.1782 43.0226 45.3771 43.7346 45.208 45.0253H49.2579C49.0977 43.7079 48.3233 43.0226 47.2463 43.0226Z" fill="#8C8C8C"/>
<path d="M36.1913 50.8198L32.889 41.278H35.6661L37.66 48.5234H37.7134L39.6805 41.278H42.3953L39.1197 50.8198H36.1913Z" fill="#8C8C8C"/>
<path d="M30.6282 40.0496C29.8449 40.0496 29.2397 39.4355 29.2397 38.6967C29.2397 37.9579 29.8449 37.3438 30.6282 37.3438C31.4115 37.3438 32.0168 37.9579 32.0168 38.6967C32.0168 39.4355 31.4115 40.0496 30.6282 40.0496ZM29.3287 50.8198V41.278H31.9277V50.8198H29.3287Z" fill="#8C8C8C"/>
<path d="M26.5872 51.0156C24.4687 51.0156 23.4718 50.1967 23.4718 48.1495V43.2362H22.1456V41.278H23.4718V38.9459H26.0976V41.278H27.8422V43.2362H26.0976V47.8647C26.0976 48.7548 26.4982 49.0574 27.2814 49.0574C27.5129 49.0574 27.682 49.0307 27.8422 49.0129V50.9177C27.5485 50.9622 27.1301 51.0156 26.5872 51.0156Z" fill="#8C8C8C"/>
<path d="M17.2234 51.0156C14.3127 51.0156 12.5148 49.1197 12.5148 46.04V46.0311C12.5148 42.9781 14.3394 41.0822 17.1967 41.0822C19.7868 41.0822 21.4335 42.6754 21.5314 44.7404V44.8028H19.1193L19.1015 44.7226C18.9412 43.8147 18.3093 43.1205 17.2323 43.1205C15.9594 43.1205 15.1583 44.2153 15.1583 46.04V46.0489C15.1583 47.9181 15.9594 48.9773 17.2412 48.9773C18.2826 48.9773 18.9323 48.3364 19.1104 47.3751L19.1193 47.295H21.5403V47.3484C21.4157 49.4313 19.769 51.0156 17.2234 51.0156Z" fill="#8C8C8C"/>
<path d="M0 50.8198L4.48608 37.9757H7.64593L12.1231 50.8198H9.3015L8.3313 47.7045H3.79181L2.8216 50.8198H0ZM6.03485 40.468L4.41488 45.6929H7.70823L6.08826 40.468H6.03485Z" fill="#8C8C8C"/>
<path d="M266.116 50.1624C264.086 50.1624 262.744 48.545 262.744 46.0425V46.0349C262.744 43.5325 264.102 41.9227 266.093 41.9227C267.214 41.9227 268.138 42.4872 268.634 43.4028H268.664V39.0006H269.992V50.0098H268.664V48.667H268.634C268.138 49.5902 267.253 50.1624 266.116 50.1624ZM266.375 48.9875C267.718 48.9875 268.672 47.8202 268.672 46.0425V46.0349C268.672 44.2649 267.71 43.0976 266.375 43.0976C264.971 43.0976 264.102 44.2267 264.102 46.0349V46.0425C264.102 47.866 264.971 48.9875 266.375 48.9875Z" fill="#8C8C8C"/>
<path d="M258.387 50.1624C256.106 50.1624 254.733 48.5679 254.733 46.073V46.0654C254.733 43.6088 256.137 41.9227 258.303 41.9227C260.47 41.9227 261.79 43.5325 261.79 45.9128V46.4011H256.076C256.106 48.0338 257.006 48.9875 258.418 48.9875C259.425 48.9875 260.134 48.4839 260.363 47.8049L260.386 47.7363H261.691L261.676 47.8125C261.416 49.1248 260.119 50.1624 258.387 50.1624ZM258.296 43.0976C257.144 43.0976 256.243 43.8834 256.098 45.3635H260.44C260.31 43.8224 259.455 43.0976 258.296 43.0976Z" fill="#8C8C8C"/>
<path d="M253.215 50.1624C251.757 50.1624 251.04 49.5063 251.04 47.988V43.1739H249.88V42.0752H251.04V39.9314H252.413V42.0752H253.924V43.1739H252.413V47.9804C252.413 48.8273 252.787 49.0638 253.497 49.0638C253.657 49.0638 253.81 49.0409 253.924 49.0333V50.109C253.756 50.1319 253.474 50.1624 253.215 50.1624Z" fill="#8C8C8C"/>
<path d="M248.5 50.1624C247.042 50.1624 246.325 49.5063 246.325 47.988V43.1739H245.165V42.0752H246.325V39.9314H247.698V42.0752H249.209V43.1739H247.698V47.9804C247.698 48.8273 248.072 49.0638 248.782 49.0638C248.942 49.0638 249.095 49.0409 249.209 49.0333V50.109C249.041 50.1319 248.759 50.1624 248.5 50.1624Z" fill="#8C8C8C"/>
<path d="M243.449 40.7325C242.991 40.7325 242.617 40.3586 242.617 39.9009C242.617 39.4355 242.991 39.0693 243.449 39.0693C243.914 39.0693 244.28 39.4355 244.28 39.9009C244.28 40.3586 243.914 40.7325 243.449 40.7325ZM242.785 50.0098V42.0752H244.113V50.0098H242.785Z" fill="#8C8C8C"/>
<path d="M230.143 50.0098V42.0752H231.471V43.2349H231.501C231.86 42.4491 232.653 41.9227 233.676 41.9227C234.759 41.9227 235.56 42.4796 235.903 43.4485H235.934C236.376 42.4949 237.307 41.9227 238.421 41.9227C239.993 41.9227 241.007 42.9526 241.007 44.5319V50.0098H239.68V44.8371C239.68 43.7461 239.077 43.0976 238.032 43.0976C236.979 43.0976 236.239 43.8834 236.239 44.9668V50.0098H234.912V44.6921C234.912 43.7308 234.271 43.0976 233.287 43.0976C232.234 43.0976 231.471 43.9292 231.471 45.0354V50.0098H230.143Z" fill="#8C8C8C"/>
<path d="M217.585 50.0098V42.0752H218.913V43.2349H218.943C219.302 42.4491 220.095 41.9227 221.118 41.9227C222.201 41.9227 223.002 42.4796 223.345 43.4485H223.376C223.818 42.4949 224.749 41.9227 225.863 41.9227C227.435 41.9227 228.449 42.9526 228.449 44.5319V50.0098H227.122V44.8371C227.122 43.7461 226.519 43.0976 225.474 43.0976C224.421 43.0976 223.681 43.8834 223.681 44.9668V50.0098H222.354V44.6921C222.354 43.7308 221.713 43.0976 220.729 43.0976C219.676 43.0976 218.913 43.9292 218.913 45.0354V50.0098H217.585Z" fill="#8C8C8C"/>
<path d="M212.573 50.1624C210.368 50.1624 208.895 48.5679 208.895 46.0425V46.0273C208.895 43.5019 210.375 41.9227 212.565 41.9227C214.755 41.9227 216.242 43.4943 216.242 46.0273V46.0425C216.242 48.5755 214.762 50.1624 212.573 50.1624ZM212.58 48.9875C213.977 48.9875 214.884 47.9041 214.884 46.0425V46.0273C214.884 44.1657 213.969 43.0976 212.565 43.0976C211.184 43.0976 210.253 44.1733 210.253 46.0273V46.0425C210.253 47.9117 211.177 48.9875 212.58 48.9875Z" fill="#8C8C8C"/>
<path d="M203.364 50.1929C200.305 50.1929 198.336 47.9651 198.336 44.5014V44.4938C198.336 41.03 200.297 38.8175 203.364 38.8175C205.653 38.8175 207.431 40.206 207.85 42.2889L207.865 42.3652H206.477L206.423 42.1973C205.996 40.8622 204.913 40.084 203.364 40.084C201.167 40.084 199.748 41.8158 199.748 44.4938V44.5014C199.748 47.1793 201.174 48.9264 203.364 48.9264C204.905 48.9264 205.973 48.1635 206.454 46.7139L206.477 46.6453H207.865L207.85 46.7215C207.431 48.8273 205.668 50.1929 203.364 50.1929Z" fill="#8C8C8C"/>
<path d="M189.746 50.1929C187.213 50.1929 185.71 48.0033 185.71 44.509V44.4938C185.71 40.9995 187.213 38.8175 189.746 38.8175C192.279 38.8175 193.797 40.9995 193.797 44.4938V44.509C193.797 48.0033 192.279 50.1929 189.746 50.1929ZM189.746 48.9951C191.424 48.9951 192.416 47.2709 192.416 44.509V44.4938C192.416 41.7319 191.424 40.0229 189.746 40.0229C188.067 40.0229 187.091 41.7319 187.091 44.4938V44.509C187.091 47.2709 188.067 48.9951 189.746 48.9951Z" fill="#8C8C8C"/>
<path d="M181.788 50.0098V40.4578H181.758L178.843 42.4872V41.1063L181.773 39.0006H183.116V50.0098H181.788Z" fill="#8C8C8C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M280.408 51.6667V37.3438H281.71V51.6667H280.408Z" fill="#8C8C8C"/>
<path d="M365.697 50.1624C363.668 50.1624 362.325 48.545 362.325 46.0425V46.0349C362.325 43.5325 363.683 41.9227 365.674 41.9227C366.796 41.9227 367.719 42.4872 368.215 43.4028H368.245V39.0006H369.573V50.0098H368.245V48.667H368.215C367.719 49.5902 366.834 50.1624 365.697 50.1624ZM365.957 48.9875C367.299 48.9875 368.253 47.8202 368.253 46.0425V46.0349C368.253 44.2649 367.292 43.0976 365.957 43.0976C364.553 43.0976 363.683 44.2267 363.683 46.0349V46.0425C363.683 47.866 364.553 48.9875 365.957 48.9875Z" fill="#8C8C8C"/>
<path d="M354.474 50.0098V42.0752H355.802V43.2044H355.832C356.26 42.4643 357.068 41.9227 358.274 41.9227C360.013 41.9227 361.02 43.0518 361.02 44.86V50.0098H359.693V45.0965C359.693 43.8071 359.09 43.0976 357.869 43.0976C356.618 43.0976 355.802 43.9902 355.802 45.3406V50.0098H354.474Z" fill="#8C8C8C"/>
<path d="M348.951 50.1624C347.371 50.1624 346.311 49.2087 346.311 47.7668V47.7515C346.311 46.4011 347.364 45.5542 349.187 45.4474L351.461 45.3177V44.654C351.461 43.685 350.828 43.0976 349.721 43.0976C348.699 43.0976 348.058 43.5859 347.905 44.2954L347.89 44.3641H346.608L346.616 44.2801C346.731 42.9755 347.867 41.9227 349.737 41.9227C351.613 41.9227 352.788 42.9374 352.788 44.5243V50.0098H351.461V48.7204H351.43C350.965 49.5902 350.011 50.1624 348.951 50.1624ZM347.669 47.7668C347.669 48.5297 348.295 49.0104 349.248 49.0104C350.499 49.0104 351.461 48.1482 351.461 46.9962V46.3477L349.34 46.4774C348.279 46.5384 347.669 47.0115 347.669 47.7515V47.7668Z" fill="#8C8C8C"/>
<path d="M338.277 50.0098V39.0006H339.605V43.3417H339.635C340.062 42.4491 340.925 41.9227 342.107 41.9227C343.793 41.9227 344.945 43.2273 344.945 45.1499V50.0098H343.618V45.3788C343.618 43.9444 342.885 43.0976 341.649 43.0976C340.421 43.0976 339.605 44.0284 339.605 45.3788V50.0098H338.277Z" fill="#8C8C8C"/>
<path d="M331.556 46.1646V44.9286H336.438V46.1646H331.556Z" fill="#8C8C8C"/>
<path d="M323.27 50.0098V42.0752H324.598V43.2044H324.628C325.055 42.4643 325.864 41.9227 327.07 41.9227C328.809 41.9227 329.816 43.0518 329.816 44.86V50.0098H328.489V45.0965C328.489 43.8071 327.886 43.0976 326.665 43.0976C325.414 43.0976 324.598 43.9902 324.598 45.3406V50.0098H323.27Z" fill="#8C8C8C"/>
<path d="M316.701 50.1929C313.573 50.1929 311.62 48.0033 311.62 44.509V44.4938C311.62 41.0071 313.581 38.8175 316.701 38.8175C319.814 38.8175 321.767 41.0071 321.767 44.4938V44.509C321.767 48.0033 319.822 50.1929 316.701 50.1929ZM316.701 48.9264C318.967 48.9264 320.363 47.1946 320.363 44.509V44.4938C320.363 41.793 318.944 40.084 316.701 40.084C314.451 40.084 313.024 41.7853 313.024 44.4938V44.509C313.024 47.2175 314.443 48.9264 316.701 48.9264Z" fill="#8C8C8C"/>
<path d="M303.029 50.1929C300.496 50.1929 298.993 48.0033 298.993 44.509V44.4938C298.993 40.9995 300.496 38.8175 303.029 38.8175C305.562 38.8175 307.081 40.9995 307.081 44.4938V44.509C307.081 48.0033 305.562 50.1929 303.029 50.1929ZM303.029 48.9951C304.708 48.9951 305.7 47.2709 305.7 44.509V44.4938C305.7 41.7319 304.708 40.0229 303.029 40.0229C301.351 40.0229 300.374 41.7319 300.374 44.4938V44.509C300.374 47.2709 301.351 48.9951 303.029 48.9951Z" fill="#8C8C8C"/>
<path d="M295.072 50.0098V40.4578H295.041L292.127 42.4872V41.1063L295.057 39.0006H296.399V50.0098H295.072Z" fill="#8C8C8C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M379.99 51.6667V37.3438H381.292V51.6667H379.99Z" fill="#8C8C8C"/>
<path d="M465.347 50.1624C463.066 50.1624 461.693 48.5679 461.693 46.073V46.0654C461.693 43.6088 463.097 41.9227 465.263 41.9227C467.43 41.9227 468.75 43.5325 468.75 45.9128V46.4011H463.036C463.066 48.0338 463.966 48.9875 465.378 48.9875C466.385 48.9875 467.094 48.4839 467.323 47.8049L467.346 47.7363H468.651L468.636 47.8125C468.376 49.1248 467.079 50.1624 465.347 50.1624ZM465.256 43.0976C464.104 43.0976 463.203 43.8834 463.058 45.3635H467.4C467.27 43.8224 466.415 43.0976 465.256 43.0976Z" fill="#8C8C8C"/>
<path d="M458.961 50.0098V39.0006H460.289V50.0098H458.961Z" fill="#8C8C8C"/>
<path d="M454.185 50.1624C453.049 50.1624 452.164 49.5902 451.668 48.667H451.637V50.0098H450.31V39.0006H451.637V43.4028H451.668C452.164 42.4872 453.087 41.9227 454.208 41.9227C456.2 41.9227 457.558 43.5325 457.558 46.0349V46.0425C457.558 48.545 456.215 50.1624 454.185 50.1624ZM453.926 48.9875C455.33 48.9875 456.2 47.866 456.2 46.0425V46.0349C456.2 44.2267 455.33 43.0976 453.926 43.0976C452.591 43.0976 451.63 44.2649 451.63 46.0349V46.0425C451.63 47.8202 452.583 48.9875 453.926 48.9875Z" fill="#8C8C8C"/>
<path d="M444.717 50.1624C443.138 50.1624 442.078 49.2087 442.078 47.7668V47.7515C442.078 46.4011 443.13 45.5542 444.954 45.4474L447.227 45.3177V44.654C447.227 43.685 446.594 43.0976 445.488 43.0976C444.466 43.0976 443.825 43.5859 443.672 44.2954L443.657 44.3641H442.375L442.383 44.2801C442.497 42.9755 443.634 41.9227 445.503 41.9227C447.38 41.9227 448.555 42.9374 448.555 44.5243V50.0098H447.227V48.7204H447.197C446.732 49.5902 445.778 50.1624 444.717 50.1624ZM443.436 47.7668C443.436 48.5297 444.061 49.0104 445.015 49.0104C446.266 49.0104 447.227 48.1482 447.227 46.9962V46.3477L445.107 46.4774C444.046 46.5384 443.436 47.0115 443.436 47.7515V47.7668Z" fill="#8C8C8C"/>
<path d="M439.278 50.0098V39.0006H440.605V50.0098H439.278Z" fill="#8C8C8C"/>
<path d="M436.737 40.7325C436.279 40.7325 435.905 40.3586 435.905 39.9009C435.905 39.4355 436.279 39.0693 436.737 39.0693C437.202 39.0693 437.569 39.4355 437.569 39.9009C437.569 40.3586 437.202 40.7325 436.737 40.7325ZM436.073 50.0098V42.0752H437.401V50.0098H436.073Z" fill="#8C8C8C"/>
<path d="M430.466 50.1624C428.886 50.1624 427.826 49.2087 427.826 47.7668V47.7515C427.826 46.4011 428.879 45.5542 430.702 45.4474L432.976 45.3177V44.654C432.976 43.685 432.343 43.0976 431.236 43.0976C430.214 43.0976 429.573 43.5859 429.42 44.2954L429.405 44.3641H428.123L428.131 44.2801C428.246 42.9755 429.382 41.9227 431.252 41.9227C433.128 41.9227 434.303 42.9374 434.303 44.5243V50.0098H432.976V48.7204H432.945C432.48 49.5902 431.526 50.1624 430.466 50.1624ZM429.184 47.7668C429.184 48.5297 429.81 49.0104 430.763 49.0104C432.014 49.0104 432.976 48.1482 432.976 46.9962V46.3477L430.855 46.4774C429.794 46.5384 429.184 47.0115 429.184 47.7515V47.7668Z" fill="#8C8C8C"/>
<path d="M422.981 50.0098L420.059 42.0752H421.455L423.645 48.5984H423.676L425.873 42.0752H427.254L424.339 50.0098H422.981Z" fill="#8C8C8C"/>
<path d="M410.751 50.0098L414.848 39.0006H416.206L420.296 50.0098H418.854L417.74 46.8589H413.307L412.193 50.0098H410.751ZM415.512 40.6485L413.727 45.6916H417.328L415.543 40.6485H415.512Z" fill="#8C8C8C"/>
<path d="M402.611 50.1929C400.078 50.1929 398.575 48.0033 398.575 44.509V44.4938C398.575 40.9995 400.078 38.8175 402.611 38.8175C405.144 38.8175 406.662 40.9995 406.662 44.4938V44.509C406.662 48.0033 405.144 50.1929 402.611 50.1929ZM402.611 48.9951C404.289 48.9951 405.281 47.2709 405.281 44.509V44.4938C405.281 41.7319 404.289 40.0229 402.611 40.0229C400.932 40.0229 399.956 41.7319 399.956 44.4938V44.509C399.956 47.2709 400.932 48.9951 402.611 48.9951Z" fill="#8C8C8C"/>
<path d="M394.653 50.0098V40.4578H394.623L391.708 42.4872V41.1063L394.638 39.0006H395.981V50.0098H394.653Z" fill="#8C8C8C"/>
`,
      delay: 2000,
    },
    {
      page: "Part details",
      image: "/images/fb-w-inventory.png",
      step: "2/5",
      explanation: "Review part details (e.g. product image, product number, location, tracking info, status, etc).",
      imgTranslateX: 860,
      imgTranslateY: 220,
      imgScale: 150,
      svgContainerX: 300,
      svgContainerY: 92,
      ringWidth: 120,
      ringHeight: 120,
      svgWidth: 120,
      svgHeight: 120,
      svgPath: `<path d="M35.1205 50.3581C33.6504 50.3581 32.8145 49.4934 32.8145 47.9945V40.9323C32.8145 34.9944 35.8411 32.0254 41.8655 32.0254H48.8988C50.4266 32.0254 51.2625 32.8325 51.2625 34.3314C51.2625 35.8303 50.4266 36.6662 48.8988 36.6662H41.9232C39.0407 36.6662 37.4553 38.1939 37.4553 41.1918V47.9945C37.4553 49.4934 36.6482 50.3581 35.1205 50.3581ZM86.9191 50.3581C85.449 50.3581 84.6131 49.4934 84.6131 47.9945V41.1918C84.6131 38.1939 82.97 36.6662 80.1163 36.6662H73.1407C71.6418 36.6662 70.8059 35.8303 70.8059 34.3314C70.8059 32.8325 71.6418 32.0254 73.1407 32.0254H80.2028C86.2273 32.0254 89.2539 34.9944 89.2539 40.9323V47.9945C89.2539 49.4934 88.4468 50.3581 86.9191 50.3581ZM47.8611 71.9481V48.5133H49.9365V71.9481H47.8611ZM52.5308 71.9481V48.5133H56.4222V71.9481H52.5308ZM58.1517 71.9481V48.5133H60.6018V71.9481H58.1517ZM62.7925 71.9481V48.5133H66.5686V71.9481H62.7925ZM68.1251 71.9481V48.5133H71.1518V71.9481H68.1251ZM72.2471 71.9481V48.5133H74.1784V71.9481H72.2471ZM41.8655 88.436C35.8411 88.436 32.8145 85.467 32.8145 79.5002V72.4669C32.8145 70.9392 33.6216 70.1033 35.1205 70.1033C36.6194 70.1033 37.4553 70.9392 37.4553 72.4669V79.2696C37.4553 82.2674 39.0407 83.7952 41.9232 83.7952H48.8988C50.4266 83.7952 51.2625 84.6311 51.2625 86.13C51.2625 87.6001 50.4266 88.436 48.8988 88.436H41.8655ZM73.1407 88.436C71.6418 88.436 70.8059 87.6001 70.8059 86.13C70.8059 84.6311 71.6418 83.7952 73.1407 83.7952H80.1163C82.97 83.7952 84.6131 82.2674 84.6131 79.2696V72.4669C84.6131 70.9392 85.4202 70.1033 86.9191 70.1033C88.418 70.1033 89.2539 70.9392 89.2539 72.4669V79.5002C89.2539 85.4382 86.2273 88.436 80.2028 88.436H73.1407Z" fill="#434653" />`,
      delay: 6000,
    },
    {
      page: "Edit and view",
      image: "/images/fb-w-inventory.png",
      step: "3/5",
      explanation: "Part information is default view only. Tap on Edit to modify any editable details.",
      imgTranslateX: 860,
      imgTranslateY: 220,
      imgScale: 150,
      svgContainerX: 300,
      svgContainerY: 92,
      ringWidth: 120,
      ringHeight: 120,
      svgWidth: 120,
      svgHeight: 120,
      svgPath: `
<path d="M0.769531 28.8281C0.769531 29.6346 1.05985 30.3443 1.67276 30.9572L27.2534 55.9572C27.8018 56.5378 28.5115 56.8281 29.3502 56.8281C31.0276 56.8281 32.3179 55.5701 32.3179 53.8926C32.3179 53.0539 31.9631 52.3443 31.447 51.7959L7.96308 28.8281L31.447 5.86038C31.9631 5.312 32.3179 4.57006 32.3179 3.76361C32.3179 2.08619 31.0276 0.828125 29.3502 0.828125C28.5115 0.828125 27.8018 1.11845 27.2534 1.66683L1.67276 26.6991C1.05985 27.2797 0.769531 28.0217 0.769531 28.8281Z" fill="#434653"/>`,
      delay: 10000,
    },
    {
      page: "Back button",
      image: "/images/fb-w-inventory-4.png",
      step: "4/5",
      explanation: "Initial view of module is of a table with all basic information. Back button is needed to view this table again. This is in edit mode.",
      imgTranslateX: 860,
      imgTranslateY: 220,
      imgScale: 150,
      svgContainerX: 300,
      svgContainerY: 92,
      ringWidth: 120,
      ringHeight: 120,
      svgWidth: 120,
      svgHeight: 120,
      svgPath: `<path d="M35.1205 50.3581C33.6504 50.3581 32.8145 49.4934 32.8145 47.9945V40.9323C32.8145 34.9944 35.8411 32.0254 41.8655 32.0254H48.8988C50.4266 32.0254 51.2625 32.8325 51.2625 34.3314C51.2625 35.8303 50.4266 36.6662 48.8988 36.6662H41.9232C39.0407 36.6662 37.4553 38.1939 37.4553 41.1918V47.9945C37.4553 49.4934 36.6482 50.3581 35.1205 50.3581ZM86.9191 50.3581C85.449 50.3581 84.6131 49.4934 84.6131 47.9945V41.1918C84.6131 38.1939 82.97 36.6662 80.1163 36.6662H73.1407C71.6418 36.6662 70.8059 35.8303 70.8059 34.3314C70.8059 32.8325 71.6418 32.0254 73.1407 32.0254H80.2028C86.2273 32.0254 89.2539 34.9944 89.2539 40.9323V47.9945C89.2539 49.4934 88.4468 50.3581 86.9191 50.3581ZM47.8611 71.9481V48.5133H49.9365V71.9481H47.8611ZM52.5308 71.9481V48.5133H56.4222V71.9481H52.5308ZM58.1517 71.9481V48.5133H60.6018V71.9481H58.1517ZM62.7925 71.9481V48.5133H66.5686V71.9481H62.7925ZM68.1251 71.9481V48.5133H71.1518V71.9481H68.1251ZM72.2471 71.9481V48.5133H74.1784V71.9481H72.2471ZM41.8655 88.436C35.8411 88.436 32.8145 85.467 32.8145 79.5002V72.4669C32.8145 70.9392 33.6216 70.1033 35.1205 70.1033C36.6194 70.1033 37.4553 70.9392 37.4553 72.4669V79.2696C37.4553 82.2674 39.0407 83.7952 41.9232 83.7952H48.8988C50.4266 83.7952 51.2625 84.6311 51.2625 86.13C51.2625 87.6001 50.4266 88.436 48.8988 88.436H41.8655ZM73.1407 88.436C71.6418 88.436 70.8059 87.6001 70.8059 86.13C70.8059 84.6311 71.6418 83.7952 73.1407 83.7952H80.1163C82.97 83.7952 84.6131 82.2674 84.6131 79.2696V72.4669C84.6131 70.9392 85.4202 70.1033 86.9191 70.1033C88.418 70.1033 89.2539 70.9392 89.2539 72.4669V79.5002C89.2539 85.4382 86.2273 88.436 80.2028 88.436H73.1407Z" fill="#434653" />`,
      delay: 14000,
    },
    {
      page: "FAB",
      image: "/images/fb-w-inventory-5.png",
      step: "5/5",
      explanation: "Tap on FAB to access actions (e.g. move part, delete, etc)",
      imgTranslateX: 860,
      imgTranslateY: 220,
      imgScale: 150,
      svgContainerX: 300,
      svgContainerY: 92,
      ringWidth: 120,
      ringHeight: 120,
      svgWidth: 120,
      svgHeight: 120,
      svgPath: `
<path d="M150 116.406C150 132.975 136.569 146.406 120 146.406C103.431 146.406 90 132.975 90 116.406C90 99.8377 103.431 86.4062 120 86.4062C136.569 86.4062 150 99.8377 150 116.406Z" fill="#BFBFBF"/>
<path d="M105.599 121.204C108.25 121.204 110.399 119.054 110.399 116.404C110.399 113.753 108.25 111.604 105.599 111.604C102.948 111.604 100.799 113.753 100.799 116.404C100.799 119.054 102.948 121.204 105.599 121.204Z" fill="white"/>
<path d="M119.999 121.204C122.65 121.204 124.799 119.054 124.799 116.404C124.799 113.753 122.65 111.604 119.999 111.604C117.348 111.604 115.199 113.753 115.199 116.404C115.199 119.054 117.348 121.204 119.999 121.204Z" fill="white"/>
<path d="M134.4 121.204C137.051 121.204 139.2 119.054 139.2 116.404C139.2 113.753 137.051 111.604 134.4 111.604C131.749 111.604 129.6 113.753 129.6 116.404C129.6 119.054 131.749 121.204 134.4 121.204Z" fill="white"/>
<path d="M191 30C191 46.5685 177.569 60 161 60C144.431 60 131 46.5685 131 30C131 13.4315 144.431 0 161 0C177.569 0 191 13.4315 191 30Z" fill="#434653"/>
<path d="M141.8 20.4012C141.8 17.7502 143.949 15.6012 146.6 15.6012H175.4C178.051 15.6012 180.2 17.7502 180.2 20.4012V39.6012C180.2 42.2521 178.051 44.4012 175.4 44.4012H146.6C143.949 44.4012 141.8 42.2521 141.8 39.6012V20.4012Z" fill="#696B75"/>
<path d="M108 30C108 46.5685 94.5685 60 78 60C61.4315 60 48 46.5685 48 30C48 13.4315 61.4315 0 78 0C94.5685 0 108 13.4315 108 30Z" fill="#434653"/>
<path d="M58.8 20.4012C58.8 17.7502 60.949 15.6012 63.6 15.6012H92.4C95.051 15.6012 97.2 17.7502 97.2 20.4012V39.6012C97.2 42.2521 95.051 44.4012 92.4 44.4012H63.6C60.949 44.4012 58.8 42.2521 58.8 39.6012V20.4012Z" fill="#696B75"/>
<path d="M60 90C60 106.569 46.5685 120 30 120C13.4315 120 0 106.569 0 90C0 73.4315 13.4315 60 30 60C46.5685 60 60 73.4315 60 90Z" fill="#434653"/>
<path d="M10.8 80.4012C10.8 77.7502 12.949 75.6012 15.6 75.6012H44.4C47.051 75.6012 49.2 77.7502 49.2 80.4012V99.6012C49.2 102.252 47.051 104.401 44.4 104.401H15.6C12.949 104.401 10.8 102.252 10.8 99.6012V80.4012Z" fill="#696B75"/>
<path d="M240 90C240 106.569 226.569 120 210 120C193.431 120 180 106.569 180 90C180 73.4315 193.431 60 210 60C226.569 60 240 73.4315 240 90Z" fill="#434653"/>
<path d="M190.8 80.4012C190.8 77.7502 192.949 75.6012 195.6 75.6012H224.4C227.051 75.6012 229.2 77.7502 229.2 80.4012V99.6012C229.2 102.252 227.051 104.401 224.4 104.401H195.6C192.949 104.401 190.8 102.252 190.8 99.6012V80.4012Z" fill="#696B75"/>
`,
      delay: 18000,
    },
  ]

  const animationSteps = [
    {
      image: "/images/fb-wireframe-1.png",
      step: "1/5",
      description: "Navigation, quick actions and searching through inventory were essential features we needed to refine.",
      zoomPosition: { x: "60%", y: "30%", scale: 1.5 },
    },
    {
      image: "/images/fb-wireframe-1.png",
      step: "2/5",
      description: "Review part details (e.g. product image, product number, location, tracking info, status, etc).",
      zoomPosition: { x: "18%", y: "30%", scale: 1.25 },    },
    {
      image: "/images/fb-wireframe-1.png",
      step: "3/5",
      description: "Part information is default view only. Tap on Edit to modify any editable details.",
      zoomPosition: { x: "-20%", y: "30%", scale: 1.25 },    },
    {
      image: "/images/fb-wireframe-2.png",
      step: "4/5",
      description: "Initial view of module is of a table with all basic information. Back button is needed to view this table again.",
      zoomPosition: { x: "60%", y: "30%", scale: 1.5 },    },
    {
      image: "/images/fb-wireframe-1.png",
      step: "5/5",
      description: "Tap on FAB to access actions (e.g. move part, delete, etc)",
      zoomPosition: { x: "15%", y: "-30%", scale: 1.5 },    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < annotationAnimation.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, annotationAnimation[currentIndex].delay);

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [currentIndex, annotationAnimation]);


  return (
    <>
      <div className="relative w-full h-screen">
        <BackgroundImages imageSM={images.imageSM}
          imageMD={images.imageMD}
          imageLG={images.imageLG} />
        <Hero {...hero} />
        {/* Overlay */}
        <div className="relative w-full z-20">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full bg-repeat-y bg-fixed"
            style={{
              backgroundImage: "url('/images/background-texture-dots.png')",
              backgroundSize: "auto", // Ensures image doesn't scale but repeats naturally
            }}
          ></div>
          {/* Content */}
          <div className="relative z-30"></div>
          <Overview {...overview} />
          <Problem problem="Through competitor analysis and usability evaluation, we identified an industry-wide struggle to adapt inventory management tools for mobile use. Many business owners rely on desktop-only software, which creates inefficiencies when managing tasks remotely. Existing mobile apps primarily focus on warehouse activities, leaving a gap for administrative tasks like reviewing inventory, managing orders, and accessing data." />
          <SprintImg
            imageSM={sprint.imageSM}
            imageMD={sprint.imageMD}
            imageLG={sprint.imageLG}
            problem={sprint.problem}
            approach={sprint.approach}
            chartData={chartData}

          />
          <div className="bg-transparent mx-auto max-w-300 relative z-32 h-300 md:h-80 pt-12 pb-16 px-6 sm:px-6 md:px-14 lg:px-32 grid grid-cols-1 md:grid-cols-4 grid-flow-row items-start gap-8">
            {painPoints.map((point, index) => (
              <PainPoints
                key={index}
                problem={point.problem}
                description={point.description}
                number={point.number}
              />
            ))}
          </div>
          <Understand user="User research revealed that accountants and business owners primarily depend on traditional, often manual methods for inventory management, such as desktop software, spreadsheets, and paper records. This reliance leads to several pain points:" />
          {/* Meet Users */}
          <div className="bg-transparent mx-auto max-w-300 h-fit overflow-visible relative z-32 py-12 pl-6 sm:pl-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
            <div className="col-start-1 col-span-full py-2 text-left">
              <h6 className="m-0 font-gilroy font-300 text-8 text-grey-800 tracking-wide">
                meet these users
              </h6>
            </div>
            {/* Horizontally Scrollable Grid */}
            <div className="grid grid-flow-col gap-8 col-span-full md:col-span-8 h-fit overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8">
              {cards.map((card, index) => (
                <div key={index} className="col-span-[1.5] md:col-span-2 snap-start shrink-0 h-fit">
                  <Card
                    image={card.image}
                    title={card.title}
                    job={card.job}
                    age={card.age}
                    quote={card.quote}
                    bio={card.bio}
                    frustrations={card.frustrations}
                    motivations={card.motivations}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* User Journey */}
          {journey.map((journey, index) => (
            <Journey key={index} {...journey} />
          ))}
          {/* Who, When, What, Why */}
          <div className="bg-transparent mx-auto max-w-300 h-fit overflow-visible relative z-32 pt-12 pb-16 pl-6 sm:pl-6 md:px-14 lg:px-32 grid grid-cols-1 md:grid-cols-8 gap-16">
            {/* User Story & Hypothesis - Appears first on mobile */}
            <div className="col-span-full md:col-span-4 gap-8 pr-6 sm:pr-6 order-1 md:order-3 grid grid-auto-flow-row h-fit">
              <p className="m-0 p-0 w-full h-fit text-left font-gilroy font-300 text-6 text-grey-800 tracking-wide">user story</p>
              <p className="m-0 p-0 w-full h-fit text-left font-gilroy font-300 text-6 text-grey-900 leading-relaxed">
                As a business owner who often works outside of the office, I need a way to easily review detailed inventory information on my phone or tablet so that I can make timely decisions without having to wait until I return to my desk, avoiding costly delays and frustration.
              </p>
              <p className="m-0 p-0 w-full h-fit text-left font-gilroy font-300 text-6 text-grey-800 tracking-wide">hypothesis</p>
              <p className="m-0 p-0 w-full h-fit text-left font-gilroy font-300 text-6 text-grey-900 leading-relaxed">
                We believe enhancing mobile inventory management will help business owners when they are on-the-go.
              </p>
            </div>
            {/* Horizontally Scrollable Cards - Moves below on mobile */}
            <div className="grid grid-flow-col md:col-span-4 md:grid-cols-2 md:auto-flow-row order-1 md:order-2 h-fit overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide gap-8">
              {questionCards.map((card, index) => (
                <div key={index} className="snap-start shrink-0 md:col-span-1 w-3/4 md:w-full h-fit">
                  <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    job={card.job}
                  />
                </div>
              ))}
            </div>
          </div>
          <Goal
            statement="To successfully launch Fishbowl Go, a user-friendly iPad/tablet app, designed to bridge the gap in mobile inventory management for small to medium-sized businesses. Our aim was to simplify administrative tasks, making inventory management as efficient on tablets as it is on desktops. The goal was to enhance operational efficiency by at least 20% and improve user satisfaction, targeting a 15% increase in Fishbowl Inventory's client base within the first six months after launch."
            image={[
              "/images/fbgo-sticky1.png",
              "/images/fbgo-sticky2.png",
              "/images/fbgo-sticky3.png",
              "/images/fbgo-sticky4.png",
              "/images/fbgo-sticky5.png",
              "/images/fbgo-sticky6.png",
            ]}
          />


          <Insights {...insights} />
          <div className="bg-transparent mx-auto max-w-300 relative z-32 pt-16 pb-12 px-6 sm:px-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
            <div className="py-2 text-left col-start-1 col-span-8 md:col-span-4 items-start gap-2">
              <h5 className="h3 pb-8 font-600 tracking-wide">ideation</h5>
            </div>
            <div className='m-0 p-0 font-gilroy text-grey-600 col-start-1 col-span-8 md:col-start-5 md:col-span-4 text-left font-300 text-6 leading-relaxed'>
              Through rapid, paper-based sketching, we honed in on simplifying core tasks in the Fishbowl Go app. This exercise was key in integrating effective design patterns and streamlining user navigation between screens, striking a balance between simplicity and functionality.
            </div>
          </div>
          {/* Sketches */}
          <div className="bg-transparent mx-auto max-w-300 relative z-32 pt-12 pb-16 px-6 sm:px-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start">
            <img
              alt=""
              src="/images/fbgo-sketches-long.jpg"
              className="col-start-1 col-span-8 w-full"
            />
          </div>
          <SiteMap pages={sitemap} />
          {/* Wireframes */}
          <div className="bg-transparent mx-auto max-w-300 relative z-32 pt-12 pb-16 px-6 sm:px-6 md:px-14 lg:px-32 grid grid-cols-4 grid-flow-row items-start gap-8 text-left">
            <h6 className="col-start-1 col-span-4 row-start-1 row-span-1 m-0 font-gilroy font-300 text-8 text-grey-800 tracking-wide">digital wireframes</h6>
            <div className='m-0 py-4 px-0 col-start-1 col-span-4 row-start-2 row-span-1 font-gilroy font-300 text-6 leading-relaxed'>
              Hello there.
            </div>
            {/* 
            <div className='col-start-1 col-span-4 row-start-3 m-0 py-4'>
              <Annotation {...annotationAnimation[currentIndex]} isVisible={true} />


            </div>
*/}
        
          </div >
          <div className="min-h-screen flex items-center justify-center p-8">
          <AnimationSequence steps={animationSteps} />;    </div>

          <div className="bg-transparent mx-auto max-w-300 relative z-32 pt-16 pb-12 px-6 sm:px-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
            <div className="py-2 text-left col-start-1 col-span-8 md:col-span-4 items-start gap-2">
              <h5 className="h3 pb-8 font-600 tracking-wide">key mockups</h5>
            </div>
            <div className='m-0 p-0 font-gilroy text-grey-600 col-start-1 col-span-8 md:col-start-5 md:col-span-4 text-left font-300 text-6 leading-relaxed'>
              After several iterations of the scope of the project, layout, and features it was decided that we would focus on creating an iPad/tablet app geared toward administrative tasks - separate from the mobile app that is geared toward warehouse tasks.              </div>
          </div>
          <div className="bg-transparent mx-auto max-w-300 relative z-32 pt-12 pb-16 px-6 sm:px-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start">
            <img
              alt=""
              src="/images/mockup-fb.webp"
              className="col-start-1 col-span-8 w-full"
            />
          </div>
          <Outcomes sections={outcomes} />
          <div className="bg-transparent mx-auto max-w-300 relative z-32 pt-16 pb-12 pl-6 sm:pl-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
            <div className="py-2 text-left col-start-1 col-span-8 md:col-span-4 items-start gap-2">
              <h5 className="h3 pb-8 font-600 tracking-wide">more work</h5>
            </div>
            <div className="grid grid-flow-col gap-8 col-span-full col-span-[1.5] md:col-span-8 h-fit overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide gap-8">
              {blogData.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project1
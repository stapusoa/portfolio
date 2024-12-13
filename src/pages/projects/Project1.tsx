import React from "react";
import { Card } from '../../components/index';
import { BackgroundImages, Hero, Goal, Overview, BlogCard, Problem, Insights, Understand, PainPoints, Journey, SiteMap, Outcomes } from "../sections/index";

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
      quote: "",
      bio: "",
      age: "",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
    {
      image: "/images/whereCard.jpg",
      title: "Where does the user experience the problem?",
      job: "Outside of the office",
      quote: "",
      bio: "",
      age: "",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
    {
      image: "/images/whenCard.jpg",
      title: "When does the problem occur?",
      job: "No access to a desktop and on-the-go",
      quote: "",
      bio: "",
      age: "",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
    {
      image: "/images/whyCard.jpg",
      title: "Why does the problem matter?",
      job: "Affects productivity and efficiency",
      quote: "",
      bio: "",
      age: "",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
  ]
  const images = {
    imageSM: "/images/sm_bg-proj1-hero.webp",
    imageMD: "/images/md_bg-proj1-hero.webp",
    imageLG: "/images/lg_bg-proj1-hero.webp",
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
      image: "/images/md_bg-proj3-hero.jpg",
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
      image: "/images/example.jpg", // Example placeholder image
      link: "/projects/Project5",
      product: "New Product",
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
        { section: "Settings", details: ["Preferences", "Permissions", "Module settings"],}
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
        { section: "Manufacture Order", details: ["Create new MO", "Issue/unissue orders", "Mo to PO", "Quick Build/Fulfill", "Editable general info: number, date scheduled, location group, class"]},
        { section: "Work Order", details: ["Creat new WO", "Issue/unissue orders", "WO to Pick", "WO to MO", "Quick Build/Fulfill", "Editable general info: scheduled start/finish, class, priority, category, location, customer/job"]},
        { section: "Bill of Materials", details: ["View scheduling, details, assigned users, and notes of each WO item", "View/edit instructions"]}
      ]
    },
    {
      page: "Sales",
      sections: [
        { section: "Sales Order", details: ["Add new sales order", "View/edit sales order", "Change status of SO", "Change date scheduled", "Change customer or shipping address", "Change carrier/service", "View totals", "View Tax info", "View SO items"]},
        { section: "Customers", details: ["View list of customers", "Add/edit customers", "Search customers by status, name, account number, location, contact, salesrep", "Edit general info (name, status, address, date created/last changed, user ID, contact info)"]},
        { section: "Picking", details: ["Add/delete items", "Add item by type", "Quick add product to item list", "Start, finish, void, commit, group orders"]},
        { section: "Packing", details: ["Add/delete items", "Add item by type", "Quick add product to item list", "Start, finish, void, commit, group orders"]},
        { section: "Shipping", details: ["Send to ship"]},
        { section: "Delivery", details: ["Signature"]}
      ]
    },
    {
      page: "Purchasing",
      sections: [
        { section: "Purchase Order", details: ["Add new purchase order", "View/edit PO", "Change date scheduled"]},
        { section: "Vendor", details: ["Change customer or shipping address", "Change carrier/service", "View list of vendors", "Search vendor by status, name, account number, location", "Edit general info (name, status, address, date entered/last changed, userID, contact info"]},
        { section: "Receiving", details: ["Receive, void, reconcile, fulfill orders"]}
      ]
    }
  ]
  const outcomes = [
    {
      description: "Usability testing of the Fishbowl Go prototype was a pivotal phase in our project, yielding crucial insights. The testing showed that our redesigned prototype markedly enhanced the existing app, significantly improving user-friendliness and efficiency, thereby addressing key user challenges. However, as we were preparing for the development phase, unforeseen organizational changes occurred. The acquisition of Fishbowl Inventory by another company led to a realignment of priorities and the eventual departure of our development team. This resulted in the project being shelved, despite the prototype&#39s demonstrated potential to meet and exceed user needs.",
      link: "",
      linkLabel: "prototype",
      image: "",
      points: [
        { label: "process and development", details: "Over the course of the project, our team worked diligently to understand and integrate user feedback into a comprehensive redesign of the Fishbowl Go app. My role involved closely collaborating with the development team, the Head of Product, and the UX Director to ensure that the new design addressed user needs effectively." },
        { label: "impact", details: "Though the redesigned Fishbowl Go app did not see the light of day in its intended form, the project left an indelible mark. It demonstrated the value of listening to user feedback and the need for continuous evolution in software design to meet changing user requirements. The insights gained from this project can serve as a valuable reference for future endeavors in similar domains." },
        { label: "considerations", details: "Following these developments, I made the decision to leave Fishbowl. Despite the project not reaching its final stages of development and deployment, the journey was filled with learning experiences and professional growth. The process underscored the importance of user-centered design and the impact it can have on product development." },
      ]
    }
  ]

  return (
    <>
      <div className="relative w-full h-screen">
        <BackgroundImages imageSM={images.imageSM}
          imageMD={images.imageMD}
          imageLG={images.imageLG} />
        <Hero {...hero} />
        {/* Overlay */}
        <div className="relative z-20 bg-white w-full h-screen">
          <div className="relative z-21 flex flex-col w-full">
            <Overview {...overview} />
            <Problem problem="Through competitor analysis and usability evaluation, we identified an industry-wide struggle to adapt inventory management tools for mobile use. Many business owners rely on desktop-only software, which creates inefficiencies when managing tasks remotely. Existing mobile apps primarily focus on warehouse activities, leaving a gap for administrative tasks like reviewing inventory, managing orders, and accessing data." />
            <div className="bg-white py-12 px-32">
              <img className="w-full rounded-lg sm:hidden lg:block" src="/images/fbgo-sprint-lg.jpg" />
              <img className="w-full rounded-lg sm:hidden md:block lg:hidden" src="/images/fbgo-sprint-md.jpg" />
              <img className="w-full rounded-lg sm:block md:hidden" src="/images/fbgo-sprint-sm.jpg" />
            </div>
            <div className="bg-white py-12 px-32 flex flex-row gap-12">
              <p className="m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed">
                Fishbowl Inventory clients specifically need a tablet-compatible solution that integrates seamlessly with their existing systems. This would enable them to manage tasks efficiently while on the go. Competitor solutions, while informative, often appeared over-engineered and introduced complexity that alienates non-technical users.
              </p>
              <p className="m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed">
                Our approach prioritized simplicity and alignment with the desktop client’s functionality, ensuring users could manage tasks intuitively while still benefiting from automation features. This focus aimed to empower users without overwhelming them, creating a solution that bridges the gap between desktop and mobile inventory management.
              </p>
            </div>
            <div className="bg-white py-12 px-32 flex flex-row gap-12">
              <svg className="w-180" viewBox="0 0 478 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="477" height="399" rx="7.5" stroke="#E4E4E7" />
                <mask id="path-2-inside-1_912_2753" fill="white">
                  <path d="M126 36H352V237H126V36Z" />
                </mask>
                <path d="M352 235H126V239H352V235Z" fill="#D4D4D4" mask="url(#path-2-inside-1_912_2753)" />
                <path d="M170.938 125.238C169.09 125.238 167.578 124.258 167.116 122.746L167.97 122.312C168.348 123.432 169.426 124.328 170.938 124.328C172.45 124.328 173.556 123.418 173.556 122.032C173.556 120.772 172.646 119.806 170.714 119.806H169.636V118.98H170.798C172.408 118.98 173.234 118.028 173.234 116.866C173.234 115.564 172.184 114.766 170.784 114.766C169.468 114.766 168.432 115.522 168.222 116.894L167.34 116.712C167.578 114.976 169.02 113.856 170.882 113.856C172.702 113.856 174.27 114.92 174.27 116.712C174.27 117.972 173.486 119.008 172.38 119.33V119.344C173.668 119.596 174.592 120.52 174.592 121.962C174.592 123.712 173.248 125.238 170.938 125.238ZM178.312 125V116.138C177.78 116.894 176.856 117.412 175.778 117.552V116.586C177.29 116.32 178.354 115.284 178.354 114.08H179.32V125H178.312ZM181.654 124.916C181.92 122.284 183.054 121.64 185.35 120.03C186.218 119.428 187.59 118.392 187.59 116.908C187.59 115.676 186.638 114.752 185.196 114.752C183.544 114.752 182.424 115.956 182.424 117.692L181.528 117.538C181.528 115.396 182.998 113.856 185.21 113.856C187.184 113.856 188.626 115.102 188.626 116.936C188.626 118.504 187.59 119.512 186.442 120.366C184.692 121.682 183.278 122.2 182.872 124.048H188.738V125H181.654V124.916Z" fill="#616972" />
                <rect x="151.5" y="136" width="53" height="101" fill="#5E89DC" />
                <path d="M232.95 72V69.312C231.088 69.312 229.226 69.312 227.364 69.312V68.332L232.964 61.08H233.944V68.402C234.49 68.402 235.022 68.402 235.554 68.402V69.312H233.944C233.944 70.208 233.944 71.104 233.944 72H232.95ZM228.4 68.402H232.95C232.95 66.428 232.95 64.44 232.95 62.452C231.494 64.37 229.87 66.484 228.4 68.402ZM240.67 72.238C238.444 72.238 236.89 70.866 236.89 69.074C236.89 67.702 237.744 66.638 239.018 66.274V66.246C237.912 65.784 237.296 64.888 237.296 63.796C237.296 62.144 238.696 60.856 240.67 60.856C242.602 60.856 244.016 62.088 244.016 63.726C244.016 64.79 243.428 65.784 242.294 66.246V66.274C243.568 66.638 244.436 67.702 244.436 69.074C244.436 70.88 242.854 72.238 240.67 72.238ZM237.94 68.962C237.94 70.418 239.144 71.37 240.656 71.37C242.168 71.37 243.386 70.418 243.386 68.962C243.386 67.604 242.448 66.652 240.67 66.652C238.878 66.652 237.94 67.59 237.94 68.962ZM238.29 63.754C238.29 65 239.298 65.896 240.67 65.896C242.014 65.896 243.022 65 243.022 63.754C243.022 62.55 242.014 61.696 240.67 61.696C239.312 61.696 238.29 62.55 238.29 63.754ZM248.109 72V63.138C247.577 63.894 246.653 64.412 245.575 64.552V63.586C247.087 63.32 248.151 62.284 248.151 61.08H249.117V72H248.109Z" fill="#616972" />
                <rect x="212.5" y="83" width="53" height="154" fill="#E8AB91" />
                <path d="M291.398 181V172.138C290.866 172.894 289.942 173.412 288.864 173.552V172.586C290.376 172.32 291.44 171.284 291.44 170.08H292.406V181H291.398ZM298.338 181.238C296.49 181.238 294.978 180.258 294.516 178.746L295.37 178.312C295.748 179.432 296.826 180.328 298.338 180.328C299.85 180.328 300.956 179.418 300.956 178.032C300.956 176.772 300.046 175.806 298.114 175.806H297.036V174.98H298.198C299.808 174.98 300.634 174.028 300.634 172.866C300.634 171.564 299.584 170.766 298.184 170.766C296.868 170.766 295.832 171.522 295.622 172.894L294.74 172.712C294.978 170.976 296.42 169.856 298.282 169.856C300.102 169.856 301.67 170.92 301.67 172.712C301.67 173.972 300.886 175.008 299.78 175.33V175.344C301.068 175.596 301.992 176.52 301.992 177.962C301.992 179.712 300.648 181.238 298.338 181.238ZM304.764 181C304.764 178.088 306.85 173.104 309.482 170.794H302.902V169.898H310.602V170.864C307.83 173.384 305.786 178.046 305.786 181H304.764Z" fill="#616972" />
                <rect x="273.5" y="192" width="53" height="45" fill="#81B29A" />
                <path d="M187.04 263C187.264 261.936 187.474 260.872 187.684 259.808H186.046L186.214 259.01H187.838C188.006 258.142 188.174 257.274 188.356 256.406H186.732L186.9 255.608H188.51C188.734 254.446 188.972 253.256 189.196 252.08H190.064C189.826 253.256 189.602 254.446 189.364 255.608H192.08C192.318 254.446 192.556 253.256 192.78 252.08H193.648C193.41 253.256 193.186 254.446 192.948 255.608H194.628L194.46 256.406H192.794C192.626 257.274 192.444 258.142 192.276 259.01H193.942L193.774 259.808H192.122C191.912 260.872 191.702 261.936 191.492 263H190.624C190.834 261.936 191.058 260.872 191.254 259.808H188.538C188.328 260.872 188.118 261.936 187.908 263H187.04ZM188.692 259.01H191.408C191.576 258.142 191.758 257.274 191.926 256.406H189.21C189.042 257.274 188.86 258.142 188.692 259.01ZM203.393 263.238C201.111 263.238 199.515 261.558 199.515 259.15C199.515 256.742 201.111 255.048 203.393 255.048C205.661 255.048 207.243 256.742 207.243 259.15C207.243 261.558 205.661 263.238 203.393 263.238ZM200.523 259.15C200.523 261.04 201.699 262.37 203.393 262.37C205.087 262.37 206.249 261.04 206.249 259.15C206.249 257.26 205.087 255.916 203.393 255.916C201.699 255.916 200.523 257.26 200.523 259.15ZM209.367 263V256.098C208.975 256.098 208.597 256.098 208.205 256.098V255.272H209.367C209.367 254.936 209.367 254.586 209.367 254.25C209.367 252.78 209.661 251.562 211.425 251.562C211.943 251.562 212.461 251.688 212.867 251.926V252.794C212.377 252.486 211.985 252.388 211.565 252.388C210.305 252.388 210.305 253.214 210.305 254.236V255.272C211.061 255.272 211.817 255.272 212.573 255.272V256.098H210.305C210.305 258.394 210.305 260.704 210.305 263H209.367ZM217.193 266.08V255.272H218.103V256.896H218.131C218.803 255.65 219.909 255.048 221.113 255.048C223.157 255.048 224.669 256.756 224.669 259.136C224.669 261.586 223.087 263.238 221.085 263.238C219.783 263.238 218.705 262.552 218.131 261.432V266.08H217.193ZM218.131 259.15C218.131 261.068 219.405 262.37 220.931 262.37C222.513 262.37 223.661 260.998 223.661 259.136C223.661 257.274 222.499 255.916 220.931 255.916C219.405 255.916 218.131 257.232 218.131 259.15ZM228.421 263.238C227.105 263.238 225.971 262.58 225.971 261.222C225.971 259.766 227.287 259.164 228.757 258.856C230.185 258.562 231.207 258.534 231.207 257.54C231.207 256.672 230.437 255.86 229.247 255.86C228.211 255.86 227.455 256.49 227.147 257.484L226.236 257.162C226.699 255.678 228.029 255.048 229.317 255.048C230.717 255.048 232.187 255.79 232.187 257.624V260.578C232.187 261.866 232.285 262.398 232.439 263H231.487C231.347 262.454 231.305 261.992 231.305 261.39H231.277C230.787 262.44 229.835 263.238 228.421 263.238ZM226.993 261.18C226.993 261.964 227.609 262.468 228.589 262.468C230.213 262.468 231.221 260.942 231.221 259.906V258.856C230.787 259.192 230.423 259.318 229.387 259.514C228.491 259.682 226.993 260.004 226.993 261.18ZM234.584 263V255.272H235.522V263H234.584ZM234.276 252.514C234.276 252.094 234.612 251.744 235.074 251.744C235.508 251.744 235.844 252.094 235.844 252.514C235.844 252.962 235.508 253.312 235.074 253.312C234.612 253.312 234.276 252.962 234.276 252.514ZM238.016 263V255.272H238.926V256.756H238.954C239.57 255.552 240.578 255.048 241.684 255.048C243.056 255.048 244.498 255.818 244.498 258.156V263H243.56V258.576C243.56 256.644 242.566 255.916 241.432 255.916C239.85 255.916 238.954 257.316 238.954 258.688V263H238.016ZM250.553 266.08V255.272H251.463V256.896H251.491C252.163 255.65 253.269 255.048 254.473 255.048C256.517 255.048 258.029 256.756 258.029 259.136C258.029 261.586 256.447 263.238 254.445 263.238C253.143 263.238 252.065 262.552 251.491 261.432V266.08H250.553ZM251.491 259.15C251.491 261.068 252.765 262.37 254.291 262.37C255.873 262.37 257.021 260.998 257.021 259.136C257.021 257.274 255.859 255.916 254.291 255.916C252.765 255.916 251.491 257.232 251.491 259.15ZM263.194 263.238C260.912 263.238 259.316 261.558 259.316 259.15C259.316 256.742 260.912 255.048 263.194 255.048C265.462 255.048 267.044 256.742 267.044 259.15C267.044 261.558 265.462 263.238 263.194 263.238ZM260.324 259.15C260.324 261.04 261.5 262.37 263.194 262.37C264.888 262.37 266.05 261.04 266.05 259.15C266.05 257.26 264.888 255.916 263.194 255.916C261.5 255.916 260.324 257.26 260.324 259.15ZM268.941 263V255.272H269.879V263H268.941ZM268.633 252.514C268.633 252.094 268.969 251.744 269.431 251.744C269.865 251.744 270.201 252.094 270.201 252.514C270.201 252.962 269.865 253.312 269.431 253.312C268.969 253.312 268.633 252.962 268.633 252.514ZM272.373 263V255.272H273.283V256.756H273.311C273.927 255.552 274.935 255.048 276.041 255.048C277.413 255.048 278.855 255.818 278.855 258.156V263H277.917V258.576C277.917 256.644 276.923 255.916 275.789 255.916C274.207 255.916 273.311 257.316 273.311 258.688V263H272.373ZM283.475 263.238C281.585 263.238 281.585 261.586 281.585 260.676V256.112C281.067 256.112 280.563 256.112 280.045 256.112V255.272H281.585C281.585 254.516 281.585 253.732 281.585 252.976H282.523V255.272C283.321 255.272 284.105 255.272 284.889 255.272V256.112H282.523C282.523 257.554 282.523 258.982 282.523 260.41C282.523 261.278 282.523 262.384 283.629 262.384C283.979 262.384 284.413 262.272 284.889 261.964V262.86C284.497 263.112 283.965 263.238 283.475 263.238ZM288.863 263.238C287.337 263.238 286.105 262.37 285.685 261.068L286.567 260.788C286.959 261.768 287.925 262.426 288.877 262.426C289.521 262.426 290.627 262.104 290.627 261.026C290.627 260.144 289.829 259.878 289.003 259.654L288.261 259.444C287.533 259.234 286.049 258.772 286.049 257.204C286.049 255.734 287.393 255.048 288.597 255.048C289.927 255.048 290.991 255.888 291.341 256.938L290.431 257.246C290.179 256.518 289.521 255.86 288.513 255.86C287.645 255.86 287.001 256.35 287.001 257.12C287.001 258.1 288.051 258.45 288.793 258.674L289.521 258.884C290.361 259.122 291.621 259.5 291.621 260.9C291.621 262.216 290.501 263.238 288.863 263.238Z" fill="#616972" />
                <rect x="61" y="308" width="24" height="24" fill="#5E89DC" />
                <path d="M96.568 326.5V319.598C96.176 319.598 95.798 319.598 95.406 319.598V318.772H96.568C96.568 318.436 96.568 318.086 96.568 317.75C96.568 316.28 96.862 315.062 98.626 315.062C99.144 315.062 99.662 315.188 100.068 315.426V316.294C99.578 315.986 99.186 315.888 98.766 315.888C97.506 315.888 97.506 316.714 97.506 317.736V318.772C98.262 318.772 99.018 318.772 99.774 318.772V319.598H97.506C97.506 321.894 97.506 324.204 97.506 326.5H96.568ZM100.81 316.014C100.81 315.594 101.146 315.244 101.608 315.244C102.042 315.244 102.378 315.594 102.378 316.014C102.378 316.462 102.042 316.812 101.608 316.812C101.146 316.812 100.81 316.462 100.81 316.014ZM101.118 326.5V318.772H102.056V326.5H101.118ZM106.953 326.738C105.427 326.738 104.195 325.87 103.774 324.568L104.657 324.288C105.049 325.268 106.015 325.926 106.967 325.926C107.611 325.926 108.717 325.604 108.717 324.526C108.717 323.644 107.919 323.378 107.093 323.154L106.351 322.944C105.623 322.734 104.139 322.272 104.139 320.704C104.139 319.234 105.483 318.548 106.687 318.548C108.017 318.548 109.081 319.388 109.431 320.438L108.521 320.746C108.269 320.018 107.611 319.36 106.603 319.36C105.735 319.36 105.091 319.85 105.091 320.62C105.091 321.6 106.141 321.95 106.883 322.174L107.611 322.384C108.451 322.622 109.711 323 109.711 324.4C109.711 325.716 108.591 326.738 106.953 326.738ZM111.49 326.5V315.3H112.428V320.256H112.456C113.072 319.052 114.052 318.548 115.144 318.548C116.516 318.548 117.972 319.318 117.972 321.656V326.5H117.034V322.076C117.034 320.144 116.04 319.416 114.906 319.416C113.324 319.416 112.428 320.83 112.428 322.188V326.5H111.49ZM124.242 326.738C122.968 326.738 121.876 326.08 121.288 324.932H121.26V326.5H120.35V315.3H121.288V320.382C121.96 319.15 123.066 318.548 124.27 318.548C126.314 318.548 127.826 320.256 127.826 322.636C127.826 325.086 126.244 326.738 124.242 326.738ZM121.288 322.65C121.288 324.568 122.562 325.87 124.088 325.87C125.67 325.87 126.818 324.498 126.818 322.636C126.818 320.774 125.656 319.416 124.088 319.416C122.548 319.416 121.288 320.746 121.288 322.65ZM132.991 326.738C130.709 326.738 129.113 325.058 129.113 322.65C129.113 320.242 130.709 318.548 132.991 318.548C135.259 318.548 136.841 320.242 136.841 322.65C136.841 325.058 135.259 326.738 132.991 326.738ZM130.121 322.65C130.121 324.54 131.297 325.87 132.991 325.87C134.685 325.87 135.847 324.54 135.847 322.65C135.847 320.76 134.685 319.416 132.991 319.416C131.297 319.416 130.121 320.76 130.121 322.65ZM140.517 326.5L137.703 318.772H138.753C139.523 320.928 140.293 323.07 141.049 325.226H141.077C141.833 323.07 142.603 320.928 143.359 318.772H144.297C145.067 320.928 145.851 323.07 146.635 325.226H146.663L148.889 318.772H149.939L147.139 326.5H146.117C145.333 324.344 144.549 322.132 143.835 319.976H143.807C143.093 322.132 142.309 324.344 141.511 326.5H140.517ZM151.426 326.5V315.3H152.364V326.5H151.426Z" fill="#616972" />
                <rect x="190" y="308" width="24" height="24" fill="#E8AB91" />
                <path d="M231.182 329.58V324.918C230.552 326.108 229.446 326.738 228.214 326.738C226.156 326.738 224.644 325.016 224.644 322.636C224.644 320.186 226.24 318.548 228.242 318.548C229.474 318.548 230.566 319.178 231.182 320.368H231.21V318.772H232.12V329.58H231.182ZM225.652 322.65C225.652 324.512 226.814 325.87 228.382 325.87C229.922 325.87 231.182 324.54 231.182 322.636C231.182 320.718 229.908 319.416 228.382 319.416C226.8 319.416 225.652 320.788 225.652 322.65ZM237.271 326.738C235.899 326.738 234.499 325.954 234.499 323.616V318.772H235.437V323.252C235.437 325.226 236.487 325.87 237.509 325.87C239.063 325.87 239.903 324.414 239.903 323.14V318.772H240.841V324.078C240.841 325.38 240.939 325.898 241.093 326.5H240.141C240.001 325.94 239.945 325.478 239.945 325.072H239.917C239.343 326.234 238.391 326.738 237.271 326.738ZM243.348 326.5V318.772H244.286V326.5H243.348ZM243.04 316.014C243.04 315.594 243.376 315.244 243.838 315.244C244.272 315.244 244.608 315.594 244.608 316.014C244.608 316.462 244.272 316.812 243.838 316.812C243.376 316.812 243.04 316.462 243.04 316.014ZM250.027 326.738C247.773 326.738 246.177 325.086 246.177 322.65C246.177 320.2 247.773 318.548 250.027 318.548C251.399 318.548 252.743 319.178 253.359 320.746L252.449 321.096C252.057 320.032 251.147 319.416 249.985 319.416C248.263 319.416 247.185 320.816 247.185 322.65C247.185 324.582 248.375 325.87 250.055 325.87C251.441 325.87 252.379 325.002 252.827 323.868L253.681 324.176C253.079 325.856 251.693 326.738 250.027 326.738ZM255.297 326.5V315.3H256.249V322.51H256.277C257.453 321.25 258.629 320.018 259.805 318.772H260.967C259.987 319.78 259.021 320.802 258.055 321.81C259.189 323.364 260.323 324.946 261.471 326.5H260.379C259.399 325.156 258.405 323.812 257.411 322.482C257.033 322.888 256.627 323.294 256.249 323.686V326.5H255.297ZM266.517 326.738C265.243 326.738 264.151 326.08 263.563 324.932H263.535V326.5H262.625V315.3H263.563V320.382C264.235 319.15 265.341 318.548 266.545 318.548C268.589 318.548 270.101 320.256 270.101 322.636C270.101 325.086 268.519 326.738 266.517 326.738ZM263.563 322.65C263.563 324.568 264.837 325.87 266.363 325.87C267.945 325.87 269.093 324.498 269.093 322.636C269.093 320.774 267.931 319.416 266.363 319.416C264.823 319.416 263.563 320.746 263.563 322.65ZM275.266 326.738C272.984 326.738 271.388 325.058 271.388 322.65C271.388 320.242 272.984 318.548 275.266 318.548C277.534 318.548 279.116 320.242 279.116 322.65C279.116 325.058 277.534 326.738 275.266 326.738ZM272.396 322.65C272.396 324.54 273.572 325.87 275.266 325.87C276.96 325.87 278.122 324.54 278.122 322.65C278.122 320.76 276.96 319.416 275.266 319.416C273.572 319.416 272.396 320.76 272.396 322.65ZM284.29 326.738C282.008 326.738 280.412 325.058 280.412 322.65C280.412 320.242 282.008 318.548 284.29 318.548C286.558 318.548 288.14 320.242 288.14 322.65C288.14 325.058 286.558 326.738 284.29 326.738ZM281.42 322.65C281.42 324.54 282.596 325.87 284.29 325.87C285.984 325.87 287.146 324.54 287.146 322.65C287.146 320.76 285.984 319.416 284.29 319.416C282.596 319.416 281.42 320.76 281.42 322.65ZM290.037 326.5V315.3H290.989V322.51H291.017C292.193 321.25 293.369 320.018 294.545 318.772H295.707C294.727 319.78 293.761 320.802 292.795 321.81C293.929 323.364 295.063 324.946 296.211 326.5H295.119C294.139 325.156 293.145 323.812 292.151 322.482C291.773 322.888 291.367 323.294 290.989 323.686V326.5H290.037ZM299.636 326.738C298.11 326.738 296.878 325.87 296.458 324.568L297.34 324.288C297.732 325.268 298.698 325.926 299.65 325.926C300.294 325.926 301.4 325.604 301.4 324.526C301.4 323.644 300.602 323.378 299.776 323.154L299.034 322.944C298.306 322.734 296.822 322.272 296.822 320.704C296.822 319.234 298.166 318.548 299.37 318.548C300.7 318.548 301.764 319.388 302.114 320.438L301.204 320.746C300.952 320.018 300.294 319.36 299.286 319.36C298.418 319.36 297.774 319.85 297.774 320.62C297.774 321.6 298.824 321.95 299.566 322.174L300.294 322.384C301.134 322.622 302.394 323 302.394 324.4C302.394 325.716 301.274 326.738 299.636 326.738Z" fill="#616972" />
                <rect x="327" y="308" width="24" height="24" fill="#81B29A" />
                <path d="M362.246 326.5V318.772H363.156V320.256H363.184C363.8 319.052 364.808 318.548 365.914 318.548C367.286 318.548 368.728 319.318 368.728 321.656V326.5H367.79V322.076C367.79 320.144 366.796 319.416 365.662 319.416C364.08 319.416 363.184 320.816 363.184 322.188V326.5H362.246ZM374.311 326.738C372.127 326.738 370.503 325.1 370.503 322.65C370.503 320.242 372.085 318.548 374.297 318.548C375.767 318.548 377.825 319.332 377.825 322.426V322.86H371.511C371.553 324.722 372.729 325.87 374.353 325.87C375.683 325.87 376.607 325.002 377.041 323.924L377.937 324.246C377.349 325.828 375.977 326.738 374.311 326.738ZM371.567 321.908H376.803C376.761 320.074 375.445 319.444 374.269 319.444C372.799 319.444 371.777 320.466 371.567 321.908ZM382.03 326.738C380.14 326.738 380.14 325.086 380.14 324.176V319.612C379.622 319.612 379.118 319.612 378.6 319.612V318.772H380.14C380.14 318.016 380.14 317.232 380.14 316.476H381.078V318.772C381.876 318.772 382.66 318.772 383.444 318.772V319.612H381.078C381.078 321.054 381.078 322.482 381.078 323.91C381.078 324.778 381.078 325.884 382.184 325.884C382.534 325.884 382.968 325.772 383.444 325.464V326.36C383.052 326.612 382.52 326.738 382.03 326.738ZM387.417 326.738C385.891 326.738 384.659 325.87 384.239 324.568L385.121 324.288C385.513 325.268 386.479 325.926 387.431 325.926C388.075 325.926 389.181 325.604 389.181 324.526C389.181 323.644 388.383 323.378 387.557 323.154L386.815 322.944C386.087 322.734 384.603 322.272 384.603 320.704C384.603 319.234 385.947 318.548 387.151 318.548C388.481 318.548 389.545 319.388 389.895 320.438L388.985 320.746C388.733 320.018 388.075 319.36 387.067 319.36C386.199 319.36 385.555 319.85 385.555 320.62C385.555 321.6 386.605 321.95 387.347 322.174L388.075 322.384C388.915 322.622 390.175 323 390.175 324.4C390.175 325.716 389.055 326.738 387.417 326.738ZM394.615 326.738C393.243 326.738 391.843 325.954 391.843 323.616V318.772H392.781V323.252C392.781 325.226 393.831 325.87 394.853 325.87C396.407 325.87 397.247 324.414 397.247 323.14V318.772H398.185V324.078C398.185 325.38 398.283 325.898 398.437 326.5H397.485C397.345 325.94 397.289 325.478 397.289 325.072H397.261C396.687 326.234 395.735 326.738 394.615 326.738ZM400.691 326.5V318.772H401.629V326.5H400.691ZM400.383 316.014C400.383 315.594 400.719 315.244 401.181 315.244C401.615 315.244 401.951 315.594 401.951 316.014C401.951 316.462 401.615 316.812 401.181 316.812C400.719 316.812 400.383 316.462 400.383 316.014ZM406.475 326.738C404.585 326.738 404.585 325.086 404.585 324.176V319.612C404.067 319.612 403.563 319.612 403.045 319.612V318.772H404.585C404.585 318.016 404.585 317.232 404.585 316.476H405.523V318.772C406.321 318.772 407.105 318.772 407.889 318.772V319.612H405.523C405.523 321.054 405.523 322.482 405.523 323.91C405.523 324.778 405.523 325.884 406.629 325.884C406.979 325.884 407.413 325.772 407.889 325.464V326.36C407.497 326.612 406.965 326.738 406.475 326.738ZM412.565 326.738C410.381 326.738 408.757 325.1 408.757 322.65C408.757 320.242 410.339 318.548 412.551 318.548C414.021 318.548 416.079 319.332 416.079 322.426V322.86H409.765C409.807 324.722 410.983 325.87 412.607 325.87C413.937 325.87 414.861 325.002 415.295 323.924L416.191 324.246C415.603 325.828 414.231 326.738 412.565 326.738ZM409.821 321.908H415.057C415.015 320.074 413.699 319.444 412.523 319.444C411.053 319.444 410.031 320.466 409.821 321.908Z" fill="#616972" />
              </svg>
              <div className="flex flex-col gap-12">
                <p className="m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed">
                  52.5% of users were satisfied with the app.
                </p>
                <p className="m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed">

                  Common pain points:<br />
                  - The UI is difficult to navigate.<br />
                  - Difficult to sort through reports and inventory summaries <br />
                  - Hard to fix problems without requesting support <br />
                  - Not a lot of automation or bulk action capabilities
                </p>

              </div>
            </div>
            <div className="bg-white h-70 py-12 px-32 grid grid-cols-4 grid-flow-row items-start gap-8">
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
            <div className="bg-white h-70 pt-12 pb-92 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="col-start-1 col-span-8 py-2 text-left">
                <h6 className="m-0 font-gilroy font-300 text-8 text-grey-800 tracking-wide">meet these users</h6>
              </div>
              <div className="flex gap-8">
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    job={card.job}
                    age={card.age}
                    quote={card.quote}
                    bio={card.bio}
                    frustrations={card.frustrations}
                    motivations={card.motivations}
                  />
                ))}
              </div>
            </div>
            {/* User Journey */}
            {journey.map((journey, index) => (
              <Journey key={index} {...journey} />
            ))}
            {/* Who, When, What, Why */}
            <div className="bg-white pt-12 pb-92 px-32 grid grid-cols-2 grid-flow-row items-start gap-32">

              <div className="grid grid-cols-2 auto-cols-max grid-flow-row items-start justify-start gap-20">
                {questionCards.map((card, index) => (
                  <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    job={card.job}
                    age={card.age}
                    quote={card.quote}
                    bio={card.bio}
                    frustrations={card.frustrations}
                    motivations={card.motivations}
                  />
                ))}
              </div>
              <div className="grid grid-cols-1 grid-flow-row items-start gap-8">
                <p className="m-0 p-0 text-left font-gilroy font-300 text-6 text-grey-800 tracking-wide">user story</p>
                <p className="m-0 p-0 text-left font-gilroy font-300 text-6 text-grey-900 leading-relaxed">
                  As a business owner who often works outside of the office, I need a way to easily review detailed inventory information on my phone or tablet so that I can make timely decisions without having to wait until I return to my desk, avoiding costly delays and frustration.
                </p>
                <p className="m-0 p-0 text-left font-gilroy font-300 text-6 text-grey-800 tracking-wide">hypothesis</p>
                <p className="m-0 p-0 text-left font-gilroy font-300 text-6 text-grey-900 leading-relaxed">
                  We believe enhancing mobile inventory management will help business owners when they are on-the-go.
                </p>
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
            <div className="bg-white pt-16 pb-12 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="py-2 text-left col-start-1 col-span-4 items-start gap-2">
                <h5 className="h3 pb-8 font-600 tracking-wide">ideation</h5>
              </div>
              <div className='m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed'>
                Through rapid, paper-based sketching, we honed in on simplifying core tasks in the Fishbowl Go app. This exercise was key in integrating effective design patterns and streamlining user navigation between screens, striking a balance between simplicity and functionality.
              </div>
            </div>
            {/* Sketches */}
            <div className="bg-white pt-12 pb-16 px-32 grid grid-cols-8 grid-flow-row items-start">
              <img
                alt=""
                src="/images/fbgo-sketches-long.jpg"
                className="col-start-1 col-span-8 w-full"
              />
            </div>
            <SiteMap pages={sitemap} />
            <div className="bg-white  pt-12 pb-16 px-32 grid grid-cols-4 grid-flow-row items-start gap-8 text-left">
              <h6 className="col-start-1 col-span-4 row-start-1 row-span-1 m-0 font-gilroy font-300 text-8 text-grey-800 tracking-wide">digital wireframes</h6>
              <img
                alt="Digital wireframe for Case Study"
                src="/images/wireframe-fb.webp" // Default (large screen)
                className="w-full col-start-1 col-span-2 row-start-2 row-span-2"
              />
              <div className='col-start-3 col-span-2 row-start-2 row-span-1 m-0 p-0 text-left font-gilroy font-300 text-7 leading-relaxed'>
                Navigation, quick actions and searching through inventory were essential features we needed to refine.
              </div>
              <img
                src="/images/wireframe-fb-2.webp"
                className="w-full col-start-3 col-span-2 row-start-3 row-span-1" />


            </div>
            <div className="bg-white pt-16 pb-12 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="py-2 text-left col-start-1 col-span-4 items-start gap-2">
                <h5 className="h3 pb-8 font-600 tracking-wide">key mockups</h5>
              </div>
              <div className='m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed'>
                After several iterations of the scope of the project, layout, and features it was decided that we would focus on creating an iPad/tablet app geared toward administrative tasks - separate from the mobile app that is geared toward warehouse tasks.              </div>
            </div>
            <div className="bg-white pt-12 pb-16 px-32 grid grid-cols-8 grid-flow-row items-start">
              <img
                alt=""
                src="/images/mockup-fb.webp"
                className="col-start-1 col-span-8 w-full"
              />
            </div>
            <Outcomes sections={outcomes} />
            <div className="bg-white py-16 px-32 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="py-2 text-left">
                  <h5 className="h3 pb-8 font-600 tracking-wide">more work</h5>
                </div>
                <div className="grid grid-cols-8 grid-flow-row gap-6 -ml-3 items-start text-left w-full justify-content">
                  {blogData.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                  ))}
                </div></div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project1
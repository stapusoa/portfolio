import React from "react";
import { Card } from '../../components/index';
import { BackgroundImages, Hero, Goal, Overview, BlogCard, Problem, Insights, Understand, PainPoints, Journey, SiteMap, Outcomes, SprintImg, Wireframes } from "../sections/index";
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
      job: "The average business owners",},
    {
      image: "/images/whereCard.jpg",
      title: "Where does the user experience the problem?",
      job: "Outside of the office",
    },
    {
      image: "/images/whenCard.jpg",
      title: "When does the problem occur?",
      job: "No access to a desktop and on-the-go",},
    {
      image: "/images/whyCard.jpg",
      title: "Why does the problem matter?",
      job: "Affects productivity and efficiency",},
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
      image: "/images/fishbowl.png",
      points: [
        { label: "process and development", details: "Over the course of the project, our team worked diligently to understand and integrate user feedback into a comprehensive redesign of the Fishbowl Go app. My role involved closely collaborating with the development team, the Head of Product, and the UX Director to ensure that the new design addressed user needs effectively." },
        { label: "impact", details: "Though the redesigned Fishbowl Go app did not see the light of day in its intended form, the project left an indelible mark. It demonstrated the value of listening to user feedback and the need for continuous evolution in software design to meet changing user requirements. The insights gained from this project can serve as a valuable reference for future endeavors in similar domains." },
        { label: "considerations", details: "Following these developments, I made the decision to leave Fishbowl. Despite the project not reaching its final stages of development and deployment, the journey was filled with learning experiences and professional growth. The process underscored the importance of user-centered design and the impact it can have on product development." },
      ]
    }
  ]
  const wireframes: Wireframes = {
    initial: "/images/fb-w-1.png",
    explanation: "",
    second: "/images/fb-w-2.png",
    third: "/images/fb-w-3.png",
    fourth: "/images/fb-w-4.png",
    fifth: "/images/fb-w-5.png",
    sixth: "/images/fb-w-6.png",
    seventh: "/images/fb-w-7.png",
    notes: "",
    more: "",
  };

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
            <SprintImg
              imageSM={sprint.imageSM}
              imageMD={sprint.imageMD}
              imageLG={sprint.imageLG}
              problem={sprint.problem}
              approach={sprint.approach}
              chartData={chartData}
    
            />
            <div className="bg-white h-80 pt-12 pb-16 sm:px-6 md:px-14 lg:px-32 grid grid-cols-4 grid-flow-row items-start gap-8">
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
            <div className="bg-white py-12 sm:px-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
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
            <div className="bg-white pt-12 pb-16 sm:px-6 md:px-14 lg:px-32 grid grid-cols-2 grid-flow-row items-start gap-32">

              <div className="grid grid-cols-2 auto-cols-max grid-flow-row items-start justify-start gap-20">
                {questionCards.map((card, index) => (
                  <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    job={card.job}
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
            <div className="bg-white pt-16 pb-12 sm:px-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="py-2 text-left col-start-1 col-span-4 items-start gap-2">
                <h5 className="h3 pb-8 font-600 tracking-wide">ideation</h5>
              </div>
              <div className='m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed'>
                Through rapid, paper-based sketching, we honed in on simplifying core tasks in the Fishbowl Go app. This exercise was key in integrating effective design patterns and streamlining user navigation between screens, striking a balance between simplicity and functionality.
              </div>
            </div>
            {/* Sketches */}
            <div className="bg-white pt-12 pb-16 sm:px-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start">
              <img
                alt=""
                src="/images/fbgo-sketches-long.jpg"
                className="col-start-1 col-span-8 w-full"
              />
            </div>
            <SiteMap pages={sitemap} />
            <Wireframes
              section={wireframes} />
            
            <div className="bg-white pt-16 pb-12 sm:px-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="py-2 text-left col-start-1 col-span-4 items-start gap-2">
                <h5 className="h3 pb-8 font-600 tracking-wide">key mockups</h5>
              </div>
              <div className='m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed'>
                After several iterations of the scope of the project, layout, and features it was decided that we would focus on creating an iPad/tablet app geared toward administrative tasks - separate from the mobile app that is geared toward warehouse tasks.              </div>
            </div>
            <div className="bg-white pt-12 pb-16 sm:px-6 md:px-14 lg:px-32 grid grid-cols-8 grid-flow-row items-start">
              <img
                alt=""
                src="/images/mockup-fb.webp"
                className="col-start-1 col-span-8 w-full"
              />
            </div>
            <Outcomes sections={outcomes} />
            <div className="bg-white py-16 sm:px-6 md:px-14 lg:px-32 flex flex-col items-start gap-8">
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
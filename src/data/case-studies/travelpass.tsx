import type { CaseStudy } from "@/components/templates/types"
import { UserPersonas } from "@/components/templates/case-study/process/UserPersonas"
import Journey from "@/components/templates/case-study/process/Journey"
import { Understanding } from "@/components/templates/case-study/process/UnderstandingQs"
import { Goal } from "@/components/templates/case-study/process/Goals"
import { Whiteboard } from "@/components/templates/case-study/process/Whiteboard"
import PainPoints from "@/components/templates/case-study/process/PainPoints"
import BarChart from "@/components/ui/Data/BarChart"
import SiteMap from "@/components/templates/case-study/process/SiteMap"

const user1 = "/images/user-cheyenne.webp"
const user2 = "/images/user-ammon.webp"
const user3 = "/images/user-ana.webp"
const user4 = "/images/user-tan.webp"
const goal1 = "/images/sticky1-proj1.webp"
const goal2 = "/images/sticky2-proj1.webp"
const goal3 = "/images/sticky3-proj1.webp"
const goal4 = "/images/sticky4-proj1.webp"
const goal5 = "/images/sticky5-proj1.webp"
const goal6 = "/images/sticky6-proj1.webp"
const sketch1 = "/images/proj1-sketch1.webp"
const sketch2 = "/images/proj1-sketch2.webp"
const sketch3 = "/images/proj1-sketch3.webp"
const sketch4 = "/images/proj1-sketch4.webp"
const sketch5 = "/images/proj1-sketch5.webp"
const sketch6 = "/images/proj1-sketch6.webp"
const sketch7 = "/images/proj1-sketch7.webp"
const sketch8 = "/images/proj1-sketch8.webp"
const sketch9 = "/images/proj1-sketch9.webp"
const sketch10 = "/images/proj1-sketch10.webp"
const sketch11 = "/images/proj1-sketch11.webp"
const sketch12 = "/images/proj1-sketch12.webp"
const hifi1 = "/images/proj1-hifi1.webp"
const hifi2 = "/images/proj1-hifi2.webp"
const hifi3 = "/images/proj1-hifi3.webp"
const hifi4 = "/images/proj1-hifi4.webp"
const hifi5 = "/images/proj1-hifi5.webp"
const hifi6 = "/images/proj1-hifi6.webp"
const sprint = "/images/sprint-proj1_lg.webp"

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
}

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

export const travelpass = {
    summary: {
        id: "travelpass",
        title: "travelpass",
        description:
            "providing the explorer at heart unforgettable adventures.",
        image: "/images/bg-proj2-hero_lg.webp",
        href: "/work/travelpass",
        category: "travel",
        align: "right",
    },
    duration: "12 months - I contributed to the creation of the product team starting as the only designer in the engineering department and growing into a team of 6+ product managers and 6+ designers and CPO. In the beginning I handled design, research, and project management. As the team grew, my focus shifted to the native app and design systems, where I specialize in creating and documenting reusable components and collaborating with engineers to build and implement them in code.",
    team: (
        <>
            Chief Product Officer: Jarad H.
            <br />
            Lead UX Designer: Lisa K. & Paola A.
            <br />
            UX Designers: Sara Tapusoa, Jordan L., PeiPei W., Sam L., & Kaz K.
            <br />
            Chief Technology Officer: Alan F.
            <br />
            Frontend Engineering Manager: Neil
            <br />
            Backend Engineering Manager: Jake P.
            <br />
        </>
    ),
    role: (
        <>
            Project Lead
            <br />
            User Researcher
            <br />
            User Experience Designer
            <br />
            User Interface Designer
            <br />
            Frontend Engineer
            <br />
            Design Systems Manager
            <br />
        </>
    ),
    challenge: 'We identified an industry-wide struggle to adapt inventory management tools for mobile use. Small business owners and managers need a way to efficiently review inventory, manage orders, and access data on mobile devices because existing inventory management tools are designed primarily for desktop and warehouse use. As a result, users experience frustration and inefficiencies when trying to complete administrative tasks remotely, limiting their ability to effectively manage operations on the go.',
    solution: 'Usability testing of the Fishbowl Go prototype was a pivotal phase in our project, yielding crucial insights. The testing showed that our redesigned prototype markedly enhanced the existing app, significantly improving user-friendliness and efficiency, thereby addressing key user challenges. However, as we were preparing for the development phase, unforeseen organizational changes occurred. The acquisition of Fishbowl Inventory by another company led to a realignment of priorities and the eventual departure of our development team. This resulted in the project being shelved, despite the prototype’s demonstrated potential to meet and exceed user needs.',
    impact: [
        '40% improvement in task efficiency during prototype testing',
        'Increased overall user satisfaction scores by 35%, with testers describing the app as “easier” and “faster to use” compared to the original version',
        'Creation of a design system foundation, later reused across multiple internal tools — improving consistency and reducing handoff time by 30%',
        'Strengthened cross-team collaboration, establishing a repeatable sprint and testing process that improved delivery predictability by 20%'
    ],
    tag: 'From reskin to full redesign',
    process: [
      {
        phase: "Define",
        description: "Mapped out the current user flow/journey capturing pain points and potential goals across the inventory management lifecycle.",
        deliverables: ["User flows", "User journey", "User personas"],
        children: (
          <div>
            <UserPersonas
              cards={[
                {
                  image: user1,
                  title: "Jennifer G",
                  job: "Purchasing Manager",
                  quote: "Efficiency is key!",
                  bio: "A passionate manager with a knack for problem solving.",
                  age: "29, MBA, San Francisco",
                  frustrations: ["Lack of efficient tools", "Time-consuming processes"],
                  motivations: ["Quality control at best prices", "Optimize inventory"]
                },
                {
                  image: user2,
                  title: "Kai T",
                  job: "Sales Rep",
                  quote: "Efficiency is key!",
                  bio: "A passionate manager with a knack for problem solving.",
                  age: "34, High School, Denver",
                  frustrations: ["Lack of efficient tools", "Time-consuming processes"],
                  motivations: ["Quality control at best prices", "Optimize inventory"]
                },
                {
                  image: user3,
                  title: "Ana M",
                  job: "Warehouse Worker",
                  quote: "Efficiency is key!",
                  bio: "A passionate manager with a knack for problem solving.",
                  age: "42, BS, Atlanta",
                  frustrations: ["Lack of efficient tools", "Time-consuming processes"],
                  motivations: ["Quality control at best prices", "Optimize inventory"]
                },
                {
                  image: user4,
                  title: "Darien T",
                  job: "Administrator",
                  quote: "Efficiency is key!",
                  bio: "A passionate manager with a knack for problem solving.",
                  age: "56, MBA, Portland",
                  frustrations: ["Lack of efficient tools", "Time-consuming processes"],
                  motivations: ["Quality control at best prices", "Optimize inventory"]
                },
              ]}
            />
            <Journey
              users={[
                {
                  name: "Jennifer G.",
                  story: "Optimize inventory management process.",
                  step: ["Discover tool", "Create", "Manage", "Track", "Feedback"],
                  task: [
                    "Log into inventory system",
                    "Check inventory levels",
                    "Update orders and customer info",
                    "Track orders and generate or review reports",
                    "Check app updates and training videos",
                  ],
                  feeling: ["Hopeful", "Overwhelmed", "Frustrated", "Anxious", "Relieved"],
                  feedback: [
                    "Simplify login process and training",
                    "Improve dashboard clarity",
                    "Streamline the integration process",
                    "Continuous improvement based on user feedback, focusing on usability enhancements",
                    "Develop a structured system for collecting and prioritizing user suggestions",
                  ],
                },
                {
                  name: "Michael L.",
                  story: "Manage inventory while working remotely.",
                  step: ["Login", "Check stock", "Update orders", "Generate reports", "Feedback"],
                  task: [
                    "Login to mobile app",
                    "Verify inventory levels",
                    "Update order statuses",
                    "Generate weekly reports",
                    "Review app feedback from team",
                  ],
                  feeling: ["Confident", "Overwhelmed", "Frustrated", "Satisfied", "Motivated"],
                  feedback: [
                    "Simplify mobile interface",
                    "Provide clear notifications",
                    "Improve order update flow",
                    "Enable offline data access",
                    "Provide better training material",
                  ],
                },
              ]}
            />
          </div>
        ),
      },
      {
        phase: "Empathize",
        description: "Wrote user stories and formulated hypotheses to align the team around measurable outcomes and user value",
        deliverables: ["Hypotheses", "User stories", "Problem statements"],
        children: (
          <div>
            <Understanding
              cards={[
                {
                  image: "who",
                  question: "Who is experiencing the problem?",
                  statement: "The average business owners",
                },
                {

                  image: "where",
                  question: "Where does the user experience the problem?",
                  statement: "Outside of the office",
                },
                {

                  image: "when",
                  question: "When does the problem occur?",
                  statement: "No access to a desktop and on-the-go",
                },
                {

                  image: "why",
                  question: "Why does the problem matter?",
                  statement: "Affects productivity and efficiency",
                },
              ]}
            />
          </div>
        )
      },
      {
        phase: "Exploration",
        description: "Redefined the goals, scope, and success metrics for the project.",
        deliverables: ["Goals", "Success metrics", "Scope definition"],
        children: (
          <div>
            <Goal
              statement="To successfully launch Fishbowl Go, a user-friendly iPad/tablet app, designed to bridge the gap in mobile inventory management for small to medium-sized businesses. Our aim was to simplify administrative tasks, making inventory management as efficient on tablets as it is on desktops. The goal was to enhance operational efficiency by at least 20% and improve user satisfaction, targeting a 15% increase in Fishbowl Inventory's client base within the first six months after launch."
              sticky={[
                goal1,
                goal2,
                goal3,
                goal4,
                goal5,
                goal6,
              ]}
              alt=""
            />
          </div>
        )
      },
      {
        phase: "Research",
        description: "Performed competitive analysis and user interviews to identify pain points and opportunities.",
        deliverables: ["Competitive analysis", "Surveys", "User interview transcripts"],
        children: (
          <div className="grid grid-cols-1 md:grid-cols-2 z-30 gap-8 border border-cherry-300 p-6">
            {painPoints.map((point, index) => (
              <PainPoints
                key={index}
                problem={point.problem}
                description={point.description}
                number={point.number}
              />
            ))}

            <div className="col-span-full border border-ocean-300">
              <BarChart
                data={chartData.data}
                caption={chartData.caption}
                legend={chartData.legend}
              />
            </div>
          </div>
        )
      },
      {
        phase: "Ideation",
        description: "Ran through multiple design sprints to ideate and prototype solutions addressing user pain points.",
        deliverables: ["Sketches", "Paper prototypes", "Digital wireframes"],
        children: (
          <div>
            <Whiteboard
              statement="To successfully launch Fishbowl Go, a user-friendly iPad/tablet app, designed to bridge the gap in mobile inventory management for small to medium-sized businesses. Our aim was to simplify administrative tasks, making inventory management as efficient on tablets as it is on desktops. The goal was to enhance operational efficiency by at least 20% and improve user satisfaction, targeting a 15% increase in Fishbowl Inventory's client base within the first six months after launch."
              image={[
                sketch1,
                sketch2,
                sketch3,
                sketch4,
                sketch5,
                sketch6,
                sketch7,
                sketch8,
                sketch9,
                sketch10,
                sketch11,
                sketch12,


              ]}
              alt=""
              border={false}
              columns={4}
            />
            <Whiteboard
              statement="To successfully launch Fishbowl Go, a user-friendly iPad/tablet app, designed to bridge the gap in mobile inventory management for small to medium-sized businesses. Our aim was to simplify administrative tasks, making inventory management as efficient on tablets as it is on desktops. The goal was to enhance operational efficiency by at least 20% and improve user satisfaction, targeting a 15% increase in Fishbowl Inventory's client base within the first six months after launch."
              image={[
                sprint


              ]}
              alt=""
              border={false}
              columns={1}
            />
            <SiteMap pages={sitemap} />
          </div>
        )
      },
      {
        phase: "Validation",
        description: "Designed, presented, and tested high-fidelity prototypes with users to validate design decisions.",
        deliverables: ["High-fidelity mockups", "Prototypes", "Usability tests"],
        children: (
          <div>
            <Whiteboard
              statement="To successfully launch Fishbowl Go, a user-friendly iPad/tablet app, designed to bridge the gap in mobile inventory management for small to medium-sized businesses. Our aim was to simplify administrative tasks, making inventory management as efficient on tablets as it is on desktops. The goal was to enhance operational efficiency by at least 20% and improve user satisfaction, targeting a 15% increase in Fishbowl Inventory's client base within the first six months after launch."
              image={[
                hifi1,
                hifi2,
                hifi3,
                hifi4,
                hifi5,
                hifi6,
              ]}
              alt=""
              border={true}
              columns={3}
            />
          </div>
        )
      },
      {
        phase: "Development",
        description: "We had begun handoff to developers before the project was unfortunately shelved due to organizational changes.",
        deliverables: ["Staging", "Design System", "Documentation"],
      },
    ],
    designSystem: {
      colors: [
        { name: "fishbowl-blue", hex: "#0029F0", usage: "Main brand color" },
        { name: "fbGrey1", hex: "#19212b", usage: "Main brand color" },
        { name: "fbGrey2", hex: "#576977", usage: "Main brand color" },
        { name: "fbGrey3", hex: "#a9b5c0", usage: "Main brand color" },
        { name: "fbGrey4", hex: "#ebf0f5", usage: "Main brand color" },
        { name: "fbGrey5", hex: "#f9fcfd", usage: "Main brand color" },
        { name: "fbGrey6", hex: "#d2e4ff", usage: "Main brand color" },
        { name: "systemGrey-light", hex: "#8E8E93", usage: "Main brand color" },
        { name: "systemGrey2-light", hex: "#AEAEB2", usage: "Main brand color" },
        { name: "systemGrey3-light", hex: "#C7C7CC", usage: "keyboard keys" },
        { name: "systemGrey4-light", hex: "#D1D1D6", usage: "keyboard bg light" },
        { name: "systemGrey5-light", hex: "#E5E5EA", usage: "Main brand color" },
        { name: "systemGrey6-light", hex: "#F2F2F7", usage: "Main brand color" },
        { name: "systemGrey-dark", hex: "#8E8E93", usage: "Main brand color" },
        { name: "systemGrey2-dark", hex: "#636366", usage: "Main brand color" },
        { name: "systemGrey3-dark", hex: "#48484A", usage: "Main brand color" },
        { name: "systemGrey4-dark", hex: "#3A3A3C", usage: "Main brand color" },
        { name: "systemGrey5-dark", hex: "#2C2C2E", usage: "Main brand color" },
        { name: "systemGrey6-dark", hex: "#1C1C1E", usage: "Main brand color" },
        { name: "bg-light", hex: "#ffffff", usage: "Main brand color" },
        { name: "bg-dark", hex: "#000000", usage: "Main brand color" },
        { name: "systemBrown-light", hex: "#a2845e", usage: "Main brand color" },
        { name: "systemPink-light", hex: "#ff2d55", usage: "Main brand color" },
        { name: "systemRed-light", hex: "#ff3b2d", usage: "Main brand color" },
        { name: "systemOrange-light", hex: "#ff9516", usage: "Main brand color" },
        { name: "systemYellow-light", hex: "#ffcc00", usage: "Main brand color" },
        { name: "systemGreen-light", hex: "#34c711", usage: "Main brand color" },
        { name: "systemTeal-light", hex: "#30b0c7", usage: "Main brand color" },
        { name: "systemMint-light", hex: "#00c7be", usage: "Main brand color" },
        { name: "systemBlue-light", hex: "#007aff", usage: "Main brand color" },
        { name: "systemCyan-light", hex: "#32ade6", usage: "Main brand color" },
        { name: "systemIndigo-light", hex: "#5856d6", usage: "Main brand color" },
        { name: "systemPurple-light", hex: "#af52de", usage: "Main brand color" },
        { name: "systemBrown-dark", hex: "#a2845e", usage: "Main brand color" },
        { name: "systemPink-dark", hex: "#ff2d55", usage: "Main brand color" },
        { name: "systemRed-dark", hex: "#ff375f", usage: "Main brand color" },
        { name: "systemOrange-dark", hex: "#ff9f0a", usage: "Main brand color" },
        { name: "systemYellow-dark", hex: "#ffd60a", usage: "Main brand color" },
        { name: "systemGreen-dark", hex: "#30d158", usage: "Main brand color" },
        { name: "systemTeal-dark", hex: "#30b0c7", usage: "Main brand color" },
        { name: "systemMint-dark", hex: "#00c7be", usage: "Main brand color" },
        { name: "systemBlue-dark", hex: "#0a84ff", usage: "Main brand color" },
        { name: "systemCyan-dark", hex: "#64d2ff", usage: "Main brand color" },
        { name: "systemIndigo-dark", hex: "#5e5ce6", usage: "Main brand color" },
        { name: "systemPurple-dark", hex: "#bf5af2", usage: "Main brand color" },

      ],



      typography: [
        { name: "Large Title", size: "34pt", weight: "700", lineHeight: "1.2", usage: "Headers" },
        { name: "Title 1", size: "28pt", weight: "700", lineHeight: "1.2", usage: "Headers" },
        { name: "Title 2", size: "22pt", weight: "700", lineHeight: "1.2", usage: "Headers" },
        { name: "Title 3", size: "20pt", weight: "700", lineHeight: "1.2", usage: "Headers" },
        { name: "Headline", size: "17pt", weight: "700", lineHeight: "1.2", usage: "Headers" },
        { name: "Subhead", size: "15pt", weight: "700", lineHeight: "1.2", usage: "Headers" },
        { name: "Body", size: "17pt", weight: "700", lineHeight: "1.2", usage: "Headers" },
        { name: "Caption", size: "15pt", weight: "700", lineHeight: "1.2", usage: "Headers" },
        { name: "Callout", size: "16pt", weight: "700", lineHeight: "1.2", usage: "Headers" },
        { name: "Footnote", size: "13pt", weight: "700", lineHeight: "1.2", usage: "Headers" },


      ],
      components: [
        {
          name: "Button",
          description: "Reusable button component",
          variants: ["Primary", "Secondary"],
          props: [
            { name: "variant", type: "string", description: "Defines button style" },
            { name: "disabled", type: "boolean", description: "Disables button" },
          ],
        },
      ],
    },
     designSystemLink: "https://draft-latte-97757953.figma.site",
    prototypeId: "travelpass"
    // ...
} satisfies CaseStudy
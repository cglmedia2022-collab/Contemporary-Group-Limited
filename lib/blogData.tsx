import React from "react";
import Image from "next/image";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "featured-in-the-guardian-contemporary-group-limited-top-100-2025-contemporary-group-limited",
    title: "Featured in The Guardian: Contemporary Group Limited Named Among Nigeria’s Top 100 Most Transformative Companies in 2025",
    excerpt: "In the ever-evolving landscape of Nigeria’s built environment, where vision must meet execution and ambition must translate into tangible impact, Contemporary Group Limited stands distinguished.",
    date: "April 23, 2026",
    author: "Olusola Olanrewaju",
    image: "https://www.contemporarygroupng.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-23-at-17.15.50.jpeg",
    category: "Award",
    content: (
      <>
        <p className="mb-4 text-foreground/80">
          In the ever-evolving landscape of Nigeria’s built environment, where vision must meet execution and ambition must translate into tangible impact, Contemporary Group Limited stands distinguished. It is with profound pride that we announce our recognition as one of Nigeria’s <em>Top 100 Most Transformative Companies in 2025</em> by <em>The Guardian</em>.
        </p>
        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden my-8">
          <Image src="https://www.contemporarygroupng.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-23-at-17.15.50-1.jpeg" alt="Contemporary Group Recognition by The Guardian" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 800px" />
        </div>
        <p className="mb-4 text-foreground/80">
          This milestone is more than an accolade—it is a validation of a journey defined by precision, resilience, and an unwavering commitment to redefining standards within the architecture and construction ecosystem.
        </p>
        <p className="mb-4 text-foreground/80">
          At the helm of this forward-moving enterprise is our Group Managing Director/Chief Executive Officer, Arc. Kester Ifeadi, whose leadership has been instrumental in shaping not just projects, but possibilities. His recognition as one of the <em>Top Strategic CEOs Driving Nigeria’s Most Transformative Companies</em> underscores a leadership philosophy rooted in clarity of vision, disciplined execution, and an enduring pursuit of excellence.
        </p>
        <p className="mb-4 text-foreground/80">
          Transformation, in our context, is not a buzzword—it is a deliberate strategy. It is embedded in how we conceptualize spaces, deploy innovation, and deliver value across every project lifecycle. From ideation to completion, our approach is guided by a commitment to sustainability, functionality, and timeless design integrity.
        </p>
        <p className="mb-4 text-foreground/80">
          This recognition reflects the collective effort of a dynamic ecosystem—our clients who entrust us with their aspirations, our partners who collaborate with shared purpose, and our team whose dedication fuels our continued growth. Each milestone we achieve is a shared victory, a testament to what can be accomplished when vision aligns with capability.
        </p>
        <p className="mb-4 text-foreground/80">
          As we look ahead, the path remains clear. The journey continues with renewed focus. The vision remains bold—anchored in innovation, driven by excellence, and committed to shaping environments that stand the test of time.
        </p>
        <p className="mb-4 text-foreground/80 font-bold">
          At Contemporary Group Limited, we do not merely build structures—we build legacies.
        </p>
      </>
    )
  },
  {
    id: "2",
    slug: "our-commitment-to-business-sustainability",
    title: "Our Commitment to Business Sustainability",
    excerpt: "At Contemporary Group we are committed to sustainable design principles, energy efficiency, and reducing our environmental footprint.",
    date: "October 13, 2025",
    author: "Toks Longe",
    image: "https://www.contemporarygroupng.com/wp-content/uploads/2025/10/sustain-1.png",
    category: "Sustainability",
    content: (
      <>
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden my-8">
          <Image src="https://www.contemporarygroupng.com/wp-content/uploads/2025/10/sustain-1-1024x683.png" alt="Sustainability" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" />
        </div>
        <p className="mb-4 text-foreground/80">
          At Contemporary Group we are committed to the following practices in support of business sustainability:
        </p>
        <h3 className="text-xl font-bold mt-8 mb-4">1. Designing for sustainability:</h3>
        <p className="mb-4 text-foreground/80">
          Incorporating sustainable design principles from the beginning of a construction project. This includes using energy-efficient materials, optimizing building orientation for natural lighting, and incorporating renewable energy systems.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-4">2. Using eco-friendly materials:</h3>
        <p className="mb-4 text-foreground/80">
          Choosing materials that have a lower environmental impact, such as recycled or locally sourced materials. This reduces the carbon footprint associated with the construction process.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-4">3. Waste management:</h3>
        <p className="mb-4 text-foreground/80">
          Implementing effective waste management practices which is crucial for sustainability. This includes reducing construction waste for ourselves and our subcontractors, through careful planning, reusing materials whenever possible, and recycling waste materials.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-4">4. Energy efficiency:</h3>
        <p className="mb-4 text-foreground/80">
          Incorporating energy-efficient systems and technologies in buildings to reduce energy consumption. This includes using energy-efficient lighting, HVAC systems, insulation, and smart building technologies.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-4">5. Water conservation:</h3>
        <p className="mb-4 text-foreground/80">
          Implementing water-efficient systems in our construction projects, such as low-flow fixtures, rainwater harvesting, and greywater recycling. This will help conserve water resources and reduce water usage.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-4">6. Sustainable site development:</h3>
        <p className="mb-4 text-foreground/80">
          Prioritising the preservation of natural habitats, minimizing site disturbance, and using landscaping practices that require less water and maintenance.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-4">7. Collaborating with stakeholders:</h3>
        <p className="mb-4 text-foreground/80">
          Engaging with stakeholders, including our architects, engineers, quantity surveyors, suppliers, and clients to promote sustainable construction. By involving all parties in the decision-making process, we will ensure that sustainability goals are met throughout the project and by implementing these practices, we will actively contribute to sustainable construction and minimize the environmental impact of our projects.
        </p>
        <p className="mb-4 text-foreground/80">
          We believe that there is alot that we can do to assist in making our Industry a more sustainable one.
        </p>
        <div className="mt-8">
          <p className="font-bold">Toks Longe</p>
          <p className="text-neutral-500 text-sm">CEO Contemporary Ventures & Resources Ltd</p>
          <p className="text-neutral-500 text-sm">(Affiliate of Contemporary Group Ltd)</p>
        </div>
      </>
    )
  },
  {
    id: "3",
    slug: "contemporary-group-limited-honoured-with-national-award-for-most-iconic-corporate-building",
    title: "Contemporary Group Limited Honoured with National Award for Most Iconic Corporate Building",
    excerpt: "Arc. Kester Ifeadi, was conferred with the Most Iconic Corporate Building in Nigeria award for the landmark Professor Chike Edozien Secretariat in Asaba.",
    date: "June 30, 2025",
    author: "Olusola Olanrewaju",
    image: "https://www.contemporarygroupng.com/wp-content/uploads/2025/06/Kester-Ifeadi-e1752228227944.jpg",
    category: "Award",
    content: (
      <>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="relative w-full md:w-1/3 aspect-3/4 rounded-2xl overflow-hidden shrink-0">
            <Image src="https://www.contemporarygroupng.com/wp-content/uploads/2024/10/Mr-Kester-CGL.jpg" alt="Arc Kester Ifeadi" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className="flex-1">
            <p className="mb-4 text-foreground/80">
              It was a moment of pride and distinction for <strong>Contemporary Group Limited (CGL)</strong> as our Managing Director/Chief Executive Officer, <strong>Arc. Kester Ifeadi</strong>, was conferred with the <strong>Most Iconic Corporate Building in Nigeria</strong> award for the landmark <strong>Professor Chike Edozien Secretariat</strong> in Asaba, Delta State.
            </p>
            <p className="mb-4 text-foreground/80">
              The prestigious award was presented by the President of the <strong>Nigerian Institute of Architects (NIA)</strong>, <strong>Arc. Mrs. Mobolaji Adeniyi</strong>, during the <strong>2024 Archibuilt Exposition</strong>, held in Abuja on <strong>Thursday, September 12, 2024</strong>. The event, themed <em>&quot;Innovations in Sustainable Construction,&quot;</em> spotlighted excellence in architectural innovation, sustainability, and design impact within the built environment.
            </p>
            <p className="mb-4 text-foreground/80">
              The Professor Chike Edozien Secretariat, conceptualized and designed by Arc. Ifeadi, emerged as a standout project for its distinctive integration of <strong>sustainable design principles</strong>, <strong>environmentally conscious materials</strong>, and the <strong>use of locally sourced resources</strong>. These elements reflect CGL’s unwavering commitment to sustainability, innovation, and contextual architectural excellence.
            </p>
            <p className="mb-4 text-foreground/80">
              Accepting the award on behalf of Arc. Ifeadi was <strong>Barr. Adetokunboh Longe</strong>, a Director at <strong>Contemporary Ventures and Resources Limited (CVR)</strong>—a subsidiary of CGL.
            </p>
            <p className="mb-4 text-foreground/80">
              This award reinforces CGL’s leadership in delivering forward-thinking, socially responsible architectural solutions that not only respond to today’s challenges but also set benchmarks for the future.
            </p>
            <p className="mb-4 text-foreground/80">
              We extend our warmest congratulations to <strong>Arc. Kester Ifeadi</strong> and the entire CGL team on this national recognition. It is a true reflection of our core values—<strong>excellence, innovation, integrity, and sustainability</strong>.
            </p>
            <p className="mb-4 text-foreground/80">
              As we celebrate this achievement, we remain committed to redefining Nigeria’s architectural landscape through visionary design and responsible construction practices.
            </p>
            <p className="mb-4 text-foreground/80 font-bold">
              Contemporary Group Limited: Building the Future, Responsibly.
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "4",
    slug: "the-role-of-oil-and-gas-companies-in-sustainability",
    title: "The Role Of Oil and Gas Companies in Sustainability",
    excerpt: "The global pursuit of sustainability has become a pressing priority in the face of escalating environmental challenges.",
    date: "March 29, 2024",
    author: "Enoch Jesuoluwa",
    image: "https://www.contemporarygroupng.com/wp-content/uploads/2024/03/image1.jpg",
    category: "Construction",
    content: (
      <>
        <p className="mb-4 text-foreground/80">
          The global pursuit of sustainability has become a pressing priority in the face of escalating environmental challenges. As major contributors to greenhouse gas emissions, oil and gas companies have faced scrutiny for their role in climate change. However, these companies also possess the resources, expertise, and influence necessary to drive the transition towards a sustainable future.
        </p>
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden my-8">
          <Image src="https://www.contemporarygroupng.com/wp-content/uploads/2024/03/image1.jpg" alt="Sustainability" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" />
        </div>
        <p className="mb-4 text-foreground/80">
          This essay explores the multifaceted role of oil and gas companies in achieving sustainability, examining their potential as catalysts for change, the challenges they face, and the strategies they can employ to contribute positively to the global sustainability agenda.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">I. Catalysts for Change:</h2>
        <p className="mb-4 text-foreground/80">
          Oil and gas companies have the potential to act as catalysts for change in the pursuit of sustainability.
        </p>
        <p className="mb-4 text-foreground/80">
          Firstly, their financial power and technological advancements can be leveraged to invest in research and development of cleaner energy alternatives. By funding and promoting renewable energy projects, these companies can contribute to the diversification of the energy mix and reduce dependence on fossil fuels.
        </p>
        <p className="mb-4 text-foreground/80">
          Secondly, their global reach and extensive supply chains enable them to influence and engage with stakeholders at various levels. Through collaboration with governments, NGOs, and local communities, oil and gas companies can advocate for sustainable policies/practices.
        </p>
        <p className="mb-4 text-foreground/80">
          Lastly, their expertise in extraction, refining, and distribution can be harnessed to improve efficiency and reduce emissions throughout the entire value chain. By implementing innovative technologies and best practices, these companies can minimize their environmental footprint.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Challenges and Obstacles:</h2>
        <p className="mb-4 text-foreground/80">
          Despite their potential, oil and gas companies face numerous challenges in their quest for sustainability. One significant hurdle is the inherent conflict between their primary objective of maximizing profits and the long-term goals of sustainability. This conflict often leads to a reluctance to transition away from fossil fuels, as it may impact their financial performance.
        </p>
        <p className="mb-4 text-foreground/80">
          Additionally, the complex and interconnected nature of the global energy system poses challenges in terms of infrastructure, regulations, and market dynamics. The transition to sustainable energy sources requires significant investments in infrastructure, which can be hindered by economic and political uncertainties.
        </p>
        <p className="mb-4 text-foreground/80">
          Furthermore, the reliance on government policies and International agreements can also create uncertainties for long-term planning and investment.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Strategies for Positive Impact:</h2>
        <p className="mb-4 text-foreground/80">
          To overcome these challenges and contribute positively to sustainability, oil and gas companies can adopt several strategies.
        </p>
        <p className="mb-4 text-foreground/80">
          Firstly, they can invest in research and development to enhance the efficiency and environmental performance of their operations. By embracing technologies such as carbon capture and storage, methane leak detection, and renewable energy integration, these companies can reduce their carbon footprint and mitigate environmental impacts.
        </p>
        <p className="mb-4 text-foreground/80">
          Secondly, they can diversify their business portfolios by expanding into renewable energy sectors. This diversification can help mitigate risks associated with declining demand for fossil fuels and position these companies as leaders in the emerging clean energy market.
        </p>
        <p className="mb-4 text-foreground/80">
          Thirdly, oil and gas companies can engage in proactive stakeholder communication and transparency. Through open dialogue with communities, NGOs, and investors, these companies can address concerns, establish trust, and demonstrate their commitment to sustainability.
        </p>
        <p className="mb-4 text-foreground/80">
          Lastly, partnerships and collaborations with other industries and stakeholders can foster innovation and knowledge sharing. By working together, oil and gas companies can leverage shared expertise, resources, and technologies to accelerate the transition to a sustainable energy future.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion:</h2>
        <p className="mb-4 text-foreground/80">
          Oil and gas companies play a vital role in achieving sustainability by leveraging their resources, expertise, and influence. While they face significant challenges, they can act as catalysts for change by investing in research, advocating for sustainable policies, and improving environmental performance.
        </p>
        <p className="mb-4 text-foreground/80">
          By embracing strategies such as Diversification, Stakeholder engagement, and Collaboration, these companies can contribute positively to the global sustainability agenda.
        </p>
        <p className="mb-4 text-foreground/80">
          However, it is essential to acknowledge that the transition to sustainability requires collective efforts from all stakeholders, including Governments, consumers, and civil society. Only through collaboration and shared responsibility can we build a sustainable future for generations to come.
        </p>
      </>
    )
  }
];

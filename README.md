# Contemporary Group Limited Website Rebuild

This repository contains the Next.js project for the Contemporary Group Limited website rebuild. The project aims to create a modern, SEO-optimized, and user-friendly platform that reflects the company's leadership in architectural consultancy and property development in Nigeria.

## Project Overview

Contemporary Group Limited (CGL) is a leading architectural and construction firm with over 30 years of experience, having completed more than 200 landmark projects. This rebuild focuses on enhancing the digital presence, improving user experience, and optimizing for search engines to solidify CGL's position as an industry leader.

## Technology Stack

- **Frontend Framework:** Next.js (React)
- **Styling:** TailwindCSS
- **Database:** MongoDB
- **Image Management:** Cloudinary (for gallery and optimized image delivery)

## Content Strategy

The content for this website has been meticulously crafted to be SEO-optimized, highlighting CGL's extensive experience, diverse portfolio, and specialized subsidiaries. Key elements include:

- **Comprehensive Main Pages:** Detailed content for Home, About Us (Company Overview, Members of Group, Board of Directors, Key Management & Staff, Technical Partners), Our Services, Projects, Careers, Media & Blog, and Contact Us.
- **Subsidiary Landing Pages:** Dedicated one-page content for each of the five subsidiary companies:
    - Contemporary Design Associates (CDA)
    - Contemporary Properties Limited (CPL)
    - Contemporary Ventures & Resources Limited (CVR)
    - Conwave Ventures Limited
    - Contemporary Properties Inc. Canada

## SEO Optimization

Next.js provides excellent built-in SEO capabilities. The content has been structured with SEO best practices in mind, including:

- **Keyword-Rich Content:** Strategic use of keywords relevant to architectural consultancy, property development, and construction in Nigeria.
- **Clear Headings and Structure:** Logical hierarchy of H1, H2, and H3 tags for readability and search engine understanding.
- **Meta Descriptions and Title Tags:** Crafted for each page to improve click-through rates from search results.
- **Image Optimization:** Integration with Cloudinary for efficient image delivery and SEO benefits.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or Yarn
- MongoDB instance (local or cloud-hosted)
- Cloudinary account (for image management)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. Install dependencies:
   ```bash
   npm install
   # or yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The project can be deployed to Vercel, Netlify, or any other platform that supports Next.js applications.

## Contributing

Contributions are welcome! Please follow standard Git workflow for pull requests.

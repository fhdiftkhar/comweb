export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
            "@id": "https://buildoza.online/#organization",
    "name": "Buidoza",
    "url": "https://buildoza.online",
    "logo": {
      "@type": "ImageObject",
      "url": "https://buildoza.online/logo.png",
          "width": 200,
          "height": 60
        },
        "description": "Leading no-code software development company specializing in Glide Apps, FlutterFlow, AppSheet, and Bubble development.",
        "foundingDate": "2019",
        "numberOfEmployees": "10-50",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
                      "telephone": "+923315533545",
          "contactType": "customer service",
                      "email": "fhdiftkhar@gmail.com"
        },
        "sameAs": [
          "https://twitter.com/buidoza",
          "https://linkedin.com/company/buidoza"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://buildoza.online/#website",
        "url": "https://buildoza.online",
        "name": "Buidoza",
        "description": "No-Code Software Development Experts",
        "publisher": {
          "@id": "https://buildoza.online/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://buildoza.online/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "@id": "https://buildoza.online/#service",
        "name": "No-Code Software Development",
        "description": "Custom software development using no-code platforms including Glide Apps, FlutterFlow, AppSheet, and Bubble.",
        "provider": {
          "@id": "https://buildoza.online/#organization"
        },
        "serviceType": "Software Development",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Glide Apps Development",
                "description": "Custom business applications built with Glide's no-code platform"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "FlutterFlow Development",
                "description": "Cross-platform mobile and web applications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AppSheet Development",
                "description": "Google's no-code platform for mobile applications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bubble Development",
                "description": "Full-featured web applications with database design"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 
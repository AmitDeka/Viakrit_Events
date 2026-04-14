import React from "react";

export function SEO({ title, description, keywords, ogImage }) {
  const finalTitle = title
    ? `${title} | Viakrit Events`
    : "Viakrit Events | High-Performance Experiences";

  return (
    <>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </>
  );
}

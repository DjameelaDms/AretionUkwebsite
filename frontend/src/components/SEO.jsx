import React, { useEffect } from 'react';

const SEO = ({ 
  title = '', 
  description = '',
  keywords = '',
  canonical = ''
}) => {
  const siteTitle = 'ARETION & Company';
  const pageTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Healthcare, Technology & Publishing Group`;
  const metaDescription = description || 'ARETION & Company is a UK-based group overseeing specialist entities in healthcare technology, consulting, and academic publishing.';
  const metaKeywords = keywords || 'ARETION, healthcare technology, healthcare consulting, medical publishing, health informatics, UK healthcare';

  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Update meta description
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (metaDescEl) {
      metaDescEl.setAttribute('content', metaDescription);
    }
    
    // Update meta keywords
    let metaKeywordsEl = document.querySelector('meta[name="keywords"]');
    if (metaKeywordsEl) {
      metaKeywordsEl.setAttribute('content', metaKeywords);
    }
    
    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', metaDescription);
    
    // Update canonical if provided
    if (canonical) {
      let canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) canonicalEl.setAttribute('href', canonical);
    }
  }, [pageTitle, metaDescription, metaKeywords, canonical]);

  return null;
};

export default SEO;

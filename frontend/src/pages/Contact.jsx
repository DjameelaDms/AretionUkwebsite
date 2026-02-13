import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { handleContactForm } from '../mock/mockData';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    enquiryType: '',
    name: '',
    organisation: '',
    country: '',
    email: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please confirm that you consent to us processing your information.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const result = handleContactForm(formData);
      
      toast({
        title: "Message Sent",
        description: result.message,
      });

      // Reset form
      setFormData({
        enquiryType: '',
        name: '',
        organisation: '',
        country: '',
        email: '',
        message: '',
        consent: false
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-off-white)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>
              Contact
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Contact ARETION & Company for corporate enquiries, partnerships, or media requests
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="mb-6" style={{ color: 'var(--aretion-navy)' }}>
                  Get in Touch
                </h2>
                <p className="leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  We welcome enquiries from potential partners, clients, media representatives, 
                  and other stakeholders.
                </p>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Mail size={20} style={{ color: 'var(--aretion-rust)' }} />
                  <h3 className="font-semibold" style={{ color: 'var(--aretion-navy)' }}>
                    Email
                  </h3>
                </div>
                <a 
                  href="mailto:contact@aretion.org"
                  className="text-lg hover:underline"
                  style={{ color: 'var(--aretion-steel-blue)' }}
                >
                  contact@aretion.org
                </a>
              </div>

              {/* Offices */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin size={20} style={{ color: 'var(--aretion-rust)' }} />
                  <h3 className="font-semibold" style={{ color: 'var(--aretion-navy)' }}>
                    Offices
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="font-medium mb-2" style={{ color: 'var(--aretion-navy)' }}>
                      Registered Office
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      71–75 Shelton Street<br />
                      Covent Garden<br />
                      London, WC2H 9JQ<br />
                      United Kingdom
                    </p>
                  </div>
                  <div>
                    <div className="font-medium mb-2" style={{ color: 'var(--aretion-navy)' }}>
                      Gulf Office
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      Innovation Boulevard, Al Aqeeq<br />
                      King Abdullah Financial District<br />
                      Building 7229, 13519
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div 
                className="bg-white rounded-lg p-8 md:p-10 border"
                style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
              >
                <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--aretion-navy)' }}>
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Enquiry Type */}
                  <div>
                    <label 
                      htmlFor="enquiryType" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--aretion-navy)' }}
                    >
                      Enquiry Type *
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: 'rgba(26, 58, 82, 0.2)' }}
                    >
                      <option value="">Please select...</option>
                      <option value="general">General Enquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Request</option>
                      <option value="corporate">Corporate Enquiry</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--aretion-navy)' }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: 'rgba(26, 58, 82, 0.2)' }}
                    />
                  </div>

                  {/* Organisation */}
                  <div>
                    <label 
                      htmlFor="organisation" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--aretion-navy)' }}
                    >
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: 'rgba(26, 58, 82, 0.2)' }}
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label 
                      htmlFor="country" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--aretion-navy)' }}
                    >
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: 'rgba(26, 58, 82, 0.2)' }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--aretion-navy)' }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: 'rgba(26, 58, 82, 0.2)' }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--aretion-navy)' }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all resize-none"
                      style={{ borderColor: 'rgba(26, 58, 82, 0.2)' }}
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-2 focus:ring-2 cursor-pointer"
                      style={{ 
                        borderColor: 'var(--aretion-navy)',
                        accentColor: 'var(--aretion-navy)'
                      }}
                    />
                    <label 
                      htmlFor="consent" 
                      className="text-sm cursor-pointer"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      I consent to ARETION & Company storing and processing my information 
                      in accordance with the Privacy Notice *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 font-medium rounded transition-all inline-flex items-center justify-center space-x-2"
                    style={{
                      backgroundColor: isSubmitting ? 'var(--aretion-steel-blue)' : 'var(--aretion-navy)',
                      color: 'white',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = 'var(--aretion-steel-blue)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = 'var(--aretion-navy)';
                      }
                    }}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

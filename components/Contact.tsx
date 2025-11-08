
import React from 'react';
import SectionTitle from './SectionTitle';
import { PhoneIcon, FacebookIcon, InstagramIcon, WhatsAppIcon, MapPinIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 container mx-auto">
      <SectionTitle backgroundText="CONNECT WITH US" foregroundText="CONTACT" />
      <p className="text-center text-zinc-600 max-w-2xl mx-auto -mt-4 mb-12">
        "Request a Development Proposal" - Targeting strategic partners interested in co-development or asset tokenization.
      </p>
      <div className="grid md:grid-cols-2 gap-16 mt-12">
        <form 
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
            const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
            const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
            const company = (form.elements.namedItem('company') as HTMLInputElement).value.trim();
            const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
            
            if (!name || !email || !phone || !message) {
              alert('Please fill in all required fields.');
              return;
            }
            
            // Create single paragraph message
            let msg = `BOLD BRICK Contact Inquiry - Name: ${name}`;
            if (company) msg += `, Company: ${company}`;
            msg += `, Email: ${email}, Phone: ${phone}, Message: ${message}`;
            
            // Open WhatsApp with clean single paragraph message
            const url = `https://wa.me/919400925507?text=${encodeURIComponent(msg)}`;
            
            // Try to open in new window (works better for desktop)
            const newWindow = window.open(url, '_blank');
            
            // Fallback if popup blocked
            if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
              window.location.href = url;
            }
            
            // Reset form
            setTimeout(() => form.reset(), 1000);
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name *" 
              required
              className="w-full p-3 bg-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#B9A470]" 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email *" 
              required
              className="w-full p-3 bg-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#B9A470]" 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number *" 
              required
              className="w-full p-3 bg-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#B9A470]" 
            />
            <input 
              type="text" 
              name="company"
              placeholder="Company Name" 
              className="w-full p-3 bg-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#B9A470]" 
            />
          </div>
          <textarea 
            name="message"
            placeholder="Tell us about your proposal... *" 
            rows={4} 
            required
            className="w-full p-3 bg-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#B9A470]"
          ></textarea>
          <button type="submit" className="px-10 py-3 bg-[#B9A470] text-zinc-800 font-oswald tracking-widest hover:bg-opacity-90 transition-colors">
            SEND TO WHATSAPP
          </button>
        </form>
        <div className="space-y-8">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-4">
              <PhoneIcon className="w-6 h-6 text-[#B9A470]" />
              <a 
                href="tel:+919846618429" 
                className="font-oswald text-lg hover:text-[#B9A470] transition-colors"
              >
                +91 98466 18429
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <PhoneIcon className="w-6 h-6 text-[#B9A470]" />
              <a 
                href="tel:+919400925507" 
                className="font-oswald text-lg hover:text-[#B9A470] transition-colors"
              >
                +91 94009 25507
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/vijeesh6246?igsh=ZGk3bDZiZzJlN3ox" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900" aria-label="Instagram">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="https://facebook.com/boldbrick" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900" aria-label="Facebook">
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="https://wa.me/919400925507" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900" aria-label="WhatsApp">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
          <div className="flex items-start space-x-4">
            <MapPinIcon className="w-6 h-6 text-[#B9A470] mt-1 shrink-0" />
            <p className="text-zinc-600">
              GP ARCADE, 14/841, Kadamkode Chittur road, Palakkad, 678551
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

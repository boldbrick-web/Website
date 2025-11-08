import React from 'react';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem('company') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const projectType = (form.elements.namedItem('projectType') as HTMLSelectElement).value;
    const budget = (form.elements.namedItem('budget') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
    
    if (!name || !email || !phone || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Create clean formatted message
    let msg = '*DEVELOPMENT PROPOSAL REQUEST*%0A%0A';
    msg += 'Name: ' + name + '%0A';
    if (company) msg += 'Company: ' + company + '%0A';
    msg += 'Email: ' + email + '%0A';
    msg += 'Phone: ' + phone + '%0A';
    if (projectType) msg += 'Project Type: ' + projectType + '%0A';
    if (budget) msg += 'Budget Range: ' + budget + '%0A%0A';
    msg += 'Proposal Details:%0A' + message;
    
    // Open WhatsApp - use different method for desktop vs mobile
    const url = 'https://wa.me/919400925507?text=' + encodeURIComponent(msg);
    
    // Try to open in new window (works better for desktop)
    const newWindow = window.open(url, '_blank');
    
    // Fallback if popup blocked
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = url;
    }
    
    // Close modal and reset form
    setTimeout(() => {
      form.reset();
      onClose();
    }, 1000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-zinc-800 text-white p-6 flex justify-between items-center">
          <h2 className="font-oswald text-2xl tracking-widest">REQUEST DEVELOPMENT PROPOSAL</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-[#B9A470] text-3xl leading-none transition-colors duration-300"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        
        <div className="overflow-y-auto p-8">
          <p className="text-zinc-600 mb-6">
            Share your project details and we'll get back to you with a comprehensive development proposal.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
                type="text" 
                name="company"
                placeholder="Company Name" 
                className="w-full p-3 bg-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#B9A470]" 
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number *" 
                required
                className="w-full p-3 bg-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#B9A470]" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select 
                name="projectType"
                className="w-full p-3 bg-zinc-200 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#B9A470]"
              >
                <option value="">Project Type</option>
                <option value="Co-development">Co-development</option>
                <option value="Asset Tokenization">Asset Tokenization</option>
                <option value="Strategic Partnership">Strategic Partnership</option>
                <option value="Investment Opportunity">Investment Opportunity</option>
                <option value="Other">Other</option>
              </select>
              
              <select 
                name="budget"
                className="w-full p-3 bg-zinc-200 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#B9A470]"
              >
                <option value="">Budget Range</option>
                <option value="Under ₹1 Crore">Under ₹1 Crore</option>
                <option value="₹1-5 Crore">₹1-5 Crore</option>
                <option value="₹5-10 Crore">₹5-10 Crore</option>
                <option value="₹10-50 Crore">₹10-50 Crore</option>
                <option value="Above ₹50 Crore">Above ₹50 Crore</option>
              </select>
            </div>
            
            <textarea 
              name="message"
              placeholder="Tell us about your project proposal... *" 
              rows={5} 
              required
              className="w-full p-3 bg-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#B9A470]"
            ></textarea>
            
            <div className="flex justify-end gap-4 pt-4">
              <button 
                type="button"
                onClick={onClose}
                className="px-8 py-3 bg-zinc-300 text-zinc-800 font-oswald tracking-widest hover:bg-zinc-400 transition-colors duration-300"
              >
                CANCEL
              </button>
              <button 
                type="submit"
                className="px-8 py-3 bg-[#B9A470] text-zinc-800 font-oswald tracking-widest hover:bg-opacity-90 transition-colors duration-300"
              >
                SEND TO WHATSAPP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProposalModal;

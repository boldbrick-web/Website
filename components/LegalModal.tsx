import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-zinc-800 text-white p-6 flex justify-between items-center">
          <h2 className="font-oswald text-2xl tracking-widest">{title}</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-[#B9A470] text-3xl leading-none transition-colors duration-300"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="overflow-y-auto p-8 text-zinc-700 leading-relaxed">
          {children}
        </div>
        <div className="bg-zinc-100 p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-2 bg-[#B9A470] text-zinc-800 font-oswald tracking-widest hover:bg-opacity-90 transition-colors duration-300"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;

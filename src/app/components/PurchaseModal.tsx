"use client";

import { useState, useEffect } from "react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function PurchaseModal({ isOpen, onClose, productName }: PurchaseModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call - in real implementation this would go to Airtable
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsVisible(false);
      setTimeout(() => {
        setEmail("");
        setShowSuccess(false);
        onClose();
      }, 200); // Wait for animation to complete
    }
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      setIsVisible(true);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 relative transform transition-all duration-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute right-4 top-4 z-10 text-olive-primary/60 hover:text-olive-dark transition-colors disabled:opacity-50 cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {!showSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-olive-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-olive-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-olive-dark mb-2">
                  ¡Muchas gracias por confiar en nosotros!
                </h3>
                <p className="text-olive-primary/80 leading-relaxed">
                  {productName ? `${productName} pronto estará disponible` : 'Este producto pronto estará disponible'}. 
                  Dejanos tu e-mail para contarte cuando esté disponible.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-olive-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-olive-primary/20 rounded-lg focus:ring-2 focus:ring-olive-primary focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                    disabled={isSubmitting}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !email.trim()}
                  className="w-full bg-olive-primary text-white py-3 px-6 rounded-lg hover:bg-olive-dark transition-colors font-medium uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Notificarme cuando esté disponible"}
                </button>
              </form>

              {/* Footer */}
              <p className="text-xs text-olive-primary/60 text-center mt-4">
                Te contactaremos únicamente para avisarte cuando el producto esté listo.
              </p>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-olive-dark mb-2">
                ¡Listo! Te avisaremos pronto
              </h3>
              <p className="text-olive-primary/80 mb-6">
                Gracias por tu interés en Casa Elaria. Te notificaremos apenas esté disponible.
              </p>
              <button
                onClick={handleClose}
                className="bg-olive-primary text-white py-3 px-8 rounded-lg hover:bg-olive-dark transition-colors font-medium uppercase tracking-wider"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
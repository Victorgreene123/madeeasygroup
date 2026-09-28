'use client';

import React, { createContext, useContext, useState } from 'react';
import { InspectionModal } from './InspectionModal';

interface InspectionContextType {
  openInspection: (estateSlug?: string) => void;
  closeInspection: () => void;
}

const InspectionContext = createContext<InspectionContextType | undefined>(undefined);

export function InspectionProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultSlug, setDefaultSlug] = useState<string | undefined>(undefined);

  const openInspection = (estateSlug?: string) => {
    setDefaultSlug(estateSlug);
    setIsOpen(true);
  };

  const closeInspection = () => {
    setIsOpen(false);
    setDefaultSlug(undefined);
  };

  return (
    <InspectionContext.Provider value={{ openInspection, closeInspection }}>
      {children}
      <InspectionModal
        isOpen={isOpen}
        onClose={closeInspection}
        defaultEstateSlug={defaultSlug}
      />
    </InspectionContext.Provider>
  );
}

export function useInspection() {
  const context = useContext(InspectionContext);
  if (!context) {
    throw new Error('useInspection must be used within an InspectionProvider');
  }
  return context;
}

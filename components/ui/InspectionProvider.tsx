'use client';

import React, { createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

interface InspectionContextType {
  openInspection: (estateSlug?: string) => void;
  closeInspection: () => void;
}

const InspectionContext = createContext<InspectionContextType | undefined>(undefined);

export function InspectionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const openInspection = (estateSlug?: string) => {
    if (estateSlug) {
      router.push(`/book-inspection?estate=${encodeURIComponent(estateSlug)}`);
    } else {
      router.push('/book-inspection');
    }
  };

  const closeInspection = () => {
    // No-op kept for backwards compatibility
  };

  return (
    <InspectionContext.Provider value={{ openInspection, closeInspection }}>
      {children}
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


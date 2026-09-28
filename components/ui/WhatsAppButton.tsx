'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { WhatsApp, X, Send, Phone, MessageCircle, ChevronRight, Check } from './Icons';
import { WHATSAPP_CONFIG, WhatsAppContact } from '@/data/whatsapp';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(WHATSAPP_CONFIG.defaultMessage);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close widget when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleStartChat = (contact: WhatsAppContact) => {
    const textToSend = encodeURIComponent(message.trim() || WHATSAPP_CONFIG.defaultMessage);
    const url = `https://wa.me/${contact.whatsappNumber}?text=${textToSend}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyPhone = (contact: WhatsAppContact, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(contact.displayPhone.replace(/\s+/g, ''));
    setCopiedId(contact.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const quickPrompts = [
    'Schedule site inspection',
    'Inquire on 12-24 month payment',
    'Magboro / Epe estates inquiry',
  ];

  return (
    <div ref={widgetRef} className="font-sans print:hidden">
      {/* Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close WhatsApp chat menu' : 'Chat on WhatsApp with Made Easy Homes & Properties'}
        className={`fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3.5 text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.35)] hover:shadow-[0_10px_35px_rgb(37,211,102,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-slate-800 hover:bg-slate-900 ring-2 ring-white/50' : 'bg-[#25D366] hover:bg-[#20ba5a]'
        }`}
      >
        {/* Pulse ring animation only when closed */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-40 animate-ping pointer-events-none" />
        )}

        {/* Icon toggle */}
        <div className="relative">
          {isOpen ? (
            <X size={24} className="text-white transition-transform duration-200 rotate-90 group-hover:rotate-0" />
          ) : (
            <>
              <WhatsApp size={24} className="text-white drop-shadow-sm" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-100 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-[#25D366]" />
              </span>
            </>
          )}
        </div>

        {/* Desktop Text Badge */}
        <span className="hidden sm:inline-block text-xs font-extrabold tracking-wide uppercase pr-1">
          {isOpen ? 'Close' : 'Chat With Us'}
        </span>
      </button>

      {/* Floating WhatsApp Card Popover */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-24 w-auto sm:w-[380px] max-w-sm sm:max-w-none bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200 z-50 max-h-[calc(100vh-140px)] flex flex-col">
          {/* Card Header */}
          <div className="bg-[#128C7E] text-white p-4 sm:p-5 relative shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5 border border-white/30 shadow-md shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Made Easy"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#25D366] border-2 border-[#128C7E]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight text-white">
                    {WHATSAPP_CONFIG.popupTitle}
                  </h3>
                  <p className="text-[11px] text-emerald-100/90 flex items-center gap-1 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                    <span>{WHATSAPP_CONFIG.popupSubtitle}</span>
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                aria-label="Close WhatsApp chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-4 sm:p-5 bg-slate-50/70 space-y-4 overflow-y-auto overscroll-contain flex-1">
            {/* Intro Greeting Bubble */}
            <div className="p-3.5 bg-white rounded-2xl rounded-tl-sm border border-slate-200/80 shadow-sm text-xs text-slate-700 leading-relaxed">
              {WHATSAPP_CONFIG.greetingText}
            </div>

            {/* Quick Prompt Suggestions */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Quick Topics
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => setMessage(`Hello Made Easy, I would like to ${prompt.toLowerCase()}.`)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#0E6F3B] hover:text-[#0E6F3B] transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Editable Prefilled Message */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Prefilled Message
              </label>
              <div className="relative">
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#128C7E] focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>

            {/* Available Advisors / Lines (Direct from data/whatsapp.ts) */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Select an Advisor to Chat
              </div>
              <div className="space-y-2">
                {WHATSAPP_CONFIG.contacts.map((contact) => (
                  <div
                    key={contact.id}
                    onClick={() => handleStartChat(contact)}
                    className="group cursor-pointer p-3 bg-white hover:bg-[#e8f5ed] border border-slate-200 hover:border-[#25D366] rounded-2xl shadow-sm transition-all duration-200 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <div className="h-9 w-9 rounded-xl bg-[#e8f5ed] group-hover:bg-[#25D366] text-[#0E6F3B] group-hover:text-white font-bold text-xs flex items-center justify-center shrink-0 transition-colors">
                        {contact.avatarText || 'ME'}
                      </div>
                      <div className="truncate">
                        <div className="font-bold text-xs text-slate-900 group-hover:text-[#0E6F3B] transition-colors truncate">
                          {contact.name}
                        </div>
                        <div className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                          <span>{contact.role}</span>
                          <span>•</span>
                          <span className="font-medium text-slate-700">{contact.displayPhone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {/* Copy number button */}
                      <button
                        type="button"
                        onClick={(e) => handleCopyPhone(contact, e)}
                        title="Copy phone number"
                        className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        {copiedId === contact.id ? (
                          <Check size={14} className="text-[#0E6F3B]" />
                        ) : (
                          <Phone size={14} />
                        )}
                      </button>

                      {/* Chat action button */}
                      <div className="px-2.5 py-1.5 rounded-lg bg-[#25D366] group-hover:bg-[#20ba5a] text-white text-[11px] font-bold flex items-center gap-1 shadow-sm transition-all">
                        <span>Chat</span>
                        <ChevronRight size={12} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="p-3 bg-white border-t border-slate-200 text-center">
            <span className="text-[10px] text-slate-400">
              Powered by WhatsApp Business • Made Easy Group
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

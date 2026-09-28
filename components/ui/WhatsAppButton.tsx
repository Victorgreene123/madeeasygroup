'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { WhatsApp, X, Phone, ChevronRight, Check, MessageSquareText } from './Icons';
import { WHATSAPP_CONFIG, WhatsAppContact } from '@/data/whatsapp';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(WHATSAPP_CONFIG.defaultMessage);
  const [showCustomMsg, setShowCustomMsg] = useState(false);
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
    { label: 'Site Inspection', msg: 'Hello Made Easy, I would like to schedule a free site inspection.' },
    { label: 'Payment Plans', msg: 'Hello Made Easy, please send me details on your 12 and 24-month payment plans.' },
    { label: 'Magboro / Epe', msg: 'Hello Made Easy, I want to inquire about available plots in Magboro and Epe.' },
  ];

  return (
    <div ref={widgetRef} className="font-sans print:hidden">
      {/* Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close WhatsApp chat menu' : 'Chat on WhatsApp with Made Easy Homes & Properties'}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-3 text-white rounded-full shadow-[0_6px_25px_rgb(37,211,102,0.4)] hover:shadow-[0_10px_35px_rgb(37,211,102,0.55)] transition-all duration-300 active:scale-95 ${
          isOpen ? 'bg-slate-800 hover:bg-slate-900 ring-2 ring-white/50' : 'bg-[#25D366] hover:bg-[#20ba5a]'
        }`}
      >
        {/* Pulse ring animation only when closed */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-40 animate-ping pointer-events-none" />
        )}

        {/* Icon toggle */}
        <div className="relative flex items-center justify-center">
          {isOpen ? (
            <X size={22} className="text-white transition-transform duration-200 rotate-90 group-hover:rotate-0" />
          ) : (
            <>
              <WhatsApp size={22} className="text-white drop-shadow-sm" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-100 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white border-2 border-[#25D366]" />
              </span>
            </>
          )}
        </div>

        {/* Desktop Text Badge */}
        <span className="hidden sm:inline-block text-xs font-extrabold tracking-wide uppercase pr-0.5">
          {isOpen ? 'Close' : 'Chat With Us'}
        </span>
      </button>

      {/* Floating WhatsApp Card Popover */}
      {isOpen && (
        <div className="fixed bottom-[72px] right-3 left-3 sm:left-auto sm:right-6 sm:bottom-20 w-auto sm:w-[360px] max-w-sm sm:max-w-none bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 z-50 max-h-[calc(100svh-100px)] sm:max-h-[580px] flex flex-col">
          {/* Card Header (Clean & Compact) */}
          <div className="bg-[#128C7E] text-white p-3.5 sm:p-4 relative shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative h-9 w-9 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5 border border-white/40 shadow-sm shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Made Easy"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#25D366] border-2 border-[#128C7E]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-xs sm:text-sm leading-tight text-white truncate">
                    {WHATSAPP_CONFIG.popupTitle}
                  </h3>
                  <p className="text-[10.5px] text-emerald-100/90 flex items-center gap-1 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] shrink-0" />
                    <span className="truncate">Online • Quick Response</span>
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="h-7 w-7 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Close WhatsApp chat"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Card Body (Streamlined & Compact) */}
          <div className="p-3 sm:p-4 bg-slate-50/80 space-y-3 overflow-y-auto overscroll-contain flex-1">
            {/* Intro Greeting Bubble */}
            <div className="p-2.5 sm:p-3 bg-white rounded-xl rounded-tl-xs border border-slate-200/80 shadow-xs text-xs text-slate-700 leading-relaxed">
              👋 Need fast answers on titles, inspections, or flexible installments? Choose a line below:
            </div>

            {/* Quick Topic Chips */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Quick Inquiries
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      setMessage(item.msg);
                      setShowCustomMsg(true);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#0E6F3B] hover:text-[#0E6F3B] transition-colors active:scale-95"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggleable Custom Message Row */}
            <div className="pt-0.5">
              {!showCustomMsg ? (
                <button
                  type="button"
                  onClick={() => setShowCustomMsg(true)}
                  className="text-[11px] text-[#0E6F3B] font-semibold hover:underline flex items-center gap-1"
                >
                  <MessageSquareText size={12} />
                  <span>Customize prefilled message</span>
                </button>
              ) : (
                <div className="space-y-1 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Your Message
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowCustomMsg(false)}
                      className="text-[10px] text-slate-400 hover:text-slate-600"
                    >
                      Hide
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#128C7E] resize-none"
                  />
                </div>
              )}
            </div>

            {/* Advisors WhatsApp Direct Contact Cards */}
            <div className="space-y-2 pt-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Direct WhatsApp Lines
              </div>
              <div className="space-y-2">
                {WHATSAPP_CONFIG.contacts.map((contact) => (
                  <div
                    key={contact.id}
                    onClick={() => handleStartChat(contact)}
                    className="group cursor-pointer p-2.5 sm:p-3 bg-white hover:bg-[#e8f5ed] border border-slate-200 hover:border-[#25D366] rounded-xl sm:rounded-2xl shadow-xs hover:shadow-sm transition-all flex items-center justify-between gap-2.5 active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-[#e8f5ed] group-hover:bg-[#25D366] text-[#0E6F3B] group-hover:text-white font-bold text-xs flex items-center justify-center shrink-0 transition-colors">
                        {contact.avatarText || 'ME'}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-xs text-slate-900 group-hover:text-[#0E6F3B] transition-colors truncate">
                          {contact.name}
                        </div>
                        <div className="text-[10.5px] text-slate-500 flex items-center gap-1.5 mt-0.5 truncate">
                          <span className="truncate">{contact.role}</span>
                          <span>•</span>
                          <span className="font-semibold text-slate-700 shrink-0">{contact.displayPhone}</span>
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
                          <Check size={13} className="text-[#0E6F3B]" />
                        ) : (
                          <Phone size={13} />
                        )}
                      </button>

                      {/* Chat pill */}
                      <div className="px-2.5 py-1 rounded-md bg-[#25D366] group-hover:bg-[#20ba5a] text-white text-[10.5px] font-bold flex items-center gap-1 shadow-xs transition-all">
                        <span>Chat</span>
                        <ChevronRight size={11} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

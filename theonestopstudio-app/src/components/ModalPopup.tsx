"use client";

import React from "react";
import translations from "@/../public/localization/translationModalPopup.json";

type ModalPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  href?: string;
  language?: "en" | "es" | "ko";
};

type ModalTranslations = {
  learnMore: string;
  close: string;
};

export default function ModalPopup({
  isOpen,
  onClose,
  title,
  description,
  href,
  language = "en",
}: ModalPopupProps) {
  if (!isOpen) return null;

  // Get translations for current language, fallback to 'en'
  const t: ModalTranslations = translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button" aria-label="Close Modal">
          ×
        </button>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <div className="modal-actions">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="button-54 modal-link-button"
            >
              {t.learnMore}
            </a>
          )}
          <button className="button-54 modal-close-main" onClick={onClose}>
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}

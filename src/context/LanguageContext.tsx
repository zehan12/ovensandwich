import React, { createContext, useContext, useState, ReactNode } from "react";
import { tr } from "../locales/tr";
import { en } from "../locales/en";
import { de } from "../locales/de";
import { es } from "../locales/es";
import { fr } from "../locales/fr";

export type Language = "tr" | "en" | "de" | "es" | "fr";
type Translations = typeof tr;

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("tr");

  const t = (key: keyof Translations): string => {
    const translationMap: Record<Language, Translations> = { tr, en, de, es, fr };
    const translations = translationMap[language];
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

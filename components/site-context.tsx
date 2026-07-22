"use client";

import { createContext, useContext } from "react";

export const PORTAL_URL = "https://portal.porticointelligence.com";

export type OpenFn = (mode: "trial" | "demo") => void;
export const ModalCtx = createContext<OpenFn>(() => {});
export const useOpenModal = () => useContext(ModalCtx);

export type Lang = "en" | "fr";
export type LangCtxValue = { lang: Lang; setLang: (l: Lang) => void; t: (en: string, fr: string) => string };
export const LangCtx = createContext<LangCtxValue>({ lang: "en", setLang: () => {}, t: (en) => en });
/** useLang().t(englishText, frenchText) returns the right string for the current language. */
export const useLang = () => useContext(LangCtx);

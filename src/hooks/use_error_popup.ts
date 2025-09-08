"use client";

import { useState, useCallback } from "react";

interface ErrorPopupState {
  isOpen: boolean;
  title?: string;
  message?: string;
  subMessage?: string;
}

export function useErrorPopup() {
  const [errorState, setErrorState] = useState<ErrorPopupState>({
    isOpen: false,
  });

  const showError = useCallback((title?: string, message?: string, subMessage?: string) => {
    setErrorState({
      isOpen: true,
      title,
      message,
      subMessage,
    });
  }, []);

  const hideError = useCallback(() => {
    setErrorState(prev => ({ ...prev, isOpen: false }));
  }, []);

  return {
    ...errorState,
    showError,
    hideError,
  };
}

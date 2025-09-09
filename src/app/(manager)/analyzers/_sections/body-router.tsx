"use client";

import type { AnalyzerTab } from "@/types/navigation";
import HomeSection from "./section-home";
import TestSection from "./section-test";
import ErrorSection from "./section-error";
import UploadSection from "./section-upload";
import InstrumentSection from "./section-instrument";
import QcSection from "./section-qc";
import MaterialSection from "./section-material";
import DiagnosisSection from "./section-diagnosis";
import SettingsSection from "./section-settings";
import AccountSection from "./section-account";

export function BodyRouter({ activeTab }: { activeTab: AnalyzerTab }) {
  switch (activeTab) {
    case "home":
      return <HomeSection />;
    case "test":
      return <TestSection />;
    case "error":
      return <ErrorSection />;
    case "upload":
      return <UploadSection />;
    case "instrument":
      return <InstrumentSection />;
    case "qc":
      return <QcSection />;
    case "material":
      return <MaterialSection />;
    case "diagnosis":
      return <DiagnosisSection />;
    case "settings":
      return <SettingsSection />;
    case "account":
      return <AccountSection />;
    default:
      return null;
  }
}

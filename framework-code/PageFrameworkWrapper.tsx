import React from "react";
import { PageContextProvider } from "./usePageContext";

export { PageFrameworkWrapper };

function PageFrameworkWrapper({
  pageContext,
  children,
}: {
  pageContext: Record<string, unknown>;
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  );
}

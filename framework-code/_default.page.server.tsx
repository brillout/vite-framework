import ReactDOMServer from "react-dom/server";
import React from "react";
import { html } from "vite-plugin-ssr";
import { PageFrameworkWrapper } from "./PageFrameworkWrapper";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import { getUserSettings } from "./setUserSettings";

export { render };
export { passToClient };

const passToClient = ["urlPathname"] as const;

function render(pageContext: PageContextBuiltIn) {
  const {
    PageWrapper,
    html: { title, description, head },
  } = getUserSettings();

  const { Page } = pageContext;
  const pageContent = ReactDOMServer.renderToString(
    <PageFrameworkWrapper pageContext={pageContext}>
      <PageWrapper>
        <Page />
      </PageWrapper>
    </PageFrameworkWrapper>
  );

  return html`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        ${!description
          ? ""
          : html`<meta name="description" content="${description}" />`}
        ${html.dangerouslySkipEscape(head || "")}
      </head>
      <body>
        <div id="page-view">${html.dangerouslySkipEscape(pageContent)}</div>
      </body>
    </html>`;
}

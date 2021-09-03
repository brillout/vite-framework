import React from "react";
import ReactDOM from "react-dom";
import { useClientRouter } from "vite-plugin-ssr/client/router";
import { PageFrameworkWrapper } from "./PageFrameworkWrapper";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/types";
import { getUserSettings } from "./setUserSettings";

useClientRouter({
  render(pageContext: PageContextBuiltInClient) {
    const {
      PageWrapper,
      html: { title },
    } = getUserSettings();
    const { Page } = pageContext;
    const page = (
      <PageFrameworkWrapper pageContext={pageContext}>
        <PageWrapper>
          <Page />
        </PageWrapper>
      </PageFrameworkWrapper>
    );
    const container = document.getElementById("page-view");
    if (pageContext.isHydration) {
      ReactDOM.hydrate(page, container);
    } else {
      ReactDOM.render(page, container);
    }
    document.title = title;
  },
  onTransitionStart,
  onTransitionEnd,
});

function onTransitionStart() {
  document.querySelector("#page-content")!.classList.add("page-transition");
}
function onTransitionEnd() {
  document.querySelector("#page-content")!.classList.remove("page-transition");
}

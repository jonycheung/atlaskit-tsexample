//https://atlaskit.atlassian.com/packages/core/navigation-next/docs/composing-your-navigation

import React from "react";
import { LayoutManager, NavigationProvider } from "@atlaskit/navigation-next";
import GlobalNavigation from "@atlaskit/global-navigation";
import AtlassianIcon from "@atlaskit/logo/dist/esm/AtlassianLogo/Icon";

const MyGlobalNavigation = () => (
  <GlobalNavigation productIcon={AtlassianIcon} onProductClick={() => {}} />
);

export default () => (
  <NavigationProvider>
    <LayoutManager
      globalNavigation={MyGlobalNavigation}
      productNavigation={() => null}
      containerNavigation={() => null}
    >
      <div>Page content goes here.</div>
    </LayoutManager>
  </NavigationProvider>
);

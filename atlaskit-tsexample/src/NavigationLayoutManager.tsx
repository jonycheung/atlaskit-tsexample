//https://atlaskit.atlassian.com/packages/core/navigation-next/docs/composing-your-navigation

import React, { Fragment } from "react";
import {
  GroupHeading,
  HeaderSection,
  Item,
  LayoutManager,
  MenuSection,
  NavigationProvider,
  Separator,
  Wordmark
} from "@atlaskit/navigation-next";

import GlobalNavigation from "@atlaskit/global-navigation";
import { AtlassianIcon, AtlassianWordmark } from "@atlaskit/logo";

const MyGlobalNavigation = () => (
  <GlobalNavigation productIcon={AtlassianIcon} onProductClick={() => {}} />
);
interface ClassObjectInterface {
  className: string;
}

const MyProductNavigation = () => (
  <Fragment>
    <HeaderSection>
      {({ className }:ClassObjectInterface) => (
        <div className={className}>
          <Wordmark wordmark={AtlassianWordmark} />
        </div>
      )}
    </HeaderSection>
    <MenuSection>
      {({ className }:ClassObjectInterface) => (
        <div className={className}>
          <Item text="Dashboard" />
          <Item text="Things" />
          <Item text="Settings" />
          <Separator />
          <GroupHeading>Add-ons</GroupHeading>
          <Item text="My plugin" />
        </div>
      )}
    </MenuSection>
  </Fragment>
);

export default () => (
  <NavigationProvider>
    <LayoutManager
      globalNavigation={MyGlobalNavigation}
      productNavigation={MyProductNavigation}
      containerNavigation={() => null}
    >
      <div>Page content goes here.</div>
    </LayoutManager>
  </NavigationProvider>
);

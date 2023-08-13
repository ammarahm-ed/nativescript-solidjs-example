import { ItemLoadingEventData } from "@nativescript-dom/core-types";
import { Home } from "./routes/home";
import { Route, StackRouter } from "./router";
import { CollectionView } from "@nativescript-community/ui-collectionview";
//@ts-ignore
import { makeListView, registerElement } from "dominative";
import { Settings } from "./routes/settings";
registerElement(
  "collectionview",
  makeListView(CollectionView, { force: true })
);

declare global {
  interface HTMLCollectionViewElement extends HTMLListViewElement {}

  var HTMLCollectionViewElement: {
    prototype: HTMLCollectionViewElement;
    new (): HTMLCollectionViewElement;
  };
}

declare module "solid-js" {
  export namespace JSX {
    interface IntrinsicElements {
      /**
       * Register custom library view
       */
      collectionview: Partial<
        HTMLListViewElementAttributes<HTMLCollectionViewElement>
      >;
      /**
       * Register dominative elements
       */
      itemtemplate: Partial<
        HTMLViewBaseElementAttributes & {
          "on:createView": (event: ItemLoadingEventData) => void;
          "on:itemLoading": (event: ItemLoadingEventData) => void;
          key: string;
        }
      >;
      arrayprop: Partial<
        HTMLViewBaseElementAttributes & {
          key: string;
        }
      >;
      keyprop: Partial<
        HTMLViewBaseElementAttributes & {
          key: string;
        }
      >;
    }
  }
}

const App = () => {
  return (
    <StackRouter initialRouteName="Home">
      <Route name="Home" component={Home as any} />
      <Route name="Settings" component={Settings as any} />
    </StackRouter>
  );
};

export { App };

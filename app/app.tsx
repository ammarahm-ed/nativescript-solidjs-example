import { Home } from "./home";
import { Route, StackRouter } from "./router";
import { CollectionView } from "@nativescript-community/ui-collectionview";
//@ts-ignore
import { makeListView, registerElement } from "dominative";
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
      collectionview: Partial<
        HTMLListViewElementAttributes<HTMLCollectionViewElement>
      >;
    }
  }
}

const App = () => {
  return (
    <StackRouter initialRouteName="Home">
      <Route name="Home" component={Home} />
    </StackRouter>
  );
};

export { App };

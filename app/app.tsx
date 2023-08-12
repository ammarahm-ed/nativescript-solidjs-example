import { Home } from "./home";
import { Route, StackRouter } from "./router";
import { CollectionView } from "@nativescript-community/ui-collectionview";
import { makeListView, registerElement } from "dominative";
registerElement(
  "collectionview",
  makeListView(CollectionView, { force: true })
);

declare module "dominative" {
  export interface NSCustomComponentsMap {
    CollectionView: CollectionView & { [name: string]: any };
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

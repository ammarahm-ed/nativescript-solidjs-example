import { Home } from "./home";
import { Route, StackRouter } from "./router";


const App = () => {
  return (
    <StackRouter initialRouteName="Home">
      <Route name="Home" component={Home} />
    </StackRouter>
  );
};

export { App };

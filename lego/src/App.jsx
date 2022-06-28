import { routes } from "./router";
import "./App.css";

export default {
  render(h) {
    return (
      <div class="app">
        <ul class="left">
          {routes.map((route) => {
            return (
              <li>
                <router-link to={`${route.path}`}>{route.label}</router-link>
              </li>
            );
          })}
        </ul>

        <router-view class="right" />
      </div>
    );
  },
};

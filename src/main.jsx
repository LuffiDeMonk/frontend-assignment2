import React from "react";
import { BrowserRouter } from "react-router-dom";

//react query setup imports
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

//redux store setup
import { Provider } from "react-redux";
import { store } from "./features/store.js";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//swiper css modules
import "swiper/css";
import "./index.css";

//initializing the instance of query client
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>
);

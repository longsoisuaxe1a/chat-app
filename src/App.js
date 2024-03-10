import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./components/routes";
import { DefaultLayout } from "./components/Layouts";
import { Fragment } from "react";
function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((routes, index) => {
            let Layout = DefaultLayout
            if(routes.layout){
              Layout = routes.layout
            }else if(routes.layout === null){
              Layout = Fragment
            }
            const Page = routes.component;
            return (
              <Route
                key={index}
                path={routes.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

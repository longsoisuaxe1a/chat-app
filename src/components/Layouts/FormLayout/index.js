import ContentRight from "./ContentRight/ContentRight";
import './index.css'
function DefaultLayout({children}) {
  return (
    <div className="container">
        {children}
      <ContentRight/>
    </div>
  );
}
export default DefaultLayout;

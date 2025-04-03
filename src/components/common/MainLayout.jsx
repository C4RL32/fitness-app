import Navbar from "./Navbar";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./Layout.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

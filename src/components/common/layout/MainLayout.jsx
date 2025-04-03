import Navbar from './Navbar';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';


export default function Main_Layout({ children }) {
    return (
        <div className="layout-container">
        <Header />
        <Navbar />
        <div className="main-content">
            <Sidebar />
            <main className="page-content">{children}</main>
        </div>
        <Footer />
        </div>
    );
    }
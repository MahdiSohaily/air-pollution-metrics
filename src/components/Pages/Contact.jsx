import Footer from '../props/Footer';
import NavBar from '../props/NavBar';
import '../../styles/contact.css';

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="contact-info shadow p-3 mb-5 bg-white">
        <h1>Contact Information</h1>
        <p className="text-secondary">
          Contact us via mail (mahdi.sohaily4030@gmail.com)
        </p>
        <p>
          Or click on any of the social media links below to reach me directly.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

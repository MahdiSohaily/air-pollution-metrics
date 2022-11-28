import Footer from '../props/Footer';
import NavBar from '../props/NavBar';
import '../../styles/contact.css';

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="contact-container bg-main">
        <div>
          <h1 className="text-neutral-100">Contact Information</h1>
          <p className="text-neutral-100">
            Contact us via mail (mahdi.sohaily4030@gmail.com)
          </p>
          <p className="text-neutral-100">
            Or click on any of the social media links below to reach me
            directly.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

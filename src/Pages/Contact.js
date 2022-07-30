import Card from "../UI/Card";
import "./Contact.css";
function Contact(props) {
  return (
    <div className="about-page">
      <Card className="contact-card">
        <h2>Contact Info</h2>
        <p>Email id:- ankitsharmauitbu@gmail.com</p>

        <br />
        <p>Phone no. :- +91 6206744181</p>
        <br />

        <p>
          Github:-{" "}
          <a href="https://github.com/ankit-ma/Rent-App.git" target="_">
            https://github.com/ankit-ma/Rent-App.git
          </a>
        </p>
        <br />

        <p>
          Linkedln:-{" "}
          <a href="https://linkedin.com/in/ankit-kumar-5062191ab/" target="_">
            https://linkedin.com/in/ankit-kumar-5062191ab/
          </a>
        </p>
        <br />
        <p>
          Website:-{" "}
          <a href="https://ankitkumarportfolio.web.app/" target="_">
            https://ankitkumarportfolio.web.app/
          </a>
        </p>
      </Card>
    </div>
  );
}

export default Contact;

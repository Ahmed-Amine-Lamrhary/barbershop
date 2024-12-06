import './App.css';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className='overlay'>
          <h1>Welcome to Our Barbershop</h1>
          <p>Where your next haircut is just a click away. Book an appointment today!</p>
        </div>
      </header>

      <section className="about-section">
        <h3>About Us</h3>
        <p>At our barbershop, we pride ourselves on offering top-tier grooming services in a relaxed, comfortable environment. Whether you need a fresh haircut, shave, or complete grooming session, our expert barbers are here to deliver the best experience.</p>
        <p>We focus on quality, customer satisfaction, and making sure you leave our shop feeling your absolute best.</p>
      </section>

      <section className="services-section">
        <h3>Our Services</h3>
        <div className="services-list">
          <div className="service-item">
            <div className='img-cont'>
              <img src="/1.jpg" alt="Haircut" />
            </div>
            <h3>Haircut</h3>
            <p>Get the freshest haircut that suits your style. Whether it's a trim or a new look, we've got you covered!</p>
          </div>
          <div className="service-item">
            <div className='img-cont'>
              <img src="/2.avif" alt="Haircut" />
            </div>
            <h3>Shave</h3>
            <p>Relax with a smooth and precise shave. Our barbers ensure your face feels as smooth as possible.</p>
          </div>
          <div className="service-item">
            <div className='img-cont'>
              <img src="/3.avif" alt="Haircut" />
            </div>
            <h3>Haircut & Shave</h3>
            <p>For the ultimate grooming experience, combine a haircut and shave for the full transformation.</p>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <h3>Book Your Appointment</h3>
        <p>Ready to book? Use our simple form below to schedule your next appointment. Choose your service, time, and date, and we'll see you at the shop!</p>
        <BookingForm />
      </section>

      <section className="testimonials-section">
        <h3>What Our Customers Say</h3>
        <div className="testimonials">
          <div className="testimonial-item">
            <p>"The best barbershop in town! The staff are friendly and professional, and I always leave feeling fresh."</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial-item">
            <p>"I’ve been coming here for months, and I wouldn’t go anywhere else. Always great service and a clean environment."</p>
            <p>- Emily S.</p>
          </div>
          <div className="testimonial-item">
            <p>"I love the new look I got! The barbers really know what they’re doing. Highly recommend."</p>
            <p>- Mike J.</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>&copy; 2024 Our Barbershop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

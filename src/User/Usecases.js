import React from "react";
import "./Usecases.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";

const Usecases = () => {
  return (
    <div>
      <Navbar />
      <div className="Usecases-Container">
        <header className="headerU">
          <h2>Use Cases</h2>
          <p>Explore how Passwale empowers event organizers, attendees, and sponsors.</p>
        </header>

        <ImageSlider />
        <br />
        <br />

        <div className="usecase-itemU left">
          <img src="/lock.jpg" alt="Workshops, Trainings & Hackathons" className="usecase-imageU" />
          <div className="usecase-contentU">
            <h3>Workshops, Trainings & Hackathons</h3>
            <p className="text-style-1">
              Passwale streamlines the organization of workshops, training programs, and hackathons by providing robust
              event management tools. It offers an intuitive setup, real-time participant tracking, and automated
              communication. Whether it’s a coding bootcamp or corporate training, Passwale optimizes the process,
              improving learning experiences and collaboration. The platform efficiently manages resources, ensuring
              smooth event execution and an enhanced participant journey from registration to feedback collection.
            </p>
            <ul>
              <li className="usecase-pointU">Manage registrations, track attendance, and simplify participant engagement effectively.</li>
              <li className="usecase-pointU">Monitor event progress using real-time dashboards and insightful analytics.</li>
              <li className="usecase-pointU">Send automated event updates, reminders, and announcements effortlessly.</li>
              <li className="usecase-pointU">Provide essential learning materials and resources through seamless integration.</li>
            </ul>
          </div>
        </div>

        <div className="usecase-itemU right">
          <img src="/image2.jpeg" alt="Networking Events" className="usecase-imageU" />
          <div className="usecase-contentU">
            <h3>Networking Events</h3>
            <p className="text-style-2">
              Creating valuable professional connections is crucial for career and business growth. Passwale simplifies
              hosting networking events with advanced RSVP management, attendee matchmaking, and interactive features.
              Whether it’s a startup mixer, industry meetup, or investor session, Passwale ensures structured event
              management, allowing attendees to connect meaningfully and maximize collaboration opportunities.
            </p>
            <ul>
              <li className="usecase-pointU">Manage RSVPs, track participation, and streamline networking event processes.</li>
              <li className="usecase-pointU">Facilitate live interactions using real-time chat, Q&A, and polls.</li>
              <li className="usecase-pointU">Organize structured networking sessions with reminders and automated scheduling.</li>
              <li className="usecase-pointU">Match attendees with similar interests using intelligent matchmaking algorithms.</li>
            </ul>
          </div>
        </div>

        <div className="usecase-itemU left">
          <img src="/lock.jpg" alt="Conferences & Summits" className="usecase-imageU" />
          <div className="usecase-contentU">
            <h3>Conferences & Summits</h3>
            <p className="text-style-3">
              Planning and executing large-scale conferences and summits can be challenging, but Passwale provides
              seamless tools to simplify the process. From speaker management and agenda scheduling to sponsorships and
              ticketing, our platform ensures a hassle-free experience. Attendees can access conference materials,
              participate in live Q&A, and network with industry experts, ensuring a valuable and well-organized event.
            </p>
            <ul>
              <li className="usecase-pointU">Effortlessly manage speaker sessions, presentations, and panel discussions with event tools.</li>
              <li className="usecase-pointU">Customize event agendas with flexible scheduling options for seamless conference planning.</li>
              <li className="usecase-pointU">Enhance audience engagement with live Q&A, feedback collection, and interactive sessions.</li>
              <li className="usecase-pointU">Monitor event performance using analytics-driven insights for improved future conferences.</li>
            </ul>
          </div>
        </div>

        <div className="usecase-itemU right">
          <img src="/image3.jpeg" alt="Corporate Gatherings" className="usecase-imageU" />
          <div className="usecase-contentU">
            <h3>Corporate Gatherings</h3>
            <p className="text-style-4">
              Corporate events play a crucial role in fostering team collaboration and business networking. Passwale
              simplifies the planning of corporate meetings, leadership retreats, and team-building activities with
              comprehensive event tools. From invitation management to interactive engagement features, we ensure a
              smooth and professional experience, enhancing company culture and communication.
            </p>
            <ul>
              <li className="usecase-pointU">Simplify planning for corporate events, from employee meetings to leadership retreats.</li>
              <li className="usecase-pointU">Engage employees with interactive features such as live polls and breakout sessions.</li>
              <li className="usecase-pointU">Efficiently track attendance, manage invitations, and coordinate venue logistics.</li>
              <li className="usecase-pointU">Ensure a professional and structured event experience with seamless execution tools.</li>
            </ul>
          </div>
        </div>

        <div className="usecase-itemU left">
          <img src="/Sportevent.jpeg" alt="Marathons & Sports Events" className="usecase-imageU" />
          <div className="usecase-contentU">
            <h3>Marathons & Sports Events</h3>
            <p className="text-style-5">
              Managing sports events requires precision, efficiency, and real-time tracking capabilities. Passwale
              simplifies the organization of marathons, tournaments, and athletic competitions by handling participant
              registrations, race timing, and result tracking effortlessly. With integrated event notifications, route
              planning tools, and sponsorship management, organizers can ensure smooth coordination and an exceptional
              experience for athletes and spectators alike.
            </p>
            <ul>
              <li className="usecase-pointU">Automate registration, race timing, and participant tracking for streamlined event management.</li>
              <li className="usecase-pointU">Provide real-time race results and leaderboards to enhance the competitive experience.</li>
              <li className="usecase-pointU">Manage sponsorship opportunities and branding seamlessly with integrated event solutions.</li>
              <li className="usecase-pointU">Boost athlete engagement with interactive notifications, route planning, and live tracking.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Usecases;

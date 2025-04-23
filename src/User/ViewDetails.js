import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CalendarMonth, LocationOn, Print, Close } from '@mui/icons-material';
import { events } from './Event';
import Navbar from './Navbar';
import Footer from './Footer';
import './ViewDetails.css';

const ViewDetails = () => {
  const { eventTitle } = useParams();
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(eventTitle);
  const event = events.find(e => e.title === decodedTitle);

  const [showInvoice, setShowInvoice] = useState(false);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [userDetails, setUserDetails] = useState({ name: '', email: '', paymentMethod: '' });

  const ticketPrice = 1500;
  const gstPercentage = 18;

  const calculateTotal = () => {
    const subtotal = ticketQuantity * ticketPrice;
    return subtotal + (subtotal * gstPercentage) / 100;
  };

  const handleBooking = () => setShowInvoice(true);
  const handlePrint = () => window.print();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userDetails.paymentMethod) return alert('Please select a payment method');
    alert('Booking confirmed! Check your email.');
    setShowInvoice(false);
    setUserDetails({ name: '', email: '', paymentMethod: '' });
    setTicketQuantity(1);
  };

  if (!event) {
    return (
      <div className="event-details">
        <Navbar />
        <div className="event-container">
          <h2>Event Not Found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="event-details">
      <Navbar />
      <div className="event-container">
        <div className="event-card">
          <div className="image-container">
            <img src={event.image} alt={event.title} className="event-image" loading="lazy" />
          </div>
          <div className="event-content">
            <span className="event-badge">{event.type}</span>
            <h1 className="event-title">{event.title}</h1>
            <div className="event-meta">
              <div className="meta-item"><CalendarMonth />{event.date}</div>
              <div className="meta-item"><LocationOn />{event.location}</div>
            </div>
            <p className="event-description">{event.description}</p>
            <div className="event-actions">
              <button className="event-button button-primary" onClick={handleBooking}>Book Tickets Now</button>
              <button className="event-button button-secondary" onClick={() => navigate(-1)}>Back to Events</button>
            </div>
          </div>
        </div>
      </div>

      {showInvoice && (
        <div className="invoice-overlay">
          <div className="invoice-modal">
            <div className="invoice-header">
              <h2>Booking Invoice</h2>
              <button className="close-button" onClick={() => setShowInvoice(false)}><Close /></button>
            </div>
            <div className="invoice-content">
              <div className="invoice-left">
                <h3>Event Information</h3>
                <div className="detail-item"><span>Event Name:</span><span>{event.title}</span></div>
                <div className="detail-item"><span>Date:</span><span>{event.date}</span></div>
                <div className="detail-item"><span>Location:</span><span>{event.location}</span></div>
                <div className="detail-item"><span>Type:</span><span>{event.type}</span></div>

                <div className="customer-details">
                  <h3>Customer Information</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" required value={userDetails.name} onChange={e => setUserDetails({...userDetails, name: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" required value={userDetails.email} onChange={e => setUserDetails({...userDetails, email: e.target.value})} />
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Column: Payment Summary & Methods */}
<div className="invoice-right">
  {/* Payment Summary */}
  <h3>Payment Summary</h3>
  <div className="price-table">
    <div className="price-row">
      <span>Ticket Price:</span>
      <span>₹{ticketPrice.toLocaleString('en-IN')}</span>
    </div>
    <div className="price-row">
      <span>Quantity:</span>
      <div className="quantity-controls">
        <button
          onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
          disabled={ticketQuantity === 1}
        >
          −
        </button>
        <span>{ticketQuantity}</span>
        <button onClick={() => setTicketQuantity(ticketQuantity + 1)}>
          +
        </button>
      </div>
    </div>
    <div className="price-row">
      <span>Subtotal:</span>
      <span>₹{(ticketQuantity * ticketPrice).toLocaleString('en-IN')}</span>
    </div>
    <div className="price-row">
      <span>GST ({gstPercentage}%):</span>
      <span>₹{((ticketQuantity * ticketPrice * gstPercentage) / 100).toLocaleString('en-IN')}</span>
    </div>
    <div className="price-row total">
      <span>Total Payable:</span>
      <span>₹{calculateTotal().toLocaleString('en-IN')}</span>
    </div>
  </div>

  {/* Payment Method Selection */}
  <div className="payment-methods">
    <h3>Payment Method</h3>
    <div className="payment-options">
      {['card', 'upi', 'netbanking'].map((method) => (
        <div
          key={method}
          className={`payment-option ${userDetails.paymentMethod === method ? 'active' : ''}`}
          onClick={() => setUserDetails({ ...userDetails, paymentMethod: method })}
        >
          <input
            type="radio"
            name="payment"
            checked={userDetails.paymentMethod === method}
            readOnly
          />
          {method === 'card'
            ? 'Credit/Debit Card'
            : method === 'upi'
            ? 'UPI'
            : 'Net Banking'}
        </div>
      ))}
    </div>
  </div>
</div>
            </div>
            <div className="invoice-actions">
              <button className="event-button button-primary" onClick={handleSubmit}>Pay ₹{calculateTotal()}</button>
              <button className="event-button button-secondary" onClick={handlePrint}><Print /> Print</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ViewDetails;
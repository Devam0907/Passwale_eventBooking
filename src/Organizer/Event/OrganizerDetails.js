import React from 'react'

function OrganizerDetails() {
  return (
    <div>OrganizerDetails</div>
  )
}

export default OrganizerDetails


// import React, { useState, useEffect } from 'react';
// import './OrganizerDetails.css';
// import { getAuth } from 'firebase/auth'; // or your auth provider
// import { getOrganizerDetails } from './api'; // your API service

// const OrganizerDetails = () => {
//   const [organizer, setOrganizer] = useState({
//     name: '',
//     email: '',
//     description: '',
//     phone: '',
//     facebook: '',
//     website: '',
//     twitter: '',
//     linkedin: '',
//     image: null
//   });
//   const [loading, setLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setIsAuthenticated(true);
//         fetchOrganizerDetails(user.uid);
//       } else {
//         setIsAuthenticated(false);
//         setLoading(false);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const fetchOrganizerDetails = async (userId) => {
//     try {
//       const details = await getOrganizerDetails(userId);
//       if (details) {
//         setOrganizer({
//           name: details.name || '',
//           email: details.email || '',
//           description: details.description || '',
//           phone: details.phone || '',
//           facebook: details.facebook || '',
//           website: details.website || '',
//           twitter: details.twitter || '',
//           linkedin: details.linkedin || '',
//           image: details.imageUrl || null
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching organizer details:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrganizer(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       setOrganizer(prev => ({
//         ...prev,
//         image: URL.createObjectURL(file)
//       }));
//       // Here you would typically upload the image to your storage service
//     }
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   return (
//     <div className="organizer-details">
//       <h1>Organizer Details</h1>
      
//       {!isAuthenticated && (
//         <div className="auth-message">
//           Please log in to view or edit your organizer details.
//         </div>
//       )}

//       {isAuthenticated && (
//         <>
//           <div className="form-group">
//             <label>Name</label>
//             <input 
//               type="text" 
//               name="name" 
//               value={organizer.name} 
//               onChange={handleChange} 
//               placeholder="Enter your name"
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Email*</label>
//             <input 
//               type="email" 
//               name="email" 
//               value={organizer.email} 
//               onChange={handleChange} 
//               required 
//               placeholder="Enter your email"
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Description</label>
//             <textarea 
//               name="description" 
//               value={organizer.description} 
//               onChange={handleChange}
//               placeholder="Enter your description here"
//             />
//           </div>
          
//           <hr />
          
//           <div className="form-group">
//             <label>Phone Number</label>
//             <input 
//               type="tel" 
//               name="phone" 
//               value={organizer.phone} 
//               onChange={handleChange} 
//               placeholder="+91 9876543210"
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Facebook Link</label>
//             <input 
//               type="url" 
//               name="facebook" 
//               value={organizer.facebook} 
//               onChange={handleChange} 
//               placeholder="https://www.facebook.com/"
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Website</label>
//             <input 
//               type="url" 
//               name="website" 
//               value={organizer.website} 
//               onChange={handleChange} 
//               placeholder="https://www.yourwebsite.com"
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Twitter Link</label>
//             <input 
//               type="url" 
//               name="twitter" 
//               value={organizer.twitter} 
//               onChange={handleChange} 
//               placeholder="https://twitter.com/"
//             />
//           </div>
          
//           <div className="form-group">
//             <label>LinkedIn Link</label>
//             <input 
//               type="url" 
//               name="linkedin" 
//               value={organizer.linkedin} 
//               onChange={handleChange} 
//               placeholder="https://www.linkedin.com/"
//             />
//           </div>
          
//           <hr />
          
//           <div className="form-group image-upload">
//             <label>Organizer Image</label>
//             <input 
//               type="file" 
//               accept="image/*" 
//               onChange={handleImageChange} 
//             />
//             <p>Upload Image</p>
//             <p className="dimension-note">Recommended dimension is 1:1</p>
//             {organizer.image && (
//               <div className="image-preview">
//                 <img src={organizer.image} alt="Organizer preview" />
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default OrganizerDetails;

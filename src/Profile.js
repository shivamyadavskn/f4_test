import React, { useEffect, useState } from 'react';

const Profile = ({ history }) => {
  const userId = localStorage.getItem('userId');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details using the provided userId
    // Save user details to state
  }, [userId]);

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {/* Display user information */}
    </div>
  );
};

export default Profile;

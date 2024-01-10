import React from 'react'
import User from './user'

const PROFILE_DATA = [
    {
        skill:"web developer",
        address:"indore",
        price:"100",
    },
    {
      skill:"java developer",
      address:"bhopal",
      price:"200",
  },
];
function Users() {
  return (
    <section className="py-0 py-xl-5">
      <div className="container">
        <div className="row g-4">
          {PROFILE_DATA.map((data, index) => {
            return (
              <User
                skill="cpp"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Users;
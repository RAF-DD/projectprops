import React from 'react'
import PropTypes from 'prop-types';


const Profile = ({n,a,e,p,children}) => {
    return (
        <div>
          <h1>{children}</h1>  <h2> My name is : {n}</h2> 
           <h2> My age is : {a} years</h2> <h2> I studied : {e}</h2>
           <h2> My profession : {p}</h2> <br/>
        </div>
    )
}

Profile.propTypes={
  n: PropTypes.string,
  a: PropTypes.number,
  e: PropTypes.string,
  p: PropTypes.string,
}
Profile.defaultProps={n:"Raouf", a:"32", e:"informatique", p:"developer"}
export default Profile

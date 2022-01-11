import React from 'react';
import Loader from 'react-loader-spinner'
 

export default class Loading extends React.Component {
  //other logic
    render() {
     return(
      <Loader
         type="Puff"
         color="#FF914D"
         height={100}
         width={100}
         timeout={3000} //3 secs

      />
     );
    }
 }
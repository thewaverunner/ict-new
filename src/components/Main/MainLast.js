import React from 'react';
import Button from '../Ui/Button';
import RightArrowIcon from '../Icons/RightArrowIcon';

const MainLast = () => (
  <section className="main__last container">
    <p>
      The network model bussines model has been around of decades.
      <br />
      And it works.
    </p>
    <Button icon={<RightArrowIcon />} type="black">Learn more</Button>
  </section>
);


export default MainLast;

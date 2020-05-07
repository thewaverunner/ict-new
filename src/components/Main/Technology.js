import React from 'react';
import Button from '../Ui/Button';
import RightArrowIcon from '../Icons/RightArrowIcon';
import Subtitle from '../Ui/Subtitle';
import Title from '../Ui/Title';

const Technology = () => (
  <section className="main__technology">
    <div className="container">
      <Title>Impact Technology</Title>
      <Subtitle>
        Impact Technology refers to the intentional use
        of frontier technology to
        benefit and promote new sources of
        employment and accelerate economic diversification
        – while simultaneously addressing major social issues.
      </Subtitle>
      <Button icon={<RightArrowIcon />}>Learn more</Button>
    </div>
  </section>
);

export default Technology;

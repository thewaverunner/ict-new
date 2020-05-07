import React from 'react';
import Title from '../Ui/Title';
import Subtitle from '../Ui/Subtitle';
import Button from '../Ui/Button';
import RightArrowIcon from '../Icons/RightArrowIcon';

const HeroScreen = () => (
  <section className="main__hero">
    <div className="container">
      <Title>Striving for digital equality</Title>
      <Subtitle>
        We want to create the world’s largest
        functioning sales force, disrupting
        the traditional value chain and distribution
        of apps, software and services.
      </Subtitle>
      <Button icon={<RightArrowIcon />}>Learn more</Button>
    </div>
  </section>
);

export default HeroScreen;

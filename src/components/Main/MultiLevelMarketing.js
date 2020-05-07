import React from 'react';
import Title from '../Ui/Title';
import Subtitle from '../Ui/Subtitle';
import Button from '../Ui/Button';
import RightArrowIcon from '../Icons/RightArrowIcon';

const MultiLevelMarketing = () => (
  <section className="main__mlm">
    <div className="container">
      <Title type="black">Multi-level marketing, reinvented</Title>
      <Subtitle type="black">
        Impact Crowd Technology will, as the first digital
        {' '}
        <nobr>multi-level </nobr>
        marketing company, address the challenge of
        {' '}
        <nobr>long-term sustainability.</nobr>
      </Subtitle>
      <Button
        icon={<RightArrowIcon />}
        type="black"
      >
        Learn more
      </Button>
    </div>
  </section>
);

export default MultiLevelMarketing;

import React from 'react';
import { Link } from 'gatsby';
import Title from '../Ui/Title';
import RightArrowIcon from '../Icons/RightArrowIcon';

const Items = () => {
  const items = [
    {
      backgroundImage: 'item1.png',
      imageText: 'Innovation',
      title: 'Continuous innovation',
      description: 'We’re proud of our unstinting commitment to'
        + ' generating innovative digital products designed to provide'
        + ' you with new revenue streams. We are equally dedicated '
        + 'to seeking out and developing innovations that support'
        + ' our network of salespeople.',
      link: '#',
    },
    {
      backgroundImage: 'item2.png',
      imageText: 'Digital',
      title: 'Purely digital',
      description: 'We intend to remain purely digital in our product offering.'
        + 'We want to deliver impact technology – via our online projects that will '
        + 'disrupt and challenge traditional digital industries and software '
        + 'distribution channels.',
      link: '#',
    },
    {
      backgroundImage: 'item3.png',
      imageText: 'Global',
      title: 'Global reach',
      description: 'Our priority is to build global frontrunners in multiple industries,'
        + ' disrupting monopolised markets by offering a unique and robust value proposition '
        + 'on a global scale. The aim of Impact Crowd Technology is to establish online'
        + ' global leaders.',
      link: '#',
    },
  ];
  return (
    <section className="main__items">

      <div className="container">

        {items.map((item, index) => (
          <div className="main__items__card">
            <div
              className="image"
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            >
              <Title type={index === 1 ? 'black' : ''}>{item.imageText}</Title>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={item.link}>
              Learn more
              <RightArrowIcon />
            </Link>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Items;

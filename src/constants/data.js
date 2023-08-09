import images from './images';

const data = {
  wines: [
    {
      title: 'Chateau Soussans, 2016',
      price: '$190',
      tags: 'FR | Bottle',
    },
    {
      title: 'Stella Bella Suckfizzle Cabernet Sauvignon, 2016',
      price: '$190',
      tags: 'AU | Bottle',
    },
    {
      title: 'Raats Family Wines Cabernet Franc, 2017',
      price: '$158',
      tags: 'FR | 750 ml',
    },
    {
      title: 'Harvey\'s Sussex Best',
      price: '$129',
      tags: 'EN | 750 ml',
    },
    {
      title: 'Irish Guinness',
      price: '$134',
      tags: 'IE | 750 ml',
    },
  ],

  cocktails: [
    {
      title: 'Aperol Spritz',
      price: '$12',
      tags: 'Aperol | Villa Marchesi Prosecco | Soda | 30 ml',
    },
    {
      title: "Dark 'N' Stormy",
      price: '$16',
      tags: 'Dark rum | Ginger beer | Slice of lime',
    },
    {
      title: 'Daiquiri',
      price: '$12',
      tags: 'Rum | Citrus Juice | Sugar',
    },
    {
      title: 'Old Fashioned',
      price: '$16',
      tags: 'Bourbon | Brown Sugar | Angostura Bitters',
    },
    {
      title: 'Negroni',
      price: '$14',
      tags: 'Gin | Sweet Vermouth | Campari | Orange Garnish',
    },
  ],

  awards: [
    {
      imgUrl: images.award02,
      title: 'Bib Gourmond',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: images.award01,
      title: 'Rising Star',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: images.award05,
      title: 'AA Hospitality',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: images.award03,
      title: 'Outstanding Chef',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
  ],
};

export default data;

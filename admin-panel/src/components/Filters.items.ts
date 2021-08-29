interface ObjectKeys {
  [key: string]: string;
}

interface Categories extends ObjectKeys {
  name: string;
  first: string;
  second: string;
}

interface Brands extends ObjectKeys {
  first: string;
  second: string;
}

export const categories: Categories[] = [
  {
    name: "CellPhones",
    first: "Cell Phones",
    second: "1920",
  },
  {
    name: "Computers",
    first: "Computers & Tablets",
    second: "1820",
  },
  {
    name: "CPAcessories",
    first: "Cell Phone Accessories",
    second: "462",
  },
  {
    name: "Appliances",
    first: "Appliances",
    second: "6556",
  },
  {
    name: "Audio",
    first: "Audio",
    second: "120",
  },
  {
    name: "iAccessories",
    first: "iPhone Accessories",
    second: "353",
  },
  {
    name: "Cameras",
    first: "Cameras & Camcorders",
    second: "45",
  },
  {
    name: "iCases",
    first: "iPhone Cases & Clips",
    second: "456",
  },
  {
    name: "TV",
    first: "TV & Home Theater",
    second: "55",
  },
  {
    name: "Kitchen",
    first: "Small Kitchen Appliances",
    second: "10",
  },
];

export const brands: Brands[] = [
  {
    first: "Insigni",
    second: "220",
  },
  {
    first: "Samsung",
    second: "120",
  },
  {
    first: "Apple",
    second: "320",
  },
  {
    first: "HP",
    second: "32",
  },
  {
    first: "Sony",
    second: "520",
  },
  {
    first: "Metra",
    second: "55",
  },
  {
    first: "Dyne",
    second: "120",
  },
  {
    first: "LG",
    second: "98",
  },
  {
    first: "Canon",
    second: "99",
  },
  {
    first: "Speck",
    second: "575",
  },
];

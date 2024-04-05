interface ImagePaths {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface OtherProduct {
  slug: string;
  name: string;
  image: ImagePaths;
}

export interface DataInterface {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  featuresOne: string;
  featuresTwo: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: ImagePaths;
    second: ImagePaths;
    third: ImagePaths;
  };
  others: OtherProduct[];
}

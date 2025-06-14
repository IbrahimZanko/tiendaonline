export type ProductType = {
    id: number;
    documentId: string;
    createdAt: string;
    attributes: {
      productName: string;
      slug: string;
      description: string;
      active: boolean;
      isFeatured: boolean;
      material: string;
      origin: string;
      price: number;
      images: {
        data: {
          id: number;
          attributes: {
            url: string;
          };
        }[];
      };
      category: {
        data: {
          attributes: {
            slug: string;
            categoryName: string;
          };
        };
      };
    };
  };
interface Fields {
  title: string,
  slug: string,
  thumbnail: {
    fields: {
      file: {
        url: string
      }
    }
  },
  featuredImage: {
    fields: {
      file: {
        url: string
      }
    }
  },
  specifications: string[],
  price: number,
  description: {
    content: {
      content: {
        value: string
      }[]
    }[]
  }
  sys: {
    id: string
  }
}


interface Product {
    fields: {
      title: string,
      slug: string,
      thumbnail: {
        fields: {
          file: {
            url: string
          }
        }
      },
      featuredImage: {
        fields: {
          file: {
            url: string
          }
        }
      },
      specifications: string[],
      price: number,
      description: {
        content: {
          content: {
            value: string
          }[]
        }[]
      }
    },
    sys: {
      id: string
    }
  }
  
 
  export type { 
    Fields,
    Product 
 };
 
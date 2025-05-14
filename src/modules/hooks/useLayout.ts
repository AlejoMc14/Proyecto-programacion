export function useLayout(pathname: string) {
    const routes = [
      {path: "/",
       name: "Home",

      },
      {
        path: "/user",
        name: "User",
      },
      {
        path: "/business",
        name: "Business",
      },
      {
        path: "/delivery",
        name: "Delivery",
      },
      {
        path: "/order",
        name: "Order",
      },
 
      {
        path: "/product",
        name: "Product",
      },
 
    ];
  
    const title = pathname === "/user"
          ? "User"
          : pathname === "/business"
          ? "Business"
          : pathname === "/delivery"
          ? "Delivery"
          : pathname === "/order"
          ? "Order"
          : pathname === "/product"
          ? "Product"
          : pathname === ""
          return{
             title, routes
          }
  }
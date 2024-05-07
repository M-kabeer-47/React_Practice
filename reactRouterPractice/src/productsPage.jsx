import { NavLink, Outlet } from "react-router-dom";

export default function ProductsPage() {
  return (
    <>
      <div className="header">Products Page</div>
      <div className="section">
        <div className="title">
          <h2>Categories: </h2>
        </div>

        <div className="services">
          <NavLink
            className={"navlink"}
            to={`/products/${"electronic"}`}
            style={({ isActive }) => {
              return isActive
                ? {
                    color: "red",
                  }
                : {
                    color: "inherit",
                  };
            }}
          >
            Electronic
          </NavLink>
          <NavLink
            className={"navlink"}
            to={`/products/${"food"}`}
            style={({ isActive }) => {
              return isActive
                ? {
                    color: "red",
                  }
                : {
                    color: "inherit",
                  };
            }}
          >
            Food
          </NavLink>
          <NavLink
            className={"navlink"}
            to={`/products/${"kitchen"}`}
            style={({ isActive }) => {
              return isActive
                ? {
                    color: "red",
                  }
                : {
                    color: "inherit",
                  };
            }}
          >
            Kitchen
          </NavLink>
        </div>
        <div className="Products"></div>
      </div>
      <Outlet />
      
   
    </>
  );
}

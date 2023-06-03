import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

const HostVanDetails = () => {
  const [van, setVan] = useState([]);
  const vanDetail = useParams();
  const currentlyActive = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  useEffect(() => {
    fetch(`/api/host/vans/${vanDetail.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [vanDetail.id]);
  if (!van) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} alt={van.name} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? currentlyActive : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? currentlyActive : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? currentlyActive : null)}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={van} />
      </div>
    </section>
  );
};

export default HostVanDetails;

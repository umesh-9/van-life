import React from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

export function loader() {
  return getVans();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vans = useLoaderData();

  const typeFilter = searchParams.get("type");
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{ search: searchParams.toString(), type: typeFilter }}
      >
        <img src={van.imageUrl} alt="" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));
  return (
    <div className="van-list-container">
      <div className="van-list-filter-buttons">
        {/* <Link to="?type=simple" className="van-type simple">
          Simple
        </Link>
        <Link to="?type=luxury" className="van-type luxury">
          Luxury
        </Link>
        <Link to="?type=rugged" className="van-type rugged">
          Rugged
        </Link>
        <Link to="." className="van-type clear-filters">
          Clear filter
        </Link> */}
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            className="van-type clear-filters"
            onClick={() => setSearchParams({})}
          >
            Clear-filters
          </button>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

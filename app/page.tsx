"use client";

import React, { useState, useEffect } from "react";

import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

import data from "../data/data.json";

// import axios from "axios";
import { CountryCard } from "@/components/CountryCard";
import { CountryDetails } from "@/components/CountryDetails";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const Home = () => {
  const [countryID, setCountryID] = useState(0);
  const [nameFilter, setNameFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState(-1);

  const handleCardClick = (id: any) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i]?.alpha3Code === id) {
        setCountryID(i + 1);

        return;
      }
    }
  };

  return (
    <>
      {countryID ? (
        <div className="w-full h-full flex flex-col gap-20">
          <Button
            className="w-16 bg-primary shadow-md"
            onClick={() => setCountryID(0)}
          >
            Back
          </Button>
          <CountryDetails
            info={data[countryID - 1]}
            handleBorderClick={handleCardClick}
          />
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-20">
          <div className="w-full flex lg:flex-row sm:flex-col justify-between items-center gap-16">
            <div className="lg:w-[500px] sm:w-full">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  required
                  className="shadow-md block w-full border-none p-4 ps-10 text-sm text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  id="default-search"
                  onChange={(e) => setNameFilter(e.target.value)}
                  placeholder="Search for a country"
                  type="search"
                />
              </div>
            </div>
            <div className="flex w-[300px] flex-wrap md:flex-nowrap gap-4">
              <Select
                className="max-w-xs"
                label="Filter by Region"
                onChange={(e) => setRegionFilter(Number(e.target.value))}
              >
                {regions.map((region, index) => (
                  <SelectItem key={index}>{region}</SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-10 justify-between lg:flex-row sm:flex-col items-center">
            {data.map((val, ind) =>
              val.name.toLowerCase().includes(nameFilter) &&
              (regionFilter === -1 ||
                regions[regionFilter].includes(val.region) ||
                regions[regionFilter] === "All") ? (
                <CountryCard
                  key={ind}
                  handleClick={handleCardClick}
                  index={ind}
                  info={val}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

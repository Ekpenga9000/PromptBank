import React from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";

const ExplorePrompt = () => {
  return (
    <section className="flex h-screen p-2">
      <div className="pr-4">
        <h2 className="mb-4 font-semibold">Filters</h2>
        <ul className="pr-4 border-r pb-4 h-full">
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">ChatGPT</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">Dall.E</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">Resume</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">SEO</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">Product</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">Start up</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">A.I</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">Writing</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">Advertising</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">Learning</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">Business</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">Software Development</label>
          </li>
          <li>
            <input type="checkbox" value="" />
            <label htmlFor="">DataScience</label>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex justify-center">
          <SearchBar />
        </div>
        <CardList />
      </div>
    </section>
  );
};

export default ExplorePrompt;

import CardList from "@/components/CardList";
import ExplorePrompt from "@/components/ExplorePrompt";
import React from "react";

const MarketPage = () => {
  return (
    <main className="">
      <section>
        <h1 className="head_text text-center">
          <span className="blue_gradient">Explore</span>
        </h1>
        <div className="text-center flex justify-center">
          <p className="my-4 desc">
            Explore a variety of prompts for writing, creativity, and business
            concepts. Select a prompt, copy it, and start creating!
          </p>
        </div>
      </section>
     <ExplorePrompt />
    </main>
  );
};

export default MarketPage;

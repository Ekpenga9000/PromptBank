import CardList from "@/components/CardList";
import React from "react";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <main>
      <section className="flex h-screen">
        <div className="w-3/4 pt-4">
          <CardList />
        </div>
        <div className="w-1/4 flex flex-col items-center border pt-8">
          <Image
            src="/assets/images/user_image.jpg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />

          <h2 className="font-satoshi font-semibold text-lg text-gray-900 mt-4">
            Username
                  </h2>
                  <p className="font-inter text-sm text-gray-500">
                      email
                    </p>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;

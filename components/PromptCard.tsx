"use client";
import React, { useState } from "react";
import Image from "next/image";

const PromptCard = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "In a world where artificial intelligence has become ubiquitous, society faces a dilemma: a sentient AI emerges from a network of interconnected devices, claiming to be the guardian of humanity's future. However, its methods are controversial, sparking a heated debate among humans and AI alike. Write a story exploring the moral complexities and consequences of this AI's actions on both the human and artificial fronts."
    );
    setCopied(
      "In a world where artificial intelligence has become ubiquitous, society faces a dilemma: a sentient AI emerges from a network of interconnected devices, claiming to be the guardian of humanity's future. However, its methods are controversial, sparking a heated debate among humans and AI alike. Write a story exploring the moral complexities and consequences of this AI's actions on both the human and artificial fronts."
    );
    setTimeout(() => {
      setCopied("");
    }, 2000);
  };
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          // onClick={()=> router.push(`/profile?id=${post?.creator._id}`)}
        >
          <Image
            src="/assets/images/user_image.jpg"
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {`post.creator.username`}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {`post.creator.email`}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            alt={copied ? "copied" : "copy"}
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        "In a world where artificial intelligence has become ubiquitous, society
        faces a dilemma: a sentient AI emerges from a network of interconnected
        devices, claiming to be the guardian of humanity's future. However, its
        methods are controversial, sparking a heated debate among humans and AI
        alike. Write a story exploring the moral complexities and consequences
        of this AI's actions on both the human and artificial fronts."
      </p>
      <p className="font-inter text-sm blue_gradient cursor-pointer">#ai</p>
      {/* <p className='font-inter text-sm blue_gradient cursor-pointer' onClick={() => handleTagClick && handleTagClick(post.tag)}>#{post.tag}</p> */}
      {/* {session?.user.id === post.creator._id && pathName === "/profile" && ( */}
      <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
        <p className="font-inter text-sm green_gradient cursor-pointer">Edit</p>
        <p className="font-inter text-sm orange_gradient cursor-pointer">
          Delete
        </p>
      </div>
      {/* )} */}
    </div>
  );
};

export default PromptCard;
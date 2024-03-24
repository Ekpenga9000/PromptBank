"use client";
import React, { useState } from "react";
import Image from "next/image";
import userImg from "@/public/assets/images/user_image.jpg";

type PromptCardProps = {
  post: string;
  handleTagClick?: (tag: string) => void;
  pathName: string;
  username: string;
  email: string;
  creatorId: string;
};
const PromptCard = (props: PromptCardProps) => {
  const { post, handleTagClick, pathName, username, email, creatorId } = props;
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(
      post
    );
    setCopied(
      post
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
            src={userImg}
            alt="user_image"
            style={{ width:"3rem", height: "3rem", borderRadius: "50%", objectFit: "cover"}}
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
        {post}
      </p>
      <p className="font-inter text-sm blue_gradient cursor-pointer">#ai</p>
      {/* <p className='font-inter text-sm blue_gradient cursor-pointer' onClick={() => handleTagClick && handleTagClick(post.tag)}>#{post.tag}</p> */}
      {/* {session?.user.id === post.creator._id && pathName === "/profile" && ( */}
      <div className="mt-5 flex justify-between items-center gap-4 border-t border-gray-100 pt-3">
        <p className="font-inter text-sm green_gradient cursor-pointer flex items-center gap-1"><i className='bx bx-pencil' ></i> Edit</p>
        <p className="font-inter text-sm orange_gradient cursor-pointer flex items-center gap-1">
        <i className='bx bx-x' ></i> Delete
        </p>
      </div>
      {/* )} */}
    </div>
  );
};

export default PromptCard;
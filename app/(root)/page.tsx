import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import React from "react";

const page = () => {
  return (
    <>
      <BookOverview />
      <BookList />
    </>
  );
};

export default page;

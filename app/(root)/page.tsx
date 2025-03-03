import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import React from "react";
import { sampleBooks } from "@/constants";

const page = () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default page;

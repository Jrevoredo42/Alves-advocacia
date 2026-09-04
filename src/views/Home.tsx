"use client";

import { Hero } from "../components/Hero";
import { Office } from "../components/Office";
import { Lawyers } from "../components/Lawyers";
import { Practice } from "../components/Practice";
import { ContactForm } from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Office />
      <Lawyers />
      <Practice />
      <ContactForm />
    </>
  );
}


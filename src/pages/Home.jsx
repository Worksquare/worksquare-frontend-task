import Footer from "../components/layout/Footer";
import HeroSection from "./components/HeroSection";
import NewsletterSignup from "./components/NewsLetterSignup";
import PropertyGrid from "./components/PropertyGrid";
import PropertySearch from "./components/PropertySearch";
import SegmentedControl from "./components/SegmentedControl";
import listing from "../data/listing.json";
import { useState } from "react";

export default function Home() {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
  });

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredListings = listing.filter((property) => {
    const matchesType = filters.type
      ? property.status.includes(filters.type)
      : true;
    const matchesLocation = filters.location
      ? property.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    return matchesType && matchesLocation;
  });

  return (
    <div>
      <HeroSection />
      <SegmentedControl />
      <PropertySearch onSearch={handleSearch} />
      <PropertyGrid listing={filteredListings} />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

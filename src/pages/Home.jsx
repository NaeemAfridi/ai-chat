import CategoriesSection from "../components/CategoriesSection";
import Hero from "../components/Hero";
import NewsletterSection from "../components/NewsletterSection";
import ProductsSection from "../components/ProductSection";

const Home = () => {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <CategoriesSection />
      <ProductsSection />
      <NewsletterSection />
    </main>
  );
};

export default Home;

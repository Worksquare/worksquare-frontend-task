

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10  rounded-t-4xl mt-8">
      <div className="text-center mb-10 gilda-display-regular">
        <h1 className="text-5xl font-light">
          Dream<span className="font-semibold">Dwell</span>
          <span className="italic block text-3xl mt-2 pl-24">Estates</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm max-w-5xl mx-auto px-4">
        <div className="space-y-2">
          <p>Home</p>
          <p>Listing</p>
          <p>Agent</p>
        </div>
        <div className="space-y-2">
          <p>About</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="space-y-2">
          <p>Whitepaper</p>
          <p>Contact</p>
          <p>FAQs</p>
        </div>
        <div className="space-y-2">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Linkedin</p>
        </div>
      </div>
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-xs">
        © Copyright 2023 DreamDwell Estates - All right reserved.
      </div>
    </footer>
  );
}

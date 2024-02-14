export const Footer = () => {
  return (
    <footer className=" font-kanit bg-primary p-4 md:p-11 mt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-44 mb-8 md:mb-32 ">
          <h1 className="text-2xl md:text-3xl font-['Protest_Strike'] font-normal text-white">
            🏀 BREIZHSPORT
          </h1>
          <div className="flex flex-col gap-2 justify-between text-white">
            <a href="/">Home</a>
            <a href="/cart">Cart</a>
            <a href="/about">About</a>
            <a href="/term">Terms & Conditions</a>
            <a href="/policy">Shipping and Return Policy</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
        <hr className="border border-gray-300 h-0 my-4" />
        <span className="flex flex-col md:flex-row justify-between text-white">
          © 2024 InitialDev. All Rights Reserved.
          <a href="https://github.com/Initial-Dev">
            Made with ❤️ by InitialDev
          </a>
        </span>
      </div>
    </footer>
  );
};

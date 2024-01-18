export const Footer = () => {
  return (
    <footer className="font-kanit  bg-primary p-11">
      <div className="container">
        <div className="flex gap-44 mb-32 font-bold">
          <h1 className="text-3xl  text-white">BreizhSPORT</h1>
          <div className="flex flex-col gap-2 justify-between text-white">
            <div>Home</div>
            <div>About</div>
            <div>Terms & Conditions</div>
            <div>Shiping @ Return Policy</div>
            <div>FAQ</div>
          </div>
        </div>
        <hr className="border border-gray-300 h-0 my-4" />
        <span className="flex justify-between  text-white">
          © 2024-2025 Inc. All Rights Reserved.
          <a href="https://github.com/Initial-Dev">Made by InitialDEV</a>
        </span>
      </div>
    </footer>
  );
};

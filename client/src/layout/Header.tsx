import { LinkButton, Nav, SearchBar } from "@/components";

export const Header = () => {
  return (
    <header
      className={"font-kanit w-full p-5 flex justify-between items-center"}
    >
      <h1 className={"text-3xl font-bold mr-5"}>BreizhSPORT</h1>
      <SearchBar />
      <Nav />
      <div>
        <LinkButton />
        <LinkButton />
        <LinkButton />
      </div>
    </header>
  );
};

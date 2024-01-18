import { LinkButton, Nav, SearchBar } from "@/components";

export const Header = () => {
  return (
    <header>
      <h1 className={"bg-slate-400"}>BreizhSPORT</h1>
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

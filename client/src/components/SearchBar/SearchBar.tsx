export const SearchBar = () => {
  return (
    <div className={"w-1/3 mx-5 h-full"}>
      <input
        className={
          "bg-slate-100 w-full h-full rounded-full px-5 py-1 placeholder:text-xs"
        }
        type="text"
        placeholder="Rechercher un produit.."
      />
    </div>
  );
};

type LinkButtonProps = {
  icon: JSX.Element;
  label?: string;
  link: string;
};

export const LinkButton = ({ icon, label, link }: LinkButtonProps) => {
  return (
    <button
      className={"flex flex-row gap-1.5"}
      onClick={() => (window.location.href = link)}
    >
      {icon}
      {label && <span className={"text-xs flex items-center"}>{label}</span>}
    </button>
  );
};

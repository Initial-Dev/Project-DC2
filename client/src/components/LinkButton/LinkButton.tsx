type LinkButtonProps = {
  icon: JSX.Element;
  label?: string;
  link: string;
};

export const LinkButton = ({
  icon,
  label,
  link,
  ...props
}: LinkButtonProps) => {
  return (
    <>
      <button
        className={"flex flex-row gap-1.5 relative"}
        onClick={() => (window.location.href = link)}
        {...props}
      >
        {icon}
        {label && <span className={"text-xs flex items-center"}>{label}</span>}
      </button>
    </>
  );
};

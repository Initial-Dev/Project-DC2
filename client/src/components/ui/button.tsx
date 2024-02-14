// components/ui/button.js

import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants, ButtonVariantsProps } from "./buttonVariants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantsProps {
  asChild?: boolean;
  link?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, link, size, asChild = false, onClick, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const handleClick = () => {
      if (link) {
        window.location.href = link;
      } else if (onClick) {
        onClick();
      }
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onClick={handleClick}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };

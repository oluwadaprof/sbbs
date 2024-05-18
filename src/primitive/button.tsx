"use client";

import * as React from "react";
import { RecipeVariantProps, cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";
import { JsxStyleProps } from "../../styled-system/types";

export const buttonStyle = cva({
  base: {
    boxSizing: "border-box",
    cursor: "pointer",
    whiteSpace: "nowrap",
    w: "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: "1",
    userSelect: "none",
    transition: "all 0.2s ease",
  },
  variants: {
    look: {
      form: {
        w: "100%",
        border: "subtle",
        bg: "transparent",
        whiteSpace: "nowrap",
        justifyContent: "space-between",
      },
      ghost: {
        bg: "transparent",
      },
      transparent: {
        bg: "transparent",
        color: "sAppText",

        _hover: {
          bg: "sMutedBackground",
        },
      },
      success: {
        bg: "yellow.700",
        color: "white",

        _hover: {
          bg: "yellow.500",
        },
      },

      gray: {
        bg: "sMutedBackground",

        _hover: {
          _disabled: {
            bg: "sMutedBackground",
          },
        },
      },
    },
    size: {
      md: {
        px: "1rem",
        h: "3.8rem",
      },
      sm: {
        px: "1rem",
        h: "3.4rem",
        rounded: "lg",
      },
      xs: {
        px: "2rem",
        h: "2.3rem"
      },
      auto: {},
    },
    use: {
      link: {
        display: "inline-flex",
      },
      button: {
        display: "flex",
      },
    },
  },
  defaultVariants: {
    look: "success",
    size: "sm",
    use: "button",
  },
});

const StyledButton = styled("button", buttonStyle);

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants &
  JsxStyleProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,

      ...props
    },
    ref
  ) {
    return (
      <StyledButton ref={ref} type="button" {...props}>
        {children}
      </StyledButton>
    );
  }
);

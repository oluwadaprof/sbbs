import * as React from "react";

import { RecipeVariantProps, cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";
import { JsxStyleProps } from "../../styled-system/types";

export const inputStyles = cva({
  base: {
    bg: "transparent",
    w: "full",
    outline: "none",

    _disabled: {
      cursor: "not-allowed",
      pointerEvents: "none",
      opacity: "0.7",
    },

    _placeholder: {
      color: "sFormPlaceholder",
    },

    // Remove arrows from number input
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      m: "0",
    },
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      m: "0",
    },
    "&[type=number]": {
      appearance: "textfield",
    },
  },
  variants: {
    look: {
      form: {
        border: "yellow.700",

        _focus: {
          border: "focused",
        },
      },
      subtle: {
        border: "subtle",

        _focus: {
          border: "focused",
        },
      },
      editable: {
        border: "none",

        _hover: {
          bg: "sMutedBackground",
        },

        _focus: {
          border: "focused",
        },
      },
      ghost: {
        h: "auto",
      },
    },
    use: {
      md: {
        fontSize: "2",
        px: "3.5",
        h: "3.8rem",
        rounded: "xl",
      },
      sm: {
        fontSize: "2",
        px: "2",
        h: "3.4rem",
        rounded: "lg",
      },
      xs: {
        fontSize: "1",
        px: "2",
        h: "2.8rem",
        rounded: "lg",
      },
    },
  },
  defaultVariants: {
    look: "subtle",
    use: "md",
  },
});

const StyledInput = styled("input", inputStyles);

export type InputVariants = RecipeVariantProps<typeof inputStyles>;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  InputVariants &
  JsxStyleProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { type, ...props },
  ref
) {
  return <StyledInput type={type} ref={ref} {...props} />;
});

export { Input };

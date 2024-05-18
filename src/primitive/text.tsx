import React from "react"
import { JsxStyleProps } from "../../styled-system/types"
import { styled } from "../../styled-system/jsx"
import { Slot } from '@radix-ui/react-slot';

type Props<T> = {
    asChild?: boolean
    children?: React.ReactNode
  } & React.HTMLAttributes<T> &
    JsxStyleProps
  
  export type TextProps = Props<HTMLParagraphElement>
  export type SpanProps = Props<HTMLSpanElement>
  export type HeadingProps = Props<HTMLHeadingElement> & {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }
  
  export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
    { asChild, as, ...props },
    ref
  ) {
    const Comp = asChild ? Slot : styled[as]
    return <Comp ref={ref} {...props} />
  })
  
  export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(function Paragraph(
    { asChild, ...props },
    ref
  ) {
    const Comp = asChild ? Slot : styled.p
    return <Comp ref={ref} {...props} />
  })
  
  export const Span = React.forwardRef<HTMLSpanElement, SpanProps>(function Span(
    { asChild, ...props },
    ref
  ) {
    const Comp = asChild ? Slot : styled.span
    return <Comp ref={ref} {...props} />
  })
  
  export const Kbd = React.forwardRef<HTMLSpanElement, SpanProps>(function Kbd(
    { asChild, ...props },
    ref
  ) {
    const Comp = asChild ? Slot : styled.kbd
    return <Comp ref={ref} {...props} />
  })
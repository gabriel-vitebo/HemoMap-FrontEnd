import { tv } from "tailwind-variants";

export const schema = tv({
  slots: {
    base: 'flex flex-col gap-2',
    content: 'flex flex-col gap-4',
    text: 'text-balance text-base'
  }
})
import { tv } from "tailwind-variants";

export const schema = tv({
  slots: {
    base: 'bg-sky-900 p-3 flex justify-center items-center gap-4 relative',
    title: 'text-white text-center font-bold text-2xl',
    svgContent: 'absolute right-0 mr-4',
    svg: 'text-white',
    menu: 'flex gap-4 items-center',
  }
})
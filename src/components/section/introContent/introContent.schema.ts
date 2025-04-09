import { tv } from "tailwind-variants";

export const schema = tv({
  slots: {
    base: 'flex flex-col w-full',
    banner: 'relative w-full h-96 overflow-hidden',
    bannerImage: 'size-full object-cover',
    bannerContent: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]',
    bannerContentTitle: 'text-4xl mb-4',
    button: 'w-full p-4 bg-white border-none rounded-[8px] text-xl font-medium text-neutral-950'
  },
})
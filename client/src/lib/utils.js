import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

// If a lot of files, only need to use list of files.
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}
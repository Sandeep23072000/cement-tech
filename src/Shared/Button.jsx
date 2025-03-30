import { cn } from "../util/cn";

/**
 * @param {{children: React.ReactNode} & import("react").ButtonHTMLAttributes}
 */
export default function Button({ children, ...props }) {
    return <button
        {...props}
        className={cn("text-theme-text bg-theme-foreground-500 outline-theme-foreground-600 outline-offset-2 hover:bg-theme-foreground-600 duration-150 rounded-sm px-3 py-2", props.className)} >
        {children}
    </button>
}

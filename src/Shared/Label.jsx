import { cn } from "../util/cn"

/**
 * @param {{children: React.ReactNode} & import("react").LabelHTMLAttributes}
 */
const Label = ({ children, ...props }) => {
    return (
        <label {...props}
            className={cn("block", props.className)}
        >
            {children}
        </label>
    )
}

export default Label
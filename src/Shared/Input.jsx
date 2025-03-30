import { cn } from "../util/cn"

/**
 * @param {import("react").InputHTMLAttributes} props
 */
const Input = (props) => {
    return (
        <input
            {...props}
            className={cn("p-2 border rounded outline-theme-foreground-500 outline-offset-2", props.className)}
        />
    )
}

export default Input
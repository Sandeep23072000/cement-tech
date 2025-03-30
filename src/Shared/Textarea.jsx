import { cn } from "../util/cn"


/**
 * @param {import("react").TextareaHTMLAttributes} props
 */
const Textarea = (props) => {
    return (
        <textarea
            {...props}
            className={cn("w-full p-2 outline-theme-foreground-500 border outline-offset-2", props.className)}
        />
    )
}

export default Textarea
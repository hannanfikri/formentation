import { ModeToggle } from "../mode-toggle"

export const Header = () => {
    return (
        <header className="w-full flex justify-end p-4">
            <ModeToggle />
        </header>
    )
}
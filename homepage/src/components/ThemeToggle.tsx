import { useStore } from "./HomepageStore"

export default function ThemeToggle() {
    const theme = useStore((state) => state.siteUI);
    const setTheme = useStore((state) => state.swapUI);

    return (
        <>
            <button className="absolute top-3 right-3 w-10 h-5 cursor-pointer" onClick={setTheme} value={theme}>{theme}</button>
        </>
    )
}

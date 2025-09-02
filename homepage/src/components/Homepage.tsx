import HomepageBio from './HomepageBio.tsx'
import HomepageNavCol from './HomepageNavCol.tsx'
import { useStore } from './HomepageStore.ts'
import ThemeToggle from './ThemeToggle.tsx'

export default function Homepage() {
    const siteUI = useStore((state) => state.siteUI)

    return (
        <>
            <div className={`${siteUI} flex flex-row justify-between w-[96%] h-[50%] m-[4%] dark:bg-black`}>
                <HomepageBio />
                <HomepageNavCol />
                <!-- <ThemeToggle /> -->
            </div >
        </>
    )
}

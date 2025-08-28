import HomepageBio from './HomepageBio.tsx'
import HomepageNavCol from './HomepageNavCol.tsx'

export default function Homepage() {

    return (
        <>
            <div className='flex flex-row justify-between w-[96%] h-[50%] m-[4%]'>
                <HomepageBio />
                <HomepageNavCol />
            </div>
        </>
    )
}

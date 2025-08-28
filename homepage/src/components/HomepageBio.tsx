export default function HomepageBio() {
    const welcomeMessage = (
        <div className=''>
            <h1 className='text-6xl mb-3'>
                Welcome!
            </h1>
            <p className='text-3xl'>
                My name is Oliver, and I make stuff online :)
            </p>
        </div>
    )

    const professionalLanguages = ['Python(Django)', 'JavaScript', 'TypeScript', '.net']
    const bioBrief = (
        <div className='flex flex-col text-2xl'>
            <p className='text-3xl mb-2'>
                I work on a full stack ecommerce platform, as well as several applications professionaly.<br />
                Generally the languages I use professionally are:
            </p>
            <ul className='ml-10'>
                {professionalLanguages.map((l, idx) => (<li key={idx}>{l}</li>))}
            </ul>
            <p className='mt-3'>
                All of that code is hosted and run using AWS and Github.
            </p>
        </div>
    )

    return (
        <>
            <div className='flex flex-col justify-between w-[96%] h-[50%] m-[4%]'>
                {welcomeMessage}
                {bioBrief}
            </div>
        </>
    )
}


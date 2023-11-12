import React from 'react'

const MembershipSection = () => {
  return (
    <section className='md:container md:mx-auto'>
        <div className="grid grid-cols-12 gap-1">
            <div className='col-span-8 relative'>
                <img className='z-[-1] w-full h-[300px] rounded-md' src='https://images.unsplash.com/photo-1613392083937-f68bcff3bf10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8' alt="" />
                <div className='absolute  flex flex-col top-1/2  justify-center'>
                    
                    <h2 className='p-0 m-0 text-white  text-xl md:text-3xl lg:text-4xl font-bold' >Membership Program</h2>
                    <p className='text-white text-sm '>Be a vape Pi member and get our special</p>
                    <button className='rounded-full px-8 py-2 backdrop-blur-lg opacity-60  text-white bg-black w-fit'>View</button>
                </div>
            </div>
            <div className='col-span-4 flex'>
                <div className='col-span-2'>
                    <img className='h-[300px] rounded-md' src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="col-span-2 flex flex-col">
                    <div>
                        <img className='h-[150px] rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85ia15jYf8KuQnyAm58ZWGVEo1Jur5Nt_Vg&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className='h-[150px] rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnP0lTSzQD5OOgxPGzuVoawvsSiZza0lHUw&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MembershipSection
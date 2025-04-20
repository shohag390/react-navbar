import React, { use } from 'react';

const PricingOption = ({ fetchData }) => {
    const pricingData = use(fetchData);
    console.log(pricingData);


    return (
        <div className='md:py-[40px] py-[20px] grid md:grid-cols-3 grid-cols-1 gap-[40px] container mx-auto md:px-[80px] px-[20px]'>
            {pricingData?.map((item) => (
                <div style={{
                    borderColor: `${item?.color}`
                }} className='w-full flex flex-col text-center items-center bg-[#ff5733] text-[#fff] md:p-[30px] p-[20px] rounded-2xl border-b-[8px] border-t-[8px] shadow-md' key={item?.id}>
                    <h4 className='font-bold text-[20px] uppercase leading-[30px] pb-[20px]'>{item?.name}</h4>
                    <div className='flex flex-col gap-[8px] pb-[20px]'>
                        <p>{item?.features[0]}</p>
                        <p>{item?.features[1]}</p>
                        <p>{item?.features[2]}</p>
                        <p>{item?.features[3]}</p>
                    </div>
                    <h2 className='text-[22px] font-medium'>{item?.price}</h2>
                    <button className='py-[8px] px-[30px] rounded-md mt-[20px]' style={{
                        background: `${item?.color}`
                    }}>
                        BUY NOW
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PricingOption;
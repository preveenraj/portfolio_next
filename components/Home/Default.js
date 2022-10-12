import React from 'react';
import Image from 'next/image';

const Default = () => {
    return (
        <div>
            <Image
                src="/profile_banner.jpg"
                alt="Picture of the author"
                className="rounded-lg shadow-lg"
                layout="responsive"
                priority={true}
                width={1920}
                height={1080}
            />
        </div>
    )
}

export default Default;

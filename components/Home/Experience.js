import React from 'react';
import Image from 'next/image';

const Experience = () => {
    return (
        <div>
            EXPERIENCE
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

export default Experience;

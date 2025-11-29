import React from 'react'
import { FOOTER_DATA } from '../../constants'

const FooterTagline = () => {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 w-full bg-white z-[-1]
                       h-[200px] sm:h-[205px] md:h-[305px]"
        >
            <div className="w-full opacity-50 px-4 sm:px-6 lg:px-8 h-full flex items-center justify-start">
                <h1 className="text-[12vw] sm:text-[10vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-[#0B1120] to-gray-400 text-left tracking-tight">
                    {FOOTER_DATA.tagline.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}{index < FOOTER_DATA.tagline.split('\n').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </h1>
            </div>
        </div>
    )
}

export default FooterTagline

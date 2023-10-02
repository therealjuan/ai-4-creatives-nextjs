"use client";

import Iframe from 'react-iframe'
import { useEffect, useState } from "react";

const SubmitToolPage = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
          setMousePosition({ x: event.clientX, y: event.clientY });
        };
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);


    return ( 
        <div className="px-8">
            <div className="grid grid-cols-8 gap-12 mb-0">
                <div className="col-span-8 text-xl leading-8 lg:col-span-4">
                    <h1 className="mb-0 font-black tracking-tight pb-4 text-8xl dark:text-white w-full leading-tight" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px` }}>Submit a tool</h1>
                    <p className="text-xl mb-20">Are you ready to dazzle us with your tool-tastic skills? <br></br> Well, put on your tool belt and let's get started!</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>Human curated</h2>
                    <p className="mb-6">Let's make sure your tool passes the Tool-o-meter. This device measures a tool's awesomeness on a scale from "meh" to "mind-blowing." We don't accept anything lower than a "pretty cool". The curation is manual. Within a week, you'll be notified with updates.Remember, safety first! Please, no tools that involve shark tanks or jet engines. We're still cleaning up from last time.</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>Thank you</h2>
                </div>
                <div className='col-span-8 h-full rounded-lg overflow-hidden lg:col-span-4 md:pt-[3rem]'>
                  <Iframe 
                    className="w-full h-full rounded-lg"
                    url="https://form.typeform.com/to/uJ8kjXu8?typeform-embed-id=8702186780968308&amp;typeform-embed=embed-widget&amp;typeform-source=aiforcreativ.es&amp;typeform-medium=snippet&amp;typeform-medium-version=next&amp;embed-opacity=100" title="Submit a tool"></Iframe>
                  
                </div> 
            </div>
        </div>
     );
}
 
export default SubmitToolPage;
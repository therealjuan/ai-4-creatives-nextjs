"use client";

import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const PolicyOfCookiesPage = () => {

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
            <h1 className="mb-8 font-black tracking-tight leading-tight pb-6 text-8xl dark:text-white w-full" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px` }}>Cookie Policy</h1>
            <div className="grid grid-cols-8 mb-0">
                <div className="col-span-5 text-xl leading-8">
                    <p className="text-2xl mb-2">Effective Date: 07-May-2023</p>
                    <p className="text-2xl mb-6">Last Updated: 08-May-2023</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>What are cookies?</h2>
                    <p className="mb-6">This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used, and how to manage the cookie settings.</p>
                    <p className="mb-6">Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>How do we use cookies?</h2>
                    <p className="mb-6">As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.</p>
                    <p className="mb-6">The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>Types of Cookies we use</h2>
                    <h4 className="font-bold text-2xl leading-tight mb-4">Functional</h4>
                    <Table className="mb-8">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Cookie</TableHead>
                                <TableHead className="font-bold">Duration</TableHead>
                                <TableHead className="font-bold">Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>_hjAbsoluteSessionInProgress</TableCell>
                                <TableCell>30 minutes</TableCell>
                                <TableCell>Hotjar sets this cookie to detect a user&apos;s first pageview session, which is a True/False flag set by the cookie.</TableCell>
                            </TableRow>
                            <TableRow className="even:bg-muted">
                                <TableCell>__cf_bm</TableCell>
                                <TableCell>30 minutes</TableCell>
                                <TableCell>Cloudflare set the cookie to support Cloudflare Bot Management. </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <h4 className="font-bold text-2xl leading-tight mb-4">Analytics</h4>
                    <Table className="mb-8">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Cookie</TableHead>
                                <TableHead className="font-bold">Duration</TableHead>
                                <TableHead className="font-bold">Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="even:bg-muted">
                                <TableCell>_hjFirstSeen</TableCell>
                                <TableCell>30 minutes</TableCell>
                                <TableCell>Hotjar sets this cookie to identify a new user&apos;s first session. It stores the true/false value, indicating whether it was the first time Hotjar saw this user.</TableCell>
                            </TableRow>
                            <TableRow className="even:bg-muted">
                                <TableCell>_fbp</TableCell>
                                <TableCell>3 months</TableCell>
                                <TableCell>Facebook sets this cookie to display advertisements when either on Facebook or on a digital platform powered by Facebook advertising after visiting the website.</TableCell>
                            </TableRow>
                            <TableRow className="even:bg-muted">
                                <TableCell>_hjRecordingLastActivity</TableCell>
                                <TableCell>never</TableCell>
                                <TableCell>
                                    Hotjar sets this cookie when a user recording starts and when data is sent through the WebSocket.
                                </TableCell>
                            </TableRow>
                            <TableRow className="even:bg-muted">
                                <TableCell>_hjRecordingEnabled</TableCell>
                                <TableCell>never</TableCell>
                                <TableCell>Hotjar sets this cookie when a Recording starts and is read when the recording module is initialized, to see if the user is already in a recording in a particular session.</TableCell>
                            </TableRow>
                            <TableRow className="even:bg-muted">
                                <TableCell>attribution_user_id</TableCell>
                                <TableCell>1 year</TableCell>
                                <TableCell>This cookie is set by Typeform for usage statistics and is used in context with the website&apos;s pop-up questionnaires and messengering.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <h4 className="font-bold text-2xl leading-tight mb-4 text-black">Manage cookie preferences</h4>
                    <p className="mb-6">You can change your cookie preferences any time by clicking the button below. This will let you revisit the cookie consent banner and change your preferences or withdraw your consent right away.</p>

                    <p className="mb-6">In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. Listed below are the links to the support documents on how to manage and delete cookies from the major web browsers.</p>
                    <p className="mb-6"><a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://support.google.com/accounts/answer/32050" target="_blank">Chrome</a></p>
                    <p className="mb-6"><a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank">Safari</a></p>
                    <p className="mb-6"><a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US" target="_blank">Firefox</a></p>
                    <p className="mb-6"><a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc" target="_blank">Internet Explorer</a></p>
                    <p className="mb-6">If you are using any other web browser, please visit your browser&apos;s official support documents.</p>
                    <p className="mb-6"></p>
                </div>
            </div>
        </div>
     );
}
 
export default PolicyOfCookiesPage;

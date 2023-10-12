"use client";

import { useEffect, useState } from "react";
import {useTranslations} from 'next-intl';
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
    const t = useTranslations('Cookie');

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
            <h1 className="mb-8 font-black tracking-tight leading-tight pb-6 text-hero dark:text-white w-full" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px` }}>{t("headline")}</h1>
            <div className="grid grid-cols-8 mb-0">
                <div className="col-span-5 text-standard leading-8">
                    <p className="text-standard-2x mb-2">{t("lastUpdated-1")}</p>
                    <p className="text-standard-2x mb-6">{t("lastUpdated-2")}</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-1")}</h2>
                    <p className="mb-6 text-standard-2xl">{t("p1")}</p>
                    <p className="mb-6 text-standard-2xl">{t("p2")}</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-2")}</h2>
                    <p className="mb-6 text-standard-2xl">{t("p3")}</p>
                    <p className="mb-6 text-standard-2xl">{t("p4")}</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-3")}</h2>
                    <h4 className="font-bold text-standard-2x leading-tight mb-4">{t("h4-1")}</h4>
                    <Table className="mb-8 text-standard-2xl">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">{t("tableHead-1")}</TableHead>
                                <TableHead className="font-bold">{t("tableHead-2")}</TableHead>
                                <TableHead className="font-bold">{t("tableHead-3")}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>_hjAbsoluteSessionInProgress</TableCell>
                                <TableCell>30 minutes</TableCell>
                                <TableCell>{t("hotjar-1")}</TableCell>
                            </TableRow>
                            <TableRow className="even:bg-muted">
                                <TableCell>__cf_bm</TableCell>
                                <TableCell>{t("30-minutes")}</TableCell>
                                <TableCell>{t("cloudflare-1")}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <h4 className="font-bold text-standard-2x leading-tight mb-4">Analytics</h4>
                    <Table className="mb-8 text-standard-2xl">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">{t("tableHead-1")}</TableHead>
                                <TableHead className="font-bold">{t("tableHead-2")}</TableHead>
                                <TableHead className="font-bold">{t("tableHead-3")}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="even:bg-muted">
                                <TableCell>_hjFirstSeen</TableCell>
                                <TableCell>{t("30-minutes")}</TableCell>
                                <TableCell>{t("hotjar-2")}</TableCell>
                            </TableRow>
                            <TableRow className="even:bg-muted">
                                <TableCell>_fbp</TableCell>
                                <TableCell>{t("3-months")}</TableCell>
                                <TableCell>{t("facebook-1")}</TableCell>
                            </TableRow>
                            <TableRow className="even:bg-muted">
                                <TableCell>_hjRecordingLastActivity</TableCell>
                                <TableCell>{t("never")}</TableCell>
                                <TableCell>{t("hotjar-3")}</TableCell>
                            </TableRow>
                            <TableRow className="even:bg-muted">
                                <TableCell>_hjRecordingEnabled</TableCell>
                                <TableCell>{t("never")}</TableCell>
                                <TableCell>{t("hotjar-4")}</TableCell>
                            </TableRow>
                            <TableRow className="even:bg-muted">
                                <TableCell>attribution_user_id</TableCell>
                                <TableCell>{t("1-year")}</TableCell>
                                <TableCell>{t("typeform-1")}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <h4 className="font-bold text-standard-2x leading-tight mb-4 text-black">{t("h4-2")}</h4>
                    <p className="mb-6 text-standard-2xl">{t("p5")}</p>
                    <p className="mb-6 text-standard-2xl">{t("p6")}</p>
                    <p className="mb-6 text-standard-2xl"><a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://support.google.com/accounts/answer/32050" target="_blank">Chrome</a></p>
                    <p className="mb-6 text-standard-2xl"><a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank">Safari</a></p>
                    <p className="mb-6 text-standard-2xl"><a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US" target="_blank">Firefox</a></p>
                    <p className="mb-6 text-standard-2xl"><a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc" target="_blank">Internet Explorer</a></p>
                    <p className="mb-6 text-standard-2xl">{t("p7")}</p>
                    <p className="mb-6 text-standard-2xl">{t("p8")}</p>
                </div>
            </div>
        </div>
     );
}
 
export default PolicyOfCookiesPage;

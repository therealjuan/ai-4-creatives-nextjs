
import { NewsletterSchema } from "@/lib/types";
import { NextResponse } from "next/server";

const beehiiv = process.env.BEEHIIV_API_KEY;
const publicationId = process.env.BEEHIIV_APPLICATION_ID;
const beehiivURL = process.env.BEEHIIV_API_URL;

export async function POST(request: Request) {

    // const requestBody = await request.json() as { email: string };

    const body = await request.json();
    
    const result = NewsletterSchema.safeParse(body);
    let zodErrors = {};

    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        })
    }
    
    const res = await fetch(`${beehiivURL}/publications/${publicationId}/subscriptions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${beehiiv}`
        },
        body: JSON.stringify({
                email: body.email,
                reactivate_existing: false,
                send_welcome_email: false,
                utm_source: "AI4Creatives",
                utm_campaign: "ai_for_creatives_website",
                utm_medium: "organic",
                referring_site: "www.aiforcreativ.es",
                custom_fields: []
            })
    });

    const responseData = await res.json();
    if (!res.ok) {
        console.log("error")
        return;
    } else {
        console.log("sent");
    }
                
    return NextResponse.json(
        Object.keys(zodErrors).length > 0 ? { errors: zodErrors } : { success: true }
    );
};
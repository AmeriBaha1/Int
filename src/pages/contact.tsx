import Head from "next/head";
import ContactHeader from "~/components/ContactHeader";
import ContactSection from "~/components/ContactSection";

export default function Contact() {

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <>
                    <ContactHeader/>
                    <ContactSection/>
                </>

            </main>
        </>
    );
}

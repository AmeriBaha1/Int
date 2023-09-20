import Head from "next/head";
import AboutSection from "~/components/AboutSection";
import TestimonialSection from "~/components/TestimonialSection";
import TeacherHeader from "~/components/TeacherHeader";
import TeamSection from "~/components/TeamSection";

export default function Teachers() {

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <>
                    <TeacherHeader/>
                 <TeamSection/>
                </>

            </main>
        </>
    );
}


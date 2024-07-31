"use client";
import { Component, useEffect } from "react";
import Fullpage, {
    FullPageSections,
    FullpageSection,
} from "@ap.cx/react-fullpage";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { Button } from "./ui/Button";
import { Crimson_Text, IBM_Plex_Mono, Lato } from "next/font/google";
import "./page.css";
import Image, { StaticImageData } from "next/image";
import highAngleMan from "./assets/high-angle-man.png";
import clsx from "clsx";
import Link from "next/link";

const crimsonText = Crimson_Text({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
    weight: ["200", "300"],
    subsets: ["latin"],
});

interface CardProps {
    className?: string;
    image: StaticImageData;
    heading: string;
    body: string;
}

const Card = ({ className, image, heading, body }: CardProps) => {
    return (
        <div className={clsx("p-12 bg-[#000] parallax-item", className)}>
            <div className="mt-24 flex w-[80%] mx-auto items-center space-x-8">
                <div className="w-[30%]">
                    <Image
                        src={image}
                        alt={heading}
                        className="drop-shadow-[16px_16px_rgba(60,59,59,1)]"
                        width={300}
                        height={400}
                    />
                </div>
                <div className="mx-12 px-24 w-[100%]">
                    <div className="flex flex-col space-y-8">
                        <h1
                            className={`${crimsonText.className} text-white text-2xl`}
                        >
                            {heading}
                        </h1>
                        <p
                            className={`${lato.className} text-[#BEB6B6] leading-10`}
                        >
                            {body}
                        </p>
                        <Button
                            className={`${crimsonText.className} bg-white w-64 h-16 block tracking-widest text-sm`}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    } else {
                        entry.target.classList.remove("in-view");
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const elements = document.querySelectorAll(".parallax-item");
        elements.forEach((element) => observer.observe(element));

        return () => {
            elements.forEach((element) => observer.unobserve(element));
        };
    }, []);

    return (
        <ParallaxProvider>
            <Fullpage>
                <FullPageSections>
                    <FullpageSection
                        style={{
                            background: "#000",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <main className="relative bg-cover h-screen">
                            <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
                            <div className="relative z-10 h-full w-full py-8 px-16">
                                <nav className={crimsonText.className}>
                                    <div className="flex justify-between items-center">
                                        <h1 className="tracking-wider text-white z-20">
                                            Privy Proof
                                        </h1>
                                        <Button className="bg-transparent text-white tracking-widest z-20">
                                            Connect Wallet
                                        </Button>
                                    </div>
                                </nav>
                                <div className="relative w-100 mt-80 z-20">
                                    <div className={ibmPlexMono.className}>
                                        <h1 className="w-100 text-center text-white text-5xl">
                                            Unlock Privacy Prove Legitimacy
                                        </h1>
                                        <p className="mx-auto w-[52%] text-white text-center text-xl leading-10 tracking-wide mt-5">
                                            Securely sign binding agreements on
                                            the blockchain. Ensure your privacy
                                            and authenticate your commitments
                                            with unmatched transparency and
                                            security. Welcome to the future of
                                            trust and accountability.
                                        </p>
                                        <Button className="bg-white w-64 h-16 block mx-auto mt-8">
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </FullpageSection>
                    <FullpageSection
                        style={{
                            background: "#000",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="p-12 bg-[#000]">
                            <h1 className="w-full text-center text-white">
                                {" "}
                                At Privy Proof
                            </h1>
                            <div className={crimsonText.className}>
                                <p className="text-2xl text-white text-center w-full mt-5">
                                    Privy Proof is a cutting-edge decentralized
                                    application built on the blockchain
                                </p>
                            </div>
                            <Card
                                image={highAngleMan}
                                heading="Secure and Binding Agreements:"
                                body="Privy Proof ensures that all agreements signed on our platform are immutable and legally binding. Once an agreement is signed, it is securely recorded on the blockchain, providing a tamper-proof record that can be verified by all parties involved."
                            />
                        </div>
                    </FullpageSection>
                    <FullpageSection
                        style={{
                            background: "#000",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Card
                            image={highAngleMan}
                            className="flex-row-reverse"
                            heading="Transparency and Accountability:"
                            body="Every action taken on Privy Proof is recorded on the blockchain, creating an auditable trail of evidence. This transparency fosters trust between parties and ensures that all agreements are honored and verifiable."
                        />
                    </FullpageSection>
                    <FullpageSection
                        style={{
                            background: "#000",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Card
                            image={highAngleMan}
                            heading="AI-Powered Contract Drafting:"
                            body="Privy Proof incorporates advanced AI technology to assist users in drafting contracts. Our AI system provides suggestions and templates, ensuring that your agreements are comprehensive and legally sound."
                        />
                    </FullpageSection>
                    <FullpageSection
                        style={{
                            background: "#000",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Card
                            image={highAngleMan}
                            className="flex-row-reverse"
                            heading="User-Friendly Interface:"
                            body="Privy Proof offers an intuitive and user-friendly interface, making it easy for anyone to create, sign, and manage agreements. Whether you're a business professional or an individual, our platform is designed to meet your needs."
                        />
                    </FullpageSection>
                    <FullpageSection
                        style={{
                            background: "#000",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="p-12 bg-[#000] flex flex-col space-y-8 justify-center items-center parallax-item">
                            <div className="my-24">
                                <h1
                                    className={`${crimsonText.className} text-4xl text-white`}
                                >
                                    Why not come onboard?
                                </h1>
                                <Button
                                    className={`${crimsonText.className} bg-white w-64 h-16 block tracking-widest text-sm mt-12 mx-auto`}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </FullpageSection>
                    <FullpageSection
                        style={{
                            background: "#000",
                            height: "100vh",
                        }}
                    >
                        <div className="py-96 parallax-item">
                            <div
                                className={`${ibmPlexMono.className} flex w-[55%] mx-auto text-white justify-between tracking-wider my-12`}
                            >
                                <Link href={""}> Contracts</Link>
                                <Link href={""}>Agreements</Link>
                                <Link href={""}>Signatures</Link>
                                <Link href={""}>Closures</Link>
                            </div>
                        </div>
                    </FullpageSection>
                    <FullpageSection
                        style={{
                            background: "#000",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            className={`${crimsonText.className} mt-12 text-center text-[#BEB6B6] text-[20px] parallax-item`}
                        >
                            2024 @Privy proof
                        </div>
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
        </ParallaxProvider>
    );
}

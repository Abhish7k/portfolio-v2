import Link from "next/link";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { Button } from "./ui/button";

export default function Footer() {
  const socials = [
    {
      label: "LinkedIn",
      icon: SiLinkedin,
      link: "https://www.linkedin.com/in/abhish7k",
    },
    {
      label: "GitHub",
      icon: SiGithub,
      link: "https://github.com/Abhish7k",
    },
    {
      label: "Twitter",
      icon: SiTwitter,
      link: "https://twitter.com/abhizh7k",
    },
  ];

  return (
    <div className="mt-60 mb-20 border-t mx-[5%] md:mx-[10%] lg:mx-[15%] flex flex-col justify-center items-center">
      <div className="mt-10 flex">
        <div className="text-2xl md:text-3xl font-bold transition-all">
          Get in Touch
          <div className="h-1 w-[120%] bg-indigo-400 rounded-full"></div>
        </div>
        <span className="text-xl md:text-2xl ml-1 hover:animate-wave cursor-pointer">
          📬
        </span>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center text-center text-lg mt-10 mx-[25%]">
        <h1>
          I&apos;m on the lookout for new opportunities and my inbox is always
          open, Got a question or just want to say Hi, Just drop me a line,
          I&apos;ll get back to you in no time!
        </h1>
        <Link href="mailto:abhishekbhosale.dev@gmail.com">
          <Button>Say Hello</Button>
        </Link>
      </div>

      {/* socials */}
      <div className="flex justify-center items-center mt-20">
        <div className="hidden md:flex gap-5 transition-all">
          {socials.map((social) => {
            return (
              <Link
                key={social.label}
                href={social.link}
                aria-label={social.label}
                className=""
                target="_blank"
              >
                <social.icon className="w-5 h-5 hover:scale-125 transition-all" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { CircleCheck } from "lucide-react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { useEnquireModal } from "../../context/EnquireModalContext.jsx";
import heroImage from "../images/Hero.webp";
import "./Hero.css";

const CHECKLIST = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
];

export default function Hero() {
  const { open } = useEnquireModal();

  return (
    <section id="home" className="scroll-mt-20 py-8 sm:py-12">
      <Container>
        <div className="hero-card flex flex-col-reverse items-center justify-center gap-4 overflow-visible rounded-lg bg-brand-50 p-6 sm:flex-row sm:justify-between sm:gap-4 sm:p-8 md:gap-8 md:rounded-3xl lg:gap-12">
          <div>
            <h1 className="text-2xl font-bold text-ink-900 sm:text-4xl lg:text-6xl">
              Next-Gen <span className="text-brand-600">Expertise</span> For
              Your <span className="text-brand-600">Enterprise</span>
            </h1>
            <p className="mt-5 text-lg text-ink-600">
              Cultivate high-performance teams through expert learning.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-start">
              {CHECKLIST.map((item) => (
                <li key={item} className="mb-2 flex items-center gap-2 text-ink-900">
                  <CircleCheck size={24} className="shrink-0 text-green-600" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button type="button" onClick={open} className="mt-8">
              Enquire Now
            </Button>
          </div>

          <div className="flex w-full justify-center sm:w-1/2 sm:items-end sm:justify-end">
            <img
              src={heroImage}
              alt="Enterprise professionals"
              className="w-4/5 object-contain sm:h-full sm:w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

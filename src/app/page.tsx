import { CallToAction } from "@/design/landing-page/call-to-action/callToAction";
import { Dashboard } from "@/design/landing-page/dashboard/dashboard";
import { Features } from "@/design/landing-page/features/features";
import { NavbarComponent } from "@/design/landing-page/header/navbar";

export default function Home() {
  return (
    <div className="">
      <NavbarComponent />
      <div className="max-w-7xl px-5 m-auto space-y-20">
        <CallToAction />
        <Dashboard />
        <Features />
        <div></div>
      </div>
    </div>
  );
}

import IntroComponent from "./IntroComponent";
import Qualification from "./Qualification";
import Gap from "./Gap";
import WorkExp from "./WorkExp";
import Project from "./Project";
import Cert from "./Cert";
import Touch from "./Touch";

export default function Container() {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] overflow-y-scroll overflow-x-hidden scroll-smooth snap-mandatory snap-y">
      <div className="h-[500vh] w-[500vw] scroll-smooth snap-mandatory snap-y">
        <IntroComponent />
        <Gap />
        <Qualification />
        <Gap />
        <WorkExp />
        <Gap />
        <Project />
        <Gap />
        <Cert />
        <Gap />
        <Touch />
        <Gap />
      </div>
    </div>
  );
}

import { Div, HtmlH1 } from "@hopper-ui/styled-system";
import "./Home.css";

export function Home() {
    return (
        <div>
            <HtmlH1 backgroundColor="upsell" backgroundColorHover="core_koi-100" padding="inset-squish-lg" className="title">Home</HtmlH1>
            <Div backgroundColor="core_amanita-400" padding="inset-squish-md">the homepage</Div>
        </div>
    );
}

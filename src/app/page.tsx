import { Fragment } from "react";
import Introduction from "./component/Introduction";
import MainSection from "./component/MainSection";
import SecondSection from "./component/SecondSection";

const Home: React.FC = () => {
    return (
        <Fragment>
            <Introduction />
            <MainSection />
            <SecondSection />
        </Fragment>
    )
}

export default Home;

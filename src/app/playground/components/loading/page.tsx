import Loading from "@/components/Loading";
import BasePage from "@/components/Playground/BasePage";

const LoadingPage = () => {
  return (
    <BasePage
      pageTitle="Loading"
      pageDescription="Displays a loading"
    >
      <div className="flex flex-col space-y-3">
        <Loading timeout />
      </div>
    </BasePage>
  )
}

export default LoadingPage;

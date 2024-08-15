import BasePage from "@/components/Playground/BasePage";
import { Button } from "@/components/ui/button";

const ButtonPage = () => {
  return (
    <BasePage
      pageTitle="Button"
      pageDescription="Displays a button or a component that looks like a button."
      docUrl="https://ui.shadcn.com/docs/components/button"
    >
      <div className="flex flex-col space-y-3">
        <div className="space-y-2">
          <h3>Default</h3>
          <div className="flex gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3>Negative</h3>
          <div className="flex gap-2">
            <Button variant="primary-negative">Primary Negative</Button>
            <Button variant="secondary-negative">Secondary</Button>
            <Button variant="tertiary-negative">Tertiary</Button>
            <Button variant="ghost-negative">Ghost</Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3>Disabled</h3>
          <div className="flex gap-2">
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="tertiary" disabled>Tertiary</Button>
            <Button variant="ghost" disabled>Ghost</Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3>Sizes</h3>
          <div className="flex gap-2">
            <Button size="xl">Extra Big</Button>
            <Button size="lg">Big</Button>
            <Button size="md">Medium</Button>
            <Button size="sm">Small</Button>
            <Button size="xs">Extra Small</Button>
          </div>
        </div>
      </div>
    </BasePage>
  )
}

export default ButtonPage;

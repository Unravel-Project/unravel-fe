"use client"

import BasePage from "@/components/Playground/BasePage";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const ToastPage = () => {
  const { toast } = useToast();

  return (
    <BasePage
      pageTitle="Toast"
      pageDescription="A succinct message that is displayed temporarily."
      docUrl="https://ui.shadcn.com/docs/components/toast"
    >
      <div className="flex flex-col space-y-3">
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() => toast({ description: "Successfully show toast." })}
          >
            Show Default Toast
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              toast({
                title: "Success!",
                description: "Successfully show toast.",
              })
            }}
          >
            Show Toast with Title
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: (
                  <ToastAction altText="Try Again" onClick={() => console.log('try again')}>
                    Try again
                  </ToastAction>
                ),
              })
            }}
          >
            Show Toast with Action
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              toast({
                variant: "destructive",
                description: "Uh oh! Something went wrong.",
              })
            }}
          >
            Show Destructive Toast
          </Button>
        </div>
      </div>
    </BasePage>
  )
}

export default ToastPage;

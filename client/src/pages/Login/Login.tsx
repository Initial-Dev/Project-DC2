import { UserAuthForm } from "@/components/";
import { buttonVariants } from "@/components/ui/buttonVariants";
import { cn } from "@/lib/utils";

export const Login = () => {
  return (
    <>
      <div className="container relative font-kanit  h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <a
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8",
          )}
        >
          Login
        </a>
        <div className="relative hidden h-full overflow-hidden flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute h-screen inset-0 bg-gradient-to-t from-zinc-900/50 via-transparent to-zinc-900/50  z-20" />
          <div className="absolute h-screen inset-0 bg-zinc-900 z-10">
            <div className="flex flex-col w-full h-full">
              <img
                src="./images/login/item1.png"
                className="object-cover w-full h-full"
                alt="Nike Air Force 1 07"
              />
            </div>
          </div>
          <a
            href="/"
            className="relative z-20 gap-4 flex items-center text-xl font-medium"
          >
            <img
              className="h-10 w-10"
              src="./logo.png"
              alt="BreizhSPORT-logo"
            />
            <span className="hover-underline">BreizhSPORT</span>
          </a>

          <div className="relative z-20 mt-auto ">
            <blockquote className="space-y-2">
              <p className="text-xl">Nike Air Force 1 '07</p>
              <footer className="text-md font-normal">By Nike</footer>
            </blockquote>
          </div>
        </div>
        <div className="flex flex-col gap-7 justify-center h-screen">
          <a href="/" className="absolute top-5 left-6">
            <div className="md:hidden relative z-20 gap-4 flex items-center text-xl font-medium">
              <img
                className="h-10 w-10"
                src="./logo.png"
                alt="BreizhSPORT-logo"
              />
              <span className="font-semibold">BreizhSPORT</span>
            </div>
          </a>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-start">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Créer un compte
                </h1>
                <p className="text-sm text-muted-foreground">
                  Saisissez votre email ci-dessous pour créer votre compte
                </p>
              </div>
              <UserAuthForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
                En cliquant sur continuer, vous acceptez nos{" "}
                <a
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Conditions de service
                </a>{" "}
                et notre{" "}
                <a
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Politique de Confidentialité
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


import { LoginForm } from "@/components/login-form"
export default function App() {

  return (
    <>

    <div className="lg:flex lg:justify-between lg:min-h-svh flex h-screen justify-center">
      <div className="bg-[#F3FFF2] lg:flex justify-center lg:w-[50%] hidden">
        <img
          src="/image.svg"
          alt="Image"
          width={500}
          height={420}
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10 lg:w-[50%]">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>  
    </>
    
  )
}
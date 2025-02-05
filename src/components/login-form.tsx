import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-2">
      <p className="text-balance text-sm">
      Bem-vindo de volta
        </p>
        <h1 className="text-2xl font-bold">Faça login na sua conta</h1>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
          </div>
          <Input id="password" type="password" placeholder="0123456789" required />
          
        </div>
        <div className="flex justify-between space-x-2">

      <label
        htmlFor="terms"
        className="text-sm font-normal flex items-center gap-1 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
      <Checkbox id="terms" />
        Lembre de mim
      </label>

      <a href="#" className="text-xs underline font-normal text-primary">Esqueceu a senha?</a>
    </div>
        <Button type="submit" className="w-full text-white font-semibold text-sm">
          Fazer Login
        </Button>
        <Button  type="button" variant="outline"  className="w-full bg-gray-950 text-white font-semibold text-sm">
          <img src="/icon.png" alt="icon google" width={20} height={20}/>
          Login com o Google
        </Button>
      </div>
      <div className="text-center text-sm flex gap-1 justify-center">
        Voce nao tem uma conta?
        <a href="#" className="underline underline-offset-4 text-primary">
          criar conta
        </a>
      </div>
    </form>
    
  
  )
}

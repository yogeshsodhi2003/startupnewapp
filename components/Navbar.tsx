import Image from "next/image";
import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button"

const Navbar = async () => {
  const Session = await auth();
  return (
    <header className="w-full bg-white shadow-2xl h-18 flex justify-around items-center">
      <nav className="">
      <Link href={'/'}> <Image src="/startupnewslogo.png" alt="logo" width={144} height={15} /></Link>
      </nav>
      <nav className="">
        {Session && Session?.user ? (
       <div className="flex items-center gap-4">
          <Link href={'/create'} className="text-lg">Create</Link>
        
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit" className="bg-[#FF0B55]">Sign Out</Button>
          </form>
           <Link href={'/profile'}> <Image
            src={"/boy.png"}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          </Link>
       </div>
        
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn('Google');
            }}

          >
            <Button type="submit" className="bg-blue-500" >Sign In</Button>
          </form>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

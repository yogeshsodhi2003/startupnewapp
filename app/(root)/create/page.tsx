import { auth } from "@/auth";
import Box from "@/components/Box";
import { redirect } from "next/navigation";
import Createform from "@/components/Createform";



const page = async () => {

  const session = await auth();
  const heading = "create a startups"

  if(!session) redirect('/');
  return (
    <>
    <div className="heading">
      <Box heading={heading}/>
     </div>
      <Createform/>
   </>
  )
}

export default page




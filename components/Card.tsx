import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Post = {
  _id: string;
  _createdAt: string;
  views: number;
  title: string;
  bio: string;
  image: string;
  category: string;
};
type Cardprops = {
  posts: Post[];
};
const Card = ({ posts }: Cardprops) => {
  return (
    <section className="card-section w-full flex items-center  justify-center md:justify-start gap-10  sm:p-5  flex-wrap">
      {posts.map((posts) => (
        <div
          key={posts._id}
          className="card w-85 h-110 flex flex-col gap-4  overflow-hidden"
        >
          <div className="upper">
            <span className="flex justify-between">
              <h1 className="text-xl">{posts._createdAt}</h1>{" "}
              <h1>{posts.views}</h1>
            </span>
            <h1 className="text-2xl">{posts.title}</h1>
            <p>{posts.bio}</p>
          </div>
          <div className="center bg-black h-100 w-2/2 object-cover">
            <Image
              src={posts.image}
              width={300}
              height={100}
              alt="card image "
              className="border object-cover"
            />
          </div>
          <div className="bottom">
            <span className="flex justify-between ">
              <h1>{posts.category}</h1>
              <Link href={`/${posts._id}`}>
                {" "}
                <Button>View Details</Button>
              </Link>
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;

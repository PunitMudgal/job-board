import Link from "next/link";
import { timeAgo } from "../constants/timeago";

const JobRow = () => {
  return (
    <div className="bg-white p-4 rounded-lg card-shadow relative">
      <div className="absolute cursor-pointer top-4 right-4">
        {/* <Heart size={17} color="gray" />
         */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <div className="flex grow gap-4">
        <div className="content-center w-12 basis-12 shrink-0">
          <img className="size-12" src="/icons/airbnb.svg" alt="" />
        </div>
        <div className="md:grow flex md:inline justify-between">
          <div className="grow">
            {/* <div> */}
            <Link
              href={`/jobs`}
              className="hover:underline text-gray-500 text-sm"
            >
              "Airbnb"
            </Link>
            {/* </div> */}
            <div className="font-bold text-lg mb-1">
              <Link className="hover:underline" href={"/show/"}>
                Software Engineer
              </Link>
            </div>
            <div className="text-gray-400 text-sm capitalize">
              Remote &middot; Gurugram, India &middot; Full-time
              {/* {jobDoc.isAdmin && ( */}
              <>
                {" "}
                &middot; <Link href={"/jobs/edit/"}>Edit</Link> &middot;{" "}
                <button type="button">Delete</button>
              </>
              {/* )} */}
            </div>
          </div>

          <div className="content-end text-gray-500 text-sm">
            <span>{timeAgo("Thu Mar 23 2018 07:15:59 GMT+0000")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRow;

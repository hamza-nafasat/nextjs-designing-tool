"use client";

import { useMemo } from "react";
import { Avatar } from "./Avatar";
import { useOthers, useSelf } from "@liveblocks/react";
import { generateRandomPersonName } from "@/utils";

const ActiveUsers = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 2;

  const memoizedUsers = useMemo(() => {
    return (
      <div className="flex items-center justify-center gap-1 ">
        <div className="flex pl-3">
          {/* this is mine avatar  */}
          {currentUser && <Avatar name="you" otherStyles="border-[3px]  border-primary-green" />}
          {/* other user avatar  */}
          {users.slice(0, 3).map(({ connectionId }) => (
            <Avatar key={connectionId} name={generateRandomPersonName()} otherStyles="-ml-3" />
          ))}
          {hasMoreUsers && (
            <div className="z-10 -ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-black">
              +{users.length - 2}
            </div>
          )}
        </div>
      </div>
    );
  }, [users.length]);

  return memoizedUsers;
};

export default ActiveUsers;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Image from "next/image";

function UserAvatar({
      name,
      image,
      className
  }: {
      name: string;
      image: string;
      className?: string;
  }) {
  return (
    <Avatar className={cn("bg-whitetext-black", className)}>
        {image && (
            <Image
                src={image}
                alt={name}
                width={40}
                height={40}
                className="rounded-full"
            />
        )}

  <AvatarFallback>CN</AvatarFallback>
</Avatar>

  )
}

export default UserAvatar
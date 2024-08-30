import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

let options: any = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

let src =
  "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95JTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8fDA%3D";
export default function ProfilePage() {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-6">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={src}
              alt="User Avatar"
              style={{ objectFit: "cover" }}
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
          </div>
        </div>
        {/* <Button variant="outline">Edit Profile</Button> */}
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Email
            </label>
            <p className="text-base">{profile.email}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Phone
            </label>
            <p className="text-base">{profile.phone}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Role
            </label>
            <p className="text-base">{profile?.role || "Client"}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Address
            </label>
            <p className="text-base">{profile.address}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Created On
            </label>
            <p className="text-base">
              {new Date(profile.createdAt).toLocaleDateString("en-US", options)}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Industry Name
            </label>
            <p className="text-base">{profile.industry?.name}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Industry Type
            </label>
            <p className="text-base">{profile.industry?.type}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Industry Size
            </label>
            <p className="text-base">{profile.industry?.size}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Website
            </label>
            <p className="text-base">{profile.industry?.site}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Notes
            </label>
            <p className="text-base">{profile.industry?.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

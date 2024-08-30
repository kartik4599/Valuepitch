import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 md:px-6">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95JTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8fDA%3D"
              alt="User Avatar"
              style={{ objectFit: "cover" }}
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
          </div>
        </div>
        <Button variant="outline">Edit Profile</Button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Email
            </label>
            <p className="text-base">john.doe@example.com</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Phone
            </label>
            <p className="text-base">+1 (555) 123-4567</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Role
            </label>
            <p className="text-base">Software Engineer</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Industry
            </label>
            <p className="text-base">Technology</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Address
            </label>
            <p className="text-base">123 Main St, Anytown USA 12345</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Bio
            </label>
            <p className="text-base">
              John Doe is a passionate software engineer with over 5 years of
              experience in the technology industry. He is skilled in various
              programming languages and frameworks, and is always eager to learn
              new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

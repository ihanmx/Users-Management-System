import Button from "@/components/atoms/Button";
import ActionCard from "@/components/molecules/ActionCard";
import { User } from "@/assets/icons/icons";
import UserInfoCard from "@/components/molecules/UserInfoCard";
import ActionSection from "@/components/organisms/ActionSection";
import Users from "@/modules/users/components/Users";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant="primary" size="md">
        Hello World
      </Button>
      <ActionCard
        title="Welcome to the Action Card"
        details="This is a simple action card component."
        buttonText="Learn More"
        variant="primary"
        icon={User}
        // onClick={() => alert("Button Clicked!")}
      />
      <UserInfoCard id="12345" name="John Doe" email="john.doe@example.com" />
      <ActionSection />
      <Users />
    </div>
  );
}

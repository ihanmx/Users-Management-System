import { UsersActions } from "@/data/data";
import ActionCard from "../molecules/ActionCard";

const ActionSection = () => {
  return (
    <div className="flex flex-row gap-4">
      {UsersActions.map((action) => {
        return (
          <ActionCard
            key={action.title}
            title={action.title}
            details={action.details}
            buttonText={action.buttonText}
            variant={
              action.variant as "primary" | "secondary" | "ghost" | "outline1"
            }
            icon={action.icon as React.ComponentType<{ size?: number }>}
          />
        );
      })}
    </div>
  );
};

export default ActionSection;

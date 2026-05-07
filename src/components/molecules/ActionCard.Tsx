import React from "react";
import Icon from "@/components/atoms/Icon";
import Button from "@/components/atoms/Button";
import Card from "../atoms/Card";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
interface Props {
  title?: string;
  details?: string;
  buttonText?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline1";
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href?: string;
  onClick?: () => void;
}

const ActionCard = ({
  title = "Card Title",
  details = "card details",
  buttonText = "Click Me",
  variant = "primary",
  icon,
  href,
  onClick,
}: Props) => {
  return (
    <Card className="flex flex-col items-center justify-center ds-bg rounded-2xl p-6">
      <div className="flex flex-row items-center gap-1">
        <Icon IconComponent={icon} size={48} color="black" />
        <div className="flex flex-col ">
          <Title size="lg" variant="primary">
            {title}
          </Title>
          <Text size="md" variant="secondary">
            {details}
          </Text>
        </div>
      </div>

      <Button variant={variant} onClick={onClick} href={href} size="lg">
        {buttonText}
      </Button>
    </Card>
  );
};

export default ActionCard;

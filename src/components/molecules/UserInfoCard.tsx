import { User } from "@/assets/icons/icons";
import Icon from "@/components/atoms/Icon";
import React from "react";
import Card from "../atoms/Card";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
interface Props {
  id?: string;
  name?: string;
  email?: string;
}

const UserInfoCard = ({
  id = "unknown",
  name = "unknown",
  email = "unknown",
}: Props) => {
  return (
    <Card>
      <div className="flex flex-row gap-2">
        <Icon IconComponent={User} size={48} color="black" />
        <Title size="lg" variant="primary">
          User Details
        </Title>
      </div>
      <div className="flex flex-col gap-2 mt-4 text-left">
        <Text center={false} size="md" variant="secondary">
          ID: {id}
        </Text>
        <Text center={false} size="md" variant="secondary">
          Name: {name}
        </Text>
        <Text center={false} size="md" variant="secondary">
          Email: {email}
        </Text>
      </div>
    </Card>
  );
};

export default UserInfoCard;

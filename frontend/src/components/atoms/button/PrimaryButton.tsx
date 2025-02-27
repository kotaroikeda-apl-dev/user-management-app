import { FC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
  loading?: boolean;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick, loading = false, disabled = false } = props;
  return (
    <Button 
      bg="teal.400" 
      color="white" 
      _hover={{ opacity: 0.8 }} 
      onClick={onClick}
      isLoading={loading}
      isDisabled={disabled || loading}
    >
      {children}
    </Button>
  );
});
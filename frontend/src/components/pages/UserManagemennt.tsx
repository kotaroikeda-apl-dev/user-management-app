import { FC, memo, useEffect } from "react";
import { FormControl, FormLabel, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { Spinner } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useCallback } from "react";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";
export const UserManagemennt:FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  useEffect(() => getUsers(), []);
  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  }, [users, onSelectUser, onOpen]);
  return (
    <>
    {loading ? (
      <Center h="100vh">
        <Spinner />
      </Center>
    ) : (
      <Wrap p={{ base: 4, md: 10 }}>
        {users.map((user) => (
          <WrapItem key={user.id} mx="auto">
            <UserCard 
              id={user.id}
              imageUrl="https://source.unsplash.com/random" 
              userName={user.username} 
              fullName={user.name} 
              onClick={onClickUser}
            />
          </WrapItem>
        ))}
      </Wrap>
    )}
    <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin} />
    </>
  )
})
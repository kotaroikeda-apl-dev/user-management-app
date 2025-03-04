import { FC, memo, useState, ChangeEvent } from "react";
import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login:FC = memo(() => {
  const [userId, setUserId] = useState('');
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }
  const { login, loading } = useAuth();
  const onClickLogin = () => {
    login(userId);
  }
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザ管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId}/>  
          <PrimaryButton disabled={userId === ""} onClick={onClickLogin} loading={loading}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})

// library
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

// main-style
import { HeaderBlock, Poster } from "../mainStyle";
import OneUser from "./OneUser";

// pages
import UserSection from "./UsersSection";

export default function Users() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <HeaderBlock>
        <Poster>Пользователи</Poster>
      </HeaderBlock>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<UserSection />} />
          <Route path="one/:userId" element={<OneUser />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

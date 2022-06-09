// library
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import {
  Box,
  Button,
  Divider,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import React, { FC } from "react";

// style
import {
  Styled,
  StyledBodyCell,
  StyledBodyCellFirst,
  StyledBodyCellLast,
  StyledBodyRow,
  StyledHeadCell,
  StyledHeadRow,
} from "./ListUser.style";

import { useNavigate } from "react-router-dom";
import {
  MainButton,
  SecondaryButton,
  WarningButton,
} from "../../../../components/styled-components/StyledButton";
import { useGetProfilesQuery } from "../../../../redux/store/rtk-api/user-rtk/userEndpoints";
import Filter from "../../modules/Filter";

const UserTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [query, setQuery] = React.useState({
    search: "",
  });

  const handleChangeQuery = (values: object) => {
    setQuery((prev) => {
      return {
        ...prev,
        ...values,
      };
    });
    setPage(0);
  };

  const { data, isLoading } = useGetProfilesQuery(
    { ...query, page: page + 1, limit: rowsPerPage },
    { refetchOnMountOrArgChange: true }
  );

  return (
    <>
      <Filter setQuery={(values) => handleChangeQuery(values)} />
      <TableContainer component={Box}>
        <Table
          sx={{ minWidth: 650, boxShadow: "none" }}
          aria-label="simple table"
        >
          <TableHead sx={{ position: "relative" }}>
            <StyledHeadRow>
              <StyledHeadCell>Пользователь</StyledHeadCell>
              <StyledHeadCell>Телефон</StyledHeadCell>
              <StyledHeadCell>Статус</StyledHeadCell>
              <StyledHeadCell>Жалобы</StyledHeadCell>
            </StyledHeadRow>
            <Styled.TableDivider />
          </TableHead>

          <TableBody>
            {data?.profiles.map((profile) => (
              <StyledBodyRow key={profile.id}>
                <StyledBodyCellFirst>{profile.firstName}</StyledBodyCellFirst>
                <StyledBodyCell>{profile.user.phone}</StyledBodyCell>
                <StyledBodyCell>
                  {profile.block === null ? "Джонибек" : "Maksat"}
                </StyledBodyCell>
                <StyledBodyCell>
                  {profile.block
                    ? "Jonibek"
                    : "Максат прислал мне фотку Джонибека"}
                </StyledBodyCell>
                <StyledBodyCellLast>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: "18px",
                      borderRadius: "10px",
                      px: "40px",
                    }}
                    onClick={() => navigate(`/app/users/one/${profile.id}`)}
                  >
                    Подробнее
                  </Button>
                </StyledBodyCellLast>
              </StyledBodyRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={data?.count || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Товаров на одной странице:"
        />
      </TableContainer>
    </>
  );
};

export default UserTable;

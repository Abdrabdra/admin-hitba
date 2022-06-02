// LibraryAdd
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
// components

import { HorizontalBar } from "../../../components/Charts";
import { DoughnutChart } from "../../../components/Charts/Doughnut";
import { HorizontalColorBar } from "../../../components/Charts/HorizontalColorBar";

// components
import { useGetHomeQuery } from "../../../redux/store/rtk-api/home-rtk/homeEndpoints";

// style
import { StyledPaper } from "./style";

const HomeSection = () => {
  const Item = (props: any) => <Paper {...props} />;
  const { data, isLoading } = useGetHomeQuery("");

  console.log(data);

  return (
    <>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={8}>
          <StyledPaper>
            <Typography variant="h3">Интересы</Typography>
            {data && <HorizontalColorBar barData={data.status} />}
          </StyledPaper>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>
            <Typography variant="h3">Посещение</Typography>
            {data && <HorizontalColorBar barData={data.status} />}
          </StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper>
            <Typography variant="h3">Статистика по религии</Typography>
            {data && <DoughnutChart barData={data.religions} />}
          </StyledPaper>
        </Grid>
        <Grid item xs={2} container direction={"column"} spacing={2}>
          <Grid item xs>
            <StyledPaper
              sx={{
                height: "calc(100% - 25px)",
                width: "calc(100% - 30px)",
                color: "primary.main",
                borderRadius: "20px",
                fontSize: "24px",
                paddingTop: "25px",
                paddingLeft: "30px",
              }}
            >
              <Typography variant="h3">Статистика по полу</Typography>
              {data && <HorizontalColorBar barData={data.genders} />}
            </StyledPaper>
          </Grid>
          <Grid item xs>
            <StyledPaper
              sx={{
                height: "calc(100% - 25px)",
                width: "calc(100% - 30px)",
                color: "primary.main",
                borderRadius: "20px",
                fontSize: "24px",
                paddingTop: "25px",
                paddingLeft: "30px",
              }}
            >
              <Typography variant="h3">Статистика по статусу</Typography>
              {data && <HorizontalColorBar barData={data.status} />}
            </StyledPaper>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>
            <Typography variant="h3">Статистика по городам</Typography>
            {data && <HorizontalColorBar barData={data.cities} />}
          </StyledPaper>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>
            <Typography variant="h3">Недавние жалобы</Typography>
            {data && <HorizontalColorBar barData={data.status} />}
          </StyledPaper>
        </Grid>
        <Grid item xs={3}>
          <StyledPaper>
            <Typography variant="h3">Статистика прибыли</Typography>
            {data && <DoughnutChart barData={data.religions} />}
          </StyledPaper>
        </Grid>
        <Grid item xs={5} sx={{ height: "480px" }}>
          <Box sx={{ height: "100%" }}>
            <StyledPaper>
              <Typography variant="h3">Статистика по возрасту</Typography>
              {data && <HorizontalBar barData={data.ages} />}
            </StyledPaper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeSection;

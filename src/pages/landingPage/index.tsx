import { Box } from "@mui/material";

const Landing = () => (
  <Box
    sx={{
      // Arkaplan resmi
      backgroundImage:
        "url('https://images.unsplash.com/photo-1505075625100-1a9150eacf21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      // Eğer arka planın üzerinde koyu bir overlay isterseniz
      px: 2, // isteğe bağlı padding
      py: 2,
    }}
  >
    {//<><Showcase /><MaterialsCard /><StatsSection /></>
    }
  </Box>
);

export default Landing;

"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Router, Navigation } from '@toolpad/core';

const NAVIGATION: Navigation = [
    {
      kind: 'header',
      title: 'Main items',
    },
    {
      segment: 'dashboard',
      title: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      segment: 'orders',
      title: 'Orders',
      icon: <ShoppingCartIcon />,
    },
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Analytics',
    },
    {
      segment: 'reports',
      title: 'Reports',
      icon: <BarChartIcon />,
      children: [
        {
          segment: 'sales',
          title: 'Sales',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'traffic',
          title: 'Traffic',
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: 'integrations',
      title: 'Integrations',
      icon: <LayersIcon />,
    },
];
  
const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
        },
    },
});

function PageContent({ content }: { content: React.ReactNode }) {
    return (
      <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {content}
      </Box>
    );
}

interface Props {
    window?: () => Window;
}

export default function Layout({
    props = {},
    children,
  }: Readonly<{
    props: Props;
    children: React.ReactNode;
  }>) {
    const { window } = props;

    const [pathname, setPathname] = React.useState('/dashboard');
    const router = React.useMemo<Router>(() => {
        return {
          pathname,
          searchParams: new URLSearchParams(),
          navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);
    const mWindow = window !== undefined ? window() : undefined;

    return (
        <AppProvider
        navigation={NAVIGATION}
        router={router}
        theme={theme}
        window={mWindow}
      >
        <DashboardLayout>
          <PageContent content={children} />
        </DashboardLayout>
      </AppProvider>
    );
  }
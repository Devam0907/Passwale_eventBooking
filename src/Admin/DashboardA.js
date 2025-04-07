import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Tabs,
  Tab,
  Avatar,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  AreaChart,
  Area,
  Cell, // Import Cell for custom bar colors
} from "recharts";
import {
  Event,
  People,
  AttachMoney,
  TrendingUp,
  CheckCircle,
  HourglassEmpty,
  Cancel,
} from "@mui/icons-material";

// Custom Color Palette
const colors = {
  primary: "#4F46E5", // Purple
  secondary: "#10B981", // Green
  tertiary: "#3B82F6", // Blue
  quaternary: "#F59E0B", // Orange
  background: "#F3F4F6", // Light Gray
};

// Sample Data for Categories
const categoriesData = [
  { name: "Tech", value: 40 },
  { name: "Business", value: 30 },
  { name: "Marketing", value: 20 },
  { name: "Design", value: 10 },
];

// Custom Colors for Categories Bars
const categoryColors = ["#4F46E5", "#10B981", "#3B82F6", "#F59E0B"]; // Purple, Green, Blue, Orange

// Sample Data for Other Charts
const data = [
  { month: "Jan", revenue: 20000, attendees: 1200, conferences: 10 },
  { month: "Feb", revenue: 30000, attendees: 1500, conferences: 12 },
  { month: "Mar", revenue: 40000, attendees: 1800, conferences: 15 },
  { month: "Apr", revenue: 50000, attendees: 2000, conferences: 18 },
  { month: "May", revenue: 60000, attendees: 2200, conferences: 20 },
  { month: "Jun", revenue: 80000, attendees: 2500, conferences: 22 },
];

const metrics = [
  { label: "Total Conferences", value: "124", icon: <Event />, change: "+12%" },
  { label: "Total Users", value: "24,512", icon: <People />, change: "+18%" },
  { label: "Total Revenue", value: "$846,245", icon: <AttachMoney />, change: "+7%" },
  { label: "Conversion Rate", value: "24.5%", icon: <TrendingUp />, change: "-2%" },
];

const activities = [
  { title: "DevConf 2023 Created", desc: "Created new conference with 24 sessions and 12 speakers", status: "completed", user: "John Doe", date: "Jun 15, 2023 10:30 AM" },
  { title: "User Registration", desc: "250 new users registered for TechSummit 2023", status: "completed", user: "Jane Smith", date: "Jun 14, 2023 2:45 PM" },
  { title: "Speaker Update", desc: "Updated speaker information for 5 presenters", status: "pending", user: "Sarah Williams", date: "Jun 13, 2023 4:30 PM" },
  { title: "Payment Declined", desc: "Payment of $5,000 for sponsorship was declined", status: "cancelled", user: "David Miller", date: "Jun 12, 2023 1:00 PM" },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activityFilter, setActivityFilter] = useState("all");

  const filteredActivities = activities.filter((activity) =>
    activityFilter === "all" ? true : activity.status === activityFilter
  );

  // Render different charts based on the active tab
  const renderChart = () => {
    switch (activeTab) {
      case 0: // Revenue (Line Chart)
        return (
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke={colors.primary}
              strokeWidth={2}
            />
          </LineChart>
        );
      case 1: // Attendees (Bar Chart)
        return (
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="attendees" fill={colors.secondary} />
          </BarChart>
        );
      case 2: // Conferences (Area Chart)
        return (
          <AreaChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              type="monotone"
              dataKey="conferences"
              stroke={colors.tertiary}
              fill={colors.tertiary}
              fillOpacity={0.3}
            />
          </AreaChart>
        );
      case 3: // Categories (Horizontal Bar Chart)
        return (
          <BarChart
            layout="vertical"
            data={categoriesData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value">
              {categoriesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={categoryColors[index]} />
              ))}
            </Bar>
          </BarChart>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>Dashboard</Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: "gray" }}>Welcome back to your conference management dashboard.</Typography>

      {/* Metrics Section */}
      <Grid container spacing={3}>
        {metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ p: 2, boxShadow: 1, display: "flex", alignItems: "center" }}>
              <Avatar sx={{ bgcolor: colors.primary, mr: 2 }}>{metric.icon}</Avatar>
              <CardContent sx={{ p: 0 }}>
                <Typography variant="subtitle2" color="gray">{metric.label}</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>{metric.value}</Typography>
                <Typography variant="caption" sx={{ color: metric.change.includes("+") ? "green" : "red" }}>
                  {metric.change} vs. last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Overview & Activity Section (Side by Side) */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {/* Overview (Graph) */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>Overview</Typography>
            <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} textColor="primary" indicatorColor="primary">
              <Tab label="Revenue" />
              <Tab label="Attendees" />
              <Tab label="Conferences" />
              <Tab label="Categories" />
            </Tabs>
            <ResponsiveContainer width="100%" height={300}>
              {renderChart()}
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Recent Activity with Filtering */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>Recent Activity</Typography>
            <Tabs
              value={activityFilter}
              onChange={(e, newValue) => setActivityFilter(newValue)}
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="All" value="all" />
              <Tab label="Completed" value="completed" />
              <Tab label="Pending" value="pending" />
              <Tab label="Cancelled" value="cancelled" />
            </Tabs>

            {/* Activity List */}
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity, index) => (
                <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, borderBottom: "1px solid #e0e0e0" }}>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>{activity.title}</Typography>
                    <Typography variant="body2" color="gray">{activity.desc}</Typography>
                    <Typography variant="caption" color="gray">👤 {activity.user} • 📅 {activity.date}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", color: activity.status === "completed" ? "green" : activity.status === "pending" ? "orange" : "red" }}>
                    {activity.status === "completed" ? <CheckCircle /> : activity.status === "pending" ? <HourglassEmpty /> : <Cancel />}
                    <Typography sx={{ ml: 1 }}>{activity.status}</Typography>
                  </Box>
                </Box>
              ))
            ) : (
              <Typography sx={{ textAlign: "center", mt: 3, color: "gray" }}>No activities found.</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
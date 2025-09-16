import DashboardView from "./DashboardView.vue";

const mockData = {
  user: { name: "Jhon Doe", initials: "JD" },
  balance: { amount: 48321.12, currency: "USD" },
  options: [
    { id: "transfer", name: "Money transfer" },
    { id: "history", name: "Transaction history" },
  ],
  transactions: [
    { id: 1, description: "Salary", date: "2025-09-10", amount: 5500.0 },
    { id: 2, description: "Shoppping", date: "2025-09-11", amount: -2100.0 },
    {
      id: 3,
      description: "Netflix subscription",
      date: "2025-09-12",
      amount: -29.99,
    },
  ],
};

export default {
  title: "Views/DashboardView",
  component: DashboardView,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `DashboardView` View is the main view in the application, this view currently consists of 5 components - `NavBar`, `BalanceCard`, `OptionsCard`, `TransactionsCard` and `ChartCard`.",
      },
    },
  },
};

export const Primary = {
  args: {
    ...mockData,
  },
  parameters: {
    docs: {
      description: {
        story: "Default view with all components loaded with typical data.",
      },
    },
  },
};

export const Loading = {
  args: {
    user: mockData.user,
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "View state when data is loaded.",
      },
    },
  },
};

export const EmptyState = {
  args: {
    ...mockData,
    balance: { amount: 0, currency: "USD" },
    transactions: [],
    chart: { ...mockData.chart, data: [], labels: [] },
  },
  parameters: {
    docs: {
      description: {
        story: "View state when all data is empty.",
      },
    },
  },
};

export const ErrorState = {
  args: {
    user: mockData.user,
    hasError: true,
  },
  parameters: {
    docs: {
      description: {
        story: "View state when an error occurs.",
      },
    },
  },
};

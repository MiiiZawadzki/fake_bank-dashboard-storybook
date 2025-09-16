import ChartCard from "./ChartCard.vue";

export default {
  title: "Components/ChartCard",
  component: ChartCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This component renders an interactive SVG-based line chart that dynamically adapts to the data provided. It is primarily designed to visualize monthly expenses, allowing users to track variations over time.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Title displayed above the chart",
    },
    data: {
      control: "object",
      description: "Table with numerical data (Y axis)",
    },
    labels: {
      control: "object",
      description: "Labeled array (X axis)",
    },
  },
};

export const Primary = {
  args: {
    title: "Monthly Expenses",
    data: [5700, 7150, 1200],
    labels: ["January", "February", "March"],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default chart view with a typical data set (Q1 period). It shows the basic functionality and appearance of the component.",
      },
    },
  },
};

export const MoreDataPoints = {
  args: {
    title: "Monthly revenues",
    data: [
      8000, 7800, 8150, 6000, 8000, 5500, 9000, 1200, 12000, 8200, 7800, 9100,
    ],
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    width: 800,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A graph with more data points to test how the component handles denser information and longer labels.",
      },
    },
  },
};

export const EmptyState = {
  args: {
    title: "No data to display",
    data: [],
    labels: [],
  },
  parameters: {
    docs: {
      description: {
        story: "This variant tests an edge case where there is no data.",
      },
    },
  },
};

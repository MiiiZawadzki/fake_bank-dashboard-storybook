import TransactionsCard from "./TransactionsCard.vue";

const mockTransactions = [
  {
    id: 1,
    description: "Grocery shopping",
    date: "2025-09-12",
    amount: -185.5,
  },
  {
    id: 2,
    description: "Salary",
    date: "2025-09-10",
    amount: 5200.0,
  },
  {
    id: 3,
    description: "Streaming subscription",
    date: "2025-09-08",
    amount: -49.99,
  },
  {
    id: 4,
    description: "Ticket refund",
    date: "2025-09-07",
    amount: 95.0,
  },
];

export default {
  title: "Components/TransactionsCard",
  component: TransactionsCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `TransactionsCard` component displays a list of recent transactions. It automatically formats currency and colors amounts based on whether they are income or expenses.",
      },
    },
  },
  argTypes: {
    transactions: {
      control: "object",
      description: "Array of transaction objects.",
    },
    currency: {
      control: "text",
      description: "Currency code, e.g. 'USD', 'EUR'.",
    },
  },
};

export const Primary = {
  args: {
    transactions: mockTransactions,
    currency: "USD",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Basic view with a transaction list containing both receipts and expenses. Shows the correct coloring of amounts.",
      },
    },
  },
};

export const DifferentCurrency = {
  args: {
    transactions: mockTransactions,
    currency: "EUR",
  },
  parameters: {
    docs: {
      description: {
        story: "Variant with another currency (EUR).",
      },
    },
  },
};

export const LongDescription = {
  args: {
    transactions: [
      {
        id: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi erat, efficitur et sapien nec, auctor rhoncus lectus. Praesent ac dignissim orci, non luctus nisl. Cras arcu elit, hendrerit porttitor risus id, convallis ultrices tortor. Etiam gravida ante ut turpis pulvinar facilisis. Donec bibendum massa nunc, id accumsan risus posuere in.",
        date: "2025-09-11",
        amount: -450.0,
      },
      {
        id: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2025-09-11",
        amount: 15.15,
      },
    ],
    currency: "USD",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tests the case when one of the transactions has a very long description.",
      },
    },
  },
};

export const EmptyState = {
  args: {
    transactions: [],
    currency: "PLN",
  },
  parameters: {
    docs: {
      description: {
        story: "A variant demonstrating handling of an empty transaction list.",
      },
    },
  },
};

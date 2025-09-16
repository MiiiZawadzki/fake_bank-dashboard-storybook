import BalanceCard from "./BalanceCard.vue";

export default {
  title: "Components/BalanceCard",
  component: BalanceCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `BalanceCard` displays the user's account balance, formatting it according to the specified currency.",
      },
    },
  },
  argTypes: {
    balance: {
      control: "object",
      description:
        "An object with an amount (`amount`) and a currency (`currency`, e.g. 'PLN', 'USD').",
    },
  },
};

export const UsdBalance = {
  args: {
    balance: {
      amount: 12345.67,
      currency: "USD",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Basic balance tab view with positive balance in USD.",
      },
    },
  },
};

export const EuroBalance = {
  args: {
    balance: {
      amount: 5432.1,
      currency: "Eur",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Basic balance tab view with positive balance in Eur.",
      },
    },
  },
};

export const ZeroBalance = {
  args: {
    balance: {
      amount: 0,
      currency: "USD",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Tests the edge case when the balance is zero.",
      },
    },
  },
};

export const NegativeBalance = {
  args: {
    balance: {
      amount: -500.75,
      currency: "EUR",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Displays negative balance.",
      },
    },
  },
};

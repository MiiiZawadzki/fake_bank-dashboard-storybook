import OptionsCard from "./OptionsCard.vue";

const defaultOptions = [
  { id: 1, name: "Money transfer" },
  { id: 3, name: "Transaction history" },
];

export default {
  title: "Components/OptionsCard",
  component: OptionsCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `OptionsCard` component displays a grid of buttons for quick actions like 'Money transfer' or 'Transaction history'. The layout is responsive and adapts to the number of options.",
      },
    },
  },
  argTypes: {
    options: {
      control: "object",
      description:
        "Array of option objects, e.g. `[{ id: '1', name: 'Option 1' }]",
    },
  },
};

export const Primary = {
  args: {
    options: defaultOptions,
  },
  parameters: {
    docs: {
      description: {
        story: "Basic card view with the typical number of options.",
      },
    },
  },
};

export const ManyOptions = {
  args: {
    options: [
      ...defaultOptions,
      { id: 5, name: "Investments" },
      { id: 6, name: "Credits" },
      { id: 7, name: "Settings" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Variant with more options.",
      },
    },
  },
};

export const SingleOption = {
  args: {
    options: [{ id: 1, name: "Money transfer" }],
  },
  parameters: {
    docs: {
      description: {
        story: "Variant with single option.",
      },
    },
  },
};

export const Empty = {
  args: {
    options: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A variant that tests a state where there are no options available.",
      },
    },
  },
};

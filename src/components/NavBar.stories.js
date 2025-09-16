import NavBar from "./NavBar.vue";

export default {
  // Title that will appear in the Storybook sidebar. Using "/" creates nesting
  title: "Components/NavBar",
  // Our Component that we are documenting
  component: NavBar,
  // Automatically generate documentation based on component props
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The application’s main top bar is a static header that remains visible at all times. It displays the application logo along with information about the logged-in user, including their full name and initials.",
      },
    },
  },
  // Definition of controls (inputs) in the props panel
  argTypes: {
    name: {
      description: "Full user name to display in the NavBar",
      control: "text",
    },
    initials: {
      description: "The user's initials that will appear on the avatar",
      control: "text",
    },
  },
};

// Named exports are individual "stories", i.e. variants of the component

export const Primary = {
  args: {
    name: "Jhon Doe",
    initials: "JD",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is a basic version of the navigation bar with typical user data.",
      },
    },
  },
};

export const LongName = {
  args: {
    name: "José Luis Rodríguez",
    initials: "JLR",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A version of the navigation bar for the user with a longer name to see how the component handles text overflow.",
      },
    },
  },
};

export const SingleInitial = {
  args: {
    name: "Administrator",
    initials: "A",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A version for a user who has only one initial, e.g. system administrator.",
      },
    },
  },
};

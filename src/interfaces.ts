// Iconst interface
export interface Iicon {
  fill?: any;
  opacity?: any;
}

// MenuItem component
export interface IMenuItem {
  active: boolean;
  title: string;
  handleClick: (newItem: string) => void;
}
// Sidebar component
export interface ISidebar {
  onChange: (value: string) => void;
  selectedItem?: string;
}

// Header component
export interface IHeader {
  title?: string;
}

// App component
export interface IApp {
  handleSelectedItem: (value: string) => void;
}

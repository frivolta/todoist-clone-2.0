// Iconst interface
export interface Iicon {
  fill?: any;
  opacity?: any;
}

// MenuItem component
export interface IMenuItem {
  active?: boolean;
  title?: string;
  onClick: (value: string) => boolean;
}

export interface ISidebar {
  onChange?: (value: string) => void;
  selectedItem?: string;
}

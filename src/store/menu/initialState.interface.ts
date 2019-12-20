export interface MenuItem {
  id: string;
  name: string;
}

export interface MenuInitialState {
  menuItems: MenuItem[];
  loading: boolean;
  error: boolean;
}

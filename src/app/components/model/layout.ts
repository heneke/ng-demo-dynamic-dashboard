export interface WidgetDefinition {
  name: string;
}

export interface Positioned<T> {
  item: T;
  column: number;
  order: number;
}

export interface ColumnDefinition {
  index: number;
  weight: number;
}

export interface Layout {
  columns: ColumnDefinition[];
  widgets: Positioned<WidgetDefinition>[];
}

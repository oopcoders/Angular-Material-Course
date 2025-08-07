import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

const PRODUCT_DATA: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 25 },
  { id: 2, name: 'Desk Chair', category: 'Furniture', price: 149.99, stock: 100 },
  { id: 3, name: 'Wireless Mouse', category: 'Electronics', price: 39.99, stock: 75 },
  { id: 4, name: 'Notebook', category: 'Stationery', price: 5.99, stock: 200 },
  { id: 5, name: 'Monitor', category: 'Electronics', price: 199.99, stock: 40 },
  { id: 6, name: 'Pen Set', category: 'Stationery', price: 9.99, stock: 150 },
  { id: 7, name: 'Smartphone', category: 'Electronics', price: 699.99, stock: 50 },
  { id: 8, name: 'Desk Lamp', category: 'Furniture', price: 29.99, stock: 80 },
  { id: 9, name: 'Backpack', category: 'Accessories', price: 59.99, stock: 120 },
  { id: 10, name: 'Tablet', category: 'Electronics', price: 399.99, stock: 30 },
  { id: 11, name: 'Standing Desk', category: 'Furniture', price: 299.99, stock: 15 },
  { id: 12, name: 'Stapler', category: 'Stationery', price: 12.49, stock: 90 },
  { id: 13, name: 'Gaming Headset', category: 'Electronics', price: 89.99, stock: 60 },
  { id: 14, name: 'Whiteboard', category: 'Office Supplies', price: 49.99, stock: 35 },
  { id: 15, name: 'Water Bottle', category: 'Accessories', price: 14.99, stock: 200 }
];

@Component({
  selector: 'app-data-display',
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent implements AfterViewInit {
  columnsToDisplay: string[] = ['id', 'name', 'category', 'price', 'stock'];

  dataSource = new MatTableDataSource<Product>(PRODUCT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
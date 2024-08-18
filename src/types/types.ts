// TODO - Move Types to this file

// 1. Interface for a User
export interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }
  
  // 2. Interface for a Product
  export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
    inStock: boolean;
  }
  
  // 3. Type alias for an Order Status
  export type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';
  
  // 4. Interface for an Order
  export interface Order {
    orderId: number;
    userId: number;
    productIds: number[];
    status: OrderStatus;
    totalAmount: number;
  }
  
  // 5. Type alias for a Response from an API
  export type ApiResponse<T> = {
    data: T;
    error?: string;
    status: number;
  };
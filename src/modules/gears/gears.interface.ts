export interface GearPaylod {
    name: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    available: boolean;
    stock: number;
}

export interface UpdatePayload {
    name?: string;
    description?: string;
    price?: number;
    category?: string;
    brand?: string;
    available?: boolean;
    stock?: number;
}

export interface FilterGear{
    category?: string;
    brand?: string;
    price?:string;
}
